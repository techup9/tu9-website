# TechUp9 website

The [TechUp9 website](https://www.techup9.com) is a marketing site for TechUp9's IT consulting and software engineering services. It is built with
React and Vite, uses a custom stylesheet with the mint/teal brand palette and
the Inter font, and uses [Lucide](https://lucide.dev) icons. The design is
intentionally static, with no animations or transitions.

## Requirements

- Node.js 20.19 or later on the 20.x line, or Node.js 22.12 or later.
- npm, included with Node.js.

## Local development

Install the locked dependencies and start the development server:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build and serve the production bundle:

```sh
npm run build
npm run preview
```

The build is written to `dist/`. There are currently no test or lint scripts.

`npm run build` runs `vite build` and then `scripts/prerender.js`, which
renders each page to static HTML and generates the SEO and LLM files described
below. The dev server renders on the client only.

### GitHub Copilot app

The repository includes `.github/github-app.yml`. After reviewing and accepting
the configuration in the app, its Setup script runs `npm install` when a session
is created. Run starts the development server; Build and Preview build are
available as manual scripts. The archive cleanup script removes `node_modules`
and `dist` from the workspace.

## Content and routes

- `/` is the home page, with Services, Client work, Approach, Why TechUp9, and
  Contact sections reached by hash links (`#services`, `#work`, `#approach`,
  `#why-us`, `#contact`).
- `/case-studies/:slug` shows a customer success story, for example
  `/case-studies/seven-re-etarif`. Unknown slugs redirect to `/`.

Any other path, including the retired blog and old `.html` URLs, redirects to
`/`.

All copy, including section headings, case studies, and contact details, is in
`src/data/site.js`. To add a case study, add an entry to `caseStudies`,
including a `description` for search results; it is listed on the home page and
gets its own page, sitemap entry, and `llms.txt` entry automatically.

## SEO and LLM readability

Page titles, descriptions, canonical URLs, Open Graph tags, and JSON-LD
structured data (Organization, WebSite, Article, and BreadcrumbList) are defined
in `src/seo.js`. The site URL, `https://www.techup9.com`, is set there as
`SITE_URL`. A new route also needs an entry in `pages` there so it is
prerendered and listed in the sitemap.

The build writes:

- `index.html` and `case-studies/<slug>.html`, with the full page content and
  head tags, so search engines, link previews, and AI crawlers can read pages
  without running JavaScript. The browser then hydrates them.
- `sitemap.xml`, with `lastmod` set to the date of the last commit.
- `robots.txt`, which allows all crawlers and links the sitemap.
- `llms.txt`, a short Markdown summary for language models
  ([llmstxt.org](https://llmstxt.org)), and `llms-full.txt`, with the full site
  content as Markdown.
- `404.html`, an empty client-rendered shell marked `noindex`.

The social share image, `public/images/og-image.png`, is 1200 × 630 pixels.

## Project structure

```text
index.html              HTML shell, Google Fonts, SEO tags, and analytics
public/images/          static images, served from /images
src/
  main.jsx              browser entry point; hydrates prerendered pages
  entry-server.jsx      server render entry used by the prerender script
  seo.js                site URL, page metadata, and structured data
  App.jsx               routes and catch-all redirect
  components/           header, footer, layout, and contact call to action
  pages/Home.jsx        home page sections
  pages/CaseStudy.jsx   case study page
  data/site.js          site content
  hooks/usePage.js      updates head tags on client-side navigation
  styles/app.css        all site styles and design tokens
scripts/prerender.js    prerenders pages and writes sitemap, robots, and llms files
```

## Deployment

Build the site and publish the contents of `dist/` to a static host. The host
must serve `case-studies/<slug>.html` for the clean URL
`/case-studies/<slug>`. GitHub Pages, Netlify, and Cloudflare Pages do this by
default; with nginx, use `try_files $uri $uri.html /404.html;`.

Unknown paths, including old URLs, should serve `404.html` (or `index.html`),
which renders on the client and reaches the catch-all redirect. The HTTP
response may still have a 404 status.

If the site moves to another domain, update `SITE_URL` in `src/seo.js` and
rebuild so the canonical URLs, sitemap, and structured data match.

The current asset paths and router assume deployment at the origin root.
Hosting under a URL prefix requires adjusting the Vite base, asset paths, and
router configuration. The HTML shell loads Inter from Google Fonts and
includes Google Analytics.
