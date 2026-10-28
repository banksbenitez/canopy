import { defineConfig } from 'astro/config';

// The production domain is still a placeholder ([DOMAIN]). Set SITE_URL once
// it's known. On Netlify, the deploy URL ($URL) is used until then.
export default defineConfig({
  site: process.env.SITE_URL || process.env.URL || 'https://example.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
