---
title: Working with agent sessions in the GitHub Copilot app
shortTitle: Agent sessions
intro: 'Run multiple isolated agent sessions simultaneously, each with its own branch, and steer them using different session modes, models, and tools.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/agent-sessions
category:
  - Author and optimize with Copilot
---

> [!NOTE] The {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.technical_preview %} and subject to change.
>
> * **{% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} users** — Download and install from the [{% data variables.copilot.github_copilot_app %} repository](https://gh.io/github-copilot-app-repo?utm_source=docs-github-copilot-app-agent-sessions&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026) if your organization or enterprise has enabled preview features and {% data variables.copilot.copilot_cli_short %}.
> * **{% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} users** — To request access, [join the waitlist](https://gh.io/github-copilot-app?utm_source=docs-github-copilot-app-agent-sessions&utm_medium=docs&utm_campaign=github-copilot-app-tech-preview-2026).

## Starting a session

Each session in the {% data variables.copilot.github_copilot_app %} runs in its own isolated workspace, so you can run multiple sessions in parallel and make progress on several tasks without conflicts.

1. In the sidebar under **Sessions**, click **+** to start a new session.
1. Choose a repository—you can use a local folder, choose from {% data variables.product.github %}, or clone from a URL.
1. Choose whether the session should run in a new working tree or in your local repository.
1. Select a session mode, model, and reasoning effort from the dropdowns above the prompt field.
1. Describe the task in the prompt field. You can reference issues with `#`, add files with `@`, or use `/` for commands.

The agent starts working. Your active sessions appear in the sidebar grouped by repository—click any session to switch to it.

## Choosing a session mode

The session mode controls how much autonomy the agent has. You can set the mode from the dropdown above the prompt field and change it at any time.

* **Interactive**: You and the agent work together. The agent suggests changes and waits for your input before proceeding.
* **Plan**: The agent creates a plan first. You review and approve the plan before the agent executes it.
* **Autopilot**: The agent works fully autonomously—writing code, running tests, and iterating without waiting for input.

## Choosing a model

You can select a model and reasoning effort from the dropdowns above the prompt field. Higher reasoning effort gives the agent more time to think through complex problems but may take longer. You can change both settings at any time during a session.

## Using quick chats

**Quick chats** in the sidebar opens a conversation mode without creating a dedicated branch or worktree. Use it for brainstorming, asking questions, or exploring ideas before starting a session. Your chat history is saved and listed by conversation name.

## Keyboard shortcuts

The {% data variables.copilot.github_copilot_app %} supports keyboard shortcuts to help you navigate sessions, switch between workspaces, and perform common actions. To see available shortcuts, open the app, go to **Help**, then **Keyboard Shortcuts**.
