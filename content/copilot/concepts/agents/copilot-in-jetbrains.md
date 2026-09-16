---
title: Using GitHub Copilot in JetBrains IDEs
shortTitle: Copilot in JetBrains
intro: 'Learn about the different ways to use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_jetbrains_ides %}, including the {% data variables.product.prodname_copilot %} plugin, JetBrains AI Assistant, and {% data variables.copilot.copilot_cli_short %}.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
allowTitleToDifferFromFilename: true
---

## Introduction

There are three ways to use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_jetbrains_ides %}: the {% data variables.product.prodname_copilot %} plugin, {% data variables.product.prodname_copilot %} as an agent in JetBrains AI Assistant, and {% data variables.copilot.copilot_cli %} in the integrated terminal. Each entry point provides a different set of capabilities depending on how you prefer to work.

## Comparing entry points

| | {% data variables.product.prodname_copilot %} plugin | {% data variables.product.prodname_copilot %} in AI Assistant | {% data variables.copilot.copilot_cli_short %} |
|---|---|---|---|
| **Best for** | Comprehensive AI coding workflow | Quick {% data variables.product.prodname_copilot_short %} access without a separate plugin | Terminal-first workflows |
| **Entry point** | Chat panel, inline chat, code suggestions, code review, commit message | Default agent picker, ACP Registry | Terminal or shell |
| **Code completion** | Yes | Not included | Not included |
| **Next edit suggestions** | Yes | Coming soon | Not included |
| **Agentic experience** | Multiple agent harnesses | {% data variables.product.prodname_copilot_short %} as agent via ACP, Default agent picker | {% data variables.copilot.copilot_cli_short %} |
| **IDE tools** | Yes | Yes | Not included |
| **Model selection** | Yes | Yes | Yes |
| **Inline chat** | Yes | Not included | Not included |
| **Code review** | Yes | Not included | Not included |
| **Commit message generation** | Yes | Not included | Not included |
| **Subscription** | {% data variables.product.prodname_copilot %} | {% data variables.product.prodname_copilot %} | {% data variables.product.prodname_copilot %} |

## {% data variables.product.prodname_copilot %} plugin

The {% data variables.product.prodname_copilot %} plugin for {% data variables.product.prodname_jetbrains_ides %} is the most comprehensive way to use {% data variables.product.prodname_copilot_short %} and is the recommended choice. 

The plugin is transitioning from its local agent harness to {% data variables.copilot.copilot_cli_short %} as the default agent harness, which brings faster feature parity and higher-quality results. For more information, see [{% data variables.copilot.copilot_cli_short %} is becoming the default agent harness in {% data variables.product.prodname_copilot %} for JetBrains](https://devblogs.microsoft.com/java/github-copilot-for-jetbrains-is-moving-to-copilot-cli-as-the-default-agent-harness/). For installation instructions, see [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-extension).

* **Code completion and next edit suggestions**: {% data variables.product.prodname_copilot_short %} suggests completions as you type and proactively predicts your next intended edit.
* **Multiple agent harnesses**: The plugin ships its own agent experience and partners with other agent providers, giving you multiple interaction modes.
* **Full model and feature support**: All {% data variables.copilot.copilot_chat_short %} models, code completion modes, and bring-your-own-key features are available as they are released.
* **Inline chat**: Explain, refactor, document, or generate code directly in the editor gutter, without switching to a separate panel.
* **Code review**: {% data variables.product.prodname_copilot_short %} analyzes your changes and surfaces actionable feedback, flagging potential bugs, style violations, and logic issues.
* **Commit message generation**: {% data variables.product.prodname_copilot_short %} inspects your staged changes and generates a clear, conventional commit message.

## {% data variables.product.prodname_copilot %} in JetBrains AI Assistant

> [!NOTE]
> {% data variables.product.prodname_copilot %} in AI Assistant provides chat and agent capabilities only. It does not include code completion, next edit suggestions, inline chat, code review, or commit message generation.

{% data variables.product.prodname_copilot %} is available as a native agent in JetBrains AI Assistant through the Agent Client Protocol (ACP). The ACP is an open standard for connecting AI agents to the IDE. If you have a valid {% data variables.product.prodname_copilot_short %} subscription, {% data variables.product.prodname_copilot_short %} appears in the AI Assistant agent picker automatically.

This integration is designed for developers who prefer to work inside the AI Assistant chat panel or who want {% data variables.product.prodname_copilot_short %} available without installing an additional plugin.

* **No updates required**: The {% data variables.product.prodname_copilot_short %} agent is bundled directly with AI Assistant and kept current automatically. No separate plugin to install, update, or maintain.
* **Chat-centric workflow**: Ideal for multi-step reasoning tasks—describe a goal, let {% data variables.product.prodname_copilot_short %} plan and propose changes, and iterate conversationally.
* **Model selection**: Switch {% data variables.product.prodname_copilot_short %} models or adjust reasoning depth without leaving the chat panel.

### Using {% data variables.product.prodname_copilot %} in AI Assistant

1. Open JetBrains AI Assistant by pressing <kbd>Alt</kbd>+<kbd>A</kbd> (Windows/Linux) or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> (macOS), or click the AI Assistant icon in the right tool window.
1. In the agent picker dropdown at the top of the chat panel, select **{% data variables.product.prodname_copilot %}**.
1. Enter a prompt and start chatting.

### The ACP Registry

The ACP Registry is the catalog of agents that AI Assistant knows about. When the IDE starts, it consults the registry to discover which agents are available. {% data variables.product.prodname_copilot %}'s ACP entry is part of the default registry, so {% data variables.product.prodname_copilot_short %} appears in your agent list automatically when you have a valid subscription and the required credentials in place.

For more information about ACP, see the [ACP documentation](https://agentclientprotocol.com/get-started/introduction). For technical details on running {% data variables.copilot.copilot_cli_short %} as an ACP server, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/acp-server).

## {% data variables.copilot.copilot_cli %} in the integrated terminal

{% data variables.copilot.copilot_cli %} brings {% data variables.product.prodname_copilot_short %}'s capabilities directly to the terminal. It is optimized for command-line workflows and can run on macOS, Linux, or Windows.

## Further reading

* [AUTOTITLE](/copilot/how-tos/chat-with-copilot/chat-in-ide)
* [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-extension)
* [AUTOTITLE](/copilot/how-tos/use-ai-models/change-the-chat-model)
