// Pricing copy shared by Home and /pricing.

import type { IconName } from './icons';

export const PRICE_HEADLINE = { price: '$2,500', rest: 'a month. One webinar, fully run.' };

export const PRICE_SUBHEAD =
  'One monthly fee covers the whole operation, including Zoom Webinar. Compare it with the staff time your webinars take now.';

export const FINE_PRINT = '$2,000 one-time setup · 3-month initial term · Zoom Webinar included';

export const SETUP_INCLUDES =
  'Onboarding, your branding on registration pages, Zoom Webinar configuration, email workflows and reporting.';

export const MONTHLY: [string, IconName][] = [
  ['Registration page and reminder emails', 'registrants'],
  ['Promotional copy for your channels', 'promotion'],
  ['Speaker logistics and prep call', 'speakers'],
  ['Live production and audience management', 'production'],
  ['Recording, transcript and highlight clips', 'clips'],
  ['Follow-up emails within 48 hours', 'newsletter'],
  ['Attendee data for your CRM', 'audience-data'],
  ['Analytics report and video library', 'analytics-report'],
];
