# Canopy brand guidelines (v1)

## The idea

A webinar is a live broadcast, so the brand borrows from the studio, not from SaaS. A deep canopy green and a cool paper ground do most of the work; one hot orange, the **tally light** on a broadcast camera, means *live, now, act*. If everything is orange, nothing is.

**Positioning.** For teams that know webinars bring in business but can't run them consistently, Canopy runs the whole operation and turns each event into content the team uses for months.

**The offer in one line.** One hour live. Content for months.

## Color

| Name | Hex | RGB | Use |
|---|---|---|---|
| Canopy | `#265B42` | 38 91 66 | Primary fields, the mark, hero stage |
| Paper | `#F1F2EC` | 241 242 236 | Default ground; text on Canopy and Ink |
| Ink | `#121C17` | 18 28 23 | Text; the control rail; studio sections |
| Fern | `#CFDCCF` | 207 220 207 | Quiet fills; secondary text on Canopy |
| Live | `#F0562B` | 240 86 43 | Signals only: live indicators, primary CTA |
| Stone | `#4F5A54` | — | Secondary text on Paper (6.4:1) |

Supporting neutrals are in `brand/tokens.css`.

**Proportion:** about 45% Paper, 30% Canopy, 17% Ink, 6% Fern, 2% Live.

**Rules**
- Live always carries **Ink** text, never white.
- White and Paper sit on Canopy and Ink.
- No gradients. No tints of Live. No drop shadows.

## Typography

**Schibsted Grotesk**, one family for everything (variable, 400–900; files in `brand/fonts`, SIL OFL). Fallback: Helvetica Neue, Arial.

| Role | Weight | Size | Line height | Tracking |
|---|---|---|---|---|
| Display | 800 | 96–128px | 0.9 | −5% |
| Headline | 700–800 | 48–72px | 0.92–1.0 | −3 to −5% |
| Subhead | 700 | 26–30px | 1.2 | −1.5% |
| Body | 400 | 17–18px | 1.5–1.55 | 0 |
| Label | 600 | 14–15px | — | 0 |

- **Sentence case everywhere.** No all-caps eyebrows, no title case.
- Headlines end with a period.
- Use the font's proportional numerals (not tabular). Tabular figures open visible gaps around commas in big prices.

## Logo

**The mark, "Crown":** three overlapping domes (a tree crown seen from the side) over a bar. Canopy above, a stage below. Geometry, in a 44×34 viewBox:

```svg
<path d="M4 24 A8 8 0 0 1 20 24 Z"/>
<path d="M12 24 A12 12 0 0 1 36 24 Z"/>
<path d="M28 24 A6 6 0 0 1 40 24 Z"/>
<rect x="4" y="28" width="36" height="4"/>
```

**Wordmark:** "canopy", lowercase, Schibsted Grotesk 800, tracking −0.045em. The SVGs in `brand/logo` have the wordmark outlined, so they render without the font.

**Versions** (`brand/logo/`)
- `canopy-lockup.svg`: Canopy-green mark with an Ink wordmark, for light grounds.
- `canopy-lockup-reversed.svg`: all Paper, for Canopy or Ink grounds.
- `canopy-lockup-live.svg`: Paper with an **orange bar**. For event days and live contexts only.
- `canopy-mark*.svg`: the mark alone.
- `canopy-app-icon.svg` / `.png`, `favicon.svg`: Paper mark on a Canopy rounded square. This is the only rounded shape in the system.
- Credit line on client materials: "Produced with [mark] canopy", in Stone, small.

**Rules**
- Clearspace: the height of the crown on every side.
- Minimum width: 96px on screen, 24mm in print.
- Don't add a tagline inside the lockup.
- Don't capitalize the wordmark or set it in another typeface.
- Don't fill the crown with orange. Orange belongs only on the bar, and only when live.
- Don't put the mark in a circle, badge or outline (the app icon is the one exception).

## Visual language

- **The split:** green stage (2/3) + ink control rail (1/3), from the brand cover. Every page opens this way.
- **Chapter scrubbers:** each section starts with a timestamp and an orange playhead on a thin bar. The playhead moves further right the deeper you are in the page, as if you were watching a recording.
- **Ruled lists:** content sits on hairline rules, not in cards. A heavier rule (2–3px Ink or Paper) starts a list.
- **Square corners** everywhere. No rounded cards, no pills (except the app icon).
- **The live dot:** a 9–12px orange circle beside "Live", "Starting soon" and similar labels. The footer has a gray dot with "Off air".
- **No stock imagery.** If photos are added later, they must be real backstage moments, shot on a phone in natural light. Never stock photos, AI images or 3D blobs.
- **Never:** gradients, glows, glassmorphism, emoji, icon grids, left-border accent cards, "sparkle" icons, uppercase micro-labels.

## Voice

We sound like the producer who has run a hundred of these: calm, specific, a little dry. We talk about the work, not the magic.

| We say | We don't say |
|---|---|
| run, produce, handle | elevate, seamless, unlock |
| registrants, attendees | leads, eyeballs |
| clips, transcripts, the library | content engine, flywheel |
| follow-up, pipeline | revolutionize, game-changing |
| your team, your audience | exclamation points |

**Example rewrite**
- ✗ "Unlock the full potential of your webinars with our seamless, end-to-end solution!"
- ✓ "We'll handle the invites, the reminders, the tech check and the edit. Afterward you get the recording, the transcript, the highlight clips and a follow-up email ready to send."

**Lines we can use**
- One hour live. Content for months.
- You bring the expertise. We run the room.
- A webinar a month, handled end to end.
- The recording is where the work starts.
- Most of a webinar happens off camera.
- The live hour is the smallest part.

**The three phases** (always these names): **Fill the room** (before) · **Run the room** (live) · **Work the recording** (after).
