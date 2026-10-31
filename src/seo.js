import { caseStudies, contact, hero, services } from './data/site.js';

export const SITE_NAME = 'TechUp9';
export const SITE_URL = 'https://www.techup9.com';
export const OG_IMAGE = '/images/og-image.png';

const ORG_ID = `${SITE_URL}/#organization`;

export const absoluteUrl = (path) => new URL(path, SITE_URL).href;

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: absoluteUrl('/images/logo.png'),
  email: contact.email,
  telephone: contact.phone.replace(/\s/g, ''),
  description: hero.text,
  knowsAbout: services.map((service) => service.title),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT consulting and software engineering services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title, description: service.text },
    })),
  },
};

const homeMeta = {
  path: '/',
  title: 'IT Consulting & Software Engineering',
  description:
    'TechUp9 is an IT consulting and software engineering firm. We design, build and run cloud platforms on AWS, web and mobile apps, backend systems, data pipelines and analytics.',
  type: 'website',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { '@id': ORG_ID },
      },
    ],
  },
};

function caseStudyMeta(study) {
  const path = `/case-studies/${study.slug}`;
  const url = absoluteUrl(path);
  return {
    path,
    title: `${study.client} ${study.product} case study`,
    description: study.description,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: study.title,
          description: study.description,
          url,
          mainEntityOfPage: url,
          image: absoluteUrl(OG_IMAGE),
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          about: { '@type': 'Organization', name: study.client, url: study.clientUrl },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Client work', item: `${SITE_URL}/#work` },
            { '@type': 'ListItem', position: 3, name: `${study.client} case study`, item: url },
          ],
        },
        organization,
      ],
    },
  };
}

export const pages = [homeMeta, ...caseStudies.map(caseStudyMeta)];

export function getPageMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.find((page) => page.path === path) ?? homeMeta;
}

export const fullTitle = (title) => `${title} | ${SITE_NAME}`;
