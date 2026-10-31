export const heroSlides = [
  {
    image: { src: '/images/13.jpg', width: 1920, height: 1082, offsetX: 0 },
    title: ['The Idea', 'Nurturer'],
    text: ['We turn your ideas', 'into budding startups'],
    layers: {
      title: { x: -343, y: -95 },
      text: { x: -344, y: 46, delay: 850 },
      button: { x: -348, y: 141, delay: 1100 },
    },
  },
  {
    image: { src: '/images/Depositphotos_42929589_original.jpg', width: 2300, height: 1533, offsetX: -100 },
    title: ['Launch your', 'product'],
    text: ['Launch you dream project', 'with expert Agile team'],
    layers: {
      title: { x: 344, y: -90 },
      text: { x: 344, y: 56, delay: 1100 },
      button: { x: 344, y: 153, delay: 1100 },
    },
  },
];

export const servicesIntro =
  'With niche expertise in core tech domains, we at TechUp9 are highly-efficient in providing expert services related to core web development, mobile app development, artificial intelligence, IoT, machine learning big data and analytics. Having a specialist team for catering to personalized requirements, we bring technical excellence within the reach of every brand, business and entrepreneur.';

export const services = [
  {
    title: 'Business/Technology Consulting',
    text: 'In an age of fast transformation, investing in technology is essential to beat competition and stay relevant. With the help of our insightful enterprise consulting services, you can identify valuable opportunities to integrate latest technologies into your existing business processes. Our niche-specific tech experts will identify the processes that need improvement and employ their deep knowledge to provide insightful business technology consulting to make your processes much more efficient.',
  },
  {
    title: 'Digital Transformation',
    text: 'Transitioning from paper-based or mechanical processes for digital excellence can be a tiring and confusing job. Having knowledge of making enterprises better by infusion of technology, our experts can drive your digital business transformation efforts and help you create an organization for the future.',
  },
  {
    title: 'Web Development Services',
    text: 'With massive experience in developing highly-engaging web portals, we boast of being one of the finest website development companies in India. Our expert developers are equipped with the expertise to develop websites using all the latest frameworks and architectures including Java, PHP, Python, AngularJS, HTML5, among others. Having full-suite capabilities to develop websites from scratch, we listen to your custom requirements and take full responsibility for making your website development project successful.',
  },
  {
    title: 'IoT App Development',
    text: 'Internet of Things (IoT) has revolutionized all business segments owing to the promise of a connected future. With an expert team of trained IoT developers, we can empower the IoT app development process efficiently. Starting from identification of a problem, we devise a working solution, guide on hardware selection, build a powerful platform, test and deploy efficiently-working IoT apps according to requirements.',
  },
  {
    title: 'AI & ML Implementation',
    text: 'Artificial Intelligence is redefining visions for the future. Using our niche experience in artificial intelligence development, we identify ways of utilizing artificial intelligence for your business. Analyzing opportunities to automate processes by evaluating your existing operations, we move forward with machine learning development and implementation to endow your business with automation benefits.',
  },
  {
    title: 'Analytics & Big Data',
    text: 'In a connected world, no business can dominate the industry without having data analytics capabilities. Our energized business analytics solutions supercharge your business decisions by adding the power of value-based data. By using our expertise, we endow your organization to possess capabilities to capture, analyze and make sense of the vast amounts of data generated every day.',
  },
  {
    title: 'Mobile App Development',
    text: 'Our core philosophy of catering to differentiated requirements of our clients has powered our mobile app development team from the beginning. Enriched with the ability to spearhead custom mobile application development process, our experts can help you design, develop, test and deploy successful iOS Apps, Android Apps, Xamarin Apps, Flutter Apps and React Native Apps utilizing the best development practices.',
  },
];

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
