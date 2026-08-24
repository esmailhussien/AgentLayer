# AgentLayer Task — Replace Generic Testing with Focused QA Skills

## Objective

Replace the current placeholder:

```text
skills/testing/
```

with four focused upstream QA skills from:

```text
https://github.com/arjunprabhulal/agent-skills
```

Import:

```text
unit-testing
integration-testing
browser-testing
test-driven-development
```

Do not rewrite these skills from scratch.

Do not import `load-testing` or `test-data` yet.

---

## Upstream

Repository:

```text
https://github.com/arjunprabhulal/agent-skills
```

Upstream QA paths are under:

```text
skills/qa/
```

Expected source directories:

```text
skills/qa/unit-testing/
skills/qa/integration-testing/
skills/qa/browser-testing/
skills/qa/test-driven-development/
```

The repository currently declares the project and these skills under the MIT License.

Before importing:

1. Inspect current upstream `main`.
2. Confirm the root repository license is still MIT.
3. Confirm each selected SKILL.md still declares/permits MIT.
4. Record the exact upstream commit SHA used.

If licensing differs, STOP and report it.

---

## Remove Placeholder

Inspect:

```text
skills/testing/
```

Confirm it is still only AgentLayer's placeholder.

If so, remove it.

If it contains meaningful local work, STOP and report before deleting.

---

## Import

Faithfully vendor these four upstream skills:

```text
unit-testing
integration-testing
browser-testing
test-driven-development
```

Destinations:

```text
skills/unit-testing/
skills/integration-testing/
skills/browser-testing/
skills/test-driven-development/
```

For each skill:

- copy `SKILL.md`
- copy any `references/`, scripts, templates, or other local files directly required by that skill
- preserve filenames and relative structure
- do not simplify behavioral content
- do not merge the four skills
- prefer byte-for-byte identical upstream production files on initial import

Do not import unrelated skills.

---

## Why They Stay Separate

Preserve these boundaries:

```text
test-driven-development
→ test-first implementation / red-green-refactor

unit-testing
→ testing existing isolated behavior

integration-testing
→ testing real component/dependency boundaries

browser-testing
→ end-to-end browser/user-flow verification
```

AgentLayer should allow the relevant skill to load without forcing every testing methodology into every task.

---

## Attribution

Create in each imported skill:

```text
UPSTREAM.md
```

Example locations:

```text
skills/unit-testing/UPSTREAM.md
skills/integration-testing/UPSTREAM.md
skills/browser-testing/UPSTREAM.md
skills/test-driven-development/UPSTREAM.md
```

Each must record:

- upstream project
- upstream repository URL
- exact upstream path
- license
- exact imported commit SHA
- import date
- local AgentLayer path
- imported supporting files
- local modifications

Initial behavioral modifications should preferably be:

```text
none
```

Document any unavoidable modification exactly.

---

## Third-Party License

Create:

```text
third_party/arjunprabhulal-agent-skills/
```

with:

```text
LICENSE
NOTICE.md
```

`LICENSE` must contain the upstream MIT license text from the imported commit.

`NOTICE.md` should identify:

```text
arjunprabhulal/agent-skills
https://github.com/arjunprabhulal/agent-skills
```

and list the four imported QA skills.

Do not modify or replace AgentLayer's root license.

---

## Import Upstream Evals

The upstream repository provides eval cases under:

```text
evals/
```

Inspect the current upstream commit for eval files associated with each selected skill.

Import the relevant evals into:

```text
tests/upstream/arjunprabhulal-agent-skills/
├── unit-testing/
├── integration-testing/
├── browser-testing/
└── test-driven-development/
```

For each directory:

- preserve upstream behavioral eval content
- include `README.md`
- record upstream commit SHA
- record original eval path
- document any path-only or format-only changes

If the upstream eval is a JSON file, preserve the original JSON file rather than translating it to Markdown.

Do not invent replacement evals if one is absent.

---

## Source Registry

Update:

```text
sources/SOURCES.md
```

Record each skill individually with:

- source repository
- upstream path
- local path
- MIT license
- imported commit SHA
- modification status

Remove/update the old generic `testing` placeholder entry if present.

---

## Expected Structure

Relevant structure should become approximately:

```text
skills/
├── unit-testing/
│   ├── SKILL.md
│   ├── UPSTREAM.md
│   └── ...
├── integration-testing/
│   ├── SKILL.md
│   ├── UPSTREAM.md
│   └── ...
├── browser-testing/
│   ├── SKILL.md
│   ├── UPSTREAM.md
│   └── ...
└── test-driven-development/
    ├── SKILL.md
    ├── UPSTREAM.md
    └── ...

tests/upstream/arjunprabhulal-agent-skills/
├── unit-testing/
├── integration-testing/
├── browser-testing/
└── test-driven-development/

third_party/arjunprabhulal-agent-skills/
├── LICENSE
└── NOTICE.md
```

The old:

```text
skills/testing/
```

should no longer exist if confirmed to be a placeholder.

---

## Validation

Before committing:

1. Confirm upstream license is MIT.
2. Record exact upstream commit SHA.
3. Confirm `skills/testing/` was a placeholder before deleting.
4. Confirm all four selected upstream skills exist.
5. Compare imported production files with upstream.
6. Prefer byte-for-byte identical files.
7. Document every local modification.
8. Validate SKILL.md frontmatter.
9. Verify every referenced local file exists.
10. Import only relevant upstream evals.
11. Confirm third-party license/notice exists.
12. Confirm AgentLayer root license was not overwritten.
13. Update `sources/SOURCES.md`.
14. Confirm no `load-testing`, `test-data`, or unrelated skills were imported.
15. Review `git diff --stat`.

---

## Git

Commit:

```text
feat: replace generic testing with focused QA skills
```

Push normally to the configured AgentLayer GitHub remote if authenticated.

Never force-push.

---

## Completion Report

Report only:

- upstream commit SHA
- license confirmation
- removed placeholder status
- four skills imported
- supporting files imported
- evals imported
- local modifications
- validation result
- commit status
- push status
