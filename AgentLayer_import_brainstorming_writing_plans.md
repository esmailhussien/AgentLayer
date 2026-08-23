# AgentLayer Task — Replace `planning` with Superpowers Brainstorming + Writing Plans

## Objective

Replace the generic placeholder:

```text
skills/planning/
```

with two established upstream skills from `obra/superpowers`:

```text
skills/brainstorming/
skills/writing-plans/
```

Do not rewrite these skills from scratch.

The goal is to separate:

```text
Brainstorming
→ clarify/design before implementation

Writing Plans
→ convert an approved/clear design into an executable implementation plan
```

---

## Upstream

Repository:

```text
https://github.com/obra/superpowers
```

Upstream skills:

```text
skills/brainstorming/
skills/writing-plans/
```

The upstream repository is currently MIT licensed.

Before importing:

1. Fetch/inspect the current upstream `main`.
2. Confirm the license is still MIT.
3. Record the exact upstream commit SHA used for both imports.

If the license has changed from MIT, STOP and report it.

---

## Remove Placeholder

The current AgentLayer directory:

```text
skills/planning/
```

is only a placeholder.

Remove it after confirming it contains no meaningful local implementation that needs preservation.

Do not leave both the generic placeholder and the two specialized skills.

---

## Import Strategy

Faithfully vendor the production files required by each upstream skill.

### Brainstorming

Inspect:

```text
obra/superpowers/skills/brainstorming/
```

Import:

```text
SKILL.md
```

plus any local supporting files that the current upstream `SKILL.md` directly depends on.

Destination:

```text
AgentLayer/skills/brainstorming/
```

### Writing Plans

Inspect:

```text
obra/superpowers/skills/writing-plans/
```

Import:

```text
SKILL.md
```

plus any local supporting files that the current upstream `SKILL.md` directly depends on.

Destination:

```text
AgentLayer/skills/writing-plans/
```

Do not import unrelated Superpowers skills.

Do not simplify or normalize behavioral content during this initial import.

Preserve upstream filenames.

---

## Attribution

Create:

```text
skills/brainstorming/UPSTREAM.md
skills/writing-plans/UPSTREAM.md
```

Each file must record:

- upstream project: `obra/superpowers`
- exact upstream path
- MIT license
- exact imported commit SHA
- import date
- AgentLayer local path
- imported files
- local modifications, if any

For the initial import, prefer:

```text
Local behavioral modifications: none
```

If any upstream file must be changed, document the exact change.

---

## Third-Party License

AgentLayer already contains:

```text
third_party/superpowers/LICENSE
third_party/superpowers/NOTICE.md
```

Reuse these files.

Verify the existing license still matches the upstream MIT license at the imported commit.

Do not create duplicate Superpowers license directories.

Update `NOTICE.md` if useful to list the newly vendored skills:

```text
systematic-debugging
verification-before-completion
brainstorming
writing-plans
```

---

## Upstream Tests / Evals

Inspect the current upstream directories and repository for tests, pressure scenarios, or behavioral evals specifically associated with:

```text
brainstorming
writing-plans
```

If dedicated upstream tests/evals exist, copy them to:

```text
tests/upstream/superpowers/brainstorming/
tests/upstream/superpowers/writing-plans/
```

For each imported test directory create a `README.md` containing:

- upstream source
- commit SHA
- imported files
- any path-only changes
- confirmation that behavioral content remains unchanged

Do not invent new AgentLayer tests in this task if upstream tests do not exist.

---

## Source Registry

Update:

```text
sources/SOURCES.md
```

Record both imports individually.

Include:

| Field | Required |
|---|---|
| Repository | obra/superpowers |
| Upstream skill | brainstorming / writing-plans |
| Upstream path | exact path |
| Local path | exact AgentLayer path |
| License | MIT |
| Commit | exact SHA |
| Modification status | unchanged or documented |

Also update/remove the old generic `planning` placeholder entry if one exists.

---

## Repository Structure After Import

Relevant section should look approximately like:

```text
skills/
├── brainstorming/
│   ├── SKILL.md
│   ├── UPSTREAM.md
│   └── <required upstream support files, if any>
│
├── writing-plans/
│   ├── SKILL.md
│   ├── UPSTREAM.md
│   └── <required upstream support files, if any>
│
├── systematic-debugging/
│   └── ...
│
└── verification/
    └── ...
```

The old:

```text
skills/planning/
```

should no longer exist.

---

## Important Behavioral Rule

Do not merge the two skills.

They intentionally represent different stages:

```text
unclear/new feature
      ↓
brainstorming
      ↓
clear design
      ↓
writing-plans
      ↓
implementation
      ↓
verification
```

AgentLayer should preserve that separation.

---

## Validation

Before committing:

1. Confirm upstream license is MIT.
2. Record exact upstream commit SHA.
3. Confirm `skills/planning/` was only a placeholder before deleting it.
4. Compare imported `SKILL.md` files against upstream.
5. Prefer byte-for-byte identical production files.
6. Document every necessary local modification.
7. Confirm frontmatter remains valid.
8. Confirm all local links/references resolve.
9. Confirm required supporting files were imported.
10. Confirm no unrelated Superpowers skills were imported.
11. Confirm existing third-party MIT attribution remains intact.
12. Confirm `sources/SOURCES.md` is updated.
13. Inspect whether dedicated upstream tests/evals exist and import only relevant ones.
14. Run `git diff --stat` and review all changed files.

---

## Git

Commit using:

```text
feat: replace planning with brainstorming and writing-plans skills
```

Push normally to the configured AgentLayer GitHub remote if authenticated.

Never force-push.

---

## Completion Report

Report only:

- upstream commit SHA
- license confirmation
- removed placeholder
- brainstorming files imported
- writing-plans files imported
- upstream tests/evals imported or not found
- local modifications
- validation result
- commit status
- push status
