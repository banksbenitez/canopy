// The run-of-show: six steps, the same for every webinar.
// `items` are the matching stage items from STAGES, shown on /how-it-works.

import type { StageId } from './stages';

export const STEPS: { title: string; text: string; stage: StageId; items: string[] }[] = [
  {
    title: '45–60 days out: kickoff.',
    text: 'Tell us the webinar is coming. We send a short brief covering purpose, definition of success, audience, key ideas and speakers.',
    stage: 'before',
    items: [],
  },
  {
    title: 'Drafts for your approval.',
    text: 'We write the registration page, promotional emails and social copy, plus a timeline with key dates.',
    stage: 'before',
    items: ['Branded registration page', 'Promotional copy for email and social, based on your positioning'],
  },
  {
    title: 'You promote, we prepare.',
    text: 'You line up speakers and drive registrations. We run reminders, speaker logistics and a prep call on run-of-show, Q&A and polls.',
    stage: 'before',
    items: ['Automated confirmation and reminder emails', 'Speaker logistics and tech prep', 'A prep call on run-of-show, Q&A and polls'],
  },
  {
    title: 'The webinar.',
    text: 'We run production and manage the audience. Your speakers present.',
    stage: 'during',
    items: [
      'Audio and video production',
      'A private backstage for speakers',
      'Waiting room, chat, Q&A and polls',
      'Optional livestream to LinkedIn and YouTube for public events',
    ],
  },
  {
    title: 'Within 48 hours.',
    text: 'Follow-up emails go out with the recording and next steps.',
    stage: 'after',
    items: ['Follow-up emails within 48 hours', 'Full recording, transcript and highlight clips', 'Attendee and registration data, ready for your CRM'],
  },
  {
    title: 'Within one week.',
    text: 'You get the performance report, and the session joins your video library.',
    stage: 'after',
    items: ['An analytics report within a week', 'A growing video library'],
  },
];
