# AgentLayer

> **Status:** Experimental — v0.1 core & domain packs complete

AgentLayer is a curated, agent-independent collection of engineering instructions and skills for AI coding agents such as Codex, OpenCode, Antigravity, Claude Code, Cursor, and compatible Agent Skills tools.

Instead of relying on one large, unwieldy system prompt, AgentLayer provides focused engineering rules and task-specific skills that coding agents can load dynamically when relevant.

---

## Core Idea

```text
User Task Description
   ↓
Smart Skill Router (Deterministic CLI / Library)
   ↓
Precise Minimal Skill Set (Process + Domain + Implementation + Risk + Verification)
   ↓
Implementation
   ↓
Verification Before Completion
```

---

## Smart Skill Router

AgentLayer includes a deterministic, offline smart router that resolves natural-language user tasks into the smallest useful set of skills with human-readable rationales:

```bash
# Calculate recommended skill composition
npx agentlayer route "Build a React dashboard displaying live weather data on an interactive map"

# Dry run inspection
npx agentlayer route "Fix Supabase auth 401 bug" --dry-run

# Run full router test suite
npm run test:router
```

For full details on scoring weights, layers, and heuristics, see [`routing/ROUTER_DESIGN.md`](routing/ROUTER_DESIGN.md) and [`router/README.md`](router/README.md).

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

### Architecture & Database
- ✓ `codebase-architecture` — TypeScript codebase design, domain-informed deepening, guardrails & wayfinding.
- ✓ `supabase` — Supabase platform integration (Auth, SSR, Realtime, Storage, Functions).
- ✓ `supabase-postgres-best-practices` — Postgres schema design, indexing, connection pooling, and RLS.

### Security
- ✓ `security-review` — Data flow tracing, vulnerability scanning, secret detection, and CVE audits.

### Geospatial Domain Pack
- ✓ `gdal` — Raster/vector CLI recipes, reprojection, clipping, mosaics, tiling, and COGs.
- ✓ `geopandas` — Vector operations, spatial joins, geometric overlays, CRS transforms, and spatial formats.
- ✓ `geomaster` — Broad Earth observation, remote sensing, satellite processing, terrain, and spatial ML.
- ✓ `design-postgis-tables` — PostGIS table architecture, geometry vs geography, spatial indexing, and bbox queries.
- ✓ `geoparquet-validation` — GeoParquet metadata validation and cloud-native vector distribution.
- ✓ `geozarr` — Cloud-native multidimensional geospatial raster/cube arrays and conventions.
- ✓ `geospatial-frontend` — MapLibre GL, DuckDB-WASM, and geospatial visualization interfaces.
- ✓ `geospatial-data-discovery` — Open geospatial data acquisition (STAC, OSM, Overture, Sentinel, Landsat, DEMs).

### Data & Analytics Domain Pack
- ✓ `exploratory-data-analysis` — Tabular profiling, missingness/leakage audits, outlier sensitivity, and EDA scaffolds.
- ✓ `statistical-analysis` — Hypothesis testing, assumption diagnostics, effect sizes, power analysis, and APA reporting.
- ✓ `scientific-visualization` — Publication-ready figures, colorblind-safe palettes, multi-panel layouts, and journal export.
- ✓ `networkx` — Graph data structures, centrality, community detection, shortest paths, and network topology.

### APIs & Open Data Domain Pack
- ✓ `api-discovery` — Multi-category public/free API discovery, quota evaluation, and official-documentation verification.
- ✓ `api-integration` — Resilient HTTP client engineering (exponential backoff, rate limits, schema validation, idempotency).

### AI Foundations
- △ `ai-chat` — Research pending (placeholder retained).
- △ `ai-tools` — Research pending (placeholder retained).

---

## Repository Overview

- **`instructions/`** — Universal, persistent engineering rules and principles (e.g., engineering discipline, simplicity, security baseline).
- **`skills/`** — Modular, task-specific workflows following the open `SKILL.md` standard.
- **`routing/`** — Domain routing maps and canonical multi-skill composition patterns (`DOMAIN_ROUTING.md`).
- **`tests/`** — Behavioral test scenarios and upstream evaluation suites.
- **`sources/`** — Registry of curated upstream sources, licensing, and attribution notes.
- **`third_party/`** — Upstream MIT and Apache-2.0 licenses and notices.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
