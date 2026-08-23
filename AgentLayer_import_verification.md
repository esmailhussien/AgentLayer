# AgentLayer Task — Import `verification-before-completion` from Superpowers

## Objective

Replace the placeholder:

`skills/verification/`

with the established upstream **verification-before-completion** skill from `obra/superpowers`.

Do not rewrite or summarize the upstream skill.

## Upstream

Repository: `https://github.com/obra/superpowers`

Source:

`skills/verification-before-completion/SKILL.md`

The upstream project is currently MIT licensed. Before importing, verify the license is still MIT and record the exact upstream commit SHA used.

## Local Mapping

AgentLayer currently uses the local directory:

`skills/verification/`

Keep that directory name for now, but import the upstream `SKILL.md` into it.

Do not rename the upstream skill name inside the YAML/frontmatter merely to match the local directory. Preserve upstream behavioral content initially.

If this creates a compatibility problem with the Agent Skills specification or the tools AgentLayer targets, STOP and report the mismatch rather than silently editing upstream content.

## Import

Copy the current upstream:

`skills/verification-before-completion/SKILL.md`

to:

`skills/verification/SKILL.md`

For the initial import, preserve the upstream file byte-for-byte whenever possible.

Do not import unrelated Superpowers skills.

## Attribution

Create:

`skills/verification/UPSTREAM.md`

Include:

- Upstream project: `obra/superpowers`
- Upstream path: `skills/verification-before-completion/`
- License: MIT
- Exact imported commit SHA
- Import date
- Local path: `skills/verification/`
- Local modifications: none, if unchanged
- A note explaining that AgentLayer's directory is currently named `verification` while the upstream skill name is `verification-before-completion`

Any future behavioral modification must be recorded here.

## Third-Party License

AgentLayer already contains:

`third_party/superpowers/`

Reuse it.

Verify that its `LICENSE` still matches the MIT license at the imported upstream commit.

Do not create duplicate Superpowers license directories.

Update `third_party/superpowers/NOTICE.md` only if necessary to note that AgentLayer now also includes `verification-before-completion`.

## Source Registry

Update:

`sources/SOURCES.md`

Add this specific imported skill with:

- repository
- upstream path
- local path
- MIT license
- imported commit SHA
- modification status

Do not mark other Superpowers skills as imported.

## Tests / Evals

Inspect the current upstream repository for behavioral tests or eval scenarios specifically associated with `verification-before-completion`.

If dedicated upstream scenarios exist:

- copy them under `tests/upstream/superpowers/verification-before-completion/`
- preserve their behavioral content
- add a README with provenance and commit SHA

If no dedicated upstream scenarios exist, do NOT invent tests in this task. Record in `UPSTREAM.md` that no dedicated upstream test scenarios were imported.

## Important

The upstream skill's core behavior is evidence-before-completion: it requires fresh verification evidence before claims that work is complete, fixed, passing, or successful.

Do not weaken this behavior during the initial import.

## Validation

Before committing:

1. Confirm upstream license is MIT.
2. Record exact upstream commit SHA.
3. Compare local `SKILL.md` with upstream.
4. Confirm whether it is byte-for-byte identical.
5. Confirm YAML/frontmatter remains valid.
6. Check local references/links.
7. Confirm existing `third_party/superpowers/LICENSE` is sufficient.
8. Confirm `sources/SOURCES.md` was updated.
9. Confirm no unrelated files were imported.
10. Review `git diff --stat`.

If any local behavioral modification was necessary, document the exact change in `UPSTREAM.md`.

## Git

Commit message:

`feat: import verification-before-completion skill from superpowers`

Push normally to the configured AgentLayer GitHub remote if authenticated.

Never force-push.

## Completion Report

Report only:

- upstream commit SHA
- license confirmation
- imported files
- upstream tests/evals found or not found
- local modifications
- validation result
- commit status
- push status
