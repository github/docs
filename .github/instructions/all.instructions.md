---
applyTo: "**"
---

# Copilot instructions for docs.github.com

This repository contains code to run the GitHub Docs site on docs.github.com, as well as the content that the site displays. We write the code in JavaScript and TypeScript, and we write the content primarily in Markdown.

## Creating a pull request

When you create a pull request:

1. **Always** make the first line of the PR description the following (in italics):

   `_Copilot Chat generated this pull request._`
  
2. Optionally, you may include a collapsed section summarizing the prompt or discussion with Copilot Chat:

   ```markdown
   <details><summary>Prompt summary - submitted by @GITHUB-USER-ID</summary>
  
   > [Prompt summary text here]
  
   </details>
   ```

   This helps reviewers understand the context and intent behind the automated changes.
   
3. Label with "llm-generated". 
4. If an issue exists, include "fixes owner/repo#issue" or "towards owner/repo#issue" as appropriate. 
5. Always _escape backticks_ when you use gh cli.
