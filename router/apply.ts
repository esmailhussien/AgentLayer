import * as fs from "fs";
import * as path from "path";
import type { RouteResult } from "./types.ts";

export interface ApplyResult {
  targetDir: string;
  appliedSkills: string[];
  instructionsCopied: boolean;
  errors: string[];
}

export function applySkills(
  result: RouteResult,
  targetDir = ".agents/skills",
  workspaceRoot: string = process.cwd(),
  packageRoot: string = workspaceRoot
): ApplyResult {
  const resolvedTarget = path.resolve(workspaceRoot, targetDir);
  const appliedSkills: string[] = [];
  const errors: string[] = [];

  if (!fs.existsSync(resolvedTarget)) {
    fs.mkdirSync(resolvedTarget, { recursive: true });
  }

  for (const skill of result.skills) {
    const srcDir = path.resolve(packageRoot, skill.path);
    const destDir = path.resolve(resolvedTarget, skill.name);

    if (!fs.existsSync(srcDir)) {
      errors.push(`Skill directory not found on disk: ${srcDir}`);
      continue;
    }

    try {
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.cpSync(srcDir, destDir, { recursive: true, force: true });
      appliedSkills.push(skill.name);
    } catch (err: any) {
      errors.push(`Failed to copy skill '${skill.name}': ${err.message}`);
    }
  }

  let instructionsCopied = false;
  const srcInstructions = path.resolve(packageRoot, "instructions");
  const destInstructions = path.resolve(resolvedTarget, "..", "instructions");
  if (fs.existsSync(srcInstructions) && !fs.existsSync(destInstructions)) {
    try {
      fs.cpSync(srcInstructions, destInstructions, { recursive: true, force: true });
      instructionsCopied = true;
    } catch {
      // Non-fatal
    }
  }

  return {
    targetDir: resolvedTarget,
    appliedSkills,
    instructionsCopied,
    errors
  };
}

export function bundleSkills(
  result: RouteResult,
  packageRoot: string = process.cwd(),
  includeInstructions = true
): string {
  const sections: string[] = [];

  sections.push(`# AgentLayer Skills Bundle\n\n> **Task:** "${result.prompt}"\n> **Confidence:** ${(result.confidence * 100).toFixed(0)}%\n> **Selected Skills:** ${result.skills.map((s) => s.name).join(", ")}\n`);

  if (includeInstructions) {
    const instructionsDir = path.resolve(packageRoot, "instructions");
    if (fs.existsSync(instructionsDir)) {
      sections.push(`## Universal Engineering Instructions\n`);
      const files = fs.readdirSync(instructionsDir).filter((f) => f.endsWith(".md"));
      for (const file of files) {
        const content = fs.readFileSync(path.join(instructionsDir, file), "utf-8");
        sections.push(`### ${file}\n\n${content}\n`);
      }
    }
  }

  sections.push(`## Composed Skills\n`);

  for (const skill of result.skills) {
    const skillMdPath = path.resolve(packageRoot, skill.path, "SKILL.md");
    if (fs.existsSync(skillMdPath)) {
      const content = fs.readFileSync(skillMdPath, "utf-8");
      sections.push(`### Skill: ${skill.name} (${skill.layer} layer)\n*Rationale: ${skill.reason}*\n\n${content}\n`);
    }
  }

  return sections.join("\n---\n\n");
}
