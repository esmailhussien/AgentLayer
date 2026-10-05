# Contributing to AgentLayer

Contributions to documentation, focused skills, routing scenarios, and bug fixes are welcome. AgentLayer is experimental; keep limitations explicit and changes small enough to review.

## Before you start

- Read [README.md](README.md) and [AGENTS.md](AGENTS.md), which describe the project and its engineering conventions.
- Search existing issues and pull requests before opening a new one. For a substantial feature, propose the problem and approach in an issue before investing in implementation.
- Use the bug report or feature request form under the repository's **Issues > New issue** menu. Include a minimal, reproducible example rather than a private project dump.
- Issues, pull requests, and attachments are public. Remove API keys, tokens, credentials, personal data, and confidential prompts or datasets from examples and logs. Do not post sensitive vulnerability details in a public issue.

## Set up a source checkout

1. Fork this repository on GitHub, then clone your fork and enter its directory.
2. Create a focused branch, for example `git switch -c docs/clarify-routing`.
3. Use a current Node.js 22 release with native TypeScript execution enabled by default, or a newer compatible release, plus npm. Early Node.js 22 releases may not run the `.ts` entry points directly. The repository integrity check also uses Python 3 (CI uses Python 3.11).
4. Install the locked development dependencies from the repository root:

```sh
npm ci
```

Follow the README's source-checkout quick start to inspect routing. Test file-writing commands such as `apply` or `bundle` only against a disposable directory, and inspect generated files before using them in a real project.

## Keep changes focused

- Preserve working behavior and existing repository structure; avoid unrelated refactors or formatting churn.
- Keep each skill focused on one task or domain. Put universal engineering principles in `instructions/` rather than repeating them in every skill.
- For routing changes, read [router/README.md](router/README.md) and [routing/ROUTER_DESIGN.md](routing/ROUTER_DESIGN.md). Add a corresponding scenario in `tests/router/scenarios.json` for each new rule or trigger. Preserve deterministic output and explain dependencies or recommendations.
- Register only real skills in `routing/registry.json`; do not present placeholders as ready to use.
- Preserve existing licenses and notices. For adapted or vendored material, record the upstream source, commit and license in `sources/SOURCES.md`, and maintain the relevant notices under `third_party/`. Do not add material you lack permission to redistribute.
- Review AI-assisted changes yourself. Verify references, examples, licensing and test claims just as you would for any other contribution.

## Verify your change

Run the relevant checks from the repository root. The current package scripts provide:

```sh
npm run typecheck
npm run validate
npm run test:router
npm run test:validate
```

`test:validate` invokes `python tests/validate_repo.py`. If your system exposes Python 3 only as `python3`, run `python3 tests/validate_repo.py` and report that command. CI also inspects the package with `npm pack --dry-run`.

For routing, scoring, classification or registry changes, run the full router suite and investigate any regression. Add tests for changed behavior. For documentation-only changes, inspect the rendered Markdown, links and command examples; explain which runtime checks were not run. For issue-form changes, verify that GitHub renders the forms without creating a test issue.

Never claim a check passed unless you actually ran it and inspected the result. Record failures and environment limits, including checks you could not run.

## Open a pull request

1. Review your diff and commit only the files needed for the change. Use a descriptive commit message.
2. Push the branch to your fork and open a pull request against `esmailhussien/AgentLayer`'s `main` branch.
3. Explain the problem, the approach and any compatibility or behavior changes. Link a related issue when one exists.
4. List the exact checks you ran and their outcomes, plus checks not run and why. Add sanitized before/after examples or screenshots when helpful.
5. Check the CI result and respond to review feedback. Keep follow-up changes within the pull request's scope.

Treat contributors respectfully and keep feedback specific to the work. A proposal may need discussion or revision before it is suitable for the project.
