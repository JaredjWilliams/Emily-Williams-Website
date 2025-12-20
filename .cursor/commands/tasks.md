# /tasks – Break the plan into actionable work

## When to use
Run after `/plan` to create or refresh `specs/<feature>/tasks.md`. The output is
the single source of truth for execution order, dependencies, and test evidence.

## Instructions for Cursor
1. PLAN mode summary must list:
   - Inputs: steering docs, spec, plan, data-model, contracts.
   - Output: `tasks.md` (and any updates to TODO lists).
   - Strategy for slicing work (by user story, vertical slice, etc.).
2. Post-approval:
   - Copy `.specify/templates/tasks-template.md` into
     `specs/<feature>/tasks.md`, replacing placeholders.
   - For each user story / phase in the plan, create granular tasks with:
     - Files to touch.
     - Required tests + evidence.
     - Dependencies and `[P]` markers for parallel-safe work.
   - Include QA/hardening tasks (accessibility, performance, analytics).
3. Update repo-level TODOs (`todo.md`, GitHub issues, etc.) only if asked.
4. Summarize total tasks, highlight blockers, and suggest `/implement`.

