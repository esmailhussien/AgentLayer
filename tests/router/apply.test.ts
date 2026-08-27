import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { route } from "../../router/index.ts";
import { applySkills, bundleSkills } from "../../router/apply.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, "..", "..");

export function testApplyAndBundle(): { passed: boolean; message: string } {
  // Setup: create a temp directory for apply test
  const tempDir = path.resolve(__dirname, "..", "_apply_test_tmp");
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  try {
    // Test 1: Apply copies skills and generates manifest
    const result = route("Fix Supabase auth 401 bug", { include: ["systematic-debugging"] });
    const applyRes = applySkills(result, "skills", tempDir, workspaceRoot);

    if (applyRes.appliedSkills.length === 0) {
      return { passed: false, message: "Apply produced zero skills" };
    }
    if (applyRes.errors.length > 0) {
      return { passed: false, message: `Apply had errors: ${applyRes.errors.join(", ")}` };
    }

    // Test 2: SKILL.md exists in the copied directory
    const debugDir = path.join(tempDir, "skills", "systematic-debugging");
    if (!fs.existsSync(path.join(debugDir, "SKILL.md"))) {
      return { passed: false, message: "SKILL.md not found in copied skill directory" };
    }

    // Test 3: UPSTREAM.md should NOT be copied (internal provenance)
    if (fs.existsSync(path.join(debugDir, "UPSTREAM.md"))) {
      return { passed: false, message: "UPSTREAM.md was copied but should be excluded" };
    }

    // Test 4: Manifest (AGENTS.md) should be generated
    const manifestPath = path.join(tempDir, "AGENTS.md");
    if (!applyRes.manifestWritten || !fs.existsSync(manifestPath)) {
      return { passed: false, message: "AGENTS.md manifest was not generated" };
    }
    const manifestContent = fs.readFileSync(manifestPath, "utf-8");
    if (!manifestContent.includes("systematic-debugging")) {
      return { passed: false, message: "AGENTS.md manifest does not list applied skill" };
    }

    // Test 5: Bundle generates non-empty markdown with all selected skills
    const bundle = bundleSkills(result, workspaceRoot, true);
    if (bundle.length < 100) {
      return { passed: false, message: "Bundle output is too short" };
    }
    if (!bundle.includes("systematic-debugging")) {
      return { passed: false, message: "Bundle does not contain systematic-debugging skill" };
    }
    if (!bundle.includes("verification")) {
      return { passed: false, message: "Bundle does not contain verification skill" };
    }

    // Test 6: Bundle contains layer grouping headers
    if (!bundle.includes("Process & Planning") || !bundle.includes("Testing & Verification")) {
      return { passed: false, message: "Bundle missing layer grouping headers" };
    }

    // Test 7: Bundle contains universal instructions section
    if (!bundle.includes("Universal Engineering Instructions")) {
      return { passed: false, message: "Bundle missing universal instructions section" };
    }

    return { passed: true, message: "Apply and bundle tests passed (7/7)" };
  } finally {
    // Cleanup
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
}
