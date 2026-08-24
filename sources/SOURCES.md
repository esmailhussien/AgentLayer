# Curated Sources & Attribution Registry

This file tracks upstream repositories, specifications, and references evaluated during the curation of AgentLayer.

---

## Sources

| Source | Area | Status |
|---|---|---|
| Agent Skills specification | Skill format | Research |
| [obra/superpowers](https://github.com/obra/superpowers) | Planning, debugging, verification | Imported (`systematic-debugging`, `verification-before-completion`, `brainstorming`, `writing-plans`) / Research (other skills) |
| [arjunprabhulal/agent-skills](https://github.com/arjunprabhulal/agent-skills) | Quality Assurance, Testing, TDD | Imported (`unit-testing`, `integration-testing`, `browser-testing`, `test-driven-development`) / Research (other skills) |
| [vercel-labs/open-agents](https://github.com/vercel-labs/open-agents) | Frontend Design & UI Quality | Imported (`frontend-design`) / Research (other skills) |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | React & Next.js Performance | Imported (`react-best-practices`) / Research (other skills) |
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

### unit-testing

- **Source Repository:** `https://github.com/arjunprabhulal/agent-skills`
- **Upstream Path:** `skills/qa/unit-testing/`
- **License:** MIT (see [third_party/arjunprabhulal-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/LICENSE))
- **Imported Commit SHA:** `42dd24080fce6d731d00e2a1134f398c3da4171b`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/unit-testing/](file:///d:/AgentLayer/skills/unit-testing/) (`SKILL.md`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/arjunprabhulal-agent-skills/unit-testing/](file:///d:/AgentLayer/tests/upstream/arjunprabhulal-agent-skills/unit-testing/) (`unit-testing.json`, `README.md`)
  - License/Notice: [third_party/arjunprabhulal-agent-skills/](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).

### integration-testing

- **Source Repository:** `https://github.com/arjunprabhulal/agent-skills`
- **Upstream Path:** `skills/qa/integration-testing/`
- **License:** MIT (see [third_party/arjunprabhulal-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/LICENSE))
- **Imported Commit SHA:** `42dd24080fce6d731d00e2a1134f398c3da4171b`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/integration-testing/](file:///d:/AgentLayer/skills/integration-testing/) (`SKILL.md`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/arjunprabhulal-agent-skills/integration-testing/](file:///d:/AgentLayer/tests/upstream/arjunprabhulal-agent-skills/integration-testing/) (`integration-testing.json`, `README.md`)
  - License/Notice: [third_party/arjunprabhulal-agent-skills/](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).

### browser-testing

- **Source Repository:** `https://github.com/arjunprabhulal/agent-skills`
- **Upstream Path:** `skills/qa/browser-testing/`
- **License:** MIT (see [third_party/arjunprabhulal-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/LICENSE))
- **Imported Commit SHA:** `42dd24080fce6d731d00e2a1134f398c3da4171b`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/browser-testing/](file:///d:/AgentLayer/skills/browser-testing/) (`SKILL.md`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/arjunprabhulal-agent-skills/browser-testing/](file:///d:/AgentLayer/tests/upstream/arjunprabhulal-agent-skills/browser-testing/) (`browser-testing.json`, `README.md`)
  - License/Notice: [third_party/arjunprabhulal-agent-skills/](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).

### test-driven-development

- **Source Repository:** `https://github.com/arjunprabhulal/agent-skills`
- **Upstream Path:** `skills/qa/test-driven-development/`
- **License:** MIT (see [third_party/arjunprabhulal-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/LICENSE))
- **Imported Commit SHA:** `42dd24080fce6d731d00e2a1134f398c3da4171b`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/test-driven-development/](file:///d:/AgentLayer/skills/test-driven-development/) (`SKILL.md`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/arjunprabhulal-agent-skills/test-driven-development/](file:///d:/AgentLayer/tests/upstream/arjunprabhulal-agent-skills/test-driven-development/) (`test-driven-development.json`, `README.md`)
  - License/Notice: [third_party/arjunprabhulal-agent-skills/](file:///d:/AgentLayer/third_party/arjunprabhulal-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).

### frontend-design

- **Source Repository:** `https://github.com/vercel-labs/open-agents`
- **Upstream Path:** `.agents/skills/frontend-design/`
- **License:** MIT (see [third_party/vercel-open-agents/LICENSE](file:///d:/AgentLayer/third_party/vercel-open-agents/LICENSE))
- **Imported Commit SHA:** `cf865e94de7729751c747171785b6ce57e7b178c`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/frontend-design/](file:///d:/AgentLayer/skills/frontend-design/) (`SKILL.md`, `UPSTREAM.md`)
  - License/Notice: [third_party/vercel-open-agents/](file:///d:/AgentLayer/third_party/vercel-open-agents/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).

### react-best-practices

- **Source Repository:** `https://github.com/vercel-labs/agent-skills`
- **Upstream Path:** `skills/react-best-practices/`
- **License:** MIT (see [third_party/vercel-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/vercel-agent-skills/LICENSE))
- **Imported Commit SHA:** `dd089a8c752c966dee8bf0f27cb625ba193ffd9e`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/react-best-practices/](file:///d:/AgentLayer/skills/react-best-practices/) (`SKILL.md`, `AGENTS.md`, `metadata.json`, `README.md`, `rules/`, `UPSTREAM.md`)
  - License/Notice: [third_party/vercel-agent-skills/](file:///d:/AgentLayer/third_party/vercel-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (faithful vendoring).

---

> [!IMPORTANT]
> Material must not be copied into AgentLayer until its license and attribution requirements have been reviewed.
