---
title: GitHub Copilot in IDEs
shortTitle: Copilot in IDEs
intro: 'Get contextual AI assistance from {% data variables.product.prodname_copilot %} throughout your IDE workflow, from exploring an approach to writing, reviewing, and improving code.'
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

{% data variables.product.prodname_copilot %} integrates with supported IDEs to help you throughout the development process. {% data variables.product.prodname_copilot_short %} can explain concepts, complete code, propose edits, and validate files with agent mode.

The available features and entry points vary by IDE. For a detailed comparison, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix).

## How {% data variables.product.prodname_copilot_short %} helps in your IDE

You can work with {% data variables.product.prodname_copilot_short %} in three main ways:

* **Code suggestions** help you write and edit code without leaving the editor.
* **Chat** lets you ask questions, explain or refactor code, generate tests, and explore possible solutions.
* **Agentic experiences** can plan and complete multi-step tasks by reading files, editing code, and running commands in your local development environment.

These experiences complement each other. For example, you might use chat to understand an unfamiliar codebase, ask an agent to implement a change across several files, and use inline suggestions to refine the result.

## Code suggestions

{% data variables.product.prodname_copilot_short %} can suggest code directly in the editor as you work. Depending on your IDE, these suggestions can include inline suggestions and {% data variables.copilot.next_edit_suggestions %}.

### Inline suggestions

Inline suggestions appear as dimmed text at your cursor position. {% data variables.product.prodname_copilot_short %} uses the code around your cursor and other available context to predict what you are likely to write next.

Suggestions can complete part of a line, an entire line, or a larger block of code. You can also write a natural-language comment describing the code you want, then let {% data variables.product.prodname_copilot_short %} suggest an implementation.

You remain responsible for reviewing and testing suggested code before using it.

### {% data variables.copilot.next_edit_suggestions_caps %}

{% data variables.copilot.next_edit_suggestions_caps %} predict both where you are likely to make your next change and what that change could be. They are based on the edits you are currently making and can help you apply related changes elsewhere in a file.

For example, after you rename a method or change a data structure, {% data variables.product.prodname_copilot_short %} might suggest updating another location affected by that change.

Availability and configuration vary by IDE. For instructions on using inline and next edit suggestions, see [AUTOTITLE](/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions).

{% data reusables.copilot.supported-languages %}

## Chat and agentic experiences

{% data variables.copilot.copilot_chat %} provides a conversational interface in your IDE. Because chat can use context from your project, you can ask questions about selected code, open files, or your wider codebase.

You can use chat to:

* Explain unfamiliar code.
* Suggest fixes for bugs.
* Refactor or document code.
* Generate tests.
* Compare implementation approaches.
* Answer questions about programming languages and development tools.

For larger tasks, an agentic experience can break your request into steps and use tools to complete the work. Depending on your IDE and configuration, an agent can inspect your project, edit multiple files, run terminal commands, and respond to errors encountered while working.

Agentic changes are made in your local development environment. Review the proposed changes and the output of any commands before accepting the result.

For instructions on using chat and agents, see [AUTOTITLE](/copilot/how-tos/chat-with-copilot/chat-in-ide).

## Choosing an entry point

For most IDEs, the **{% data variables.product.prodname_copilot %} extension or plugin** is the primary entry point. It connects {% data variables.product.prodname_copilot_short %} directly to your editor and provides the features supported by that IDE. You can install the appropriate integration by following [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-extension).

You can also run **{% data variables.copilot.copilot_cli %}** in an IDE's integrated terminal if the terminal environment meets the requirements for {% data variables.copilot.copilot_cli_short %}. Integration between CLI sessions and the IDE varies.

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
