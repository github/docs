# Tests

The tests subject contains utilities, helpers, and infrastructure to support automated testing across docs.github.com. This includes test helpers, mock servers, schema validation, and shared testing patterns.

> [!NOTE]
> This directory should not include test suites. Test files belong in their respective subject directories (e.g., `src/search/tests/`, `src/frame/tests/`).

## Purpose & Scope

This subject is responsible for:
- Test utilities and helper functions shared across subjects
- Mock server infrastructure for integration tests
- Schema validation utilities (AJV)
- Test data and fixtures management
- Vitest configuration and setup
- TypeScript declarations for test tooling
- Shared testing patterns and conventions

Tests are written using [Vitest](https://vitest.dev/) for unit and integration tests, and [Playwright](https://playwright.dev/) for end-to-end browser tests.

## Architecture & Key Assets

### Key capabilities and their locations

- `lib/validate-json-schema.ts` - AJV validator factory for JSON schema validation
- `mocks/start-mock-server.ts` - Creates mock HTTP server for integration tests
- `helpers/e2etest.ts` - Utilities for end-to-end testing scenarios
- `vitest.setup.ts` - Global Vitest configuration and hooks

## Setup & Usage

### Installing test dependencies

Test-only dependencies are optional to keep standard installs faster:

```bash
npm ci --include=optional
```

### Running tests by suite

**Important: Do NOT run `npm test` without a path argument.** Tests must be run per-suite because different suites require different environment variables. Running all tests at once will produce many false failures.

**Important: Run `npm run build` before running tests.** Many test suites depend on Next.js build artifacts. Without a build, tests may fail with `Could not find a production build` or other confusing errors.

Always target the specific suite for the code you changed:

```bash
# By directory (recommended)
npm test -- src/search/tests/

# Single test file
npm test -- src/versions/tests/versions.ts
```

Some suites require environment variables or tests will fail with 404s or content mismatches. These suites have dedicated npm scripts that set the required variables automatically:

```bash
npm run test:article-api
npm run test:changelogs
npm run test:fixtures
npm run test:landings
npm run test:languages    # requires Elasticsearch running
npm run test:search       # requires Elasticsearch running
```

For the `content-linter` suite, you can optionally scope to changed files:

```bash
DIFF_FILES="content/foo.md content/bar.md" \
  npm test -- src/content-linter/tests/
```

All other suites (e.g., `versions`, `redirects`, `rest`, `frame`, `content-render`) can be run without special environment variables.

### Running Elasticsearch locally

The `search` and `languages` test suites require Elasticsearch on `localhost:9200`. To start it with Docker:

```bash
docker run -d \
  -p 127.0.0.1:9200:9200 \
  -e 'discovery.type=single-node' \
  -e 'xpack.security.enabled=false' \
  --name es-local \
  docker.elastic.co/elasticsearch/elasticsearch:8.12.0
```

Wait for it to be ready, then index the test fixtures:

```bash
curl --silent --fail http://localhost:9200  # verify ES is up
ELASTICSEARCH_URL=http://localhost:9200/ npm run index-test-fixtures
```

After that, `npm run test:search` and `npm run test:languages` will work.

See `.github/workflows/test.yml` for the full CI matrix and per-suite configuration.

### Running tests in watch mode

Continuously re-runs tests on file changes:

```bash
npm test -- --watch
```

### Viewing console output

By default, console.log is suppressed. To see output:

```bash
npm test -- <TEST_NAME> --silent=false
```

### Building before tests

Some tests require a production build:

```bash
npm run build
npm test -- src/<suite>/tests/
```

Error: `Could not find a production build` means you need to run `npm run build`.

## Data & External Dependencies

### Dependencies
- **Vitest** - Test runner and assertion library
- **Playwright** - Browser automation for E2E tests
- **AJV** - JSON schema validation
- Mock server libraries for HTTP mocking

### Test data
- Fixture content in `src/fixtures/`
- Schema files in `helpers/schemas/`
- Mock responses in `mocks/`

### Server management

Tests that make HTTP requests to `localhost:4000`:
- Vitest automatically starts/stops server via hooks
- Disable with `START_VITEST_SERVER=false` for manual server control

Manual server for debugging:
```bash
# Terminal 1
NODE_ENV=test PORT=4000 tsx src/frame/server.ts

# Terminal 2
START_VITEST_SERVER=false vitest src/versions/tests
```

## Cross-links & Ownership

### Related subjects
- [`src/fixtures`](../fixtures/README.md) - Fixture-based testing with minimal content
- All subjects with `/tests/` directories - Test consumers
- CI workflows in `.github/workflows/` - Automated test execution

### Testing documentation
- [Fixture content](../fixtures/README.md) - Fixture-based testing patterns
- [Playwright E2E tests](../fixtures/PLAYWRIGHT.md) - Headless browser testing

### Ownership
- Team: Docs Engineering

## Current State & Next Steps

### Testing patterns

**Unit tests** - Test individual functions/modules:
```typescript
import { describe, test, expect } from 'vitest'

describe('myFunction', () => {
  test('returns expected value', () => {
    expect(myFunction('input')).toBe('output')
  })
})
```

**Integration tests** - Test HTTP endpoints:
```typescript
import { get } from '@/tests/helpers/e2etest'

test('GET /search returns results', async () => {
  const res = await get('/search?query=test')
  expect(res.statusCode).toBe(200)
})
```

**Playwright tests** - Browser automation:
```typescript
test('search works in browser', async ({ page }) => {
  await page.goto('/search')
  await page.fill('input[name="query"]', 'test')
  // ...assertions
})
```

### Debugging middleware errors

Middleware errors are suppressed by default in tests. To see full errors:

```bash
export DEBUG_MIDDLEWARE_TESTS=true
vitest src/shielding/tests
```

### Linting tests

```bash
npm run lint
```

### Known limitations
- Optional dependencies must be installed for local testing
- Some tests require production build (`npm run build`)
- Server startup/shutdown adds overhead to test runs
- Fixtures may lag behind actual content structure

### Test organization

Tests should be co-located with their subject:
- ✅ `src/search/tests/api-search.ts`
- ✅ `src/versions/tests/middleware.ts`
- ❌ `src/tests/search-tests.ts` (wrong - not in subject)

Shared utilities belong in `src/tests/`:
- Helper functions used across subjects
- Mock servers and fixtures
- Schema validation utilities
- Test infrastructure

### Adding test helpers

1. Create a file in `src/tests/helpers/`
2. Export reusable functions
3. Document usage with JSDoc
4. Add tests for the helper itself
5. Import in test files across subjects

### CI integration

Tests run automatically in GitHub Actions on pull requests and merge groups. Each test suite runs as a separate matrix job with its own environment variables—see `.github/workflows/test.yml` for the full configuration. Locally, always target a specific suite rather than running all tests at once.

### Troubleshooting

**Tests fail with missing build:**
Run `npm run build` before tests.

**Tests hang or timeout:**
Check if server started correctly. Use `DEBUG_MIDDLEWARE_TESTS=true`.

**Flaky tests:**
- Check for race conditions
- Ensure proper test isolation
- Verify mocks are properly reset

**Mock server issues:**
Check `src/tests/mocks/start-mock-server.ts` is running and configured correctly.

