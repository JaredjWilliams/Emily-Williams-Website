# /implement – Execute tasks with evidence

## When to use
After specs, plan, and tasks are approved, run this to work through
`specs/<feature>/tasks.md`. It should keep a lightweight execution log (e.g.,
`specs/<feature>/progress.md` or PR summary).

## Instructions for Cursor
1. Start in PLAN mode and describe:
   - Which task(s) you will complete.
   - Files/tests you expect to touch.
   - Evidence you will produce (unit tests, Cypress run, screenshots).
2. Obtain approval before editing files.
3. For each task:
   - Update code, styles, tests as specified.
   - Keep changes scoped; if a task balloons, pause and ask to split.
   - Run the required tests. Capture output and link/log it in the summary.
   - Update `specs/<feature>/tasks.md` and/or `progress.md` with status and
     links to evidence.
4. Never skip tests or documentation updates. If blocked, log the reason and
   revert partial changes before moving on.
5. Finish with a recap: tasks completed, tests run, screenshots/logs, remaining
   blockers.

