export const heroSlides = [
  {
    image: { src: '/images/13.jpg', width: 1920, height: 1082, offsetX: 0 },
    title: ['AI-Powered', 'Apps'],
    text: ['We build LLM apps, agents', 'and copilots for your business'],
    layers: {
      title: { x: -343, y: -95 },
      text: { x: -344, y: 46, delay: 850 },
      button: { x: -348, y: 141, delay: 1100 },
    },
  },
  {
    image: { src: '/images/Depositphotos_42929589_original.jpg', width: 2300, height: 1533, offsetX: -100 },
    title: ['AI Strategy to', 'Production'],
    text: ['Expert AI consulting to take', 'you from idea to impact'],
    layers: {
      title: { x: 344, y: -90 },
      text: { x: 344, y: 56, delay: 1100 },
      button: { x: 344, y: 153, delay: 1100 },
    },
  },
];

export const whatWeDo =
  'We help businesses put Generative AI and Large Language Models to work. From identifying the right use cases to shipping secure, production-grade AI apps, our team turns AI potential into measurable results.';

export const servicesIntro =
  'TechUp9 is an AI-first product and consulting studio. We design, build and run applications powered by Large Language Models (LLMs) - from intelligent assistants and autonomous agents to AI features inside your existing products. Our consultants help you choose the right use cases, models and architecture so your AI investments are safe, scalable and deliver real business value.';

export const services = [
  {
    title: 'AI Strategy & Consulting',
    text: 'Not sure where AI fits in your business? Our consultants assess your processes, data and goals to identify high-impact Generative AI use cases, estimate ROI and define a practical roadmap. We advise on build vs. buy, model selection (OpenAI, Azure OpenAI, Anthropic, Gemini, open-source), cost, security and responsible AI governance.',
  },
  {
    title: 'Custom LLM Applications',
    text: 'We build production-ready applications on top of Large Language Models - chatbots, knowledge assistants, document Q&A, content generation and summarization tools. Using Retrieval-Augmented Generation (RAG), we ground answers in your own data so responses are accurate, up to date and secure.',
  },
  {
    title: 'AI Agents & Automation',
    text: 'Go beyond chat with AI agents that take action. We design agentic workflows that connect LLMs to your tools, APIs and databases to automate support, operations, sales and back-office tasks - with human-in-the-loop controls where it matters.',
  },
  {
    title: 'AI Copilots for Your Product',
    text: 'Add AI features to your existing web and mobile apps: natural-language search, smart assistants, recommendations, auto-fill and insights. We integrate LLM capabilities seamlessly into your product so your users get more done with less effort.',
  },
  {
    title: 'Fine-Tuning & Evaluation',
    text: 'When off-the-shelf models are not enough, we fine-tune and optimize models for your domain. We set up evaluation pipelines to measure quality, accuracy, safety and cost, and use prompt engineering and guardrails to keep outputs reliable.',
  },
  {
    title: 'LLMOps & AI Infrastructure',
    text: 'We deploy and operate AI systems in the cloud with monitoring, tracing, cost controls, caching and security built in. From vector databases to model gateways, we make sure your AI apps are scalable, observable and enterprise-ready.',
  },
  {
    title: 'Data Readiness & Analytics',
    text: 'Great AI starts with great data. We help you collect, clean, structure and govern your data, build pipelines and embeddings, and turn analytics into AI-driven insights that power better business decisions.',
  },
];

const processIcons = ['icon-magnifier52', 'icon-lab3', 'icon-settings49', 'icon-graphic51'];

export const process = [
  ['DISCOVER', 'Workshops to understand your goals, data and processes, and identify the highest-value AI use cases.'],
  ['PROTOTYPE', 'Rapid proof-of-concept with real data in weeks, so you can validate value before investing further.'],
  ['BUILD', 'Production-grade LLM apps and agents with security, guardrails, evaluation and integrations built in.'],
  ['SCALE', 'Deploy, monitor and continuously improve with LLMOps, cost optimization and team enablement.'],
].map(([title, text], i) => ({ title, text, icon: processIcons[i] }));

const valueIcons = ['icon-timer4', 'icon-heart369', 'icon-pie-chart11', 'icon-briefcase74'];

export const values = [
  ['HONESTY', "If it's not true,don't say it"],
  ['INTERGRITY', 'Doing the right thing even if no one is watching'],
  ['CREATIVE FREEDOM', 'The status quo never scared'],
  ['TRANSPARENCY', 'Open dialog is the oxygen that great companies and great idea breathe'],
  ['EXCELLENCE', 'Success is product of execution, not luck'],
  ['HUNGER', 'Big results require big ambitions'],
  ['RESILIENCE', 'Greatness requires toughness'],
  ['TRUST', 'Believe in each other, and strive to be worthy of the belief'],
].map(([title, text], i) => ({ title, text, icon: valueIcons[i % valueIcons.length] }));

export const contact = {
  phone: '+49 176 2945 7475',
  email: 'info@techup9.com',
  gstin: 'GJ837495287',
};
