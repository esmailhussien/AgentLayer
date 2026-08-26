# AgentLayer Smart Router — Architectural Design

The **AgentLayer Smart Skill Router** is a deterministic, fast, offline, and inspectable resolution engine that maps natural language task descriptions into minimal, high-precision compositions of AgentLayer skills.

---

## 1. Core Principles

1. **Deterministic & Fast**: Zero runtime network calls, zero LLM dependencies, zero vector database dependencies.
2. **Minimalist (Smallest Useful Set)**: Recommends the exact skills necessary to complete the task (typically 2–7 skills) without over-selecting entire domains.
3. **Layered Architecture**: Every skill is organized into a primary layer ensuring structured engineering workflows.
4. **Transparent & Explainable**: Every selected skill has a human-readable reason explaining its relevance to the prompt.
5. **Inspectable & Testable**: Backed by a deterministic scoring formula, strict schema validation, and 100% passing scenario suites.

---

## 2. System Architecture

```text
Natural Language Task
         │
         ▼
┌─────────────────────────────────┐
│     router/classify.ts          │  -> Extract Intent, Domains, Tech, Capabilities, Risk Boundaries, Testing Needs
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     router/score.ts             │  -> Score against routing/registry.json (Tech +5, Cap +4, Domain +3, Triggers +3/+1)
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     router/resolve.ts           │  -> Apply Layer Policies, Intent Rules, Hard Requires, Recommendations, Exclusions
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     router/explain.ts           │  -> Attach Human-Readable Rationale for every selected tool
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     Selected Skill Set          │  -> Grouped into Process, Domain, Implementation, Risk, Verification
└─────────────────────────────────┘
```

---

## 3. The 5 Routing Layers

Every production skill has exactly one primary layer:

| Layer | Purpose | Core Skills |
|---|---|---|
| **1. Process** | Engineering discipline, exploration, and structured breakdown | `brainstorming`, `writing-plans`, `systematic-debugging` |
| **2. Domain** | Scientific, mathematical, and data domain knowledge | `gdal`, `geopandas`, `geomaster`, `geozarr`, `geoparquet-validation`, `geospatial-data-discovery`, `exploratory-data-analysis`, `statistical-analysis`, `scientific-visualization`, `networkx`, `api-discovery`, `codebase-architecture` |
| **3. Implementation** | Frameworks, UI libraries, database clients, and backend patterns | `frontend-design`, `react-best-practices`, `geospatial-frontend`, `supabase`, `supabase-postgres-best-practices`, `design-postgis-tables`, `api-integration` |
| **4. Risk** | Security, vulnerability detection, and authorization audits | `security-review` |
| **5. Verification** | Quality assurance, test automation, and truthfulness validation | `unit-testing`, `integration-testing`, `browser-testing`, `test-driven-development`, `verification` |

---

## 4. Scoring Heuristics

Candidate skills are scored deterministically based on rule weights:

- **Technology Exact Match (+5)**: Prompt explicitly names technology (e.g. `react`, `postgis`, `gdal`, `supabase`, `networkx`).
- **Capability Match (+4)**: Prompt matches a specific engineering capability (e.g. `web-map`, `cog-conversion`, `spatial-join`, `hypothesis-testing`).
- **Domain Relevance (+3)**: Broad domain category alignment (e.g. `geospatial`, `data`, `frontend`, `database`, `api`).
- **Strong Trigger (+3)**: Exact multi-word or distinct trigger phrase match.
- **Weak Trigger (+1)**: Single keyword match.
- **Recommended Bonus (+2)**: Associated skill recommendation from a high-confidence selected skill.
- **Hard Dependency (+10)**: Explicit `requires` declaration.
- **Manual Include (+20)**: User `--include <skill>` override.
- **Manual Exclude (-50)**: User `--exclude <skill>` override.
- **Conflict Penalty (-50)**: Mutual exclusion between opposing skills.

---

## 5. Intent & Contextual Selection Rules

1. **New Feature Creation (`build`, `create app`, `scaffold`)**:
   - Injects `brainstorming` and `writing-plans`.
2. **Bug Fixing & Diagnostics (`fix`, `bug`, `error`, `401`, `500`)**:
   - Injects `systematic-debugging`. Suppresses heavy speculative planning.
3. **Architecture Restructuring (`architecture`, `domain boundaries`)**:
   - Injects `codebase-architecture` and `writing-plans`.
4. **Trivial Edits (`button label`, `typo`, `color change`)**:
   - Suppresses process and risk layers. Retains only necessary minimal verification.
5. **Security Boundaries (`auth`, `token`, `secret`, `jwt`, `rls`, `injection`)**:
   - Injects `security-review`.
6. **Frontend / Browser Flow (`react`, `ui`, `maplibre`, `dashboard`)**:
   - Injects `browser-testing`.
7. **Backend / API / Database Boundary (`api`, `postgres`, `supabase`, `rest`)**:
   - Injects `integration-testing`.

---

## 6. CLI Usage & Overrides

### Basic Route
```bash
npx agentlayer route "Build a React dashboard displaying live weather data on a map"
```

### Dry Run (Inspect without modifying project)
```bash
npx agentlayer route "Fix Supabase authentication 401 bug" --dry-run
```

### Manual Inclusions and Exclusions
```bash
npx agentlayer route "Process GeoTIFF into COG" --include gdal --exclude geomaster
```

### Seeding from Preset Collections
```bash
npx agentlayer route "Custom GIS workflow" --collection gis
```

### JSON Output
```bash
npx agentlayer route "Design PostGIS schema" --format json
```

---

## 7. Relationship to Existing Files

- **`routing/DOMAIN_ROUTING.md`**: Human-readable composition guidance and canonical architectural patterns.
- **`routing/registry.json`**: Machine-readable metadata and relationship graph for all production skills.
- **`routing/collections.json`**: Preset skill bundles (`web-app`, `gis`, `data-analysis`, `api-integration`, `supabase-app`, `production`).
- **`routing/rules.json`**: Scoring weights, intent heuristics, risk boundaries, and layer prioritization.
- **`router/`**: High-performance, deterministic TypeScript resolution engine and CLI runner.

---

## 8. Future Optional LLM Fallback (Design Only)

In future iterations, if a task prompt has very low classification confidence (< 50%) or ambiguous natural language:

```text
Ambiguous Task
      │
      ▼
Deterministic Router (Confidence < 0.50)
      │
      ▼
Optional LLM Classifier (Constrained JSON schema output)
      │
      ▼
Strict Registry Validator (Discard any hallucinated skill names)
      │
      ▼
Final Validated Recommendation
```

*Note: LLM fallback is strictly prohibited from inventing non-existent skills, modifying production weights, or bypassing the registry schema.*
