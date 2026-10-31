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
`src/data/site.js`. To add a case study, add an entry to `caseStudies`; it is
listed on the home page and gets its own page automatically.

## Project structure

```text
index.html              HTML shell, Google Fonts, SEO tags, and analytics
public/images/          static images, served from /images
src/
  main.jsx              entry point
  App.jsx               routes and catch-all redirect
  components/           header, footer, layout, and contact call to action
  pages/Home.jsx        home page sections
  pages/CaseStudy.jsx   case study page
  data/site.js          site content
  hooks/usePage.js      document title
  styles/app.css        all site styles and design tokens
```

## Deployment

Build the site and publish the contents of `dist/` to a static host. Configure
the host to serve `index.html` for client-side routes, so old URLs reach the
catch-all redirect. The build also copies `index.html` to
`dist/404.html` for hosts that serve that file for unknown paths, such as GitHub
Pages; the HTTP response may still have a 404 status.

The current asset paths and router assume deployment at the origin root.
Hosting under a URL prefix requires adjusting the Vite base, asset paths, and
router configuration. The HTML shell loads Inter from Google Fonts and
includes Google Analytics.
