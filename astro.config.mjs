// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    assets: 'assets' // This changes '_astro' to 'assets'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://harisshabaka.github.io",
  base: "/",
});
