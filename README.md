# Canopy website

Marketing site for Canopy, built with [Astro](https://astro.build) from the design handoff in `canopy-website-handoff/`.

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/how-it-works` | `src/pages/how-it-works.astro` |
| `/pricing` | `src/pages/pricing.astro` |
| `/book` | `src/pages/book.astro` (the book-a-call form) |
| 404 | `src/pages/404.astro` |

Shared pieces are in `src/components/`: the split hero with the rail menu, the chapter scrubber, the closing card and the footer.

## Run it locally

You need Node.js 22.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs the static site to dist/
```

## Deploy (Netlify)

1. In Netlify, choose **Add new site → Import an existing project** and pick this GitHub repo.
2. The build settings come from `netlify.toml`, so you can accept the defaults.
3. Once the site is live, set the `SITE_URL` environment variable (Site settings → Environment variables) to your real domain, e.g. `https://canopy.com`, and redeploy. It's used for canonical URLs, social cards and the sitemap.

Form submissions from `/book` appear in Netlify under **Forms → book-call**. You can turn on email notifications there.

## Placeholders to fill

Edit `src/config.ts`:

| Setting | Currently |
|---|---|
| `CONTACT_EMAIL` | `[contact email]` (footer, form confirmation, form error) |
| `SCHEDULING_URL` | empty, so the page shows `[scheduling link]` |
| `RESPONSE_TIME` | `[RESPONSE TIME]` |
| `RENEWAL_TERMS` | `[After the first term: YOUR RENEWAL TERMS]` (Pricing FAQ) |
| `FORM_ENDPOINT` | `/` (Netlify Forms). Change it to use Formspree, a serverless function or a CRM |

Also confirm the "20 minutes" call length, the "~3 weeks out" timing and the 8-week example schedule (`src/data/calendar.ts`).

## Analytics

None is installed. There's a marked spot in `src/layouts/Base.astro` to paste a snippet.
