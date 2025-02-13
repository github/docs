---
title: GitHub Copilot Chat cheat sheet
shortTitle: Copilot Chat cheat sheet
intro: "Use this cheat sheet to quickly reference the most common commands and options for using {% data variables.product.prodname_copilot_chat %}."
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/github-copilot-chat-cheat-sheet
---

{% webui %}

This version of this article is for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website. For other versions of this article, click the tabs above.

{% data reusables.copilot.about-copilot-enhancements %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in the {% data variables.product.github %} website, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/clear` | Clear conversation. |
| `/delete` | Delete a conversation. |
| `/file` | Retrieves a specific file from the repository by its path. |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/new` | Start a new conversation |
| `/rename` | Rename a conversation. |
| `/search` | Performs a search within the repository, including issues, pull requests, and code. |

{% endwebui %}

{% vscode %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vscode %}. For other versions of this article, click the tabs above.

{% data reusables.copilot.about-copilot-enhancements %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/clear` | Start a new chat session. |
| `/explain` | Explain how the code in your active editor works. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/fixTestFailure` | Find and fix a failing test. |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/new` | Create a new project. |
| `/tests` | Generate unit tests for the selected code. |

## Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type `#` in the chat prompt box, followed by a chat variable.

| Variable | Description |
| --- | --- |
| `#block` | Includes the current block of code in the prompt. |
| `#class` | Includes the current class in the prompt. |
| `#comment` | Includes the current comment in the prompt. |
| `#file` | Includes the current file's content in the prompt. |
| `#function` | Includes the current function or method in the prompt. |
| `#line` | Includes the current line of code in the prompt. |
| `#path` | Includes the file path in the prompt. |
| `#project` | Includes the project context in the prompt. |
| `#selection` | Includes the currently selected text in the prompt. |
| `#sym` | Includes the current symbol in the prompt. |

## Chat participants

Chat participants are like domain experts who have a specialty that they can help you with. You can specify a chat participant by typing `@` in the chat prompt box, followed by a chat participant name. To see all available chat participants, type `@` in the chat prompt box.

Below is a list of some of the most common chat participants for using {% data variables.product.prodname_copilot_chat_short %}.

| Variable    | Description |
|--------------|----------------------------------------------------------------------------------------------|
| `@azure`     | Has context about Azure services and how to use, deploy and manage them. Use `@azure` when you want help with Azure. The `@azure` chat participant is currently in {% data variables.release-phases.public_preview %} and is subject to change. |
| `@github`    | Allows you to use {% data variables.product.github %}-specific {% data variables.product.prodname_copilot_short %} skills. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-github-skills-for-copilot). |
| `@terminal`  | Has context about the {% data variables.product.prodname_vscode %} terminal shell and its contents. Use `@terminal` when you want help creating or debugging terminal commands. |
| `@vscode`    | Has context about {% data variables.product.prodname_vscode %} commands and features. Use `@vscode` when you want help with {% data variables.product.prodname_vscode %}. |
| `@workspace` | Has context about the code in your workspace. Use `@workspace` when you want {% data variables.product.prodname_copilot_short %} to consider the structure of your project, how different parts of your code interact, or design patterns in your project. |

{% endvscode %}

{% visualstudio %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_vs %}. For other versions of this article, click the tabs above.

{% data reusables.copilot.about-copilot-enhancements %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %}, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/doc` | Add documentation comment for this symbol. |
| `/explain` | Explain how the code in your active editor works. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/optimize` | Analyze and improve running time of the selected code. |
| `/tests` | Generate unit tests for the selected code. |

## References

By default, {% data variables.product.prodname_copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also use # followed by a file name, file name and line numbers, or solution to reference a specific file, lines, or solution.

| Example | Description |
| --- | --- |
| `Where are the tests in #MyFile.cs?` | References a specific file |
| `How are these files related #MyFile.cs #MyFile2.cs` | References multiple files |
| `Explain this function #MyFile.cs: 66-72?` | References specific lines in a file |
| `Is there a delete method in this #solution?` | References the current file |

{% endvisualstudio %}

{% jetbrains %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in JetBrains. For other versions of this article, click the tabs above.

{% data reusables.copilot.about-copilot-enhancements %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in JetBrains, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of some of the most common slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command | Description |
| --- | --- |
| `/clear` | Start a new chat session. |
| `/explain` | Explain how the code in your active editor works. |
| `/fix` | Propose a fix for problems in the selected code. |
| `/fixTestFailure` | Find and fix a failing test. |
| `/help` | Quick reference and basics of using {% data variables.product.prodname_copilot %}. |
| `/new` | Create a new project. |
| `/tests` | Generate unit tests for the selected code. |

## Chat participants

Chat participants are like domain experts who have a specialty that they can help you with. You can specify a chat participant by typing `@` in the chat prompt box, followed by a chat participant name. To see all available chat participants, type `@` in the chat prompt box.

Commonly used chat participants include:

| Variable    | Description |
|--------------|----------------------------------------------------------------------------------------------|
| `@github`    | Allows you to use {% data variables.product.github %}-specific {% data variables.product.prodname_copilot_short %} skills. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-github-skills-for-copilot-1). |
| `@project` | Has context about the code in your project. Use `@project` when you want {% data variables.product.prodname_copilot_short %} to consider all of the files in your project when it answers your question. |

{% endjetbrains %}

{% xcode %}

This version of this article is for {% data variables.product.prodname_copilot_short %} in Xcode. For other versions of this article, click the tabs above.

{% data reusables.copilot.about-copilot-enhancements %}

For information about how to get started with {% data variables.product.prodname_copilot_chat_short %} in Xcode, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by the command name.

Available slash commands may vary, depending on your environment and the context of your chat. To view a list of currently available slash commands, type `/` in the chat prompt box of your current environment. Below is a list of the slash commands for using {% data variables.product.prodname_copilot_chat_short %}.

| Command     | Description                                        |
|-------------|----------------------------------------------------|
| `/doc`      | Generate documentation for this symbol.            |
| `/explain`  | Provide an explanation for the selected code.      |
| `/fix`      | Suggest fixes for code errors and typos.           |
| `/simplify` | Simplify the current code selection.               |
| `/tests`    | Create a unit test for the current code selection. |

{% endxcode %}
