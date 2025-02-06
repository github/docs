---
title: GitHub Copilot Chat cheat sheet
shortTitle: Copilot Chat cheat sheet
intro: "Use this cheat sheet to quickly reference the most common commands and options for using {% data variables.product.prodname_copilot_chat %}."
versions:
  feature: copilot
topics: 
  - Copilot
---

{% webui %}

This version of this article is for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website. For other versions of this article, click the tabs above.

{% endwebui %}

{% vscode %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %}. For other versions of this article, click the tabs above.

{% endvscode %}

{% visualstudio %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vs %}. For other versions of this article, click the tabs above.

{% endvisualstudio %}

{% jetbrains %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in JetBrains. For other versions of this article, click the tabs above.

{% endjetbrains %}

## About {% data variables.product.prodname_copilot %} enhancements

You can enhance your experience of {% data variables.product.prodname_copilot_chat_short %} with a variety of commands and options. Finding the right command or option for the task you are working on can help you achieve your goals more efficiently. This cheat sheet provides a quick reference to the most common commands and options for using {% data variables.product.prodname_copilot_chat_short %}.

{% visualstudio %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %}, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/tests` | Generate unit tests for the selected code. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/explain` | Explain how the code in your active editor works. |
| `/optimize` | Analyze and improve running time of the selected code. |
| `/doc` | Add documentation comment for this symbol. |

{% endvisualstudio %}

{% vscode %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/tests` | Generate unit tests for the selected code. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/explain` | Explain how the code in your active editor works. |
| `/fixTestFailure` | Find and fix a failing test. |
| `/new` | Create a new project. |
| `/clear` | Start a new chat session. |

{% endvscode %}

{% jetbrains %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in JetBrains, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/tests` | Generate unit tests for the selected code. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/explain` | Explain how the code in your active editor works. |
| `/fixTestFailure` | Find and fix a failing test. |
| `/new` | Create a new project. |
| `/clear` | Start a new chat session. |

{% endjetbrains %}

{% webui %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in the {% data variables.product.github %} website, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/search` | Performs a search within the repository, including issues, pull requests, and code. |
| `/file` | Retrieves a specific file from the repository by its path. |
| `/rename` | Rename a conversation. |
| `/delete` | Delete a conversation. |
| `/new` | Start a new conversation |
| `/clear` | Clear conversation. |

{% endwebui %}

{% vscode %}

## Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type `#` in the chat prompt box, followed by a chat variable.

| Variable | Description |
| --- | --- |
| `#file` | Includes the current file's content in the prompt. |
| `#selection` | Includes the currently selected text in the prompt. |
| `#line` | Includes the current line of code in the prompt. |
| `#project` | Includes the project context in the prompt. |
| `#path` | Includes the file path in the prompt. |
| `#function` | Includes the current function or method in the prompt. |
| `#class` | Includes the current class in the prompt. |
| `#comment` | Includes the current comment in the prompt. |
| `#block` | Includes the current block of code in the prompt. |
| `#sym` | Includes the current symbol in the prompt. |

{% endvscode %}

{% visualstudio %}

## References

By default, {% data variables.product.prodname_copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also use # followed by a file name, file name and line numbers, or solution to reference a specific file, lines, or solution.

| Example | Description |
| --- | --- |
| `Where are the tests in #MyFile.cs?` | References a specific file |
| `How are these files related #MyFile.cs #MyFile2.cs` | References multiple files |
| `Explain this function #MyFile.cs: 66-72?` | References specific lines in a file |
| `Is there a delete method in this #solution?` | References the current file |

{% endvisualstudio %}

{% vscode %}

## Chat participants

Chat participants are like domain experts who have a specialty that they can help you with. You can specify a chat participant by typing `@` in the chat prompt box, followed by a chat participant name. To see all available chat participants, type `@` in the chat prompt box.

Below is a list of some of the most common chat participants for using {% data variables.product.prodname_copilot_chat_short %}.

| Variable    | Description |
|--------------|----------------------------------------------------------------------------------------------|
| `@workspace` | Has context about the code in your workspace. Use `@workspace` when you want {% data variables.product.prodname_copilot_short %} to consider the structure of your project, how different parts of your code interact, or design patterns in your project. |
| `@vscode`    | Has context about {% data variables.product.prodname_vscode %} commands and features. Use `@vscode` when you want help with {% data variables.product.prodname_vscode %}. |
| `@terminal`  | Has context about the {% data variables.product.prodname_vscode %} terminal shell and its contents. Use `@terminal` when you want help creating or debugging terminal commands. |
| `@azure`     | Has context about Azure services and how to use, deploy and manage them. Use `@azure` when you want help with Azure. The `@azure` chat participant is currently in {% data variables.release-phases.public_preview %} and is subject to change. |
| `@github`    | Allows you to use {% data variables.product.prodname_dotcom %}-specific {% data variables.product.prodname_copilot_short %} skills. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-github-skills-for-copilot). |

{% endvscode %}
