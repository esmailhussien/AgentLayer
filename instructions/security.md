# Security Principles

Universal baseline security principles applicable across all engineering tasks.

---

## Principles

1. **Secrets Management**: Never commit hardcoded API keys, tokens, credentials, or private certificates into source code or version control. Use secure environment variables or secret managers.
2. **Authentication**: Verify caller identities rigorously using robust, modern authentication protocols before granting access to resources.
3. **Authorization & Access Control**: Enforce explicit permission checks on every sensitive operation. Never assume trust based on UI state or client-side checks.
4. **Input Validation & Sanitization**: Treat all external input (user input, query parameters, webhook payloads, third-party responses) as untrusted. Validate types, lengths, formats, and sanitize against injection attacks (SQLi, XSS, command injection).
5. **Principle of Least Privilege**: Grant processes, API tokens, database connections, and users only the minimum permissions necessary to perform their specific function.
6. **Sensitive Data Protection**: Safeguard personally identifiable information (PII) and sensitive business data in transit (TLS) and at rest (encryption). Avoid leaking sensitive data in logs, error messages, or crash reports.
