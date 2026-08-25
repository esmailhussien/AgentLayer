import type { TaskClassification } from "./types.ts";

const INTENT_PATTERNS: Record<string, RegExp[]> = {
  build: [
    /\b(build|implement|scaffold|develop)\b/i,
    /\bcreate\s+(an?\s+)?(app|application|dashboard|feature|module|system|service|component|pipeline|stack|table|schema|server|page|ui)\b/i,
    /\bfrom scratch\b/i,
    /\bnew feature\b/i
  ],
  fix: [/\b(fix|debug|resolve|patch|troubleshoot|repair)\b/i, /\b(bug|error|crash|broken|fails?|failing|exception|issue|401|403|404|500)\b/i],
  analyze: [/\b(analyze|analysis|profile|inspect|audit|evaluate|check|compare|explore|eda)\b/i],
  optimize: [/\b(optimize|performance|speed up|scale|indexing|pool|fast)\b/i],
  design: [/\b(design|architecture|schema|modeling|structure|restructure|modularize)\b/i],
  integrate: [/\b(integrate|integration|connect|consume|webhook|client|fetch)\b/i]
};

const DOMAIN_PATTERNS: Record<string, RegExp[]> = {
  geospatial: [/\b(gis|geospatial|spatial|geo|map|maps|maplibre|geopandas|gdal|ogr|geotiff|cog|geoparquet|geozarr|postgis|stac|sentinel|landsat|coordinates?|crs|epsg|shapefile|geojson|dem|elevation)\b/i],
  data: [/\b(data|dataset|csv|tsv|dataframe|eda|exploratory|missing values?|distributions?|anomalies?|statistics?|hypothesis|anova|t-test|p-value|regression|correlation|visualization|plot|chart|matplotlib|seaborn|networkx|graph|nodes?|edges?)\b/i],
  frontend: [/\b(frontend|ui|ux|web|dashboard|react|next\.?js|component|page|css|style|layout|theme|dark mode|responsive|browser)\b/i],
  database: [/\b(database|db|postgres|postgresql|supabase|sql|tables?|schema|migrations?|rls|queries|query|indexing|postgis)\b/i],
  api: [/\b(api|apis|rest|http|fetch|endpoint|webhooks?|openapi|swagger|rate limit|exponential backoff|public api|weather api|geocoding api)\b/i],
  security: [/\b(security|vulnerability|vulnerabilities|auth|authentication|authorization|token|jwt|secrets?|api key|injection|sql injection|xss|csrf|cve|credentials?)\b/i],
  qa: [/\b(test|testing|tests|unit test|integration test|e2e|browser test|tdd|playwright|jest|pytest)\b/i]
};

const TECHNOLOGY_PATTERNS: Record<string, RegExp[]> = {
  react: [/\breact\b/i, /\bnext\.?js\b/i, /\bjsx\b/i, /\btsx\b/i, /\bhooks\b/i],
  supabase: [/\bsupabase\b/i],
  postgres: [/\bpostgres(ql)?\b/i],
  postgis: [/\bpostgis\b/i],
  gdal: [/\bgdal\b/i, /\bogr(2ogr)?\b/i, /\bgdalwarp\b/i, /\bgdal_translate\b/i, /\bgeotiff\b/i, /\bcog\b/i],
  geopandas: [/\bgeopandas\b/i, /\bgeodataframe\b/i, /\bshapefile\b/i, /\bgeopackage\b/i],
  maplibre: [/\bmaplibre\b/i, /\bdeck\.?gl\b/i, /\bweb map\b/i, /\binteractive map\b/i],
  networkx: [/\bnetworkx\b/i, /\bgraph analysis\b/i, /\bcentrality\b/i, /\bcommunity detection\b/i],
  matplotlib: [/\bmatplotlib\b/i, /\bseaborn\b/i],
  geoparquet: [/\bgeoparquet\b/i],
  geozarr: [/\bgeozarr\b/i, /\bzarr\b/i]
};

const CAPABILITY_PATTERNS: Record<string, RegExp[]> = {
  "web-map": [/\b(web map|interactive map|map dashboard|map interface|render map)\b/i],
  "spatial-analysis": [/\b(spatial join|buffer|within \d+|overlay|proximity|nearest neighbor|distance)\b/i],
  "raster-processing": [/\b(reproject|cog|geotiff|raster|mosaic|clip raster|warp)\b/i],
  "vector-analysis": [/\b(vector|shapefile|geojson|geopackage|polygon|multipolygon|line|points?)\b/i],
  "earth-observation": [/\b(satellite|sentinel|landsat|remote sensing|earth observation|ndvi)\b/i],
  "data-profiling": [/\b(eda|exploratory|profile|missing values?|anomalies?|dataset summary)\b/i],
  "statistical-testing": [/\b(hypothesis test|t-test|anova|significance|p-value|effect size|regression|correlation)\b/i],
  "data-visualization": [/\b(plot|chart|figure|publication-quality|multi-panel|scientific visual)\b/i],
  "graph-analysis": [/\b(graph|network|centrality|community|shortest path|nodes? and edges?)\b/i],
  "api-discovery": [/\b(find api|search api|free api|public api|recommend api|discover api)\b/i],
  "api-integration": [/\b(integrate api|api client|rest client|fetch wrapper|rate limit|exponential backoff|webhook)\b/i],
  "database-schema": [/\b(schema|design table|create table|migrations?|table design|indexes|rls)\b/i]
};

const TRIVIAL_PATTERNS: RegExp[] = [
  /\b(button label|rename|typo|fix typo|change text|change color|button text|spelling)\b/i
];

const RISK_PATTERNS: RegExp[] = [
  /\b(auth|login|token|jwt|secret|api key|password|credential|payment|stripe|private data|pii|rls|vulnerability|injection|cve|upload|permission)\b/i
];

export function classifyTask(prompt: string): TaskClassification {
  const normalized = prompt.trim();

  const intents: string[] = [];
  for (const [intent, regexes] of Object.entries(INTENT_PATTERNS)) {
    if (regexes.some((r) => r.test(normalized))) {
      intents.push(intent);
    }
  }

  const domains: string[] = [];
  for (const [domain, regexes] of Object.entries(DOMAIN_PATTERNS)) {
    if (regexes.some((r) => r.test(normalized))) {
      domains.push(domain);
    }
  }

  const technologies: string[] = [];
  for (const [tech, regexes] of Object.entries(TECHNOLOGY_PATTERNS)) {
    if (regexes.some((r) => r.test(normalized))) {
      technologies.push(tech);
    }
  }

  const capabilities: string[] = [];
  for (const [cap, regexes] of Object.entries(CAPABILITY_PATTERNS)) {
    if (regexes.some((r) => r.test(normalized))) {
      capabilities.push(cap);
    }
  }

  const isTrivial = TRIVIAL_PATTERNS.some((r) => r.test(normalized)) && !intents.includes("build") && capabilities.length === 0;
  const hasRiskBoundary = RISK_PATTERNS.some((r) => r.test(normalized));

  const needsBrowserTesting = domains.includes("frontend") || technologies.includes("react") || capabilities.includes("web-map");
  const needsIntegrationTesting = domains.includes("database") || domains.includes("api") || technologies.includes("supabase") || technologies.includes("postgres") || intents.includes("fix");
  const needsUnitTesting =
    domains.includes("data") ||
    capabilities.includes("statistical-testing") ||
    capabilities.includes("graph-analysis") ||
    /\b(unit\s*tests?|math\s+function|isolated\s+function)\b/i.test(normalized);

  return {
    rawPrompt: normalized,
    intents,
    domains,
    technologies,
    capabilities,
    isTrivial,
    hasRiskBoundary,
    needsBrowserTesting,
    needsIntegrationTesting,
    needsUnitTesting
  };
}
