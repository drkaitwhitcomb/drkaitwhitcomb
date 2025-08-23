import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import pwa from '@vite-pwa/astro';

import { defineConfig } from 'astro/config';


import vercel from '@astrojs/vercel';


export default defineConfig({
    site: 'https://drkaitwhitcomb.com',

  output: "server",
  integrations: [react(), markdoc(), keystatic(), icon(), pwa()],
  prefetch: {
    prefetchAll: true
  },
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});