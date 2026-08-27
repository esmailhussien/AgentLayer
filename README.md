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

# Install selected skills into your project (.agents/skills/)
npx agentlayer apply "Refactor an existing React app with AI features"

# Generate a unified markdown bundle for pasting into any LLM
npx agentlayer bundle "Refactor codebase architecture" --out context.md

# Dry run inspection (shows recommendations without changes)
npx agentlayer route "Fix Supabase auth 401 bug" --dry-run

# Use a preset collection
npx agentlayer apply "Build a full-stack app" --collection web-app

# Check version
npx agentlayer --version
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

### AI & Agentic Foundations
- ✓ `ai-sdk` — Unified AI SDK toolkit for streaming, structured output, tool loops, embeddings, RAG, and React UI hooks.

---

## Preset Collections

AgentLayer provides 7 pre-configured skill collections for common engineering stacks:

| Collection | Description | Included Skills |
|---|---|---|
| `web-app` | Modern frontend & React development | `brainstorming`, `writing-plans`, `frontend-design`, `react-best-practices`, `browser-testing`, `verification` |
| `ai-app` | AI-powered applications & agentic workflows | `brainstorming`, `writing-plans`, `ai-sdk`, `security-review`, `integration-testing`, `verification` |
| `gis` | Geospatial engineering & mapping | `geomaster`, `geopandas`, `gdal`, `geospatial-data-discovery`, `verification` |
| `data-analysis` | EDA, statistical modeling & scientific figures | `exploratory-data-analysis`, `statistical-analysis`, `scientific-visualization`, `verification` |
| `api-integration` | Resilient REST API discovery & clients | `api-discovery`, `api-integration`, `security-review`, `integration-testing`, `verification` |
| `supabase-app` | Full-stack Supabase with Postgres RLS | `supabase`, `supabase-postgres-best-practices`, `security-review`, `integration-testing`, `verification` |
| `production` | Full engineering discipline & testing | `brainstorming`, `writing-plans`, `systematic-debugging`, `security-review`, `unit-testing`, `integration-testing`, `verification` |

---

## Repository Overview

- **`instructions/`** — Universal, persistent engineering rules and principles (e.g., engineering discipline, simplicity, security baseline).
- **`skills/`** — On-demand, task-specific instructions, scripts, and references across 29 production domains.
- **`routing/`** — Declarative skill registry, layer configurations, and preset collections.
- **`router/`** — Deterministic routing engine with CLI and programmatic API.
- **`tests/`** — Upstream verification fixtures and 64 automated router test scenarios (100% pass rate).
- **`third_party/`** — Upstream licenses and notices for all vendored material.
- **`sources/`** — Complete attribution log mapping every skill to its upstream source commit SHA and license.

---

## License

AgentLayer is licensed under the [MIT License](LICENSE). Vendored and adapted components retain their original upstream licenses (MIT, Apache-2.0, 3-clause BSD) as documented in `third_party/` and `sources/SOURCES.md`.
