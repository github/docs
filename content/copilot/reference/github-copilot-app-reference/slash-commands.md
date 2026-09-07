---
title: Slash commands for the GitHub Copilot app
shortTitle: Slash commands
allowTitleToDifferFromFilename: true
intro: 'Use slash commands in the {% data variables.copilot.github_copilot_app %} to switch modes, run common workflows, and manage sessions without writing a long prompt.'
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: reference
category:
  - Author and optimize with Copilot
---

Slash commands are shortcuts you can type in the prompt box. Type `/` to open the command picker, then select a command or keep typing to filter.

Some slash commands invoke skills, such as `/orchestrate` and `/create-canvas`.

Command availability depends on context and can change depending on whether a session has started.

> [!NOTE]
> This reference covers {% data variables.product.github %}-provided slash commands for the {% data variables.copilot.github_copilot_app %}. The command list can change over time. To see the latest commands available in your current context, type `/` in the app.

## Available slash commands

Some commands require specific context, such as an active session, session changes, or an open pull request. These requirements are noted in the command descriptions.

| Slash command | What it does |
| --- | --- |
| `/af` | Finds installable MCP servers, tools, skills, and agents by searching Agent Finder. This slash command is a built-in skill. See [AUTOTITLE](/copilot/concepts/context/mcp#agent-finder). |
| `/agent` | Selects a {% data variables.copilot.copilot_custom_agent_short %} for the session. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents). |
| `/allow-all-tools` or `/yolo` | **Requires an active session.** Turns tool auto-approval on or shows its current state. |
| `/attach-files` | Opens a file picker and attaches files to your message. |
| `/attach-folder` | Opens a folder picker and attaches a folder to your message. |
| `/autopilot [PROMPT]` | Switches to **Autopilot** mode and optionally starts execution with a prompt. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode). |
| `/chronicle` | Opens session history and analysis features. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#using-chronicle-with-app-sessions). |
| `/chronicle cost-tips` | Shows suggestions to reduce token usage and cost. |
| `/chronicle improve` | Suggests improvements for your instructions file. |
| `/chronicle reindex` | Rebuilds the chronicle session index. |
| `/chronicle search` | Searches session history by keyword or topic. |
| `/chronicle standup` | Summarizes your work from the last day. |
| `/chronicle tips` | Returns personalized workflow tips. |
| `/clear` or `/reset` | **Requires an active session.** Clears the current transcript and starts a fresh session. |
| `/collect-debug-logs` | **Requires an active session.** Creates a debug log archive or uploads one as a secret gist. |
| `/compact` | **Requires an active session.** Summarizes earlier parts of the conversation to reduce token pressure in the session. |
| `/context` | Shows the current session's context usage details. |
| `/create-canvas [PROMPT]` | Invokes the canvas-authoring skill. This slash command is a built-in skill. |
| `/debug` | **Requires an active session.** Copies session debug JSON to your clipboard. |
| `/export-gist` | **Requires an active session.** Exports the transcript to a secret gist. |
| `/fleet [PROMPT]` | **Requires an active session.** Launches multiple agents in parallel for one task. |
| `/fork` | **Requires an active session.** Forks the current session at the latest turn. |
| `/inbox` | Renders an interactive inbox widget. If no work items are available, the widget is empty. |
| `/init` | **Requires a repository.** Generates or improves repository instructions. |
| `/interactive [PROMPT]` | Switches to **Interactive** mode and optionally starts with a prompt. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode). |
| `/merge-to-parent` | **Requires a forked session.** Merges a forked session's work back to its parent. |
| `/model` or `/models [MODEL]` | Opens model selection, or selects a model by name/ID. |
| `/orchestrate [PROMPT]` | Coordinates work across sessions or repositories. This slash command is a built-in skill. |
| `/plan [PROMPT]` | Switches to **Plan** mode and optionally starts with a prompt. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode). |
| `/pr-fix-checks` | **Requires an open pull request with failing checks.** Runs a prompt to address failing pull request checks. |
| `/pr-merge` | **Requires a mergeable pull request.** Merges the current pull request. |
| `/pr-open` | **Requires an active session with changes.** Opens a pull request from current session changes. |
| `/pr-resolve-comments` | **Requires an open pull request with unresolved review comments.** Runs a prompt to resolve pull request comments. |
| `/remote` | **Requires an active session.** Enables or manages remote control so you can access the current session from {% data variables.product.prodname_dotcom_the_website %} in a browser or from {% data variables.product.prodname_mobile %}. Availability depends on your organization or enterprise policy. See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-remote-control). |
| `/rename` | **Requires an active session.** Renames the current chat or session. |
| `/research [PROMPT]` | Runs a research workflow and produces a cited report. |
| `/reset-allowed-tools` | **Requires an active session.** Clears session-level tool approvals and turns auto-approval off. |
| `/restart-session` | **Requires an active session.** Restarts the current session and keeps its history. |
| `/review` | **Requires an active session.** Reviews the current session's changes. |
| `/rubber-duck [PROMPT]` | Requests critique on your approach or implementation by a model other than the one you have used in the session. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#using-the-rubber-duck-agent). |
| `/security-review` | **Requires an active session with changes.** Runs a security-focused review against current diffs. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#using-security-review-in-app-sessions). |
| `/skills` | Manages skills; use `/skills reload` to reload skills mid-session. |
| `/spar [PROMPT]` | Runs adversarial reasoning to challenge your approach. |
| `/spawn [PROMPT]` | Creates a focused child session for delegated work. |
| `/terminal [COMMAND]` | **Requires an active session.** Opens a new terminal in the right panel and can optionally run a command. |
| `/usage` | Opens usage and rate-limit details for your plan. |
