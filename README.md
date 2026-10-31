# TechUp9 website

The [TechUp9 website](https://www.techup9.com) is built with React and Vite. It
retains the original ThemeRex "Ester" design and CSS, while React components
replace the legacy jQuery slider, carousel, and menu interactions.

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

| Route | Page |
| --- | --- |
| `/` | Home |
| `/blog` | Blog list |
| `/blog/:slug` | Blog post |

The old `/index.html`, `/blog.html`, and `/blog-post-standard.html` paths
redirect to their React routes. The last redirects to the first post in
`src/data/posts.js`. The existing Our Process menu link has no matching section.

Slides, services, values, and contact details are in `src/data/site.js`; some
home-page copy is in `src/pages/Home.jsx`. Blog entries are defined in
`src/data/posts.js` and currently share placeholder body text.

## Project structure

```text
index.html              HTML shell, Google Fonts, and analytics
public/images/          static images, served from /images
src/
  main.jsx              entry point and legacy stylesheet import order
  App.jsx               routes and redirects
  components/           shared layout and interactive components
  pages/                home, blog list, and blog post pages
  data/                 site and blog content
  hooks/                page, responsive menu, and swipe behavior
  styles/legacy/        original theme styles
  styles/app.css        React component styles and theme overrides
```

## Deployment

Build the site and publish the contents of `dist/` to a static host. Configure
the host to serve `index.html` for client-side routes, including direct visits
to blog pages and old `.html` URLs. The build also copies `index.html` to
`dist/404.html` for hosts that serve that file for unknown paths, such as GitHub
Pages; the HTTP response may still have a 404 status.

The current asset paths and router assume deployment at the origin root.
Hosting under a URL prefix requires adjusting the Vite base, asset paths, and
router configuration. The HTML shell loads Roboto from Google Fonts and
includes Google Analytics.
