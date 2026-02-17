## Creating and adding a skill

To create an agent skill you write a `SKILL.md` file and, optionally, other resources, such as supplementary Markdown files, or scripts, which you reference in the `SKILL.md` instructions.

To add a skill, you save the `SKILL.md` file, and any subsidiary resources, to a location where {% data variables.product.prodname_copilot_short %} knows to look for skills. This can be within a repository, or within your home directory.

1. Create a `skills` directory to store your skill and any others you may want to create in the future.

    For **project skills**, specific to a single repository, store your skill under `.github/skills` or `.claude/skills`.

    For **personal skills**, shared across projects, store your skill under `~/.copilot/skills` or `~/.claude/skills`.

1. Create a subdirectory for your new skill. Each skill should have its own directory (for example, `.github/skills/webapp-testing`).

   Skill subdirectory names should be lowercase and use hyphens for spaces.

1. In your skill subdirectory, create a `SKILL.md` file containing your skill's instructions.

   > [!IMPORTANT]
   > Skill files must be named `SKILL.md`.

   `SKILL.md` files are Markdown files with YAML frontmatter. In their simplest form, they include:

   * YAML frontmatter
     * **name** (required): A unique identifier for the skill. This must be lowercase, using hyphens for spaces. Typically, this matches the name of the skill's directory.
     * **description** (required): A description of what the skill does, and when {% data variables.product.prodname_copilot_short %} should use it.
     * **license** (optional): A description of the license that applies to this skill.
   * A Markdown body, with the instructions, examples and guidelines for {% data variables.product.prodname_copilot_short %} to follow.

1. Optionally, add scripts, examples or other resources to your skill's directory. 

   For example, if you were writing a skill for converting images between different formats, you might include a script for converting SVG images to PNG. The skill instructions should tell {% data variables.product.prodname_copilot_short %} when, and how, to use these resources.

### Example `SKILL.md` file

For a **project skill**, this file would be located in a `.github/skills/github-actions-failure-debugging` directory of your repository.

For a **personal skill**, this file would be located in a `~/.copilot/skills/github-actions-failure-debugging` directory.

```markdown copy
---
name: github-actions-failure-debugging
description: Guide for debugging failing {% data variables.product.prodname_actions %} workflows. Use this when asked to debug failing {% data variables.product.prodname_actions %} workflows.
---

To debug failing {% data variables.product.prodname_actions %} workflows in a pull request, follow this process, using tools provided from the {% data variables.product.github %} MCP Server:

1. Use the `list_workflow_runs` tool to look up recent workflow runs for the pull request and their status
2. Use the `summarize_job_log_failures` tool to get an AI summary of the logs for failed jobs, to understand what went wrong without filling your context windows with thousands of lines of logs
3. If you still need more information, use the `get_job_logs` or `get_workflow_run_logs` tool to get the full, detailed failure logs
4. Try to reproduce the failure yourself in your own environment.
5. Fix the failing build. If you were able to reproduce the failure yourself, make sure it is fixed before committing your changes.
```
