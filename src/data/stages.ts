// Before / during / after. Copy from canopy-website-brief.md (section 3 and the hero card).
// Used on Home (hero card + end-to-end columns) and How it works.

export type StageId = 'before' | 'during' | 'after';

export const STAGES: {
  id: StageId;
  name: string;
  /** Hero card line */
  summary: string;
  tagline: string;
  items: string[];
  canopyRuns: string;
  youBring: string;
}[] = [
  {
    id: 'before',
    name: 'Before',
    summary: 'Branded registration, reminder emails and well-prepared speakers, so more registrants attend.',
    tagline: 'Gets registrants to attend.',
    items: [
      'Branded registration page',
      'Automated confirmation and reminder emails',
      'Speaker logistics and tech prep',
      'Promotional copy for email and social, based on your positioning',
      'A prep call on run-of-show, Q&A and polls',
    ],
    canopyRuns: 'the setup and the email sequences.',
    youBring: 'the topic, the speakers and the promotion to your audience.',
  },
  {
    id: 'during',
    name: 'During',
    summary: 'Production, a private backstage for speakers, and managed chat, Q&A and polls.',
    tagline: 'Keeps the audience engaged.',
    items: [
      'Audio and video production',
      'A private backstage for speakers',
      'Waiting room, chat, Q&A and polls',
      'Optional livestream to LinkedIn and YouTube for public events',
    ],
    canopyRuns: 'production.',
    youBring: 'the speakers and the presentation.',
  },
  {
    id: 'after',
    name: 'After',
    summary: 'Attendee data for your CRM, follow-up within 48 hours, clips and a video library.',
    tagline: 'Turns the session into leads and content.',
    items: [
      'Attendee and registration data, ready for your CRM',
      'Full recording, transcript and highlight clips',
      'Follow-up emails within 48 hours',
      'A growing video library',
      'An analytics report within a week',
    ],
    canopyRuns: 'the assets, the follow-up and the report.',
    youBring: 'the call to action.',
  },
];
