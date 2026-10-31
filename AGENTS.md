# Agent guidance

This is a single-page React site for TechUp9's IT consulting and software
engineering services. See [README.md](README.md) for setup, project structure,
and deployment.

## Conventions

- Keep the mint/teal brand palette and the design tokens defined at the top of
  `src/styles/app.css`. Use `--teal-text` rather than `--mint` for text on light
  backgrounds, for contrast. The logo has dark text, so keep it on light
  backgrounds.
- The design is static. Do not add animations, transitions, sliders, or
  carousels unless a task asks for them.
- Put content in `src/data/site.js` and layout in `src/pages/Home.jsx`. Use
  `lucide-react` for icons and keep images in `public/images/`.
- Position IT consulting and software engineering (AWS, apps, backend, data
  pipelines, analytics) as the core offer; AI/ML is one service among them.
- Import routing APIs from `react-router`; `react-router-dom` is not installed.
- Unknown paths, including old `.html` and blog URLs, redirect to `/`. Keep that
  catch-all and the generated `dist/404.html` static-host fallback. Hash
  navigation is handled in `src/components/Layout.jsx`; keep section IDs unique
  and in sync with `NAV_ITEMS` in `src/components/Header.jsx`.

## Validation

- Run `npm run build` for source or style changes. There are currently no test
  or lint scripts in `package.json`.
- For UI changes, check the page at desktop and mobile widths, including the
  mobile menu and hash links. For routing changes, check direct page loads and
  old URLs on a host with SPA fallback configured.
