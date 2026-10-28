# Iconography

16 icons, built from the Crown logo's parts: domes, solid bars and the orange live dot. They're flat, two-tone and square-ended. Source files: `brand/icons/*.svg` (64×64 viewBox). Board: `reference/design-source/Icons.dc.html`.

## How to use the files

**Inline them** (don't use `<img>`) so they pick up the section's colors. Build one `Icon` component that inlines the SVG by name and takes a size. Every icon is decorative: always `aria-hidden="true"` and next to a text label.

Colors come from three CSS custom properties, with fallbacks for the light version:

```css
--icon-primary    /* main shapes   (fallback #265B42) */
--icon-secondary  /* second tone   (fallback #8FB39B) */
--icon-cutout     /* knocked-out details: transcript lines, the play triangle in Clips. Set to the background color. (fallback #FFFFFF) */
/* Orange (#F0562B) is fixed inside the icons that carry the live dot. */
```

Set them on the section, by background. (The reference HTML in `reference/static/` uses shorter names, `--p`, `--s` and `--bg`, set on each `<svg>`. Use the `--icon-*` names in the real build.)

| Background | --icon-primary | --icon-secondary | --icon-cutout |
|---|---|---|---|
| Paper `#F1F2EC` | `#265B42` | `#8FB39B` | `#F1F2EC` |
| White `#FFFFFF` | `#265B42` | `#8FB39B` | `#FFFFFF` |
| Ink `#121C17` | `#F1F2EC` | `#4E7461` | `#121C17` |
| Canopy `#265B42` | `#F1F2EC` | `#8FB39B` | `#265B42` |

## The set

| File | Meaning | Orange? |
|---|---|---|
| `registrants.svg` | Rows of domes filling seats | — |
| `reminders.svg` | Bell made from a dome | — |
| `speakers.svg` | Head and shoulders on a stage bar | — |
| `promotion.svg` | Page with a crown and lines of copy | — |
| `production.svg` | Camera with a tally light | live dot |
| `backstage.svg` | Curtains with a performer dot | live dot |
| `chat-and-qa.svg` | Two speech bubbles | — |
| `polls.svg` | Three "trees" of different heights, the winner in orange | yes |
| `live-stream.svg` | Canopy arcs above a live dot | live dot |
| `audience-data.svg` | List rows | — |
| `recording.svg` | Ring with a solid center | — |
| `transcript.svg` | Page with cut-out lines | — |
| `clips.svg` | Vertical, square and wide frames | — |
| `newsletter.svg` | Envelope | — |
| `video-library.svg` | Shelf of tapes with a crown | — |
| `analytics-report.svg` | Domes growing left to right | — |

**Orange rule:** orange appears only where something is live. One exception is built into the site: in the Pricing list, **Coordination** uses `backstage.svg` with the performer dot recolored to `--icon-primary` (not orange). Support this with a `noLive` prop on the Icon component that swaps the `#F0562B` fill for `var(--icon-primary)`.

## Where they go on the site

Sizes are the rendered width and height in px. Icon-to-text gap is in brackets.

### Home (`/`)
**End to end → the three phase columns.** One icon at the top of each column, above the "01 · Before" label. 56px.
| Column | Background | Icon |
|---|---|---|
| 01 · Before | White | `registrants` |
| 02 · Live | Ink | `live-stream` |
| 03 · After | Canopy | `analytics-report` |

**Pricing teaser → the "Included every month" list** in the inset Ink panel. 24px, inline before each item [12px gap].
| Item | Icon |
|---|---|
| Registration | `registrants` |
| Reminders | `reminders` |
| Speaker logistics | `speakers` |
| Promotion | `promotion` |
| Production | `production` |
| Clips and transcript | `clips` |
| Follow-up | `newsletter` |
| Report | `analytics-report` |

### How it works (`/how-it-works`)
**Every deliverable row** in the three phase lists gets an icon before the item name. 44px [16px gap]. The icon sits inside the name cell, vertically centered with the name.
| Section (background) | Item | Icon |
|---|---|---|
| Before (Paper) | Registration pages | `registrants` |
| | Email sequences | `reminders` |
| | Speaker logistics | `speakers` |
| | Promotional copy | `promotion` |
| Live (Ink) | Production | `production` |
| | Attendee experience | `chat-and-qa` |
| | Live streaming | `live-stream` |
| After (Paper) | First-party data | `audience-data` |
| | Recording and transcript | `recording` |
| | Highlight clips | `clips` |
| | Follow-up emails | `newsletter` |
| | Newsletter content | `transcript` |
| | Video library | `video-library` |
| | Analytics report | `analytics-report` |

### Pricing (`/pricing`)
**What you get → "Every month, we run:"** list on the Canopy card. 32px [14px gap].
| Item | Icon |
|---|---|
| Coordination | `backstage` (noLive) |
| Speaker logistics | `speakers` |
| Registration page | `registrants` |
| Email sequence | `reminders` |
| Promotional copy | `promotion` |
| Live production | `production` |
| Recording and clips | `clips` |
| Follow-up emails | `newsletter` |
| Analytics report | `analytics-report` |
| Zoom Webinar, included | `live-stream` |

### Not used (on purpose)
- The hero rails, the Book page, the footer and the 8-week calendar don't use icons. Their color keys and type do that job.
- `polls` is in the set but has no slot on the site yet. Keep it for social posts and decks.

## Don'ts
- Don't stroke, outline, round off or add shadows to the icons.
- Don't add new colors, and don't put orange in an icon that isn't about something live.
- Don't put icons in circles or badges.
- Don't use a third-party icon library anywhere on the site. If a new concept needs an icon, draw it from the same parts (domes, bars, dots) on the 64px grid.
