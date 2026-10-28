# Update: lighter Canopy green (v3 of this package)

The primary brand green changed from `#1E4D38` to `#265B42` (RGB 38 91 66). Nothing else changed: Ink, Paper, Fern and Live are the same.

Updated in this package: `brand/tokens.css` and `tokens.json`, `docs/BRAND.md` and `docs/ICONS.md`, every logo file, the icon fallback colors, the favicon, app icon and social image, the reference pages and the screenshots.

Contrast with the new green: Paper text 7.0:1, Fern text 5.6:1 (both pass WCAG AA).

Prompt for Claude Code, if the site is already built:

> Our primary green changed from #1E4D38 to #265B42. Update the --canopy color token, then search the whole project (CSS, components, inline styles, SVGs including logos and icons, meta theme-color, and any images generated from code) for #1E4D38, its lowercase form, and rgb(30, 77, 56), and replace them with #265B42 / rgb(38, 91, 66). Replace the logo files, favicon, apple-touch-icon and og-image with the new versions from this package's brand/logo and reference/static/assets folders. Don't change anything else. List every file you changed.
