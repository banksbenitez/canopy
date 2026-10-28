# Canopy website: handoff package

Everything Claude Code needs to build the Canopy marketing site (Home, How it works, Pricing, Book a call).

## How to use it

1. Unzip this folder and open it as your project in Claude Code (or put it inside a new, empty repo).
2. Claude Code reads `CLAUDE.md` automatically. That file is the build brief.
3. Start with a prompt like:
   > Build the Canopy site described in CLAUDE.md. Start with the shared layout and components, then Home, then the other pages. Compare each page against reference/screenshots before moving on.
4. Before launch, fill in the placeholders listed at the top of `docs/CONTENT.md` (contact email, scheduling link, response time, renewal terms, domain).

To preview the approved design right now, open `reference/static/index.html` in a browser. The links, menu and form all work.

## What's inside

```
CLAUDE.md                     Build brief: stack, routes, rules, definition of done
docs/
  PAGES.md                    Page-by-page layout and component spec
  CONTENT.md                  All site copy, meta tags, placeholders
  BRAND.md                    Brand guidelines: color, type, logo, voice
brand/
  tokens.css / tokens.json    Design tokens
  logo/                       Logo SVGs (wordmark outlined), app icon, favicon
  fonts/                      Schibsted Grotesk variable font + license
reference/
  static/                     Working HTML of all four pages (visual source of truth)
  screenshots/                Desktop + mobile captures of every page and state
  design-source/              Original design-canvas files (pages + brand boards)
```
