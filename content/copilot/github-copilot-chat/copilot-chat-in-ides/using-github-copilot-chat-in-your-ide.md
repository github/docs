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
- **Latest version of {% data variables.product.prodname_vscode %}**. See the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/).
- **{% data variables.product.prodname_copilot_chat %} extension**. This is automatically installed when you install the {% data variables.product.prodname_copilot %} extension. See the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) in the Visual Studio Marketplace.
- **Sign in to {% data variables.product.company_short %} in {% data variables.product.prodname_vscode %}**. If you experience authentication issues, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat-in-ides#troubleshooting-authentication-issues-in-your-editor)."

If you have access to {% data variables.product.prodname_copilot %} via your organization or enterprise, you cannot use {% data variables.product.prodname_copilot_chat %} if your organization owner or enterprise administrator has disabled {% data variables.product.prodname_copilot_chat %}. See "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-policies-and-features-for-copilot-in-your-organization)."

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

- `@workspace`: Has context about the code in your workspace. Use `@workspace` when you want {% data variables.product.prodname_copilot_short %} to consider the structure of your project, how different parts of your code interact, or design patterns in your project.
- `@vscode`: Has context about {% data variables.product.prodname_vscode %} commands and features. Use `@vscode` when you want help with {% data variables.product.prodname_vscode %}.
- `@terminal`: Has context about the {% data variables.product.prodname_vscode %} terminal shell and its contents. Use `@terminal` when you want help creating or debugging terminal commands.

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

- `@vscode how to debug a node.js app`
- `@vscode how do I change my {% data variables.product.prodname_vscode %} colors`
- `@vscode how to change key bindings`

### Ask questions about the command line

Use the `@terminal` chat participant to ask specific questions about the command line. For example:

- `@terminal find the largest file in the src directory`
- `@terminal #terminalLastCommand` to explain the last command and any errors

## Additional ways to access {% data variables.product.prodname_copilot_chat_short %}

In addition to submitting prompts through the chat view, you submit prompts in other ways:

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

{% note %}

**Important:**

{% data reusables.gated-features.copilot-chat-callout %}

{% endnote %}

## About {% data variables.product.prodname_copilot_chat %} and {% data variables.product.prodname_vs %}

{% data reusables.copilot.chat-procedural-intro %} For more information about using {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} {% data variables.product.prodname_copilot_chat_short %}](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022) documentation.

## Prerequisites

{% data reusables.copilot.chat-subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot_chat %} with {% data variables.product.prodname_vs %}, you must be running {% data variables.product.prodname_vs %} 2022 version 17.8 or higher. For more information, see the [{% data variables.product.prodname_vs %} {% data variables.product.prodname_copilot %}](https://visualstudio.microsoft.com/github-copilot/) documentation.

- To use {% data variables.product.prodname_copilot_chat %} with {% data variables.product.prodname_vs %}, you must be signed into {% data variables.product.prodname_vs %} with the same {% data variables.product.prodname_dotcom %} ID that has access to {% data variables.product.prodname_copilot %}.

## Enabling or disabling {% data variables.product.prodname_copilot_chat %}

{% data reusables.copilot.enabling-or-disabling-copilot %}

## Installing the {% data variables.product.prodname_copilot_chat %} extension in {% data variables.product.prodname_vs %}

{% data reusables.copilot.install-copilot-vs-intro %}

{% data reusables.copilot.install-copilot-and-chat-combo-vs-procedure %}

### Installing the {% data variables.product.prodname_copilot_chat %} extension in {% data variables.product.prodname_vs %} for versions 17.8 and 17.9

To use {% data variables.product.prodname_copilot_chat %} with {% data variables.product.prodname_vs %}, you must install the {% data variables.product.prodname_vs %} extension.

{% data reusables.copilot.link-to-vs-docs %}

{% data reusables.copilot.vs-extensions %}

1. In the "Manage Extensions" window, click **{% data variables.product.prodname_vs %} Marketplace**, search for "{% data variables.product.prodname_copilot_chat %}", then click **Download**.
{% data reusables.copilot.vs-exit-and-relaunch %}

{% note %}

**Note:** If you experience authentication issues after installing the extension, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat-in-ides#troubleshooting-authentication-issues-in-your-editor)."

{% endnote %}

## Asking your first question

{% data reusables.copilot.copilot-chat-exclusively-code-questions %}
{% data reusables.copilot.chat-open-visualstudio %}
1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} window, in the **Ask {% data variables.product.prodname_copilot_short %}: Type / for commands and # to reference** text box, type a coding related question, then press **Enter**. For example, type "How do I write a function that returns the sum of two numbers?".

    {% note %}

    **Note:** If your question is outside the scope of {% data variables.product.prodname_copilot_chat %}, it will tell you and may suggest an alternative question to ask.

    {% endnote %}

1. If {% data variables.product.prodname_copilot_chat_short %} offers a code suggestion that you want to use, click the **Copy** icon to copy the code suggestion to your clipboard.
1. Optionally, if {% data variables.product.prodname_copilot_chat_short %} suggests a follow-up question under your last answer, click the follow-up question to ask it.

## Asking {% data variables.product.prodname_copilot_chat %} questions about your code

{% data variables.product.prodname_copilot_chat_short %} can provide answers and support with a wide range of coding related topics.

1. In {% data variables.product.prodname_vs %}, open the file you want {% data variables.product.prodname_copilot_chat_short %} to help you with.
{% data reusables.copilot.chat-open-visualstudio %}
{% data reusables.copilot.chat-asking-questions %}

{% note %}

**Note:** To find out about other special commands you can use with {% data variables.product.prodname_copilot_chat_short %}, enter `/help` in the chat input box. For more information on slash commands, see [Get better answers by setting the context for {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#slash-commands) in the {% data variables.product.prodname_vs %} documentation.

{% endnote %}

## Sharing feedback about {% data variables.product.prodname_copilot_chat %}

To share feedback about {% data variables.product.prodname_copilot_chat_short %}, you can use the **Send feedback** button in {% data variables.product.prodname_vs %}. For more information on providing feedback for {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} Feedback](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022) documentation.

1. In the top right corner of the {% data variables.product.prodname_vs %} window, click the **Send feedback** button.

    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)

1. Choose the option that best describes your feedback.
    - To report a bug, click **Report a problem**.
    - To request a feature, click **Suggest a feature**.

## Further reading

- [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot){% ifversion ghec %}
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center){% endif %}
- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)
- [Using {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vs %} in the Microsoft Learn documentation](https://learn.microsoft.com/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022#use-copilot-chat-in-visual-studio)
- [Tips to improve {% data variables.product.prodname_copilot_chat %} results in the Microsoft Learn documentation](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022)

{% endvisualstudio %}

{% jetbrains %}

{% note %}

**Important:**

{% data reusables.gated-features.copilot-chat-callout %}

{% endnote %}

## About {% data variables.product.prodname_copilot_chat %} and JetBrains

{% data reusables.copilot.chat-procedural-intro %}

## Prerequisites

{% data reusables.copilot.chat-subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot_chat %} in JetBrains, you must have a compatible JetBrains IDE installed. {% data variables.product.prodname_copilot_chat_short %} is compatible with the following IDEs:
  - IntelliJ IDEA (Ultimate, Community, Educational)
  - Android Studio
  - AppCode
  - CLion
  - DataGrip
  - DataSpell
  - GoLand
  - MPS
  - PhpStorm
  - PyCharm (Professional, Community, Educational)
  - Rider
  - RubyMine
  - RustRover
  - WebStorm

  For more information, see the [JetBrains IDEs](https://www.jetbrains.com/products/) tool finder.

## Enabling or disabling {% data variables.product.prodname_copilot_chat %}

{% note %}

**Note:**  If you have a {% data variables.product.prodname_copilot_for_individuals %} subscription, you are automatically granted access to {% data variables.product.prodname_copilot_chat %}.

{% endnote %}

{% data variables.product.prodname_copilot_chat %} is available to all organizations and enterprises that have an active {% data variables.product.prodname_copilot_for_business %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}{% endif %} license. You can enable or disable {% data variables.product.prodname_copilot_chat %} for your organization or enterprise in the {% data variables.product.prodname_copilot %} settings page.

If {% data variables.product.prodname_copilot_chat_short %} is enabled or disabled at the enterprise level, organizations within the enterprise cannot override the setting.

### Enabling or disabling {% data variables.product.prodname_copilot_chat %} at the organization level

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, and then click **Policies**.
1. To the right of **{% data variables.product.prodname_copilot_chat_short %} in the IDE**, select the dropdown menu, and then click **Enabled** or **Disabled**.

### Enabling or disabling {% data variables.product.prodname_copilot_chat %} at the enterprise level

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. To the right of **{% data variables.product.prodname_copilot_chat_short %} in the IDE**, select the dropdown menu, and then choose the appropriate option.
    - Click **Allowed** to enable {% data variables.product.prodname_copilot_chat_short %} for all organizations under your enterprise.
    - Click **Blocked** to disable {% data variables.product.prodname_copilot_chat_short %} for all organizations under your enterprise.
    - Click **No policy** to allow each organization under your enterprise to set their own policy.

## Installing or updating the {% data variables.product.prodname_copilot %} plugin in JetBrains

To use {% data variables.product.prodname_copilot_chat_short %} in a JetBrains IDE, you must install or update the {% data variables.product.prodname_copilot %} plugin. If you have not yet installed the {% data variables.product.prodname_copilot %} plugin, follow the steps in "[Installing the {% data variables.product.prodname_copilot %} plugin in your JetBrains IDE](#installing-the-github-copilot-plugin-in-your-jetbrains-ide)." If you have already installed the {% data variables.product.prodname_copilot %} plugin, follow the steps in "[Updating the {% data variables.product.prodname_copilot %} plugin in JetBrains](#updating-the-github-copilot-plugin-in-jetbrains)."

The following procedures will guide you through installing or updating the {% data variables.product.prodname_copilot %} plugin in IntelliJ IDEA. Steps to install the plugin in another supported IDE may differ.

### Installing the {% data variables.product.prodname_copilot %} plugin in your JetBrains IDE

{% data reusables.copilot.installing-copilot-in-jetbrains-ide %}

### Updating the {% data variables.product.prodname_copilot %} plugin in JetBrains

{% data reusables.copilot.jetbrains-settings-preferences %}
1. In the left-side menu of the **Settings/Preferences** dialog box, click **Plugins**.
1. At the top of the **Settings/Preferences** dialog box, click **Installed**. In the search bar, search for **{% data variables.product.prodname_copilot %}**, then click **Update**.
1. After {% data variables.product.prodname_copilot %} is updated, quit and relaunch your JetBrains IDE.

## Asking your first question

{% data reusables.copilot.copilot-chat-exclusively-code-questions %}

1. At the right side of the JetBrains IDE window, click the **{% data variables.product.prodname_copilot_chat_short %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} window, in the **Ask {% data variables.product.prodname_copilot_short %} a question or type `/` for commands** text box, type a coding related question, then press **Enter**. For example, type "How do I write a function that returns the sum of two numbers?".
1. {% data variables.product.prodname_copilot_chat_short %} will process your question and provide an answer, with code suggestions when appropriate, in the chat window.

   If your question is outside the scope of {% data variables.product.prodname_copilot_chat %}, it will tell you and may suggest an alternative question to ask.

1. Optionally, if {% data variables.product.prodname_copilot_chat_short %} suggests a follow-up question above the **Ask {% data variables.product.prodname_copilot_short %} a question or type `/` for commands** text box, click the follow-up question to ask it.

## Asking {% data variables.product.prodname_copilot_chat %} questions about your code

{% data variables.product.prodname_copilot_chat_short %} can provide answers and support with a wide range of coding-related topics.

1. In your JetBrains IDE, open the file you want {% data variables.product.prodname_copilot_chat_short %} to help you with.
1. Ask {% data variables.product.prodname_copilot_chat_short %} a question about the file you have open. For example:
    - To generate a description of the file's purpose, ask a question like, "What does this file do?"
    - To generate a unit test for the file, type a request like, "Write a unit test for this file." Alternatively, highlight the code you want to generate a unit test for, then ask a question like, "Write a unit test for this code."
    - To generate a fix for a bug in the file, type a request like, "Fix this bug."
1. Optionally, you can prompt {% data variables.product.prodname_copilot_chat_short %} to perform predefined tasks with slash commands. To see a list of all available slash commands and their definitions, in the **Ask {% data variables.product.prodname_copilot_short %} a question or type `/` for commands** text box, type `/`.

## Sharing feedback about {% data variables.product.prodname_copilot_chat %}

To share feedback about {% data variables.product.prodname_copilot_chat_short %}, you can use the **share feedback** link in JetBrains.

1. At the right side of the JetBrains IDE window, click the **{% data variables.product.prodname_copilot_chat_short %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. At the top of the {% data variables.product.prodname_copilot_chat_short %} window, click the **share feedback** link.

    ![Screenshot of the share feedback link in the {% data variables.product.prodname_copilot_chat_short %} window.](/assets/images/help/copilot/jetbrains-share-feedback.png)

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) "{% ifversion ghec %}
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center){% endif %}
- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endjetbrains %}
