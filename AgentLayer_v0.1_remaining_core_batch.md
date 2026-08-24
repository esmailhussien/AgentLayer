# AgentLayer v0.1 — Remaining Core Skills Batch

## Objective

Complete the remaining core AgentLayer v0.1 skill layer in one controlled batch.

This task covers:

1. Architecture
2. Database / Postgres / Supabase
3. Security review
4. AI foundations

The rule for this batch is:

> Prefer established upstream skills over inventing new skills.

Do not rewrite imported skills unless required for compatibility. Preserve provenance, licenses, exact commit SHAs, and upstream supporting files/evals.

---

# Phase 0 — Safety and Repository Check

Before changing anything:

1. Pull/fetch the current AgentLayer `main`.
2. Confirm working tree state.
3. Do not overwrite uncommitted user work.
4. Inspect existing placeholders:
   - `skills/architecture/`
   - `skills/database/`
   - `skills/security-review/`
   - `skills/ai-chat/`
   - `skills/ai-tools/`
5. Confirm which are still placeholders.
6. Only remove a placeholder when its replacement is ready.
7. Never force-push.

For every upstream repository used below:

- inspect current license
- record exact commit SHA
- import from that exact commit
- preserve required copyright/license notice
- stop that individual phase if licensing is incompatible

A failure in one phase should not corrupt completed phases.

---

# Phase 1 — Architecture

## Source

Repository:

```text
https://github.com/mblode/agent-skills
```

Upstream skill:

```text
skills/codebase-architecture/
```

Expected license:

```text
MIT
```

Local destination:

```text
skills/codebase-architecture/
```

## Action

If:

```text
skills/architecture/
```

is still only the original placeholder, remove it.

Import the upstream `codebase-architecture` skill faithfully.

Copy:

```text
SKILL.md
```

and all local references/scripts/assets that the skill directly depends on.

Do not import unrelated mblode skills.

Do not rename the imported skill to `architecture`; preserve its upstream identity:

```text
codebase-architecture
```

Create:

```text
skills/codebase-architecture/UPSTREAM.md
```

Record:

- repository
- upstream path
- MIT license
- exact commit SHA
- import date
- local path
- imported support files
- modifications

Prefer zero behavioral modifications.

## Architecture tests/evals

Inspect upstream for tests/evals specifically associated with `codebase-architecture`.

If they exist, import them to:

```text
tests/upstream/mblode-agent-skills/codebase-architecture/
```

Preserve original formats.

Do not invent evals if none exist.

## License

Create once:

```text
third_party/mblode-agent-skills/
├── LICENSE
└── NOTICE.md
```

---

# Phase 2 — Database and Supabase

Use the official Supabase Agent Skills repository.

## Source

Repository:

```text
https://github.com/supabase/agent-skills
```

Expected repository license:

```text
MIT
```

Import two distinct upstream skills if both still exist at the selected commit:

```text
skills/supabase/
skills/supabase-postgres-best-practices/
```

Local destinations:

```text
skills/supabase/
skills/supabase-postgres-best-practices/
```

## Why both remain separate

```text
supabase
→ Supabase platform workflows:
  Auth
  client libraries
  SSR
  Storage
  Realtime
  Edge Functions
  CLI/MCP
  platform-specific behavior

supabase-postgres-best-practices
→ Postgres:
  schema
  SQL
  migrations
  RLS
  indexes
  performance
  locking
  connections
  vectors
```

Do not merge them.

If:

```text
skills/database/
```

is still only a generic AgentLayer placeholder, remove it after the two replacements are successfully imported.

## Import requirements

For each skill:

- copy `SKILL.md`
- copy `references/`
- copy scripts/assets directly required by the skill
- preserve relative structure
- preserve frontmatter
- do not rewrite behavioral content
- do not copy repository-wide release/build tooling

Create:

```text
skills/supabase/UPSTREAM.md
skills/supabase-postgres-best-practices/UPSTREAM.md
```

Record exact provenance and SHA.

## Supabase tests

Inspect the exact upstream commit for tests/evals associated with these skills.

Import relevant skill-specific test material under:

```text
tests/upstream/supabase-agent-skills/supabase/
tests/upstream/supabase-agent-skills/supabase-postgres-best-practices/
```

Do not copy the entire upstream test suite unless it is specifically required to evaluate these skills.

## License

Create:

```text
third_party/supabase-agent-skills/
├── LICENSE
└── NOTICE.md
```

Use the exact upstream MIT license from the selected commit.

---

# Phase 3 — Security Review

## Source

Repository:

```text
https://github.com/github/awesome-copilot
```

Upstream skill:

```text
skills/security-review/
```

Expected repository license:

```text
MIT
```

Local destination:

```text
skills/security-review/
```

## Action

Replace the existing local `security-review` placeholder only if it remains a placeholder.

Import the upstream production skill faithfully.

Include:

```text
SKILL.md
```

and required local references such as vulnerability categories, language patterns, secret patterns, vulnerable-package guidance, and report format if they exist at the selected commit and are referenced by the skill.

Do not import unrelated Awesome Copilot skills.

Create:

```text
skills/security-review/UPSTREAM.md
```

Record full provenance.

## Security tests/evals

Inspect upstream for dedicated security-review tests/evals.

If present, import to:

```text
tests/upstream/github-awesome-copilot/security-review/
```

If none exist, record that and do not invent replacements in this batch.

## License

Create:

```text
third_party/github-awesome-copilot/
├── LICENSE
└── NOTICE.md
```

Preserve the upstream MIT license.

---

# Phase 4 — AI Foundations

Do NOT invent a giant `ai-development` skill.

Do NOT merge chat, tool calling, RAG, agents, memory, and evals into one prompt.

The existing placeholders:

```text
skills/ai-chat/
skills/ai-tools/
```

must not be filled with invented content in this batch.

Instead perform a conservative AI-source import/research step.

## 4A — Inspect official/current AI skill sources

Inspect current upstream skill repositories from reputable maintainers, prioritizing:

```text
Vercel AI / Vercel Agent Skills
OpenAI official repositories
```

Look specifically for reusable skills covering:

```text
AI SDK usage
chat/streaming
structured outputs
tool calling
agents
guardrails
RAG / embeddings
evals
```

## 4B — Import only if a real upstream skill exists

For each candidate:

1. Verify the skill actually exists in the current repository.
2. Verify license.
3. Verify it is generic enough to be useful in AgentLayer.
4. Verify it is not merely repository-maintainer workflow specific.
5. Record exact commit SHA.

If a suitable upstream skill exists, import it under its original upstream skill name.

Do not rename it to force it into `ai-chat` or `ai-tools`.

Example:

```text
upstream skill name
→ preserve upstream skill name
```

Do not copy generic documentation and pretend it is an Agent Skill.

## 4C — If no suitable upstream skill exists

Leave:

```text
skills/ai-chat/
skills/ai-tools/
```

as placeholders.

Add a clear status to:

```text
sources/SOURCES.md
```

such as:

```text
AI chat/tools — research pending; no upstream skill imported yet
```

This is preferable to inventing weak content.

## Important OpenAI rule

Do not treat repository-local OpenAI maintenance/release skills as generic AI application development skills.

For example, skills designed specifically to maintain `openai-agents-python` itself should not automatically be vendored as AgentLayer AI-development guidance.

Only import reusable application-development guidance.

---

# Phase 5 — Source Registry

Update:

```text
sources/SOURCES.md
```

for every successful import.

Each imported skill must have:

- source repository
- upstream path
- local path
- license
- exact commit SHA
- import date
- modification status

Also update old `Research` rows where appropriate so it is obvious what is:

```text
Research
Imported
Deferred
```

Do not remove historical source information.

---

# Phase 6 — Third-Party Provenance

Every imported third-party project must have exactly one directory under:

```text
third_party/
```

Do not duplicate license folders for multiple skills from the same repository.

Expected after successful phases:

```text
third_party/
├── superpowers/
├── arjunprabhulal-agent-skills/
├── vercel-open-agents/
├── vercel-agent-skills/
├── mblode-agent-skills/
├── supabase-agent-skills/
└── github-awesome-copilot/
```

Additional AI source directories should only appear if an AI skill is actually imported.

---

# Phase 7 — Repository Validation

Perform a repository-wide validation after all successful imports.

## Skill integrity

For every directory under:

```text
skills/
```

check:

1. `SKILL.md` exists.
2. YAML frontmatter parses.
3. `name` is valid.
4. Local references resolve.
5. Required supporting files exist.
6. `UPSTREAM.md` exists for vendored third-party skills.
7. Provenance SHA is present.
8. License source is recorded.

## Placeholder audit

Identify any remaining placeholder skills.

Expected candidates may include:

```text
ai-chat
ai-tools
```

if no strong upstream AI skill was found.

Do not pretend placeholders are production-ready.

## License audit

Confirm:

- AgentLayer root license was not overwritten.
- Each imported repository has its license preserved.
- No source with incompatible licensing was silently copied.

## Source registry audit

Confirm every imported skill appears in:

```text
sources/SOURCES.md
```

## Test/eval audit

Confirm imported upstream evals live under:

```text
tests/upstream/
```

and not inside production skill folders unless upstream runtime behavior requires them there.

---

# Phase 8 — README Status Update

Update the AgentLayer README with a concise status section.

Do not write marketing claims.

Show categories and current state, for example:

```text
Process
✓ brainstorming
✓ writing-plans
✓ systematic-debugging
✓ verification-before-completion

Testing
✓ unit-testing
✓ integration-testing
✓ browser-testing
✓ test-driven-development

Frontend
✓ frontend-design
✓ react-best-practices

Architecture
✓ codebase-architecture

Database
✓ supabase
✓ supabase-postgres-best-practices

Security
✓ security-review

AI
△ research/import status
```

Use the actual repository state, not this example blindly.

---

# Phase 9 — Git Strategy

Prefer separate commits per major source/category so provenance stays easy to audit.

Suggested commits:

```text
feat: add codebase architecture skill
feat: add official Supabase database skills
feat: add security review skill
chore: audit AI skill sources
chore: validate AgentLayer v0.1 core
```

Only create commits for phases that actually changed files.

Push normally to the configured AgentLayer `main` remote if authenticated.

Never force-push.

---

# Final Completion Report

At the end report a compact table:

| Area | Result | Source | Commit |
|---|---|---|---|
| Architecture | imported / blocked | ... | ... |
| Supabase | imported / blocked | ... | ... |
| Postgres | imported / blocked | ... | ... |
| Security | imported / blocked | ... | ... |
| AI | imported / deferred | ... | ... |

Then report:

- placeholders removed
- placeholders remaining
- upstream evals imported
- license validation
- repository validation
- commits created
- push status
- blockers

Do not start building a CLI, installer, website, adapters, registry service, or package manager in this task.
