# AgentLayer

> **Status:** Experimental — v0.1 under development

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

### Example Workflow

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

---

## Repository Overview

- **`instructions/`** — Universal, persistent engineering rules and principles (e.g., engineering discipline, simplicity, security baseline).
- **`skills/`** — Modular, task-specific workflows following the open `SKILL.md` standard.
- **`tests/`** — Behavioral test scenarios to evaluate agent performance with and without skills.
- **`sources/`** — Registry of curated upstream sources, licensing, and attribution notes.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
