import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import type { RegistryData, CollectionsData, RoutingRules, RouteOptions, RouteResult, SkillLayer } from "./types.ts";
import { resolveRoute } from "./resolve.ts";
import { validateRegistry } from "./validate.ts";
import { applySkills, bundleSkills, type ApplyResult } from "./apply.ts";

export { applySkills, bundleSkills, type ApplyResult };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, "..");

export function loadRoutingData(baseDir = workspaceRoot): {
  registry: RegistryData;
  collections: CollectionsData;
  rules: RoutingRules;
} {
  const registryPath = path.join(baseDir, "routing", "registry.json");
  const collectionsPath = path.join(baseDir, "routing", "collections.json");
  const rulesPath = path.join(baseDir, "routing", "rules.json");

  const registry: RegistryData = JSON.parse(fs.readFileSync(registryPath, "utf-8"));
  const collections: CollectionsData = JSON.parse(fs.readFileSync(collectionsPath, "utf-8"));
  const rules: RoutingRules = JSON.parse(fs.readFileSync(rulesPath, "utf-8"));

  return { registry, collections, rules };
}

export function route(prompt: string, options: RouteOptions = {}, baseDir = workspaceRoot): RouteResult {
  const { registry, collections, rules } = loadRoutingData(baseDir);
  return resolveRoute(prompt, registry, collections, rules, options);
}

export function printRouteResult(result: RouteResult, format: "table" | "json" = "table"): void {
  if (format === "json") {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log("\n================================================================================");
  console.log("                      AgentLayer Smart Skill Router");
  console.log("================================================================================");
  console.log(`Task Prompt : "${result.prompt}"`);
  console.log(`Confidence  : ${(result.confidence * 100).toFixed(0)}%`);
  console.log(`Selected    : ${result.skills.length} skill(s)`);
  if (result.dryRun) {
    console.log(`Mode        : DRY RUN (No changes made)`);
  }
  console.log("--------------------------------------------------------------------------------");

  if (result.warning) {
    console.log(`\n⚠️  ${result.warning}`);
  }

  const layerLabels: Record<SkillLayer, string> = {
    process: "1. Process & Planning",
    domain: "2. Domain Knowledge",
    implementation: "3. Implementation & Architecture",
    risk: "4. Risk & Security Audit",
    verification: "5. Testing & Verification"
  };

  const layers: SkillLayer[] = ["process", "domain", "implementation", "risk", "verification"];

  for (const layer of layers) {
    const skillsInLayer = result.skillsByLayer[layer];
    if (skillsInLayer.length > 0) {
      console.log(`\n[ ${layerLabels[layer]} ]`);
      for (const skill of skillsInLayer) {
        console.log(`  * ${skill.name.padEnd(30)} (Score: ${skill.score})`);
        console.log(`    -> ${skill.reason}`);
      }
    }
  }

  if (result.dryRun && result.dropped && result.dropped.length > 0) {
    console.log("\n[ Diagnostic: Dropped / Suppressed Candidates ]");
    for (const d of result.dropped.slice(0, 8)) {
      console.log(`  - ${d.skill.padEnd(30)}: ${d.reason}`);
    }
  }

  console.log("\n================================================================================\n");
}

export function runCli(args = process.argv.slice(2)): void {
  if (args.includes("--version") || args.includes("-v")) {
    const pkgPath = path.join(workspaceRoot, "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    console.log(`agentlayer v${pkg.version}`);
    process.exit(0);
  }

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    console.log(`
AgentLayer Smart Router & Skills CLI

Usage:
  node router/index.ts route "<task description>" [options]
  node router/index.ts apply "<task description>" [options]
  node router/index.ts bundle "<task description>" [options]
  npx agentlayer route "<task description>" [options]

Commands:
  route "<prompt>"       Calculate optimal skill composition for a task
  apply "<prompt>"       Calculate and copy selected skills to target (.agents/skills)
  bundle "<prompt>"      Output concatenated markdown of instructions & selected skills
  validate               Verify skill registry integrity and disk paths

Options:
  --apply, -a            Install/copy selected skills to target directory
  --target <dir>         Target directory for skills (default: .agents/skills)
  --bundle, -b           Generate unified markdown prompt/context
  --out <file>           Write bundled markdown output to file
  --dry-run              Display recommendation without modifying project
  --include <skill>      Force inclusion of a specific skill (can repeat)
  --exclude <skill>      Force exclusion of a specific skill (can repeat)
  --collection <name>    Seed from a preset collection (web-app, gis, etc.)
  --format <json|table>  Output format (default: table)
  --yes, -y              Skip interactive confirmation
  --version, -v          Show version number
  --help, -h             Show this help message

Examples:
  node router/index.ts route "Build a React dashboard with weather map"
  node router/index.ts apply "Build a React dashboard with weather map"
  node router/index.ts bundle "Refactor codebase architecture" --out context.md
  node router/index.ts route "Fix Supabase auth 401 bug" --dry-run
`);
    process.exit(0);
  }

  const command = args[0];

  if (command === "validate") {
    console.log("Validating AgentLayer skill registry...");
    const report = validateRegistry(workspaceRoot);
    if (report.valid) {
      console.log(`✓ Registry validation passed: ${report.skillsCount} skills, ${report.collectionsCount} collections.`);
      process.exit(0);
    } else {
      console.error(`✗ Registry validation failed with ${report.errors.length} error(s):`);
      for (const err of report.errors) {
        console.error(`  - ${err}`);
      }
      process.exit(1);
    }
  }

  if (command === "route" || command === "apply" || command === "bundle") {
    const prompt = args[1];
    if (!prompt || prompt.startsWith("--")) {
      console.error("Error: Please provide a task description string.");
      process.exit(1);
    }

    const options: RouteOptions = {
      include: [],
      exclude: [],
      dryRun: false
    };

    let format: "table" | "json" = "table";
    let doApply = command === "apply";
    let doBundle = command === "bundle";
    let targetDir = ".agents/skills";
    let outFile: string | undefined;

    for (let i = 2; i < args.length; i++) {
      if (args[i] === "--dry-run") {
        options.dryRun = true;
      } else if (args[i] === "--apply" || args[i] === "-a") {
        doApply = true;
      } else if (args[i] === "--bundle" || args[i] === "-b") {
        doBundle = true;
      } else if (args[i] === "--target" && args[i + 1]) {
        targetDir = args[++i];
      } else if (args[i] === "--out" && args[i + 1]) {
        outFile = args[++i];
      } else if (args[i] === "--include" && args[i + 1]) {
        options.include?.push(args[++i]);
      } else if (args[i] === "--exclude" && args[i + 1]) {
        options.exclude?.push(args[++i]);
      } else if (args[i] === "--collection" && args[i + 1]) {
        options.collection = args[++i];
      } else if (args[i] === "--format" && args[i + 1]) {
        format = args[++i] as "table" | "json";
      }
    }

    const result = route(prompt, options);

    if (doBundle) {
      const bundle = bundleSkills(result, workspaceRoot, true);
      if (outFile) {
        fs.writeFileSync(path.resolve(process.cwd(), outFile), bundle, "utf-8");
        console.log(`✓ Composed bundle written to: ${outFile} (${result.skills.length} skills, ${bundle.length} bytes)`);
      } else {
        console.log(bundle);
      }
      return;
    }

    printRouteResult(result, format);

    if (doApply && !options.dryRun) {
      console.log(`\nApplying ${result.skills.length} skill(s) to '${targetDir}'...`);
      const applyRes = applySkills(result, targetDir, process.cwd(), workspaceRoot);
      if (applyRes.errors.length > 0) {
        console.error(`⚠️  Some skills had errors during install:`);
        for (const err of applyRes.errors) {
          console.error(`  - ${err}`);
        }
      }
      console.log(`✓ Installed ${applyRes.appliedSkills.length} skill(s) to '${applyRes.targetDir}'.`);
      if (applyRes.instructionsCopied) {
        console.log(`✓ Copied universal engineering instructions.`);
      }
      if (applyRes.manifestWritten) {
        console.log(`✓ Generated skills manifest (AGENTS.md).`);
      }
      console.log(`\nYour AI coding agent will now automatically follow these skills.`);
    }
  }
}

// CLI auto-run when invoked directly
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  runCli();
}
