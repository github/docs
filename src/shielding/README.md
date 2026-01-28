# Shielding

The shielding subject protects docs.github.com from junk requests, abuse, and unnecessary server load. It implements various middleware to detect and handle suspicious traffic patterns, invalid requests, and rate limiting.

## Purpose & Scope

This subject is responsible for:
- Detecting and handling invalid or suspicious requests
- Rate limiting suspicious traffic patterns
- Normalizing URLs to improve CDN cache hit rates
- Preventing abuse from scripted/bot traffic
- Redirecting malformed requests
- Protecting backend servers from unnecessary work

Shielding code controls the prevention of "junk requests" - scripted HTTP requests that are not made by regular browser users.

## Architecture & Key Assets

### Key capabilities and their locations

- `middleware/index.ts` - Main entry point that orchestrates all shielding middleware and rate limiting
- Individual middleware files - Each focuses on a single abuse pattern identified from log analysis
- Rate limiting logic - Uses `createRateLimiter()` for suspicious and API routes

## Setup & Usage

### How it works

1. `src/shielding/middleware/index.ts` is injected into the Express server
2. Loads all individual middleware handlers
3. Each middleware focuses on a single use-case/abuse pattern
4. Abuse patterns discovered by studying log files

### Rate limiting

Three levels of rate limiting:

1. **CDN (Fastly)** - First line of defense
2. **Suspicious routes** - Via shielding middleware
   - Only rate limited if deemed suspicious based on checked parameters
   - Implemented in `middleware/index.ts` with `createRateLimiter()`
3. **API routes** - Via API declaration
   - Limited to certain # of requests per minute, regardless of request characteristics
   - Implemented in `src/frame/middleware/api.ts`

### Common shielding patterns

**Invalid query strings:**
- Request: `GET /path?random=abc&weird=xyz`
- Action: Redirect to `/path` (normalized URL)
- Benefit: CDN can serve cached response for normalized URL

**Malformed URLs:**
- Invalid characters or patterns in URL
- Action: Return 400 or redirect to corrected URL
- Benefit: Prevent errors propagating to application code

**Invalid paths:**
- Suspicious path patterns (probes, exploits)
- Action: Reject with appropriate status code
- Benefit: Prevent unnecessary processing

### Running tests

```bash
npm run test -- src/shielding/tests
```

## Data & External Dependencies

### Data inputs
- HTTP request metadata (path, query strings, headers)
- Known good/bad patterns from log analysis
- CDN cache behavior data

### Dependencies
- Express middleware
- Rate limiting library (likely `express-rate-limit` or similar)
- `@/frame` - Express server integration
- CDN configuration (Fastly)

### Data outputs
- HTTP responses (redirects, 400s, 429s for rate limit)
- Cache-friendly normalized URLs
- Reduced backend server load

## Cross-links & Ownership

### Related subjects
- [`src/frame`](../frame/README.md) - Express middleware pipeline integration
- [`src/observability`](../observability/README.md) - Logging suspicious traffic patterns
- CDN configuration - Fastly edge rules

### Internal documentation
For detailed discussion on resilience and availability improvements, see:
- [How we have fortified Docs for better resiliency and availability (June 2023)](https://github.com/github/docs-engineering/discussions/3262)

### Ownership
- Team: Docs Engineering

## Current State & Next Steps

### Shielding strategies

Each middleware implements a specific strategy based on observed abuse:
- Query string normalization for CDN optimization
- Path validation to reject probes/exploits
- Header validation to detect bot traffic
- Next.js path handling for framework-specific patterns

### Known limitations
- Shielding is reactive (based on observing abuse patterns)
- Some legitimate traffic may be affected if patterns overlap with abuse
- Rate limits are tuned based on historical data
- Some shielding logic exists outside this subject (e.g., `/assets/*` 404 handling)

### Adding new shielding middleware

1. Identify abuse pattern from logs
2. Create new middleware file in `src/shielding/middleware/`
3. Implement detection and handling logic
4. Add to orchestrator in `index.ts`
5. Add tests in `tests/`
6. Monitor impact on CDN cache hit rate and server load

### Monitoring shielding effectiveness

Key metrics:
- CDN cache hit rate (should increase)
- Backend server load (should decrease)
- 4xx/5xx error rates (monitor for false positives)
- Rate limit triggers (logged in observability)

Check #docs-ops and monitoring dashboards for ongoing effectiveness.

### Configuration

Rate limit configuration:
- Thresholds tuned based on traffic patterns
- Different limits for different route types
- Suspicious request detection parameters

CDN integration:
- Works with Fastly configuration
- Ensures normalized URLs maximize cache hits
- Some shielding happens at CDN edge
- Dashboard for real-time shielding metrics

### Troubleshooting

**Legitimate traffic blocked:**
- Check shielding logs in Splunk
- Identify which middleware triggered
- Adjust pattern matching or rate limits
- Consider allowlist for specific use cases

**Abuse still getting through:**
- Analyze logs for new patterns
- Add new middleware to handle pattern
- Adjust existing middleware thresholds
- Consider CDN-level blocking

**CDN cache hit rate not improving:**
- Verify URL normalization is working
- Check that redirects are followed
- Analyze cache miss patterns
- Coordinate with CDN configuration

