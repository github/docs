---
title: GitHub Copilot in IDEs
shortTitle: Copilot in IDEs
intro: 'Use {% data variables.product.prodname_copilot_short %} in your IDE to get assistance as you code, collaborate with agents, and delegate work locally, in the background, or in the cloud.'
versions:
  feature: copilot
defaultTool: vscode
contentType: concepts
category:
  - Learn about Copilot
redirect_from:
  - /copilot/concepts/completions/code-referencing
  - /copilot/concepts/completions/code-suggestions
  - /copilot/concepts/agents/copilot-in-jetbrains
---

{% data variables.product.prodname_copilot %} integrates with supported IDEs to help you throughout the development process. You can work alongside {% data variables.product.prodname_copilot_short %} in your editor, or delegate tasks to agents and review their results.

The available features and entry points vary by IDE. For a detailed comparison, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix).

## {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode_shortname %}

{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode_shortname %} brings AI assistance and agent-driven development into the environment where you write, run, debug, and review code.

### Benefits of using {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode_shortname %}

* **Stay in your development environment.** Work with agents alongside your editor, terminal, tests, source control, and debugger, so you can inspect and validate results with the tools you already use.
* **Choose how much work to delegate.** Move between code suggestions, focused edits, interactive chat, planning, and autonomous agent work as your task evolves.
* **Work on multiple tasks.** Run isolated agent sessions in parallel and use the Agents window to follow progress across projects.
* **Use the environment your project needs.** Run agents where your code and tools live, whether on your machine or in a connected remote environment, so they work with the right operating system, runtimes, and dependencies.
* **Choose your models and tools.** Use models provided with {% data variables.product.prodname_copilot_short %}, bring your own API key, or add models and tools through {% data variables.product.prodname_vscode_shortname %} extensions.

### What you can do with {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode_shortname %}

Choose the most appropriate workflow for your task, from getting focused assistance in the editor to delegating work to agents.

* **Code suggestions:** Get suggestions directly in the editor as you work. See [AUTOTITLE](/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).
* **Chat:** Ask questions about your codebase, compare approaches, and plan complex changes using context from your open files and workspace. Use inline chat for quick help within your code. See [AUTOTITLE](/copilot/how-tos/chat-with-copilot/chat-in-ide).
* **Agent mode:** Ask an agent to find relevant code, edit files, run commands, and validate its work, while you review changes and redirect it as it works. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).
* **Parallel agent sessions:** Start, monitor, and review multiple agent sessions across projects from the Agents window. See [Agents window](https://code.visualstudio.com/docs/agents/run/agents-window) in the {% data variables.product.prodname_vscode_shortname %} documentation.
* **Cloud agent sessions:** Manage {% data variables.copilot.copilot_cloud_agent %} sessions directly from your IDE. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-cloud-agent-in-your-ide).
* **Models and agent harnesses:** Choose a model based on the speed, reasoning, and cost your task needs. Use models included with {% data variables.product.prodname_copilot_short %}, bring your own key (BYOK), or install an extension that provides more models. You can also choose an agent harness. See [AUTOTITLE](/copilot/concepts/models/bring-your-own-key) and [Agent harnesses](https://code.visualstudio.com/docs/agents/run/agent-harnesses) in the {% data variables.product.prodname_vscode_shortname %} documentation.
* **Local, remote, and containerized environments:** Run agents on your machine, in a Dev Container (Experimental), or on a remote machine over SSH or a dev tunnel. You can check progress from the Agents window, including in a browser on another device.
* **Customizations:** Add project-specific context and capabilities with custom instructions, agent skills, hooks, Model Context Protocol (MCP) servers, and extensions.
* **Terminal:** Run {% data variables.copilot.copilot_cli %} in the integrated terminal for a terminal-first agent experience.

For a full overview, see [Build with AI in VS Code](https://code.visualstudio.com/docs/agents/overview) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Using {% data variables.product.prodname_copilot_short %} in other IDEs

For most supported IDEs, the **{% data variables.product.prodname_copilot %} extension or plugin** is the primary entry point. It connects {% data variables.product.prodname_copilot_short %} to your editor and provides the features supported by that IDE. To install the appropriate integration, see [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-extension).

You can also run {% data variables.copilot.copilot_cli %} in an IDE's integrated terminal if the terminal environment meets the requirements for {% data variables.copilot.copilot_cli_short %}. Integration between CLI sessions and the IDE varies.

### Entry points in JetBrains IDEs

In {% data variables.product.prodname_jetbrains_ides %}, there are three primary entry points for accessing {% data variables.product.prodname_copilot_short %} to choose from: the {% data variables.product.prodname_copilot %} plugin, the JetBrains AI Assistant, or {% data variables.copilot.copilot_cli %} in the integrated terminal.

| Entry point | Best for | Main capabilities |
| --- | --- | --- |
| **{% data variables.product.prodname_copilot %} plugin** | A complete AI-assisted development workflow | Inline and next edit suggestions, chat, agentic features, inline chat, code review, and commit message generation |
| **{% data variables.product.prodname_copilot_short %} in JetBrains AI Assistant** | Using chat and an agent without installing a separate {% data variables.product.prodname_copilot_short %} plugin | Chat, agentic tasks, and model selection |
| **{% data variables.copilot.copilot_cli_short %}** | Terminal-first development workflows | Agentic assistance and model selection in the integrated terminal |

The {% data variables.product.prodname_copilot %} plugin also supports
multiple agent harnesses and OpenTelemetry monitoring. Enterprise administrators can use managed settings to control plugin marketplaces, MCP servers, OpenTelemetry configuration, and whether users can bypass permission checks. For more information, see [AUTOTITLE](/copilot/concepts/enterprise/opentelemetry) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

The {% data variables.product.prodname_copilot %} plugin provides the broadest integration with the editor and is the recommended entry point when you want code suggestions and the full set of IDE features.

{% data variables.product.prodname_copilot_short %} is also available as an agent in JetBrains AI Assistant through the Agent Client Protocol (ACP). For more information about ACP, see the [ACP documentation](https://agentclientprotocol.com/get-started/introduction). For technical details on running {% data variables.copilot.copilot_cli_short %} as an ACP server, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/acp-server).

## References to matching public code

{% data variables.product.prodname_copilot %} checks suggestions for matches with code in public repositories on {% data variables.product.prodname_dotcom_the_website %}. Depending on the policy that applies to your account or organization, matching suggestions can be blocked or shown with information about the matching code.

For inline suggestions, code referencing compares a potential suggestion and approximately 150 characters of surrounding code with an index of public repositories. Code from private repositories and code hosted outside {% data variables.product.prodname_dotcom %} are not included in the search.

When you accept an inline suggestion that matches public code, {% data variables.product.prodname_copilot_short %} records details such as the matching file URLs and any detected licenses. Only accepted, unchanged suggestions are checked in this way.

When a {% data variables.copilot.copilot_chat_short %} response contains code that matches code in a public repository, the response includes a link to information about the match. See [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github#references-to-matching-public-code).

Typically, matches to public code occur in less than one percent of {% data variables.product.prodname_copilot_short %} suggestions, so you should not expect to see code references for many suggestions.

The public-code index is refreshed periodically, so it may not include recently added code and may contain references to code that has since moved or been deleted.

Code references help you review the source and licensing of matching code so you can decide whether to use, attribute, or remove it. For instructions on viewing references, see [AUTOTITLE](/copilot/how-tos/get-code-suggestions/find-matching-code).
