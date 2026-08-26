import type { RegistryData, CollectionsData, RoutingRules, RouteOptions, RouteResult, SelectedSkill, SkillLayer, TaskClassification, ScoredSkill, DroppedSkill } from "./types.ts";
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
  const dropped: DroppedSkill[] = [];

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
      if (skill.layer === "domain" || skill.layer === "implementation" || skill.layer === "verification") {
        const hasDirectSignal = scored.reasons.some((r) =>
          r.includes("technology") || r.includes("Capability") || r.includes("Trigger") || r.includes("Keyword") || r.includes("override") || r.includes("collection")
        );
        if (hasDirectSignal) {
          selectSkill(name, scored.reasons.join("; "), scored.score);
        } else {
          dropped.push({ skill: name, reason: `Broad domain match without specific capability/trigger hit (score: ${scored.score})` });
        }
      }
    } else if (scored.score > 0) {
      dropped.push({ skill: name, reason: `Score ${scored.score} below minimum threshold ${minScore}` });
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
          const recScore = scoredSkills.get(rec)?.score || 0;
          // Precision rule: Auto-add verification recommendations OR frontend-design when UI domain is active OR database best practices when database is active OR direct signal matches
          const isUiDesignRec = rec === "frontend-design" && (classification.domains.includes("frontend") || classification.technologies.includes("react"));
          const isDbRec = rec === "supabase-postgres-best-practices" && (classification.domains.includes("database") || classification.technologies.includes("postgres") || classification.technologies.includes("postgis"));
          const isSecRec = rec === "security-review" && (classification.hasRiskBoundary || classification.domains.includes("security") || classification.domains.includes("api"));
          if (recSkill.layer === "verification" || isUiDesignRec || isDbRec || isSecRec || recScore >= minScore) {
            selectSkill(rec, `Recommended by ${name}`, Math.max(recScore, 6));
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

  // 8. Trivial task cleanup (suppress heavy planning, security review, and un-requested domain skills)
  if (classification.isTrivial) {
    for (const [sName, sObj] of Array.from(selectedMap.entries())) {
      if (sName !== "verification" && (!options.include || !options.include.includes(sName))) {
        selectedMap.delete(sName);
        dropped.push({ skill: sName, reason: "Suppressed for trivial single-element edit task" });
      }
    }
  }

  // 9. Manual Exclusions
  if (options.exclude) {
    for (const excl of options.exclude) {
      if (selectedMap.has(excl)) {
        selectedMap.delete(excl);
        dropped.push({ skill: excl, reason: "Explicitly excluded by user override" });
      }
    }
  }

  // 10. Deterministic Conflict Resolution
  for (const [name, selected] of Array.from(selectedMap.entries())) {
    const skill = registry.skills[name];
    if (skill && skill.conflicts) {
      for (const conf of skill.conflicts) {
        if (selectedMap.has(conf)) {
          const confSelected = selectedMap.get(conf)!;
          // Deterministic winner selection:
          // 1. Manual include
          const nameIncluded = options.include?.includes(name);
          const confIncluded = options.include?.includes(conf);

          let winner = name;
          let loser = conf;

          if (nameIncluded && !confIncluded) {
            winner = name;
            loser = conf;
          } else if (confIncluded && !nameIncluded) {
            winner = conf;
            loser = name;
          } else if (selected.score !== confSelected.score) {
            // 2. Higher score
            if (selected.score > confSelected.score) {
              winner = name;
              loser = conf;
            } else {
              winner = conf;
              loser = name;
            }
          } else {
            // 3. Alphabetical tie-breaker for determinism
            if (name < conf) {
              winner = name;
              loser = conf;
            } else {
              winner = conf;
              loser = name;
            }
          }

          selectedMap.delete(loser);
          dropped.push({ skill: loser, reason: `Dropped due to conflict with higher-priority skill '${winner}'` });
        }
      }
    }
  }

  // 11. Group by Layer and Sort
  const layerOrder = rules.layerOrder;
  const skillsList = Array.from(selectedMap.values()).sort((a, b) => {
    const layerA = layerOrder.indexOf(a.layer);
    const layerB = layerOrder.indexOf(b.layer);
    if (layerA !== layerB) return layerA - layerB;
    if (a.score !== b.score) return b.score - a.score;
    return a.name.localeCompare(b.name);
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

  // 12. Evidence-Based Confidence Calculation
  let evidencePoints = 0;
  if (classification.technologies.length > 0) evidencePoints += 0.35;
  if (classification.capabilities.length > 0) evidencePoints += 0.30;
  if (classification.intents.length > 0) evidencePoints += 0.15;
  if (classification.domains.length > 0) evidencePoints += 0.10;
  if (options.include && options.include.length > 0) evidencePoints += 0.10;
  if (options.collection) evidencePoints += 0.20;

  // Penalties for ambiguous, noisy, or empty prompts
  if (prompt.trim().length === 0) evidencePoints = 0.05;
  else if (skillsList.length === 1 && skillsList[0].name === "verification" && !classification.isTrivial) {
    evidencePoints = Math.min(evidencePoints, 0.30);
  }

  const confidence = Number(Math.min(0.98, Math.max(0.20, evidencePoints)).toFixed(2));

  // 13. Guardrail Warning for Broad Selection
  let warning: string | undefined;
  if (skillsList.length > 8 && !options.collection) {
    warning = "Warning: broad recommendation set; review routing signals.";
  }

  const summary = `Selected ${skillsList.length} skill(s) across ${
    Object.values(skillsByLayer).filter((l) => l.length > 0).length
  } layer(s).`;

  return {
    prompt,
    classification,
    skills: skillsList,
    skillsByLayer,
    dropped,
    confidence,
    dryRun: options.dryRun ?? false,
    warning,
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
