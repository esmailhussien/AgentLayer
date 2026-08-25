---
name: api-discovery
description: "Discover, evaluate, and verify public, open, and free APIs across categories (weather, geocoding, finance, AI, transportation, government, science, and developer tools). Use when asked to find an API, search for free data services, evaluate external providers, compare API options, or select an API for integration. Enforces verification against official documentation for current endpoints, authentication, rate limits, pricing tiers, CORS, and terms of service."
license: MIT
---

# API Discovery & Source Verification

Systematic discovery, evaluation, and verification of public and free APIs. Catalog entries are discovery hints, not authoritative truth — always verify official documentation before recommending or writing code.

---

## When to Use

Use this skill when:
- Finding external APIs for application features (weather, geocoding, stock quotes, AI models, news, etc.)
- Comparing multiple API providers on pricing, rate limits, reliability, or coverage
- Identifying free, open, or no-auth endpoints for quick prototyping
- Evaluating API feasibility before starting integration engineering

---

## 12-Step Discovery & Verification Workflow

Follow these steps in sequence:

1. **Identify Requirements:** Define required endpoints, data payload fields, frequency, and latency needs.
2. **Determine Coverage Scope:** Establish required geographic region, temporal range, language, or update resolution.
3. **Search Trusted Catalogs:** Consult curated registries (e.g. `public-apis/public-apis`, `public-api-lists`, open data indexes) for candidate discovery hints.
4. **Produce a Shortlist:** Select 2–4 viable candidate services matching the functional requirements.
5. **Inspect Official Documentation:** Visit and read the official provider portal and current API docs.
6. **Verify 10 Critical Criteria:**
   - **Availability / Status:** Is the service active, maintained, and returning HTTP 200?
   - **Authentication:** No auth, API key, Bearer token, OAuth2, or mutual TLS?
   - **Free Tier Limits:** What are the exact monthly/daily/minutely request allowances?
   - **Rate Limiting:** Burst caps, headers (`RateLimit-Remaining`, `Retry-After`), throttle behavior.
   - **CORS Support:** Can the endpoint be called directly from browser, or requires a backend proxy?
   - **Licensing & Terms:** Is commercial use permitted? Is attribution or backlink required?
   - **Data Freshness & Resolution:** Real-time vs cached, polling interval, granularity.
   - **Geographic Coverage:** Global vs country-specific (e.g., US-only vs worldwide).
   - **Payload Format:** REST (JSON), GraphQL, gRPC, GeoJSON, CSV, Protocol Buffers.
   - **Deprecation / Version:** Active v1/v2/v3 endpoint vs deprecated legacy route.
7. **Prefer Open / Self-Hostable:** Where applicable, prefer open-source or open-data backends (e.g., Open-Meteo, Nominatim, OpenStreetMap) over locked commercial proprietary tiers.
8. **Never Assume Permanence:** Free tiers change and catalogs become stale. Never claim an API is free without verifying its active pricing page.
9. **Never Hardcode Secrets:** API keys and credentials must always be stored in environment variables, never committed to repository code.
10. **Validate Live Payload:** Test a sample request with `curl` or HTTP client to confirm the actual response schema matches documentation.
11. **Document Limitations:** Explicitly report known quotas, rate limits, and fallback strategies to the user.
12. **Transition to Integration:** Once verified, hand off to `api-integration` for robust client implementation.
