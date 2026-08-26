import { classifyTask } from "../../router/classify.ts";

export function testClassification(): { passed: boolean; message: string } {
  // Test 1: React map dashboard (build intent, react tech, web-map capability)
  const t1 = classifyTask("Build an interactive React map dashboard");
  if (!t1.intents.includes("build") || !t1.technologies.includes("react") || !t1.capabilities.includes("web-map")) {
    return { passed: false, message: "Failed to classify React map dashboard" };
  }

  // Test 2: Supabase 401 bug (fix intent, supabase tech, risk boundary)
  const t2 = classifyTask("Login randomly returns 401 after page refresh in Supabase");
  if (!t2.intents.includes("fix") || !t2.technologies.includes("supabase") || !t2.hasRiskBoundary) {
    return { passed: false, message: "Failed to classify Supabase 401 bug" };
  }

  // Test 3: Trivial task (button label change)
  const t3 = classifyTask("Change the Save button label to Submit.");
  if (!t3.isTrivial) {
    return { passed: false, message: "Failed to identify trivial button label task" };
  }

  // Test 4: NetworkX graph task (networkx tech, graph-analysis capability)
  const t4 = classifyTask("Calculate betweenness centrality in this network graph with NetworkX");
  if (!t4.technologies.includes("networkx") || !t4.capabilities.includes("graph-analysis")) {
    return { passed: false, message: "Failed to classify networkx graph task" };
  }

  // Test 5: Empty string input — should not crash, should return empty arrays
  const t5 = classifyTask("");
  if (t5.intents.length !== 0 || t5.domains.length !== 0 || t5.technologies.length !== 0 || t5.capabilities.length !== 0) {
    return { passed: false, message: "Empty input should produce empty classification arrays" };
  }

  // Test 6: Very long prompt — should not crash
  const longPrompt = "Build a React dashboard with real-time weather data. ".repeat(50);
  const t6 = classifyTask(longPrompt);
  if (!t6.intents.includes("build") || !t6.technologies.includes("react")) {
    return { passed: false, message: "Long prompt should still classify correctly" };
  }

  // Test 7: Multi-domain prompt — should detect both geospatial and frontend domains
  const t7 = classifyTask("Build a React web dashboard to visualize GeoJSON spatial data on a map");
  if (!t7.domains.includes("frontend") || !t7.domains.includes("geospatial")) {
    return { passed: false, message: "Multi-domain prompt should detect both frontend and geospatial domains" };
  }

  // Test 8: PostGIS should trigger postgis technology and database domain
  const t8 = classifyTask("Design a PostGIS spatial table with GiST indexes");
  if (!t8.technologies.includes("postgis") || !t8.domains.includes("database")) {
    return { passed: false, message: "PostGIS prompt should detect postgis technology and database domain" };
  }

  // Test 9: Case insensitivity — ALL CAPS should classify the same as lowercase
  const t9 = classifyTask("FIX THE SUPABASE AUTH BUG");
  if (!t9.intents.includes("fix") || !t9.technologies.includes("supabase") || !t9.hasRiskBoundary) {
    return { passed: false, message: "ALL CAPS input should classify correctly (case-insensitive)" };
  }

  return { passed: true, message: "Classification tests passed (9/9)" };
}
