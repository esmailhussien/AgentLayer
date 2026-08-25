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
| [mblode/agent-skills](https://github.com/mblode/agent-skills) | Codebase Architecture & Wayfinding | Imported (`codebase-architecture`) / Research (other skills) |
| [supabase/agent-skills](https://github.com/supabase/agent-skills) | Database, Postgres, Supabase Platform | Imported (`supabase`, `supabase-postgres-best-practices`) / Research (other skills) |
| [github/awesome-copilot](https://github.com/github/awesome-copilot) | Codebase Security Review & Vulnerability Audit | Imported (`security-review`) / Research (other skills) |
| [isaaccorley/geospatial-skills](https://github.com/isaaccorley/geospatial-skills) | GIS, GDAL, GeoParquet, GeoZarr, MapLibre | Imported (`gdal`, `geoparquet-validation`, `geozarr`, `geospatial-frontend`) / Research (other skills) |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Geospatial, Data Science, EDA, Statistics, Viz, Graphs | Imported (`geopandas`, `geomaster`, `exploratory-data-analysis`, `statistical-analysis`, `scientific-visualization`, `networkx`) |
| [timescale/pg-aiguide](https://github.com/timescale/pg-aiguide) | Spatial Database Design (PostGIS) | Imported (`design-postgis-tables`) / Research (other skills) |
| [jaakla/open-gis](https://github.com/jaakla/open-gis) | Open GIS Reference Stack | Rejected — license (no upstream license declared) |
| [JPeetz/agent-skills](https://github.com/JPeetz/agent-skills) | General Data Analysis | Rejected — overlap (K-Dense EDA/statistics/viz provide modular coverage) |
| [public-apis/public-apis](https://github.com/public-apis/public-apis) | Public & Free API Catalog Index | Research catalog reference for `api-discovery` |
| AgentLayer Native | Public APIs & Open Data Orchestration | Created (`api-discovery`, `geospatial-data-discovery`, `api-integration`) |
| OpenAI / Vercel AI sources | AI chat, streaming, tool calling, agents | Research pending (no standalone generic skill imported; placeholders retained in `skills/ai-chat/`, `skills/ai-tools/`) |

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
  - Behavioral modifications: None on initial import.

### react-best-practices

- **Source Repository:** `https://github.com/vercel-labs/agent-skills`
- **Upstream Path:** `skills/react-best-practices/`
- **License:** MIT (see [third_party/vercel-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/vercel-agent-skills/LICENSE))
- **Imported Commit SHA:** `dd089a8c752c966dee8bf0f27cb625ba193ffd9e`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/react-best-practices/](file:///d:/AgentLayer/skills/react-best-practices/) (`SKILL.md`, `AGENTS.md`, `metadata.json`, `README.md`, `rules/`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/vercel/react-best-practices/](file:///d:/AgentLayer/tests/upstream/vercel/react-best-practices/) (`test-cases.json`, `README.md`)
  - License/Notice: [third_party/vercel-agent-skills/](file:///d:/AgentLayer/third_party/vercel-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (faithful vendoring).
  - Behavioral modifications: None on initial import.

### codebase-architecture

- **Source Repository:** `https://github.com/mblode/agent-skills`
- **Upstream Path:** `skills/codebase-architecture/`
- **License:** MIT (see [third_party/mblode-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/mblode-agent-skills/LICENSE))
- **Imported Commit SHA:** `e97a3b383f5944f90d41eb92b24b4fb3b917a7f9`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/codebase-architecture/](file:///d:/AgentLayer/skills/codebase-architecture/) (`SKILL.md`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/mblode-agent-skills/](file:///d:/AgentLayer/third_party/mblode-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).
  - Behavioral modifications: None on initial import.

### supabase

- **Source Repository:** `https://github.com/supabase/agent-skills`
- **Upstream Path:** `skills/supabase/`
- **License:** MIT (see [third_party/supabase-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/supabase-agent-skills/LICENSE))
- **Imported Commit SHA:** `8331f910845103c08d51f6ca1d86ebb7d1f745e3`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/supabase/](file:///d:/AgentLayer/skills/supabase/) (`SKILL.md`, `CHANGELOG.md`, `assets/`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/supabase-agent-skills/](file:///d:/AgentLayer/third_party/supabase-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).
  - Behavioral modifications: None on initial import.

### supabase-postgres-best-practices

- **Source Repository:** `https://github.com/supabase/agent-skills`
- **Upstream Path:** `skills/supabase-postgres-best-practices/`
- **License:** MIT (see [third_party/supabase-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/supabase-agent-skills/LICENSE))
- **Imported Commit SHA:** `8331f910845103c08d51f6ca1d86ebb7d1f745e3`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/supabase-postgres-best-practices/](file:///d:/AgentLayer/skills/supabase-postgres-best-practices/) (`SKILL.md`, `CHANGELOG.md`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/supabase-agent-skills/](file:///d:/AgentLayer/third_party/supabase-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).
  - Behavioral modifications: None on initial import.

### security-review

- **Source Repository:** `https://github.com/github/awesome-copilot`
- **Upstream Path:** `skills/security-review/`
- **License:** MIT (see [third_party/github-awesome-copilot/LICENSE](file:///d:/AgentLayer/third_party/github-awesome-copilot/LICENSE))
- **Imported Commit SHA:** `8e03e6abebad103ad0b27fe66d8ec368264a7a22`
- **Import Date:** 2026-08-24
- **Local AgentLayer Paths:**
  - Production Skill: [skills/security-review/](file:///d:/AgentLayer/skills/security-review/) (`SKILL.md`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/github-awesome-copilot/](file:///d:/AgentLayer/third_party/github-awesome-copilot/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:**
  - Implementation files: Unchanged (byte-for-byte faithful vendoring).
  - Behavioral modifications: None on initial import.

### gdal

- **Source Repository:** `https://github.com/isaaccorley/geospatial-skills`
- **Upstream Path:** `skills/gdal/`
- **License:** Apache-2.0 (see [third_party/isaaccorley-geospatial-skills/LICENSE](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/LICENSE))
- **Imported Commit SHA:** `a203446cb997cd1dbf054918b1021a6040b69824`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/gdal/](file:///d:/AgentLayer/skills/gdal/) (`SKILL.md`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/isaaccorley-geospatial-skills/](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### geoparquet-validation

- **Source Repository:** `https://github.com/isaaccorley/geospatial-skills`
- **Upstream Path:** `skills/geoparquet-validation/`
- **License:** Apache-2.0 (see [third_party/isaaccorley-geospatial-skills/LICENSE](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/LICENSE))
- **Imported Commit SHA:** `a203446cb997cd1dbf054918b1021a6040b69824`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/geoparquet-validation/](file:///d:/AgentLayer/skills/geoparquet-validation/) (`SKILL.md`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/isaaccorley-geospatial-skills/](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### geozarr

- **Source Repository:** `https://github.com/isaaccorley/geospatial-skills`
- **Upstream Path:** `skills/geozarr/`
- **License:** Apache-2.0 (see [third_party/isaaccorley-geospatial-skills/LICENSE](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/LICENSE))
- **Imported Commit SHA:** `a203446cb997cd1dbf054918b1021a6040b69824`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/geozarr/](file:///d:/AgentLayer/skills/geozarr/) (`SKILL.md`, `UPSTREAM.md`)
  - License/Notice: [third_party/isaaccorley-geospatial-skills/](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### geospatial-frontend

- **Source Repository:** `https://github.com/isaaccorley/geospatial-skills`
- **Upstream Path:** `skills/geospatial-frontend/`
- **License:** Apache-2.0 (see [third_party/isaaccorley-geospatial-skills/LICENSE](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/LICENSE))
- **Imported Commit SHA:** `a203446cb997cd1dbf054918b1021a6040b69824`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/geospatial-frontend/](file:///d:/AgentLayer/skills/geospatial-frontend/) (`SKILL.md`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/isaaccorley-geospatial-skills/](file:///d:/AgentLayer/third_party/isaaccorley-geospatial-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### geopandas

- **Source Repository:** `https://github.com/K-Dense-AI/scientific-agent-skills`
- **Upstream Path:** `skills/geopandas/`
- **License:** MIT (see [third_party/kdense-scientific-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/LICENSE))
- **Imported Commit SHA:** `390f5146bf3c1877cf15636a3dd7b775e4f0f185`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/geopandas/](file:///d:/AgentLayer/skills/geopandas/) (`SKILL.md`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/kdense-scientific-agent-skills/geopandas/](file:///d:/AgentLayer/tests/upstream/kdense-scientific-agent-skills/geopandas/)
  - License/Notice: [third_party/kdense-scientific-agent-skills/](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### geomaster

- **Source Repository:** `https://github.com/K-Dense-AI/scientific-agent-skills`
- **Upstream Path:** `skills/geomaster/`
- **License:** MIT (see [third_party/kdense-scientific-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/LICENSE))
- **Imported Commit SHA:** `390f5146bf3c1877cf15636a3dd7b775e4f0f185`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/geomaster/](file:///d:/AgentLayer/skills/geomaster/) (`SKILL.md`, `UPSTREAM.md`)
  - License/Notice: [third_party/kdense-scientific-agent-skills/](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### design-postgis-tables

- **Source Repository:** `https://github.com/timescale/pg-aiguide`
- **Upstream Path:** `skills/design-postgis-tables/`
- **License:** Apache-2.0 (see [third_party/timescale-pg-aiguide/LICENSE](file:///d:/AgentLayer/third_party/timescale-pg-aiguide/LICENSE))
- **Imported Commit SHA:** `b4f11a45907af3abda0f79e784aff9a6d5eef468`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/design-postgis-tables/](file:///d:/AgentLayer/skills/design-postgis-tables/) (`SKILL.md`, `UPSTREAM.md`)
  - License/Notice: [third_party/timescale-pg-aiguide/](file:///d:/AgentLayer/third_party/timescale-pg-aiguide/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### exploratory-data-analysis

- **Source Repository:** `https://github.com/K-Dense-AI/scientific-agent-skills`
- **Upstream Path:** `skills/exploratory-data-analysis/`
- **License:** MIT (see [third_party/kdense-scientific-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/LICENSE))
- **Imported Commit SHA:** `390f5146bf3c1877cf15636a3dd7b775e4f0f185`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/exploratory-data-analysis/](file:///d:/AgentLayer/skills/exploratory-data-analysis/) (`SKILL.md`, `references/`, `scripts/`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/kdense-scientific-agent-skills/exploratory-data-analysis/](file:///d:/AgentLayer/tests/upstream/kdense-scientific-agent-skills/exploratory-data-analysis/)
  - License/Notice: [third_party/kdense-scientific-agent-skills/](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### statistical-analysis

- **Source Repository:** `https://github.com/K-Dense-AI/scientific-agent-skills`
- **Upstream Path:** `skills/statistical-analysis/`
- **License:** MIT (see [third_party/kdense-scientific-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/LICENSE))
- **Imported Commit SHA:** `390f5146bf3c1877cf15636a3dd7b775e4f0f185`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/statistical-analysis/](file:///d:/AgentLayer/skills/statistical-analysis/) (`SKILL.md`, `references/`, `scripts/`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/kdense-scientific-agent-skills/statistical-analysis/](file:///d:/AgentLayer/tests/upstream/kdense-scientific-agent-skills/statistical-analysis/)
  - License/Notice: [third_party/kdense-scientific-agent-skills/](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### scientific-visualization

- **Source Repository:** `https://github.com/K-Dense-AI/scientific-agent-skills`
- **Upstream Path:** `skills/scientific-visualization/`
- **License:** MIT (see [third_party/kdense-scientific-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/LICENSE))
- **Imported Commit SHA:** `390f5146bf3c1877cf15636a3dd7b775e4f0f185`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/scientific-visualization/](file:///d:/AgentLayer/skills/scientific-visualization/) (`SKILL.md`, `assets/`, `references/`, `scripts/`, `UPSTREAM.md`)
  - Upstream Evals: [tests/upstream/kdense-scientific-agent-skills/scientific-visualization/](file:///d:/AgentLayer/tests/upstream/kdense-scientific-agent-skills/scientific-visualization/)
  - License/Notice: [third_party/kdense-scientific-agent-skills/](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### networkx

- **Source Repository:** `https://github.com/K-Dense-AI/scientific-agent-skills`
- **Upstream Path:** `skills/networkx/`
- **License:** 3-clause BSD (see [third_party/kdense-scientific-agent-skills/LICENSE](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/LICENSE))
- **Imported Commit SHA:** `390f5146bf3c1877cf15636a3dd7b775e4f0f185`
- **Import Date:** 2026-08-25
- **Local AgentLayer Paths:**
  - Production Skill: [skills/networkx/](file:///d:/AgentLayer/skills/networkx/) (`SKILL.md`, `references/`, `UPSTREAM.md`)
  - License/Notice: [third_party/kdense-scientific-agent-skills/](file:///d:/AgentLayer/third_party/kdense-scientific-agent-skills/) (`LICENSE`, `NOTICE.md`)
- **Modification Status:** Unchanged (byte-for-byte faithful vendoring).

### api-discovery (AgentLayer Native)

- **Author:** AgentLayer Team
- **License:** MIT
- **Local AgentLayer Path:** [skills/api-discovery/](file:///d:/AgentLayer/skills/api-discovery/) (`SKILL.md`, `references/source-catalogs.md`, `UPSTREAM.md`)
- **References:** `public-apis/public-apis`, `public-api-lists/public-api-lists`

### geospatial-data-discovery (AgentLayer Native)

- **Author:** AgentLayer Team
- **License:** MIT
- **Local AgentLayer Path:** [skills/geospatial-data-discovery/](file:///d:/AgentLayer/skills/geospatial-data-discovery/) (`SKILL.md`, `UPSTREAM.md`)
- **References:** OGC STAC/COG, OpenStreetMap (ODbL), Overture Maps, Copernicus Open Access

### api-integration (AgentLayer Native)

- **Author:** AgentLayer Team
- **License:** MIT
- **Local AgentLayer Path:** [skills/api-integration/](file:///d:/AgentLayer/skills/api-integration/) (`SKILL.md`, `references/integration-patterns.md`, `UPSTREAM.md`)
- **References:** RFC 9110 HTTP Semantics, IETF RateLimit Headers, OpenAPI 3.1

---

> [!IMPORTANT]
> Material must not be copied into AgentLayer until its license and attribution requirements have been reviewed.
