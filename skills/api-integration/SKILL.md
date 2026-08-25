---
name: api-integration
description: "Engineer resilient, production-grade REST and HTTP API integrations with robust authentication, exponential backoff, rate limiting, pagination, schema validation, idempotency, timeouts, and structured error handling. Use when building API clients, integrating third-party web services, consuming OpenAPI/Swagger endpoints, handling webhook ingestion, or writing resilient HTTP fetch/request layers across TypeScript/JavaScript, Python, and Go."
license: MIT
---

# API Integration Engineering

Best practices for building reliable, fault-tolerant, and maintainable HTTP/REST API clients and integrations.

---

## When to Use

Use this skill when:
- Writing API client wrappers, SDK connectors, or fetch modules
- Handling authentication schemes (API keys, Bearer tokens, OAuth2 token refresh)
- Implementing pagination (cursor-based, offset/limit, page-number, link headers)
- Handling rate limits (status 429, `Retry-After`, token-bucket throttles)
- Designing retries with exponential backoff and jitter
- Enforcing runtime schema validation (Zod, Pydantic) on external responses
- Implementing idempotent mutations with `Idempotency-Key` headers

---

## 8 Non-Negotiable Integration Rules

1. **Explicit Timeouts Always:** Never issue an unbounded network request. Configure connection timeouts (e.g. 3–5s) and read/response timeouts (e.g. 10–30s).
2. **Exponential Backoff with Jitter:** On transient network failures or 5xx / 429 responses, retry with exponential delay + random jitter (`delay = min(max_delay, base * 2^attempt + jitter)`). Never retry non-idempotent mutations without idempotency keys.
3. **Parse Rate Limit Headers:** Respect `RateLimit-Reset` and `Retry-After` headers. If throttling occurs, pause execution until the reset timestamp rather than burning request quotas.
4. **Validate Response Payloads at the Boundary:** Treat all external API responses as untrusted. Parse through runtime validators (e.g., Zod in TypeScript, Pydantic in Python) before passing data into domain logic.
5. **Secure Credential Injection:** Retrieve credentials strictly from runtime environment variables. Never log headers containing `Authorization`, `x-api-key`, or cookie tokens.
6. **Robust Pagination Iterators:** Implement generator/async-iterator abstractions for paginated endpoints that automatically follow cursors or `next` links until exhausted or bounded by a limit.
7. **Idempotency Keys on Mutations:** For `POST`/`PUT`/`DELETE` billing, transactional, or state-changing calls, pass unique UUID `Idempotency-Key` headers to prevent duplicate execution during retry cycles.
8. **Structured Error Hierarchy:** Wrap raw HTTP status codes into typed domain errors (e.g. `RateLimitExceededError`, `AuthenticationError`, `ResourceNotFoundError`, `UpstreamServiceUnavailableError`) with attached request IDs for debugging.
