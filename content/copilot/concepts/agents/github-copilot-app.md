---
title: About the GitHub Copilot app
shortTitle: GitHub Copilot app
intro: 'The {% data variables.copilot.github_copilot_app %} is a desktop application for agent-driven development that brings parallel workstreams, {% data variables.product.github %} integration, and PR lifecycle management into one place.'
product: '{% data reusables.gated-features.github-app %}'
versions:
  feature: copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/agents/github-app
category:
  - Learn about Copilot
---

> [!NOTE] The {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.technical_preview %} and subject to change.
>
> * **{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} users** — Download and install from the [{% data variables.copilot.github_copilot_app %} repository](https://gh.io/github-copilot-app-repo?utm_source=docs-github-copilot-app-overview&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026) if your organization or enterprise has enabled preview features and {% data variables.copilot.copilot_cli_short %}.
> * **{% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} users** — To request access, [join the waitlist](https://gh.io/github-copilot-app?utm_source=docs-github-copilot-app-overview&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026).

## Introduction

The {% data variables.copilot.github_copilot_app %} is a desktop application purpose-built for agent-driven development. It gives you a single place to direct AI agents across parallel workstreams, work with {% data variables.product.github %} issues and pull requests, and manage the full development lifecycle—without context-switching between terminals, IDEs, and browser tabs.

The app is built on {% data variables.copilot.copilot_cli %} and integrates natively with {% data variables.product.github %}, so your repositories, branches, and CI pipelines work out of the box. It's designed for workflows where you want to run multiple agents in parallel and stay focused on directing work rather than doing it all yourself.

## Supported operating systems

The {% data variables.copilot.github_copilot_app %} supports the following operating systems:

* macOS
* Linux
* Windows

## Benefits of using the {% data variables.copilot.github_copilot_app %}

* **Work in parallel.** Run multiple agent sessions at the same time, each on its own branch, so you can make progress on several tasks without waiting for one to finish.
* **Stay in one place.** Triage issues, direct agents, review changes, and land pull requests without switching between your terminal, IDE, and browser.
* **Start fast.** The app connects to {% data variables.product.github %} natively—your repositories, branches, issues and pull requests work out of the box with no additional setup.
* **Stay in control.** Choose how much autonomy to give agents, from fully collaborative to fully autonomous, and adjust the model and reasoning effort for each session.

## What can I do with the {% data variables.copilot.github_copilot_app %}?

* **Parallel workspaces.** Run multiple isolated agent sessions simultaneously, each with a dedicated git worktree and branch.
* **Session modes.** Choose how you work with agents: Interactive (collaborative), Plan (agent plans, you approve), or Autopilot (fully autonomous).
* **{% data variables.product.github %} integration.** Browse and find issues, start sessions from them, create and close pull requests, review pull requests, and view CI check results—all within the app.
* **Model choice.** Select from multiple LLMs and adjust reasoning effort per session.
* **Customizations.** Configure MCP servers, skills, extensions, and plugins for each session.
* **Scheduled workflows.** Save recurring agent tasks and run them on a schedule or on demand.
* **Quick chats.** Brainstorm in a conversation mode without creating a dedicated branch or workspace.
* **Search.** Search for issues or pull requests across your repositories directly from the app.

## {% data variables.copilot.github_copilot_app %} workflow

A typical workflow in the {% data variables.copilot.github_copilot_app %} looks like this:

1. Browse issues in a repository and pick one up, or start from a blank workspace.
1. Choose a session mode—Interactive, Plan, or Autopilot—and select a model.
1. Describe the task and let the agent create a branch, write code, and run tests.
1. Review the agent's changes, provide feedback, and iterate.
1. Create a pull request, leave a review, check whether CI passed, and merge the PR—all from within the app.

You can run several of these workflows in parallel, each in its own workspace, and switch between them as needed.

## Providing feedback

The {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.public_preview %}. To share feedback, click the **Give feedback** icon in the bottom-left corner of the app.

## Further reading

* [AUTOTITLE](/copilot/how-tos/github-copilot-app/getting-started)
