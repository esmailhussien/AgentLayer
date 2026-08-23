# AgentLayer — Initial Repository Build Specification

## Goal

Create the initial repository structure for **AgentLayer**.

AgentLayer will be a curated, agent-independent collection of engineering instructions and skills for AI coding agents such as Codex, OpenCode, Antigravity, Claude Code, Cursor, and compatible Agent Skills tools.

This task is **only repository initialization**.

Do not implement a CLI, package manager, application, website, or complex tooling yet.

---

## Design Principles

The repository must:

- Follow the open Agent Skills `SKILL.md` convention where applicable.
- Keep skills modular and focused.
- Separate persistent engineering instructions from task-specific skills.
- Remain agent-independent.
- Avoid unnecessary abstractions.
- Be easy to extend incrementally.
- Prefer a small understandable structure over premature infrastructure.

---

## Repository Structure

Create:

```text
AgentLayer/
├── README.md
├── AGENTS.md
├── LICENSE
│
├── instructions/
│   ├── engineering.md
│   ├── simplicity.md
│   └── security.md
│
├── skills/
│   ├── planning/
│   │   └── SKILL.md
│   ├── systematic-debugging/
│   │   └── SKILL.md
│   ├── verification/
│   │   └── SKILL.md
│   ├── frontend-design/
│   │   └── SKILL.md
│   ├── architecture/
│   │   └── SKILL.md
│   ├── database/
│   │   └── SKILL.md
│   ├── security-review/
│   │   └── SKILL.md
│   ├── ai-chat/
│   │   └── SKILL.md
│   ├── ai-tools/
│   │   └── SKILL.md
│   └── testing/
│       └── SKILL.md
│
├── tests/
│   └── README.md
│
└── sources/
    └── SOURCES.md
```

---

## README.md

Create a concise initial README.

It should explain:

### What is AgentLayer?

AgentLayer is a curated engineering layer for AI coding agents.

Instead of relying on one large prompt, AgentLayer provides focused engineering rules and task-specific skills that coding agents can load when relevant.

### Core idea

```text
User Task
   ↓
Engineering Instructions
   ↓
Relevant Skills
   ↓
Implementation
   ↓
Verification
```

Example:

```text
"Fix the authentication bug"

Engineering Rules
        ↓
Systematic Debugging
        ↓
Security
        ↓
Testing
        ↓
Verification
```

### Current Status

Clearly mark the project as:

**Experimental — v0.1 under development**

Do not claim capabilities that have not yet been implemented.

---

## AGENTS.md

Create a minimal project-level instruction file.

Include principles such as:

- Prefer the smallest correct change.
- Inspect existing work before modifying it.
- Do not introduce abstractions without a concrete need.
- Do not rewrite working components unnecessarily.
- Keep skills focused.
- Avoid duplicating rules across multiple skills.
- Do not silently change the AgentLayer structure.
- Verify changes before declaring completion.
- Never claim tests passed unless they were actually executed.
- Preserve attribution and licensing information for adapted material.

Keep this file concise.

---

## instructions/

These are persistent engineering principles.

They are **not task workflows**.

Create:

### engineering.md

Initial principles around:

- maintainability
- clear naming
- respecting existing architecture
- minimal changes
- avoiding unnecessary dependencies
- explicit error handling

### simplicity.md

Initial principles around:

- avoiding over-engineering
- avoiding premature abstractions
- avoiding speculative extensibility
- solving the current requirement first
- preferring understandable code

### security.md

Initial universal security principles around:

- secrets
- authentication
- authorization
- input validation
- least privilege
- sensitive data

Keep these files short in the initial version.

---

## skills/

Each skill directory contains a `SKILL.md`.

Every initial `SKILL.md` must contain only a minimal skeleton.

Use this structure:

```md
---
name: skill-name
description: Clear description of when this skill should be used.
---

# Skill Name

## Goal

TODO

## When to Use

TODO

## Workflow

TODO

## Verification

TODO
```

Do **not** invent extensive rules for the skills yet.

We will curate each skill separately from researched sources.

---

## Initial Skills

Create placeholders for:

- **planning** — Planning implementation work before substantial changes.
- **systematic-debugging** — Structured root-cause debugging instead of speculative fixes.
- **verification** — Verifying actual results before declaring work complete.
- **frontend-design** — Designing and implementing application interfaces.
- **architecture** — Understanding, designing, or improving codebase architecture.
- **database** — Database schema, queries, migrations, integrity, and performance.
- **security-review** — Performing structured application security reviews.
- **ai-chat** — Building conversational AI features.
- **ai-tools** — Building AI tool/function calling and controlled agent actions.
- **testing** — Designing and executing appropriate software tests.

---

## tests/

Create `tests/README.md`.

Explain briefly that this directory will later contain behavioral scenarios used to test whether AgentLayer skills actually improve coding-agent behavior.

Example future test:

```text
Scenario:
A user reports an intermittent authentication failure.

Without skill:
Does the agent immediately guess and modify code?

With systematic-debugging:
Does the agent reproduce, gather evidence, identify the root cause,
apply a targeted fix, and verify it?
```

Do not build the test framework yet.

---

## sources/SOURCES.md

This file will track sources used while curating AgentLayer.

Create an initial table:

| Source | Area | Status |
|---|---|---|
| Agent Skills specification | Skill format | Research |
| obra/superpowers | Planning, debugging, testing, verification | Research |
| Vercel Agent Skills | Frontend, React, performance | Research |
| GitHub Awesome Copilot | Security and specialized workflows | Research |
| Supabase Agent Skills | Database, Postgres, Supabase | Research |
| OpenAI skills/resources | AI agents and skill evaluation | Research |

Add a note:

> Material must not be copied into AgentLayer until its license and attribution requirements have been reviewed.

---

## Important Constraints

Do NOT:

- build a CLI
- add npm dependencies
- create package.json unless technically required
- build a website
- add GitHub Actions yet
- implement an installer
- add agent-specific adapters
- create dozens of additional skills
- copy large amounts of content from source repositories
- invent complex metadata
- add dependencies between skills yet

This is intentionally a minimal foundation.

---

## Validation

Before completion:

1. Verify every specified directory exists.
2. Verify every skill contains a valid `SKILL.md`.
3. Check that skill `name` values match their directory names.
4. Verify there are no unnecessary generated files or dependencies.
5. Review the repository tree and confirm it matches this specification.

---

## Git

After validation:

1. Initialize Git if necessary.
2. Create the initial commit with the message:

```text
chore: initialize AgentLayer repository structure
```

3. If GitHub authentication and repository access are already configured, create/push the repository to GitHub.
4. Do **not** overwrite an existing remote repository or force-push.
5. If GitHub access is unavailable, leave the local repository complete and report the exact command or missing authentication step required to publish it.

---

## Completion Report

At the end report only:

- repository tree created
- files created
- validation result
- Git commit status
- GitHub push status
- any blocker encountered

Do not proceed to implementing the actual skill content yet.
