# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] — 2026-08-26

### Added

**Smart Skill Router**
- Deterministic, offline router with classify → score → resolve → explain pipeline
- 29 registered production skills across 5 layers (process, domain, implementation, risk, verification)
- 7 preset skill collections: `web-app`, `gis`, `data-analysis`, `api-integration`, `supabase-app`, `production`, `ai-app`
- Evidence-based confidence scoring with over-selection guardrails
- CLI with `route`, `validate` commands and `--dry-run`, `--include`, `--exclude`, `--collection`, `--format`, `--version` flags

**Skills — Process & Planning**
- `brainstorming` — Explore intent, requirements, and design options (from [obra/superpowers](https://github.com/obra/superpowers))
- `writing-plans` — Executable task-by-task engineering plans (from [obra/superpowers](https://github.com/obra/superpowers))
- `systematic-debugging` — 4-phase structured root-cause investigation (from [obra/superpowers](https://github.com/obra/superpowers))
- `verification` — Validate completeness and truthfulness before declaring done (from [obra/superpowers](https://github.com/obra/superpowers))

**Skills — Quality Assurance & Testing**
- `unit-testing` — Isolated unit test design and edge-case enumeration (from [arjunprabhulal/agent-skills](https://github.com/arjunprabhulal/agent-skills))
- `integration-testing` — Boundary verification against databases and dependencies (from [arjunprabhulal/agent-skills](https://github.com/arjunprabhulal/agent-skills))
- `browser-testing` — End-to-end browser user journeys (from [arjunprabhulal/agent-skills](https://github.com/arjunprabhulal/agent-skills))
- `test-driven-development` — Red-green-refactor TDD methodology (from [arjunprabhulal/agent-skills](https://github.com/arjunprabhulal/agent-skills))

**Skills — Frontend**
- `frontend-design` — Visual direction and aesthetic design quality (from [vercel-labs/open-agents](https://github.com/vercel-labs/open-agents))
- `react-best-practices` — React & Next.js performance optimization with 70 rules (from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills))

**Skills — Architecture & Database**
- `codebase-architecture` — TypeScript codebase design, domain-informed deepening (from [mblode/agent-skills](https://github.com/mblode/agent-skills))
- `supabase` — Supabase platform integration: Auth, SSR, Realtime, Storage (from [supabase/agent-skills](https://github.com/supabase/agent-skills))
- `supabase-postgres-best-practices` — Postgres schema design, indexing, RLS (from [supabase/agent-skills](https://github.com/supabase/agent-skills))

**Skills — Security**
- `security-review` — Vulnerability scanning, secret detection, CVE audits (from [github/awesome-copilot](https://github.com/github/awesome-copilot))

**Skills — Geospatial Domain Pack**
- `gdal` — Raster/vector CLI operations, COGs, reprojection (from [isaaccorley/geospatial-skills](https://github.com/isaaccorley/geospatial-skills))
- `geopandas` — Vector spatial data, joins, overlays, CRS transforms (from [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills))
- `geomaster` — Earth observation, remote sensing, spatial ML (from [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills))
- `design-postgis-tables` — PostGIS table architecture and spatial indexing (from [timescale/pg-aiguide](https://github.com/timescale/pg-aiguide))
- `geoparquet-validation` — GeoParquet metadata and cloud-native distribution (from [isaaccorley/geospatial-skills](https://github.com/isaaccorley/geospatial-skills))
- `geozarr` — Multidimensional geospatial raster arrays (from [isaaccorley/geospatial-skills](https://github.com/isaaccorley/geospatial-skills))
- `geospatial-frontend` — MapLibre GL and geospatial visualization (from [isaaccorley/geospatial-skills](https://github.com/isaaccorley/geospatial-skills))
- `geospatial-data-discovery` — Open geospatial data acquisition: STAC, OSM, Sentinel (AgentLayer Native)

**Skills — Data & Analytics Domain Pack**
- `exploratory-data-analysis` — Tabular profiling, missingness audits, EDA scaffolds (from [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills))
- `statistical-analysis` — Hypothesis testing, ANOVA, effect sizes, APA reporting (from [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills))
- `scientific-visualization` — Publication-ready figures, colorblind-safe palettes (from [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills))
- `networkx` — Graph analysis, centrality, community detection (from [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills))

**Skills — APIs & Open Data**
- `api-discovery` — Public API discovery and documentation verification (AgentLayer Native)
- `api-integration` — Resilient HTTP clients with backoff and rate limits (AgentLayer Native)

**Skills — AI Foundations**
- `ai-sdk` — Unified AI SDK for streaming, structured output, tool loops, RAG (from [vercel/ai](https://github.com/vercel/ai))

**Infrastructure**
- GitHub Actions CI with repository validation and router scenario testing
- Complete source attribution in `sources/SOURCES.md` with upstream commit SHAs
- 11 third-party license directories covering all vendored material
- 3 universal instruction files: engineering, simplicity, security
- 63 automated test scenarios (33 core + 30 real-world) with 100% pass rate and determinism verification
