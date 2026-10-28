# Design source (secondary reference)

These are the original files from the design canvas. Use them only when something isn't clear from `reference/static/`.

- `HomeB.dc.html` (Home), `HowItWorks.dc.html`, `Pricing.dc.html` and `Book.dc.html` are the four website pages.
- `Main.dc.html` (brand cover), `Logo.dc.html`, `Color.dc.html`, `Type.dc.html`, `Voice.dc.html` and `Social.dc.html` (social + email templates) are the brand boards.

Format notes: everything inside `<x-dc>` is the design. Inline `style` values are exact. `<helmet>` holds page-level CSS. `<sc-if>`, `<sc-for>` and `{{ … }}` are template syntax, not HTML, and the script block at the bottom provides their data and state (menu open/closed, form sent, calendar weeks). Links point to other `.dc.html` files; map them to the routes in CLAUDE.md.
