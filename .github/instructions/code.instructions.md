---
applyTo: "src/**,.github/**,config/**,.devcontainer/**,**Dockerfile,package*.json"
---

# Copilot code instructions for docs.github.com

For code reviews, follow guidelines, tests, and validate instructions. For creating or updating pull requests or branches, follow the steps instructions.

## Guidelines

- If available, use ripgrep (`rg`) instead of `grep`.
- Make sure to always _escape backticks_ when using gh cli.
- All scripts should be listed in `package.json` and use `tsx`.
- Whenever you create or comment on an issue or pull request, indicate you are an LLM.
- Be careful fetching full HTML pages off the internet. Prefer to use gh cli whenever possible for github.com. Limit the number of tokens when grabbing HTML.
- Avoid pull requests with over 300 lines of code changed. When significantly larger, offer to split up into smaller pull requests if possible.
- All new code should be written in TypeScript and not JavaScript.
- We use absolute imports, relative to the `src` directory, using the `@` symbol. For example, `getRedirect` which lives in `src/redirects/lib/get-redirect.ts` can be imported with `import getRedirect from '@/redirects/lib/get-redirect'`. The same rule applies for TypeScript (`.ts`) imports, e.g. `import type { GeneralSearchHit } from '@/search/types'`

## Tests

We use `vitest` to write unit tests. Tests live in their own files in the `tests` subdirectory of a source (src) directory, e.g. `src/search/tests/api-ai-search.ts`. For integration tests, we can use the mock server in `src/tests/mocks/start-mock-server.ts` to mock external requests. For UI rendering tests, we use `playwright` and write tests in `src/fixtures/tests/playwright-rendering.spec.ts`

- `npm run test`: For all unit tests
  - You can pass specific paths, e.g. `npm run test -- src/search/tests/ai-search-proxy`
  - You can add `--silent=false` to include `console.log` debugging.
- `npm run build && npm run playwright-test -- playwright-rendering`: You need to build for changes outside of the test to be picked up. We use playwright for all rendering and end-to-end tests
  - You can add `--ui` to keep open `localhost:4000` which can be viewed in a simple browser for debugging UI state.
- `npm run dev` to start the development server on `localhost:4000`.
- `ROOT=src/fixtures/fixtures TRANSLATIONS_FIXTURE_ROOT=src/fixtures/fixtures/translations vitest src/fixtures/tests` for tests that involve fixtures.

## Validate

Run the following commands to validate your changes:

- `npm run tsc`
- `npm run build`
- `npm run prettier`
- `npm run lint`: you can include `-- --fix`

## Steps

0. Ask the human if they would like you to follow these steps.
1. If this is new work, make sure you have the latest changes by running `git checkout main && git pull`. If this is existing work, update the branch you are working on with the head branch -- usually `main`.
2. If the human provides a GitHub issue, use gh cli to read the issue and all comments.
3. Begin by evaluating impact, effort, and estimate non-test lines of code that will change. Ask for more context and examples if needed.
4. If you are running in agentic mode, _stop_ at this point and request approval from the human.
5. If you need to add or change tests, work on tests before implementing.
6. Implement the changes needed. If you are running in agentic mode, _stop_ and ask questions at decision points. Please list the options, pros and cons for each decision needed.
7. Validate your changes before making any commits. See "Validate".
8. Validate that any new or changed tests pass. See "Tests".
9. Validate that these changes meet our guidelines. See "Guidelines".
10. If you are running in agentic mode, _stop_ at this point and request review before continuing. Suggest how the human should review the changes.
11. If a branch and pull request already exist, commit and push, then _concisely_ comment on the pull request that you are an LLM and what changes you made and why. 
12. If this is new work and no pull request exists yet, make a pull request:
    - label "llm-generated"
    - draft mode
    - include "fixes owner/repo#issue" or "towards owner/repo#issue" as appropriate
13. If you are in agentic mode, offer to wait for CI to run and check that it passes. If the human agrees, verify in CI: `sleep 240 && gh pr checks $number`. Address all failures, don't assume they're flakes.
14. If you are in agentic mode, offer to do any or all of:
    - mark the pull request as ready,
    - assign the issue to the human if it is not already assigned, 
    - _concisely_ comment on the issue explaining the change, indicating you are an LLM.
