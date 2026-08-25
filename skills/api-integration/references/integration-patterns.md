# API Integration Reference Patterns

Concrete code patterns for robust API integration across languages.

---

## 1. Exponential Backoff with Jitter (TypeScript Example)

```typescript
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries = 3,
  baseDelayMs = 500
): Promise<Response> {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      const response = await fetch(url, options);
      if (response.ok || (response.status >= 400 && response.status < 500 && response.status !== 429)) {
        return response;
      }
      // Handle rate limit Retry-After header
      if (response.status === 429) {
        const retryAfter = response.headers.get("Retry-After");
        const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : baseDelayMs * Math.pow(2, attempt) + Math.random() * 100;
        await new Promise((r) => setTimeout(r, delay));
        attempt++;
        continue;
      }
    } catch (err) {
      if (attempt === maxRetries - 1) throw err;
    }
    const delay = baseDelayMs * Math.pow(2, attempt) + Math.random() * 100;
    await new Promise((r) => setTimeout(r, delay));
    attempt++;
  }
  return fetch(url, options);
}
```

---

## 2. Cursor-Based Pagination Generator (Python Example)

```python
from typing import AsyncGenerator, Dict, Any, Optional
import httpx

async def paginate_cursor(
    client: httpx.AsyncClient,
    endpoint: str,
    params: Optional[Dict[str, Any]] = None,
    page_limit: int = 100
) -> AsyncGenerator[Dict[str, Any], None]:
    req_params = dict(params or {})
    cursor: Optional[str] = None

    while True:
        if cursor:
            req_params["cursor"] = cursor

        response = await client.get(endpoint, params=req_params, timeout=15.0)
        response.raise_for_status()
        data = response.json()

        items = data.get("items", [])
        for item in items:
            yield item

        cursor = data.get("next_cursor")
        if not cursor or not items:
            break
```

---

## 3. Boundary Schema Validation with Zod

```typescript
import { z } from "zod";

export const WeatherResponseSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  current_weather: z.object({
    temperature: z.number(),
    windspeed: z.number(),
    weathercode: z.number(),
  }),
});

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;

export async function parseWeatherPayload(json: unknown): Promise<WeatherResponse> {
  const result = WeatherResponseSchema.safeParse(json);
  if (!result.success) {
    throw new Error(`Invalid upstream payload: ${result.error.message}`);
  }
  return result.data;
}
```
