# techup9.com

Website for [techup9.com](https://www.techup9.com), built with React + Vite.

The design is the original ThemeRex "Ester" theme: its CSS is kept as-is in
`src/styles/legacy/` and the markup keeps the original class names. The old
jQuery plugins were replaced with small React components (`HeroSlider` for
Revolution Slider, `ServicesCarousel` for Owl Carousel).

## Development

```sh
npm install
npm run dev       # start dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Structure

```
index.html              HTML shell (fonts, analytics)
public/images/          static images, served from /images
src/
  main.jsx              entry; imports legacy CSS in original order
  App.jsx               routes: /, /blog, /blog/:slug (+ redirects from old .html URLs)
  components/           Header, Footer, Layout, HeroSlider, ServicesCarousel, ...
  pages/                Home, Blog, BlogPost
  data/                 site content (site.js) and blog posts (posts.js)
  hooks/                page title/body classes, responsive menu, swipe
  styles/legacy/        original theme CSS (unchanged except build fixes)
  styles/app.css        styles for the React replacements of jQuery plugins
```

The build also writes `dist/404.html` (a copy of `index.html`) so client-side
routes like `/blog` work on static hosts such as GitHub Pages.
