# AgentLayer

> **Status:** Experimental — v0.1 core skill layer complete

AgentLayer is a curated, agent-independent collection of engineering instructions and skills for AI coding agents such as Codex, OpenCode, Antigravity, Claude Code, Cursor, and compatible Agent Skills tools.

Instead of relying on one large, unwieldy system prompt, AgentLayer provides focused engineering rules and task-specific skills that coding agents can load dynamically when relevant.

---

## Core Idea

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

---

## Skills Status (v0.1)

### Process & Planning
- ✓ `brainstorming` — Explore intent, requirements, and design options before implementation.
- ✓ `writing-plans` — Produce detailed, executable task-by-task engineering plans.
- ✓ `systematic-debugging` — 4-phase structured root-cause investigation under pressure.
- ✓ `verification` (`verification-before-completion`) — Validate completeness and truthfulness before declaring done.

### Quality Assurance & Testing
- ✓ `unit-testing` — Unit test design, stable seams, edge-case enumeration, characterization testing.
- ✓ `integration-testing` — Boundary verification against real databases, queues, and dependencies.
- ✓ `browser-testing` — End-to-end user journeys, resilient selector strategies, deterministic waiting.
- ✓ `test-driven-development` — Red-green-refactor loop, test ordering, bug reproduction.

### Frontend
- ✓ `frontend-design` — Visual direction, aesthetic intentionality, high design quality.
- ✓ `react-best-practices` — React & Next.js performance optimization (70 prioritized rules).

### Architecture
- ✓ `codebase-architecture` — TypeScript codebase design, domain-informed deepening, guardrails & wayfinding.

### Database & Supabase
- ✓ `supabase` — Supabase platform integration (Auth, SSR, Realtime, Storage, Functions).
- ✓ `supabase-postgres-best-practices` — Postgres schema design, indexing, connection pooling, and RLS.

### Security
- ✓ `security-review` — Data flow tracing, vulnerability scanning, secret detection, and CVE audits.

### AI Foundations
- △ `ai-chat` — Research pending (placeholder retained).
- △ `ai-tools` — Research pending (placeholder retained).

---

## Repository Overview

- **`instructions/`** — Universal, persistent engineering rules and principles (e.g., engineering discipline, simplicity, security baseline).
- **`skills/`** — Modular, task-specific workflows following the open `SKILL.md` standard.
- **`tests/`** — Behavioral test scenarios and upstream evaluation suites.
- **`sources/`** — Registry of curated upstream sources, licensing, and attribution notes.
- **`third_party/`** — Upstream MIT licenses and notices.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
