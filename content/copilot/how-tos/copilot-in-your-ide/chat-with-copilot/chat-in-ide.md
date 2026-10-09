---
title: Asking GitHub Copilot questions in your IDE
intro: Use {% data variables.copilot.copilot_chat_short %} in your editor to give you code suggestions, explain code, generate unit tests, and suggest code fixes.
redirect_from:
  - /copilot/github-copilot-chat/using-github-copilot-chat
  - /copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide
  - /copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide
  - /copilot/github-copilot-chat/copilot-chat-in-ides
  - /copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide
  - /copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide
  - /copilot/how-tos/chat/asking-github-copilot-questions-in-your-ide
  - /copilot/how-tos/chat/use-chat-in-ide
  - /copilot/how-tos/use-chat/use-chat-in-ide
  - /copilot/how-tos/chat-with-copilot/use-chat-in-ide
  - /copilot/how-tos/chat-with-copilot/chat-in-ide
  - /copilot/how-tos/copilot-in-your-ide/chat-with-copilot/chat-modes
defaultTool: vscode
versions:
  feature: copilot
shortTitle: Chat in IDE
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Introduction

This guide describes how to use {% data variables.copilot.copilot_chat_short %} and agents to automate coding tasks by breaking them into steps, using tools to read files, edit code, and run commands, and self-correcting when something goes wrong. You can also ask general questions about software development, or specific questions about the code in your project. For more information, see [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-in-ides).

To learn how to use {% data variables.product.prodname_copilot_short %} for agent-driven workflows in a desktop app, see [AUTOTITLE](/copilot/get-started/quickstart-copilot-app).

<!-- --------------------- -->
<!-- VS Code -->
<!-- --------------------- -->

{% vscode %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. {% data reusables.copilot.subscription-prerequisite %}
{% data reusables.copilot.vscode-prerequisites %}

{% data reusables.copilot.chat-access-denied %}

## Chat modes

You can use {% data variables.copilot.copilot_chat_short %} in the following modes:

* **Ask mode**: to get answers to coding questions and get {% data variables.product.prodname_copilot_short %} to provide code suggestions.
* **Agent mode**: to get {% data variables.product.prodname_copilot_short %} to autonomously accomplish a set task. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).
* **Plan mode**: to get {% data variables.product.prodname_copilot_short %} to create detailed implementation plans to ensure all requirements are met. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

To switch between modes, use the agents dropdown at the bottom of the chat view.

> [!NOTE]
> If you don’t see the **Agent** option in the mode selector, your enterprise or organization administrator may have disabled agent mode for your IDE.

### Using ask mode

Ask mode is optimized for answering questions about your codebase, coding, and general technology concepts. Use ask mode when you want to understand how something works, explore ideas, or get help with coding tasks.

To use ask mode, select **Ask** from the agents dropdown at the bottom of the chat view, then submit a prompt as described below.

## Submitting prompts

You can give the agent a high-level description of what you want to build and it gets to work. Each task runs inside an agent session, a persistent conversation you can track, pause, resume, or hand off to another agent.

1. To open the chat view, click the chat icon in the title bar of {% data variables.product.prodname_vscode %}. If the chat icon is not displayed, right-click the title bar and make sure that **Command Center** is selected.

   ![Screenshot of the '{% data variables.copilot.copilot_chat_short %}' button, highlighted with a dark orange outline.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

1. Enter a prompt in the prompt box. For an introduction to the kinds of prompts you can use, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and make a follow-up request if needed.

   The response may contain text, code blocks, buttons, images, URIs, and file trees. The response often includes interactive elements. For example, the response may include a menu to insert a code block, or a button to invoke a {% data variables.product.prodname_vscode %} command.

   To see the files that {% data variables.copilot.copilot_chat_short %} used to generate the response, select the **Used _n_ references** dropdown at the top of the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt. For examples, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/get-started-with-chat-in-your-ide).

### Chat participants

Chat participants are like domain experts who have a specialty that they can help you with.

{% data variables.copilot.copilot_chat_short %} can infer relevant chat participants based on your natural language prompt, improving discovery of advanced capabilities without you having to explicitly specify the participant you want to use in your prompt.

> [!NOTE] Automatic inference for chat participants is currently in {% data variables.release-phases.public_preview %} and is subject to change.

Alternatively, you can manually specify a chat participant to scope your prompt to a specific domain. To do this, type `@` in the chat prompt box, followed by a chat participant name.

For a list of available chat participants, type `@` in the chat prompt box. See also [AUTOTITLE](/copilot/reference/chat-cheat-sheet?tool=vscode#chat-participants) or [Chat participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants) in the {% data variables.product.prodname_vscode %} documentation.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. See also [AUTOTITLE](/copilot/reference/chat-cheat-sheet?tool=vscode#slash-commands) or [Slash commands](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features#_slash-commands) in the {% data variables.product.prodname_vscode %} documentation.

### Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type `#` in the chat prompt box, followed by a chat variable.

To see all available chat variables, type `#` in the chat prompt box. See also [AUTOTITLE](/copilot/reference/chat-cheat-sheet?tool=vscode#chat-variables).

## Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %}

{% data reusables.copilot.using-skills %}

## Using Model Context Protocol (MCP) servers

{% data reusables.copilot.mcp.mcp-chat-in-ide %}

## AI models for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.change-the-ai-model %}

## Additional ways to access {% data variables.copilot.copilot_chat_short %}

In addition to submitting prompts through the chat view, you can submit prompts in other ways:

* **Quick chat:** To open the quick chat dropdown, enter <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>Command</kbd>+<kbd>L</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd> (Windows/Linux).
* **Inline:** To start an inline chat directly in the editor or integrated terminal, enter <kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>i</kbd> (Windows/Linux).
* **Smart actions:** To submit prompts via the context menu, right click in your editor, select **{% data variables.product.prodname_copilot_short %}** in the menu that appears, then select one of the actions. Smart actions can also be accessed via the sparkle icon that sometimes appears when you select a line of code.

See [inline chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_inline-chat), [quick chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_quick-chat), and [chat smart actions](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-smart-actions) in the {% data variables.product.prodname_vscode %} documentation for more details.

## Using images in {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.using-images-in-chat %}

### Attaching images to your chat prompt

1. Do one of the following:

   * Copy an image and paste it into the chat view.
   * Drag and drop one or more image file from your operating system's file explorer—or from the Explorer in {% data variables.product.prodname_vscode_shortname %}—into the chat view.
   * Right-click an image file in the {% data variables.product.prodname_vscode_shortname %} Explorer and click **{% data variables.product.prodname_copilot_short %}** then **Add File to Chat**.

{% data reusables.copilot.type-prompt-for-image %}

## Sharing feedback

To indicate whether a response was helpful, use the thumbs up and thumbs down icons that appear next to the response.

To leave feedback about the {% data variables.copilot.copilot_chat %} extension, open an issue in the [microsoft/vscode-copilot-release](https://github.com/microsoft/vscode-copilot-release/issues) repository.

## Further reading

* [AUTOTITLE](/copilot/concepts/prompting/prompt-engineering)
* [Using {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/copilot-chat) in the {% data variables.product.prodname_vscode %} documentation
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [AUTOTITLE](/copilot/responsible-use/chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvscode %}

<!-- --------------------- -->
<!-- Visual Studio -->
<!-- --------------------- -->

{% visualstudio %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_vs %} 2022 version 17.8 or later**. See [Install {% data variables.product.prodname_vs %}](https://learn.microsoft.com/visualstudio/install/install-visual-studio) in the {% data variables.product.prodname_vs %} documentation.
  * _For {% data variables.product.prodname_vs %} 17.8 and 17.9:_
    * **{% data variables.product.prodname_copilot %} extension**. See [Install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states?ref_product=copilot&ref_type=engagement&ref_style=text) in the {% data variables.product.prodname_vs %} documentation.
    * **{% data variables.copilot.copilot_chat %} extension**. See [Install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states?ref_product=copilot&ref_type=engagement&ref_style=text) in the {% data variables.product.prodname_vs %} documentation.

   _{% data variables.product.prodname_vs %} 17.10 and later have the {% data variables.product.prodname_copilot %} and {% data variables.copilot.copilot_chat %} extensions built in. You don't need to install them separately._
* **Sign in to {% data variables.product.company_short %} in {% data variables.product.prodname_vs %}**. If you experience authentication issues, see [AUTOTITLE](/copilot/how-tos/troubleshoot-copilot/troubleshoot-common-issues#authentication-problems-in-visual-studio).

{% data reusables.copilot.chat-access-denied %}

## Chat modes

{% data variables.product.prodname_vs %} supports the following chat modes:

* **Ask mode**: Get answers and guidance without making changes to your code.
* **Agent mode**: Give {% data variables.product.prodname_copilot_short %} a high-level task and allow it to edit code, run commands, and iterate on the results. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).

To switch between modes, use the mode dropdown at the bottom of the chat panel. Chat modes are available in {% data variables.product.prodname_vs %} 17.14 and later.

### Using ask mode

Use ask mode when you want {% data variables.product.prodname_copilot_short %} to explain code, answer a question, or suggest an approach without modifying your project.

To use ask mode, select **Ask** from the mode dropdown at the bottom of the chat panel, then submit a prompt as described below.

## Submitting prompts

You can ask {% data variables.copilot.copilot_chat_short %} to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. In the {% data variables.copilot.copilot_chat_short %} window, enter a prompt, then press **Enter**. For example prompts, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/get-started-with-chat-in-your-ide).
1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy, insert, or preview the result of a code block.

   To see the files that {% data variables.copilot.copilot_chat_short %} used to generate the response, click the **References** link below the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. See also [AUTOTITLE](/copilot/reference/chat-cheat-sheet?tool=vscode#slash-commands) or [Slash commands](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#slash-commands) in the {% data variables.product.prodname_vs %} documentation.

### References

By default, {% data variables.copilot.copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also use `#` followed by a file name, file name and line numbers, or `solution` to reference a specific file, lines, or solution.

See also [AUTOTITLE](/copilot/reference/chat-cheat-sheet?tool=visualstudio#references) or [Reference](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#reference) in the {% data variables.product.prodname_vs %} documentation.

## Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %} (preview)

> [!NOTE]
> The `@github` chat participant is currently in preview, and only available in [{% data variables.product.prodname_vs %} 2022 Preview 2](https://visualstudio.microsoft.com/vs/preview/) onwards.

{% data variables.product.prodname_copilot_short %}'s {% data variables.product.prodname_dotcom %}-specific skills expand the type of information {% data variables.product.prodname_copilot_short %} can provide. To access these skills in {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vs %}, include `@github` in your question.

When you add `@github` to a question, {% data variables.product.prodname_copilot_short %} dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask {% data variables.copilot.copilot_chat_short %} to use a particular skill. For example, `@github Search the web to find the latest GPT4 model from OpenAI.`

You can generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: `@github What skills are available?`

## Using Model Context Protocol (MCP) servers

{% data reusables.copilot.mcp.mcp-chat-in-ide %}

## AI models for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.change-the-ai-model %}

## Additional ways to access {% data variables.copilot.copilot_chat_short %}

In addition to submitting prompts through the chat window, you can submit prompts inline. To start an inline chat, right click in your editor window and select **Ask {% data variables.product.prodname_copilot_short %}**.

See [Ask questions in the inline chat view](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat#ask-questions-in-the-inline-chat-view) in the {% data variables.product.prodname_vs %} documentation for more details.

## Using images in {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.using-images-in-chat %}

### Attaching images to your chat prompt

1. If you see the AI model picker at the bottom right of the chat view, select one of the models that supports adding images to prompts:

1. Do one of the following:

   * Copy an image and paste it into the chat view.
   * Click the paperclip icon at the bottom right of the chat view, click **Upload Image**, browse to the image file you want to attach, select it and click **Open**.

   You can add multiple images if required.

1. Type your prompt into the chat view to accompany the image. For example, `explain this image`, or `describe each of these images in detail`.

## Sharing feedback

To share feedback about {% data variables.copilot.copilot_chat_short %}, you can use the **Send feedback** button in {% data variables.product.prodname_vs %}. For more information on providing feedback for {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} Feedback](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022) documentation.

1. In the top right corner of the {% data variables.product.prodname_vs %} window, click the **Send feedback** button.

    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)

1. Choose the option that best describes your feedback.
    * To report a bug, click **Report a problem**.
    * To request a feature, click **Suggest a feature**.

## Further reading

* [AUTOTITLE](/copilot/concepts/prompting/prompt-engineering)
* [Using {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vs %} in the Microsoft Learn documentation](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022#use-copilot-chat-in-visual-studio)
* [Tips to improve {% data variables.copilot.copilot_chat %} results in the Microsoft Learn documentation](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [AUTOTITLE](/copilot/responsible-use/chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvisualstudio %}

<!-- --------------------- -->
<!-- JetBrains -->
<!-- --------------------- -->

{% jetbrains %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. {% data reusables.copilot.subscription-prerequisite %}
* **Compatible JetBrains IDE**. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}
{% data reusables.copilot.jetbrains-plugin-prerequisites %}

{% data reusables.copilot.chat-access-denied %}

## Chat modes

The agent picker in the {% data variables.copilot.copilot_chat_short %} panel lets you choose which agent drives your conversation. To switch agents, use the Agents dropdown at the bottom of the chat panel.

The following agents are available:

* **Agent mode** (default): Full agentic experience with autonomous task execution. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).
* **Ask mode**: Get quick answers and assistance without making code changes.
* **Plan mode**: Collaborate on planning before implementation—{% data variables.product.prodname_copilot_short %} analyzes your request and builds a structured plan for your review. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).
* **Edit mode**: Make controlled edits across multiple files that you review and accept individually.
* **{% data variables.copilot.copilot_cli_short %}**: Runs {% data variables.product.prodname_copilot_short %} through {% data variables.copilot.copilot_cli_short %}, providing a terminal-first agentic experience with support for multiple isolation modes, live session progress, and tool call visibility. For more information, see [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-cli).
* **{% data variables.copilot.custom_agents_caps_short %}**: Use personalized agents tailored to your specific needs. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-custom-agents).

{% data variables.copilot.copilot_edits_short %} lets you make changes across multiple files directly from a single {% data variables.copilot.copilot_chat_short %} prompt, using edit mode and agent mode.

> [!TIP]
> You can also access {% data variables.product.prodname_copilot_short %} from JetBrains AI Assistant without installing the {% data variables.product.prodname_copilot_short %} plugin. For more information, see [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-in-ides).

### Using edit mode

{% data reusables.copilot.copilot-edits.edit-mode-description %}

1. To start an edit session, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** in the menu bar, then select **Open {% data variables.copilot.copilot_chat %}**.
1. At the top of the chat panel, click **{% data variables.copilot.copilot_edits_short %}**.
1. Add relevant files to the _working set_ to indicate to {% data variables.product.prodname_copilot %} which files you want to work on. You can add all open files by clicking **Add all open files** or individually search for single files.
1. Submit a prompt. In response to your prompt, {% data variables.copilot.copilot_edits_short %} determines which files in your _working set_ to change and adds a short description of the change.
1. Review the changes and **Accept** or **Discard** the edits for each file.

## Submitting prompts

You can ask {% data variables.copilot.copilot_chat_short %} to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. Open the {% data variables.copilot.copilot_chat_short %} window by clicking the **{% data variables.copilot.copilot_chat %}** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the {% data variables.copilot.copilot_chat %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. Enter a prompt in the prompt box. For example prompts, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy or insert a code block.

   To see the files that {% data variables.copilot.copilot_chat_short %} used to generate the response, click the **References** link below the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Supplementing your prompt

You can use slash commands and file references to help {% data variables.product.prodname_copilot_short %} understand your what you are asking it to do.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. See also [AUTOTITLE](/copilot/reference/chat-cheat-sheet?tool=jetbrains#slash-commands-2).

### File references

By default, {% data variables.copilot.copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also tell {% data variables.copilot.copilot_chat_short %} which files to reference by dragging a file into the chat prompt box. Alternatively, you can right click on a file, select **GitHub Copilot**, then select **Reference File in Chat**.

## Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %}

{% data reusables.copilot.using-skills %}

## Using Model Context Protocol (MCP) servers

{% data reusables.copilot.mcp.mcp-chat-in-ide %}

## AI models for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.change-the-ai-model %}

## Additional ways to access {% data variables.copilot.copilot_chat_short %}

* **Built-in requests**. In addition to submitting prompts through the chat window, you can submit built-in requests by right clicking in a file, selecting **{% data variables.product.prodname_copilot %}**, then selecting one of the options.
* **Inline**. You can submit a chat prompt inline, and scope it to a highlighted code block or your current file.
   * To start an inline chat, right click on a code block or anywhere in your current file, hover over **{% data variables.product.prodname_copilot %}**, then select **{% octicon "plus" aria-hidden="true" aria-label="plus" %} {% data variables.product.prodname_copilot_short %}: Inline Chat**, or enter <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>.

## Sharing feedback

To share feedback about {% data variables.copilot.copilot_chat_short %}, you can use the **share feedback** link in JetBrains.

1. At the right side of the JetBrains IDE window, click the **{% data variables.copilot.copilot_chat_short %}** icon to open the {% data variables.copilot.copilot_chat_short %} window.

    ![Screenshot of the {% data variables.copilot.copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. At the top of the {% data variables.copilot.copilot_chat_short %} window, click the **share feedback** link.

    ![Screenshot of the share feedback link in the {% data variables.copilot.copilot_chat_short %} window.](/assets/images/help/copilot/jetbrains-share-feedback.png)

## Further reading

* [AUTOTITLE](/copilot/concepts/prompting/prompt-engineering)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [AUTOTITLE](/copilot/responsible-use/chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endjetbrains %}

<!-- --------------------- -->
<!-- XCode -->
<!-- --------------------- -->

{% xcode %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. {% data reusables.copilot.subscription-prerequisite %}
* **Latest version of the {% data variables.product.prodname_copilot %} extension**. For installation instructions, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/set-up-copilot/install-copilot-extension).
* **Sign in to {% data variables.product.company_short %} in Xcode**.

{% data reusables.copilot.chat-access-denied %}

## Chat modes

You can use {% data variables.copilot.copilot_chat_short %} in agent mode to autonomously accomplish a set task, or in plan mode to draft an implementation plan before any code changes are made. To switch between modes, use the agents dropdown at the bottom of the chat window.

* For agent mode, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).
* For plan mode, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Submitting prompts

You can ask {% data variables.copilot.copilot_chat_short %} to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. To open the chat window, click **Editor** in the menu bar, then click **{% data variables.product.prodname_copilot %}** then **Open Chat**. {% data variables.copilot.copilot_chat_short %} opens in a new window.

1. Enter a prompt in the prompt box. For example prompts, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy or insert a code block.

   To see the files that {% data variables.copilot.copilot_chat_short %} used to generate the response, click the **References** link below the response. The references may include a link to a custom instructions file for your repository. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

## Using Model Context Protocol (MCP) servers

{% data reusables.copilot.mcp.mcp-chat-in-ide %}

## AI models for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.change-the-ai-model %}

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command.

To see all available slash commands, type `/` in the chat prompt box. For more information, see [AUTOTITLE](/copilot/reference/chat-cheat-sheet?tool=xcode#slash-commands).

## File references

By default, {% data variables.copilot.copilot_chat_short %} will reference the file that you have open or the code that you have selected. To attach a specific file as reference, click {% octicon "paperclip" aria-label="Add attachments" %} in the chat prompt box.

## Chat management

You can open a conversation thread for each Xcode IDE to keep discussions organized across different contexts. You can also revisit previous conversations and reference past suggestions through the chat history.

## Sharing feedback

To indicate whether a response was helpful, use {% octicon "thumbsup" aria-label="Thumbs up" %} or {% octicon "thumbsdown" aria-label="Thumbs down" %} that appear next to the response.

## Further reading

* [AUTOTITLE](/copilot/concepts/prompting/prompt-engineering)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [AUTOTITLE](/copilot/responsible-use/chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endxcode %}

<!-- --------------------- -->
<!-- Eclipse -->
<!-- --------------------- -->

{% eclipse %}

## Prerequisites

{% data reusables.copilot.eclipse-prerequisites %}
* **Latest version of the {% data variables.product.prodname_copilot %} extension**. Download this from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/set-up-copilot/install-copilot-extension?tool=eclipse).
* **Sign in to {% data variables.product.company_short %} in Eclipse**.

{% data reusables.copilot.chat-access-denied %}

## Chat modes

You can use {% data variables.copilot.copilot_chat_short %} in agent mode to autonomously accomplish a set task, or in plan mode to draft an implementation plan before any code changes are made. To switch between modes, use the agents dropdown at the bottom of the chat panel.

* For agent mode, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-agent-mode).
* For plan mode, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode).

## Submitting prompts

You can ask {% data variables.copilot.copilot_chat_short %} to give you code suggestions, explain code, generate unit tests, and suggest code fixes.

1. To open the {% data variables.copilot.copilot_chat_short %} panel, click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" aria-label="copilot" %}) in the status bar at the bottom of Eclipse, then click **Open Chat**.

1. Enter a prompt in the prompt box, then press <kbd>Enter</kbd>.

   For an introduction to the kinds of prompts you can use, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/get-started-with-chat-in-your-ide).

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and make a follow up request if needed.

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt. For examples, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/chat-with-copilot/get-started-with-chat-in-your-ide).

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. For example, use `/explain` to ask {% data variables.product.prodname_copilot_short %} to explain the code in the file currently displayed in the editor.

To see all available slash commands, type `/` in the chat prompt box.

## Using Model Context Protocol (MCP) servers

{% data reusables.copilot.mcp.mcp-chat-in-ide %}

## AI models for {% data variables.copilot.copilot_chat_short %}

{% data reusables.copilot.change-the-ai-model %}

## Further reading

* [AUTOTITLE](/copilot/concepts/prompting/prompt-engineering)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/chat-with-copilot/chat-in-github)
* [AUTOTITLE](/copilot/responsible-use/chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endeclipse %}
