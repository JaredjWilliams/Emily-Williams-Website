# Product Steering Guide

## Mission
Deliver a modern marketing and ordering experience for Emily Williams that
feels personal, trustworthy, and performant on any device. Every feature should
reinforce her brand voice (warm, professional, design-forward) while making it
effortless for visitors to learn about services and submit high-quality orders.

## Target Audiences
- **Home owners & pet parents** seeking bespoke art or staging work.
- **Universities & clubs** commissioning campus-focused pieces.
- **Real-estate partners** looking for fast turnarounds on interior visuals.

## Value Proposition
1. Show, don’t tell – rich imagery, testimonials, and project stories build
   trust within the first scroll.
2. Streamlined ordering – minimal fields, clear pricing context, responsive
   feedback, and instant confirmations.
3. Human follow-up – every automation must end with a personal next step (email
   intro, scheduling link, etc.).

## Success Metrics
- 80% of visitors reach the Hero call-to-action on both mobile and desktop.
- 30% of engaged visitors open or start the order form.
- Order submissions render < 2.5s Largest Contentful Paint on 4G.
- Zero unhandled JavaScript errors in production sessions.

## Non-Negotiable UX Principles
- **Accessible by default**: WCAG AA color contrast, semantic HTML, keyboard
  navigation, labelled form inputs.
- **Story-first layout**: Each page section must state a goal and desired
  visitor action in the spec before design or code work begins.
- **Tone and copy**: Friendly, confident, concise. Avoid jargon unless defined.
- **Feedback loops**: Any async action (form submit, carousel, CTA) needs clear
  success or failure messaging with remediation steps.

## Discovery & Research Expectations
- Capture competitor notes, testimonials, or stakeholder interviews inside
  `specs/<feature>/research.md`.
- Record open questions inside specs as `[NEEDS CLARIFICATION: …]`.
- Prioritize mobile mockups and behavior unless a spec explicitly states
  otherwise.

