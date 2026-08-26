import { route } from "../../router/index.ts";

export function testCollections(): { passed: boolean; message: string } {
  const res1 = route("My GIS project", { collection: "gis" });
  const names1 = res1.skills.map((s) => s.name);

  const expectedGis = ["geomaster", "geopandas", "gdal", "geospatial-data-discovery", "verification"];
  for (const exp of expectedGis) {
    if (!names1.includes(exp)) {
      return { passed: false, message: `Collection 'gis' missing expected base skill: ${exp}` };
    }
  }

  const res2 = route("My web app project", { collection: "web-app" });
  const names2 = res2.skills.map((s) => s.name);
  const expectedWeb = ["brainstorming", "writing-plans", "frontend-design", "react-best-practices", "browser-testing", "verification"];
  for (const exp of expectedWeb) {
    if (!names2.includes(exp)) {
      return { passed: false, message: `Collection 'web-app' missing expected base skill: ${exp}` };
    }
  }

  return { passed: true, message: "Collections tests passed" };
}
