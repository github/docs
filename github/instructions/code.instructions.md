---
applyTo: "src/**,.github/**,config/**,.devcontainer/**,**Dockerfile,package*.json"
---

# Copilot code instructions for docs.github.com

For code reviews and for creating or updating pull requests, follow the guidelines in the sections below.

## Guidelines

- Before you make a new branch, make sure you have the latest changes by running `git checkout main && git pull`.
- If available, use ripgrep (`rg`) instead of `grep`.
- When using gh cli in double-quoted strings, escape backticks to prevent bash command substitution. In single-quoted strings, backticks do not need escaping.
- All scripts should be listed in `package.json` and use `tsx`.
- Be careful fetching full HTML pages off the internet. Prefer to use MCP or gh cli whenever possible for github.com. Limit the number of tokens when grabbing HTML.
- Avoid pull requests with over 300 lines of code changed. When significantly larger, offer to split up into smaller pull requests if possible.
- All new code should be written in TypeScript and not JavaScript.
- We use absolute imports, relative to the `src` directory, using the `@` symbol. For example, `getRedirect` which lives in `src/redirects/lib/get-redirect.ts` can be imported with `import getRedirect from '@/redirects/lib/get-redirect'`. The same rule applies for TypeScript (`.ts`) imports, e.g. `import type { GeneralSearchHit } from '@/search/types'`
- For updates to the content linter, read important information in `src/content-linter/README.md`.
- Do not use git force push, and avoid git rebase.
- When reading issues and pull requests, read all comments as well.
- When you are updating an existing pull request, after you commit and push, _concisely_ comment on the pull request that you are GitHub Copilot and what changes you made and why.
- When running in agentic mode, offer the human the option to wait for and review CI checks and automatic Copilot code review comments.

## Tests

We use `vitest` to write unit tests. Tests live in their own files in the `tests` subdirectory of a source (src) directory, e.g. `src/search/tests/api-ai-search.ts`. For integration tests, we can use the mock server in `src/tests/mocks/start-mock-server.ts` to mock external requests. For UI rendering tests, we use `playwright` and write tests in `src/fixtures/tests/playwright-rendering.spec.ts`

**Important: Do NOT run `npm test` without a path argument.** Tests must be run per-suite because different suites require different environment variables. Running all tests at once will produce many false failures.

**Important: Run `npm run build` before running tests.** Many test suites depend on Next.js build artifacts. Without a build, tests may fail with `Could not find a production build` or other confusing errors.

### Running tests by suite

Always target the specific suite for the code you changed:

```shell
npm test -- src/<suite-name>/tests/
```

For example: `npm test -- src/search/tests/` or `npm test -- src/versions/tests/`

You can also target a single file: `npm test -- src/search/tests/ai-search-proxy.ts`

Add `--silent=false` to include `console.log` debugging output.

### Suites that require environment variables

Some test suites depend on fixture content or external services. These suites have dedicated npm scripts in `package.json` that set the required environment variables automatically:

```shell
npm run test:article-api
npm run test:fixtures
npm run test:landings
npm run test:languages    # requires Elasticsearch running
npm run test:search       # requires Elasticsearch running
```

For the `content-linter` suite, you can optionally scope linting to changed files by setting `DIFF_FILES` (space-separated list) or `DIFF_FILE` (path to a text file containing a space-separated list of changed files). Without these, the linter runs against all content:

```shell
DIFF_FILES="content/foo.md content/bar.md" npm test -- src/content-linter/tests/
```

All other suites (e.g., `versions`, `redirects`, `rest`, `frame`, `content-render`, `graphql`, etc.) can be run without special environment variables.

### Playwright (rendering and end-to-end tests)

- `npm run build && npm run playwright-test -- playwright-rendering`: You need to build for changes outside of the test to be picked up. We use playwright for all rendering and end-to-end tests.
  - You can add `--ui` to keep open `localhost:4000` which can be viewed in a simple browser for debugging UI state.

### Development server

- `npm run dev` to start the development server on `localhost:4000`.

## Validate

Run the following commands to validate your changes:

- `npm run tsc`
- `npm run build`
- `npm run prettier`
- `npm run lint`: you can include `-- --fix`

## Logger

Use `createLogger` from `@/observability/logger` instead of `console.log` in server-side code.

```typescript
import { createLogger } from "@/observability/logger";

const logger = createLogger(import.meta.url);

logger.debug("Detailed tracing");
logger.info("Normal event", { userId });
logger.warn("Recoverable issue");
logger.error("Failure", { error });
```

- Pass a plain object as the second argument to add structured context (emitted as logfmt in production).
- Never log secrets, tokens, or PII.
- Create loggers once at module scope, not inside functions.
- Do not use the logger in scripts (locally-run code); `console.log` is fine there.

## Code comments

- Comments explain _why_ and not _what_. Use variables, names, types, and structure to convey _what_ the code does. If the code doesn't need a _why_, don't write a comment.
- Document constraints, workarounds, unexpected dependencies, domain rules, user-visible consequences, security, ordering, and performance issues.
- Be concise. Keep the comment to a glance.
- Use active voice and active, specific verbs. Avoid phrases like "there is", "should", or vague "uses". Prefer "does x" over "is x". Do not hedge. If needed, write the action then the reason, such as "do X, so Y".
- Do not narrate, restate, or summarize the code.
- Avoid jargon, or define jargon if you must use it.
- Describe the current state. Avoid framing such as "now" or "recently". Do not include the previous state.
- In TypeScript and JavaScript, prefer `//` over `/*` comments. Only use `/*` if `//` makes the formatting too awkward or in JSX. Do not use JSDoc or TSDoc style comments.
- Do not use comments to add headings, dividers, steps, or other structures.
- Comments that need more than one line: break at sentence ends and clauses. Prettier does not reflow comment format.
- Avoid excessive formatting. Only use parentheses to refer to literal syntax. Do not use markdown-style formatting. Do not use emdashes. You may use uppercase to emphasize words, rarely.
- Keep comments inside a function body to a single line. Place multiline comments above the function.
- Do not reference issues, pull requests, or discussions in the `github` organization, such as numbers or URLs. Include the context directly in the comment or in a nearby markdown file. You may use a full URL to an issue in an external open source project.
- Do not reference line numbers or line counts. Do not reference specific versions unless a future version requires action.
- Do not leave TODO, FIXME, or HACK comments.
- Do not keep commented out code.
- You may label deliberately absent fields.
- You may write a simple input and output example for regular expressions. Use realistic data and not garbage like foo/bar or Alice/Bob.
- You may use internal cross-reference identifiers in comments, such as unique error codes.
- You may use tool directives such as `@ts-expect-error` or `eslint-disable` in rare cases.
- You may add legally required comments like license and copyright.
