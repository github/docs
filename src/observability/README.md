# Observability

The observability subject provides logging, error tracking, and monitoring infrastructure for docs.github.com. These tools help monitor system health, catch errors, and provide operational visibility through structured logging and alerting.

## Purpose & Scope

This subject is responsible for:
- Structured logging with logfmt format in production
- Logger abstraction over `console.log` for server-side code
- Error handling and resilience (catch and report errors)
- Integration with Sentry for error tracking
- Integration with StatsD for metrics
- Integration with Failbot for alerts
- Automatic request logging middleware
- Request context tracking via `requestUuid`

Note: This tracks system health, not user behavior. User behavior tracking is in [`src/events`](../events/README.md).

## Logging

Please see the [logger README](./logger/README.md) for details on using the logger.

## Architecture & Key Assets

### Key capabilities and their locations

- `logger/index.ts` - `createLogger()`: Creates logger instance for a module
- `logger/middleware/get-automatic-request-logger.ts` - Express middleware for automatic request logging
- `middleware/handle-errors.ts` - Global Express error handler that logs and reports errors
- `middleware/catch-middleware-error.ts` - Wraps async middleware to catch errors
- `lib/failbot.ts` - Reports errors to Failbot for alerting
- `lib/statsd.ts` - Sends metrics to StatsD for monitoring

## Setup & Usage

### Using the logger

Instead of `console.log`, use the logger:

```typescript
import { createLogger } from '@/observability/logger'

// Pass import.meta.url to include filename in logs
const logger = createLogger(import.meta.url)

// Log levels: error, warn, info, debug
logger.info('Processing request', { userId: '123' })
logger.error('Failed to process', { error })
```

Log levels (highest to lowest):
1. `error` - Errors that need attention
2. `warn` - Warnings that may need attention
3. `info` - Informational messages
4. `debug` - Detailed debugging information

Set `LOG_LEVEL` environment variable to filter logs:
```bash
LOG_LEVEL=info npm run dev  # Filters out debug logs
```

### Benefits of structured logging

1. **Logfmt format in production** - Easy to query in Splunk with key-value pairs
2. **Log level grouping** - Filter by severity (`error`, `warn`, `info`, `debug`)
3. **Request context** - Every log includes `path` and `requestUuid`
4. **Sentry integration** - Errors in Sentry include `requestUuid` to find related logs
5. **Development clarity** - Simple string logs in development, structured in production

### Automatic request logging

Request logging happens automatically via middleware:
- Development: `GET /en 200 2ms`
- Production: Logfmt with full context including `requestUuid`

All application logs from the same request share the same `requestUuid`.

### Error handling

Wrap async middleware to catch errors:

```typescript
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error'

router.get('/path', catchMiddlewareError(async (req, res) => {
  // Errors here are caught and handled
  const data = await fetchData()
  res.json(data)
}))
```

Global error handler in `middleware/handle-errors.ts` catches all Express errors.

## Data & External Dependencies

### Data inputs
- Application logs from `logger.<method>()` calls
- Request metadata (path, method, status, duration)
- Error objects with stack traces
- Request context (`requestUuid`, user agent, etc.)

### Dependencies
- **Splunk** - Log aggregation and querying (index: `docs-internal`)
- **Sentry** - Error tracking and alerting
- **StatsD** - Metrics collection
- **Failbot** - Error reporting and alerting
- **Logfmt** - Log format library

### Data outputs
- Structured logs sent to Splunk
- Errors reported to Sentry with context
- Metrics sent to StatsD
- Alerts sent via Failbot

## Cross-links & Ownership

### Related subjects
- [`src/events`](../events/README.md) - User behavior analytics (separate from observability)
- [`src/frame`](../frame/README.md) - Middleware pipeline where error handlers run
- All subjects - All should use `createLogger()` instead of `console.log`

### Internal documentation
- Splunk dashboard: https://splunk.githubapp.com/en-US/app/gh_reference_app/search
- For detailed logging guide, see `logger/README.md` in this directory
- Sentry dashboard: (internal link)
- On-call runbooks: (internal Docs Engineering repo)

### Ownership
- Team: Docs Engineering
- Note: We don't own Datadog or the observability infrastructure itself - we're working with what the observability team provides.

## Current State & Next Steps

### Querying logs in Splunk

All queries should specify index:
```splunk
index=docs-internal
```

Find logs by request:
```splunk
index=docs-internal requestUuid="abc-123"
```

Find errors:
```splunk
index=docs-internal level=error
```

Find logs from specific module:
```splunk
index=docs-internal module="src/search/middleware/general-search.ts"
```

### Request context

Every log includes:
- `requestUuid` - Unique ID for the request
- `path` - Request path
- `method` - HTTP method
- `statusCode` - Response status
- `duration` - Request duration
- `module` - Source file (from `import.meta.url`)

### Error reporting flow

1. Error occurs in application code
2. Caught by `catchMiddlewareError` or global error handler
3. Logged with `logger.error()` including stack trace
4. Reported to Sentry with `requestUuid`
5. Critical errors trigger Failbot alerts

### Adding observability to new code

1. Import and create logger at top of file:
   ```typescript
   import { createLogger } from '@/observability/logger'
   const logger = createLogger(import.meta.url)
   ```

2. Log important events:
   ```typescript
   logger.info('Cache hit', { key })
   logger.warn('Rate limit approaching', { count })
   logger.error('Database connection failed', { error })
   ```

3. Wrap async middleware:
   ```typescript
   import catchMiddlewareError from '@/observability/middleware/catch-middleware-error'
   router.use(catchMiddlewareError(myMiddleware))
   ```

### Known limitations
- Logs are verbose in production (logfmt includes full context)
- `requestUuid` tracking requires middleware initialization
- Development logs are simplified strings (less structured)

### Planned work
- We have an epic to improve our logging

### Monitoring and alerting

Active monitoring:
- Error rates tracked in Sentry
- Performance metrics tracked in StatsD
- Critical errors trigger Failbot alerts to #docs-ops
- On-call rotation notified for production incidents

For on-call procedures and escalation, see internal Docs Engineering runbooks.

