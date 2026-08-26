import { route } from "../../router/index.ts";

export function testConflictsAndOverrides(): { passed: boolean; message: string } {
  // Test 1: Manual include & exclude
  const res1 = route("Analyze this raster dataset", {
    include: ["gdal"],
    exclude: ["geomaster"]
  });

  const skillNames1 = res1.skills.map((s) => s.name);
  if (!skillNames1.includes("gdal")) {
    return { passed: false, message: "Manual --include gdal failed to include skill" };
  }
  if (skillNames1.includes("geomaster")) {
    return { passed: false, message: "Manual --exclude geomaster failed to exclude skill" };
  }

  // Test 2: Dry-run flag preservation
  const res2 = route("Design a PostGIS table", { dryRun: true });
  if (!res2.dryRun) {
    return { passed: false, message: "Dry-run flag was not preserved in RouteResult" };
  }

  // Test 3: Double exclude — should not error or duplicate in dropped list
  const res3 = route("Build a React app", {
    exclude: ["gdal", "gdal"]
  });
  const skillNames3 = res3.skills.map((s) => s.name);
  if (skillNames3.includes("gdal")) {
    return { passed: false, message: "Double exclude should still exclude the skill" };
  }

  // Test 4: Include + exclude same skill — exclude should win
  const res4 = route("Analyze spatial data", {
    include: ["geomaster"],
    exclude: ["geomaster"]
  });
  const skillNames4 = res4.skills.map((s) => s.name);
  if (skillNames4.includes("geomaster")) {
    return { passed: false, message: "Exclude should take priority over include for the same skill" };
  }

  // Test 5: Non-existent skill in include — should not crash
  const res5 = route("Build a dashboard", {
    include: ["nonexistent-skill-xyz"]
  });
  if (!res5.skills || res5.skills.length === 0) {
    return { passed: false, message: "Non-existent skill in include should not crash or empty the result" };
  }

  return { passed: true, message: "Conflicts and overrides tests passed (5/5)" };
}
