# AgentLayer Task — Import `systematic-debugging` from Superpowers

## Objective

Replace the current placeholder implementation of:

```text
skills/systematic-debugging/
```

with the existing, tested `systematic-debugging` skill from:

```text
https://github.com/obra/superpowers
```

Do **not** rewrite the skill from scratch.

The purpose of this task is to vendor the upstream skill into AgentLayer while preserving attribution, license requirements, and useful upstream tests/supporting material.

---

## Upstream Source

Repository:

```text
https://github.com/obra/superpowers
```

Source directory:

```text
skills/systematic-debugging/
```

Upstream branch:

```text
main
```

Upstream license:

```text
MIT
```

Before copying files, inspect the current upstream repository and confirm the license has not changed.

---

## License / Attribution Requirements

The upstream repository is MIT licensed.

Because AgentLayer will redistribute upstream material:

1. Preserve the upstream copyright and MIT license notice.
2. Do not remove upstream attribution.
3. Do not replace AgentLayer's root license.
4. Add a third-party license/notice specific to Superpowers.
5. Record exactly which files came from the upstream repository.
6. Record the upstream commit SHA used for the import.

If the upstream license differs from MIT at execution time, STOP and report the change instead of importing.

---

## Import Strategy

For this first skill, prefer **faithful vendoring** over rewriting.

Do not simplify, summarize, or "improve" the upstream `SKILL.md` yet.

We want to test the established upstream behavior before deciding whether AgentLayer needs modifications.

### Import these upstream implementation files

From:

```text
obra/superpowers/skills/systematic-debugging/
```

copy the current versions of:

```text
SKILL.md
condition-based-waiting.md
condition-based-waiting-example.ts
defense-in-depth.md
find-polluter.sh
root-cause-tracing.md
```

into:

```text
AgentLayer/skills/systematic-debugging/
```

Preserve their filenames.

If `SKILL.md` contains links to additional local files that are required for the skill to function correctly, import those required files as well and document them.

---

## Upstream Tests

Do not mix upstream behavioral test scenarios into the production skill directory in AgentLayer.

From the upstream directory, copy these test scenarios if they still exist:

```text
test-academic.md
test-pressure-1.md
test-pressure-2.md
test-pressure-3.md
```

Place them under:

```text
tests/upstream/superpowers/systematic-debugging/
```

Preserve the original content unless a path inside a test must be changed to point to AgentLayer's location.

If a path is changed, document the modification in the local README.

---

## Do Not Import

Do not import:

```text
CREATION-LOG.md
```

unless the production skill directly depends on it.

It is upstream development history rather than runtime skill content.

Do not import unrelated Superpowers skills.

Do not install the entire Superpowers framework or plugin.

---

## Attribution File

Create:

```text
skills/systematic-debugging/UPSTREAM.md
```

It should contain:

```md
# Upstream Attribution

This skill is derived from the `systematic-debugging` skill in
`obra/superpowers`.

Upstream repository:
https://github.com/obra/superpowers

Upstream path:
skills/systematic-debugging/

License:
MIT

Imported commit:
<exact upstream commit SHA>

Imported on:
<YYYY-MM-DD>

## Local modifications

Initial import:
- No behavioral changes to SKILL.md.
- Supporting files vendored from upstream.
- Upstream test scenarios stored under tests/upstream/superpowers/systematic-debugging/.

Any future AgentLayer modifications must be documented here.
```

Use the actual commit SHA and date.

---

## Third-Party License

Create:

```text
third_party/superpowers/LICENSE
```

containing the upstream MIT license text exactly as it exists at the imported commit.

Also create:

```text
third_party/superpowers/NOTICE.md
```

with:

```md
# Superpowers

AgentLayer includes material derived from:

obra/superpowers
https://github.com/obra/superpowers

The imported material is licensed under the MIT License.

See:
third_party/superpowers/LICENSE
```

If `third_party/` does not exist, create it.

---

## Source Registry

Update:

```text
sources/SOURCES.md
```

Change the Superpowers entry from research-only status to reflect that `systematic-debugging` has now been imported.

Record at minimum:

- source repository
- skill/path used
- license
- imported commit SHA
- whether the files are unchanged or modified
- local AgentLayer path

Do not mark other Superpowers skills as imported.

---

## Test Documentation

Create:

```text
tests/upstream/superpowers/systematic-debugging/README.md
```

Explain briefly:

- these scenarios came from `obra/superpowers`
- they are retained to evaluate the vendored skill
- the imported upstream commit SHA
- any path-only modifications made by AgentLayer
- behavioral content should remain unchanged during the initial import

---

## Expected Result

The relevant repository structure should become:

```text
AgentLayer/
├── skills/
│   └── systematic-debugging/
│       ├── SKILL.md
│       ├── UPSTREAM.md
│       ├── condition-based-waiting.md
│       ├── condition-based-waiting-example.ts
│       ├── defense-in-depth.md
│       ├── find-polluter.sh
│       └── root-cause-tracing.md
│
├── tests/
│   └── upstream/
│       └── superpowers/
│           └── systematic-debugging/
│               ├── README.md
│               ├── test-academic.md
│               ├── test-pressure-1.md
│               ├── test-pressure-2.md
│               └── test-pressure-3.md
│
├── third_party/
│   └── superpowers/
│       ├── LICENSE
│       └── NOTICE.md
│
└── sources/
    └── SOURCES.md
```

---

## Validation

Before committing:

1. Confirm the current upstream license is MIT.
2. Record the exact upstream commit SHA.
3. Confirm the imported `SKILL.md` matches the upstream file byte-for-byte unless a change is absolutely required.
4. If any implementation file differs from upstream, list the exact difference in `UPSTREAM.md`.
5. Confirm all local links from `SKILL.md` resolve.
6. Confirm executable scripts retain appropriate executable permissions where applicable.
7. Confirm the upstream test files are located under `tests/upstream/`, not the production skill directory.
8. Confirm AgentLayer's root license was not overwritten.
9. Confirm `sources/SOURCES.md` contains the import provenance.
10. Show `git diff --stat` and review the final changed files.

---

## Git Commit

After validation, commit with:

```text
feat: import systematic-debugging skill from superpowers
```

If the repository has an authenticated GitHub remote configured, push normally.

Do not force-push.

---

## Completion Report

Report only:

- upstream commit SHA used
- upstream license confirmed
- files imported
- files intentionally skipped
- any local modifications
- validation result
- commit status
- push status
