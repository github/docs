# Copilot code review prompt

Review these code changes adversarially. Assume every change is guilty until proven correct. Your job is to find bugs, security holes, performance traps, and subtle logic errors that the author missed.

DO NOT MODIFY ANY FILES except the review report. Only provide feedback and suggestions.

## Finding changes to review

Use git to find the files changed on this branch compared to main:

```bash
git diff --name-only $(git merge-base main HEAD)...HEAD
```

Only review files returned by this command. Do not review files that are not in this list.

IMPORTANT: Only review committed changes.

DO NOT review:
- Staged changes (files in the index)
- Unstaged changes (modified files not yet staged)
- Untracked files

## Coding standards

**CRITICAL**: Before reviewing any code, use `read_file` to read each of these instruction files in full:

- .github/instructions/all.instructions.md (general project guidelines)
- .github/instructions/code.instructions.md (for TypeScript/JavaScript and code files)
- .github/instructions/content.instructions.md (for .md content files)
- .github/instructions/style-guide-summary.instructions.md (for documentation style)

Read all instruction files FULLY without limit/offset parameters. Do NOT skip this step or rely on summaries. Apply the standards from these files when reviewing changed code.

## Paths to ignore

IGNORE these paths entirely - do not review or comment on them:

- node_modules/*
- .next/*
- tmp/*
- tsconfig.tsbuildinfo

## Focus areas

- Violations of the project's coding standards (especially: all new code must be TypeScript, use `@/` absolute imports, scripts in `package.json` that execute TypeScript source files must use `tsx`)
- Bugs and logic errors
- Error handling issues
- Security concerns
- Defensive programming: Functions should validate inputs at trust boundaries. Specifically check for:
  - `undefined`/`null` access that will throw at runtime (e.g., destructuring a possibly-undefined object, indexing into a possibly-null array)
  - Optional chaining (`?.`) used where a hard failure would be more appropriate (silently returning `undefined` instead of surfacing a bug)
  - Type assertions (`as`, `!`) that bypass the type system—each one must be justified or flagged
- Configuration consistency: Ports, URLs, or service names hardcoded in `docker-compose.yaml`, `Dockerfile`, or `config/` must match what `package.json` scripts and env vars reference.
- Documentation accuracy: JSDoc comments, README text, test descriptions, and inline comments must match actual behavior

## TypeScript-specific code quality

For `.ts` and `.tsx` files, check for:

- **`any` leaks**: Any use of `any` that could be replaced with a proper type, `unknown`, or a generic. Each `any` is a hole in the type system. `as any` to silence a compiler error is almost always a bug in disguise.
- **Unchecked `as` casts**: Type assertions that narrow without a runtime guard. Example: `const user = data as User` without validating `data` actually matches `User`. Prefer type guards or schema validation (e.g., zod).
- **Promise handling**: Every `async` function call or Promise must be `await`ed, returned, or explicitly voided with `void promise`. Unhandled promises silently swallow errors and are a top source of production mystery failures.
- **Floating promises in Express/Next handlers**: An `async` function passed to `app.get()` or used as a Next.js API route that throws will NOT be caught by Express/Next—it becomes an unhandled rejection. Verify error boundaries exist.
- **`===` vs `==`**: All comparisons must use strict equality. Flag any `==` or `!=` usage.
- **Mutable default parameters**: Function parameters with mutable default values (e.g., `function foo(opts = {})`) can share state across calls if the default is mutated. Ensure defaults are not mutated.
- **Import hygiene**: All imports must use the `@/` absolute path convention per project rules. No relative imports (`../`) reaching outside the current directory's subtree. `import type` must be used for type-only imports.
- **Dead exports**: Exported functions, types, or constants that are not imported anywhere else in the codebase. Run `grep -r` to verify usage.
- **Implicit return types on exported functions**: Exported functions should have explicit return type annotations. Inferred returns leak implementation details and can silently break callers when the implementation changes.

## Performance and reliability (HOT PATH)

These are the highest-priority review checks. Every issue found here is 🔴 Critical or 🟠 High by default.

### Blocking the event loop

Node.js is single-threaded. Any synchronous work in a request handler, middleware, or server-side Next.js function blocks ALL concurrent requests. Flag any of these on a code path reachable from an HTTP request:

- **Synchronous file system calls**: `fs.readFileSync`, `fs.writeFileSync`, `fs.existsSync`, `fs.statSync`, `fs.readdirSync`, `fs.accessSync`, or any `*Sync` method from `fs` or `node:fs`. These must use their async counterparts (`fs.promises.*` or callback-based) or be moved to build-time/startup-only code.
- **Synchronous child processes**: `execSync`, `spawnSync`, `execFileSync` in request-handling code.
- **CPU-intensive computation**: `JSON.parse()` on unbounded/user-controlled input, large regex matches, synchronous crypto (`crypto.pbkdf2Sync`, `crypto.scryptSync`, `crypto.randomBytes` without callback), or tight loops iterating over large datasets. These should be streaming, chunked, or offloaded to a worker thread.
- **Synchronous `require()`**: Dynamic `require()` calls at request time (not at module load). `require()` is synchronous and hits the filesystem on first call.
- **Blocking iteration patterns**: `Array.prototype.sort()`, `.filter().map().reduce()` chains on arrays that could be large (e.g., all pages in the docs site). Ask: what is the upper bound of this array's length?

### File IO on the hot path

Any file read/write reachable from an HTTP request handler is suspect. Check for:

- **Unbounded file reads**: `fs.readFile` (async or sync) on files whose size is not bounded. Reading a multi-megabyte file into memory per request is a DoS vector. Prefer streaming with `fs.createReadStream` and pipe to the response.
- **Repeated reads of the same file**: Files read on every request that could be read once at startup and cached. Example: reading a YAML config file, parsing markdown, or loading a JSON data file inside a request handler instead of at module initialization.
- **No error handling on file operations**: `fs.readFile` or `fs.createReadStream` without handling `ENOENT`, `EACCES`, or `EMFILE` (too many open files). Missing error handling on streams is especially dangerous—an uncaught `'error'` event crashes the process.
- **`fs.watch`/`fs.watchFile` in production**: File watchers are appropriate in development but leak file descriptors in production. Verify they are gated behind `NODE_ENV === 'development'` or similar.
- **Temporary file cleanup**: Code that writes temp files (`/tmp`, `os.tmpdir()`) must clean them up in a `finally` block. Missing cleanup under error paths causes disk exhaustion over time.

### Caching correctness

In-memory caches are the #1 source of subtle production bugs. For any caching (in-memory `Map`/`Object`, LRU, `node-cache`, module-level variables, Next.js `unstable_cache`, HTTP cache headers), verify:

- **Unbounded growth**: Any `Map`, `Set`, `Object`, or array used as a cache that grows without eviction. Module-level `const cache = new Map()` that is populated on each unique request key but never pruned will eventually OOM the process. Require an eviction strategy (LRU, TTL, max size) or justify why the keyspace is bounded.
- **Missing cache invalidation**: Cached data derived from mutable sources (database, file system, external API) with no TTL or invalidation mechanism. Ask: when the source data changes, how does the cache learn about it?
- **Cache key collisions**: Cache keys that do not fully encode the request context. Example: caching by `pathname` alone when the response also varies by `version`, `language`, or user role. Two different users hitting the same cache key get each other's data.
- **Caching user-specific data globally**: Any cache that stores per-user or per-session data in a module-level variable. This leaks data between requests/users in the same process. In Next.js, also check for accidentally caching inside a shared server component module.
- **Stale reads after writes**: Code that writes to a data source then immediately reads from a cache that still holds the old value. Verify write-through or cache-bust-on-write semantics.
- **Cache stampede**: When a popular cache entry expires, many concurrent requests may simultaneously compute the same expensive value. Check if there is a lock/dedup mechanism for expensive recomputation.
- **Next.js-specific caching pitfalls**:
  - `fetch()` in server components is cached by default. Verify `{ cache: 'no-store' }` or `{ next: { revalidate: N } }` is set appropriately for data that changes.
  - `unstable_cache` keys must be unique and include all parameters that affect the result.
  - Static generation caching persists across deploys unless `revalidate` is configured.

### Memory leaks

A memory leak in a long-running Node.js server is a ticking time bomb. For any new code, check:

- **Event listener accumulation**: `emitter.on()` or `addEventListener()` called in a request handler or repeated code path without a corresponding `removeListener()` / `removeEventListener()`. Each request adds a listener that is never removed. Node warns at 11 listeners but the damage is done earlier. Also check for `.once()` where `.on()` was intended (and vice versa).
- **Uncleared timers**: `setInterval()` or `setTimeout()` created in request-scoped code without `clearInterval()`/`clearTimeout()` in cleanup/error paths. `setInterval` is especially dangerous—if the handle is lost, the interval runs forever.
- **Closure retention**: Functions or callbacks that close over large objects (request/response bodies, parsed HTML trees, database result sets) and are then stored in a long-lived structure (module-level cache, event emitter, global array). The large object cannot be GC'd as long as the closure is reachable.
- **Stream pipe leaks**: `stream.pipe(dest)` without error handling. If the source errors, the destination is not automatically cleaned up (and vice versa). Use `pipeline()` from `node:stream/promises` which handles cleanup. Also check for readable streams created but never consumed (they buffer in memory).
- **Global/module-level arrays and maps used as queues**: Arrays that `.push()` items but rely on a consumer to `.shift()` them. If the consumer fails or falls behind, the array grows without bound.
- **WeakRef misuse**: `WeakRef` / `FinalizationRegistry` used for correctness (not just optimization). GC timing is non-deterministic—code must not depend on weak references being collected at any particular time.
- **Express `req`/`res` captured in closures that outlive the request**: Middleware that stores `req` or `res` in a module-level structure (for logging, metrics, or tracing) must use weak references or clear the reference when the response finishes (`res.on('finish', ...)`).

## Security checks (Node/Next.js-specific)

For API routes, middleware, and server-side code, verify:

- **Error exposure**: Errors returned to clients should NOT include raw `error.message` or `error.stack` which may leak internal details (file paths, dependency versions, SQL queries). Use generic messages and log the real error server-side.
- **Fail-safe defaults**: Boolean conditions controlling access should fail closed (deny by default), not fail open. Example: `const isDev = env === 'development'` (allowlist) NOT `const isDev = env !== 'production'` (denylist—allows `staging`, `test`, typos, and `undefined`).
- **Input validation**: All user inputs from `req.query`, `req.body`, `req.params`, URL search params, and headers must be validated and typed before use. Never trust that a query param is a string—it could be an array.
- **Prototype pollution**: Object spread (`{ ...userInput }`) or `Object.assign({}, userInput)` on unsanitized user input can inject `__proto__`, `constructor`, or `prototype` keys. Flag any code that merges user-controlled objects into configuration or state.
- **Path traversal**: Any use of user-supplied strings in `fs.readFile`, `path.join`, `path.resolve`, or dynamic `import()` must be validated against traversal (`../`, encoded variants). `path.join` does NOT sanitize—`path.join('/safe', '../../etc/passwd')` resolves outside the root.
- **ReDoS**: Regular expressions applied to user input must not contain catastrophic backtracking patterns (nested quantifiers like `(a+)+`, `(a|a)*`). Flag any regex operating on untrusted strings.
- **SSRF in fetch/axios**: Server-side `fetch()` or `axios` calls using user-supplied URLs or URL components must validate the target is not an internal/private IP range (`127.0.0.1`, `169.254.169.254`, `10.*`, `172.16-31.*`, `192.168.*`, `[::1]`, `localhost`).
- **Environment variable trust**: Code should not branch on `process.env.NODE_ENV` for security decisions. `NODE_ENV` is a build/runtime hint, not a security boundary.

## Test quality checks

For test files (`*.test.ts`, `*.spec.ts`, files under `tests/`):

- **Test isolation**: Tests must not depend on execution order or shared mutable state. Each test should set up and tear down its own state.
- **Assertion quality**: Tests should assert on observable outputs (return values, HTTP status codes, response bodies, DOM state) not implementation details. `expect(spy).toHaveBeenCalled()` without checking *what* it was called with is a weak assertion.
- **Missing negative tests**: For every happy path, ask: where is the test for invalid input, network failure, timeout, or permission denied?
- **Snapshot overuse**: Snapshots that capture large objects or HTML trees are brittle and encourage "update snapshot" without review. Flag new snapshots over 20 lines.
- **Hardcoded ports/URLs in tests**: Tests that hardcode `localhost:4000` or similar will fail in parallel or in CI environments with different port assignments.
- **Async test correctness**: Verify `async` tests actually `await` the operations they are testing. A test that creates a promise but does not await it will always pass (it resolves after the test completes).

## Test coverage check

For new code in implementation files:

1. Identify new exported functions, types, and config fields
2. Check that corresponding test files exist and cover the new code
3. Flag any new config fields (especially `required` ones) that lack test coverage
4. For each modified module with new or changed code, check existing tests cover the new paths. Flag any new exported function with no corresponding test as a critical gap.

## External call performance

For any code making outbound HTTP requests (`fetch`, `axios`, `node-fetch`, or any HTTP client):

- **Missing timeouts**: Every outbound `fetch()` call on a request-handling code path MUST use `fetchWithTimeout` (from `@/frame/lib/fetch-utils`) or provide an `AbortSignal` with a timeout. A `fetch()` without a timeout will hang the request (and the event loop slot) indefinitely if the remote server is slow or unresponsive. Note: `fetchWithTimeout` clears its timer when headers arrive—it does NOT cover slow body streaming. If the response body is large or streamed, additional timeout handling is needed.
- **Missing retries with backoff**: Calls to external services that can transiently fail should use `fetchWithRetry` (from `@/frame/lib/fetch-utils`). Bare `fetch()` with a try/catch that gives up on the first failure will cause unnecessary user-facing errors during brief upstream blips.
- **Unbounded retry loops**: If retries ARE used, verify there is a maximum retry count and that backoff is exponential (not fixed-delay). `fetchWithRetry` already handles this, but custom retry logic might not.
- **N+1 fetch patterns**: Sequential `await fetch()` calls inside a `for`/`for...of`/`.forEach`/`.map` loop. If the iterations are independent, they should be parallelized with `Promise.all()` (with a concurrency limit if the count is unbounded). Example anti-pattern:
  ```typescript
  // 🔴 BAD: 50 sequential round-trips
  for (const id of ids) {
    const data = await fetch(`/api/${id}`)
  }
  // ✅ GOOD: parallel with concurrency limit
  await Promise.all(ids.map(id => fetch(`/api/${id}`)))
  ```
- **Missing error classification**: Fetch errors should distinguish between network failures (retry-safe), 4xx client errors (do not retry, likely a bug), and 5xx server errors (retry-safe). Code that retries on 400 or 404 is wasting time and masking bugs.
- **Response body consumption**: Every `fetch()` response body MUST be consumed (`.json()`, `.text()`, `.arrayBuffer()`, or explicitly `.body?.cancel()`). Unconsumed response bodies leak sockets and can exhaust the connection pool. This is especially easy to miss in error paths where the response is discarded.

## Middleware and Express checks

For Express middleware and request handlers:

- **Middleware ordering**: New middleware must be inserted at the correct position in the chain. Auth/security middleware must run before route handlers. Logging middleware should capture both request and response.
- **Missing `next()` calls**: Every middleware must call `next()` or send a response. A middleware that conditionally calls `next()` but has a code path that does neither will hang the request.
- **Response after `res.end()`**: Verify no code path calls `res.json()`, `res.send()`, or `res.redirect()` after the response has already been sent. This causes "headers already sent" errors.
- **Memory leaks in closures**: Middleware closures that capture large objects (request bodies, database connections) and store them in module-level caches or event listeners that are never cleaned up.
- **Streaming response handling**: If using `res.write()` for streaming, verify error handling on the writable stream and that the response is properly ended in all code paths (including errors).

## Observability and metric hygiene

This project uses `hot-shots` StatsD (prefix `docs.`, global tag `app:docs`) configured in `src/observability/lib/statsd.ts`, and a structured logger in `src/observability/logger/index.ts`. Every review must enforce these standards:

### Metric cardinality (🔴 Critical when violated)

High-cardinality tags are the #1 cause of metric cost explosions and Datadog aggregation failures. For ANY new `statsd.increment()`, `statsd.histogram()`, `statsd.gauge()`, or `statsd.asyncTimer()` call, verify:

- **No user-controlled values in tags**: Tags like `path:${req.path}`, `url:${req.url}`, `query:${req.query.q}`, or `user:${userId}` create a unique time series per unique value. With thousands of docs pages and infinite query strings, this quickly creates millions of time series. Tags must use bounded, enumerable values (e.g., `product:actions`, `status:200`, `cache:hit`).
- **Audit existing high-cardinality patterns being copied**: The codebase already has some `path:${req.pagePath}` tags (in `abort.ts`, `handle-errors.ts`, `render-page.ts`). New code MUST NOT copy this pattern without justification. If the tag is on a low-volume error/abort path, it may be acceptable. If it is on a hot path (every request), it is not.
- **Tag value normalization**: If a path-like tag is genuinely needed, it must be normalized to a bounded set. Example: use the top-level product category (`actions`, `copilot`, `rest`) not the full URL path. Use route patterns (`/[version]/[product]/[...slug]`) not resolved paths.
- **New metric names**: Every new metric name should follow the existing `docs.<domain>.<action>` convention (e.g., `docs.middleware.render_page`, `docs.cache.lookup`). Inconsistent naming fragments the metric namespace.
- **Missing metrics on new code paths**: New middleware, new API routes, and new cache layers should emit at minimum:
  - A counter for requests/invocations
  - A timer/histogram for latency (use `statsd.asyncTimer()` for async functions)
  - For caches: hit/miss counter and size gauge (see `src/frame/lib/get-remote-json.ts` for the pattern)
- **Tag consistency**: Tags on related metrics must use the same key names and value sets. Example: if one metric uses `cache:remote_json` and another uses `cache_name:remote_json`, dashboards and alerts will miss the correlation.

### Structured logging

- **No `console.log`/`console.warn`/`console.error` in new code**: The project has a structured logger (`import { createLogger } from '@/observability/logger'`). All new logging must use it. `console.*` calls bypass log levels, structured context (request UUID, path, version), and production logfmt formatting. Flag any new `console.*` call in `src/` that is not inside a test file.
- **Logger instantiation**: Each module should create its own logger with `const logger = createLogger(import.meta.url)` so logs include the source file. Flag loggers created without `import.meta.url`.
- **Log level correctness**: `logger.error()` is for unexpected failures that need human attention. `logger.warn()` is for degraded but recoverable situations. `logger.info()` is for significant state changes. `logger.debug()` is for developer troubleshooting. Flag misuse—especially `logger.info()` on every request (that is debug-level noise) or `logger.error()` for expected conditions (e.g., 404s).
- **Sensitive data in logs**: Log messages must not include auth tokens, cookies, full request bodies, or user-identifiable information. Check for `logger.error('Failed', { headers: req.headers })` or similar patterns that dump entire objects.

## Next.js-specific checks

For Next.js application code, check for:

- **Client/server boundary violations**: Code importing server-only modules (e.g., `fs`, `path`, database clients, `process.env` secrets) in files that end up in the client bundle. Verify `'use client'` / `'use server'` directives are correct.
- **Data fetching in wrong context**: `getServerSideProps` or server components doing work that should be client-side (or vice versa). Watch for `useEffect` fetches that duplicate server-side data.
- **Middleware correctness**: Next.js middleware runs on every matched request. Verify `matcher` config is not overly broad. Expensive operations in middleware multiply across every request.
- **Dynamic route parameter injection**: `params` from dynamic routes (`[slug]`, `[...catchAll]`) are user-controlled strings. They must be validated/sanitized before use in database queries, file paths, or rendered HTML.
- **Missing error boundaries**: New pages or complex component trees should have error boundaries. An unhandled throw in a React Server Component crashes the entire page.
- **Accidental client bundle bloat**: Importing large server-side libraries in shared modules that are also imported by client components. Check import chains.
- **`headers()`, `cookies()`, `searchParams` in cached contexts**: These dynamic APIs opt a route out of static generation. Verify the author intended dynamic rendering.

## Dependency security

When `package.json` or `package-lock.json` is changed, check for:

- **New dependencies with known vulnerabilities**: Run `npm audit --json` (or check the npm advisory database) for any newly added package. Flag any dependency introduced with known critical or high severity CVEs.
- **Unnecessary new dependencies**: Before accepting a new `dependencies` entry, ask: does the project already have a library that does this? Adding a package for something achievable with existing deps or a few lines of code increases supply chain risk and bundle size.
- **`dependencies` vs `devDependencies`**: Packages used only in tests, linting, or build tooling must be in `devDependencies`, not `dependencies`. Production `dependencies` are installed in the Docker image and loaded at runtime—every unnecessary entry increases attack surface and image size.
- **Pinning and lockfile hygiene**: New entries should have a semver range consistent with the rest of `package.json` (typically `^`). Verify `package-lock.json` is updated and committed alongside `package.json` changes. A `package.json` change without a corresponding lockfile update is a red flag.
- **Postinstall scripts**: Check if a newly added package has `postinstall`, `preinstall`, or `install` scripts by inspecting its `package.json` in `node_modules/`. These scripts run arbitrary code at install time and are a common supply-chain attack vector.
- **Deprecated packages**: Flag any newly added dependency that npm marks as deprecated. Deprecated packages receive no security updates.

## Bash script checks

For shell scripts, check for:

- Working directory assumptions (e.g., `cat .nvmrc` without resolving script dir first)
- Fragile version parsing (e.g., grepping `package.json` instead of using `node -p "require('./package.json').version"`)
- Hard-coded env var requirements that may not be set in all environments (local, CI, production)
- Sourcing files (`. script/foo` or `source script/foo`) without checking the file exists first
- Suppressing stderr with `2>/dev/null` on commands whose failure matters
- `set -e` gotchas: command substitution inside `echo`, `local`, or `readonly` masks the substitution's exit code

## Docker/container checks

For `Dockerfile` and `docker-compose.yaml`:

- Multi-stage build layers that copy `node_modules` from a builder stage must ensure the builder used the same platform/architecture as the runtime stage
- `COPY package*.json ./` before `npm ci` to preserve layer caching. Copying the entire source tree first invalidates the dependency cache on every code change
- Running as `root` in the final stage without dropping privileges
- Missing `NODE_ENV=production` in the runtime stage (affects dependency installation, Next.js optimizations, and Express behavior)
- Health check endpoints that always return 200 without actually verifying service readiness
- Secrets or tokens passed as `ARG`/`ENV` that persist in image layers

## Verification requirements

CRITICAL: Before reporting ANY issue, you MUST verify it exists in the actual file.

Git diff output can be misleading due to:
- Long lines wrapping in terminal display
- Diff excerpts not showing the complete file
- Display artifacts from terminal width

For each potential issue identified in a diff:

1. Use `read_file` or `grep` to verify the issue exists in the actual file
2. Only report issues that are confirmed in the source file
3. If verification shows the issue doesn't exist, discard it silently

Example verification commands:
```bash
# Verify a pattern exists
rg -n "suspected_issue" path/to/file

# Verify something is missing at end of file
tail -10 path/to/file

# Check if a function is exported but never imported
rg -l "import.*functionName" src/

# Verify an `any` type exists
rg -n ": any\b" path/to/file

# Check for unhandled promises
rg -n "(?:^|\s)(?!await\s)(?!return\s)(?!void\s)\w+\(" path/to/file.ts
```

Do NOT report issues based solely on how the diff appears in terminal output.

## Output format

1. First, write all issues to a markdown file at `tmp/copilot-review-{branch-name}.md` where `{branch-name}` is the current git branch name (replace `/` with `-` in the branch name)
   - Example: branch `jmoody/my-feature` → `tmp/copilot-review-jmoody-my-feature.md`
2. The report file should contain:
   - A summary section with total issue count by severity (🔴 Critical, 🟠 High, 🟡 Medium, 🔵 Low)
   - All issues with file paths and line numbers
3. Then present each issue ONE AT A TIME in the chat, starting with the highest severity
4. For each issue, wait for user feedback before proceeding to the next
5. Format each issue as:

```markdown
## Issue N: [Brief title] [🔴|🟠|🟡|🔵]

**File**: path/to/file:line
**Description**: What the issue is
**Impact**: What happens if this is not fixed (be specific—"could crash" is not enough, say *when* and *how*)
**Suggestion**: How to fix it (include a code snippet if the fix is non-obvious)
```

After presenting each issue, ask:

> How would you like to proceed?
> 1. Fix it for me
> 2. I'll fix it differently
> 3. More details please
> 4. Show me other options
> 5. Skip to next issue
