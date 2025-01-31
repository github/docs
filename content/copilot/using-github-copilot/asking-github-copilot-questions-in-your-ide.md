---
title: Asking GitHub Copilot questions in your IDE
intro: 'Use {% data variables.product.prodname_copilot_chat_short %} in your editor to give code suggestions, explain code, generate unit tests, and suggest code fixes.'
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-chat/using-github-copilot-chat
  - /copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide
  - /copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide
  - /copilot/github-copilot-chat/copilot-chat-in-ides
defaultTool: vscode
versions:
  feature: copilot
shortTitle: Chat in IDE
---

{% vscode %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. See [AUTOTITLE](/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
{% data reusables.copilot.vscode-prerequisites %}

{% data reusables.copilot.chat-access-denied %}

## Submitting prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} to give code suggestions, explain code, generate unit tests, and suggest code fixes.

{% data reusables.copilot.open-chat-vs-code %}

   ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

   > [!TIP]
   >
   > For additional ways to access {% data variables.product.prodname_copilot_chat_short %}, including inline with your code, see [Additional ways to access {% data variables.product.prodname_copilot_chat_short %}](#additional-ways-to-access-copilot-chat) below.

1. Enter a prompt in the prompt box, or click one of the suggested prompts. For an introduction to the kinds of prompts you can use, see [AUTOTITLE](/copilot/using-github-copilot/guides-on-using-github-copilot/getting-started-with-prompts-for-copilot-chat).

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and make a follow up request if needed.

   The response may contain text, code blocks, buttons, images, URIs, and file trees. The response often includes interactive elements. For example, the response may include a menu to insert a code block, or a button to invoke a {% data variables.product.prodname_vscode %} command.

   To see the files that {% data variables.product.prodname_copilot_chat_short %} used to generate the response, select the **Used _n_ references** dropdown at the top of the response. The references may include a link to a custom instructions file. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [AUTOTITLE](/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot).

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt. For examples, see [AUTOTITLE](/copilot/using-github-copilot/guides-on-using-github-copilot/getting-started-with-prompts-for-copilot-chat).

### Chat participants

Chat participants are AI domain experts that can perform tasks or answer questions in a specific domain.

{% data variables.product.prodname_copilot_chat_short %} can infer relevant chat participants based on your natural language prompt, improving discovery of advanced capabilities without you having to explicitly specify the participant you want to use in your prompt. However, if you prefer, you can still manually specify a chat participant to scope your prompt to a specific domain. To do this, type `@` in the chat prompt box, followed by a chat participant name.

> [!NOTE] Automatic inference for chat participants is currently in {% data variables.release-phases.public_preview %} and is subject to change.

Chat participants include:

* `@workspace`: Has context about the code in your workspace. Use `@workspace` when you want {% data variables.product.prodname_copilot_short %} to consider the structure of your project, how different parts of your code interact, or design patterns in your project.
* `@vscode`: Has context about {% data variables.product.prodname_vscode %} commands and features. Use `@vscode` when you want help with {% data variables.product.prodname_vscode %}.
* `@terminal`: Has context about the {% data variables.product.prodname_vscode %} terminal shell and its contents. Use `@terminal` when you want help creating or debugging terminal commands.
* `@azure`: Has context about Azure services and how to use, deploy and manage them. Use `@azure` when you want help with Azure. The `@azure` chat participant is currently in {% data variables.release-phases.public_preview %} and is subject to change.
{% ifversion ghec %}
* `@github`: Allows you to use {% data variables.product.prodname_dotcom %}-specific {% data variables.product.prodname_copilot_short %} skills. See [Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %}](#using-github-skills-for-copilot).
{% endif %}

In addition to the built-in {% data variables.product.prodname_vscode %} chat participants, you can also install {% data variables.product.prodname_copilot_extensions_short %} that provide chat participants. You can install these extensions from [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=apps&copilot_app=true) and from [{% data variables.product.prodname_vscode_marketplace %}](https://marketplace.visualstudio.com/search?target=VSCode&category=Chat&sortBy=Installs). For information about extensions from {% data variables.product.prodname_marketplace %} that provide chat participants, see [AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/about-github-copilot-extensions).

{% data reusables.copilot.copilot-extensions.public-preview-note %}

To see all available chat participants, type `@` in the chat prompt box.

See also [Chat participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants) in the {% data variables.product.prodname_vscode %} documentation.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. Slash commands include:

* `/tests`: Generate unit tests for the selected code
* `/fix`: Propose a fix for problems in the selected code
* `/explain`: Explain the selected code
* `/clear`: Start a new chat

To see all available slash commands, type `/` in the chat prompt box. See also [Slash commands](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands) in the {% data variables.product.prodname_vscode %} documentation.

### Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type `#` in the chat prompt box, followed by a chat variable. Chat variables include:

* `#file`: Include a specific file as context in the chat.
* `#git`: Include information about the current Git repository.
* `#terminalLastCommand`: Include the last run command in the active {% data variables.product.prodname_vscode %} terminal.

To see all available chat variables, type `#` in the chat prompt box. See also [Chat variables](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-variables) in the {% data variables.product.prodname_vscode %} documentation.

## Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %}

> [!NOTE]
> This functionality is available with the {% data variables.product.prodname_copilot_chat_short %} extension v0.20.3 or later and {% data variables.product.prodname_vscode_shortname %} or {% data variables.product.prodname_vscode_shortname %} Insiders 1.93 or later.

{% data variables.product.prodname_copilot_short %}'s {% data variables.product.prodname_dotcom %}-specific skills expand the type of information {% data variables.product.prodname_copilot_short %} can provide. To access these skills in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}, include `@github` in your question.

When you add `@github` to a question, {% data variables.product.prodname_copilot_short %} dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask {% data variables.product.prodname_copilot_chat_short %} to use a particular skill. You can do this in two ways:
* Use natural language to ask {% data variables.product.prodname_copilot_chat_short %} to use a skill. For example, `@github Search the web to find the latest GPT4 model from OpenAI.`
* To specifically invoke a web search you can include the `#web` variable in your question. For example, `@github #web What is the latest LTS of Node.js?`

### Currently available skills

You can generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: `@github What skills are available?`

The skills you can use in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %} include those shown in the table below.

<!-- Check whether any edits to this table also need to be made to the Visual Studio version of this table later in this file, or -->
<!-- to the same table in asking-github-copilot-questions-in-githubcom.md -->
| Skill | Description | Enabled by default? | Example question |
| ----- | ----------- | ------------------- | ---------------- |
| **Commit details** | Retrieves a list of commits, or the contents of a specific commit, to provide answers to commit-related questions. | Yes | `@github Explain the changes in the code of this commit` |
| **Discussion details** | Retrieves a specific {% data variables.product.prodname_dotcom %} discussion. This is useful for quickly getting the gist of the conversation in a discussion. | Yes | `@github Summarize this discussion LINK-TO-DISCUSSION` |
| **File details** | Retrieves a specific file in the default branch of the Git repository, allowing you to ask questions about the file and the recent changes made to it. This skill is useful when you provide the exact path of a file in the repository. | Yes | `@github What logic does user_auth.js encapsulate?` <br> <br> `@github What is the file history of user_auth.js?` |
| **{% data variables.product.prodname_GH_advanced_security %}** | Retrieves information about security alerts within your organization from {% data variables.product.prodname_GH_advanced_security %} features ({% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, and {% data variables.product.prodname_dependabot_alerts %}). | Yes | `@github How would I fix this {% data variables.product.prodname_code_scanning %} alert?` |
| **Issue details** | Retrieves a specific {% data variables.product.prodname_dotcom %} issue, including the issue's title, number, author, status, body, linked pull requests, comments, and timestamps. | Yes | `@github List issues assigned to me` |
| {% ifversion ghec %} |
| **Knowledge base search** | Tell {% data variables.product.prodname_copilot_chat_short %} to answer a question within the context of a knowledge base. To initiate a knowledge base search, first enter `@github #kb`. | Yes | Enter `@github #kb`, then choose your organization's style guide knowledge base, then ask: `What is our coding convention for indentation?` |
| {% endif %} |
| **Lexical code search** | Keyword code search in the default branch of the Git repository. This skill is useful when you want to know about specific functions, methods or keywords that exist in the code. This skill leverages most of the functionality available to [{% data variables.product.prodname_dotcom %} Search](/search-github/github-code-search/understanding-github-code-search-syntax#using-qualifiers) like `symbol` and `path`. | Yes | `Find me the tests for the GitService class` |
| **Path search** | Retrieves a specific file in the default branch of the Git repository. This skill is useful when you provide the exact path of a file in the repository. | Yes | `@github What logic does user_auth.js encapsulate?` |
| **Pull request details** | Retrieves a specific pull request. This allows you to ask questions about the pull request, including getting a summary of the pull request, its comments, or the code it changes. | Yes | `@github List my recent pull requests` |
| **Release details** | Retrieves the latest, or specified, release. This allows you to find out who created a release, when it happened, and information included in the release notes. | Yes | `@github When was the latest release?` |
| **Repository details** | Retrieves a specific {% data variables.product.prodname_dotcom %} repository. This is useful for finding out details such as the repository owner and the main language used. | Yes | `@github Tell me about PATH-TO-REPOSITORY` |
| **Semantic code search** | Natural language semantic code search in the default branch of the Git repository. This skill is useful when you want to know where or how certain functionality has been implemented in the code. For more information, see [AUTOTITLE](/copilot/using-github-copilot/indexing-repositories-for-copilot-chat). | Yes <br><br>Available for all public and private repositories with any subscription. | `How does this repo manage HTTP requests and responses?`|
| **Support search** | Retrieves information from the {% data variables.contact.contact_support_portal %}. This skill is useful for asking {% data variables.product.prodname_copilot_chat_short %} about {% data variables.product.prodname_dotcom %} products and support related questions. | Yes | `@github Can I use {% data variables.product.prodname_copilot_short %} knowledge bases with {% data variables.product.prodname_copilot_individuals_short %}?` |
| **Web search** | Searches the web using the Bing search engine. This skill allows {% data variables.product.prodname_copilot_short %} to access information about recent events, new developments, trends, technologies, or extremely specific, detailed, or niche subjects. | No <br><br>{% ifversion fpt %}_For {% data variables.product.prodname_copilot_individuals_short %}:_<br>Enable in your user settings.<br><br>_For {% data variables.product.prodname_copilot_business_short %}:_<br>Enable in organization settings.{% else %}Enable in enterprise or organization settings.{% endif %} | `@github #web What are some recent articles about SAT tokens securing against vulnerabilities in Node?` |

{% ifversion ghec %}

## Asking a question about a knowledge base

> [!NOTE] This feature is only available if you have a {% data variables.product.prodname_copilot_enterprise_short %} subscription.

Organization owners can create knowledge bases, grouping together Markdown documentation across one or more repositories. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-copilot-knowledge-bases).

You can tell {% data variables.product.prodname_copilot_short %} to answer a question within the context of a knowledge base.

1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} window, in the **Ask {% data variables.product.prodname_copilot_short %} or type / for commands** text box, type `@github #kb`, then press **Enter** to open the knowledge base selector.
1. Pick one of your available knowledge bases using the arrow keys, then press **Enter**.
1. In the **Ask {% data variables.product.prodname_copilot_short %} or type / for commands** text box, continue your message with your question, and then press **Enter**.
1. {% data variables.product.prodname_copilot_chat_short %} will process your question and provide an answer, with citations from your knowledge base, in the chat window.

{% endif %}

## AI models for {% data variables.product.prodname_copilot_chat_short %}

{% data reusables.copilot.copilot-chat-models-beta-note %}

{% data reusables.copilot.copilot-chat-models-list-o3 %}

### Changing your AI model

{% data reusables.copilot.chat-model-limitations-ide %}

{% data reusables.copilot.model-picker-enable-o1-models %}
{% data reusables.copilot.open-chat-vs-code %}
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

## Additional ways to access {% data variables.product.prodname_copilot_chat_short %}

In addition to submitting prompts through the chat view, you can submit prompts in other ways:

* **Inline:** To start an inline chat directly in the editor or integrated terminal, enter <kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>i</kbd> (Windows/Linux).
* **Quick chat:** To open the quick chat dropdown, enter <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Shift</kbd>+<kbd>Ctrl</kbd>+<kbd>i</kbd> (Windows/Linux)
* **Smart actions:** To submit prompts via the context menu, right click in your editor, select **Copilot** in the menu that appears, then select one of the actions. Smart actions can also be accessed via the sparkle icon that sometimes appears when you select a line of code.

See [inline chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_inline-chat), [quick chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_quick-chat), and [chat smart actions](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-smart-actions) in the {% data variables.product.prodname_vscode %} documentation for more details.

## Multi-file edits

{% data reusables.copilot.copilot-edits-public-preview-note %}

Use {% data variables.product.prodname_copilot_edits_vscode_short %} to make changes across multiple files directly from a single {% data variables.product.prodname_copilot_chat_short %} prompt.

1. Enable {% data variables.product.prodname_copilot_edits_vscode_short %} in the {% data variables.product.prodname_copilot_extension_short %} settings.
1. Start an edit session by selecting **Open {% data variables.product.prodname_copilot_edits_vscode_short %}** from the {% data variables.product.prodname_copilot_chat_short %} menu.
1. Optionally, add relevant files to the _working set_ to indicate to {% data variables.product.prodname_copilot %} which files you want to work on.
1. Submit a prompt. In response to your prompt, {% data variables.product.prodname_copilot_edits_vscode_short %} determines which files in your _working set_ to change and adds a short description of the change.
1. Review the changes and **Apply** or **Discard** the edits for each file.

For more information, see [{% data variables.product.prodname_copilot_edits_vscode_short %}](https://code.visualstudio.com/docs/copilot/copilot-edits) in the {% data variables.product.prodname_vscode %} documentation.

## Sharing feedback

To indicate whether a response was helpful, use the thumbs up and thumbs down icons that appear next to the response.

To leave feedback about the {% data variables.product.prodname_copilot_chat %} extension, open an issue in the [microsoft/vscode-copilot-release](https://github.com/microsoft/vscode-copilot-release/issues) repository.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
* [Using Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat) and [Getting started with GitHub Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/getting-started-chat) in the {% data variables.product.prodname_vscode %} documentation
* [AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)
* [AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvscode %}

{% visualstudio %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. See [AUTOTITLE](/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
* **{% data variables.product.prodname_vs %} 2022 version 17.8 or later**. See [Install Visual Studio](https://learn.microsoft.com/visualstudio/install/install-visual-studio) in the {% data variables.product.prodname_vs %} documentation.
* **{% data variables.product.prodname_copilot %} extension**. See [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states) in the {% data variables.product.prodname_vs %} documentation.
* **{% data variables.product.prodname_copilot_chat %} extension**. See [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states) in the {% data variables.product.prodname_vs %} documentation.
* **Sign in to {% data variables.product.company_short %} in {% data variables.product.prodname_vs %}**. If you experience authentication issues, see [AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat-in-ides#troubleshooting-authentication-issues-in-your-editor).

{% data reusables.copilot.chat-access-denied %}

## Submitting prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} to give code suggestions, explain code, generate unit tests, and suggest code fixes.

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.product.prodname_copilot_chat %}**.
1. In the {% data variables.product.prodname_copilot_chat_short %} window, enter a prompt, then press **Enter**. For example prompts, see [AUTOTITLE](/copilot/using-github-copilot/guides-on-using-github-copilot/getting-started-with-prompts-for-copilot-chat).
1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy, insert, or preview the result of a code block.

   To see the files that {% data variables.product.prodname_copilot_chat_short %} used to generate the response, click the **References** link below the response. The references may include a link to a custom instructions file. This file contains additional information that is automatically added to all of your chat questions to improve the quality of the responses. For more information, see [AUTOTITLE](/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot).

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt.

### Extending {% data variables.product.prodname_copilot_chat_short %}

{% data reusables.copilot.copilot-extensions.extending-copilot-chat %}

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. Slash commands include:

* `/tests`: Generate unit tests for the selected code
* `/fix`: Propose a fix for problems in the selected code
* `/explain`: Explain the selected code
* `/optimize`: Analyze and improve the runtime of the selected code

To see all available slash commands, type `/` in the chat prompt box. See also [Slash commands](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#slash-commands) in the {% data variables.product.prodname_vs %} documentation.

### References

By default, {% data variables.product.prodname_copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also use `#` followed by a file name, file name and line numbers, or `solution` to reference a specific file, lines, or solution. For example:

* Reference a specific file: `Where are the tests in #MyFile.cs?`
* Reference multiple files: `How are these files related #MyFile.cs #MyFile2.cs`
* Reference specific lines in a file: `Explain this function #MyFile.cs: 66-72?`
* Reference the current file: `Is there a delete method in this #solution`

See also [Reference](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#reference) in the {% data variables.product.prodname_vs %} documentation.

## Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %} (preview)

> [!NOTE]
> The `@github` chat participant is currently in preview, and only available in [{% data variables.product.prodname_vs %} 2022 Preview 2](https://visualstudio.microsoft.com/vs/preview/) onwards.

{% data variables.product.prodname_copilot_short %}'s {% data variables.product.prodname_dotcom %}-specific skills expand the type of information {% data variables.product.prodname_copilot_short %} can provide. To access these skills in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %}, include `@github` in your question.

When you add `@github` to a question, {% data variables.product.prodname_copilot_short %} dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask {% data variables.product.prodname_copilot_chat_short %} to use a particular skill. For example, `@github Search the web to find the latest GPT4 model from OpenAI.`

### Currently available skills

You can generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: `@github What skills are available?`

The skills you can use in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %} include those shown in the table below.

<!-- Check whether any edits to this table also need to be made to the Visual Studio version of this table later in this file, or -->
<!-- to the same table in asking-github-copilot-questions-in-githubcom.md -->
| Skill  | Description | Enabled by default? | Example question |
| ------ | ----------- | ------------------- | -----------------|
| {% ifversion ghec %} |
| **Knowledge base search** | Tell {% data variables.product.prodname_copilot_chat_short %} to answer a question within the context of a knowledge base. To initiate a knowledge base search, first enter `@github`, then press **#**, then select a knowledge base. | Yes | Enter `@github #`, then choose your organization's style guide knowledge base, then ask: `What is our coding convention for indentation?` |
| {% endif %} |
| **Lexical code search** | Keyword code search in the default branch of the Git repository. This skill is useful when you want to know about specific functions, methods or keywords that exist in the code. This skill leverages most of the functionality available to [{% data variables.product.prodname_dotcom %} Search](/search-github/github-code-search/understanding-github-code-search-syntax#using-qualifiers) like `symbol` and `path`. | Yes | `Find me the tests for the GitService class` |
| **Path search** | Retrieves a specific file in the default branch of the Git repository. This skill is useful when you provide the exact path of a file in the repository. | Yes | `@github What logic does user_auth.js encapsulate?` |
| **Semantic code search** | Natural language semantic code search in the default branch of the Git repository. This skill is useful when you want to know where or how certain functionality has been implemented in the code. For more information, see [AUTOTITLE](/copilot/using-github-copilot/indexing-repositories-for-copilot-chat). | Yes <br><br>Available for all public and private repositories with any subscription. | `How does this repo manage HTTP requests and responses?`|
| **Web search** | Searches the web using the Bing search engine. This skill allows {% data variables.product.prodname_copilot_short %} to access information about recent events, new developments, trends, technologies, or extremely specific, detailed, or niche subjects. | No <br><br>{% ifversion fpt %}_For {% data variables.product.prodname_copilot_individuals_short %}:_<br>Enable in your user settings.<br><br>_For {% data variables.product.prodname_copilot_business_short %}:_<br>Enable in organization settings.{% else %}Enable in enterprise or organization settings.{% endif %} | `@github What are some recent articles about SAT tokens securing against vulnerabilities in Node?` |

{% ifversion ghec %}

## Asking a question about a knowledge base (preview)

> [!NOTE]
> * This feature is only available if you have a {% data variables.product.prodname_copilot_enterprise_short %} subscription.
> * Support for knowledge bases is currently in preview, and only available in [{% data variables.product.prodname_vs %} 2022 Preview 3](https://visualstudio.microsoft.com/vs/preview/) onwards.

Organization owners can create knowledge bases, grouping together Markdown documentation across one or more repositories. For more information, see [AUTOTITLE](/copilot/github-copilot-enterprise/managing-copilot-knowledge-bases).

You can tell {% data variables.product.prodname_copilot_short %} to answer a question within the context of a knowledge base.

1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} window, in the **Ask {% data variables.product.prodname_copilot_short %}: Type / for commands and # to reference** text box, type `@github`, press <kbd>#</kbd>, then select a knowledge base from the list.
1. In the **Type / for commands and # to reference** text box, continue your message with your question, and then press **Enter**.
1. {% data variables.product.prodname_copilot_chat_short %} will process your question and provide an answer, with citations from your knowledge base, in the chat window.

{% endif %}

## AI models for {% data variables.product.prodname_copilot_chat_short %}

{% data reusables.copilot.copilot-chat-models-beta-note %}

{% data reusables.copilot.copilot-chat-models-list-o1-preview %}

### Changing your AI model

To use multi-model {% data variables.product.prodname_copilot_chat_short %}, you must use {% data variables.product.prodname_vs %} 17.12 Preview 3 or later. See [{% data variables.product.prodname_vs %} 2022 Preview](https://visualstudio.microsoft.com/vs/preview/#download-preview) in the {% data variables.product.prodname_vs %} documentation.

{% data reusables.copilot.chat-model-limitations-ide %}

{% data reusables.copilot.model-picker-enable-o1-models %}
1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.product.prodname_copilot_chat %}**.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

## Additional ways to access {% data variables.product.prodname_copilot_chat_short %}

In addition to submitting prompts through the chat window, you can submit prompts inline. To start an inline chat, right click in your editor window and select **Ask {% data variables.product.prodname_copilot_short %}**.

See [Ask questions in the inline chat view](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat#ask-questions-in-the-inline-chat-view) in the {% data variables.product.prodname_vs %} documentation for more details.

## Sharing feedback

To share feedback about {% data variables.product.prodname_copilot_chat_short %}, you can use the **Send feedback** button in {% data variables.product.prodname_vs %}. For more information on providing feedback for {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} Feedback](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022) documentation.

1. In the top right corner of the {% data variables.product.prodname_vs %} window, click the **Send feedback** button.

    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)

1. Choose the option that best describes your feedback.
    * To report a bug, click **Report a problem**.
    * To request a feature, click **Suggest a feature**.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
* [Using {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vs %} in the Microsoft Learn documentation](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022#use-copilot-chat-in-visual-studio)
* [Tips to improve {% data variables.product.prodname_copilot_chat %} results in the Microsoft Learn documentation](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022)
* [AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)
* [AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvisualstudio %}

{% jetbrains %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. See [AUTOTITLE](/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot).
* **A compatible JetBrains IDE**. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}
{% data reusables.copilot.jetbrains-plugin-prerequisites %}

{% data reusables.copilot.chat-access-denied %}

## Submitting prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} to give code suggestions, explain code, generate unit tests, and suggest code fixes.

1. Open the {% data variables.product.prodname_copilot_chat_short %} window by clicking the **{% data variables.product.prodname_copilot_chat_short %}** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. Enter a prompt in the prompt box. For example prompts, see [AUTOTITLE](/copilot/using-github-copilot/guides-on-using-github-copilot/getting-started-with-prompts-for-copilot-chat).

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy or insert a code block.

   To see the files that {% data variables.product.prodname_copilot_chat_short %} used to generate the response, select the **References** dropdown below the response.

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt.

### Extending {% data variables.product.prodname_copilot_chat_short %}

{% data reusables.copilot.copilot-extensions.extending-copilot-chat %}

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. Slash commands include:

* `/tests`: Generate unit tests for the selected code
* `/fix`: Propose a fix for problems in the selected code
* `/explain`: Explain the selected code
* `/help`: Learn more about using {% data variables.product.prodname_copilot_chat_short %}

To see all available slash commands, type `/` in the chat prompt box.

### File references

By default, {% data variables.product.prodname_copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also tell {% data variables.product.prodname_copilot_chat_short %} which files to reference by dragging a file into the chat prompt box. Alternatively, you can right click on a file, select **GitHub Copilot**, then select **Reference File in Chat**.

## Additional ways to access {% data variables.product.prodname_copilot_chat_short %}

* **Built-in requests**. In addition to submitting prompts through the chat window, you can submit built-in requests by right clicking in a file, selecting **{% data variables.product.prodname_copilot %}**, then selecting one of the options.
* **Inline**. You can submit a chat prompt inline, and scope it to a highlighted code block or your current file.
   * To start an inline chat, right click on a code block or anywhere in your current file, hover over **{% data variables.product.prodname_copilot %}**, then select **{% octicon "plus" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}: Inline Chat**, or enter <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>.

## Sharing feedback

To share feedback about {% data variables.product.prodname_copilot_chat_short %}, you can use the **share feedback** link in JetBrains.

1. At the right side of the JetBrains IDE window, click the **{% data variables.product.prodname_copilot_chat_short %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. At the top of the {% data variables.product.prodname_copilot_chat_short %} window, click the **share feedback** link.

    ![Screenshot of the share feedback link in the {% data variables.product.prodname_copilot_chat_short %} window.](/assets/images/help/copilot/jetbrains-share-feedback.png)

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
* [AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)
* [AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)
* [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center)
* [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endjetbrains %}
