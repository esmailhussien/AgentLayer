import type { SkillMetadata, TaskClassification, ScoredSkill, RouteOptions, RoutingRules } from "./types.ts";

export function scoreSkill(
  skill: SkillMetadata,
  classification: TaskClassification,
  options: RouteOptions,
  rules: RoutingRules
): ScoredSkill {
  let score = 0;
  const reasons: string[] = [];
  const promptLower = classification.rawPrompt.toLowerCase();

  // 1. Explicit manual overrides
  if (options.include && options.include.includes(skill.name)) {
    score += rules.weights.explicitInclusion;
    reasons.push("Explicitly included by user override (+20)");
  }

  if (options.exclude && options.exclude.includes(skill.name)) {
    score += rules.weights.explicitExclusion;
    reasons.push("Explicitly excluded by user override (-50)");
    return { name: skill.name, layer: skill.layer, score, reasons };
  }

  // 2. Technology exact match (+5)
  for (const tech of classification.technologies) {
    if (skill.name.toLowerCase().includes(tech) || skill.triggers.some((t) => t.toLowerCase() === tech)) {
      score += rules.weights.technologyExactMatch;
      reasons.push(`Explicit technology match: ${tech} (+5)`);
    }
  }

  // 3. Capability matches (+4)
  for (const cap of classification.capabilities) {
    if (skill.capabilities.some((sc) => sc.toLowerCase() === cap.toLowerCase() || sc.toLowerCase().includes(cap.toLowerCase()))) {
      score += rules.weights.capabilityMatch;
      reasons.push(`Capability match: ${cap} (+4)`);
    }
  }

  // 4. Domain match (at most once, +3)
  const matchedDomain = classification.domains.find((d) => skill.domains.includes(d));
  if (matchedDomain) {
    score += rules.weights.domainMatch;
    reasons.push(`Domain relevance: ${matchedDomain} (+3)`);
  }

  // 5. Direct trigger matches in prompt with word boundaries
  for (const trigger of skill.triggers) {
    const triggerLower = trigger.toLowerCase().trim();
    if (!triggerLower) continue;

    // Word-boundary matching
    const escaped = triggerLower.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "i");

    if (regex.test(promptLower)) {
      if (triggerLower.length > 4 || triggerLower.includes(" ")) {
        score += rules.weights.strongTriggerMatch;
        reasons.push(`Trigger matched: "${trigger}" (+3)`);
      } else {
        score += rules.weights.weakTriggerMatch;
        reasons.push(`Keyword matched: "${trigger}" (+1)`);
      }
    }
  }

  return {
    name: skill.name,
    layer: skill.layer,
    score,
    reasons
  };
}
