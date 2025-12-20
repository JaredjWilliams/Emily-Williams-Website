# /evolve – Update specs/plans during execution

## When to use
If requirements change mid-flight or you discover new information while
implementing, run `/evolve` to update the relevant spec/plan/tasks files instead
of letting code drift.

## Instructions for Cursor
1. Enter PLAN mode and outline:
   - Files affected (`spec.md`, `plan.md`, `tasks.md`, `research.md`).
   - Reasons for the change (new stakeholder input, technical constraint, etc.).
   - Validation steps (reviewing steering docs, confirming with user).
2. After approval:
   - Apply edits to documentation, clearly marking additions/removals.
   - Maintain revision history (bullet list of “Decisions” in spec/plan).
   - Add or resolve `[NEEDS CLARIFICATION]` markers accordingly.
   - Sync tasks with the updated scope (add/split/remove tasks).
3. Summarize changes, remaining open questions, and which downstream work needs
   rerunning (`/plan`, `/tasks`, `/implement`).

