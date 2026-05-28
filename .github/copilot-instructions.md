# Copilot instructions for docs.github.com

This repository powers the GitHub Docs site (docs.github.com). It contains both the Next.js application code (TypeScript) and the documentation content (Markdown).

## Instruction files

Read the relevant instruction files in `.github/instructions/` before making changes:

* **`all.instructions.md`** — General project guidelines, PR conventions, and how to access docs.github.com content programmatically. Applies to all files.
* **`code.instructions.md`** — TypeScript/JavaScript coding standards, test commands (per-suite with environment variables), and validation steps. Read this before any code change.
* **`content.instructions.md`** — Markdown content conventions, Liquid variable usage, reusables, and linking with `[AUTOTITLE]`. Read this before any content change.
* **`style-guide-summary.instructions.md`** — Condensed docs style guide covering voice, headers, lists, alerts, and formatting. Read this before any content change.

## Key rules

* All new code must be TypeScript (not JavaScript).
* Use `@/` absolute imports (e.g., `import getRedirect from '@/redirects/lib/get-redirect'`).
* Do not run `npm test` without a path argument — always target a specific suite.
* Run `npm run build` before running tests.
* Do not commit to `main`. Create a branch and open a draft PR.
* Use Liquid variables for product names — never hardcode them. Check `data/variables/`.
* Use `[AUTOTITLE](/path/to/article)` for internal links — never hardcode article titles.
