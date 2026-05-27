---
title: 'Customize {% data variables.product.prodname_copilot_short %} for your project'
shortTitle: Customize {% data variables.product.prodname_copilot_short %} overview
intro: 'Set up custom instructions, create a specialized agent, and organize project context on {% data variables.product.github %}.'
versions:
  feature: copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
---

This quickstart walks you through customizing {% data variables.product.prodname_copilot %} for a repository. By the end, {% data variables.product.prodname_copilot_short %} will know your project's conventions, have a specialized agent for common tasks, and have curated project context.

**Scenario:** You work on a team's web application repository with an established test suite, coding conventions, and active issues. You want {% data variables.product.prodname_copilot_short %} to work effectively with the codebase from day one.

## Prerequisites

* A {% data variables.product.prodname_copilot_short %} plan that includes {% data variables.copilot.copilot_cloud_agent %} ({% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, or {% data variables.copilot.copilot_enterprise_short %}). For more information, see [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* {% data variables.copilot.copilot_cloud_agent_short_cap_c %} enabled for your organization or account. For more information, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management).
* Write access to a {% data variables.product.github %} repository.

## Step 1: Teach {% data variables.product.prodname_copilot_short %} your project's conventions

Repository custom instructions give {% data variables.product.prodname_copilot_short %} persistent context about your project—its structure, coding standards, and how to build and test code. Every {% data variables.product.prodname_copilot_short %} interaction in the repository uses these instructions automatically.

Ask {% data variables.copilot.copilot_cloud_agent %} to generate a `copilot-instructions.md` file:

1. Go to [github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).
1. Select your repository from the dropdown menu in the prompt field.
1. Enter the following prompt:

   ```text copy
   Onboard this repository to Copilot cloud agent by adding a
   .github/copilot-instructions.md file. Include information about project
   structure, coding conventions, the test framework, and how to build and
   run the project.
   ```

1. Review the generated file and merge the pull request.

{% data variables.product.prodname_copilot_short %} now understands your project's conventions across chat, code review, and agent sessions. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Step 2: Create a specialized agent

{% data variables.copilot.custom_agents_caps_short %} let you create focused assistants for recurring tasks. In this example, create an agent that diagnoses and fixes bugs.

1. Go to [github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) and select your repository.
1. In the prompt field, click {% octicon "copilot" aria-label="Select a custom agent" %}. Then click **{% octicon "plus" aria-label="Plus button" %} Create a custom agent**.
1. Rename the file to `bug-fixer.agent.md`.
1. Replace the template content with:

   ```yaml copy
   ---
   name: Bug Fixer
   description: Diagnoses and fixes bugs reported in GitHub issues.
   tools:
     - read
     - edit
     - terminal
     - search
   ---

   You are a bug-fixing specialist. When given a bug report or issue:

   1. Reproduce the bug by writing a failing test.
   2. Identify the root cause.
   3. Fix the code.
   4. Verify the fix passes the test and doesn't break existing tests.

   Always follow the project's testing conventions and coding standards.
   ```

1. Commit the file and merge it into the default branch.

Your bug-fixer agent now appears in the agents dropdown on the agents tab. Select it before pasting an issue URL to start a focused debugging session. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

## Step 3: Organize project context with a space

{% data variables.copilot.copilot_spaces %} let you curate the exact context {% data variables.product.prodname_copilot_short %} needs for a specific area of your project. Answers are grounded in relevant files, issues, and documentation.

1. Go to [github.com/copilot/spaces](https://github.com/copilot/spaces?ref_product=copilot&ref_type=engagement&ref_style=text) and click **Create space**.
1. Name the space (for example, "API Architecture") and choose an owner.
1. Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add sources**, then add context that's relevant to your project:
   * **{% octicon "file-code" aria-hidden="true" aria-label="file-code" %} Add files and repositories** — Add architecture docs, API schemas, or key configuration files.
   * **{% octicon "link" aria-hidden="true" aria-label="link" %} Link files, pull requests, and issues** — Paste URLs for active issues or design discussions.
1. In the space's chat, ask a question like: "What patterns does our API use for error handling?"

{% data variables.product.prodname_copilot_short %} answers using only the context you've curated. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/copilot-spaces/create-copilot-spaces).

## Next steps

* **[AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-personal-instructions)** — Set personal preferences that apply across all your repositories.
* **[AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills)** — Add new capabilities to your agents.
* **[AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/extend-cloud-agent-with-mcp)** — Connect agents to external tools and services.
* **[AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/copilot-spaces/collaborate-with-others)** — Share your spaces with teammates.
