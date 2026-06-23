---
title: Working with agent sessions in the GitHub Copilot app
shortTitle: Agent sessions
intro: 'Run multiple isolated agent sessions simultaneously, each with its own branch, and steer them using different session modes, models, and tools.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-agent-sessions-signup&utm_medium=docs&utm_campaign=github-copilot-app-ga-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-app/agent-sessions
category:
  - Author and optimize with Copilot
---

## Starting a session

Each session in the {% data variables.copilot.github_copilot_app %} runs in its own isolated workspace, so you can run multiple sessions in parallel and make progress on several tasks without conflicts.

1. In the sidebar next to **Sessions**, click **+** to start a new session.
1. Choose a repository—you can use a local folder, choose from {% data variables.product.github %}, or clone from a URL.
1. From the dropdown under the prompt box, choose where the session should run: in a new working tree, in your local repository, or in a cloud sandbox. Cloud sandboxes for {% data variables.product.prodname_copilot_short %} (public preview) are fully isolated environments hosted by {% data variables.product.github %}. For more information, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).
1. Select a session mode, model, and reasoning effort from the dropdowns below the prompt field.
1. Describe the task in the prompt field. You can reference issues with `#`, add files with `@`, or use `/` for commands.

The agent starts working. Your active sessions appear in the sidebar grouped by repository—click any session to switch to it.

## Choosing a session mode

The session mode controls how much autonomy the agent has. You can set the mode from the dropdown below the prompt field and change it at any time.

* **Interactive**: You and the agent work together. The agent suggests changes and waits for your input before proceeding.
* **Plan**: The agent creates a plan first. You review and approve the plan before the agent executes it.
* **Autopilot**: The agent works fully autonomously—writing code, running tests, and iterating without waiting for input.

## Choosing a model

You can select a model and reasoning effort from the dropdowns above the prompt field. Higher reasoning effort gives the agent more time to think through complex problems but may take longer. You can change both settings at any time during a session.

If you configured your own model provider in the app using bring your own key (BYOK), those models also appear in the picker. For setup steps, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/use-byok-models).

Hover over the {% octicon "info" aria-label="the info icon" %} icon in the model picker to see model details.

## Using quick chats

**Quick chats** in the sidebar opens a conversation mode without creating a dedicated branch or worktree. Use it for brainstorming, asking questions, or exploring ideas before starting a session. Your chat history is saved and listed by conversation name.

## Using `/chronicle` with app sessions

Because the {% data variables.copilot.github_copilot_app %} is built on {% data variables.copilot.copilot_cli %}, you can use {% data variables.copilot.copilot_cli_short %} session history features such as `/chronicle` to get insights from work you did in the app and in other {% data variables.copilot.copilot_cli_short %} sessions.

For example, you can use `/chronicle standup` to summarize recent work. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle).

## Using voice dictation

You can use voice dictation to speak prompts in a session instead of typing them.

Before you can use voice dictation, you need to configure it in the app settings.

1. Open the app settings, then select the **Voice dictation** tab.
1. Choose a keyboard shortcut.
1. Allow microphone access in your operating system settings.
1. Download a local transcription model.

After setup, use your shortcut to start and stop voice transcription. The app inserts transcribed text into the prompt box so you can review or edit it before sending.

## Using the rubber duck agent

The rubber duck agent is a built-in agent that acts as a constructive critic, reviewing your current plan, implementation, or tests and returning concrete feedback. The agent runs on a different model from the one driving your current session.

When rubber duck is enabled, {% data variables.product.prodname_copilot_short %} can consult it automatically at key points while it works. The main session agent passes work to the rubber duck agent, receives the critique, then decides how to apply that feedback before continuing.

> [!NOTE]
> The rubber duck agent is currently only available if the main agent is using a Claude or GPT large language model.

You can also manually ask {% data variables.product.prodname_copilot_short %} to get a review from the rubber duck agent.

1. Open an active session.
1. In the prompt box, type `/rubber-duck` and ask for a critique of your current plan, implementation, or tests.

For more information on the rubber duck agent, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/rubber-duck).

## Keyboard shortcuts

The {% data variables.copilot.github_copilot_app %} supports keyboard shortcuts to help you navigate sessions, switch between workspaces, and perform common actions. To see available shortcuts, open the app, go to **Help**, then **Keyboard Shortcuts**.
