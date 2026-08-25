---
name: geospatial-data-discovery
description: "Discover, evaluate, and acquire open and authoritative geospatial data (vector boundaries, raster imagery, satellite/Earth observation, DEM elevation, land cover, buildings, street networks, and climate grids). Use when searching for GIS datasets, satellite imagery (Sentinel, Landsat), OpenStreetMap/Overture layers, STAC catalogs, national open-data portals, or Cloud-Optimized GeoTIFFs (COG) and GeoParquet distributions."
license: MIT
---

# Geospatial Data Discovery & Verification

Domain-specific methodology for identifying, evaluating, and obtaining geospatial and Earth observation datasets with spatial precision, format compatibility, and attribution integrity.

---

## When to Use

Use this skill when:
- Sourcing geographic boundaries, admin polygons, roads, or building footprints
- Locating satellite imagery (Copernicus Sentinel-2, USGS Landsat, MODIS, NAIP)
- Finding elevation/DEM rasters (SRTM, Copernicus DEM, 3DEP)
- Querying SpatioTemporal Asset Catalogs (STAC) or cloud-native buckets
- Checking data licenses (ODbL, CC-BY, Public Domain) before ingestion

---

## 10-Point Geospatial Evaluation Checklist

Before downloading or integrating any spatial dataset, verify:

1. **Area of Interest (AOI):** Does the bounding box or polygon strictly cover the study area?
2. **Temporal Window:** What are the acquisition date ranges, baseline years, or repeat cycle frequencies?
3. **Spatial Resolution / Scale:** Ground Sample Distance (e.g. 10m Sentinel vs 30m Landsat vs sub-meter aerial) or vector scale ratio (1:10k vs 1:110m).
4. **Coordinate Reference System (CRS):** Is the native CRS geographic (WGS84 / EPSG:4326) or a local projected system (e.g., UTM zone, State Plane)?
5. **Data Geometry / Type:** Vector (Point/Line/Polygon), Raster (single/multi-band), Point Cloud (LiDAR), or Mesh.
6. **Cloud Cover & Quality Mask:** For optical Earth observation, check cloud percentage threshold and QA band availability.
7. **Distribution Format:** Cloud-native (COG, GeoParquet, PMTiles, GeoZarr) vs legacy archive (Shapefile, raw HDF, zipped GeoTIFF).
8. **Catalog & API Access:** STAC API endpoint, S3/GCS bucket requester-pays status, WFS/WMS endpoint, or direct bulk download.
9. **License & Attribution:** Verify specific attribution requirements (e.g., "Contains modified Copernicus Sentinel data [year]", "© OpenStreetMap contributors").
10. **Data Freshness & Provenance:** Verify update cadence, release version, and authoritative producing agency.

---

## Recommended Authoritative Data Sources

- **OpenStreetMap (OSM) / Geofabrik:** Global crowd-sourced vector data (roads, POIs, land use). License: ODbL.
- **Overture Maps Foundation:** Cloud-native GeoParquet releases of buildings, places, transportation, and base layers. License: CDLA-Permissive-2.0 / ODbL.
- **USGS EarthExplorer / Landsat:** 30m multispectral global archive (Landsat 8/9). Public Domain.
- **Copernicus Open Access / Sentinel Hub:** 10m multispectral (Sentinel-2), SAR (Sentinel-1). Open access with attribution.
- **NASA Earthdata / Planetary Computer / AWS Open Data:** Curated STAC catalogs offering direct COG/Zarr streaming.
- **Natural Earth:** Public domain global vector and raster map dataset at 1:10m, 1:50m, and 1:110m scales.
- **Copernicus DEM (GLO-30) / SRTM:** 30m global digital elevation models.
