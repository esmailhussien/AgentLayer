import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { route } from "../../router/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface ScenarioResult {
  id: string;
  prompt: string;
  passed: boolean;
  selectedSkills: string[];
  missingExpected: string[];
  unexpectedIncluded: string[];
  maxExceeded: boolean;
  warning?: string;
}

export interface ScenarioSuiteReport {
  suiteName: string;
  total: number;
  passed: number;
  failed: number;
  averageSkillCount: number;
  medianSkillCount: number;
  p95SkillCount: number;
  determinismPassed: boolean;
  overSelectionWarnings: number;
  results: ScenarioResult[];
}

export function runScenarioTests(filePath = path.join(__dirname, "scenarios.json")): ScenarioSuiteReport {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const scenarios = data.scenarios;
  const results: ScenarioResult[] = [];
  const skillCounts: number[] = [];
  let overSelectionWarnings = 0;
  let determinismPassed = true;

  for (const s of scenarios) {
    // Test Determinism by executing twice and comparing output
    const routeRes1 = route(s.prompt);
    const routeRes2 = route(s.prompt);

    const selected1 = routeRes1.skills.map((sk) => sk.name);
    const selected2 = routeRes2.skills.map((sk) => sk.name);

    if (JSON.stringify(selected1) !== JSON.stringify(selected2) || routeRes1.confidence !== routeRes2.confidence) {
      determinismPassed = false;
    }

    skillCounts.push(selected1.length);
    if (routeRes1.warning) {
      overSelectionWarnings++;
    }

    const missingExpected = s.mustInclude ? s.mustInclude.filter((m: string) => !selected1.includes(m)) : [];
    const unexpectedIncluded = s.mustExclude ? s.mustExclude.filter((m: string) => selected1.includes(m)) : [];
    const maxExceeded = s.maxSkills !== undefined && selected1.length > s.maxSkills;

    const passed = missingExpected.length === 0 && unexpectedIncluded.length === 0 && !maxExceeded;

    results.push({
      id: s.id,
      prompt: s.prompt,
      passed,
      selectedSkills: selected1,
      missingExpected,
      unexpectedIncluded,
      maxExceeded,
      warning: routeRes1.warning
    });
  }

  skillCounts.sort((a, b) => a - b);
  const totalCount = skillCounts.reduce((a, b) => a + b, 0);
  const averageSkillCount = Number((totalCount / (skillCounts.length || 1)).toFixed(1));
  const medianSkillCount = skillCounts[Math.floor(skillCounts.length / 2)] || 0;
  const p95SkillCount = skillCounts[Math.floor(skillCounts.length * 0.95)] || 0;

  const passedCount = results.filter((r) => r.passed).length;
  const failedCount = results.length - passedCount;

  return {
    suiteName: path.basename(filePath),
    total: results.length,
    passed: passedCount,
    failed: failedCount,
    averageSkillCount,
    medianSkillCount,
    p95SkillCount,
    determinismPassed,
    overSelectionWarnings,
    results
  };
}
