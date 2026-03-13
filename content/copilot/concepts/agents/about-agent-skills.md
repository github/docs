---
title: About Agent Skills
shortTitle: Agent Skills
intro: 'Agent Skills enhance the ability of {% data variables.copilot.copilot_coding_agent %}, the {% data variables.copilot.copilot_cli %} and {% data variables.product.prodname_vscode %} Insiders to perform specialized tasks.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><br>{% data reusables.gated-features.copilot-cli %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Learn about Copilot
---

## About Agent Skills

Agent Skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. Agent Skills is an [open standard](https://github.com/agentskills/agentskills), used by a range of different agents.

Agent Skills work with {% data variables.copilot.copilot_coding_agent %}, the {% data variables.copilot.copilot_cli %} and agent mode in {% data variables.product.prodname_vscode %} Insiders. Support in the stable version of {% data variables.product.prodname_vscode_shortname %} is coming soon.

You can create your own skills to teach {% data variables.product.prodname_copilot_short %} to perform tasks in a specific, repeatable way—or use skills shared online, for example in the [`anthropics/skills`](https://github.com/anthropics/skills) repository or {% data variables.product.company_short %}'s community created [`github/awesome-copilot`](https://github.com/github/awesome-copilot) collection.

{% data variables.product.prodname_copilot_short %} supports:

* Project skills, stored in your repository (`.github/skills` or `.claude/skills`)
* Personal skills, stored in your home directory and shared across projects (`~/.copilot/skills` or `~/.claude/skills`) ({% data variables.copilot.copilot_coding_agent %} and {% data variables.copilot.copilot_cli %} only)

Support for organization-level and enterprise-level skills is coming soon.

> [!NOTE]
> {% data reusables.cli.preview-note-cli-body %}

## Creating and adding skills

1. Create a subdirectory for your new skill. Each skill should have its own directory (for example, `.github/skills/webapp-testing`). Skill directory names should be lowercase, use hyphens for spaces, and typically match the `name` in the `SKILL.md` frontmatter.

    For project skills, specific to a single repository, store your skill under `.github/skills` or `.claude/skills`.

    For personal skills, shared across projects, store your skill under `~/.copilot/skills` or `~/.claude/skills`.

1. Create a `SKILL.md` file with your skill's instructions.

   > [!NOTE]
   > Skill files must be named `SKILL.md`.

    `SKILL.md` files are Markdown files with YAML frontmatter. In their simplest form, they include:

    * YAML frontmatter
      * **name** (required): A unique identifier for the skill. This must be lowercase, using hyphens for spaces.
      * **description** (required): A description of what the skill does, and when {% data variables.product.prodname_copilot_short %} should use it.
      * **license** (optional): A description of the license that applies to this skill.
    * A Markdown body, with the instructions, examples and guidelines for {% data variables.product.prodname_copilot_short %} to follow.

1. Optionally, add scripts, examples or other resources to your skill's directory. For example, if you were writing a skill for converting images between different formats, you might include a script for converting SVG images to PNG.

### Example `SKILL.md` file

For a project skill, this file would be located in the `/path/to/repository/.github/skills/github-actions-failure-debugging` directory.

For a personal skill, this file would be located in the `~/.copilot/skills/github-actions-failure-debugging` directory.

```markdown copy
---
name: github-actions-failure-debugging
description: Guide for debugging failing GitHub Actions workflows. Use this when asked to debug failing GitHub Actions workflows.
---

To debug failing GitHub Actions workflows in a pull request, follow this process, using tools provided from the GitHub MCP Server:

1. Use the `list_workflow_runs` tool to look up recent workflow runs for the pull request and their status
2. Use the `summarize_job_log_failures` tool to get an AI summary of the logs for failed jobs, to understand what went wrong without filling your context windows with thousands of lines of logs
3. If you still need more information, use the `get_job_logs` or `get_workflow_run_logs` tool to get the full, detailed failure logs
4. Try to reproduce the failure yourself in your own environment.
5. Fix the failing build. If you were able to reproduce the failure yourself, make sure it is fixed before committing your changes.
```

## How {% data variables.product.prodname_copilot_short %} uses skills

When performing tasks, {% data variables.product.prodname_copilot_short %} will decide when to use your skills based on your prompt and the skill's description.

When {% data variables.product.prodname_copilot_short %} chooses to use a skill, the `SKILL.md` file will be injected in the agent's context, giving the agent access to your instructions. It can then follow those instructions, and use any scripts or examples you may have included in the skill's directory.

## Skills versus custom instructions

You can use both skills and custom instructions to teach {% data variables.product.prodname_copilot_short %} how to work in your repository and how to perform specific tasks. 

We recommend using custom instructions for simple instructions relevant to almost every task (for example information about your repository's coding standards), and skills for more detailed instructions that {% data variables.product.prodname_copilot_short %} should access when relevant. 

To learn more about repository custom instructions, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).
