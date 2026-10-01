import { randomBytes } from 'node:crypto';

const MAX_REQUEST_BYTES = 20_000;
const MIN_COMPLETION_TIME_MS = 1_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;

function cleanString(value, maxLength) {
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

function parseBody(req) {
  if (typeof req.body === 'string') return JSON.parse(req.body);
  if (req.body && typeof req.body === 'object') return req.body;
  throw new Error('Missing request body');
}

function validateInquiry(input) {
  const inquiry = {
    name: cleanString(input.name, 120),
    phone: cleanString(input.phone, 25),
    email: cleanString(input.email, 254),
    address: cleanString(input.address, 1_000),
  };

  if (Object.values(inquiry).some((value) => !value)) {
    return { error: 'Please complete all fields.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    return { error: 'Please enter a valid email address.' };
  }
  if (!/^\+?[0-9\s().-]{7,25}$/.test(inquiry.phone)) {
    return { error: 'Please enter a valid phone number.' };
  }

  return { inquiry };
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
    return res.status(413).json({ error: 'The enquiry is too large.' });
  }

  let input;
  try {
    input = parseBody(req);
  } catch {
    return res.status(400).json({ error: 'The enquiry request is not valid JSON.' });
  }
  if (Buffer.byteLength(JSON.stringify(input), 'utf8') > MAX_REQUEST_BYTES) {
    return res.status(413).json({ error: 'The enquiry is too large.' });
  }
  if (cleanString(input.website, 200)) {
    return res.status(422).json({ error: 'The enquiry could not be submitted.' });
  }

  const startedAt = Number(input.submissionStartedAt);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_COMPLETION_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
    return res.status(422).json({ error: 'Please review the form and submit it again.' });
  }

  const validated = validateInquiry(input);
  if (validated.error) return res.status(422).json({ error: validated.error });

  const fromEmail = process.env.DOCKING_INQUIRY_FROM_EMAIL || process.env.APPLICATION_FROM_EMAIL;
  const toEmail = process.env.DOCKING_INQUIRY_TO_EMAIL || process.env.APPLICATION_TO_EMAIL;
  if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
    console.error('Drone docking enquiry email configuration is incomplete.');
    return res.status(503).json({ error: 'Enquiries are temporarily unavailable. Please try again later.' });
  }

  const reference = `FPCA-DOCK-${new Date().getUTCFullYear()}-${randomBytes(3).toString('hex').toUpperCase()}`;
  const { inquiry } = validated;
  const rows = [
    ['Name', inquiry.name],
    ['Phone number', inquiry.phone],
    ['Email', inquiry.email],
    ['Address', inquiry.address],
  ].map(([label, value]) => `<tr><th style="padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb">${escapeHtml(label)}</th><td style="padding:10px;border-bottom:1px solid #e5e7eb">${escapeHtml(value).replaceAll('\n', '<br>')}</td></tr>`).join('');

  try {
    const emailId = await sendResendEmail({
      from: fromEmail,
      to: [toEmail],
      reply_to: inquiry.email,
      subject: `Drone docking enquiry — ${inquiry.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#111827">
          <h1>New drone docking enquiry</h1>
          <p><strong>Reference:</strong> ${escapeHtml(reference)}</p>
          <table style="width:100%;border-collapse:collapse">${rows}</table>
        </div>
      `,
    });
    console.info('FPCA drone docking enquiry delivered.', { emailId, reference });
    return res.status(200).json({ reference });
  } catch (error) {
    console.error('FPCA drone docking enquiry delivery failed.', {
      providerMessage: error.providerMessage,
      reference,
      status: error.status,
    });
    return res.status(502).json({ error: 'Your enquiry could not be delivered. Please try again.' });
  }
}
