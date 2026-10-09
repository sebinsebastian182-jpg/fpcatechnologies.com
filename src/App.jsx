import { useEffect, useRef, useState } from 'react';
import CareerApplicationPage from './CareerApplicationPage.jsx';
import { faqItems } from './seo.js';

const openings = [
  {
    title: 'UAV Robotics Software Intern',
    type: 'Internship',
    duration: '3 months',
    mode: 'On-site',
    location: 'Maker Village, KINFRA Hi-Tech Park, Kalamassery, Kochi',
    focus: 'UAV autonomy, robotics software, flight control integration, simulation, and field testing.',
  },
];

const companyName = 'FPCA TECHNOLOGIES Private Limited';
const contactEmail = 'admin@fpcatechnologies.com';
const careersEmail = contactEmail;
const logoSrc = '/fpca-logo.png';
const applicationFormUrl = '/career/apply';
const linkedInUrl = 'https://www.linkedin.com/company/flying-power-cables-applications/';
const dockingServicePath = '/drone-docking-systems';
const dockingVideoSrc = '/drone-docking-port.mp4';
const dockingVideoPoster = '/drone-docking-port-poster.jpg';
const dockingInquiryUrl = `mailto:${contactEmail}?subject=${encodeURIComponent('Drone docking system enquiry')}&body=${encodeURIComponent('Hello FPCA Technologies,\n\nWe would like to discuss a drone docking requirement.\n\nApplication/use case:\nDrone platform:\nRequired docking functions:\nDeployment location/environment:\nTarget timeline:\n\nRegards,\n')}`;

const responsibilities = [
  'Develop software for autonomous UAV operations.',
  'Work with ROS 2, Python, and C++ for robotics software development.',
  'Integrate GPS, LiDAR, cameras, UWB, telemetry, and other sensing systems.',
  'Support Pixhawk flight controller integration using MAVLink, ArduPilot or PX4, and companion computers such as Raspberry Pi.',
  'Develop and test control algorithms for autonomous flight and tether management.',
  'Debug software through laboratory checks and outdoor flight testing.',
  'Document experiments and collaborate with hardware and mechanical teams to improve system performance.',
];

const qualifications = [
  "Pursuing or recently completed a Diploma or Bachelor's degree in Robotics, Mechatronics, Electronics, Electrical Engineering, Mechanical Engineering, Computer Science, or a related field.",
  'Basic knowledge of robotics and autonomous systems.',
  'Familiarity with Linux, especially Ubuntu, is preferred.',
  'Exposure to ROS or ROS 2, Raspberry Pi, Pixhawk, MAVLink, ArduPilot, or PX4 is a plus.',
  'Strong interest in UAVs, drones, robotics, and autonomous navigation.',
  'Problem-solving mindset, willingness to learn, and comfort working hands-on.',
  'Ability to work on-site in Kochi and participate in laboratory and field testing.',
];

const gains = [
  'Hands-on experience building a real autonomous UAV product.',
  'Exposure to robotics, embedded systems, autonomous navigation, and drone technologies.',
  'Experience taking a product from prototype toward real-world deployment.',
  'Practice with engineering documentation, experiments, debugging, and cross-disciplinary collaboration.',
];

const navLinks = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Solution', href: '/#solution', key: 'solution' },
  { label: 'Docking Systems', href: dockingServicePath, key: 'docking' },
  { label: 'Applications', href: '/#applications', key: 'applications' },
  { label: 'Careers', href: '/career', key: 'careers' },
];

/* ---------- Icons (inline SVG, stroke-based) ---------- */

function Icon({ children, size = 20, className = '', stroke = 'currentColor' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      width={size}
    >
      {children}
    </svg>
  );
}

const ArrowRight = (props) => <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
const ArrowDown = (props) => <Icon {...props}><path d="M12 5v14M6 13l6 6 6-6" /></Icon>;
const BoltIcon = (props) => <Icon {...props}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" /></Icon>;
const DockIcon = (props) => <Icon {...props}><path d="M12 3v8M9 8l3 3 3-3" /><path d="M4 14h16v6H4z" /><path d="M8 14v-2h8v2" /></Icon>;
const SyncIcon = (props) => <Icon {...props}><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></Icon>;
const BatteryIcon = (props) => <Icon {...props}><rect height="18" rx="2" width="12" x="6" y="3" /><path d="M10 1h4M12 9v4M12 16h.01" /></Icon>;
const TrendIcon = (props) => <Icon {...props}><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></Icon>;
const CheckIcon = (props) => <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></Icon>;
const DotIcon = (props) => <Icon {...props}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" fill="currentColor" r="3" /></Icon>;
const ClockIcon = (props) => <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>;
const BuildingIcon = (props) => <Icon {...props}><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 9h5a1 1 0 0 1 1 1v11M8 8h2M8 12h2M8 16h2" /></Icon>;
const PinIcon = (props) => <Icon {...props}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Icon>;
const BriefcaseIcon = (props) => <Icon {...props}><rect height="13" rx="2" width="18" x="3" y="7" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></Icon>;
const SensorIcon = (props) => <Icon {...props}><circle cx="12" cy="12" r="2" /><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2" /></Icon>;
const IntegrationIcon = (props) => <Icon {...props}><path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" /></Icon>;
const MenuIcon = (props) => <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
const CloseIcon = (props) => <Icon {...props}><path d="M6 6l12 12M18 6 6 18" /></Icon>;

/* ---------- Shared pieces ---------- */

function BrandLogo({ className = 'h-9' }) {
  return (
    <img
      alt={`${companyName} logo`}
      className={`${className} w-auto rounded-sm object-contain`}
      src={logoSrc}
    />
  );
}

function LinkedInLink({ className = '' }) {
  return (
    <a
      aria-label="FPCA Technologies on LinkedIn"
      className={`inline-flex items-center gap-2 transition-colors hover:text-[#8FA8FF] ${className}`}
      href={linkedInUrl}
      rel="noreferrer"
      target="_blank"
    >
      <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#0A66C2] text-[11px] font-bold leading-none text-white">in</span>
      <span>LinkedIn</span>
    </a>
  );
}

function Eyebrow({ children, tone = 'primary', className = '' }) {
  const color = tone === 'tertiary' ? 'text-tertiary' : tone === 'muted' ? 'text-[#6B7485]' : 'text-primary';
  return <p className={`eyebrow ${color} ${className}`}>{children}</p>;
}

function usePageMetadata({ title, description, canonical }) {
  useEffect(() => {
    document.title = title;

    const upsertMeta = (selector, identityAttribute, identityValue, content) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(identityAttribute, identityValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }, [canonical, description, title]);
}

function TopNav({ activePage = 'home', ctaHref, ctaLabel, ctaExternal = false, secondaryHref, secondaryLabel }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ctaProps = ctaExternal ? { rel: 'noreferrer', target: '_blank' } : {};

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <a aria-label={`${companyName} home`} className="inline-flex shrink-0 items-center" href="/">
            <BrandLogo className="h-8 sm:h-9" />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                className={`${activePage === link.key ? 'text-white' : 'text-[#B8C0CF] hover:text-white'} text-sm font-medium transition-colors`}
                href={link.href}
                key={link.key}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 sm:gap-5">
            {secondaryHref && secondaryLabel ? (
              <a className="hidden text-sm font-medium text-[#B8C0CF] transition-colors hover:text-white md:block" href={secondaryHref}>
                {secondaryLabel}
              </a>
            ) : null}
            <a
              className="btn btn-primary min-h-[44px] whitespace-nowrap px-4 text-sm sm:px-5"
              href={ctaHref}
              {...ctaProps}
            >
              {ctaLabel}
            </a>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/15 text-white transition-transform active:scale-95 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
        <nav
          aria-label="Mobile"
          className={`${isMenuOpen ? 'grid' : 'hidden'} gap-1 border-t border-white/[0.06] py-3 md:hidden`}
          id="mobile-navigation"
        >
          {navLinks.map((link) => (
            <a
              className={`${activePage === link.key ? 'bg-surface-container-high text-white' : 'text-[#B8C0CF] hover:bg-surface-container-low hover:text-white'} rounded px-3 py-3 text-base transition-colors`}
              href={link.href}
              key={link.key}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {secondaryHref && secondaryLabel ? (
            <a
              className="rounded px-3 py-3 text-base text-[#B8C0CF] transition-colors hover:bg-surface-container-low hover:text-white"
              href={secondaryHref}
              onClick={() => setIsMenuOpen(false)}
            >
              {secondaryLabel}
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ tagline = 'Developing autonomous connector delivery for grid-powered heavy machinery.', showContact = true, links }) {
  const footerLinks = links || [
    { label: 'Solution', href: '/#solution' },
    { label: 'Benefits', href: '/#benefits' },
    { label: 'Applications', href: '/#applications' },
    { label: 'Drone Docking Systems', href: dockingServicePath },
    { label: 'Careers', href: '/career' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-surface-container-lowest px-5 pb-10 pt-14 text-sm sm:px-8">
      <div className="mx-auto flex max-w-content flex-wrap items-start justify-between gap-12">
        <div className="flex min-w-0 max-w-md flex-1 basis-[320px] flex-col gap-4">
          <BrandLogo className="h-9 self-start" />
          <p className="font-semibold text-on-surface">{companyName}</p>
          <p className="leading-relaxed text-muted">{tagline}</p>
          {showContact && (
            <div className="flex flex-col gap-2.5 leading-relaxed text-muted">
              <span>Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, HMT Colony, North Kalamassery, Kalamassery, Kochi, Kerala 683503</span>
              <a className="transition-colors hover:text-[#8FA8FF]" href="tel:+918086430571">+918086430571</a>
              <a className="transition-colors hover:text-[#8FA8FF]" href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <LinkedInLink />
            </div>
          )}
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-12 gap-y-8">
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-semibold text-on-surface">Navigation</p>
            {footerLinks.map((link) => (
              <a className="text-muted transition-colors hover:text-[#8FA8FF]" href={link.href} key={link.label}>{link.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-semibold text-on-surface">Company</p>
            <a className="text-muted transition-colors hover:text-[#8FA8FF]" href="/career">Careers</a>
            <LinkedInLink className="text-muted" />
            <a className="text-muted transition-colors hover:text-[#8FA8FF]" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-content border-t border-white/[0.06] pt-5 text-center text-[13px] text-[#6B7485]">
        © {new Date().getFullYear()} {companyName}. Engineered for the Kinetic Blueprint.
      </div>
    </footer>
  );
}

function DockingVideo({ className = '' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  }, []);

  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div className="aspect-video max-w-full overflow-hidden rounded-xl border border-white/10 bg-[#E9EBEF]">
        <video
          autoPlay
          className="block h-full w-full object-cover"
          ref={videoRef}
          controls
          loop
          muted
          playsInline
          poster={dockingVideoPoster}
          preload="metadata"
          src={dockingVideoSrc}
        >
          Your browser does not support embedded video.
        </video>
      </div>
      <figcaption className="eyebrow text-[#6B7485]">Concept animation · custom docking port with autonomous approach and grid connection</figcaption>
    </figure>
  );
}

/* ---------- Docking enquiry form (logic unchanged) ---------- */

const initialDockingInquiry = {
  name: '',
  phone: '',
  email: '',
  address: '',
  website: '',
};

function DockingInquiryForm() {
  const [form, setForm] = useState(initialDockingInquiry);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [submissionStartedAt, setSubmissionStartedAt] = useState(() => Date.now());

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/docking-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, submissionStartedAt }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || 'Your enquiry could not be sent. Please try again.');
      }

      setForm(initialDockingInquiry);
      setSubmissionStartedAt(Date.now());
      setStatus('success');
      setMessage(`Thank you. Your enquiry has been sent. Reference: ${payload.reference}`);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Your enquiry could not be sent. Please try again.');
    }
  };

  return (
    <form className="card flex w-full flex-col gap-5 p-6 md:p-9" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold">Send your requirement</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[13px] font-semibold text-[#C9D0DC]" htmlFor="docking-name">
          Name
          <input className="field-input" id="docking-name" maxLength="120" name="name" onChange={updateField('name')} required type="text" value={form.name} />
        </label>
        <label className="flex flex-col gap-2 text-[13px] font-semibold text-[#C9D0DC]" htmlFor="docking-phone">
          Phone number
          <input className="field-input" id="docking-phone" inputMode="tel" maxLength="25" name="phone" onChange={updateField('phone')} required type="tel" value={form.phone} />
        </label>
        <label className="flex flex-col gap-2 text-[13px] font-semibold text-[#C9D0DC] sm:col-span-2" htmlFor="docking-email">
          Email
          <input className="field-input" id="docking-email" maxLength="254" name="email" onChange={updateField('email')} required type="email" value={form.email} />
        </label>
        <label className="flex flex-col gap-2 text-[13px] font-semibold text-[#C9D0DC] sm:col-span-2" htmlFor="docking-address">
          Address
          <textarea className="field-input min-h-24 resize-y" id="docking-address" maxLength="1000" name="address" onChange={updateField('address')} required rows="3" value={form.address} />
        </label>
      </div>
      <label className="absolute -left-[10000px]" aria-hidden="true">
        Website
        <input autoComplete="off" name="website" onChange={updateField('website')} tabIndex="-1" type="text" value={form.website} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button className="btn btn-primary w-full sm:w-auto disabled:cursor-wait disabled:opacity-70" disabled={status === 'submitting'} type="submit">
          {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
          {status !== 'submitting' && <ArrowRight size={16} />}
        </button>
      </div>
      {message && (
        <p className={`text-sm leading-relaxed ${status === 'success' ? 'text-tertiary' : 'text-error'}`} role={status === 'error' ? 'alert' : 'status'}>
          {message}
        </p>
      )}
    </form>
  );
}

/* ---------- Drone docking systems page ---------- */

function DroneDockingSystemsPage() {
  const pageTitle = 'Custom Drone Docking Systems | FPCA Technologies';
  const pageDescription = 'FPCA Technologies designs and develops custom drone docking stations and docking-system integrations for customer aircraft, missions and operating environments.';
  const canonicalUrl = `https://www.fpcatechnologies.com${dockingServicePath}`;

  usePageMetadata({ title: pageTitle, description: pageDescription, canonical: canonicalUrl });

  const capabilities = [
    {
      Icon: DockIcon,
      title: 'Docking station engineering',
      copy: 'Mechanical docking concepts and station architecture developed around your drone geometry, payload and deployment constraints.',
    },
    {
      Icon: BoltIcon,
      title: 'Power and charging integration',
      copy: 'Electrical interfaces and charging or power-transfer functions can be evaluated and integrated when required by the project.',
    },
    {
      Icon: SensorIcon,
      title: 'Guidance and station controls',
      copy: 'Support for alignment, landing, sensing, telemetry and station-control requirements as part of the complete docking workflow.',
    },
    {
      Icon: IntegrationIcon,
      title: 'Drone and system integration',
      copy: 'Integration with the customer drone, autopilot and operating workflow, followed by prototype checks and field-oriented testing.',
    },
  ];

  const useCases = [
    'Inspection and monitoring operations',
    'Security and surveillance missions',
    'Industrial and infrastructure sites',
    'Agriculture and remote field operations',
    'Research, OEM and custom UAV programmes',
  ];

  return (
    <>
      <TopNav activePage="docking" ctaHref={dockingInquiryUrl} ctaLabel="Discuss a Project" />

      <main className="pt-[72px]">
        <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 md:pt-28" style={{ background: 'radial-gradient(1000px 480px at 80% -10%, rgba(53,208,127,.12), transparent 60%), radial-gradient(900px 500px at 10% 20%, rgba(59,108,255,.16), transparent 60%)' }}>
          <div className="mx-auto flex max-w-content flex-wrap items-center gap-14">
            <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-6">
              <Eyebrow tone="tertiary">Custom Drone Docking Systems</Eyebrow>
              <h1 className="font-headline text-5xl leading-[1.04] sm:text-6xl md:text-7xl">Have a drone docking requirement?</h1>
              <p className="max-w-[52ch] text-lg leading-relaxed text-on-surface-variant md:text-xl">
                We design, build, test and deploy custom drone docking ports tailored to your operating environment and project requirements.
              </p>
              <div className="pt-2">
                <a className="btn btn-primary" href={dockingInquiryUrl}>
                  Share Your Requirement
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <DockingVideo className="min-w-0 flex-1 basis-[480px]" />
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-surface-container-low px-5 py-20 sm:px-8 md:py-28" id="capabilities">
          <div className="mx-auto max-w-content">
            <div className="mb-12 flex max-w-3xl flex-col gap-4">
              <Eyebrow>What We Can Develop</Eyebrow>
              <h2 className="font-headline text-4xl leading-[1.08] md:text-5xl">A docking solution shaped around your operation</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">Every drone, site and mission has different constraints. FPCA begins with the requirement and defines the appropriate docking architecture with the customer.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {capabilities.map(({ Icon: CapabilityIcon, title, copy }) => (
                <article className="card flex flex-col gap-4 p-7 md:p-8" key={title}>
                  <CapabilityIcon className="text-primary" size={36} />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-on-surface-variant">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-4xl">
            <Eyebrow className="mb-4" tone="tertiary">Where It Fits</Eyebrow>
            <h2 className="mb-5 font-headline text-4xl leading-[1.08] md:text-5xl">Built for repeatable drone operations</h2>
            <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">Docking infrastructure can support operations where drones need a reliable home point, automated turnaround or integration with a larger site system.</p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <li className="flex items-start gap-3 text-base leading-relaxed text-[#C9D0DC]" key={useCase}>
                  <CheckIcon className="mt-0.5 shrink-0 text-tertiary" size={20} />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter
        links={[
          { label: 'Home', href: '/' },
          { label: 'Docking Systems', href: dockingServicePath },
          { label: 'Careers', href: '/career' },
        ]}
        showContact={false}
        tagline="Custom drone docking system development and autonomous connector delivery engineering from Kochi, Kerala."
      />
    </>
  );
}

/* ---------- Careers page ---------- */

function MetaChip({ Icon: ChipIcon, children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 text-sm text-[#B8C0CF] ${className}`}>
      <ChipIcon className="shrink-0 text-primary" size={16} />
      {children}
    </span>
  );
}

function CareersPage() {
  return (
    <>
      <TopNav activePage="careers" ctaHref={applicationFormUrl} ctaLabel="Apply Now" />

      <main className="pt-[72px]">
        <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 md:pt-28" style={{ background: 'radial-gradient(1000px 480px at 80% -10%, rgba(53,208,127,.12), transparent 60%), radial-gradient(900px 500px at 10% 20%, rgba(59,108,255,.16), transparent 60%)' }}>
          <div className="mx-auto flex max-w-content flex-wrap items-center gap-14">
            <div className="flex min-w-0 flex-1 basis-[520px] flex-col gap-6">
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="inline-block h-2 w-2 rounded-full bg-tertiary"></span>
                Careers at FPCA
              </p>
              <h1 className="font-headline text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
                Build the future of <em className="not-italic text-primary">industrial electrification</em>
              </h1>
              <p className="max-w-[54ch] text-lg leading-relaxed text-on-surface-variant md:text-xl">
                Join our engineering team building autonomous tethered drone systems that deliver grid power to heavy electric machines.
              </p>
              <div className="flex flex-wrap gap-3.5 pt-1">
                <a className="btn btn-primary" href="#openings">
                  View Open Roles
                  <ArrowDown size={16} />
                </a>
                <a className="btn btn-ghost" href={`mailto:${careersEmail}`}>Send Your Profile</a>
              </div>
            </div>
            <div className="card flex min-w-0 flex-1 basis-[360px] flex-col gap-5 p-8">
              <Eyebrow>Hiring Focus</Eyebrow>
              <p className="text-xl font-medium leading-snug">UAV robotics software, autonomous navigation, flight control integration, and field testing.</p>
              <div className="flex flex-col gap-3 border-t border-white/[0.07] pt-5">
                <Eyebrow tone="muted">Open now</Eyebrow>
                <p className="text-lg font-bold">UAV Robotics Software Intern</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <MetaChip Icon={ClockIcon}>3 months</MetaChip>
                  <MetaChip Icon={BuildingIcon}>On-site</MetaChip>
                  <MetaChip Icon={PinIcon}>Maker Village, Kochi</MetaChip>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-surface-container-low px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto flex max-w-content flex-wrap items-start gap-14">
            <div className="flex min-w-0 flex-1 basis-[420px] flex-col gap-5">
              <Eyebrow>About FPCA</Eyebrow>
              <h2 className="font-headline text-4xl leading-[1.08] md:text-5xl">Powering heavy EVs without the battery bottleneck</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                FPCA is developing an autonomous system in which a drone transports an electrical connector to an elevated grid-connected docking port. After docking, the drone powers down while the machine receives electricity through the tether.
              </p>
            </div>
            <div className="grid min-w-0 flex-1 basis-[520px] grid-cols-1 gap-4 md:grid-cols-2">
              <div className="card flex flex-col gap-4 p-8">
                <BoltIcon className="text-primary" size={36} />
                <h3 className="text-xl font-bold">Grid power in motion</h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">Our autonomous tethered drone enables heavy machines to draw power directly from the electrical grid, reducing battery dependence and downtime.</p>
              </div>
              <div className="card flex flex-col gap-4 p-8">
                <DockIcon className="text-tertiary" size={36} />
                <h3 className="text-xl font-bold">Real product engineering</h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">Incubated at Maker Village, Kerala Startup Mission Integrated Startup Complex, we work across UAVs, robotics, embedded systems, and autonomous navigation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] px-5 py-20 sm:px-8 md:py-28" id="openings">
          <div className="mx-auto flex max-w-content flex-col gap-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex min-w-0 flex-1 basis-[480px] flex-col gap-4">
                <Eyebrow>Current opening</Eyebrow>
                <h2 className="font-headline text-4xl leading-[1.06] md:text-5xl">UAV Robotics Software Intern</h2>
              </div>
              <p className="max-w-[44ch] flex-1 basis-[360px] leading-relaxed text-on-surface-variant">A hands-on internship for makers who want to build autonomous drone systems for real-world industrial electrification.</p>
            </div>

            <div className="space-y-4">
              {openings.map((opening) => (
                <article className="card flex flex-col gap-10 p-6 md:p-10" key={opening.title}>
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="flex min-w-0 flex-1 basis-[520px] flex-col gap-4">
                      <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <MetaChip Icon={BriefcaseIcon}>{opening.type}</MetaChip>
                        <MetaChip Icon={ClockIcon}>{opening.duration}</MetaChip>
                        <MetaChip Icon={BuildingIcon}>{opening.mode}</MetaChip>
                        <MetaChip Icon={PinIcon}>{opening.location}</MetaChip>
                      </div>
                      <p className="leading-relaxed text-on-surface-variant">{opening.focus}</p>
                    </div>
                    <a className="btn btn-primary w-full sm:w-auto" href={applicationFormUrl}>
                      Apply
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-10 border-t border-white/[0.07] pt-10">
                    <div className="flex min-w-0 flex-[2_1_520px] flex-col gap-5">
                      <h3 className="text-xl font-bold md:text-2xl">What you will work on</h3>
                      <ul className="flex flex-col gap-3">
                        {responsibilities.map((item) => (
                          <li className="flex gap-3.5 text-[15px] leading-relaxed text-[#B8C0CF]" key={item}>
                            <CheckIcon className="mt-1 shrink-0 text-tertiary" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <aside className="flex min-w-0 flex-1 basis-[280px] flex-col gap-7">
                      <div className="flex flex-col gap-3.5">
                        <h4 className="text-[17px] font-bold">Core tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {['ROS 2', 'Python', 'C++', 'Linux', 'Pixhawk', 'MAVLink', 'ArduPilot/PX4', 'Raspberry Pi'].map((tool) => (
                            <span className="rounded border border-white/10 bg-background px-3 py-2 text-[13px] text-[#C9D0DC]" key={tool}>{tool}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5">
                        <h4 className="text-[17px] font-bold">Systems exposure</h4>
                        <div className="flex flex-wrap gap-2">
                          {['GPS', 'LiDAR', 'Cameras', 'UWB', 'Telemetry', 'Tether control'].map((system) => (
                            <span className="rounded border border-white/10 bg-background px-3 py-2 text-[13px] text-[#C9D0DC]" key={system}>{system}</span>
                          ))}
                        </div>
                      </div>
                    </aside>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-4 rounded-lg border border-white/[0.07] bg-background p-6 md:p-7">
                      <h3 className="text-xl font-bold md:text-2xl">Who should apply</h3>
                      <ul className="flex flex-col gap-3">
                        {qualifications.map((item) => (
                          <li className="flex gap-3.5 text-[15px] leading-relaxed text-[#B8C0CF]" key={item}>
                            <DotIcon className="mt-1 shrink-0 text-primary" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4 rounded-lg border border-white/[0.07] bg-background p-6 md:p-7">
                      <h3 className="text-xl font-bold md:text-2xl">What you will gain</h3>
                      <ul className="flex flex-col gap-3">
                        {gains.map((item) => (
                          <li className="flex gap-3.5 text-[15px] leading-relaxed text-[#B8C0CF]" key={item}>
                            <TrendIcon className="mt-1 shrink-0 text-tertiary" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-surface-container-low px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto flex max-w-content flex-wrap items-start gap-14">
            <div className="flex min-w-0 flex-1 basis-[420px] flex-col gap-5">
              <Eyebrow>Hiring process</Eyebrow>
              <h2 className="font-headline text-4xl leading-[1.08] md:text-[44px]">Practical, engineering-led interviews</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">We focus on how you reason, build, test, and communicate tradeoffs. Expect direct conversations with the people building the system.</p>
            </div>
            <div className="grid min-w-0 flex-1 basis-[520px] grid-cols-1 gap-4 sm:grid-cols-2">
              {['Profile review', 'Technical conversation', 'Work sample discussion', 'Offer and onboarding'].map((step, index) => (
                <div className="card flex flex-col gap-5 p-7" key={step}>
                  <span className="font-headline text-4xl leading-none text-primary/50">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-bold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] px-5 py-24 sm:px-8 md:py-32" style={{ background: 'radial-gradient(900px 400px at 50% 100%, rgba(59,108,255,.18), transparent 60%)' }}>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2 className="font-headline text-5xl leading-[1.04] md:text-6xl">Ready to work on real UAV systems?</h2>
            <p className="max-w-[50ch] text-lg leading-relaxed text-on-surface-variant md:text-xl">Apply for the 3-month on-site internship at Maker Village, KINFRA Hi-Tech Park, Kalamassery, Kochi.</p>
            <div className="pt-3">
              <a className="btn btn-primary min-h-[56px] px-8 text-base" href={applicationFormUrl}>
                Apply Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        links={[
          { label: 'Home', href: '/' },
          { label: 'Solution', href: '/#solution' },
          { label: 'Careers', href: '/career' },
          { label: 'Apply', href: applicationFormUrl },
        ]}
        showContact={false}
      />
    </>
  );
}

/* ---------- Homepage ---------- */

function App({ path }) {
  const currentPath = (path ?? window.location.pathname).replace(/\/$/, '');
  const isCareersPage = currentPath === '/career' || currentPath === '/careers';
  const isApplicationPage = currentPath === '/career/apply' || currentPath === '/careers/apply';
  const isDockingServicePage = currentPath === dockingServicePath || currentPath === '/drone-docking-stations';

  if (isApplicationPage) {
    return <CareerApplicationPage />;
  }

  if (isCareersPage) {
    return <CareersPage />;
  }

  if (isDockingServicePage) {
    return <DroneDockingSystemsPage />;
  }

  const solutionSteps = [
    { Icon: DockIcon, title: 'Autonomous Flight', copy: 'Precision flight control transports and docks the electrical connector at the elevated grid-connected port.' },
    { Icon: BoltIcon, title: 'High-Tension Link', copy: "Optimized power cables deliver grid-level voltage directly to the machine's motor, bypassing the need for storage." },
    { Icon: SyncIcon, title: 'Seamless Integration', copy: 'Compatible with existing electric excavator and tractor architectures, making the transition to FPCA effortless.' },
  ];

  const comparisonRows = [
    { name: 'FPCA Grid Link', highlight: true, efficiency: 95, bar: 'bg-accent', emissions: 'Zero Local', emissionsTone: 'text-tertiary', reliability: 'Max (Continuous)' },
    { name: 'Battery Electric', highlight: false, efficiency: 80, bar: 'bg-muted', emissions: 'Zero Local', emissionsTone: 'text-on-surface-variant', reliability: 'Variable (Charging)' },
    { name: 'Fossil Fuel (Diesel)', highlight: false, efficiency: 35, bar: 'bg-error', emissions: 'High Impact', emissionsTone: 'text-error', reliability: 'High (Refueling)' },
  ];

  const applications = [
    { eyebrow: 'Infrastructure', title: 'Construction', copy: 'Eliminate diesel fumes in urban centers and power high-torque heavy excavators 24/7 without refueling stops.', featured: false },
    { eyebrow: 'Extraction', title: 'Mining', copy: 'Deep-pit operations benefit from reduced ventilation costs as electric machines generate zero heat and exhaust.', featured: false },
    { eyebrow: 'Cultivation', title: 'Agriculture', copy: 'Power heavy tilling and harvesting equipment directly from renewable farm grids, slashing fuel dependency.', featured: true },
  ];

  return (
    <>
      <TopNav activePage="home" ctaHref={`mailto:${contactEmail}`} ctaLabel="Contact Us" secondaryHref="#solution" secondaryLabel="Learn More" />

      <main className="pt-[72px]">
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 md:pb-20 md:pt-24" id="top" style={{ background: 'radial-gradient(1200px 520px at 70% -10%, rgba(59,108,255,.16), transparent 60%)' }}>
          <div className="mx-auto flex max-w-content flex-wrap items-center gap-14">
            <div className="flex min-w-0 flex-1 basis-[520px] flex-col gap-7">
              <p className="eyebrow flex items-center gap-3 text-primary">
                <span className="inline-block h-2 w-2 rounded-full bg-tertiary"></span>
                The Kinetic Blueprint
              </p>
              <h1 className="break-words font-headline text-[44px] leading-none tracking-[-0.02em] sm:text-7xl md:text-[84px]">
                FPCA <em className="not-italic text-primary">TECHNOLOGIES</em>
              </h1>
              <p className="max-w-[54ch] text-xl leading-relaxed text-on-surface-variant md:text-[21px]">
                If there is power nearby, why do you need batteries? Making heavy electric machinery run on electricity 24/7.
              </p>
              <div className="flex flex-wrap gap-3.5 pt-1">
                <a className="btn btn-primary" href="#solution">
                  Explore Technology
                  <ArrowRight size={16} />
                </a>
                <a className="btn btn-ghost" href="#applications">See Applications</a>
              </div>
            </div>
            <figure className="flex min-w-0 flex-1 basis-[480px] flex-col gap-3">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
                <img
                  alt="Industrial drone tether concept"
                  className="block h-auto w-full"
                  height="812"
                  src="/application-agriculture.webp"
                  width="1938"
                />
              </div>
              <figcaption className="glass-card border-l-2 border-accent px-4 py-3 text-[15px] font-semibold">Autonomous Connector Docking</figcaption>
            </figure>
          </div>
        </section>

        {/* Problem */}
        <section className="border-t border-white/[0.06] bg-surface-container-low px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto flex max-w-content flex-wrap items-center gap-14">
            <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-5">
              <h2 className="font-headline text-4xl leading-[1.06] md:text-[52px]">The Battery Bottleneck</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">Current industrial electrification faces a critical paradox: Heavy machinery requires immense power, yet massive batteries introduce "Charge Anxiety" and crippling weight.</p>
              <p className="text-lg leading-relaxed text-on-surface-variant">Relying on static charging stations leads to 30% downtime for industrial fleets, stalling productivity and inflating operational overhead.</p>
            </div>
            <div className="grid min-w-0 flex-1 basis-[420px] grid-cols-2 gap-4">
              <div className="card flex min-h-[220px] flex-col justify-between gap-8 p-6 md:min-h-[240px] md:p-8">
                <BatteryIcon className="text-error" size={28} />
                <div className="flex flex-col gap-2">
                  <span className="font-headline text-5xl leading-none md:text-6xl">30%</span>
                  <span className="eyebrow text-muted">Fleet Downtime</span>
                </div>
              </div>
              <div className="card flex min-h-[220px] translate-y-6 flex-col justify-between gap-8 p-6 md:min-h-[240px] md:p-8">
                <TrendIcon className="text-error" size={28} />
                <div className="flex flex-col gap-2">
                  <span className="font-headline text-5xl leading-none md:text-6xl">2x</span>
                  <span className="eyebrow text-muted">Maintenance Cost</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="border-t border-white/[0.06] px-5 py-20 sm:px-8 md:py-28" id="solution">
          <div className="mx-auto flex max-w-content flex-col gap-14">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <h2 className="font-headline text-4xl leading-[1.06] md:text-[56px]">Grid Energy. <em className="not-italic text-primary">Autonomous Connector Delivery.</em></h2>
              <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">The drone transports the electrical connector to an elevated grid-connected docking port and powers down after docking.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {solutionSteps.map(({ Icon: StepIcon, title, copy }, index) => (
                <div className="card relative flex flex-col gap-4 p-8 md:p-9" key={title}>
                  <span className="absolute right-6 top-4 font-headline text-6xl text-white/[0.06]">{String(index + 1).padStart(2, '0')}</span>
                  <StepIcon className="text-primary" size={40} />
                  <h3 className="text-[22px] font-bold">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-on-surface-variant">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works in the field */}
        <section className="border-t border-white/[0.06] bg-surface-container-low px-5 py-20 sm:px-8 md:py-28" id="how-it-works">
          <div className="mx-auto flex max-w-content flex-col gap-12">
            <div className="flex max-w-3xl flex-col gap-4">
              <Eyebrow>How it works in the field</Eyebrow>
              <h2 className="font-headline text-4xl leading-[1.08] md:text-5xl">Grid power that follows the machine</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">Power comes from an underground grid supply to elevated docking ports. The drone carries the connector to the nearest port.</p>
            </div>
            <figure className="flex flex-col gap-3.5">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                <img
                  alt="Concept illustration: a compact farm machine powered from the grid through a raised tether, with a drone switching the connector from Port 1 to Port 2 as the machine moves along the field"
                  className="block h-auto w-full"
                  height="812"
                  loading="lazy"
                  src="/application-agriculture.webp"
                  width="1938"
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="eyebrow shrink-0 text-primary">Agriculture</span>
                <span className="text-[15px] text-on-surface-variant">Compact farm machines run on grid electricity 24/7, with the drone switching ports autonomously as the machine works down the field.</span>
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-3.5">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                <img
                  alt="Concept illustration: an electric excavator in a mining pit drawing grid power through a 2 m mast and tether, with the drone moving the connector between three docking ports as the machine advances"
                  className="block h-auto w-full"
                  height="812"
                  loading="lazy"
                  src="/application-construction.webp"
                  width="1938"
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="eyebrow shrink-0 text-primary">Mining</span>
                <span className="text-[15px] text-on-surface-variant">Power that moves with the pit: the same drone relocates the connector from port to port as the electric excavator advances, with no exhaust at the working face.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Drone docking enquiry */}
        <section className="border-t border-white/[0.06] px-5 py-20 sm:px-8 md:py-28" id="docking-enquiry">
          <div className="mx-auto flex max-w-content flex-wrap items-start gap-14">
            <div className="flex min-w-0 flex-1 basis-[420px] flex-col gap-5">
              <Eyebrow tone="tertiary">Custom Drone Docking Systems</Eyebrow>
              <h2 className="font-headline text-4xl leading-[1.06] md:text-[52px]">Have a drone docking requirement?</h2>
              <p className="max-w-[50ch] text-lg leading-relaxed text-on-surface-variant">We design, build, test and deploy custom drone docking ports tailored to your operating environment and project requirements.</p>
              <DockingVideo className="pt-2" />
            </div>
            <div className="min-w-0 flex-1 basis-[520px]">
              <DockingInquiryForm />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-white/[0.06] bg-surface-container-low px-5 py-16 sm:px-8 md:py-24" id="benefits">
          <div className="mx-auto grid max-w-content grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="flex flex-col gap-3.5"><span className="font-headline text-5xl leading-none text-tertiary md:text-6xl">95%</span><span className="eyebrow leading-relaxed text-muted">Carbon<br />Reduction</span></div>
            <div className="flex flex-col gap-3.5"><span className="font-headline text-5xl leading-none text-primary md:text-6xl">70%</span><span className="eyebrow leading-relaxed text-muted">Fuel Cost<br />Savings</span></div>
            <div className="flex flex-col gap-3.5"><span className="font-headline text-5xl leading-none text-primary md:text-6xl">40%</span><span className="eyebrow leading-relaxed text-muted">Operating<br />Cost Cut</span></div>
            <div className="flex flex-col gap-3.5"><span className="font-headline text-5xl leading-none text-on-surface md:text-6xl">90%+</span><span className="eyebrow leading-relaxed text-muted">Total<br />Efficiency</span></div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto flex max-w-5xl flex-col gap-10">
            <h2 className="text-center font-headline text-4xl leading-[1.08] md:text-5xl">Efficiency Engineering</h2>
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full min-w-[720px] border-collapse text-left text-[15px]">
                <thead>
                  <tr className="bg-surface-container-high">
                    <th className="eyebrow px-5 py-4 font-medium text-muted md:px-6">Energy Technology</th>
                    <th className="eyebrow px-5 py-4 font-medium text-muted md:px-6">Efficiency %</th>
                    <th className="eyebrow px-5 py-4 font-medium text-muted md:px-6">Emissions</th>
                    <th className="eyebrow px-5 py-4 font-medium text-muted md:px-6">Reliability</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr className="border-t border-white/[0.07]" key={row.name}>
                      <td className={`px-5 py-5 md:px-6 ${row.highlight ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{row.name}</td>
                      <td className="px-5 py-5 md:px-6">
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-bright">
                            <div className={`h-full ${row.bar}`} style={{ width: `${row.efficiency}%` }}></div>
                          </div>
                          <span>{row.efficiency}%</span>
                        </div>
                      </td>
                      <td className={`px-5 py-5 md:px-6 ${row.emissionsTone}`}>{row.emissions}</td>
                      <td className={`px-5 py-5 md:px-6 ${row.highlight ? '' : 'text-on-surface-variant'}`}>{row.reliability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="border-t border-white/[0.06] bg-surface-container-low px-5 py-20 sm:px-8 md:py-28" id="applications">
          <div className="mx-auto flex max-w-content flex-col gap-12">
            <h2 className="font-headline text-4xl leading-[1.06] md:text-[56px]">Universal <em className="not-italic text-primary">Utility</em></h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {applications.map((item) => (
                <article
                  className={`card flex min-h-[300px] flex-col justify-end gap-4 p-8 md:p-9 ${item.featured ? 'border-accent/35 bg-[linear-gradient(180deg,rgba(59,108,255,0.10),rgba(17,20,27,0)_60%),#11141B]' : ''}`}
                  key={item.title}
                >
                  <Eyebrow>{item.eyebrow}</Eyebrow>
                  <h3 className="font-headline text-[34px] leading-[1.1]">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-on-surface-variant">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="border-t border-white/[0.06] px-5 py-20 sm:px-8 md:py-28" id="faq">
          <div className="mx-auto flex max-w-content flex-wrap items-start gap-14">
            <div className="flex min-w-0 flex-1 basis-[380px] flex-col gap-5">
              <Eyebrow>Frequently asked questions</Eyebrow>
              <h2 className="font-headline text-4xl leading-[1.06] md:text-[52px]" id="faq-heading">Questions we are asked most</h2>
              <p className="max-w-[46ch] text-lg leading-relaxed text-on-surface-variant">Short, factual answers about the technology, who it is for, and how to work with us.</p>
            </div>
            <div className="card min-w-0 flex-1 basis-[560px] divide-y divide-white/[0.07]">
              {faqItems.map((item) => (
                <details className="group px-6 py-5 md:px-8" key={item.question}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-primary transition-transform group-open:rotate-45">
                      <Icon size={16}><path d="M12 5v14M5 12h14" /></Icon>
                    </span>
                  </summary>
                  <p className="pt-4 text-[15px] leading-relaxed text-on-surface-variant">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="border-t border-white/[0.06] px-5 py-24 sm:px-8 md:py-32" id="careers" style={{ background: 'radial-gradient(900px 400px at 50% 100%, rgba(59,108,255,.18), transparent 60%)' }}>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2 className="font-headline text-5xl leading-[1.04] md:text-[64px]">Join the Sustainable Revolution</h2>
            <p className="max-w-[48ch] text-lg leading-relaxed text-on-surface-variant md:text-xl">Be at the forefront of the kinetic blueprint for a fossil-free industrial future.</p>
            <div className="pt-3">
              <a className="btn btn-primary min-h-[56px] px-8 text-base" href="/career">Join Our Team</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
