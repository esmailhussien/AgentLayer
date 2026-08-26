import { route } from "../../router/index.ts";

export function testCollections(): { passed: boolean; message: string } {
  // Test 1: GIS collection
  const res1 = route("My GIS project", { collection: "gis" });
  const names1 = res1.skills.map((s) => s.name);
  const expectedGis = ["geomaster", "geopandas", "gdal", "geospatial-data-discovery", "verification"];
  for (const exp of expectedGis) {
    if (!names1.includes(exp)) {
      return { passed: false, message: `Collection 'gis' missing expected base skill: ${exp}` };
    }
  }

  // Test 2: Web-app collection
  const res2 = route("My web app project", { collection: "web-app" });
  const names2 = res2.skills.map((s) => s.name);
  const expectedWeb = ["brainstorming", "writing-plans", "frontend-design", "react-best-practices", "browser-testing", "verification"];
  for (const exp of expectedWeb) {
    if (!names2.includes(exp)) {
      return { passed: false, message: `Collection 'web-app' missing expected base skill: ${exp}` };
    }
  }

  // Test 3: Data-analysis collection
  const res3 = route("My data analysis project", { collection: "data-analysis" });
  const names3 = res3.skills.map((s) => s.name);
  const expectedData = ["exploratory-data-analysis", "statistical-analysis", "scientific-visualization", "verification"];
  for (const exp of expectedData) {
    if (!names3.includes(exp)) {
      return { passed: false, message: `Collection 'data-analysis' missing expected base skill: ${exp}` };
    }
  }

  // Test 4: API-integration collection
  const res4 = route("My API integration project", { collection: "api-integration" });
  const names4 = res4.skills.map((s) => s.name);
  const expectedApi = ["api-discovery", "api-integration", "security-review", "integration-testing", "verification"];
  for (const exp of expectedApi) {
    if (!names4.includes(exp)) {
      return { passed: false, message: `Collection 'api-integration' missing expected base skill: ${exp}` };
    }
  }

  // Test 5: Supabase-app collection
  const res5 = route("My Supabase app project", { collection: "supabase-app" });
  const names5 = res5.skills.map((s) => s.name);
  const expectedSupabase = ["supabase", "supabase-postgres-best-practices", "security-review", "integration-testing", "verification"];
  for (const exp of expectedSupabase) {
    if (!names5.includes(exp)) {
      return { passed: false, message: `Collection 'supabase-app' missing expected base skill: ${exp}` };
    }
  }

  // Test 6: Production collection
  const res6 = route("My production project", { collection: "production" });
  const names6 = res6.skills.map((s) => s.name);
  const expectedProd = ["brainstorming", "writing-plans", "systematic-debugging", "security-review", "unit-testing", "integration-testing", "verification"];
  for (const exp of expectedProd) {
    if (!names6.includes(exp)) {
      return { passed: false, message: `Collection 'production' missing expected base skill: ${exp}` };
    }
  }

  // Test 7: AI-app collection
  const res7 = route("My AI app project", { collection: "ai-app" });
  const names7 = res7.skills.map((s) => s.name);
  const expectedAi = ["brainstorming", "writing-plans", "ai-sdk", "security-review", "integration-testing", "verification"];
  for (const exp of expectedAi) {
    if (!names7.includes(exp)) {
      return { passed: false, message: `Collection 'ai-app' missing expected base skill: ${exp}` };
    }
  }

  return { passed: true, message: "Collections tests passed (7/7 collections verified)" };
}
