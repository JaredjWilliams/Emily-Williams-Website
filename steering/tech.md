# Technical Steering Guide

## Core Stack
- **Frontend**: Vite + React + TypeScript, SCSS modules for styling.
- **State & data**: React hooks/context for local state, fetch/axios for remote
  calls. Avoid introducing Redux/MobX unless justified in the spec.
- **UI primitives**: Reuse components under `src/ui` or `src/shared/components`
  before adding new libraries. Favor composition over duplication.
- **Testing**: Vitest + React Testing Library for units, Cypress for flows.
- **Build & deploy**: Vite build output hosted via Amplify/S3, AWS Lambda used
  for serverless endpoints defined in `aws-config` or `serverless.yml`.

## Directory & Naming Conventions
- Features live under `src/components/<FeatureName>` with co-located
  `<FeatureName>.module.scss`.
- Shared atoms/molecules belong in `src/ui` or `src/shared/components`.
- Services belong in `src/app/services` (Angular legacy) or `src/services`
  (React). Document which layer the feature touches in the plan.
- Tests mirror file structure: `Component.test.tsx` next to the component or in
  `__tests__` folders for utilities.

## Security & Compliance
- Never commit secrets or API keys. Use environment variables and document them
  in specs.
- Client-side form submissions must sanitize/validate before calling backend
  endpoints. Include validation rules in specs and plans.
- Follow AWS Cognito/DynamoDB schemas defined in `aws-config`. Update the spec
  before adjusting schemas or IAM roles.

## Performance & Observability
- Target < 100KB initial JS bundle per route. Use code-splitting for galleries,
  carousels, or admin-only views.
- Images: leverage `ImageWithFallback` component, provide `width/height`, use
  modern formats where available.
- Instrument critical flows with console warnings or logging hooks; surface
  production issues via CloudWatch or Amplify logs noted in the plan.

## Definition of Done
1. Spec, plan, and tasks updated with final decisions.
2. Automated tests covering each acceptance criterion.
3. Lighthouse scores ≥ 90 for Performance/Accessibility on targeted pages.
4. Deploy instructions updated if build/deploy steps changed.

