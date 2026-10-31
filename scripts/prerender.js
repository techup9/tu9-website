// Prerenders every page to static HTML after `vite build` and generates the
// SEO and LLM files (sitemap.xml, robots.txt, llms.txt, llms-full.txt) from the
// same content in src/data/site.js.
import { execSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const ROOT_DIV = '<div id="root"></div>';

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const jsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

function lastModified() {
  try {
    return execSync('git log -1 --format=%cs', { cwd: root }).toString().trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

async function write(file, content) {
  const path = resolve(dist, file);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
}

const vite = await createServer({
  root,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false },
});

try {
  const { render, pages, site, SITE_NAME, SITE_URL, OG_IMAGE, absoluteUrl, fullTitle } =
    await vite.ssrLoadModule('/src/entry-server.jsx');

  const template = await readFile(resolve(dist, 'index.html'), 'utf8');
  if (!SEO_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
    throw new Error('index.html is missing the seo markers or the empty root element.');
  }

  const headTags = (page) => {
    const title = fullTitle(page.title);
    const url = absoluteUrl(page.path);
    return [
      `<title>${escapeHtml(title)}</title>`,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="${page.type}" />`,
      `<meta property="og:title" content="${escapeHtml(title)}" />`,
      `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${absoluteUrl(OG_IMAGE)}" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      `<meta property="og:image:alt" content="${SITE_NAME} - IT consulting and software engineering" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
      `<script type="application/ld+json">${jsonLd(page.jsonLd)}</script>`,
    ].join('\n\t');
  };

  // The 404 shell renders on the client, where unknown paths redirect home.
  await write(
    '404.html',
    template.replace(
      SEO_BLOCK,
      `<title>Page not found | ${SITE_NAME}</title>\n\t<meta name="robots" content="noindex" />`,
    ),
  );

  for (const page of pages) {
    const html = template
      .replace(SEO_BLOCK, () => headTags(page))
      .replace(ROOT_DIV, () => `<div id="root" data-path="${page.path}">${render(page.path)}</div>`);
    await write(page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`, html);
  }

  const lastmod = lastModified();
  await write(
    'sitemap.xml',
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...pages.map(
        (page) => `  <url>\n    <loc>${absoluteUrl(page.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
      ),
      '</urlset>',
      '',
    ].join('\n'),
  );

  await write(
    'robots.txt',
    `# Search engines and AI assistants are welcome to crawl this site.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  );

  const { hero, sections, services, process, principles, caseStudies, contact } = site;
  const [home, ...studyPages] = pages;
  const contactLines = [`- Email: ${contact.email}`, `- Phone: ${contact.phone}`, `- Website: ${SITE_URL}/`];

  // https://llmstxt.org
  await write(
    'llms.txt',
    [
      `# ${SITE_NAME}`,
      '',
      `> ${home.description}`,
      '',
      hero.text,
      '',
      'Services:',
      '',
      ...services.map((service) => `- ${service.title}: ${service.text}`),
      '',
      'Contact:',
      '',
      ...contactLines,
      '',
      '## Pages',
      '',
      `- [Home](${SITE_URL}/): ${home.description}`,
      ...studyPages.map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`),
      '',
      '## Optional',
      '',
      `- [Full site content](${SITE_URL}/llms-full.txt): All services, approach, principles and case studies as Markdown.`,
      '',
    ].join('\n'),
  );

  const caseStudyMarkdown = (study) => [
    `## Case study: ${study.client} - ${study.product}`,
    '',
    `URL: ${absoluteUrl(`/case-studies/${study.slug}`)}`,
    '',
    `### ${study.title}`,
    '',
    study.summary,
    '',
    ...study.facts.map((fact) => `- ${fact.label}: ${fact.value}`),
    ...study.stats.map((stat) => `- ${stat.value} ${stat.label}`),
    '',
    '### The challenge',
    '',
    ...study.challenge.flatMap((text) => [text, '']),
    '### What we built',
    '',
    study.solutionIntro,
    '',
    ...study.solution.map((item) => `- ${item.title}: ${item.text}`),
    '',
    '### The results',
    '',
    ...study.results.map((text) => `- ${text}`),
    '',
    `Capabilities: ${study.capabilities.join(', ')}.`,
    '',
  ];

  await write(
    'llms-full.txt',
    [
      `# ${SITE_NAME}: ${hero.eyebrow}`,
      '',
      `> ${hero.title}`,
      '',
      hero.text,
      '',
      `## ${sections.services.title}`,
      '',
      sections.services.text,
      '',
      ...services.flatMap((service) => [`### ${service.title}`, '', service.text, '']),
      `## ${sections.approach.title}`,
      '',
      sections.approach.text,
      '',
      ...process.map((step, i) => `${i + 1}. ${step.title}: ${step.text}`),
      '',
      `## ${sections.whyUs.title}`,
      '',
      sections.whyUs.text,
      '',
      ...principles.map((item) => `- ${item.title}: ${item.text}`),
      '',
      ...caseStudies.flatMap(caseStudyMarkdown),
      '## Contact',
      '',
      ...contactLines,
      '',
    ].join('\n'),
  );

  console.log(`Prerendered ${pages.length} pages and generated sitemap.xml, robots.txt, llms.txt, llms-full.txt.`);
} finally {
  await vite.close();
}
