export const hero = {
  eyebrow: 'IT consulting & software engineering',
  title: 'We build the software your business runs on.',
  text: 'TechUp9 helps startups and growing companies design, build and operate reliable software - from cloud platforms on AWS to applications, backend systems, data pipelines and analytics.',
  highlights: ['Senior engineering team', 'Strategy through to production', 'Long-term partnership'],
  deliverables: ['Cloud & AWS', 'Applications', 'Backend & APIs', 'Data & analytics', 'Applied AI'],
};

export const sections = {
  services: {
    eyebrow: 'Services',
    title: 'End-to-end technology expertise',
    text: 'Strategic advice backed by hands-on engineering. We take you from first conversation to a reliable system in production, and stay to help it grow.',
  },
  approach: {
    eyebrow: 'Approach',
    title: 'A clear path from idea to production',
    text: 'A collaborative way of working built on transparency, short feedback loops and shared ownership.',
  },
  work: {
    eyebrow: 'Client success',
    title: 'Proven in production',
    text: 'We measure our work by how long it runs and how well it serves our clients and their users.',
  },
  whyUs: {
    eyebrow: 'Why TechUp9',
    title: 'Principles behind every engagement',
    text: 'We work as an extension of your team, with a focus on measurable business outcomes.',
  },
};

export const services = [
  {
    icon: 'compass',
    title: 'IT Strategy & Consulting',
    text: 'Pragmatic technology roadmaps covering architecture, build-versus-buy decisions, team setup, security and cost - from people who also deliver.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & AWS Engineering',
    text: 'Secure, scalable and cost-efficient AWS architectures, migrations, infrastructure as code, CI/CD and observability.',
  },
  {
    icon: 'app',
    title: 'Product & App Development',
    text: 'Web and mobile applications built with modern frameworks, from first MVP to mature product, with quality and user experience built in.',
  },
  {
    icon: 'server',
    title: 'Backend & API Platforms',
    text: 'Reliable backend services, APIs and integrations, and modernization of legacy systems into maintainable, well-tested platforms.',
  },
  {
    icon: 'pipeline',
    title: 'Data Engineering',
    text: 'Batch and real-time data pipelines, data lakes and warehouses with the quality checks and governance needed to trust your data.',
  },
  {
    icon: 'chart',
    title: 'Analytics & BI',
    text: 'Meaningful metrics, dashboards and reporting that give leadership and teams a shared, evidence-based view of the business.',
  },
  {
    icon: 'spark',
    title: 'Applied AI & ML',
    text: 'Practical machine learning and large language model features, integrated securely into your products and operations where they add value.',
  },
];

export const process = [
  {
    title: 'Discover',
    text: 'Understand your business, users, systems and constraints. Agree on goals and how success is measured.',
  },
  {
    title: 'Design',
    text: 'Shape the solution and architecture, plan delivery and validate the biggest risks early.',
  },
  {
    title: 'Deliver',
    text: 'Build in short, transparent iterations with automated testing, regular demos and continuous delivery.',
  },
  {
    title: 'Run & evolve',
    text: 'Operate, monitor and improve the platform, and share knowledge so your team can own it.',
  },
];

export const principles = [
  {
    title: 'Ownership',
    text: 'We take responsibility for what we build, from the first line of code to production.',
  },
  {
    title: 'Engineering excellence',
    text: 'Quality, security and maintainability are built in, never bolted on.',
  },
  {
    title: 'Transparency',
    text: 'Honest advice, clear communication and no surprises on scope, time or cost.',
  },
  {
    title: 'Pragmatism',
    text: 'The simplest solution that solves the problem and scales with your business.',
  },
  {
    title: 'Partnership',
    text: 'We work as one team with our clients and share knowledge openly.',
  },
  {
    title: 'Continuous learning',
    text: 'Technology moves fast. We keep learning so our clients stay ahead.',
  },
];

export const caseStudies = [
  {
    slug: 'seven-re-etarif',
    client: 'Seven-RE',
    clientUrl: 'https://seven-re.com/',
    product: 'VRN eTarif app',
    title: 'An end-to-end mobile ticketing platform, in production for eight years',
    summary:
      "TechUp9 built the complete platform behind Seven-RE's VRN eTarif app, letting public transport passengers in the Rhein-Neckar region check in, ride and check out while the best fare is calculated automatically.",
    stats: [
      { value: '8 years', label: 'in continuous production' },
      { value: 'iOS & Android', label: 'passenger apps' },
      { value: 'End-to-end', label: 'design, build and operations' },
    ],
    facts: [
      { label: 'Client', value: 'Seven-RE' },
      { label: 'Industry', value: 'Public transport & mobility' },
      { label: 'Region', value: 'Rhein-Neckar, Germany' },
      { label: 'Product', value: 'VRN eTarif app' },
      { label: 'Engagement', value: 'Platform build and operations' },
    ],
    challenge: [
      'Traditional public transport tariffs are hard for passengers to navigate. Riders have to understand fare zones, choose the right ticket before boarding and often pay more than they need to.',
      'Seven-RE set out to make travel in the Verkehrsverbund Rhein-Neckar (VRN) network as simple as possible: no ticket selection up front, transparent distance-based pricing and a guaranteed best price, while the transport operator keeps full control of products and fares.',
    ],
    solutionIntro:
      'TechUp9 designed, built and operated the entire platform, from the passenger apps to the backend systems behind every trip and invoice.',
    solution: [
      {
        title: 'Passenger apps for iOS and Android',
        text: 'Check in when boarding, change vehicles without any extra steps and check out at the end of the trip. A valid digital ticket is always ready for inspection.',
      },
      {
        title: 'Fare calculation engine',
        text: 'Prices each trip automatically by straight-line distance and compares it with the classic zone tariff, so passengers always pay the best fare. Daily and monthly price caps keep costs predictable.',
      },
      {
        title: 'Cloud backend and APIs',
        text: 'Trip processing, customer accounts and integrations with the transport network, built to run reliably around the clock.',
      },
      {
        title: 'Payments and billing',
        text: 'Automated monthly billing by direct debit or credit card, with a clear trip history and invoice for every passenger.',
      },
      {
        title: 'Operations and evolution',
        text: 'Monitoring, releases and support over the long term, evolving the platform as tariffs, devices and requirements changed.',
      },
    ],
    results: [
      'Eight years in continuous production, serving passengers across the VRN network.',
      'A simple check-in/check-out experience that removes the need to understand tariffs before travelling.',
      'Fair, transparent pricing with automatic best-fare calculation and price caps.',
      'A configurable platform that lets the operator manage products and pricing.',
      'One accountable partner for the whole system, from mobile apps to backend and operations.',
    ],
    capabilities: [
      'iOS & Android apps',
      'Cloud backend',
      'APIs & integrations',
      'Fare engine',
      'Payments & billing',
      'Monitoring & operations',
    ],
  },
];

const phone = '+49 176 2945 7475';

export const contact = {
  phone,
  phoneHref: `tel:${phone.replace(/\s/g, '')}`,
  email: 'info@techup9.com',
  gstin: 'GJ837495287',
};
