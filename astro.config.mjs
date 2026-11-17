// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

const EXCLUDE_FROM_SITEMAP = new Set([
  'https://www.kmecoutah.com/our-story/',
  'https://www.kmecoutah.com/projects/project-1/',
]);

/**
 * @param {string} page
 */
function includeInSitemap(page) {
  try {
    const url = new URL(page);
    if (!url.pathname.endsWith('/')) url.pathname = `${url.pathname}/`;
    return !EXCLUDE_FROM_SITEMAP.has(url.href);
  } catch {
    return !EXCLUDE_FROM_SITEMAP.has(page);
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    sitemap({
      filter: (page) => includeInSitemap(page),
    }),
  ],
  site: 'https://www.kmecoutah.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/services': '/'
  }
});