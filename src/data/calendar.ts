// "One webinar fills the calendar" — the illustrative 8-week schedule on Home.
// Copy from docs/CONTENT.md. Timing is an example; confirm with the owner.

export type OutputType = 'email' | 'clip' | 'news' | 'data';

export const CALENDAR: { week: string; items: [OutputType, string][] }[] = [
  { week: 'Week 1', items: [['data', 'Attendee list to your CRM'], ['email', 'Follow-up: recording and transcript'], ['data', 'Analytics report']] },
  { week: 'Week 2', items: [['clip', 'Highlight clip on LinkedIn'], ['news', 'Newsletter: the key ideas']] },
  { week: 'Week 3', items: [['clip', 'Vertical clip for short-form']] },
  { week: 'Week 4', items: [['email', 'Nurture email: watch the full talk']] },
  { week: 'Week 5', items: [['clip', 'Highlight clip on LinkedIn'], ['news', 'Newsletter: one clip, linked']] },
  { week: 'Week 6', items: [['clip', 'Clip on your website']] },
  { week: 'Week 7', items: [['news', 'Newsletter: a question from the Q&A']] },
  { week: 'Week 8', items: [['email', 'Invite to the next webinar, with a clip']] },
];

export const LEGEND: { type: OutputType; name: string; text: string }[] = [
  { type: 'email', name: 'Emails.', text: 'Follow-ups with the recording, transcript and highlights.' },
  { type: 'clip', name: 'Clips.', text: 'Short highlights for social, email and your site.' },
  { type: 'news', name: 'Newsletter.', text: "The talk's ideas, written up or linked in." },
  { type: 'data', name: 'Data.', text: 'Attendee list for your CRM, plus the analytics report.' },
];
