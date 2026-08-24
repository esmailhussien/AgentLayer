# AgentLayer Task — Import Frontend Skills from Vercel

## Objective

Build the first real frontend layer in AgentLayer using established upstream Vercel skills.

Replace the current placeholder:

```text
skills/frontend-design/
```

and add:

```text
skills/react-best-practices/
```

Use upstream content. Do not rewrite these skills from scratch.

---

## Upstream Sources

### 1. Frontend Design

Repository:

```text
https://github.com/vercel-labs/open-agents
```

Source:

```text
.agents/skills/frontend-design/
```

Local destination:

```text
skills/frontend-design/
```

The repository is currently MIT licensed.

---

### 2. React / Next.js Best Practices

Repository:

```text
https://github.com/vercel-labs/agent-skills
```

Source:

```text
skills/react-best-practices/
```

Local destination:

```text
skills/react-best-practices/
```

The skill itself declares:

```text
license: MIT
```

Before importing, verify both upstream licenses are still MIT and record the exact commit SHA used for each repository.

If either license changed, STOP and report it.

---

## Frontend Design Import

Inspect the existing local:

```text
skills/frontend-design/
```

Confirm it is only the original AgentLayer placeholder.

If so, replace it with the upstream Vercel skill.

Import:

```text
SKILL.md
```

plus any local supporting files directly required by the current upstream skill.

Preserve upstream behavioral content unchanged on initial import.

Do not "improve", shorten, or normalize the skill yet.

Create:

```text
skills/frontend-design/UPSTREAM.md
```

containing:

- upstream repository
- upstream path
- MIT license
- exact commit SHA
- import date
- local path
- imported files
- local modifications

Prefer:

```text
Local behavioral modifications: none
```

---

## React Best Practices Import

Import the production skill from:

```text
vercel-labs/agent-skills/skills/react-best-practices/
```

Destination:

```text
skills/react-best-practices/
```

At minimum import:

```text
SKILL.md
```

Then inspect the upstream skill for local references.

If `SKILL.md` depends on local files such as:

```text
rules/
AGENTS.md
metadata.json
```

import only the files required for the skill to work correctly as distributed.

Do not import build tooling, package dependencies, or source-generation tooling unless the runtime skill directly requires them.

In particular, do not pull in `src/` or package management files merely because they exist upstream.

Create:

```text
skills/react-best-practices/UPSTREAM.md
```

with the same provenance fields.

---

## Upstream Tests / Evals

Inspect the Vercel `react-best-practices` source for generated or maintained eval/test cases.

If a current upstream evaluation file exists, such as:

```text
test-cases.json
```

copy it to:

```text
tests/upstream/vercel/react-best-practices/
```

Preserve the original format.

Add:

```text
tests/upstream/vercel/react-best-practices/README.md
```

recording:

- repository
- upstream path
- commit SHA
- imported eval files
- any path-only modifications

Do not invent new evals in this task.

For `frontend-design`, import dedicated upstream evals only if they actually exist.

---

## Third-Party Licensing

Create:

```text
third_party/vercel-open-agents/
├── LICENSE
└── NOTICE.md
```

and:

```text
third_party/vercel-agent-skills/
├── LICENSE
└── NOTICE.md
```

Each `LICENSE` must preserve the upstream MIT license text from the exact imported commit.

Each `NOTICE.md` must identify:

- repository name
- repository URL
- imported skills
- local AgentLayer paths

Do not replace AgentLayer's root license.

---

## Source Registry

Update:

```text
sources/SOURCES.md
```

Add both imports individually.

Record:

- source repository
- upstream path
- local path
- license
- exact commit SHA
- modification status

Example conceptual entries:

```text
vercel-labs/open-agents
→ frontend-design
→ skills/frontend-design/

vercel-labs/agent-skills
→ react-best-practices
→ skills/react-best-practices/
```

---

## Intended Frontend Layer

After this task the frontend part of AgentLayer should be:

```text
skills/
├── frontend-design/
│   ├── SKILL.md
│   ├── UPSTREAM.md
│   └── <required support files>
│
└── react-best-practices/
    ├── SKILL.md
    ├── UPSTREAM.md
    └── <required runtime/reference files>
```

These skills serve different purposes:

```text
frontend-design
→ visual direction, interface quality, aesthetic decisions

react-best-practices
→ React / Next.js implementation and performance quality
```

Do not merge them.

---

## Do Not Add Yet

Do not add in this task:

```text
web-design-guidelines
vercel-optimize
Next.js-specific deployment skills
Tailwind-specific skills
component-library-specific skills
```

We will evaluate those separately after the core frontend layer is working.

---

## Validation

Before committing:

1. Confirm both upstream repositories are MIT licensed.
2. Record exact commit SHA for each source.
3. Confirm local `frontend-design` was only a placeholder before replacement.
4. Compare imported `SKILL.md` files to upstream.
5. Prefer byte-for-byte identical files.
6. Document every local modification.
7. Validate frontmatter.
8. Confirm all local references resolve.
9. Import only runtime/reference files actually needed.
10. Do not import unnecessary Vercel build tooling.
11. Import upstream evals only where they already exist.
12. Confirm third-party license/notice files exist.
13. Update `sources/SOURCES.md`.
14. Confirm AgentLayer root license is unchanged.
15. Review `git diff --stat`.

---

## Git

Commit:

```text
feat: add Vercel frontend design and React best-practice skills
```

Push normally to the configured AgentLayer remote if authenticated.

Never force-push.

---

## Completion Report

Report only:

- Vercel Open Agents commit SHA
- Vercel Agent Skills commit SHA
- license confirmations
- frontend-design files imported
- react-best-practices files imported
- evals imported
- local modifications
- validation result
- commit status
- push status
