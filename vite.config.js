import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static hosts (e.g. GitHub Pages) serve 404.html for unknown paths, which lets
// client-side routes like /blog work on a hard refresh.
const spaFallback = () => {
  let outDir;
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async writeBundle() {
      await copyFile(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    },
  };
};

export default defineConfig({
  plugins: [react(), spaFallback()],
});
