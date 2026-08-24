# AgentLayer Task — Fix Frontend Provenance and React Evals

## Objective

Fix two gaps in the current AgentLayer frontend import:

1. `sources/SOURCES.md` does not yet record the imported Vercel frontend skills.
2. Upstream React evaluation cases were not imported.

Do not change the behavioral content of any frontend skill in this task.

---

## Current Imported Skills

These already exist locally and should remain unchanged:

```text
skills/frontend-design/
skills/react-best-practices/
```

Do not rewrite their `SKILL.md` files.

---

## 1. Update Source Registry

Open:

```text
sources/SOURCES.md
```

Add explicit imported entries for:

### Frontend Design

Source repository:

```text
https://github.com/vercel-labs/open-agents
```

Upstream path:

```text
.agents/skills/frontend-design/
```

Local path:

```text
skills/frontend-design/
```

License:

```text
MIT
```

Imported commit:

Read the exact SHA from:

```text
skills/frontend-design/UPSTREAM.md
```

Modification status:

```text
No behavioral modifications on initial import
```

### React Best Practices

Source repository:

```text
https://github.com/vercel-labs/agent-skills
```

Upstream path:

```text
skills/react-best-practices/
```

Local path:

```text
skills/react-best-practices/
```

License:

```text
MIT
```

Imported commit:

Read the exact SHA from:

```text
skills/react-best-practices/UPSTREAM.md
```

Modification status:

```text
No behavioral modifications on initial import
```

If generic Vercel rows marked only as `Research` are still present, either retain them as research references or update them so the imported status is unambiguous.

Do not remove unrelated source entries.

---

## 2. Import React Evaluation Cases

Inspect the exact upstream commit recorded in:

```text
skills/react-best-practices/UPSTREAM.md
```

From that exact commit in:

```text
vercel-labs/agent-skills
```

locate the upstream React evaluation file:

```text
skills/react-best-practices/test-cases.json
```

If it exists at the recorded commit, copy it unchanged to:

```text
tests/upstream/vercel/react-best-practices/test-cases.json
```

Do not regenerate the file from current upstream `main`.

Use the same upstream commit that was used for the skill import so provenance stays consistent.

---

## Eval Provenance README

Create:

```text
tests/upstream/vercel/react-best-practices/README.md
```

Include:

```md
# React Best Practices — Upstream Evals

Source repository:
vercel-labs/agent-skills

Upstream path:
skills/react-best-practices/test-cases.json

Imported commit:
<same exact SHA recorded in skills/react-best-practices/UPSTREAM.md>

License:
MIT

Local modifications:
None.

Purpose:
These upstream evaluation cases are retained to test the vendored
`react-best-practices` skill against its original behavioral expectations.
```

Use the actual SHA.

If the upstream file does not exist at that exact commit, do not invent it. Record that fact in the completion report.

---

## Validation

Before committing:

1. Confirm `sources/SOURCES.md` now explicitly records both Vercel skill imports.
2. Confirm commit SHAs match the corresponding `UPSTREAM.md` files.
3. Confirm `test-cases.json` came from the exact imported React commit.
4. Compare local `test-cases.json` with upstream and confirm it is unchanged.
5. Confirm no `SKILL.md`, `AGENTS.md`, `rules/`, or other frontend production content changed.
6. Confirm no unrelated files were modified.
7. Review `git diff --stat`.

---

## Git

Commit:

```text
chore: complete Vercel frontend provenance and evals
```

Push normally to the configured AgentLayer GitHub remote if authenticated.

Never force-push.

---

## Completion Report

Report only:

- frontend-design source registry updated
- react-best-practices source registry updated
- React eval file imported or not found
- React upstream commit SHA used
- local modifications
- validation result
- commit status
- push status
