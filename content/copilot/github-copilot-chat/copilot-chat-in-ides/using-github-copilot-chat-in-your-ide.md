---
title: Using GitHub Copilot Chat in your IDE
intro: 'Use {% data variables.product.prodname_copilot_chat_short %} in your editor to give code suggestions, explain code, generate unit tests, and suggest code fixes.'
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-chat/using-github-copilot-chat
  - /copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide
defaultTool: vscode
versions:
  feature: copilot
shortTitle: Use Copilot Chat
---

{% vscode %}

## Prerequisites

- **Access to {% data variables.product.prodname_copilot %}**. See "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."
{% data reusables.copilot.vscode-prerequisites %}

{% data reusables.copilot.chat-access-denied %}

## Submitting prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} to give code suggestions, explain code, generate unit tests, and suggest code fixes.

1. Open the chat view by clicking the chat icon in the activity bar or by entering <kbd>Control</kbd>+<kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>i</kbd> (Windows/Linux).

   ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

   > [!TIP]
   >
   > For additional ways to access {% data variables.product.prodname_copilot_chat_short %}, including inline with your code, see [Additional ways to access {% data variables.product.prodname_copilot_chat_short %}](#additional-ways-to-access-copilot-chat) below.

1. Enter a prompt in the prompt box, or click one of the suggested prompts. For example prompts, see "[Example prompts](#example-prompts)" below.

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and make a follow up request if needed.

   The response may contain text, code blocks, buttons, images, URIs, and file trees. The response often includes interactive elements. For example, the response may include a menu to insert a code block, or a button to invoke a {% data variables.product.prodname_vscode %} command.

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt.

### Chat participants

Use chat participants to scope your prompt to a specific domain. To use a chat participant, type `@` in the chat prompt box, followed by a chat participant name. Chat participants include:

- `@workspace`: Has context about the code in your workspace. Use `@workspace` when you want {% data variables.product.prodname_copilot_short %} to consider the structure of your project, how different parts of your code interact, or design patterns in your project. See "[Ask questions about your project](#ask-questions-about-your-project)."
- `@vscode`: Has context about {% data variables.product.prodname_vscode %} commands and features. Use `@vscode` when you want help with {% data variables.product.prodname_vscode %}. See "[Ask questions about {% data variables.product.prodname_vscode %}](#ask-questions-about-visual-studio-code)."
- `@terminal`: Has context about the {% data variables.product.prodname_vscode %} terminal shell and its contents. Use `@terminal` when you want help creating or debugging terminal commands. See "[Ask questions about the command line](#ask-questions-about-the-command-line)."
{% ifversion ghec %}
- `@github`: Allows you to use {% data variables.product.prodname_dotcom %}-specific {% data variables.product.prodname_copilot_short %} skills. See "[Using {% data variables.product.prodname_dotcom %}  skills for {% data variables.product.prodname_copilot_short %}](#using-github-skills-for-copilot)."
{% endif %}

To see all available chat participants, type `@` in the chat prompt box. See also [Chat participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants) in the {% data variables.product.prodname_vscode %} documentation.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. Slash commands include:

- `/tests`: Generate unit tests for the selected code
- `/fix`: Propose a fix for problems in the selected code
- `/explain`: Explain the selected code
- `/clear`: Start a new chat

To see all available slash commands, type `/` in the chat prompt box. See also [Slash commands](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands) in the {% data variables.product.prodname_vscode %} documentation.

### Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type `#` in the chat prompt box, followed by a chat variable. Chat variables include:

- `#file`: Include a specific file as context in the chat.
- `#git`: Include information about the current Git repository.
- `#terminalLastCommand`: Include the last run command in the active {% data variables.product.prodname_vscode %} terminal.

To see all available chat variables, type `#` in the chat prompt box. See also [Chat variables](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-variables) in the {% data variables.product.prodname_vscode %} documentation.

## Example prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} specific questions about your project or general software questions. You can also ask {% data variables.product.prodname_copilot_chat_short %} to write code, fix errors, write tests, and document code.

### Ask general software questions

You can ask {% data variables.product.prodname_copilot_chat_short %} general software questions. For example:

- `tell me about nodejs web server frameworks`
- `how to create an express app`
- `@terminal how to update an npm package` (uses the @terminal [chat participant](#chat-participants))

### Ask questions about your project

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about your project.

- `what sorting algorithm does this function use`
- `@workspace how are notifications scheduled`
- `#file:gameReducer.js #file:gameInit.js how are these files related`

To give {% data variables.product.prodname_copilot_short %} the correct context, try some of these strategies:

- Highlight relevant lines of code
- Use chat variables like `#selection`, `#file`, `#editor`, `#codebase`, or `#git`
- Use the `@workspace` chat participant

### Write code

You can ask {% data variables.product.prodname_copilot_short %} to write code for you. For example:

- `write a function to sum all numbers in a list`
- `add error handling to this function`
- `@workspace add form validation, similar to the newsletter page`

When {% data variables.product.prodname_copilot_short %} returns a code block, the response includes options to copy the code, or to insert the code at your cursor, into a new file, or into the terminal.

### Set up a new project

Use the `/new` slash command to set up a new project. For example:

- `/new react app with typescript`
- `/new python django web application`
- `/new node.js express server`

Copilot will suggest a directory structure and provide a button to create the suggested files and contents. To preview a suggested file, select the file name in the suggested directory structure.

Use the `/newNotebook` slash command to set up a new Jupyter notebook. For example:

- `/newNotebook retrieve the titanic dataset and use Seaborn to plot the data`

### Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask {% data variables.product.prodname_copilot_short %} to fix the error.

You can also make general requests to improve or refactor your code.

- `how would you improve this code?`
- `translate this code to C#`
- `add error handling to this function`

### Write tests

Use the `/tests` slash command to ask {% data variables.product.prodname_copilot_short %} to write tests for the active file or selected code. For example:

- `/tests`
- `/tests using the Jest framework`
- `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

- `Add tests for a JavaScript function that should sum a list of integers`

### Ask questions about {% data variables.product.prodname_vscode %}

Use the `@vscode` chat participant to ask specific questions about {% data variables.product.prodname_vscode %}. For example:

- `@vscode tell me how to debug a node.js app`
- `@vscode how do I change my {% data variables.product.prodname_vscode %} colors`
- `@vscode how can I change key bindings`

### Ask questions about the command line

Use the `@terminal` chat participant to ask specific questions about the command line. For example:

- `@terminal find the largest file in the src directory`
- `@terminal #terminalLastCommand` to explain the last command and any errors

{% ifversion ghec %}

## Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %}

{% note %}

**Notes**:

- This feature is only available if you have a {% data variables.product.prodname_copilot_enterprise_short %} subscription.
- The `@github` chat participant is currently in beta and is subject to change.

{% endnote %}

{% data variables.product.prodname_copilot_short %} has a collection of {% data variables.product.prodname_dotcom %}-specific skills that it can use to answer your questions. To access these skills in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}, include `@github` in your question.

When you add `@github` to a question, {% data variables.product.prodname_copilot_short %} dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask {% data variables.product.prodname_copilot_chat_short %} to use a particular skill. You can do this in two ways:
- Use natural language to ask {% data variables.product.prodname_copilot_chat_short %} to use a skill. For example, `@github Search the web to find the latest GPT4 model from OpenAI.`
- To specifically invoke a web search you can include the `#web` variable in your question. For example, `@github #web What is the latest LTS of Node.js?`

### Currently available skills

You can generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: `@github What skills are available?`

The skills you can use in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %} include those shown in the table below.

| Skill  | Description | Enabled by default? | Example question |
| ------- | ----------- | ------------------- | -----------------|
| **Code search** | Natural language code search in the default branch of the Git repository. This skill is useful when you want to know where or how certain functionality has been implemented in the code. Note: the repository must be indexed - see "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-exploratory-questions-about-a-repository)." | Yes | `@github Where is the logic that controls the user session management, and how does it work?` |
| **Path search** | Retrieves a specific file in the default branch of the Git repository. This skill is useful when you provide the exact path of a file in the repository. | Yes | `@github What logic does user_auth.js encapsulate?` |
| **Show symbol definition** | Retrieves the lines of code that define a specific code symbol (function, class, or struct) in the default branch of the Git repository. This skill is useful when you have the exact name of a symbol, and want to understand it. | Yes | `@github Write unit tests for the AuthUser method` |
| **Knowledge base search** | Tell {% data variables.product.prodname_copilot_chat_short %} to answer a question within the context of a knowledge base. To initiate a knowledge base search, first enter `@github #kb`. | Yes | Enter `@github #kb`, then choose your organization's style guide knowledge base, then ask: `What is our coding convention for indentation?` |
| **Web search** | Searches the web using the Bing search engine. This skill is useful for teaching Copilot about recent events, new developments, trends, technologies, or extremely specific, detailed, or niche subjects. | No (requires admin approval - see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise-features)")| `@github What are some recent articles about SAT tokens securing against vulnerabilities in Node?` |

## Asking a question about a knowledge base

{% note %}

**Note**: This feature is only available if you have a {% data variables.product.prodname_copilot_enterprise_short %} subscription.

{% endnote %}

Organization owners can create knowledge bases, grouping together Markdown documentation across one or more repositories. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/managing-copilot-knowledge-bases)."

You can tell {% data variables.product.prodname_copilot_short %} to answer a question within the context of a knowledge base.

1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} window, in the **Ask {% data variables.product.prodname_copilot_short %} or type / for commands** text box, type `@github #kb`, then press **Enter** to open the knowledge base selector.
1. Pick one of your available knowledge bases using the arrow keys, then press **Enter**.
1. In the **Ask {% data variables.product.prodname_copilot_short %} or type / for commands** text box, continue your message with your question, and then press **Enter**.
1. {% data variables.product.prodname_copilot_chat_short %} will process your question and provide an answer, with citations from your knowledge base, in the chat window.

{% endif %}

## Additional ways to access {% data variables.product.prodname_copilot_chat_short %}

In addition to submitting prompts through the chat view, you can submit prompts in other ways:

- **Inline**: To start an inline chat directly in the editor or integrated terminal, enter <kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>i</kbd> (Windows/Linux).
- **Quick chat**: To open the quick chat dropdown, enter <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>i</kbd> (Mac) / <kbd>Shift</kbd>+<kbd>Ctrl</kbd>+<kbd>i</kbd> (Windows/Linux)
- **Smart actions**: To submit prompts via the context menu, right click in your editor, select **Copilot** in the menu that appears, then select one of the actions. Smart actions can also be accessed via the sparkle icon that sometimes appears when you select a line of code.

See [inline chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_inline-chat), [quick chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_quick-chat), and [chat smart actions](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-smart-actions) in the {% data variables.product.prodname_vscode %} documentation for more details.

## Sharing feedback

To indicate whether a response was helpful, use the thumbs up and thumbs down icons that appear next to the response.

To leave feedback about the {% data variables.product.prodname_copilot_chat %} extension, open an issue in the [microsoft/vscode-copilot-release](https://github.com/microsoft/vscode-copilot-release/issues) repository.

## Further reading

- [Using Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat) and [Getting started with GitHub Copilot Chat in VS Code](https://code.visualstudio.com/docs/copilot/getting-started-chat) in the {% data variables.product.prodname_vscode %} documentation
{% ifversion ghec %}
- "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)"
{% endif %}
- "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"{% ifversion ghec %}
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center){% endif %}
- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvscode %}

{% visualstudio %}

## Prerequisites

- **Access to {% data variables.product.prodname_copilot %}**. See "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."
- **{% data variables.product.prodname_vs %} 2022 version 17.8 or later**. See [Install Visual Studio](https://learn.microsoft.com/visualstudio/install/install-visual-studio) in the {% data variables.product.prodname_vs %} documentation.
- **{% data variables.product.prodname_copilot %} extension**. See [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states) in the {% data variables.product.prodname_vs %} documentation.
- **{% data variables.product.prodname_copilot_chat %} extension**. See [Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-install-and-states) in the {% data variables.product.prodname_vs %} documentation.
- **Sign in to {% data variables.product.company_short %} in {% data variables.product.prodname_vs %}**. If you experience authentication issues, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat-in-ides#troubleshooting-authentication-issues-in-your-editor)."

{% data reusables.copilot.chat-access-denied %}

## Submitting prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} to give code suggestions, explain code, generate unit tests, and suggest code fixes.

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.product.prodname_copilot_chat %}**.
1. In the {% data variables.product.prodname_copilot_chat_short %} window, enter a prompt, then press **Enter**. For example prompts, see "[Example prompts](#example-prompts)" below.
1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy, insert, or preview the result of a code block.

   To see the files that {% data variables.product.prodname_copilot_chat_short %} used to generate the response, select the **References** dropdown below the response.

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. Slash commands include:

- `/tests`: Generate unit tests for the selected code
- `/fix`: Propose a fix for problems in the selected code
- `/explain`: Explain the selected code
- `/optimize`: Analyze and improve the runtime of the selected code

To see all available slash commands, type `/` in the chat prompt box. See also [Slash commands](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#slash-commands) in the {% data variables.product.prodname_vs %} documentation.

### References

By default, {% data variables.product.prodname_copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also use `#` followed by a file name, file name and line numbers, or `solution` to reference a specific file, lines, or solution. For example:

- Reference a specific file: `Where are the tests in #MyFile.cs?`
- Reference multiple files: `How are these files related #MyFile.cs #MyFile2.cs`
- Reference specific lines in a file: `Explain this function #MyFile.cs: 66-72?`
- Reference the current file: `Is there a delete method in this #solution`

See also [Reference](https://learn.microsoft.com/visualstudio/ide/copilot-chat-context#reference) in the {% data variables.product.prodname_vs %} documentation.

## Example prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} specific questions about your project or general software questions. You can also ask {% data variables.product.prodname_copilot_chat_short %} to write code, fix errors, write tests, and document code.

### Ask general software questions

You can ask {% data variables.product.prodname_copilot_chat_short %} general software questions. For example:

- `tell me about nodejs web server frameworks`
- `how to create an express app`
- `how to update an npm package`

### Ask questions about your project

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about your project. To give {% data variables.product.prodname_copilot_short %} the correct context, try some of these strategies:

- Highlight relevant lines of code
- Open the relevant file
- Use `#file` to tell {% data variables.product.prodname_copilot_short %} to reference specific files
- Use `#solution` to tell {% data variables.product.prodname_copilot_short %} to reference the active file

For example:

- `what sorting algorithm does this function use`
- `#file:gameReducer.js what happens when a new game is requested`

### Write code

You can ask {% data variables.product.prodname_copilot_short %} to write code for you. For example:

- `write a function to sum all numbers in a list`
- `add error handling to this function`

When {% data variables.product.prodname_copilot_short %} returns a code block, the response includes options to copy the code, insert the code into a new file, or preview the code output.

### Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask {% data variables.product.prodname_copilot_short %} to fix the error.

You can also make general requests to improve or refactor your code.

- `how would you improve this code?`
- `translate this code to C#`
- `add error handling to this function`

### Write tests

Use the `/tests` slash command to ask {% data variables.product.prodname_copilot_short %} to write tests for the active file or selected code. For example:

- `/tests`
- `/tests using the Jest framework`
- `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

- `Add tests for a JavaScript function that should sum a list of integers`

{% ifversion ghec %}

## Using {% data variables.product.prodname_dotcom %} skills for {% data variables.product.prodname_copilot_short %}

{% note %}

**Notes**:

- This feature is only available if you have a {% data variables.product.prodname_copilot_enterprise_short %} subscription.
- The `@github` chat participant is currently in beta and is subject to change.

{% endnote %}

{% data variables.product.prodname_copilot_short %} has a collection of {% data variables.product.prodname_dotcom %}-specific skills that it can use to answer your questions. To access these skills in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %}, include `@github` in your question.

When you add `@github` to a question, {% data variables.product.prodname_copilot_short %} dynamically selects an appropriate skill, based on the content of your question. You can also explicitly ask {% data variables.product.prodname_copilot_chat_short %} to use a particular skill. For example, `@github Search the web to find the latest GPT4 model from OpenAI.`

### Currently available skills

You can generate a list of currently available skills by asking {% data variables.product.prodname_copilot_short %}: `@github What skills are available?`

The skills you can use in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %} include those shown in the table below.

| Skill  | Description | Enabled by default? | Example question |
| ------- | ----------- | ------------------- | -----------------|
| **Code search** | Natural language code search in the default branch of the Git repository. This skill is useful when you want to know where or how certain functionality has been implemented in the code. Note: the repository must be indexed - see "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-exploratory-questions-about-a-repository)." | Yes | `@github Where is the logic that controls the user session management, and how does it work?` |
| **Path search** | Retrieves a specific file in the default branch of the Git repository. This skill is useful when you provide the exact path of a file in the repository. | Yes | `@github What logic does user_auth.js encapsulate?` |
| **Show symbol definition** | Retrieves the lines of code that define a specific code symbol (function, class, or struct) in the default branch of the Git repository. This skill is useful when you have the exact name of a symbol, and want to understand it. | Yes | `@github Write unit tests for the AuthUser method` |
| **Web search** | Searches the web using the Bing search engine. This skill is useful for teaching Copilot about recent events, new developments, trends, technologies, or extremely specific, detailed, or niche subjects. | No (requires admin approval - see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise-features)")| `@github What are some recent articles about SAT tokens securing against vulnerabilities in Node?` |

{% endif %}

## Additional ways to access {% data variables.product.prodname_copilot_chat_short %}

In addition to submitting prompts through the chat window, you can submit prompts inline. To start an inline chat, right click in your editor window and select **Ask {% data variables.product.prodname_copilot_short %}**.

See [Ask questions in the inline chat view](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat#ask-questions-in-the-inline-chat-view) in the {% data variables.product.prodname_vs %} documentation for more details.

## Sharing feedback

To share feedback about {% data variables.product.prodname_copilot_chat_short %}, you can use the **Send feedback** button in {% data variables.product.prodname_vs %}. For more information on providing feedback for {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} Feedback](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022) documentation.

1. In the top right corner of the {% data variables.product.prodname_vs %} window, click the **Send feedback** button.

    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)

1. Choose the option that best describes your feedback.
    - To report a bug, click **Report a problem**.
    - To request a feature, click **Suggest a feature**.

## Further reading

- [Using {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vs %} in the Microsoft Learn documentation](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022#use-copilot-chat-in-visual-studio)
- [Tips to improve {% data variables.product.prodname_copilot_chat %} results in the Microsoft Learn documentation](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022)
{% ifversion ghec %}
- "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)"
{% endif %}
- "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"{% ifversion ghec %}
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center){% endif %}
- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvisualstudio %}

{% jetbrains %}

## Prerequisites

- **Access to {% data variables.product.prodname_copilot %}**. See "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."
- **A compatible JetBrains IDE**. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}

{% data reusables.copilot.jetbrains-plugin-prerequisites %}

{% data reusables.copilot.chat-access-denied %}

## Submitting prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} to give code suggestions, explain code, generate unit tests, and suggest code fixes.

1. Open the {% data variables.product.prodname_copilot_chat_short %} window by clicking the **{% data variables.product.prodname_copilot_chat_short %}** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. Enter a prompt in the prompt box. For example prompts, see "[Example prompts](#example-prompts)" below.

1. Evaluate {% data variables.product.prodname_copilot_short %}'s response, and submit a follow up prompt if needed.

   The response often includes interactive elements. For example, the response may include buttons to copy or insert a code block.

   To see the files that {% data variables.product.prodname_copilot_chat_short %} used to generate the response, select the **References** dropdown below the response.

## Using keywords in your prompt

You can use special keywords to help {% data variables.product.prodname_copilot_short %} understand your prompt.

### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type `/` in the chat prompt box, followed by a command. Slash commands include:

- `/tests`: Generate unit tests for the selected code
- `/fix`: Propose a fix for problems in the selected code
- `/explain`: Explain the selected code
- `/help`: Learn more about using {% data variables.product.prodname_copilot_chat_short %}

To see all available slash commands, type `/` in the chat prompt box.

### File references

By default, {% data variables.product.prodname_copilot_chat_short %} will reference the file that you have open or the code that you have selected. You can also tell {% data variables.product.prodname_copilot_chat_short %} which files to reference by dragging a file into the chat prompt box. Alternatively, you can right click on a file, select **GitHub Copilot**, then select **Reference File in Chat**.

## Example prompts

You can ask {% data variables.product.prodname_copilot_chat_short %} specific questions about your project or general software questions. You can also ask {% data variables.product.prodname_copilot_chat_short %} to write code, fix errors, write tests, and document code.

### Ask general software questions

You can ask {% data variables.product.prodname_copilot_chat_short %} general software questions. For example:

- `tell me about nodejs web server frameworks`
- `how to create an express app`
- `how to update an npm package`

### Ask questions about your project

You can ask {% data variables.product.prodname_copilot_chat_short %} questions about your project. To give {% data variables.product.prodname_copilot_short %} the correct context, try some of these strategies:

- Highlight relevant lines of code.
- Open the relevant file.
- Add the file as a reference. See [File references](#file-references).

For example:

- `what sorting algorithm does this function use`
- `how are these files related` (with references to the files in question)

### Write code

You can ask {% data variables.product.prodname_copilot_short %} to write code for you. For example:

- `write a function to sum all numbers in a list`
- `add error handling to this function`

When {% data variables.product.prodname_copilot_short %} returns a code block, the response includes options to copy the code or to insert the code at your cursor.

### Fix, improve, and refactor code

If your active file contains an error, use the `/fix` slash command to ask {% data variables.product.prodname_copilot_short %} to fix the error.

You can also make general requests to improve or refactor your code.

- `how would you improve this code?`
- `translate this code to C#`
- `add error handling to this function`

### Write tests

Use the `/tests` slash command to ask {% data variables.product.prodname_copilot_short %} to write tests for the active file or selected code. For example:

- `/tests`
- `/tests using the Jest framework`
- `/tests ensure the function rejects an empty list`

The `/tests` slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the `/tests` command. For example:

- `Add tests for a JavaScript function that should sum a list of integers`

## Additional ways to access {% data variables.product.prodname_copilot_chat_short %}

In addition to submitting prompts through the chat window, you can submit built-in requests by right clicking in a file, selecting **GitHub Copilot**, then selecting one of the options.

## Sharing feedback

To share feedback about {% data variables.product.prodname_copilot_chat_short %}, you can use the **share feedback** link in JetBrains.

1. At the right side of the JetBrains IDE window, click the **{% data variables.product.prodname_copilot_chat_short %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. At the top of the {% data variables.product.prodname_copilot_chat_short %} window, click the **share feedback** link.

    ![Screenshot of the share feedback link in the {% data variables.product.prodname_copilot_chat_short %} window.](/assets/images/help/copilot/jetbrains-share-feedback.png)

## Further reading

{% ifversion ghec %}- "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)"{% endif %}
- "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) "{% ifversion ghec %}
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center){% endif %}
- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endjetbrains %}
