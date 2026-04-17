---
applyTo: "**"
---

# Copilot instructions for docs.github.com

This repository contains code to run the GitHub Docs site on docs.github.com, as well as the content that the site displays. We write the code in JavaScript and TypeScript, and we write the content primarily in Markdown.

## Creating a pull request

When you create a pull request:

1. **Always** make the first line of the PR description the following (in italics):

   `_GitHub Copilot generated this pull request._`
  
2. Optionally, you may include a collapsed section summarizing the prompt or discussion with Copilot:

   ```markdown
   <details><summary>Prompt summary - submitted by @GITHUB-USER-ID</summary>
  
   > [Prompt summary text here]
  
   </details>
   ```

   This helps reviewers understand the context and intent behind the automated changes.
   
3. Label with "llm-generated". 
4. If an issue exists, include "fixes owner/repo#issue" or "towards owner/repo#issue" as appropriate. 
5. Always create PRs in **draft mode** using `--draft` flag.

## Accessing docs.github.com content programmatically

When you need to read GitHub Docs, use these endpoints on `docs.github.com` in order of preference:

1. `/llms.txt` — Start here. Returns a structured overview of the site with links to pagelist endpoints for each product version.
2. `/api/pagelist/:lang/:version` — Returns a list of all pages for a given language and version (e.g., `/api/pagelist/en/free-pro-team@latest`). Use `/api/pagelist/versions` and `/api/pagelist/languages` for available options.
3. `/api/search/v1?query=...&language=...&version=...&client_name=...` — Search docs content (e.g., `/api/search/v1?query=actions&language=en&version=free-pro-team@latest&client_name=copilot`).
4. `/api/article/body?pathname=...` — Returns the rendered markdown body of a page. Handles all page types including REST, GraphQL, and webhook reference pages.
