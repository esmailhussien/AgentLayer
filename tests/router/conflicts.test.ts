import { route } from "../../router/index.ts";

export function testConflictsAndOverrides(): { passed: boolean; message: string } {
  // Test manual include & exclude
  const res1 = route("Analyze this raster dataset", {
    include: ["gdal"],
    exclude: ["geomaster"]
  });

  const skillNames = res1.skills.map((s) => s.name);
  if (!skillNames.includes("gdal")) {
    return { passed: false, message: "Manual --include gdal failed to include skill" };
  }
  if (skillNames.includes("geomaster")) {
    return { passed: false, message: "Manual --exclude geomaster failed to exclude skill" };
  }

  // Test dry-run flag preservation
  const res2 = route("Design a PostGIS table", { dryRun: true });
  if (!res2.dryRun) {
    return { passed: false, message: "Dry-run flag was not preserved in RouteResult" };
  }

  return { passed: true, message: "Conflicts and overrides tests passed" };
}
