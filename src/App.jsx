import React, { useState } from 'react';

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
const applicationFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdJ9j_87dLK8leaJUUzpxwn-hiM2h8YHPGv013lZ-xRY9yhTQ/viewform?usp=header';

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
  { label: 'Benefits', href: '/#benefits', key: 'benefits' },
  { label: 'Applications', href: '/#applications', key: 'applications' },
  { label: 'Careers', href: '/career', key: 'careers' },
];

function TopNav({ activePage = 'home', ctaHref, ctaLabel, ctaExternal = false, secondaryHref, secondaryLabel }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ctaProps = ctaExternal ? { rel: 'noreferrer', target: '_blank' } : {};

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl shadow-2xl shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 font-['Space_Grotesk'] tracking-tight">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a className="text-2xl font-bold tracking-tighter text-white shrink-0" href="/">FPCA</a>
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
              <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
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
  );
}

function CareersPage() {
  return (
    <>
      <TopNav activePage="careers" ctaExternal ctaHref={applicationFormUrl} ctaLabel="Apply Now" />

      <main className="pt-16 sm:pt-20">
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
                <a className="w-full bg-primary-container text-on-primary-container px-5 py-3 font-semibold inline-flex items-center justify-center gap-2" href={applicationFormUrl} rel="noreferrer" target="_blank">
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
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop"
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
                  {companyName} is developing a tethered drone-based power delivery system for off-highway electric vehicles such as excavators, backhoe loaders, and tractors.
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
                    <a className="w-full lg:w-auto shrink-0 bg-primary-container text-on-primary-container px-6 py-3 font-semibold inline-flex items-center justify-center gap-2" href={applicationFormUrl} rel="noreferrer" target="_blank">
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
              <a className="bg-primary-container text-on-primary-container px-10 py-5 text-xl font-bold inline-flex items-center justify-center gap-3 transition-all hover:scale-105" href={applicationFormUrl} rel="noreferrer" target="_blank">
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

      <footer className="w-full py-12 border-t border-[#2a2a2a] bg-[#131313] font-['Inter'] text-sm tracking-wide">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="font-['Space_Grotesk'] text-xl font-bold text-white mb-4">{companyName}</div>
            <p className="text-gray-500 max-w-xl leading-relaxed">Revolutionizing industrial power delivery through autonomous flight tethering technology.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-gray-500">
            <a className="hover:text-[#2E5BFF] transition-colors" href="/">Home</a>
            <a className="hover:text-[#2E5BFF] transition-colors" href="/#solution">Solution</a>
            <a className="hover:text-[#2E5BFF] transition-colors" href="/career">Careers</a>
            <a className="hover:text-[#2E5BFF] transition-colors" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a className="hover:text-[#2E5BFF] transition-colors" href={applicationFormUrl} rel="noreferrer" target="_blank">Apply</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const isCareersPage = currentPath === '/career' || currentPath === '/careers';

  if (isCareersPage) {
    return <CareersPage />;
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <TopNav activePage="home" ctaHref={`mailto:${contactEmail}`} ctaLabel="Contact Us" secondaryHref="#solution" secondaryLabel="Learn More" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-sm mb-6">
              <span className="w-2 h-2 bg-tertiary rounded-full"></span>
              <span className="text-[0.6875rem] font-label uppercase tracking-[0.2em] text-on-surface-variant">The Kinetic Blueprint</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              FPCA <span className="text-primary-container">TECHNOLOGIES</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-light">
              Accelerating adoption of off-highway electric vehicles with a new way of providing power. Tethering heavy machinery to the grid via autonomous flight.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-primary-container text-on-primary-container px-8 py-4 text-lg font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(46,91,255,0.4)]" href="#solution">
                Explore Technology
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a className="border border-outline-variant hover:bg-surface-container-high px-8 py-4 text-lg font-semibold transition-colors" href="#applications">
                Watch Technical Demo
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-2xl relative group">
              <img alt="Industrial drone tether concept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="High-tech industrial drone in mid-air connected by a glowing power cable to a heavy electric excavator in a quarry at twilight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfU0ZHO-g187GCEYNQDUWl5OtHjEFmRxmx3NHoeJ59E-Z3lVdMZSv7FE_zPnuDeT-0nnlE7fWYc6tNPSDC9qfzx595axzQXKXQNH9k7VDf2wmCLItpddeJpzLvocMR1KXtRj1xteHnxugtlq8xtHXJnva5Kst9_s4PcWB60aKYOyCMu-T6pzki8-A7-VrCcOrfUSbhlhvNsXevF21KNG2hQ0qaCyFcn5Y-c5jFXZJ68lhWkK6fPLLK53LMnztaJFKQw39UjmLUM6M" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card border-l-2 border-primary-container">
                <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">Status: Operational</p>
                <p className="text-white font-medium">Continuous Grid Connection Achieved</p>
              </div>
            </div>
            {/* Abstract Geometric Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary-container/30 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-8">The Battery Bottleneck</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>Current industrial electrification faces a critical paradox: Heavy machinery requires immense power, yet massive batteries introduce "Charge Anxiety" and crippling weight.</p>
                <p>Relying on static charging stations leads to 30% downtime for industrial fleets, stalling productivity and inflating operational overhead.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-surface-container-high flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-error text-4xl" data-icon="battery_alert">battery_alert</span>
                <div>
                  <p className="text-3xl font-headline font-bold text-white mb-2">30%</p>
                  <p className="text-sm font-label uppercase tracking-wider text-on-surface-variant">Fleet Downtime</p>
                </div>
              </div>
              <div className="p-8 bg-surface-container-high flex flex-col justify-between aspect-square translate-y-8">
                <span className="material-symbols-outlined text-error text-4xl" data-icon="trending_up">trending_up</span>
                <div>
                  <p className="text-3xl font-headline font-bold text-white mb-2">2x</p>
                  <p className="text-sm font-label uppercase tracking-wider text-on-surface-variant">Maintenance Cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 overflow-hidden" id="solution">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-5xl font-bold mb-6">Continuous Energy. <br /><span className="text-primary">Autonomous Tethering.</span></h2>
            <p className="text-xl text-on-surface-variant">We replace massive batteries with a dynamic, flying conduit that follows your fleet wherever the work is.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative p-10 bg-surface-container-high overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-8xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors">01</div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="precision_manufacturing">precision_manufacturing</span>
              <h3 className="text-2xl font-bold mb-4">Autonomous Flight</h3>
              <p className="text-on-surface-variant">Precision drone flight controllers maintain perfect positioning, ensuring the cable never interferes with machine movement.</p>
            </div>
            {/* Step 2 */}
            <div className="group relative p-10 bg-surface-container-high overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-8xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors">02</div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="power">power</span>
              <h3 className="text-2xl font-bold mb-4">High-Tension Link</h3>
              <p className="text-on-surface-variant">Optimized power cables deliver grid-level voltage directly to the machine's motor, bypassing the need for storage.</p>
            </div>
            {/* Step 3 */}
            <div className="group relative p-10 bg-surface-container-high overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-8xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors">03</div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="sync">sync</span>
              <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-on-surface-variant">Compatible with existing electric excavator and tractor architectures, making the transition to FPCA effortless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section (Kinetic Stats) */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10" id="benefits">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-tertiary">95%</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Carbon <br />Reduction</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-primary">70%</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Fuel Cost <br />Savings</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-primary">40%</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Operating <br />Cost Cut</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-white">90%+</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Total <br />Efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center">Efficiency Engineering</h2>
          <div className="bg-surface-container-high p-1 rounded-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-highest">
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Energy Technology</th>
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Efficiency %</th>
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Emissions</th>
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Reliability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                <tr>
                  <td className="p-6 font-bold text-primary">FPCA Grid Link</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[95%]"></div>
                      </div>
                      <span>95%</span>
                    </div>
                  </td>
                  <td className="p-6 text-tertiary">Zero Local</td>
                  <td className="p-6">Max (Continuous)</td>
                </tr>
                <tr>
                  <td className="p-6 text-on-surface-variant">Battery Electric</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-on-surface-variant w-[80%]"></div>
                      </div>
                      <span>80%</span>
                    </div>
                  </td>
                  <td className="p-6">Zero Local</td>
                  <td className="p-6">Variable (Charging)</td>
                </tr>
                <tr>
                  <td className="p-6 text-on-surface-variant">Fossil Fuel (Diesel)</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-error w-[35%]"></div>
                      </div>
                      <span>35%</span>
                    </div>
                  </td>
                  <td className="p-6 text-error">High Impact</td>
                  <td className="p-6">High (Refueling)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Bento Grid */}
      <section className="py-32 bg-surface" id="applications">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-5xl font-bold mb-16">Universal <span className="text-primary-container">Utility</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Construction */}
            <div className="group relative h-[500px] overflow-hidden rounded-xl">
              <img alt="Construction application" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Massive electric excavator working in a modern urban construction site with futuristic glass buildings in the background at dawn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYm-H2gI10V9dO_sEIvMpufRHeD7V27rm_ouMKJ7op6MoJLYul14VA1Cj3GYRJm60JFWsdqzwOkANtBOXIcFp0SCFwE-qwjOq4HB-QWBr_kDpQJdX6Yidts4AbL6Va-0Hj7XluTfLomI7SUgQIKiGhwjhxX8ujlro7yMFFRvbb_lIcMKWugsA5SHHfE-zP6RRIPd0OKgm0J0hJpob_KzWSUaRGSBYBwP1-9FWZ3BNKB2VKSIgOqCeWkC0GfWwmiWFh5ReXAWmBuZ4" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.6rem] font-label uppercase tracking-widest text-primary mb-2 inline-block">Infrastructure</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Construction</h3>
                <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Eliminate diesel fumes in urban centers and power high-torque heavy excavators 24/7 without refueling stops.</p>
              </div>
            </div>
            {/* Mining */}
            <div className="group relative h-[500px] overflow-hidden rounded-xl">
              <img alt="Mining application" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Autonomous electric mining truck operating in a deep open-pit mine with dramatic high-contrast lighting from floodlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoUWf7HYr656HMvtuEtk6PEKoX49jpymCAkCPAr60pP4SL8YGvjzuocKuOlmfqaxBZJzAPjkcNhZ5kQcCh1PCniQN9pBGuzcKORzf8Fv_0i7pfw2LXCGrxoYFnFpkndVx8RZy9vDa2tX-Yw-e9Zhqq28SVn5fbRRRdRUg6iddCEFvXsR9ssD5CNmC4SzXLScCqzXi1VSMN40W8Kpmf79TeYcg1aW_gp0uywd-RnbGOMUCcjdSf5VIvL271izEnocFUYlVCS6m8lks" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.6rem] font-label uppercase tracking-widest text-primary mb-2 inline-block">Extraction</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Mining</h3>
                <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Deep-pit operations benefit from reduced ventilation costs as electric machines generate zero heat and exhaust.</p>
              </div>
            </div>
            {/* Agriculture */}
            <div className="group relative h-[500px] overflow-hidden rounded-xl bg-surface-container-high">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594398911514-18e49339241f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" data-alt="Futuristic autonomous electric tractor plowing a vast agricultural field under a clear blue sky at sunset" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGPZgM7kcntk7Wp_Slp1PSO4VXGnprtYdtuCua_5qqGqc1AWqcokr3_fWRYAAX0-l1H8P_usxaJT0c2Z_sGRwP2dUmiDaVcm26Uts_MwmIJ1BtXzpsArIO2qCsPDBK7HG6iACC2WH3bZPmr5B_FrC1CCuIj9sl2Y1A7xAVXXbd5if_GcxloO8j9-vaveGzC-1CRVN-U03vOxECGXg9BUsEOJWurXEp-CycSGe8NkppNLoNvCuSJER-mfSWJEVsgkXN2TBwUYIfPtk')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.6rem] font-label uppercase tracking-widest text-primary mb-2 inline-block">Cultivation</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Agriculture</h3>
                <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Power heavy tilling and harvesting equipment directly from renewable farm grids, slashing fuel dependency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8">Join the Sustainable Revolution</h2>
          <p className="text-xl text-on-surface-variant mb-12">Be at the forefront of the kinetic blueprint for a fossil-free industrial future.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a className="bg-primary-container text-on-primary-container px-10 py-5 text-xl font-bold transition-all hover:scale-105" href="/career">Join Our Team</a>
            <a className="border border-outline-variant hover:bg-surface-container-high px-10 py-5 text-xl font-bold transition-colors" href={`mailto:${contactEmail}`}>Request a Quote</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#2a2a2a] bg-[#131313] font-['Inter'] text-sm tracking-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          <div className="col-span-1 md:col-span-1">
            <div className="font-['Space_Grotesk'] text-xl font-bold text-white mb-4">{companyName}</div>
            <p className="text-gray-500 leading-relaxed mb-6">Revolutionizing industrial power delivery through autonomous flight tethering technology.</p>
            <div className="space-y-3 text-gray-500 text-sm">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" data-icon="location_on">location_on</span>
                <span className="leading-relaxed">Kerala Technology Innovation Zone, Kinfra Hi-Tech Park Main Rd, HMT Colony, North Kalamassery, Kalamassery, Kochi, Kerala 683503</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg" data-icon="call">call</span>
                <span>+918086430571</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg" data-icon="mail">mail</span>
                <a className="hover:text-[#2E5BFF] transition-colors" href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#solution">Solution</a></li>
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#benefits">Benefits</a></li>
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#applications">Applications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#">Terms of Service</a></li>
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="/career">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input className="bg-surface-container-high border-none text-white focus:ring-1 focus:ring-primary-container w-full px-4 py-2" placeholder="Email" type="email" />
              <button className="bg-primary-container p-2 text-on-primary-container">
                <span className="material-symbols-outlined" data-icon="send">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#2a2a2a] text-center text-gray-500">
          © 2026 {companyName}. Engineered for the Kinetic Blueprint.
        </div>
      </footer>
    </>
  );
}

export default App;
