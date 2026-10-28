// Owner-supplied values. Anything still in [BRACKETS] is a placeholder and
// renders on the site as-is, so it stays visibly marked until replaced.
// See canopy-website-handoff/docs/CONTENT.md, "Placeholders to fill".

/** e.g. 'hello@canopy.com'. Rendered as a mailto link once it's a real address. */
export const CONTACT_EMAIL = '[contact email]';

/** e.g. 'https://cal.com/canopy/intro'. Empty string keeps the placeholder text. */
export const SCHEDULING_URL = '';

/** e.g. 'one business day' */
export const RESPONSE_TIME = '[RESPONSE TIME]';

/** Pricing FAQ, "How long do we commit for?" */
export const RENEWAL_TERMS = '[After the first term: YOUR RENEWAL TERMS]';

/**
 * Where the book-a-call form posts. '/' works with Netlify Forms.
 * To switch backends, point this at a Formspree URL, a serverless function
 * or a CRM endpoint that accepts a form-encoded POST.
 */
export const FORM_ENDPOINT = '/';

export const isPlaceholder = (value: string) => !value || value.startsWith('[');
