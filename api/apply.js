import { randomBytes } from 'node:crypto';

const ROLE = 'UAV Robotics Software Intern';
const MAX_RESUME_BYTES = 2 * 1024 * 1024;
const MAX_REQUEST_BYTES = 3_500_000;
const MIN_COMPLETION_TIME_MS = 3_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const ALLOWED_FILES = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

const requiredTextFields = [
  'fullName',
  'email',
  'mobile',
  'currentLocation',
  'institution',
  'qualification',
  'areaOfStudy',
  'graduationYear',
  'joiningDate',
  'duration',
  'onsite',
  'relocate',
  'laptop',
  'motivation',
  'project',
];

const fieldLabels = {
  role: 'Role',
  fullName: 'Full name',
  email: 'Email address',
  mobile: 'Mobile number',
  currentLocation: 'Current location',
  institution: 'College or institution',
  qualification: 'Qualification',
  areaOfStudy: 'Branch or area of study',
  graduationYear: 'Graduation year',
  joiningDate: 'Earliest joining date',
  duration: 'Available internship duration',
  onsite: 'Can work full-time on-site in Kochi',
  relocate: 'Relocation availability',
  laptop: 'Laptop available',
  linkedIn: 'LinkedIn profile',
  github: 'GitHub profile',
  portfolio: 'Portfolio or project link',
  motivation: 'Why FPCA Technologies',
  project: 'Relevant project',
  skills: 'Relevant skills',
  submissionTimestamp: 'Client submission timestamp',
};

function cleanString(value, maxLength = 4_000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value) {
  if (!value) return true;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isExpectedFileSignature(buffer, extension) {
  if (extension === 'pdf') return buffer.subarray(0, 4).toString() === '%PDF';
  if (extension === 'doc') return buffer.subarray(0, 8).equals(Buffer.from('d0cf11e0a1b11ae1', 'hex'));
  if (extension === 'docx') return buffer[0] === 0x50 && buffer[1] === 0x4b;
  return false;
}

function parseBody(req) {
  if (typeof req.body === 'string') return JSON.parse(req.body);
  if (req.body && typeof req.body === 'object') return req.body;
  throw new Error('Missing request body');
}

function validateApplication(input) {
  const application = {};
  Object.keys(fieldLabels).forEach((field) => {
    application[field] = cleanString(input[field], field === 'motivation' ? 1_500 : field === 'project' ? 2_000 : 1_000);
  });
  application.role = ROLE;

  for (const field of requiredTextFields) {
    if (!application[field]) return { error: 'Please complete all required fields.' };
  }
  if (!isValidEmail(application.email)) return { error: 'Please enter a valid email address.' };
  if (!/^\+?[0-9\s().-]{7,25}$/.test(application.mobile)) return { error: 'Please enter a valid mobile number.' };
  if (!/^\d{4}$/.test(application.graduationYear)) return { error: 'Please enter a valid graduation year.' };
  if (!['Diploma', 'BTech', 'BE', 'MTech', 'MSc', 'BSc', 'Other'].includes(application.qualification)) {
    return { error: 'Please select a valid qualification.' };
  }
  if (!['1 month', '2 months', '3 months', '4–6 months', 'More than 6 months'].includes(application.duration)) {
    return { error: 'Please select a valid internship duration.' };
  }
  if (!['Yes', 'No'].includes(application.onsite) || !['Yes', 'No'].includes(application.laptop)) {
    return { error: 'Please complete all availability questions.' };
  }
  if (!['Yes', 'No', 'Already located nearby'].includes(application.relocate)) {
    return { error: 'Please select a valid relocation option.' };
  }
  if (![application.linkedIn, application.github, application.portfolio].every(isValidUrl)) {
    return { error: 'Please enter complete and valid professional URLs.' };
  }
  if (application.motivation.length < 50 || application.motivation.length > 1_500) {
    return { error: 'Your motivation answer must contain 50 to 1,500 characters.' };
  }
  if (application.project.length < 50 || application.project.length > 2_000) {
    return { error: 'Your project answer must contain 50 to 2,000 characters.' };
  }
  if (input.consent !== true) return { error: 'Recruitment consent is required.' };

  const resume = input.resume;
  if (!resume || typeof resume !== 'object') return { error: 'Please attach your resume or CV.' };
  const filename = cleanString(resume.filename, 180);
  const mimeType = cleanString(resume.mimeType, 120);
  const base64 = typeof resume.base64 === 'string' ? resume.base64.trim() : '';
  const extension = filename.split('.').pop()?.toLowerCase();

  if (!extension || ALLOWED_FILES[extension] !== mimeType) {
    return { error: 'The resume must be a PDF, DOC, or DOCX file.' };
  }
  if (!base64 || !/^[A-Za-z0-9+/]+={0,2}$/.test(base64)) {
    return { error: 'The resume file could not be read.' };
  }

  const resumeBuffer = Buffer.from(base64, 'base64');
  if (!resumeBuffer.length || resumeBuffer.length > MAX_RESUME_BYTES) {
    return { error: 'The resume must be 2 MB or smaller.' };
  }
  if (!isExpectedFileSignature(resumeBuffer, extension)) {
    return { error: 'The resume contents do not match the selected file type.' };
  }

  return {
    application,
    resume: {
      base64: resumeBuffer.toString('base64'),
      filename,
      mimeType,
      size: resumeBuffer.length,
    },
  };
}

function applicationRows(application) {
  return Object.entries(fieldLabels)
    .map(([field, label]) => {
      const value = application[field] || 'Not provided';
      const linkedValue = ['linkedIn', 'github', 'portfolio'].includes(field) && application[field]
        ? `<a href="${escapeHtml(value)}">${escapeHtml(value)}</a>`
        : escapeHtml(value).replaceAll('\n', '<br>');
      return `<tr><th style="padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb">${escapeHtml(label)}</th><td style="padding:10px;border-bottom:1px solid #e5e7eb">${linkedValue}</td></tr>`;
    })
    .join('');
}

function createRecruitmentEmail(application, resume, reference) {
  return {
    from: process.env.APPLICATION_FROM_EMAIL,
    to: [process.env.APPLICATION_TO_EMAIL],
    reply_to: application.email,
    subject: `New FPCA application: ${ROLE} — ${application.fullName}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#111827">
        <h1>New FPCA careers application</h1>
        <p><strong>Reference:</strong> ${escapeHtml(reference)}</p>
        <table style="width:100%;border-collapse:collapse">${applicationRows(application)}</table>
        <p style="margin-top:24px">Resume attached: ${escapeHtml(resume.filename)} (${Math.ceil(resume.size / 1024)} KB)</p>
      </div>
    `,
    attachments: [{ content: resume.base64, filename: resume.filename }],
  };
}

function createConfirmationEmail(application, reference) {
  return {
    from: process.env.APPLICATION_FROM_EMAIL,
    to: [application.email],
    subject: `FPCA Technologies application received — ${reference}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">
        <h1>Application received</h1>
        <p>Hello ${escapeHtml(application.fullName)},</p>
        <p>We received your application for the <strong>${escapeHtml(ROLE)}</strong> internship.</p>
        <p>Your application reference is <strong>${escapeHtml(reference)}</strong>.</p>
        <p>FPCA Technologies will contact shortlisted candidates. Please do not reply with sensitive documents unless our recruitment team requests them.</p>
        <p>Thank you,<br>FPCA Technologies Private Limited</p>
      </div>
    `,
  };
}

async function sendResendEmail(message) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error('Email delivery failed');
    error.status = response.status;
    error.providerMessage = payload.message || payload.name || 'Unknown Resend error';
    throw error;
  }
  return payload.id;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const contentLength = Number(req.headers['content-length'] || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return res.status(413).json({ error: 'The application is too large. Please use a resume of 2 MB or smaller.' });
  }

  let input;
  try {
    input = parseBody(req);
  } catch {
    return res.status(400).json({ error: 'The application request is not valid JSON.' });
  }
  if (Buffer.byteLength(JSON.stringify(input), 'utf8') > MAX_REQUEST_BYTES) {
    return res.status(413).json({ error: 'The application is too large. Please use a resume of 2 MB or smaller.' });
  }

  if (cleanString(input.website, 200)) {
    return res.status(422).json({ error: 'The application could not be submitted.' });
  }

  const startedAt = Number(input.submissionStartedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_COMPLETION_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
    return res.status(422).json({ error: 'Please review the form and submit it again.' });
  }

  const validated = validateApplication(input);
  if (validated.error) return res.status(422).json({ error: validated.error });

  if (!process.env.RESEND_API_KEY || !process.env.APPLICATION_FROM_EMAIL || !process.env.APPLICATION_TO_EMAIL) {
    console.error('Careers application email configuration is incomplete.');
    return res.status(503).json({ error: 'Applications are temporarily unavailable. Please try again later.' });
  }

  const reference = `FPCA-CAREERS-${new Date().getUTCFullYear()}-${randomBytes(3).toString('hex').toUpperCase()}`;
  const { application, resume } = validated;

  try {
    const [recruitmentEmailId, confirmationEmailId] = await Promise.all([
      sendResendEmail(createRecruitmentEmail(application, resume, reference)),
      sendResendEmail(createConfirmationEmail(application, reference)),
    ]);
    console.info('FPCA careers application delivered.', {
      confirmationEmailId,
      recruitmentEmailId,
      reference,
      resumeFilename: resume.filename,
      resumeSize: resume.size,
    });
    return res.status(200).json({ reference });
  } catch (error) {
    console.error('FPCA careers application delivery failed.', {
      providerMessage: error.providerMessage,
      reference,
      status: error.status,
    });
    return res.status(502).json({ error: 'Your application could not be delivered. Please try again.' });
  }
}

// TODO: Add a persistent rate limiter such as Vercel KV or Upstash if application volume increases.
