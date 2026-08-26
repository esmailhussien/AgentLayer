import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { route } from "../../router/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scenariosPath = path.join(__dirname, "scenarios.json");

export interface ScenarioResult {
  id: string;
  prompt: string;
  passed: boolean;
  selectedSkills: string[];
  missingExpected: string[];
  unexpectedIncluded: string[];
}

export function runScenarioTests(): {
  total: number;
  passed: number;
  failed: number;
  averageSkillCount: number;
  results: ScenarioResult[];
} {
  const data = JSON.parse(fs.readFileSync(scenariosPath, "utf-8"));
  const scenarios = data.scenarios;
  const results: ScenarioResult[] = [];
  let totalSkillsCount = 0;

  for (const s of scenarios) {
    const routeRes = route(s.prompt);
    const selected = routeRes.skills.map((sk) => sk.name);
    totalSkillsCount += selected.length;

    const missingExpected = s.mustInclude.filter((m: string) => !selected.includes(m));
    const unexpectedIncluded = s.mustExclude.filter((m: string) => selected.includes(m));

    const passed = missingExpected.length === 0 && unexpectedIncluded.length === 0;

    results.push({
      id: s.id,
      prompt: s.prompt,
      passed,
      selectedSkills: selected,
      missingExpected,
      unexpectedIncluded
    });
  }

  const passedCount = results.filter((r) => r.passed).length;
  const failedCount = results.length - passedCount;
  const averageSkillCount = Number((totalSkillsCount / (results.length || 1)).toFixed(1));

  return {
    total: results.length,
    passed: passedCount,
    failed: failedCount,
    averageSkillCount,
    results
  };
}
