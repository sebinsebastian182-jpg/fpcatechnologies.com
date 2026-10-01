import { useEffect, useState } from 'react';
import CareerApplicationPage from './CareerApplicationPage.jsx';

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

const dockingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Drone Docking System Development',
  serviceType: 'Drone docking station design, development and integration',
  description: 'FPCA Technologies works with customers to develop custom drone docking stations and related docking systems based on their aircraft, operating environment and mission requirements.',
  url: `https://www.fpcatechnologies.com${dockingServicePath}`,
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  provider: {
    '@type': 'Organization',
    name: 'FPCA Technologies Private Limited',
    url: 'https://www.fpcatechnologies.com/',
    logo: 'https://www.fpcatechnologies.com/fpca-mark.png',
    email: contactEmail,
    telephone: '+91 80864 30571',
    sameAs: [linkedInUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Maker Village, KINFRA Hi-Tech Park',
      addressLocality: 'Kalamassery, Kochi',
      addressRegion: 'Kerala',
      postalCode: '683503',
      addressCountry: 'IN',
    },
  },
};

const jobPosting = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'UAV Robotics Software Intern',
  description: 'A three-month, full-time, on-site internship working on UAV autonomy, robotics software, flight-control integration, simulation, sensor integration, laboratory checks, and field testing.',
  datePosted: '2026-07-28',
  employmentType: 'INTERN',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'FPCA Technologies Private Limited',
    sameAs: ['https://www.fpcatechnologies.com', linkedInUrl],
    logo: 'https://www.fpcatechnologies.com/fpca-mark.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Maker Village, KINFRA Hi-Tech Park',
      addressLocality: 'Kalamassery',
      addressRegion: 'Kerala',
      postalCode: '683503',
      addressCountry: 'IN',
    },
  },
  directApply: true,
  url: 'https://www.fpcatechnologies.com/career',
  applicationContact: {
    '@type': 'ContactPoint',
    email: 'admin@fpcatechnologies.com',
    contactType: 'Recruitment',
  },
};

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
  { label: 'Technology', href: '/#how-it-works', key: 'solution' },
  { label: 'Docking Systems', href: dockingServicePath, key: 'docking' },
  { label: 'Applications', href: '/#applications', key: 'applications' },
  { label: 'Careers', href: '/career', key: 'careers' },
];

const systemSteps = [
  {
    number: '01',
    icon: 'flight',
    title: 'Carry the connector',
    copy: 'A drone transports the electrical connector from the machine-mounted cable system to the grid connection point.',
  },
  {
    number: '02',
    icon: 'cable',
    title: 'Dock with the grid port',
    copy: 'Guidance and control systems align and secure the connector at an elevated, grid-connected docking port.',
  },
  {
    number: '03',
    icon: 'power',
    title: 'Supply power while the drone rests',
    copy: 'After docking, the drone powers down and electricity flows through the cable to the machine.',
  },
];

const fitCriteria = [
  'The machine has high energy demand or loses productive time to charging.',
  'It operates inside a defined site or working area.',
  'A suitable grid connection is available nearby.',
  'Cable routing and the connection point can be engineered for the site.',
];

const developmentFacts = [
  {
    label: 'Development stage',
    value: 'Prototype development and validation',
    copy: 'FPCA is building and testing the autonomous connector-delivery workflow.',
  },
  {
    label: 'Initial market',
    value: 'Agriculture',
    copy: 'Construction and mining are additional application areas for future evaluation.',
  },
  {
    label: 'Engineering base',
    value: 'Kochi, India',
    copy: 'Based at Maker Village, KINFRA Hi-Tech Park, Kalamassery.',
  },
];

const applicationAreas = [
  {
    label: 'Initial focus',
    title: 'Agriculture',
    copy: 'High-duty tractors and field machinery operating where grid access and cable routing can be planned.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGPZgM7kcntk7Wp_Slp1PSO4VXGnprtYdtuCua_5qqGqc1AWqcokr3_fWRYAAX0-l1H8P_usxaJT0c2Z_sGRwP2dUmiDaVcm26Uts_MwmIJ1BtXzpsArIO2qCsPDBK7HG6iACC2WH3bZPmr5B_FrC1CCuIj9sl2Y1A7xAVXXbd5if_GcxloO8j9-vaveGzC-1CRVN-U03vOxECGXg9BUsEOJWurXEp-CycSGe8NkppNLoNvCuSJER-mfSWJEVsgkXN2TBwUYIfPtk',
  },
  {
    label: 'Potential application',
    title: 'Construction',
    copy: 'Electric machinery at structured sites where direct power could reduce dependence on large onboard batteries.',
  },
  {
    label: 'Potential application',
    title: 'Mining',
    copy: 'High-energy equipment in managed operating zones where fixed electrical infrastructure is available.',
  },
];

function BrandLogo({ className = 'h-9' }) {
  return (
    <img
      alt={`${companyName} logo`}
      className={`${className} w-auto rounded-sm object-contain`}
      height="513"
      src={logoSrc}
      width="1465"
    />
  );
}

function LinkedInLink({ className = '' }) {
  return (
    <a
      aria-label="FPCA Technologies on LinkedIn"
      className={`inline-flex items-center gap-2 transition-colors hover:text-[#0A66C2] ${className}`}
      href={linkedInUrl}
      rel="noreferrer"
      target="_blank"
    >
      <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#0A66C2] text-[11px] font-bold leading-none text-white">in</span>
      <span>LinkedIn</span>
    </a>
  );
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
    <>
      <a className="fixed left-4 top-2 z-[60] -translate-y-20 bg-white px-4 py-2 font-semibold text-black transition-transform focus:translate-y-0" href="#main-content">Skip to main content</a>
      <nav aria-label="Primary navigation" className="fixed top-0 w-full z-50 bg-[#131313]/95 backdrop-blur-xl shadow-2xl shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 font-['Space_Grotesk'] tracking-tight">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a aria-label={`${companyName} home`} className="inline-flex shrink-0 items-center" href="/">
            <BrandLogo className="h-8 sm:h-10" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                className={`${activePage === link.key ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
                href={link.href}
                key={link.key}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {secondaryHref && secondaryLabel ? (
              <a className="hidden md:block text-gray-400 hover:text-[#b8c3ff] transition-all duration-300" href={secondaryHref}>
                {secondaryLabel}
              </a>
            ) : null}
            <a
              className="bg-primary-container text-on-primary-container px-3 sm:px-6 py-2 text-sm sm:text-base font-medium whitespace-nowrap scale-95 active:scale-90 transition-transform"
              href={ctaHref}
              {...ctaProps}
            >
              {ctaLabel}
            </a>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-outline-variant text-white active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        <div
          className={`${isMenuOpen ? 'grid' : 'hidden'} md:hidden gap-1 border-t border-outline-variant/30 py-3`}
          id="mobile-navigation"
        >
          {navLinks.map((link) => (
            <a
              className={`${activePage === link.key ? 'bg-surface-container-high text-white' : 'text-gray-300 hover:bg-surface-container-low hover:text-white'} px-3 py-3 text-base transition-colors`}
              href={link.href}
              key={link.key}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {secondaryHref && secondaryLabel ? (
            <a
              className="px-3 py-3 text-base text-gray-300 hover:bg-surface-container-low hover:text-white transition-colors"
              href={secondaryHref}
              onClick={() => setIsMenuOpen(false)}
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
      </nav>
    </>
  );
}

function SiteFooter({ description = 'Developing autonomous connector delivery for grid-powered heavy machinery.' }) {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-[#101010] py-12 text-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <BrandLogo className="h-10" />
          <p className="mt-4 max-w-md leading-relaxed text-gray-400">{description}</p>
        </div>
        <div>
          <h2 className="mb-4 font-headline text-base font-bold text-white">Explore</h2>
          <div className="grid gap-3 text-gray-400">
            <a className="w-fit transition-colors hover:text-primary" href="/#how-it-works">Technology</a>
            <a className="w-fit transition-colors hover:text-primary" href={dockingServicePath}>Drone Docking Systems</a>
            <a className="w-fit transition-colors hover:text-primary" href="/career">Careers</a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-headline text-base font-bold text-white">Contact</h2>
          <div className="grid gap-3 text-gray-400">
            <a className="w-fit transition-colors hover:text-primary" href="tel:+918086430571">+91 80864 30571</a>
            <a className="w-fit break-all transition-colors hover:text-primary" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <LinkedInLink />
            <p className="max-w-sm leading-relaxed">Maker Village, KINFRA Hi-Tech Park, Kalamassery, Kochi, Kerala 683503</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-outline-variant/20 px-6 pt-6 text-gray-500">
        © 2026 {companyName}
      </div>
    </footer>
  );
}

const initialDockingInquiry = {
  name: '',
  phone: '',
  email: '',
  address: '',
  requirement: '',
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

  const inputClassName = 'w-full border border-outline-variant bg-background px-4 py-3 text-base text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/60 focus:border-primary';

  return (
    <form className="w-full border border-outline-variant/50 bg-surface-container-high p-6 md:p-8" onSubmit={handleSubmit}>
      <h3 className="font-headline text-2xl font-bold">Tell us what you need</h3>
      <p className="mb-6 mt-2 text-sm leading-relaxed text-on-surface-variant">A short summary is enough. FPCA will review it and contact you.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="text-sm font-semibold text-on-surface" htmlFor="docking-name">
          Name
          <input autoComplete="name" className={`${inputClassName} mt-2`} id="docking-name" maxLength="120" name="name" onChange={updateField('name')} required type="text" value={form.name} />
        </label>
        <label className="text-sm font-semibold text-on-surface" htmlFor="docking-phone">
          Phone number
          <input autoComplete="tel" className={`${inputClassName} mt-2`} id="docking-phone" inputMode="tel" maxLength="25" name="phone" onChange={updateField('phone')} required type="tel" value={form.phone} />
        </label>
        <label className="text-sm font-semibold text-on-surface sm:col-span-2" htmlFor="docking-email">
          Email
          <input autoComplete="email" className={`${inputClassName} mt-2`} id="docking-email" maxLength="254" name="email" onChange={updateField('email')} required type="email" value={form.email} />
        </label>
        <label className="text-sm font-semibold text-on-surface sm:col-span-2" htmlFor="docking-address">
          Site or company address
          <textarea autoComplete="street-address" className={`${inputClassName} mt-2 min-h-20 resize-y`} id="docking-address" maxLength="1000" name="address" onChange={updateField('address')} required rows="2" value={form.address} />
        </label>
        <label className="text-sm font-semibold text-on-surface sm:col-span-2" htmlFor="docking-requirement">
          Brief requirement
          <textarea className={`${inputClassName} mt-2 min-h-28 resize-y`} id="docking-requirement" maxLength="2000" name="requirement" onChange={updateField('requirement')} placeholder="What should the drone or docking system do, and where will it operate?" required rows="4" value={form.requirement} />
        </label>
      </div>
      <label className="absolute -left-[10000px]" aria-hidden="true">
        Website
        <input autoComplete="off" name="website" onChange={updateField('website')} tabIndex="-1" type="text" value={form.website} />
      </label>
      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-primary-container px-6 py-3.5 text-base font-bold text-on-primary-container transition hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] disabled:cursor-wait disabled:opacity-70" disabled={status === 'submitting'} type="submit">
        {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        {status !== 'submitting' && <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>}
      </button>
      {message && (
        <p className={`mt-4 text-sm leading-relaxed ${status === 'success' ? 'text-tertiary' : 'text-error'}`} role={status === 'error' ? 'alert' : 'status'}>
          {message}
        </p>
      )}
    </form>
  );
}

function DroneDockingSystemsPage() {
  const pageTitle = 'Custom Drone Docking Systems | FPCA Technologies';
  const pageDescription = 'FPCA Technologies designs and develops custom drone docking stations and docking-system integrations for customer aircraft, missions and operating environments.';
  const canonicalUrl = `https://www.fpcatechnologies.com${dockingServicePath}`;

  usePageMetadata({ title: pageTitle, description: pageDescription, canonical: canonicalUrl });

  const capabilities = [
    {
      icon: 'precision_manufacturing',
      title: 'Docking station engineering',
      copy: 'Mechanical docking concepts and station architecture developed around your drone geometry, payload and deployment constraints.',
    },
    {
      icon: 'electric_bolt',
      title: 'Power and charging integration',
      copy: 'Electrical interfaces and charging or power-transfer functions can be evaluated and integrated when required by the project.',
    },
    {
      icon: 'sensors',
      title: 'Guidance and station controls',
      copy: 'Support for alignment, landing, sensing, telemetry and station-control requirements as part of the complete docking workflow.',
    },
    {
      icon: 'integration_instructions',
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
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(dockingServiceSchema) }} type="application/ld+json" />
      <TopNav activePage="docking" ctaHref="#docking-enquiry" ctaLabel="Discuss a Project" />

      <main className="pt-16 sm:pt-20" id="main-content">
        <section className="relative overflow-hidden border-b border-outline-variant/20">
          <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 relative z-10">
            <div className="max-w-4xl">
              <p className="mb-5 font-label text-xs uppercase tracking-[0.2em] text-tertiary">Custom Drone Docking Systems</p>
              <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-7">Have a drone docking requirement?</h1>
              <p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-on-surface-variant mb-10">
                We design, build, test and deploy custom drone docking ports tailored to your operating environment and project requirements.
              </p>
              <a className="inline-flex items-center justify-center gap-2 bg-primary-container px-8 py-4 text-lg font-semibold text-on-primary-container transition-all hover:shadow-[0_0_20px_rgba(46,91,255,0.4)]" href="#docking-enquiry">
                Share Your Requirement
                <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 md:py-24" id="capabilities">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <p className="mb-3 font-label text-xs uppercase tracking-[0.2em] text-primary">What We Can Develop</p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-5">A docking solution shaped around your operation</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">Every drone, site and mission has different constraints. FPCA begins with the requirement and defines the appropriate docking architecture with the customer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/20">
              {capabilities.map((capability) => (
                <article className="bg-surface-container-high p-8 md:p-10" key={capability.title}>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true">{capability.icon}</span>
                  <h3 className="font-headline text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{capability.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="mb-3 font-label text-xs uppercase tracking-[0.2em] text-tertiary">Where It Fits</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Built for repeatable drone operations</h2>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-8">Docking infrastructure can support operations where drones need a reliable home point, automated turnaround or integration with a larger site system.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((useCase) => (
                <li className="flex items-start gap-3 text-lg" key={useCase}>
                  <span className="material-symbols-outlined text-tertiary" aria-hidden="true">check_circle</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-outline-variant/20 bg-surface-container-low py-16 md:py-24" id="docking-enquiry">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-tertiary">Start a Conversation</p>
              <h2 className="mb-6 font-headline text-4xl font-bold md:text-5xl">Share the requirement. We will help define the next step.</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">Tell us about the drone, operating environment and outcome you need. We will review whether FPCA can support the project and contact you directly.</p>
            </div>
            <div className="lg:col-span-6">
              <DockingInquiryForm />
            </div>
          </div>
        </section>

      </main>
      <SiteFooter description="Custom drone docking system development and autonomous connector delivery engineering from Kochi, India." />
    </>
  );
}

function CareersPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} type="application/ld+json" />
      <TopNav activePage="careers" ctaHref={applicationFormUrl} ctaLabel="Apply Now" />

      <main className="pt-16 sm:pt-20" id="main-content">
        <section className="relative min-h-[72vh] lg:min-h-[78vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,228,117,0.16),transparent_30%),linear-gradient(135deg,rgba(46,91,255,0.18),transparent_45%)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 py-12 lg:py-24">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-sm mb-6">
                <span className="w-2 h-2 bg-tertiary rounded-full"></span>
                <span className="text-[0.6875rem] font-label uppercase tracking-[0.2em] text-on-surface-variant">Careers at FPCA</span>
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-5 lg:mb-6">
                Build the future of <span className="text-primary-container">industrial electrification</span>
              </h1>
              <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl mb-6 lg:mb-10 leading-relaxed font-light">
                Join our engineering team building autonomous tethered drone systems that deliver grid power to heavy electric machines.
              </p>
              <div className="lg:hidden bg-surface-container-high border border-outline-variant/20 p-5 mb-6">
                <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-3">Open now</p>
                <h2 className="font-headline text-2xl font-bold mb-4">UAV Robotics Software Intern</h2>
                <div className="grid grid-cols-2 gap-3 text-sm text-on-surface-variant mb-5">
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-primary">schedule</span>
                    3 months
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-primary">apartment</span>
                    On-site
                  </span>
                  <span className="inline-flex items-center gap-2 col-span-2">
                    <span className="material-symbols-outlined text-base text-primary">location_on</span>
                    Maker Village, Kochi
                  </span>
                </div>
                <a className="w-full bg-primary-container text-on-primary-container px-5 py-3 font-semibold inline-flex items-center justify-center gap-2" href={applicationFormUrl}>
                  Apply for Internship
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="bg-primary-container text-on-primary-container px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(46,91,255,0.4)]" href="#openings">
                  View Open Roles
                  <span className="material-symbols-outlined">arrow_downward</span>
                </a>
                <a className="border border-outline-variant hover:bg-surface-container-high px-8 py-4 text-lg font-semibold transition-colors text-center" href={`mailto:${careersEmail}`}>
                  Send Your Profile
                </a>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20">
                <img
                  alt="Engineers testing industrial drone hardware"
                  className="w-full aspect-[4/3] object-cover"
                  decoding="async"
                  height="1200"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop"
                  width="1600"
                />
                <div className="p-6 border-t border-outline-variant/20">
                  <p className="font-label text-xs uppercase tracking-widest text-primary mb-2">Hiring Focus</p>
                  <p className="text-white text-lg font-medium">UAV robotics software, autonomous navigation, flight control integration, and field testing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">About FPCA</p>
                <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-6">Powering heavy EVs without the battery bottleneck</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  FPCA is developing an autonomous system in which a drone transports an electrical connector to an elevated grid-connected docking port. After docking, the drone powers down while the machine receives electricity through the tether.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 lg:p-8 bg-surface-container-high">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">electric_bolt</span>
                  <h3 className="text-2xl font-headline font-bold mb-4">Grid power in motion</h3>
                  <p className="text-on-surface-variant leading-relaxed">Our autonomous tethered drone enables heavy machines to draw power directly from the electrical grid, reducing battery dependence and downtime.</p>
                </div>
                <div className="p-6 lg:p-8 bg-surface-container-high">
                  <span className="material-symbols-outlined text-tertiary text-4xl mb-6">precision_manufacturing</span>
                  <h3 className="text-2xl font-headline font-bold mb-4">Real product engineering</h3>
                  <p className="text-on-surface-variant leading-relaxed">Incubated at Maker Village, Kerala Startup Mission Integrated Startup Complex, we work across UAVs, robotics, embedded systems, and autonomous navigation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-28 bg-background" id="openings">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">Current opening</p>
                <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">UAV Robotics Software Intern</h2>
              </div>
              <p className="text-on-surface-variant max-w-md leading-relaxed">A hands-on internship for makers who want to build autonomous drone systems for real-world industrial electrification.</p>
            </div>

            <div className="space-y-4">
              {openings.map((opening) => (
                <article className="bg-surface-container-high p-5 md:p-8 border border-outline-variant/20" key={opening.title}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-headline font-bold mb-3">{opening.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-on-surface-variant">
                        <span className="inline-flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-primary">work</span>
                          {opening.type}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-primary">schedule</span>
                          {opening.duration}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-primary">apartment</span>
                          {opening.mode}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-primary">location_on</span>
                          {opening.location}
                        </span>
                      </div>
                      <p className="text-on-surface-variant mt-4 leading-relaxed">{opening.focus}</p>
                    </div>
                    <a className="w-full lg:w-auto shrink-0 bg-primary-container text-on-primary-container px-6 py-3 font-semibold inline-flex items-center justify-center gap-2" href={applicationFormUrl}>
                      Apply
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 lg:mt-10 pt-8 border-t border-outline-variant/20">
                    <div className="lg:col-span-2">
                      <h4 className="font-headline text-xl md:text-2xl font-bold mb-5">What you will work on</h4>
                      <ul className="space-y-3 text-on-surface-variant">
                        {responsibilities.map((item) => (
                          <li className="flex gap-3 leading-relaxed" key={item}>
                            <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">check_circle</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <aside className="space-y-6">
                      <div>
                        <h4 className="font-headline text-xl font-bold mb-4">Core tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {['ROS 2', 'Python', 'C++', 'Linux', 'Pixhawk', 'MAVLink', 'ArduPilot/PX4', 'Raspberry Pi'].map((tool) => (
                            <span className="bg-surface-container-low px-3 py-2 text-sm text-on-surface-variant border border-outline-variant/20" key={tool}>{tool}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-headline text-xl font-bold mb-4">Systems exposure</h4>
                        <div className="flex flex-wrap gap-2">
                          {['GPS', 'LiDAR', 'Cameras', 'UWB', 'Telemetry', 'Tether control'].map((system) => (
                            <span className="bg-surface-container-low px-3 py-2 text-sm text-on-surface-variant border border-outline-variant/20" key={system}>{system}</span>
                          ))}
                        </div>
                      </div>
                    </aside>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                    <div className="bg-surface-container-low p-5 md:p-6">
                      <h4 className="font-headline text-xl md:text-2xl font-bold mb-5">Who should apply</h4>
                      <ul className="space-y-3 text-on-surface-variant">
                        {qualifications.map((item) => (
                          <li className="flex gap-3 leading-relaxed" key={item}>
                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">radio_button_checked</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-surface-container-low p-5 md:p-6">
                      <h4 className="font-headline text-xl md:text-2xl font-bold mb-5">What you will gain</h4>
                      <ul className="space-y-3 text-on-surface-variant">
                        {gains.map((item) => (
                          <li className="flex gap-3 leading-relaxed" key={item}>
                            <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">trending_up</span>
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

        <section className="py-16 lg:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">Hiring process</p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Practical, engineering-led interviews</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">We focus on how you reason, build, test, and communicate tradeoffs. Expect direct conversations with the people building the system.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Profile review', 'Technical conversation', 'Work sample discussion', 'Offer and onboarding'].map((step, index) => (
                <div className="p-6 bg-surface-container-high" key={step}>
                  <div className="text-4xl font-headline font-black text-primary/40 mb-6">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-bold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-container/10"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-headline text-3xl md:text-6xl font-bold mb-8">Ready to work on real UAV systems?</h2>
            <p className="text-xl text-on-surface-variant mb-10">Apply for the 3-month on-site internship at Maker Village, KINFRA Hi-Tech Park, Kalamassery, Kochi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a className="bg-primary-container text-on-primary-container px-10 py-5 text-xl font-bold inline-flex items-center justify-center gap-3 transition-all hover:scale-105" href={applicationFormUrl}>
                Apply Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a className="border border-outline-variant hover:bg-surface-container-high px-10 py-5 text-xl font-bold inline-flex items-center justify-center gap-3 transition-colors" href={`mailto:${careersEmail}`}>
                Ask a Question
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter description="Join the FPCA engineering team working across UAVs, robotics, embedded systems and industrial electrification." />
    </>
  );
}

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const isCareersPage = currentPath === '/career' || currentPath === '/careers';
  const isApplicationPage = currentPath === '/career/apply' || currentPath === '/careers/apply';
  const isDockingServicePage = currentPath === dockingServicePath || currentPath === '/drone-docking-stations';

  const routeMetadata = isDockingServicePage
    ? {
        title: 'Custom Drone Docking Systems | FPCA Technologies',
        description: 'FPCA Technologies designs, builds, tests and deploys custom drone docking systems for customer aircraft, missions and operating environments.',
        canonical: `https://www.fpcatechnologies.com${dockingServicePath}`,
      }
    : isApplicationPage
      ? {
          title: 'Apply for UAV Robotics Internship | FPCA Technologies',
          description: 'Apply for the UAV Robotics Software Internship at FPCA Technologies in Kochi, India.',
          canonical: 'https://www.fpcatechnologies.com/career/apply',
        }
      : isCareersPage
        ? {
            title: 'Careers in UAV Robotics | FPCA Technologies',
            description: 'Join FPCA Technologies in Kochi to work on UAV robotics, autonomous navigation and industrial electrification.',
            canonical: 'https://www.fpcatechnologies.com/career',
          }
        : {
            title: 'FPCA Technologies | Autonomous Grid Connection for Heavy Machinery',
            description: 'FPCA Technologies is developing autonomous connector delivery for grid-powered heavy electric machinery and custom drone docking systems.',
            canonical: 'https://www.fpcatechnologies.com/',
          };

  usePageMetadata(routeMetadata);

  if (isApplicationPage) {
    return <CareerApplicationPage />;
  }

  if (isCareersPage) {
    return <CareersPage />;
  }

  if (isDockingServicePage) {
    return <DroneDockingSystemsPage />;
  }

  return (
    <>
      <TopNav activePage="home" ctaHref="#docking-enquiry" ctaLabel="Discuss a Project" secondaryHref="#how-it-works" secondaryLabel="How It Works" />

      <main id="main-content">
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20">
          <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <p className="mb-5 font-label text-xs uppercase tracking-[0.2em] text-tertiary">Autonomous Grid Connection</p>
              <h1 className="mb-7 max-w-4xl font-headline text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                Grid power for heavy electric machinery, delivered by an autonomous drone.
              </h1>
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                FPCA is developing a system that carries and docks an electrical connector between heavy machinery and a nearby grid connection. The drone powers down after docking.
              </p>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-2 bg-primary-container px-7 py-4 text-base font-semibold text-on-primary-container transition-all hover:shadow-[0_0_20px_rgba(46,91,255,0.4)]" href="#how-it-works">
                  See How It Works
                  <span aria-hidden="true" className="material-symbols-outlined">arrow_downward</span>
                </a>
                <a className="inline-flex items-center justify-center border border-outline-variant px-7 py-4 text-base font-semibold transition-colors hover:bg-surface-container-high" href="#docking-enquiry">
                  Discuss Your Machine
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-surface-variant">
                <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-tertiary"></span>Prototype development</span>
                <span>Maker Village, Kochi, India</span>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <figure className="overflow-hidden border border-outline-variant/30 bg-surface-container-low shadow-2xl">
                <img alt="Concept visualization of a drone carrying an electrical connector" className="aspect-square w-full object-cover" decoding="async" fetchpriority="high" height="512" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfU0ZHO-g187GCEYNQDUWl5OtHjEFmRxmx3NHoeJ59E-Z3lVdMZSv7FE_zPnuDeT-0nnlE7fWYc6tNPSDC9qfzx595axzQXKXQNH9k7VDf2wmCLItpddeJpzLvocMR1KXtRj1xteHnxugtlq8xtHXJnva5Kst9_s4PcWB60aKYOyCMu-T6pzki8-A7-VrCcOrfUSbhlhvNsXevF21KNG2hQ0qaCyFcn5Y-c5jFXZJ68lhWkK6fPLLK53LMnztaJFKQw39UjmLUM6M" width="512" />
                <figcaption className="border-t border-outline-variant/30 px-5 py-4 text-sm text-on-surface-variant">Concept visualization: autonomous connector delivery</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/20 bg-surface-container-low py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-primary">The Engineering Problem</p>
              <h2 className="mb-6 font-headline text-3xl font-bold md:text-5xl">Large batteries can limit high-duty electric machinery.</h2>
              <div className="space-y-4 text-lg leading-relaxed text-on-surface-variant">
                <p>Heavy machines need sustained power. Increasing battery capacity also adds mass, cost and charging time.</p>
                <p>Where suitable electrical infrastructure is available nearby, a direct grid connection may offer another path. FPCA is engineering the autonomous connection system needed to make that practical.</p>
              </div>
            </div>
            <aside className="border-l-2 border-primary-container bg-surface-container-high p-6 md:p-8 lg:col-span-5">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-tertiary">The Core Idea</p>
              <p className="font-headline text-2xl font-semibold leading-relaxed">Use the drone to deliver the connector, not to carry the machine's operating power.</p>
            </aside>
          </div>
        </section>

        <section className="py-16 md:py-24" id="how-it-works">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-tertiary">How It Works</p>
              <h2 className="mb-5 font-headline text-3xl font-bold md:text-5xl">The drone completes the connection. The cable supplies the power.</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">The concept separates connector delivery from energy delivery, so the drone does not need to hover continuously while the machine operates.</p>
            </div>
            <ol className="grid grid-cols-1 gap-px border border-outline-variant/20 bg-outline-variant/20 md:grid-cols-3">
              {systemSteps.map((step) => (
                <li className="relative bg-surface-container-high p-7 md:p-9" key={step.number}>
                  <span aria-hidden="true" className="absolute right-5 top-4 font-headline text-5xl font-black text-white/10">{step.number}</span>
                  <span aria-hidden="true" className="material-symbols-outlined mb-7 text-4xl text-primary">{step.icon}</span>
                  <h3 className="mb-3 pr-10 font-headline text-2xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-outline-variant/20 bg-surface-container-low py-16 md:py-24" id="development">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-primary">Development Direction</p>
              <h2 className="mb-5 font-headline text-3xl font-bold md:text-5xl">A focused engineering programme, not an off-the-shelf claim.</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">FPCA is developing and validating the connector-delivery system while evaluating the operating conditions required for real deployments.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {developmentFacts.map((fact) => (
                <article className="border-t-2 border-primary bg-background p-6" key={fact.label}>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-on-surface-variant">{fact.label}</p>
                  <h3 className="mb-3 font-headline text-xl font-bold">{fact.value}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{fact.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" id="fit">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-tertiary">Application Fit</p>
              <h2 className="mb-5 font-headline text-3xl font-bold md:text-5xl">Could FPCA help your machine or site?</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">The concept is most relevant where high-duty machinery operates in a defined area with suitable electrical infrastructure nearby.</p>
            </div>
            <div className="lg:col-span-6">
              <ul className="grid gap-3">
                {fitCriteria.map((criterion) => (
                  <li className="flex items-start gap-3 border-b border-outline-variant/20 pb-3 text-base leading-relaxed" key={criterion}>
                    <span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-xl text-tertiary">check_circle</span>
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
              <a className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-white" href="#docking-enquiry">
                Share your operating requirement
                <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/20 bg-surface-container-low py-16 md:py-24" id="applications">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-primary">Application Areas</p>
              <h2 className="mb-5 font-headline text-3xl font-bold md:text-5xl">Starting with agriculture. Evaluating other high-duty sectors.</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">Each application depends on site layout, electrical infrastructure, operating duty and safety requirements.</p>
            </div>
            <div className="grid grid-cols-1 gap-px border border-outline-variant/20 bg-outline-variant/20 lg:grid-cols-12">
              <article className="overflow-hidden bg-surface-container-high lg:col-span-7">
                <img alt="Agriculture application area" className="aspect-[16/9] w-full object-cover" decoding="async" height="288" loading="lazy" src={applicationAreas[0].image} width="512" />
                <div className="p-6 md:p-8">
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary">{applicationAreas[0].label}</p>
                  <h3 className="mb-3 font-headline text-2xl font-bold">{applicationAreas[0].title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{applicationAreas[0].copy}</p>
                </div>
              </article>
              <div className="grid bg-outline-variant/20 lg:col-span-5">
                {applicationAreas.slice(1).map((area) => (
                  <article className="bg-surface-container-high p-6 md:p-8" key={area.title}>
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary">{area.label}</p>
                    <h3 className="mb-3 font-headline text-2xl font-bold">{area.title}</h3>
                    <p className="leading-relaxed text-on-surface-variant">{area.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" id="docking-enquiry">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-tertiary">Customer Engineering</p>
              <h2 className="mb-6 font-headline text-3xl font-bold md:text-5xl">Tell us about your machine, drone or docking requirement.</h2>
              <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">FPCA develops custom drone docking systems and evaluates industrial connector-delivery applications. Share the operating need and environment; we will review whether there is a practical fit.</p>
              <a className="inline-flex items-center gap-2 font-semibold text-primary hover:text-white" href={dockingServicePath}>
                View custom drone docking capabilities
                <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="lg:col-span-6">
              <DockingInquiryForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
