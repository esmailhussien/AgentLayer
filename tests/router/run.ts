import { validateRegistry } from "../../router/validate.ts";
import { testClassification } from "./classification.test.ts";
import { testConflictsAndOverrides } from "./conflicts.test.ts";
import { testCollections } from "./collections.test.ts";
import { runScenarioTests } from "./resolution.test.ts";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, "..", "..");

console.log("\n================================================================================");
console.log("                   AgentLayer Smart Router Test Suite");
console.log("================================================================================\n");

let allPassed = true;

// 1. Registry Validation
console.log("[1/5] Validating Registry & Skill Paths...");
const regReport = validateRegistry(workspaceRoot);
if (regReport.valid) {
  console.log(`  ✓ Registry valid (${regReport.skillsCount} skills, ${regReport.collectionsCount} collections)`);
} else {
  console.error(`  ✗ Registry validation failed:`, regReport.errors);
  allPassed = false;
}

// 2. Classification Tests
console.log("\n[2/5] Running Task Classification Tests...");
const classRes = testClassification();
if (classRes.passed) {
  console.log(`  ✓ ${classRes.message}`);
} else {
  console.error(`  ✗ ${classRes.message}`);
  allPassed = false;
}

// 3. Conflicts & Overrides Tests
console.log("\n[3/5] Running Conflicts & Overrides Tests...");
const confRes = testConflictsAndOverrides();
if (confRes.passed) {
  console.log(`  ✓ ${confRes.message}`);
} else {
  console.error(`  ✗ ${confRes.message}`);
  allPassed = false;
}

// 4. Collections Tests
console.log("\n[4/5] Running Preset Collections Tests...");
const collRes = testCollections();
if (collRes.passed) {
  console.log(`  ✓ ${collRes.message}`);
} else {
  console.error(`  ✗ ${collRes.message}`);
  allPassed = false;
}

// 5. Scenario Suite
console.log("\n[5/5] Running Scenario Regression Suite (22 Scenarios)...");
const scenarioReport = runScenarioTests();

for (const sc of scenarioReport.results) {
  if (sc.passed) {
    console.log(`  ✓ [${sc.id}] "${sc.prompt.slice(0, 50)}..." -> [${sc.selectedSkills.join(", ")}]`);
  } else {
    console.error(`  ✗ [${sc.id}] "${sc.prompt}"`);
    if (sc.missingExpected.length > 0) {
      console.error(`      Missing expected: ${sc.missingExpected.join(", ")}`);
    }
    if (sc.unexpectedIncluded.length > 0) {
      console.error(`      Unexpected included (over-selected): ${sc.unexpectedIncluded.join(", ")}`);
    }
    console.error(`      Actual selected: ${sc.selectedSkills.join(", ")}`);
    allPassed = false;
  }
}

console.log("\n--------------------------------------------------------------------------------");
console.log("                           Router Quality Metrics");
console.log("--------------------------------------------------------------------------------");
console.log(`Scenarios Tested    : ${scenarioReport.total}`);
console.log(`Scenarios Passed    : ${scenarioReport.passed}`);
console.log(`Scenarios Failed    : ${scenarioReport.failed}`);
console.log(`Average Skill Count : ${scenarioReport.averageSkillCount} skills/task`);
console.log(`Pass Rate           : ${((scenarioReport.passed / scenarioReport.total) * 100).toFixed(1)}%`);
console.log("================================================================================\n");

if (!allPassed) {
  process.exit(1);
} else {
  process.exit(0);
}
