# Agent guidance

This site preserves the legacy ThemeRex "Ester" design. See [README.md](README.md)
for setup, project structure, and deployment.

## Conventions

- Preserve the existing appearance, theme class names, and responsive behavior
  unless a task calls for changing them. Page-specific body classes are managed
  by `src/hooks/usePage.js`.
- Preserve the legacy stylesheet import order in `src/main.jsx`. Use
  `src/styles/app.css` for React component styles and overrides when practical.
- Implement interactive behavior with React rather than restoring the removed
  jQuery plugins. Keep site images in `public/images/`.
- Check `src/data/site.js`, `src/data/posts.js`, and the page components when
  updating content. Blog posts currently share placeholder body text.
- When changing routes, retain the legacy `.html` redirects and the generated
  static-host fallback. Hash navigation is handled in
  `src/components/Layout.jsx`; keep targets unique and check navigation from
  both the home and blog pages. The existing `#our-process` link has no target.

## Validation

- Run `npm run build` for source or style changes. There are currently no test
  or lint scripts in `package.json`.
- For UI changes, check affected pages at desktop and mobile widths and exercise
  the changed interactions. For routing changes, check direct page loads and
  the old `.html` URLs on a host with SPA fallback configured.
