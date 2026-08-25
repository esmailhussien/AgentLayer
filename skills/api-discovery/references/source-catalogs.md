# Curated Public API Catalogs & Category Index

Use these registries as discovery starting points. Verify all endpoints against official documentation.

---

## Primary Discovery Catalogs

- **[public-apis/public-apis](https://github.com/public-apis/public-apis):** Community-curated index of free APIs across 50+ categories.
- **[public-api-lists/public-api-lists](https://github.com/public-api-lists/public-api-lists):** Machine-readable index of public APIs with category breakdowns.
- **[Data.gov](https://data.gov) / [data.europa.eu](https://data.europa.eu):** Official government open-data catalogs with REST and CKAN APIs.

---

## Category Starter Reference

### Weather & Environment
- **Open-Meteo:** Global weather forecast, historical weather, air quality. No API key required for non-commercial/low-volume use.
- **NOAA / National Weather Service (NWS):** US-focused marine, atmospheric, radar data. Free government API.
- **OpenAQ:** Global air quality sensor data, PM2.5, ozone, NO2 measurements.

### Geocoding & Maps
- **Nominatim / OpenStreetMap:** Forward and reverse geocoding. 1 req/sec rate limit with valid User-Agent.
- **Photon (Komoot):** OpenStreetMap-powered geocoder with autocomplete.
- **OpenRouteService:** Open-source routing, isochrones, matrix calculations.
- **Overpass API:** Dynamic querying of OpenStreetMap feature database.

### Finance & Economics
- **ExchangeRate-API / Frankfurter:** Open-source currency conversion based on European Central Bank data.
- **World Bank API:** Global economic indicators, GDP, population, development datasets.
- **SEC EDGAR API:** Company financial filings and disclosure statements.

### Science & Public Data
- **NASA Open APIs:** APOD, Mars rover imagery, asteroid tracker (NeoWs), Earth observation imagery.
- **USGS Earthquake API:** Real-time seismic activity feed with GeoJSON payloads.
- **Crossref / OpenAlex:** Academic paper metadata, DOI lookup, citation graphs.
- **REST Countries:** Country codes, currencies, borders, capital cities, population stats.

### Developer Tools & Security
- **Have I Been Pwned (HIBP):** k-anonymity password hash verification endpoint.
- **ipapi / ip-api:** IP geolocation lookup (note rate limits and HTTPS requirements on free tiers).
- **GitHub REST / GraphQL API:** Repository metadata, issues, releases (requires auth token for higher rate limits).
