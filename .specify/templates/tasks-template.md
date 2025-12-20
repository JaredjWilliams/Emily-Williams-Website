# Task Breakdown: {{FEATURE_NAME}}

> Generated from plan + spec. Keep tasks ≤ 2 days of work and include tests.

## References
- Spec: `specs/{{FEATURE}}/spec.md`
- Plan: `specs/{{FEATURE}}/plan.md`
- Steering: `steering/product.md`, `steering/tech.md`

## Execution Guidelines
- Prefix tasks with `[P]` if they can run in parallel safely.
- Link to plan sections (`plan.md#section`) for context.
- Every task lists tests/evidence required to mark it done.
- Update this file if tasks change; don’t work from memory.

## Tasks
### Phase 0 – Clarifications & Setup
1. Capture outstanding `[NEEDS CLARIFICATION]` items, resolve or log owner.
2. Validate design assets / copy / API availability.

### Phase 1 – {{User Story / Slice}}
1. {{Task description}}  
   - Files: `src/...`  
   - Tests: `Component.test.tsx`, Cypress scenario  
   - DoD: acceptance criterion #1 satisfied, analytics event logged.
2. …

### Phase 2 – {{Next Slice}}
- …

### QA & Hardening
- Cross-browser + device matrix
- Accessibility audit
- Performance budget checks

### Verification Checklist
- [ ] All tasks cross-referenced with spec acceptance criteria
- [ ] Tests green in CI (unit + e2e)
- [ ] Docs/notes updated (`spec.md`, `plan.md`, READMEs)

