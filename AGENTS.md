# AgentLayer — Agent Guidelines

These guidelines apply to AI coding agents modifying or extending the AgentLayer repository.

---

## Core Rules

1. **Smallest Correct Change**: Always prefer the most focused, minimal change that achieves the goal.
2. **Inspect First**: Inspect existing work and understand the context before modifying or adding files.
3. **No Unnecessary Abstractions**: Do not introduce abstractions, wrappers, or speculative patterns without a concrete, current requirement.
4. **Preserve Working Components**: Do not rewrite or refactor working code or content unnecessarily.
5. **Keep Skills Focused**: Each skill must address a single domain or task cleanly.
6. **Avoid Rule Duplication**: Do not duplicate universal rules across individual skills; place universal principles in `instructions/`.
7. **Preserve Repository Structure**: Do not silently reorganize, add unplanned top-level directories, or alter the repository structure without explicit instruction.
8. **Verify Before Completion**: Verify all changes, file paths, and syntax before declaring work complete.
9. **No False Claims**: Never claim tests or verification passed unless they were genuinely executed and verified.
10. **Preserve Attribution & Licensing**: Always maintain upstream licensing information, references, and attribution for any adapted material in `sources/SOURCES.md`.
