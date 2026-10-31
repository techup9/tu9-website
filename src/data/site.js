export const heroSlides = [
  {
    image: { src: '/images/13.jpg', width: 1920, height: 1082, offsetX: 0 },
    title: ['Engineering', 'that scales'],
    text: ['Software, cloud and data consulting', 'for growing businesses'],
    layers: {
      title: { x: -343, y: -95 },
      text: { x: -344, y: 46, delay: 850 },
      button: { x: -348, y: 141, delay: 1100 },
    },
  },
  {
    image: { src: '/images/Depositphotos_42929589_original.jpg', width: 2300, height: 1533, offsetX: -100 },
    title: ['From idea to', 'production'],
    text: ['Senior engineers who design,', 'build and run your platform'],
    layers: {
      title: { x: 344, y: -90 },
      text: { x: 344, y: 56, delay: 1100 },
      button: { x: 344, y: 153, delay: 1100 },
    },
  },
];

export const about = {
  headline: 'Technology partners for software-driven businesses.',
  text: 'We help startups and established companies design, build and run the software their business depends on - across cloud, applications, data and analytics.',
};

export const servicesIntro =
  'We combine strategic advice with hands-on engineering. Whether you are launching a new product, modernizing a legacy system or making better use of your data, our team takes you from first conversation to a reliable system in production - and stays to help it grow.';

export const services = [
  {
    title: 'IT Strategy & Consulting',
    text: 'Make confident technology decisions. We assess your current systems, processes and goals, and define a pragmatic roadmap covering architecture, build-versus-buy choices, team setup, security and cost. Our advice is grounded in delivery experience, so every recommendation is one we know how to execute.',
  },
  {
    title: 'Cloud & AWS Engineering',
    text: 'Build on a cloud foundation that is secure, scalable and cost-efficient. We design and implement AWS architectures, migrate and modernize existing workloads, and set up infrastructure as code, CI/CD, monitoring and cost governance so your platform is easy to operate and ready to grow.',
  },
  {
    title: 'Product & Application Development',
    text: 'Turn ideas into software your customers rely on. Our cross-functional teams design, build and launch web and mobile applications using modern frameworks and proven engineering practices - from MVP to mature product, with quality, performance and user experience built in.',
  },
  {
    title: 'Backend & API Platforms',
    text: 'The systems behind your product need to be dependable. We engineer robust backend services, APIs and integrations - designed for reliability, security and scale - and modernize legacy systems into maintainable, well-tested platforms.',
  },
  {
    title: 'Data Engineering & Pipelines',
    text: 'Make your data trustworthy and available. We build batch and real-time data pipelines, data lakes and warehouses that bring together information from across your business, with the quality checks, governance and automation needed to run them with confidence.',
  },
  {
    title: 'Analytics & Business Intelligence',
    text: 'Turn data into decisions. We define meaningful metrics, build dashboards and reporting, and deliver analysis that gives leadership and teams a clear, shared view of performance - so decisions are based on evidence, not guesswork.',
  },
  {
    title: 'Applied AI & Machine Learning',
    text: 'Adopt AI where it creates real value. Building on strong data and software foundations, we help you identify practical use cases and integrate machine learning and large language models into your products and operations - securely, responsibly and with measurable results.',
  },
];

const processIcons = ['icon-magnifier52', 'icon-lab3', 'icon-settings49', 'icon-graphic51'];

export const process = [
  ['DISCOVER', 'We start by understanding your business, users, systems and constraints, and agree on goals and success measures.'],
  ['DESIGN', 'We shape the solution and architecture, define a delivery plan, and validate key risks early with prototypes where needed.'],
  ['DELIVER', 'We build in short, transparent iterations with automated testing, regular demos and continuous delivery to production.'],
  ['RUN & EVOLVE', 'We operate, monitor and improve your platform, and transfer knowledge so your team is set up for long-term success.'],
].map(([title, text], i) => ({ title, text, icon: processIcons[i] }));

const valueIcons = ['icon-timer4', 'icon-heart369', 'icon-pie-chart11', 'icon-briefcase74'];

export const values = [
  ['CLIENT FIRST', 'Your business outcomes come first, and we measure our success by yours.'],
  ['OWNERSHIP', 'We take responsibility for what we build, from the first line of code to production.'],
  ['ENGINEERING EXCELLENCE', 'Quality, security and maintainability are built in, never bolted on.'],
  ['TRANSPARENCY', 'Honest advice, clear communication and no surprises on scope, time or cost.'],
  ['PRAGMATISM', 'We choose the simplest solution that solves the problem and scales with you.'],
  ['INTEGRITY', 'We do the right thing, even when no one is watching.'],
  ['PARTNERSHIP', 'We work as one team with our clients and share knowledge openly.'],
  ['CONTINUOUS LEARNING', 'Technology moves fast. We keep learning so our clients stay ahead.'],
].map(([title, text], i) => ({ title, text, icon: valueIcons[i % valueIcons.length] }));

export const contact = {
  phone: '+49 176 2945 7475',
  email: 'info@techup9.com',
  gstin: 'GJ837495287',
};
