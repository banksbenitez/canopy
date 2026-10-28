# Page specs

Exact values (sizes, padding, colors) are in `reference/static/*.html`. This document explains the structure and behavior so you can turn the reference into clean components.

## Shared components

### 1. SplitHero (every page)
A full-width flex row that wraps:
- **Stage** (`flex: 2 1 640px`, Canopy green, Paper text, `min-height` 640–780px): logo (top-left, links home) · H1 + lead paragraph + optional CTAs (middle) · small meta line (bottom). Laid out with `justify-content: space-between`.
- **Control rail** (`flex: 1 1 320px`, Ink): top row, right-aligned: **hamburger button** + **"Book a call"** (orange). Below: the page's rail content, pushed to the bottom with `margin-top: auto`.
- At ≥ 1440px the split is exactly 960 / 480. Below **960px** the rail wraps beneath the stage.
- On narrow screens a small hamburger (`.stage-menu`) shows in the stage's top-right. It links to `#menu` and opens the menu. It is hidden at ≥ 960px.

Rail content per page:
| Page | Rail content |
|---|---|
| Home | "What we run": 01 Fill the room / 02 Run the room (orange "02") / 03 Work the recording, each with a one-line description; each links to `/how-it-works#before` / `#live` / `#after` |
| How it works | "Chapters": T−3 wks Fill the room · T 0 Run the room (orange) · T+ Work the recording · Month 0 The setup (anchor links) |
| Pricing | "The numbers": $2,500 per month, one webinar · $2,000 one-time setup · 3 months initial term |
| Book a call | The form itself (see Book page). This page has no hamburger. The stage's top row has text links to How it works and Pricing. |

### 2. RailMenu (dropdown inside the rail)
- Hamburger: a 52×44 transparent button with a 1px `#4E5F55` border and three 2px Paper bars. It swaps to an X when open. `aria-controls="site-menu"`, `aria-expanded`.
- When open, a list of four large links (30px/700, Paper, hairline separators) appears in the rail under the button row: Home, How it works, Pricing, Book a call. The current page gets `aria-current="page"`.
- Escape closes it and returns focus to the button. No overlay, no animation required.

### 3. ChapterScrubber (section header)
A row: `timestamp` · a 3px track with an orange fill and an 11px orange playhead at N% · `section label`. Text is 14px/600 Stone (or Sage on ink sections). The percentage increases down each page:
- Home: 02:10 End to end (22%) · 05:30 What it turns into (46%) · 08:00 Pricing (70%) · 09:15 Next up (100%, full bar)
- How it works: T−3 wks 01 · Before (10%) · T 0 02 · Live (45%, the label has a live dot) · T+ 03 · After (75%) · Month 0 The setup (92%)
- Pricing: 01:00 What you get (30%) · 04:30 Q&A (75%)

It is decorative and should be `aria-hidden`, except the section label, which can serve as a visually small heading or be duplicated in the section's real `<h2>`.

### 4. ClosingCard ("reminder email" CTA)
A white card with a 1px border, in two columns: left has a live dot + "Starting soon", a big H2 and a meta line ("20 minutes · a call with Canopy · …"); right has an Ink "Join the call" button and the "Produced with [mark] canopy" credit in Stone. Used at the bottom of Home, How it works and Pricing, each with its own H2.

### 5. Footer
Ink, single row: gray dot + "Off air" on the left; links on the right (the other pages) + `[contact email]`.

### 6. Buttons
- Primary: Live background, Ink text, 700 weight, 16–18px, padding 14–16px × 22–26px, min-height 44–54px, square.
- Secondary (on paper): Ink background, Paper text.
- Text link CTAs: underlined, 600 weight.

## Home (`/`)
1. **SplitHero.** H1 "One hour live.<br>Content for months." Lead paragraph. CTAs: "Book a 20-minute call" (primary) + "See the whole process" (jumps to `#runsheet`). Meta: "Webinars-as-a-service" / "One webinar a month, fully run". Rail: What we run.
2. **End to end** (`#runsheet`, paper). Scrubber 02:10. H2 "The live hour is the smallest part." + paragraph on the right.
   - **Timeline bar** (72px tall, `role="img"` with aria-label): Before (Fern, flex 5) · **Live** (Live orange, fixed ~56–96px) · After (Canopy, flex 6). Captions below: "~3 weeks out" · "1 hour" · "Weeks of follow-up and reuse".
   - **Three phase columns** (auto-fit, min 300px): Before (white, 6px Fern top border) · Live (Ink, 6px orange top border) · After (Canopy, 6px Ink top border). Each has a phase label, an H3 "Decides …", a ruled list of what Canopy does, and a footer row "Canopy runs it" / "**You:** …".
   - Closing rule line: "Most teams only have time for the middle. Canopy runs all three." + link "How it works, step by step".
3. **What it turns into** (Ink). Scrubber 05:30. Left: H2 "One webinar fills the calendar." + paragraph + a legend of four output types with color keys: Emails (Paper), Clips (Live), Newsletter (Fern), Data (outlined Lichen).
   Right: an **8-week calendar** grid, 4 columns × 2 rows (2 columns below 560px), with 1px gaps in `#34413A`. Each week cell (Ink, min-height 190px) has a "Week N" label and colored chips by type. Header row: "The eight weeks after one webinar" / "Example schedule". Below the grid, a Canopy bar: "**And permanently: your video library**" / "Every webinar and highlight, in one place". Chip data is in `docs/CONTENT.md`; keep it as data (an array), not hand-written markup.
4. **Pricing teaser** (paper). Scrubber 08:00. A Canopy card, styled like the LinkedIn card: small reversed lockup, "$2,500" (clamp 64–128px, 800, −0.055em), "a month. One webinar, fully run.", meta line. An inset Ink panel on the right: live dot + "Included every month" + list + "Full pricing" link.
5. **ClosingCard.** Scrubber 09:15 (full bar). H2 "Your next webinar, without the work."
6. **Footer.**

## How it works (`/how-it-works`)
1. **SplitHero.** H1 "How it works." + lead. Rail: Chapters.
2. **Phase sections** `#before` (paper), `#live` (Ink), `#after` (paper). Each: scrubber; then a row with left column (H2 phase title at displayL, intro paragraph, **"Your part" box**) and right column (a ruled list: each row is a two-column grid with the item name at 22–30px/700 and a description at 17px; the first row has a heavy 3px top rule). In the Live section the "Your part" box is orange with "Give the talk." in bold.
3. **The setup** `#setup` (Fern). Scrubber. H2 "Before your first webinar." + paragraph; four numbered columns on a 3px Ink rule with vertical hairlines: Onboarding · Branded pages · Zoom Webinar · Email and reporting.
4. **ClosingCard** with H2 "Ready to hand it off?". The meta line links to Pricing.
5. **Footer.**

## Pricing (`/pricing`)
1. **SplitHero.** H1 "One program. One price." + lead. Rail: The numbers.
2. **What you get.** Scrubber. A Canopy card: H2 "Every month, we run:" + a two-column ruled list of 10 items (the last, "Zoom Webinar, included", in orange). An inset Ink panel: "Once, at the start" / "Setup" / five setup items / "Book a call" button.
3. **Q&A** (white). Scrubber. H2 "Questions from the chat." + six `<details>` items (the first open by default). Summary 21px/700; answer 17px.
4. **ClosingCard** with H2 "One hour live. Content for months."
5. **Footer.**

## Book a call (`/book`)
The whole page is the split, Ink behind it, `min-height: 100vh`.
- **Stage:** logo + text links (How it works, Pricing) on top; H1 "Book a 20-minute call." + lead; "On the call", a 3-item numbered ruled list.
- **Rail:** live dot + "Request a call", then the form. Inputs: `#1B2721` fill, no border except a 2px `#8FA396` bottom border, Paper text, 18px, min-height 50px, square corners, orange focus outline. Labels 15px/600 above each input. Submit: orange "Request a call". Below it: "Or pick a time directly: [scheduling link]".
- **Sent state:** H2 "Thanks. You're on the run sheet." + reply line + outlined "Send another" button. Focus moves here on success.
- **Footer.**

## Responsive checklist
- 320–559: calendar is 2 columns; every multi-column block stacks; hero H1 bottoms out at 56px.
- 560–959: calendar is 4 columns; the hero split is stacked (rail below the stage); the stage hamburger is visible.
- 960+: full split; the stage hamburger is hidden.
- Large type uses `clamp()`, so don't add extra breakpoints for type.
