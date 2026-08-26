# AgentLayer Domain Routing Map

> **Status:** Static architectural routing guide for AgentLayer skills.

This document describes the recommended skill composition and execution pipelines for complex user tasks spanning software engineering, GIS, data science, APIs, and AI.

---

## Routing Principles

1. **Instructions First:** Universal engineering rules (`instructions/`) are always loaded and persistent.
2. **Process & Planning:** Non-trivial tasks begin with `brainstorming` or `writing-plans`.
3. **Domain Wayfinding:** High-level domain skills (e.g. `geomaster`, `codebase-architecture`) provide conceptual grounding.
4. **Focused Execution:** Dedicated tool skills (e.g. `gdal`, `geopandas`, `design-postgis-tables`, `api-integration`) provide precise implementation rules.
5. **Quality & Verification:** Every task concludes with testing (`unit-testing`, `integration-testing`) and `verification`.

---

## Canonical Task Compositions

### 1. Tabular Data Profiling & Statistical Inference
```text
User Task: "Analyze customer churn CSV and test demographic significance"

1. instructions/engineering.md
2. skills/exploratory-data-analysis
   → Profile distributions, missing values, anomaly detection
3. skills/statistical-analysis
   → Hypothesis selection, assumption verification, effect size calculation
4. skills/scientific-visualization
   → Generate publication-quality figures with colorblind-safe palettes
5. skills/verification
   → Review findings against raw data and truthfulness standards
```

### 2. Vector GIS Analysis & Proximity Queries
```text
User Task: "Find all schools located within 1 km of primary highways"

1. skills/geospatial-data-discovery (if datasets need sourcing)
2. skills/geomaster (spatial reasoning, CRS selection)
3. skills/geopandas (GeoDataFrame loading, buffer, spatial join, geometry intersection)
4. skills/verification (confirm metric CRS was used for distance calculations)
```

### 3. Raster Processing & Cloud-Optimized GeoTIFF Conversion
```text
User Task: "Convert satellite tiles to Cloud-Optimized GeoTIFFs (COG) and reproject to Web Mercator"

1. skills/gdal
   → `gdalwarp` for reprojection, `gdal_translate` with `-co TILED=YES -co COPY_SRC_OVERVIEWS=YES`
2. skills/verification
   → Verify headers with `gdalinfo -json`
```

### 4. Production Spatial Database Architecture
```text
User Task: "Design a multi-tenant location tracking schema in PostgreSQL"

1. skills/brainstorming
   → Clarify scale, write throughput, and geographic scope
2. skills/supabase-postgres-best-practices
   → Base relational schema, connection pooling, RLS tenant policies
3. skills/design-postgis-tables
   → Geometry vs Geography selection, GiST indexing, bounding-box operators
4. skills/security-review
   → Audit RLS policies and SQL injection risks
5. skills/verification
```

### 5. Geospatial Web Map Application
```text
User Task: "Build an interactive map dashboard displaying live delivery fleets"

1. skills/brainstorming & skills/writing-plans
2. skills/frontend-design
   → UI aesthetic, typography, dark/light contrast
3. skills/geospatial-frontend
   → MapLibre GL map instance, layer styling, deck.gl data overlay
4. skills/react-best-practices
   → Memoized map state, re-render avoidance, client boundary isolation
5. skills/verification
```

### 6. Public API Discovery & Resilient Integration
```text
User Task: "Find a free global weather API and integrate real-time radar data"

1. skills/api-discovery
   → Evaluate candidate providers against official docs, rate limits, and CORS
2. skills/api-integration
   → Implement client with exponential backoff, rate-limit header parsing, and Zod schema validation
3. skills/integration-testing
   → Test live response parsing and error handling against mock endpoints
4. skills/verification
```

### 7. Spatial Network Analysis
```text
User Task: "Compute shortest emergency evacuation routes across a city road network"

1. skills/geomaster
   → Network topology extraction and edge weight assignment
2. skills/networkx
   → Graph construction, Dijkstra/A* path algorithms, centrality metrics
3. skills/geopandas
   → Re-project route geometries and export GeoJSON/GeoPackage
4. skills/verification
```
