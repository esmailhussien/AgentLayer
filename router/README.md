# AgentLayer Smart Router

Deterministic, offline, high-precision skill router for [AgentLayer](https://github.com/esmailhussien/AgentLayer).

---

## Features

- **Zero Network / Offline**: Uses purely deterministic tokenization, weighted scoring, and layer rules.
- **Explainable**: Every recommended skill includes a concise explanation of why it was chosen.
- **Layer-Structured**: Outputs skills grouped into `Process`, `Domain`, `Implementation`, `Risk`, and `Verification`.
- **Manual Overrides**: Full support for `--include`, `--exclude`, `--collection`, and `--dry-run`.
- **Integrity Validation**: Includes built-in registry verification (`npm run validate`).

---

## CLI Usage

```bash
# Calculate skill composition for a task
node router/index.ts route "Build a React dashboard displaying live weather data on an interactive map"

# Dry run inspection
node router/index.ts route "Fix intermittent Supabase auth bug" --dry-run

# Include or exclude specific skills
node router/index.ts route "Process raster data" --include gdal --exclude geomaster

# Seed from a collection preset
node router/index.ts route "Setup fullstack analytics" --collection data-analysis

# Output JSON for programmatic tooling
node router/index.ts route "Design PostGIS schema" --format json

# Validate skill registry integrity
node router/index.ts validate
```

---

## Programmatic API

```typescript
import { route, validateRegistry } from "./router/index.ts";

const result = route("Build a React dashboard with MapLibre", {
  dryRun: true,
  include: ["frontend-design"]
});

console.log(result.skills);
// [
//   { name: "brainstorming", layer: "process", score: 12, ... },
//   { name: "geospatial-frontend", layer: "implementation", score: 19, ... },
//   ...
// ]
```

---

## Testing

```bash
npm run test:router
```

Executes:
1. Registry integrity & disk path validation
2. Natural language task classification tests
3. Conflicts and manual override regression tests
4. Preset collection resolution tests
5. 22+ Scenario regression tests with positive and negative assertions
