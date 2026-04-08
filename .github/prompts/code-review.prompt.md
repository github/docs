# Copilot code review prompt
#
# This is a VS Code prompt file. Invoke it on-demand in Copilot Chat
# with /code-review. It is NOT automatically loaded — users choose to
# use it. For always-on instructions, see .github/copilot-instructions.md.

Review these code changes carefully. Your job is to find bugs, security holes, performance traps, and logic errors that the author missed.

DO NOT MODIFY ANY FILES. Only provide feedback and suggestions.

## Finding changes to review

Use git to find the files changed on this branch compared to main:

```bash
git diff --name-only $(git merge-base main HEAD)...HEAD
```

Only review committed changes returned by this command. Do not review staged, unstaged, or untracked files.

## Coding standards

**CRITICAL**: Before reviewing any code, read each of these instruction files in full:

- .github/instructions/all.instructions.md (general project guidelines)
- .github/instructions/code.instructions.md (for TypeScript/JavaScript and code files)
- .github/instructions/content.instructions.md (for .md content files)
- .github/instructions/style-guide-summary.instructions.md (for documentation style)

Apply the standards from these files when reviewing changed code.

## Paths to ignore

IGNORE these paths entirely:

- node_modules/*
- .next/*
- tmp/*
- tsconfig.tsbuildinfo

## Focus areas

- Violations of the project's coding standards (especially: all new code must be TypeScript, use `@/` absolute imports, scripts in `package.json` that execute TypeScript source files must use `tsx`)
- Bugs and logic errors
- Error handling issues
- Security concerns (see Security section below)
- Defensive programming: check for `undefined`/`null` access that will throw at runtime, type assertions (`as`, `!`) that bypass the type system without justification
- Configuration consistency: ports, URLs, or service names in `docker-compose.yaml`, `Dockerfile`, or `config/` must match what `package.json` scripts and env vars reference
- Documentation accuracy: JSDoc comments, README text, test descriptions, and inline comments must match actual behavior

## Content and Liquid checks

For changes to `.md` files in `content/` or `data/`:

* **Liquid variables**: Always use `{% data variables.product.* %}` for product names — never hardcode. Check `data/variables/` for existing variables before introducing hardcoded text.
* **Internal links**: Must use `[AUTOTITLE](/path/to/article)` — never hardcode article titles in link text.
* **Bullet lists**: Must use `*` (asterisks), never `-` (hyphens).
* **Frontmatter**: Verify `versions`, `type`, `layout`, and other frontmatter fields conform to the schema in `src/frame/lib/frontmatter.ts`.
* **Versioning**: `ifversion` tags must use valid version names. Check for unclosed Liquid tags.
* **Reusables**: If the same text appears in multiple articles, it should be a reusable in `data/reusables/`.

## Frontmatter schema changes

When `src/frame/lib/frontmatter.ts` is modified:

- Verify the schema change is reflected in `src/types/types.ts`
- Check if content linter rules in `src/content-linter/` need updating
- Verify fixture content in `src/fixtures/fixtures/` is updated to match
- Check if `content/contributing/writing-for-github-docs/using-yaml-frontmatter.md` needs updating

## Content linter rule changes

When adding or modifying rules in `src/content-linter/`:

- Read `src/content-linter/README.md` for conventions
- Verify the rule is registered in `src/content-linter/lib/linting-rules/index.ts`
- Verify the rule is configured in `src/content-linter/style/github-docs.ts`
- Check that `data/reusables/contributing/content-linter-rules.md` is updated with the rule description

## TypeScript-specific quality

For `.ts` and `.tsx` files:

* **`any` leaks**: Flag `any` that could be replaced with a proper type or `unknown`. `as any` to silence a compiler error is almost always a bug.
* **Promise handling**: Every `async` function call must be `await`ed, returned, or explicitly voided. Unhandled promises silently swallow errors.
* **Import hygiene**: All imports must use `@/` absolute paths. `import type` must be used for type-only imports.
* **Implicit return types on exported functions**: Exported functions should have explicit return type annotations.

## Performance on request paths

This is a Node.js/Next.js (Pages Router) application serving docs.github.com. Any synchronous work in a request handler blocks concurrent requests.

* **Synchronous file system calls**: `readFileSync`, `existsSync`, `writeFileSync`, etc. in request-handling code (middleware, API routes). These should use async counterparts or be cached at startup. Note: the codebase has some existing sync calls in middleware (e.g., `favicons.ts`, `find-page.ts`) — flag only NEW sync calls on hot paths.
* **Unbounded iteration**: `.sort()`, `.filter().map()` chains on arrays that could be large (e.g., all pages). Ask: what is the upper bound?
* **Unbounded caches**: Module-level `Map` or `Object` used as a cache that grows without eviction. Require an eviction strategy or justify why the keyspace is bounded. See `src/frame/lib/get-remote-json.ts` for the existing caching pattern.
* **Missing timeouts on outbound fetch**: Server-side `fetch()` calls on request paths should use `fetchWithRetry` from `@/frame/lib/fetch-utils` or provide an `AbortSignal` with a timeout. Bare `fetch()` without a timeout will hang indefinitely if the remote is unresponsive.

## Security checks

For API routes, middleware, and server-side code:

* **Error exposure**: Errors returned to clients should NOT include `error.message` or `error.stack`. Use generic messages and log the real error server-side.
* **Input validation**: All user inputs from `req.query`, `req.body`, `req.params` must be validated. A query param could be an array, not a string.
* **Path traversal**: User-supplied strings used in `fs.readFile`, `path.join`, or dynamic `import()` must be validated. `path.join('/safe', '../../etc/passwd')` resolves outside the root.
* **Fail-safe defaults**: Boolean conditions controlling access should fail closed. Use `env === 'development'` (allowlist) not `env !== 'production'` (denylist).

## Observability

This project uses `hot-shots` StatsD (prefix `docs.`, global tag `app:docs`) configured in `src/observability/lib/statsd.ts`, and a structured logger via `createLogger` from `src/observability/logger/index.ts`.

* **No `console.log` in new code**: Use `createLogger(import.meta.url)` instead. `console.*` calls bypass log levels and structured context.
* **Metric cardinality**: Tags on `statsd.increment()` / `statsd.histogram()` calls must use bounded, enumerable values. Never use `path:${req.path}` or user-controlled values — they create unbounded time series.
* **New metric names**: Follow the `docs.<domain>.<action>` convention (e.g., `docs.middleware.render_page`).

## Test quality

For test files (`*.test.ts`, `*.spec.ts`, files under `tests/`):

* **Test isolation**: Tests must not depend on execution order or shared mutable state.
* **Assertion quality**: Assert on observable outputs, not implementation details.
* **Async test correctness**: Verify `async` tests actually `await` the operations they are testing.
* **Missing negative tests**: For every happy path, ask: where is the test for invalid input or failure?

## Verification

Before reporting ANY issue, verify it exists in the actual file using `rg` (ripgrep) or by reading the file. Git diff output can be misleading due to wrapping and context. Do NOT report issues based solely on diff appearance.

## Output format

For each issue found:

```markdown
## [🔴|🟠|🟡|🔵] [Brief title]

**File**: path/to/file:line
**Description**: What the issue is
**Impact**: What happens if this is not fixed
**Suggestion**: How to fix it (include a code snippet if non-obvious)
```

Severity guide:
- 🔴 Critical: Will cause runtime errors, security vulnerabilities, or data loss
- 🟠 High: Likely to cause bugs or performance issues under normal usage
- 🟡 Medium: Code quality issue that could lead to future bugs
- 🔵 Low: Style or maintainability concern
