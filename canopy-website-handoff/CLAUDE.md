# Canopy website — build brief

You are building the marketing website for **Canopy**, a done-for-you webinar operations service ("webinars-as-a-service"). Everything needed is in this folder. The design is final and approved; your job is to build it faithfully, not to redesign it.

## What's in this folder

| Path | What it is | How to use it |
|---|---|---|
| `reference/static/*.html` | **Working static versions of all four pages**, with the real font, assets and JS. Open them in a browser. | **Visual source of truth.** Match layout, spacing, type sizes and colors exactly. |
| `reference/screenshots/*.png` | Desktop (1440) and mobile (390) full-page captures of every page, plus menu-open and form-sent states. | Compare your build against these. |
| `docs/PAGES.md` | Section-by-section spec of every page: layout, components, behavior, responsive rules. | Read before building each page. |
| `docs/CONTENT.md` | Every word of copy on the site, plus the list of placeholders. | Copy comes from here verbatim. Do not rewrite or add copy. |
| `docs/BRAND.md` | Brand guidelines: color, type, logo, voice, rules. | Follow for anything not covered by the reference pages. |
| `brand/tokens.css`, `brand/tokens.json` | Design tokens (colors, type, spacing). | Import `tokens.css`; use the variables, not raw hex. |
| `brand/logo/` | Logo SVGs (wordmark outlined, no font needed), favicon, app icon. | Use these files; do not redraw the logo. |
| `brand/fonts/` | Schibsted Grotesk variable font (woff2) + OFL license. | Self-host these. Do not load Google Fonts at runtime. |
| `reference/static/assets/` | `og-image.png` (1200×630), `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`. | Ship these. |
| `reference/design-source/*.dc.html` | The original design-canvas source files (pages + brand boards). | Secondary reference only. They use a template format (`<x-dc>`, `<sc-if>`, `<sc-for>`, `{{…}}`); the inline styles are exact, the template syntax is not HTML. Prefer `reference/static/`. |

## Stack

Unless the owner says otherwise:

- **Astro** (static output), plain CSS, no CSS framework, no UI library. The site is four static pages plus one form; it should ship almost zero JavaScript.
- One shared layout with the `<head>` (meta, fonts, favicon, OG tags), and components for the repeated pieces listed in `docs/PAGES.md` → "Shared components".
- Move inline styles from the reference into component-scoped CSS using the tokens. Keep values identical.
- Deploy target: any static host (Netlify, Vercel, Cloudflare Pages). Include the config for Netlify by default.

If the owner prefers plain HTML/CSS with no build step, the files in `reference/static/` are already close — clean them up into shared CSS + partials instead.

## Routes

| Route | Page | Reference |
|---|---|---|
| `/` | Home | `reference/static/index.html` |
| `/how-it-works` | How it works | `reference/static/how-it-works.html` |
| `/pricing` | Pricing | `reference/static/pricing.html` |
| `/book` | Book a call | `reference/static/book.html` |
| `/404` | Not found | Not designed — build a simple page in the same style: green stage, headline "Off air.", one line "This page isn't on the run sheet.", button back to Home. |

## Non-negotiables

1. **Match the reference.** Same structure, same copy, same sizes. Fluid type uses the `clamp()` values in the reference — keep them.
2. **No standard top nav bar.** Every page opens with the split hero: green "stage" (2/3) + ink "control rail" (1/3). The rail holds the hamburger + "Book a call". See `docs/PAGES.md`.
3. **Brand rules** (`docs/BRAND.md`): no gradients, no shadows, no rounded cards (corners are square everywhere except the app icon), no emoji, no icon sets, sentence case everywhere, no all-caps labels. Orange (`--live`) is for live/action only and always carries ink text, never white.
4. **Accessibility:** WCAG 2.2 AA. Real `<button>`, `<a href>`, `<label>` + `<input>`. Hit targets ≥ 44px. Visible focus (`:focus-visible` orange outline). `aria-expanded` on the menu toggle; Escape closes the menu. Decorative SVGs `aria-hidden="true"`. Respect `prefers-reduced-motion` if you add any motion (none is required).
5. **Responsive:** must work from 320px to 1920px with no horizontal scrolling. The hero splits stack below 960px. See per-page notes.
6. **Performance:** Lighthouse ≥ 95 on all four categories. Preload the latin font file. No layout shift from fonts (`font-display: swap` + matching fallback stack).
7. **Do not invent content.** No testimonials, client logos, stats, team bios, or extra sections. Placeholders stay visibly marked until the owner supplies the real value (list in `docs/CONTENT.md`).

## Book a call form

Fields: Name, Work email, Company, "How often do you run webinars today?" (select), "Anything we should know?" (optional textarea).

- Validate: name, email (type=email), company required; show inline errors under fields in the same style (Stone text on ink is too low-contrast — use Paper text with an orange left marker or orange text `#F0562B` on ink, which passes 4.5:1 at 16px+).
- Submit: default to **Netlify Forms** (`data-netlify="true"`, honeypot field). Make the endpoint easy to swap (Formspree, a serverless function, or the owner's CRM).
- On success: hide the form, show the confirmation block ("Thanks. You're on the run sheet."), move focus to it.
- "Or pick a time directly: [scheduling link]" — leave the placeholder until the owner provides a URL; then make it a real link.

## SEO / meta

Per-page `<title>` and description are in `docs/CONTENT.md`. Add canonical URLs, `og:*` and `twitter:card=summary_large_image` using `assets/og-image.png`, a `sitemap.xml`, and `robots.txt`. Site name: Canopy. Domain: `[DOMAIN]` (placeholder).

## Analytics

Not specified. Leave a single clearly marked spot in the layout for an analytics snippet; do not add one.

## Definition of done

- [ ] All four pages + 404 built and matching the screenshots at 1440 and 390.
- [ ] Menu opens/closes with mouse, keyboard and Escape; on mobile the small hamburger in the green stage jumps to the rail and opens the menu.
- [ ] Form validates, submits to the configured backend and shows the confirmation state.
- [ ] Every placeholder from `docs/CONTENT.md` is either replaced with a real value from the owner or still visibly marked — list any remaining ones in your final summary.
- [ ] No horizontal scroll at 320, 390, 768, 1024, 1440.
- [ ] Lighthouse ≥ 95 across the board; axe shows no violations.
- [ ] Fonts self-hosted; no requests to Google Fonts or any third party (except the form backend).
