# Curated Sources & Attribution Registry

This file tracks upstream repositories, specifications, and references evaluated during the curation of AgentLayer.

---

## Sources

| Source | Area | Status |
|---|---|---|
| Agent Skills specification | Skill format | Research |
| [obra/superpowers](https://github.com/obra/superpowers) | Planning, debugging, testing, verification | Imported (`systematic-debugging`, `verification-before-completion`, `brainstorming`, `writing-plans`) / Research (other skills) |
| Vercel Agent Skills | Frontend, React, performance | Research |
| GitHub Awesome Copilot | Security and specialized workflows | Research |
| Supabase Agent Skills | Database, Postgres, Supabase | Research |
| OpenAI skills/resources | AI agents and skill evaluation | Research |

---

## Imported Material Details

### systematic-debugging

- **Source Repository:** `https://github.com/obra/superpowers`
- **Upstream Path:** `skills/systematic-debugging/`
- **License:** MIT (see [third_party/superpowers/LICENSE](file:///d:/AgentLayer/third_party/superpowers/LICENSE))
- **Imported Commit SHA:** `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/systematic-debugging/](file:///d:/AgentLayer/skills/systematic-debugging/) (`SKILL.md`, `condition-based-waiting.md`, `condition-based-waiting-example.ts`, `defense-in-depth.md`, `find-polluter.sh`, `root-cause-tracing.md`, `UPSTREAM.md`)
  - Test Scenarios: [tests/upstream/superpowers/systematic-debugging/](file:///d:/AgentLayer/tests/upstream/superpowers/systematic-debugging/) (`test-academic.md`, `test-pressure-1.md`, `test-pressure-2.md`, `test-pressure-3.md`, `README.md`)
  - License/Notice: [third_party/superpowers/](file:///d:/AgentLayer/third_party/superpowers/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (faithful vendoring).
  - Test files: Updated skill reference path to AgentLayer directory structure (`skills/systematic-debugging`).

### verification-before-completion

- **Source Repository:** `https://github.com/obra/superpowers`
- **Upstream Path:** `skills/verification-before-completion/`
- **License:** MIT (see [third_party/superpowers/LICENSE](file:///d:/AgentLayer/third_party/superpowers/LICENSE))
- **Imported Commit SHA:** `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/verification/](file:///d:/AgentLayer/skills/verification/) (`SKILL.md`, `UPSTREAM.md`)
  - License/Notice: [third_party/superpowers/](file:///d:/AgentLayer/third_party/superpowers/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation file: Unchanged (byte-for-byte faithful vendoring).
  - Note: Local directory is `skills/verification/`, upstream skill name is `verification-before-completion`.

### brainstorming

- **Source Repository:** `https://github.com/obra/superpowers`
- **Upstream Path:** `skills/brainstorming/`
- **License:** MIT (see [third_party/superpowers/LICENSE](file:///d:/AgentLayer/third_party/superpowers/LICENSE))
- **Imported Commit SHA:** `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/brainstorming/](file:///d:/AgentLayer/skills/brainstorming/) (`SKILL.md`, `visual-companion.md`, `spec-document-reviewer-prompt.md`, `scripts/`, `UPSTREAM.md`)
  - Test Suites: [tests/upstream/superpowers/brainstorming/](file:///d:/AgentLayer/tests/upstream/superpowers/brainstorming/) (`brainstorm-server/`, `README.md`)
  - License/Notice: [third_party/superpowers/](file:///d:/AgentLayer/third_party/superpowers/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (faithful vendoring).
  - Test files: Unchanged (vendored from upstream `tests/brainstorm-server/`).

### writing-plans

- **Source Repository:** `https://github.com/obra/superpowers`
- **Upstream Path:** `skills/writing-plans/`
- **License:** MIT (see [third_party/superpowers/LICENSE](file:///d:/AgentLayer/third_party/superpowers/LICENSE))
- **Imported Commit SHA:** `b36e0829c6d0140e93cfef2ca599b1b07d4a7797`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/writing-plans/](file:///d:/AgentLayer/skills/writing-plans/) (`SKILL.md`, `plan-document-reviewer-prompt.md`, `UPSTREAM.md`)
  - License/Notice: [third_party/superpowers/](file:///d:/AgentLayer/third_party/superpowers/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (faithful vendoring).

---

> [!IMPORTANT]
> Material must not be copied into AgentLayer until its license and attribution requirements have been reviewed.
