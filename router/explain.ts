import type { SkillMetadata, TaskClassification } from "./types.ts";

export function generateSkillExplanation(
  skill: SkillMetadata,
  classification: TaskClassification,
  reasons: string[],
  isAutoInjected = false
): string {
  if (reasons.some((r) => r.includes("Explicitly included"))) {
    return "Explicitly requested by manual --include override.";
  }

  switch (skill.name) {
    case "brainstorming":
      return "Explores intent, requirements, and design choices before initiating construction.";
    case "writing-plans":
      return "Decomposes the task into an executable, task-by-task engineering plan.";
    case "systematic-debugging":
      return "Applies structured 4-phase root cause investigation for the reported bug/error.";
    case "codebase-architecture":
      return "Guides system design, domain boundaries, and modularization.";
    case "frontend-design":
      return "Establishes UI visual hierarchy, responsive layout, and aesthetic direction.";
    case "react-best-practices":
      return "Optimizes React/Next.js components, hooks, state management, and renders.";
    case "geospatial-frontend":
      return "Configures MapLibre GL, interactive layers, and map dashboard interfaces.";
    case "supabase":
      return "Handles Supabase client configuration, authentication, storage, and realtime.";
    case "supabase-postgres-best-practices":
      return "Applies Postgres schema design, index optimization, connection pooling, and RLS.";
    case "design-postgis-tables":
      return "Architects PostGIS spatial tables, geometry/geography types, and spatial indexes.";
    case "gdal":
      return "Executes GDAL/OGR CLI operations for raster reprojection, clipping, and COG conversion.";
    case "geopandas":
      return "Processes vector spatial data, spatial joins, overlays, and coordinate transforms.";
    case "geomaster":
      return "Provides Earth observation, satellite imagery, remote sensing, and spatial ML guidance.";
    case "geoparquet-validation":
      return "Validates GeoParquet metadata and cloud-native vector distribution formatting.";
    case "geozarr":
      return "Handles multidimensional geospatial raster arrays and GeoZarr conventions.";
    case "geospatial-data-discovery":
      return "Sources open geospatial data (STAC, OSM, Sentinel, Landsat, DEMs).";
    case "exploratory-data-analysis":
      return "Performs tabular data profiling, missingness audits, and anomaly detection.";
    case "statistical-analysis":
      return "Conducts hypothesis testing, ANOVA, regressions, and effect size calculations.";
    case "scientific-visualization":
      return "Generates publication-ready scientific figures with colorblind-safe palettes.";
    case "networkx":
      return "Executes graph analysis, centrality metrics, and community detection algorithms.";
    case "api-discovery":
      return "Discovers and verifies public/free API endpoints against official documentation.";
    case "api-integration":
      return "Implements resilient HTTP client with exponential backoff, rate limits, and schema validation.";
    case "security-review":
      return "Audits authentication, secrets, RLS boundaries, and external data flow for security risks.";
    case "unit-testing":
      return "Verifies isolated functional units, algorithmic edge cases, and transformations.";
    case "integration-testing":
      return "Verifies system boundaries against live or mocked database, API, and service endpoints.";
    case "browser-testing":
      return "Verifies user journeys and interactive UI flows in an automated browser.";
    case "test-driven-development":
      return "Guides red-green-refactor testing cycles for new feature implementation.";
    case "verification":
      return "Validates completion and truthfulness before marking the task complete.";
    default:
      return reasons.length > 0 ? reasons.join("; ") : "Selected based on domain matching.";
  }
}
