import { useRef, useState } from 'react';

const linkedInUrl = 'https://www.linkedin.com/company/flying-power-cables-applications/';

const ROLE = 'UAV Robotics Software Intern';
const MAX_RESUME_BYTES = 2 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const initialForm = {
  role: ROLE,
  fullName: '',
  email: '',
  mobile: '',
  currentLocation: '',
  institution: '',
  qualification: '',
  areaOfStudy: '',
  graduationYear: '',
  joiningDate: '',
  duration: '',
  onsite: '',
  relocate: '',
  laptop: '',
  linkedIn: '',
  github: '',
  portfolio: '',
  motivation: '',
  project: '',
  skills: '',
  consent: false,
  website: '',
};

function RequiredMark() {
  return <span aria-hidden="true" className="text-error"> *</span>;
}

function FieldError({ id, message }) {
  if (!message) return null;

  return (
    <p className="mt-2 text-sm text-error" id={`${id}-error`} role="alert">
      {message}
    </p>
  );
}

function TextField({ error, id, label, required = false, className = '', ...props }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-white" htmlFor={id}>
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      <input
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="w-full border border-outline-variant bg-surface-container-low px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        id={id}
        required={required}
        {...props}
      />
      <FieldError id={id} message={error} />
    </div>
  );
}

function SelectField({ children, error, id, label, required = false, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white" htmlFor={id}>
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      <select
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="w-full border border-outline-variant bg-surface-container-low px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        id={id}
        required={required}
        {...props}
      >
        {children}
      </select>
      <FieldError id={id} message={error} />
    </div>
  );
}

function TextAreaField({ error, id, label, required = false, hint, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white" htmlFor={id}>
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      {hint ? <p className="mb-2 text-sm text-on-surface-variant" id={`${id}-hint`}>{hint}</p> : null}
      <textarea
        aria-describedby={[hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined}
        aria-invalid={Boolean(error)}
        className="min-h-36 w-full resize-y border border-outline-variant bg-surface-container-low px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        id={id}
        required={required}
        {...props}
      />
      <FieldError id={id} message={error} />
    </div>
  );
}

function ChoiceField({ error, id, label, options, required = false, value, onChange }) {
  return (
    <fieldset aria-describedby={error ? `${id}-error` : undefined} className="min-w-0" id={id} tabIndex="-1">
      <legend className="mb-3 text-sm font-medium text-white">
        {label}
        {required ? <RequiredMark /> : null}
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            className={`cursor-pointer border px-4 py-3 text-sm transition ${
              value === option
                ? 'border-primary bg-primary-container/20 text-white'
                : 'border-outline-variant bg-surface-container-low text-on-surface-variant hover:border-primary/70'
            }`}
            key={option}
          >
            <input
              checked={value === option}
              className="mr-2 accent-[#2e5bff]"
              name={id}
              onChange={() => onChange(option)}
              required={required}
              type="radio"
              value={option}
            />
            {option}
          </label>
        ))}
      </div>
      <FieldError id={id} message={error} />
    </fieldset>
  );
}

function ApplicationHeader() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#131313]/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a aria-label="FPCA Technologies home" href="/">
          <img alt="FPCA Technologies Private Limited logo" className="h-8 w-auto rounded-sm object-contain sm:h-10" src="/fpca-logo.png" />
        </a>
        <div className="flex items-center gap-4 text-sm sm:text-base">
          <a className="text-gray-400 transition-colors hover:text-white" href="/career">Careers</a>
          <a className="bg-primary-container px-4 py-2 font-medium text-on-primary-container sm:px-6" href="mailto:admin@fpcatechnologies.com">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function ApplicationFooter() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#131313] py-10 text-sm">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 text-gray-500 md:flex-row md:items-center">
        <div>
          <img alt="FPCA Technologies Private Limited logo" className="mb-3 h-9 w-auto object-contain" src="/fpca-logo.png" />
          <p>FPCA Technologies Private Limited</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a className="hover:text-primary" href="/">Home</a>
          <a className="hover:text-primary" href="/career">Careers</a>
          <a className="inline-flex items-center gap-2 hover:text-[#0A66C2]" href={linkedInUrl} rel="noreferrer" target="_blank">
            <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#0A66C2] text-[11px] font-bold leading-none text-white">in</span>
            <span>LinkedIn</span>
          </a>
          <a className="hover:text-primary" href="mailto:admin@fpcatechnologies.com">admin@fpcatechnologies.com</a>
        </div>
      </div>
    </footer>
  );
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = () => reject(new Error('We could not read the selected resume.'));
    reader.readAsDataURL(file);
  });
}

function isValidHttpUrl(value) {
  if (!value) return true;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function validateResume(file) {
  if (!file) return 'Please select your resume or CV.';
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!['pdf', 'doc', 'docx'].includes(extension) || !ALLOWED_RESUME_TYPES.includes(file.type)) {
    return 'Upload a PDF, DOC, or DOCX file.';
  }
  if (file.size > MAX_RESUME_BYTES) return 'The resume must be 2 MB or smaller.';
  return '';
}

export default function CareerApplicationPage() {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const [result, setResult] = useState(null);
  const submissionStartedAt = useRef(Date.now());

  const update = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const selectChoice = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validate = () => {
    const next = {};
    const requiredFields = {
      fullName: 'Enter your full name.',
      email: 'Enter your email address.',
      mobile: 'Enter your mobile number.',
      currentLocation: 'Enter your current location.',
      institution: 'Enter your college or institution.',
      qualification: 'Select your qualification.',
      areaOfStudy: 'Enter your branch or area of study.',
      graduationYear: 'Enter your graduation year.',
      joiningDate: 'Select your earliest available joining date.',
      duration: 'Select your available internship duration.',
      onsite: 'Choose whether you can work full-time on-site.',
      relocate: 'Choose your relocation availability.',
      laptop: 'Choose whether you have a laptop available.',
      motivation: 'Tell us why you want to join FPCA Technologies.',
      project: 'Describe a relevant project.',
    };

    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!String(form[field]).trim()) next[field] = message;
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    if (form.mobile && !/^\+?[0-9\s().-]{7,25}$/.test(form.mobile.trim())) {
      next.mobile = 'Enter a valid Indian or international mobile number.';
    }
    if (form.graduationYear && !/^\d{4}$/.test(form.graduationYear)) {
      next.graduationYear = 'Enter a four-digit graduation year.';
    }
    ['linkedIn', 'github', 'portfolio'].forEach((field) => {
      if (!isValidHttpUrl(form[field].trim())) next[field] = 'Enter a complete URL beginning with http:// or https://.';
    });
    const motivationLength = form.motivation.trim().length;
    if (motivationLength && motivationLength < 50) next.motivation = 'Please enter at least 50 characters.';
    if (motivationLength > 1500) next.motivation = 'Please keep this answer within 1,500 characters.';
    const projectLength = form.project.trim().length;
    if (projectLength && projectLength < 50) next.project = 'Please enter at least 50 characters.';
    if (projectLength > 2000) next.project = 'Please keep this answer within 2,000 characters.';
    const resumeError = validateResume(resume);
    if (resumeError) next.resume = resumeError;
    if (!form.consent) next.consent = 'You must confirm the recruitment consent statement.';

    setErrors(next);
    if (Object.keys(next).length) {
      requestAnimationFrame(() => {
        const firstField = document.getElementById(Object.keys(next)[0]);
        firstField?.focus();
        firstField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting' || !validate()) return;

    setStatus('submitting');
    setSubmitError('');

    try {
      const resumeBase64 = await fileToBase64(resume);
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          resume: {
            filename: resume.name,
            mimeType: resume.type,
            base64: resumeBase64,
          },
          submissionStartedAt: submissionStartedAt.current,
          submissionTimestamp: new Date().toISOString(),
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || 'Your application could not be submitted. Please try again.');
      }
      setResult(payload);
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(error.message || 'Your application could not be submitted. Please try again.');
      setStatus('error');
    }
  };

  const inputValue = (field) => ({
    value: form[field],
    onChange: update(field),
  });

  return (
    <>
      <ApplicationHeader />
      <main className="min-h-screen bg-background pt-16 sm:pt-20">
        <section className="relative overflow-hidden border-b border-outline-variant/20">
          <div className="grid-pattern pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,228,117,0.12),transparent_30%),linear-gradient(135deg,rgba(46,91,255,0.18),transparent_45%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:py-20">
            <a className="mb-8 inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary" href="/career">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Careers
            </a>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-primary">Careers at FPCA</p>
                <h1 className="mb-6 font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Apply to <span className="text-primary-container">FPCA Technologies</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                  Tell us about your experience, availability, and the projects that shaped how you build.
                </p>
              </div>
              <aside className="border border-outline-variant/30 bg-surface-container-high p-6 lg:col-span-5">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-tertiary">Selected role</p>
                <h2 className="mb-5 font-headline text-2xl font-bold">{ROLE}</h2>
                <dl className="grid gap-3 text-sm text-on-surface-variant sm:grid-cols-2">
                  <div><dt className="text-white">Type</dt><dd>Internship</dd></div>
                  <div><dt className="text-white">Duration</dt><dd>3 months</dd></div>
                  <div><dt className="text-white">Mode</dt><dd>Full-time, on-site</dd></div>
                  <div><dt className="text-white">Location</dt><dd>Maker Village, KINFRA Hi-Tech Park, Kalamassery, Kochi, Kerala</dd></div>
                  <div className="sm:col-span-2"><dt className="text-white">Field</dt><dd>UAV autonomy, robotics software, flight-control integration, simulation and field testing</dd></div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-20">
          {status === 'success' ? (
            <div className="border border-tertiary/50 bg-tertiary/10 p-7 text-center sm:p-12" role="status">
              <span aria-hidden="true" className="material-symbols-outlined mb-5 text-6xl text-tertiary">task_alt</span>
              <h2 className="mb-4 font-headline text-3xl font-bold">Application submitted successfully</h2>
              <p className="mb-2 text-on-surface-variant">Your application reference number is:</p>
              <p className="mb-6 break-all font-headline text-2xl font-bold text-white">{result?.reference}</p>
              <p className="mb-8 text-on-surface-variant">A confirmation copy was sent to {form.email}.</p>
              <a className="inline-flex bg-primary-container px-7 py-3 font-semibold text-on-primary-container" href="/career">
                Return to Careers
              </a>
            </div>
          ) : (
            <form className="space-y-8" noValidate onSubmit={handleSubmit}>
              <p className="text-sm text-on-surface-variant"><span className="text-error">*</span> Required fields</p>

              <section className="border border-outline-variant/20 bg-surface-container-high p-5 sm:p-8">
                <h2 className="mb-6 font-headline text-2xl font-bold">Personal information</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField autoComplete="name" error={errors.fullName} id="fullName" label="Full name" required type="text" {...inputValue('fullName')} />
                  <TextField autoComplete="email" error={errors.email} id="email" label="Email address" required type="email" {...inputValue('email')} />
                  <TextField autoComplete="tel" error={errors.mobile} id="mobile" inputMode="tel" label="Mobile number" placeholder="+91 98765 43210" required type="tel" {...inputValue('mobile')} />
                  <TextField autoComplete="address-level2" error={errors.currentLocation} id="currentLocation" label="Current location" required type="text" {...inputValue('currentLocation')} />
                </div>
              </section>

              <section className="border border-outline-variant/20 bg-surface-container-high p-5 sm:p-8">
                <h2 className="mb-6 font-headline text-2xl font-bold">Education</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField error={errors.institution} id="institution" label="College or institution" required type="text" {...inputValue('institution')} />
                  <SelectField error={errors.qualification} id="qualification" label="Qualification" required {...inputValue('qualification')}>
                    <option value="">Select qualification</option>
                    {['Diploma', 'BTech', 'BE', 'MTech', 'MSc', 'BSc', 'Other'].map((option) => <option key={option}>{option}</option>)}
                  </SelectField>
                  <TextField error={errors.areaOfStudy} id="areaOfStudy" label="Branch or area of study" required type="text" {...inputValue('areaOfStudy')} />
                  <TextField error={errors.graduationYear} id="graduationYear" inputMode="numeric" label="Graduation year" max="2100" min="1900" required type="number" {...inputValue('graduationYear')} />
                </div>
              </section>

              <section className="border border-outline-variant/20 bg-surface-container-high p-5 sm:p-8">
                <h2 className="mb-6 font-headline text-2xl font-bold">Availability</h2>
                <div className="grid gap-7">
                  <div className="grid gap-6 md:grid-cols-2">
                    <TextField error={errors.joiningDate} id="joiningDate" label="Earliest available joining date" required type="date" {...inputValue('joiningDate')} />
                    <SelectField error={errors.duration} id="duration" label="Available internship duration" required {...inputValue('duration')}>
                      <option value="">Select duration</option>
                      {['1 month', '2 months', '3 months', '4–6 months', 'More than 6 months'].map((option) => <option key={option}>{option}</option>)}
                    </SelectField>
                  </div>
                  <ChoiceField error={errors.onsite} id="onsite" label="Can you work full-time on-site in Kochi?" onChange={(value) => selectChoice('onsite', value)} options={['Yes', 'No']} required value={form.onsite} />
                  <ChoiceField error={errors.relocate} id="relocate" label="Are you willing to relocate to Kochi if required?" onChange={(value) => selectChoice('relocate', value)} options={['Yes', 'No', 'Already located nearby']} required value={form.relocate} />
                  <ChoiceField error={errors.laptop} id="laptop" label="Do you have a laptop you can use during the internship?" onChange={(value) => selectChoice('laptop', value)} options={['Yes', 'No']} required value={form.laptop} />
                </div>
              </section>

              <section className="border border-outline-variant/20 bg-surface-container-high p-5 sm:p-8">
                <h2 className="mb-6 font-headline text-2xl font-bold">Professional links</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <TextField error={errors.linkedIn} id="linkedIn" label="LinkedIn profile (optional)" placeholder="https://linkedin.com/in/..." type="url" {...inputValue('linkedIn')} />
                  <TextField error={errors.github} id="github" label="GitHub profile (optional)" placeholder="https://github.com/..." type="url" {...inputValue('github')} />
                  <TextField className="md:col-span-2" error={errors.portfolio} id="portfolio" label="Portfolio or project link (optional)" placeholder="https://..." type="url" {...inputValue('portfolio')} />
                </div>
              </section>

              <section className="border border-outline-variant/20 bg-surface-container-high p-5 sm:p-8">
                <h2 className="mb-6 font-headline text-2xl font-bold">Application questions</h2>
                <div className="grid gap-6">
                  <TextAreaField error={errors.motivation} hint={`${form.motivation.length}/1,500 characters · minimum 50`} id="motivation" label="Why do you want to join FPCA Technologies?" maxLength="1500" minLength="50" required {...inputValue('motivation')} />
                  <TextAreaField error={errors.project} hint={`${form.project.length}/2,000 characters · minimum 50`} id="project" label="Describe one relevant robotics, drone, embedded-system or software project." maxLength="2000" minLength="50" required {...inputValue('project')} />
                  <TextAreaField error={errors.skills} hint="For example: Python, C++, ROS 2, Raspberry Pi, Pixhawk, MAVLink, ArduPilot, PX4, Linux, computer vision" id="skills" label="Relevant skills (optional)" {...inputValue('skills')} />
                </div>
              </section>

              <section className="border border-outline-variant/20 bg-surface-container-high p-5 sm:p-8">
                <h2 className="mb-3 font-headline text-2xl font-bold">Resume or CV<RequiredMark /></h2>
                <p className="mb-5 text-sm text-on-surface-variant">PDF, DOC, or DOCX · maximum 2 MB</p>
                <label className="inline-flex cursor-pointer items-center gap-3 border border-primary bg-primary-container/10 px-5 py-3 font-medium text-white hover:bg-primary-container/20" htmlFor="resume">
                  <span aria-hidden="true" className="material-symbols-outlined">upload_file</span>
                  Choose file
                </label>
                <input
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  aria-describedby={errors.resume ? 'resume-error' : 'resume-filename'}
                  aria-invalid={Boolean(errors.resume)}
                  className="sr-only"
                  id="resume"
                  onChange={(event) => {
                    const selected = event.target.files?.[0] || null;
                    setResume(selected);
                    setErrors((current) => ({ ...current, resume: validateResume(selected) }));
                  }}
                  required
                  type="file"
                />
                <p className="mt-3 break-all text-sm text-on-surface-variant" id="resume-filename">
                  {resume ? `Selected: ${resume.name}` : 'No file selected'}
                </p>
                <FieldError id="resume" message={errors.resume} />
              </section>

              <section className="border border-outline-variant/20 bg-surface-container-high p-5 sm:p-8">
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-white" htmlFor="consent">
                  <input
                    aria-describedby={errors.consent ? 'consent-error privacy-note' : 'privacy-note'}
                    aria-invalid={Boolean(errors.consent)}
                    checked={form.consent}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#2e5bff]"
                    id="consent"
                    onChange={update('consent')}
                    required
                    type="checkbox"
                  />
                  <span>I confirm that the information provided is accurate and consent to FPCA Technologies using it for recruitment purposes.<RequiredMark /></span>
                </label>
                <FieldError id="consent" message={errors.consent} />
                <p className="mt-4 text-sm text-on-surface-variant" id="privacy-note">Application information will be used only for recruitment and candidate communication.</p>
              </section>

              <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                <label htmlFor="website">Website</label>
                <input autoComplete="off" id="website" tabIndex="-1" type="text" {...inputValue('website')} />
              </div>

              {submitError ? (
                <div className="border border-error/50 bg-error-container/30 p-4 text-on-error-container" role="alert">
                  <p className="font-semibold">Your application was not submitted.</p>
                  <p className="mt-1">{submitError}</p>
                </div>
              ) : null}

              <button
                className="w-full bg-primary-container px-8 py-4 text-lg font-bold text-on-primary-container transition hover:shadow-[0_0_24px_rgba(46,91,255,0.45)] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                disabled={status === 'submitting'}
                type="submit"
              >
                {status === 'submitting' ? 'Submitting Application…' : 'Submit Application'}
              </button>
            </form>
          )}
        </section>
      </main>
      <ApplicationFooter />
    </>
  );
}
