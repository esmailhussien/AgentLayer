import { classifyTask } from "../../router/classify.ts";

export function testClassification(): { passed: boolean; message: string } {
  const t1 = classifyTask("Build an interactive React map dashboard");
  if (!t1.intents.includes("build") || !t1.technologies.includes("react") || !t1.capabilities.includes("web-map")) {
    return { passed: false, message: "Failed to classify React map dashboard" };
  }

  const t2 = classifyTask("Login randomly returns 401 after page refresh in Supabase");
  if (!t2.intents.includes("fix") || !t2.technologies.includes("supabase") || !t2.hasRiskBoundary) {
    return { passed: false, message: "Failed to classify Supabase 401 bug" };
  }

  const t3 = classifyTask("Change the Save button label to Submit.");
  if (!t3.isTrivial) {
    return { passed: false, message: "Failed to identify trivial button label task" };
  }

  const t4 = classifyTask("Calculate betweenness centrality in this network graph with NetworkX");
  if (!t4.technologies.includes("networkx") || !t4.capabilities.includes("graph-analysis")) {
    return { passed: false, message: "Failed to classify networkx graph task" };
  }

  return { passed: true, message: "Classification tests passed" };
}
