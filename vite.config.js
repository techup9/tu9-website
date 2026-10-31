import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `npm run build` also runs scripts/prerender.js, which writes the static HTML
// for each page and the 404.html fallback.
export default defineConfig({
  plugins: [react()],
});
