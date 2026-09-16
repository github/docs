# Events

The events subject handles client-side analytics by recording user interactions from the browser and sending them to GitHub's data pipeline. Events track anonymous usage data to help understand how users interact with docs.github.com and identify areas for improvement.

## Purpose & Scope

This subject is responsible for:
- Recording browser events (page views, clicks, searches, surveys, etc.)
- Validating event data against JSON schemas
- Sending events to Hydro (GitHub's data warehouse)
- Analyzing survey comments with sentiment analysis
- Providing React components for event tracking
- Server-side event endpoint (`POST /events`)

## Architecture & Key Assets

### Key capabilities and their locations

- `middleware.ts` - Express router handling `POST /events` endpoint, validates and publishes events
- `lib/schema.ts` - JSON Schema definitions for all event types using AJV validation
- `components/events.ts` - Client-side utilities for sending events from the browser

## Setup & Usage

### Event flow

1. Browser sends `POST /events` request with event data
2. Middleware validates against JSON schema
3. If valid, event is sent to Hydro data warehouse
4. If invalid, validation error is logged (not sent to warehouse)

### Event types

Supported event types (see `EventType` enum):
- `page` - Page view
- `exit` - User leaving page
- `link` - Link click
- `search` - Search query
- `survey` - Survey response

### Sending events from the browser

```typescript
import { sendEvent } from '@/events/components/events'

sendEvent({
  type: 'link',
  link_url: 'https://example.com',
})
```

### Event schema structure

All events require a `context` object with:
- `event_id` (UUID)
- `user` (UUID) - Anonymous user identifier
- `version` - Schema version
- `created` - Timestamp
- `path` - Current page path
- Browser metadata (user agent, viewport size, etc.)

Each event type has additional required/optional fields defined in `lib/schema.ts`.

### Local testing

Test event validation locally:
```bash
npm run test -- src/events/tests
```

Test comment analysis:
```bash
tsx src/events/scripts/analyze-comment-cli.ts "This is a great article!"
```

## Data & External Dependencies

### Data inputs
- Browser events from client-side JavaScript
- Survey responses and comments
- User context (language, version, product, path)
- Browser metadata (user agent, viewport, etc.)

### Dependencies
- Hydro API - GitHub's data warehouse
- AJV - JSON schema validation
- AI comment analysis service (internal)
- `@/versions`, `@/products`, `@/languages` - For enum validation

### Schema validation

Schemas enforce:
- Required fields for each event type
- Enum values (languages, versions, products, tools)
- Format validation (UUID, date-time, URI)
- Additional properties not allowed

### Data outputs
- Events sent to Hydro data warehouse
- Validation errors logged to Failbot (production)
- Survey sentiment analysis results

## Cross-links & Ownership

### Related subjects
- [`src/observability`](../observability/README.md) - Error logging and monitoring
- [`src/versions`](../versions/README.md) - Version enum validation
- [`src/products`](../products/README.md) - Product enum validation
- [`src/languages`](../languages/README.md) - Language enum validation
- [`src/tools`](../tools/README.md) - Tool enum validation

### Internal documentation
For detailed internal documentation about the data pipeline and Hydro, see the internal Docs Engineering repository.

### Ownership
- Team: Docs Engineering (code and analytics), Data Engineering (data pipeline)

## Current State & Next Steps

### Known limitations
- Survey comment sentiment analysis requires network call (adds latency)
- Event validation errors are deduplicated with LRU cache to prevent spam
- In production, events are fire-and-forget (don't wait for response)
- Validation errors sent to Hydro to track schema mismatches

### Adding a new event type

1. Add event type to `EventType` enum in `types.ts`
2. Add type-specific properties to `EventPropsByType` in `types.ts`
3. Add schema definition to `lib/schema.ts`
4. Update warehouse schema (internal process)
5. Add client-side tracking code in components as needed
6. Test validation with unit tests

### Survey comment analysis

Survey responses with comments are analyzed for sentiment:
- Positive/negative/neutral rating assigned
- Language detection for comment text
- Results stored in `survey_rating` and `survey_comment_language` fields

### Monitoring and debugging

- Validation errors appear in server logs
- Production validation errors sent to Hydro for tracking
- Use `analyze-comment-cli.ts` to test sentiment analysis locally

