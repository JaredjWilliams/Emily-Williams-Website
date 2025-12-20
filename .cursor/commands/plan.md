# /plan – Turn an approved spec into a technical plan

## When to use
After `/specify` (and clarifications) are complete, run this to generate
`specs/<feature>/plan.md`, plus supporting contracts/data-model files.

## Instructions for Cursor
1. Enter PLAN mode and present:
   - Files you will read (`steering/*.md`, `specs/<feature>/spec.md`,
     existing research).
   - Files you will create/update (plan, data-model, contracts, quickstart).
   - Validation checklist (gates) you will enforce.
2. Upon approval, execute:
   - Copy `.specify/templates/plan-template.md` into
     `specs/<feature>/plan.md`, filling in architecture, data model, APIs,
     non-functional requirements, phased rollout, and testing strategy.
   - Generate `specs/<feature>/data-model.md` for detailed types/validation when
     applicable.
   - Generate `specs/<feature>/contracts/` files (REST/GraphQL payloads,
     events) as needed.
   - Produce `specs/<feature>/quickstart.md` listing manual validation steps.
3. Gate checks (document outcome inside the plan):
   - Simplicity (≤3 projects touched, no speculative abstractions).
   - Anti-abstraction (reusing existing frameworks/components).
   - Integration-first (contracts + test plan defined before code).
4. End with a summary of decisions, risks, and next command (`/tasks`).

