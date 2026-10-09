// Shared site metadata, structured data and FAQ content.
// Used by the React pages (visible FAQ) and by scripts/build.mjs (pre-rendered <head>).

export const siteUrl = 'https://www.fpcatechnologies.com';
export const companyName = 'FPCA Technologies Private Limited';
export const contactEmail = 'admin@fpcatechnologies.com';
export const contactPhone = '+91 80864 30571';
export const linkedInUrl = 'https://www.linkedin.com/company/flying-power-cables-applications/';
export const logoUrl = `${siteUrl}/fpca-logo.png`;

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Maker Village, KINFRA Hi-Tech Park',
  addressLocality: 'Kalamassery, Kochi',
  addressRegion: 'Kerala',
  postalCode: '683503',
  addressCountry: 'IN',
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: companyName,
  alternateName: 'FPCA Technologies',
  url: `${siteUrl}/`,
  logo: logoUrl,
  description:
    'FPCA Technologies is an Indian deep-technology company developing autonomous connector delivery for grid-powered heavy machinery and custom drone docking systems for UAV operators.',
  email: contactEmail,
  telephone: contactPhone,
  sameAs: [linkedInUrl],
  address: postalAddress,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales and partnerships',
    email: contactEmail,
    telephone: contactPhone,
    availableLanguage: ['en'],
  },
  image: logoUrl,
  knowsAbout: [
    'Autonomous grid-power connector delivery for heavy machinery',
    'Tethered drone power delivery for electric off-highway machinery',
    'Drone docking station design and integration',
    'UAV autonomy, robotics software and flight-control integration',
    'Electrification of agricultural, construction and mining equipment',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: { '@id': `${siteUrl}/#autonomous-connector-delivery` },
      availability: 'https://schema.org/PreOrder',
      areaServed: { '@type': 'Country', name: 'India' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@id': `${siteUrl}/drone-docking-systems#service` },
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'Country', name: 'India' },
    },
  ],
};

export const connectorDeliverySchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/#autonomous-connector-delivery`,
  name: 'Autonomous Connector Delivery System',
  serviceType: 'Autonomous grid-power connector delivery for heavy machinery',
  provider: { '@id': `${siteUrl}/#organization` },
  areaServed: { '@type': 'Country', name: 'India' },
  url: `${siteUrl}/#solution`,
  image: `${siteUrl}/application-agriculture.webp`,
  description:
    'A tethered, drone-based power delivery system for heavy electric machinery. A drone carries an electrical connector from a machine-mounted cable reel to an elevated, grid-connected docking port, then powers down while grid electricity flows through the tether to the machine. The drone relocates the connector to the next port as the machine moves across the site. Stage: prototype development and validation. Primary market: agriculture; future markets: construction and mining.',
  category: 'Industrial power delivery for electric off-highway machinery',
  audience: {
    '@type': 'Audience',
    audienceType: 'Agricultural, construction and mining equipment operators and OEMs',
  },
};

export const dockingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/drone-docking-systems#service`,
  name: 'Custom Drone Docking System Engineering',
  alternateName: 'Custom Drone Docking System Development',
  serviceType: 'Drone docking station design, development and integration',
  description:
    'Requirement-led engineering of drone docking stations and related docking systems for UAV operators: docking-station design, power or charging integration, alignment and sensing, station controls, drone and autopilot integration, prototyping and testing. Scope is confirmed after a requirement review.',
  url: `${siteUrl}/drone-docking-systems`,
  areaServed: { '@type': 'Country', name: 'India' },
  provider: { '@id': `${siteUrl}/#organization` },
  audience: {
    '@type': 'Audience',
    audienceType: 'UAV manufacturers, drone operators, researchers and industrial teams',
  },
};

export const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'UAV Robotics Software Intern',
  description:
    'A three-month, full-time, on-site internship working on UAV autonomy, robotics software, flight-control integration, simulation, sensor integration, laboratory checks, and field testing.',
  datePosted: '2026-07-28',
  employmentType: 'INTERN',
  hiringOrganization: {
    '@type': 'Organization',
    name: companyName,
    sameAs: [siteUrl, linkedInUrl],
    logo: `${siteUrl}/fpca-mark.png`,
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
  url: `${siteUrl}/career`,
  applicationContact: {
    '@type': 'ContactPoint',
    email: contactEmail,
    contactType: 'Recruitment',
  },
};

export const faqItems = [
  {
    question: 'What does FPCA Technologies do?',
    answer:
      'FPCA Technologies Private Limited is a deep-technology company in Kochi, India. We are developing an autonomous connector delivery system that lets heavy electric machinery run directly on grid electricity instead of batteries, and we provide custom engineering of drone docking systems for UAV operators.',
  },
  {
    question: 'How does autonomous connector delivery work?',
    answer:
      'An underground grid supply feeds elevated docking ports placed along the work area. A drone carries the electrical connector from a cable reel mounted on the machine to the nearest port, docks, and powers down. Grid electricity then flows through the tether to the machine. As the machine works across the site, the drone relocates the connector to the next port. The drone does not hover while power is supplied.',
  },
  {
    question: 'Who is it for?',
    answer:
      'Agriculture is our primary market: compact farm machines such as tractors and tilling or harvesting equipment working bounded fields. Construction and mining are the next applications, including electric excavators and loaders on urban sites and in open pits.',
  },
  {
    question: 'Why is it better than diesel power or manual cable handling?',
    answer:
      'Compared with diesel, an electric machine on grid power produces no exhaust at the point of work and avoids refuelling stops and fuel logistics. Compared with a battery, there is no large pack to carry, charge or replace, and the machine is not limited by pack capacity. Compared with a manually handled cable, the connector is delivered and switched between ports autonomously, so an operator does not have to drag, route or reconnect a live cable as the machine moves.',
  },
  {
    question: 'What stage is the technology at?',
    answer:
      'The autonomous connector delivery system is under prototype development and validation. Published performance figures on this site are design targets, not independently verified field results. Measured figures will be published as validation progresses.',
  },
  {
    question: 'Do you build custom drone docking stations for other companies?',
    answer:
      'Yes. We design, build, test and deploy custom drone docking ports for customer aircraft and sites. Depending on the agreed scope this can cover docking-station engineering, power or charging integration, alignment, sensing and telemetry, station controls, drone and autopilot integration, prototyping and testing. Deliverables are confirmed after a requirement review.',
  },
  {
    question: 'How do I request a pilot, demo or quote?',
    answer:
      'Email admin@fpcatechnologies.com or call +91 80864 30571. For drone docking projects you can also use the enquiry form on this page. Tell us your machine or drone type, the site, and your timeline, and we will reply with next steps.',
  },
  {
    question: 'Where are you based?',
    answer:
      'We are incubated at Maker Village, Kerala Startup Mission\'s integrated startup complex at KINFRA Hi-Tech Park, Kalamassery, Kochi, Kerala 683503, India.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteUrl}/#faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

// One entry per pre-rendered route. `path` is the URL path; `alias` routes reuse another page's content.
export const pages = [
  {
    path: '/',
    title: 'FPCA Technologies — Grid power for heavy electric machinery by autonomous connector delivery',
    description:
      'FPCA Technologies develops autonomous connector delivery for grid-powered heavy machinery and custom drone docking systems for customer UAV operations. Based in Kochi, India.',
    schemas: [organizationSchema, connectorDeliverySchema, dockingServiceSchema, faqSchema],
  },
  {
    path: '/drone-docking-systems',
    title: 'Custom Drone Docking Systems | FPCA Technologies',
    description:
      'FPCA Technologies designs and develops custom drone docking stations and docking-system integrations for customer aircraft, missions and operating environments.',
    schemas: [organizationSchema, dockingServiceSchema],
  },
  {
    path: '/drone-docking-stations',
    canonical: '/drone-docking-systems',
    title: 'Custom Drone Docking Systems | FPCA Technologies',
    description:
      'FPCA Technologies designs and develops custom drone docking stations and docking-system integrations for customer aircraft, missions and operating environments.',
    schemas: [organizationSchema, dockingServiceSchema],
  },
  {
    path: '/career',
    title: 'Careers at FPCA Technologies — UAV Robotics Software Intern (Kochi)',
    description:
      'Join FPCA Technologies in Kochi. Current opening: UAV Robotics Software Intern, a 3-month on-site internship in UAV autonomy, robotics software and field testing.',
    schemas: [organizationSchema, jobPostingSchema],
  },
  {
    path: '/careers',
    canonical: '/career',
    title: 'Careers at FPCA Technologies — UAV Robotics Software Intern (Kochi)',
    description:
      'Join FPCA Technologies in Kochi. Current opening: UAV Robotics Software Intern, a 3-month on-site internship in UAV autonomy, robotics software and field testing.',
    schemas: [organizationSchema, jobPostingSchema],
  },
  {
    path: '/career/apply',
    title: 'Apply — UAV Robotics Software Intern | FPCA Technologies',
    description:
      'Application form for the UAV Robotics Software Intern position at FPCA Technologies, Maker Village, Kalamassery, Kochi.',
    schemas: [organizationSchema, jobPostingSchema],
  },
  {
    path: '/careers/apply',
    canonical: '/career/apply',
    title: 'Apply — UAV Robotics Software Intern | FPCA Technologies',
    description:
      'Application form for the UAV Robotics Software Intern position at FPCA Technologies, Maker Village, Kalamassery, Kochi.',
    schemas: [organizationSchema, jobPostingSchema],
  },
];
