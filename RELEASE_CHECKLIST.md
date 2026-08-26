# AgentLayer v0.1 Release Checklist

This checklist defines the mandatory verification and release steps for publishing AgentLayer v0.1.0 to npm and GitHub.

---

## 1. Pre-Release Verification

- [x] **Skill Inventory Integrity**:
  - All 29 production skills validated against disk paths in `routing/registry.json`.
  - Zero broken references in `routing/collections.json` (7 preset collections).
  - Validated via `python scripts/validate_repo.py` and `node bin/agentlayer.js validate`.
- [x] **Smart Router Test Suite**:
  - Core Scenario Suite (32 scenarios in `tests/router/scenarios.json`): 100% pass rate.
  - Real-World Benchmark Suite (30 scenarios in `tests/router/real-world-scenarios.json`): 100% pass rate.
  - Determinism check: 100% identical composition and scores across consecutive runs.
  - Overall accuracy: 62/62 scenarios (100.0%).
- [x] **License & Provenance Compliance**:
  - Every vendored skill includes `UPSTREAM.md` with source repository, commit SHA, and license terms.
  - Third-party licenses and notices maintained in `third_party/`.
  - Upstream source map and licensing catalog maintained in `sources/SOURCES.md`.
- [x] **GitHub Actions CI**:
  - Automated CI workflow in `.github/workflows/ci.yml` running validation and the complete router test suite on pull requests and pushes to `main`.

---

## 2. Packaging & Tarball Verification

- [x] **`package.json` Package Shape**:
  - `name`: `agentlayer`
  - `version`: `0.1.0`
  - `bin`: `{"agentlayer": "./bin/agentlayer.js"}`
  - `files`: explicitly restricted to `bin/`, `router/`, `routing/`, `skills/`, `instructions/`, `third_party/`, `sources/`, `README.md`, `LICENSE`.
- [x] **Tarball Inspection**:
  - Validated via `npm pack --dry-run` and clean extraction in isolated test sandbox.
  - Tarball size: ~560 kB (unpacked: 1.8 MB across 330 files).
  - No temporary files, test runners, or OS artifacts packaged.
- [x] **Executable Entry Point**:
  - Tested `agentlayer validate` and `agentlayer route "<prompt>"` in standalone directory.

---

## 3. Package Name & Registry Strategy

> [!IMPORTANT]
> The unscoped npm package name `agentlayer` is currently registered on npm by a third party.
>
> **Recommended Publishing Strategy:**
> - Publish as a scoped package: `@<owner>/agentlayer` (e.g. `@esmailhussien/agentlayer` or `@agentlayer/cli`).
> - To publish under a scope:
>   1. Set `"name": "@<owner>/agentlayer"` in `package.json`.
>   2. Run `npm publish --access public`.

---

## 4. Release Procedure

1. **Tag the Release**:
   ```bash
   git tag -a v0.1.0 -m "AgentLayer v0.1.0 — Universal AI & Domain Skills with Deterministic Smart Router"
   git push origin v0.1.0
   ```
2. **Publish to NPM (Scoped)**:
   ```bash
   npm publish --access public
   ```
3. **Create GitHub Release**:
   - Title: `AgentLayer v0.1.0`
   - Attach tarball `agentlayer-0.1.0.tgz` generated via `npm pack`.
   - Include release notes highlighting 29 curated skills, 7 collections, and the Smart Router engine.

---

## 5. Post-Release Smoke Testing

- [ ] Run `npx @<owner>/agentlayer validate` in a blank directory.
- [ ] Run `npx @<owner>/agentlayer route "Build an interactive map in React with AI chatbot"` to verify global routing.
