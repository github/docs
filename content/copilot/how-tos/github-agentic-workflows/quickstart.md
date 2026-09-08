---
title: 'Your first agentic workflow'
shortTitle: Quickstart
intro: 'Get your first AI-powered automation running using a pre-built workflow and the GitHub CLI.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Quickstarts
---

{% data reusables.copilot.agentic-workflows-preview-note %}

## Introduction

{% data variables.copilot.github_agentic_workflows %} let you automate repository tasks using AI-powered workflows. For an overview of {% data variables.copilot.github_agentic_workflows %}, see [AUTOTITLE](/copilot/concepts/agents/about-github-agentic-workflows).

In this guide, you'll add a pre-built agentic workflow—a daily repository status report—to an existing repository. This takes about 10 minutes and gives you a working example of automated agents running in {% data variables.product.prodname_actions %}.

This quickstart focuses on getting your first workflow running. For deeper setup and troubleshooting guidance, see the [{% data variables.copilot.github_agentic_workflows %} documentation site](https://github.github.com/gh-aw/).

## Prerequisites

{% data reusables.copilot.agentic-workflows-prerequisites %}

You can complete this quickstart with any supported engine. {% data variables.product.prodname_copilot %} is the default engine, and a {% data variables.product.prodname_copilot %} plan is only required when you choose it.

Supported operating systems are Linux, macOS, and Windows with WSL.

## Step 1: Install the `gh aw` extension

Install the {% data variables.copilot.github_agentic_workflows %} extension for the {% data variables.product.prodname_cli %}:

```shell
gh extension install github/gh-aw
```

## Step 2: Add a workflow and trigger a run

From your repository root, run:

```shell
gh aw add-wizard githubnext/agentics/daily-repo-status
```

The `add-wizard` command accepts workflow references in `OWNER/REPO/WORKFLOW-NAME` format. This interactive process will:

1. Check repository prerequisites.
1. Prompt you to select an AI engine ({% data variables.product.prodname_copilot_short %} is the default, or choose from other engines).
1. Guide you through secret and authentication setup for your chosen engine. Depending on the engine you choose, the wizard may prompt you to configure `COPILOT_GITHUB_TOKEN`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or `GEMINI_API_KEY`. See the [authentication reference](https://github.github.com/gh-aw/reference/auth/) article for setup instructions.
1. Generate the workflow markdown file and compile the corresponding `.lock.yml` file.
1. Open a pull request that adds both generated files in `.github/workflows/`.
1. Let you review and merge the pull request yourself, or choose a flow that merges it for you.

Once the workflow is created, you will be asked if you want to run it immediately. Select **Yes** to trigger the workflow.

## Step 3: Wait for the workflow to complete

An automated workflow run typically takes 2-3 minutes. Once complete, a new issue appears in your repository with a daily status report that analyzes:

* Recent repository activity (issues, pull requests, discussions, releases)
* Progress tracking and highlights
* Actionable next steps for maintainers

## Step 4: Customize the workflow (optional)

You can edit the workflow to match your priorities:

1. Open `.github/workflows/daily-repo-status.md` in your repository.
1. Edit the markdown body to describe what you want the report to cover—your issue backlog, CI setup, testing, performance, or roadmap.
1. If you changed the frontmatter configuration, recompile the workflow:

   ```shell
   gh aw compile
   ```

1. Commit and push your changes.
1. Optionally trigger another run:

   ```shell
   gh aw run daily-repo-status
   ```

## Next steps

* To create your own custom {% data variables.copilot.agentic_workflows_short %}, see [AUTOTITLE](/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows).
* For advanced patterns and the full reference, see the [{% data variables.copilot.github_agentic_workflows %} documentation site](https://github.github.com/gh-aw/).
