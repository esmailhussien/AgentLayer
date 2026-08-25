import type { RegistryData, CollectionsData, RoutingRules, RouteOptions, RouteResult, SelectedSkill, SkillLayer, TaskClassification, ScoredSkill } from "./types.ts";
import { classifyTask } from "./classify.ts";
import { scoreSkill } from "./score.ts";
import { generateSkillExplanation } from "./explain.ts";

export function resolveRoute(
  prompt: string,
  registry: RegistryData,
  collections: CollectionsData,
  rules: RoutingRules,
  options: RouteOptions = {}
): RouteResult {
  const classification = classifyTask(prompt);
  const minScore = options.minScore ?? rules.thresholds.selectionMinimumScore;
  const scoredSkills: Map<string, ScoredSkill> = new Map();
  const selectedMap: Map<string, SelectedSkill> = new Map();

  // 1. Initial Scoring for all skills
  for (const [name, skill] of Object.entries(registry.skills)) {
    const scored = scoreSkill(skill, classification, options, rules);
    scoredSkills.set(name, scored);
  }

  // 2. Preset Collection inclusion if specified
  if (options.collection && collections.collections[options.collection]) {
    const collection = collections.collections[options.collection];
    for (const skillName of collection.base) {
      if (registry.skills[skillName]) {
        selectSkill(skillName, `Included from preset collection '${options.collection}'`, 25);
      }
    }
  }

  // 3. Process Layer selection based on intent
  if (!classification.isTrivial) {
    if (classification.intents.includes("fix")) {
      selectSkill("systematic-debugging", "Fix/debug intent detected", 15);
    } else if (classification.intents.includes("build") || classification.intents.includes("design")) {
      selectSkill("brainstorming", "New feature/system creation intent", 12);
      selectSkill("writing-plans", "Detailed execution breakdown needed", 10);
    }
  }

  // 4. Score threshold matching for Domain & Implementation skills
  for (const [name, scored] of scoredSkills.entries()) {
    if (scored.score >= minScore) {
      const skill = registry.skills[name];
      if (skill.layer === "domain" || skill.layer === "implementation") {
        const hasDirectSignal = scored.reasons.some((r) =>
          r.includes("technology") || r.includes("Capability") || r.includes("Trigger") || r.includes("Keyword") || r.includes("override") || r.includes("collection")
        );
        if (hasDirectSignal) {
          selectSkill(name, scored.reasons.join("; "), scored.score);
        }
      }
    }
  }

  // 5. Risk Layer selection (Security Review)
  if (classification.hasRiskBoundary && !classification.isTrivial) {
    selectSkill("security-review", "Security/auth boundary or sensitive data detected", 12);
  }

  // 6. Verification Layer selection (Contextual)
  if (classification.needsBrowserTesting) {
    selectSkill("browser-testing", "Interactive UI / browser flow detected", 8);
  }
  if (classification.needsIntegrationTesting) {
    selectSkill("integration-testing", "API/database or service boundary testing needed", 8);
  }
  if (classification.needsUnitTesting) {
    selectSkill("unit-testing", "Data algorithms / function verification needed", 8);
  }
  // Universal completion verification
  selectSkill("verification", "Universal completion and truthfulness audit", 10);

  // 7. Apply recommended dependencies for high-confidence selected skills
  const currentSelected = Array.from(selectedMap.keys());
  for (const name of currentSelected) {
    const skill = registry.skills[name];
    if (skill && skill.recommended) {
      for (const rec of skill.recommended) {
        if (!selectedMap.has(rec) && registry.skills[rec]) {
          const recSkill = registry.skills[rec];
          // Only add recommended if relevant or verification
          if (recSkill.layer === "verification" || scoredSkills.get(rec)?.score! > 2) {
            selectSkill(rec, `Recommended by ${name}`, 6);
          }
        }
      }
    }
    // Hard requires
    if (skill && skill.requires) {
      for (const req of skill.requires) {
        if (!selectedMap.has(req) && registry.skills[req]) {
          selectSkill(req, `Required dependency of ${name}`, 15);
        }
      }
    }
  }

  // 8. Trivial task cleanup
  if (classification.isTrivial) {
    selectedMap.delete("brainstorming");
    selectedMap.delete("writing-plans");
    selectedMap.delete("systematic-debugging");
    selectedMap.delete("security-review");
  }

  // 9. Conflict and Exclusion enforcement
  if (options.exclude) {
    for (const excl of options.exclude) {
      selectedMap.delete(excl);
    }
  }
  for (const name of Array.from(selectedMap.keys())) {
    const skill = registry.skills[name];
    if (skill && skill.conflicts) {
      for (const conf of skill.conflicts) {
        selectedMap.delete(conf);
      }
    }
  }

  // 10. Group by Layer and Sort
  const layerOrder = rules.layerOrder;
  const skillsList = Array.from(selectedMap.values()).sort((a, b) => {
    const layerA = layerOrder.indexOf(a.layer);
    const layerB = layerOrder.indexOf(b.layer);
    if (layerA !== layerB) return layerA - layerB;
    return b.score - a.score;
  });

  const skillsByLayer: Record<SkillLayer, SelectedSkill[]> = {
    process: [],
    domain: [],
    implementation: [],
    risk: [],
    verification: []
  };

  for (const s of skillsList) {
    skillsByLayer[s.layer].push(s);
  }

  // 11. Calculate Confidence
  const totalScore = skillsList.reduce((acc, s) => acc + s.score, 0);
  const confidence = Math.min(1.0, Math.max(0.4, Number((totalScore / (skillsList.length * 10 || 1)).toFixed(2))));

  const summary = `Selected ${skillsList.length} skill(s) across ${
    Object.values(skillsByLayer).filter((l) => l.length > 0).length
  } layer(s).`;

  return {
    prompt,
    classification,
    skills: skillsList,
    skillsByLayer,
    confidence,
    dryRun: options.dryRun ?? false,
    summary
  };

  function selectSkill(name: string, reasonFallback: string, score: number) {
    if (options.exclude && options.exclude.includes(name)) return;
    const skill = registry.skills[name];
    if (!skill) return;

    const scored = scoredSkills.get(name);
    const finalScore = scored ? Math.max(scored.score, score) : score;
    const explanation = generateSkillExplanation(skill, classification, scored?.reasons || [reasonFallback]);

    selectedMap.set(name, {
      name: skill.name,
      layer: skill.layer,
      score: finalScore,
      reason: explanation,
      path: skill.path
    });
  }
}
