# /specify – Generate or update a feature spec

## When to use
Run this before any new feature work or when existing requirements need a
rewrite. The command transforms an idea into `specs/<feature>/spec.md` using the
baseline template.

## Instructions for Cursor
1. Enter PLAN mode.
2. Read `steering/product.md` and `steering/tech.md` to ground context.
3. If the user provided a feature name/summary, propose a slug
   (`feat-xyz`) and show the plan:
   - Files to read/write (include spec template path).
   - Clarification questions you will ask.
   - Outline of the spec sections you will generate.
4. After approval:
   - Create `specs/<slug>/` if it does not exist.
   - Copy `.specify/templates/spec-template.md` into
     `specs/<slug>/spec.md`.
   - Populate each section with project-specific detail, replacing
     placeholders and inserting `[NEEDS CLARIFICATION: …]` markers for open
     questions.
   - Create/append `specs/<slug>/research.md` when external evidence or links
     are referenced.
5. Summarize the spec sections, unresolved questions, and next suggested
   commands (`/plan`, `/evolve`, etc.).
6. Never modify code files in this command.

