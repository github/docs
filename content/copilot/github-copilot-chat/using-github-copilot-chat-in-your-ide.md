---
title: Using GitHub Copilot Chat in your IDE
intro: 'You can start using {% data variables.product.prodname_copilot_chat %} by installing the extension in your preferred environment.'
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-chat/using-github-copilot-chat
defaultTool: vscode
versions:
  feature: copilot
shortTitle: Use Copilot Chat (IDE)
---

{% vscode %}

{% note %}

**Important:**

{% data reusables.gated-features.copilot-chat-callout %}

{% endnote %}

## About {% data variables.product.prodname_copilot_chat %} and {% data variables.product.prodname_vscode %}

{% data reusables.copilot.chat-procedural-intro %}

## Prerequisites

{% data reusables.copilot.chat-subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vscode %}, you must have the latest version of {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/).

- To use {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vscode %}, you must be signed into {% data variables.product.prodname_vscode %} with the same {% data variables.product.prodname_dotcom %} ID that has access to {% data variables.product.prodname_copilot %}.

## Enabling or disabling {% data variables.product.prodname_copilot_chat %}

{% data reusables.copilot.enabling-or-disabling-copilot %}

## Installing the {% data variables.product.prodname_copilot_chat %} extension in {% data variables.product.prodname_vscode %}

To use {% data variables.product.prodname_copilot_chat %}, you must first install the {% data variables.product.prodname_copilot_chat %} extension for {% data variables.product.prodname_vscode %}.

1. In {% data variables.product.prodname_vscode %}, open the **Extensions** view by clicking the **Extensions** icon in the activity bar on the left side of the {% data variables.product.prodname_vscode %} window.

    ![Screenshot of the extensions icon in the Activity Bar.](/assets/images/help/copilot/vsc-extensions-icon.png)

1. In the "Search Extensions in Marketplace" search box, search for the `{% data variables.product.prodname_copilot_chat %}` extension, then click **Install**.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat %} extension in the Extensions Marketplace.](/assets/images/help/copilot/vscode-extension-search.png)

1. In the {% data variables.product.prodname_vscode %} window, click **Reload required** to update {% data variables.product.prodname_vscode %}.
1. If you are prompted to sign in by a toast notification in the bottom right corner of {% data variables.product.prodname_vscode %}, click **Sign in to {% data variables.product.prodname_dotcom %}**. Sign in with the same {% data variables.product.prodname_dotcom %} ID that has a license for {% data variables.product.prodname_copilot %}, or is assigned a seat for {% data variables.product.prodname_copilot %} through an organization.
1. Follow the prompts in {% data variables.product.prodname_vscode %} and on {% data variables.product.prodname_dotcom %} in your browser to complete the sign in and authentication process.
1. To confirm that {% data variables.product.prodname_copilot_chat %} has been successfully installed, in the activity bar on the left side of the {% data variables.product.prodname_vscode %} window, click the **{% data variables.product.prodname_copilot_chat_short %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} chat window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

{% note %}

**Note:** If you experience authentication issues after installing the extension, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat-in-ides#troubleshooting-authentication-issues-in-your-editor)."

{% endnote %}

## Asking your first question

{% data reusables.copilot.copilot-chat-exclusively-code-questions %}

1. In the {% data variables.product.prodname_vscode %} activity bar, click the **{% data variables.product.prodname_copilot_chat_short %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} chat window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} window, in the **Ask {% data variables.product.prodname_copilot_short %} or type / for commands** text box, type a coding-related question, then press **Enter**. For example, type "How do I write a function that returns the sum of two numbers?".
1. {% data variables.product.prodname_copilot_chat_short %} will process your question and provide an answer, with code suggestions when appropriate, in the chat window.

   If your question is outside the scope of {% data variables.product.prodname_copilot_chat %}, it will tell you and may suggest an alternative question to ask.

1. Optionally, if {% data variables.product.prodname_copilot_chat_short %} suggests a follow-up question above the **Ask {% data variables.product.prodname_copilot_short %} or type / for commands** text box, click the follow-up question to ask it.

## Using code suggestions from {% data variables.product.prodname_copilot_chat %}

When {% data variables.product.prodname_copilot_chat_short %} provides code suggestions, you have a few options for how to use them.

1. In the {% data variables.product.prodname_copilot_chat_short %} window, to show the options for a code suggestion, hover over the suggestion.

    ![Screenshot of code suggestion options in the {% data variables.product.prodname_copilot_chat_short %} window.](/assets/images/help/copilot/vsc-code-suggestion-options.png)

1. Choose one of the options for using the code suggestion.
    - To copy the code suggestion to your clipboard, click the **Copy** icon.
    - To insert the code suggestion into your code at the current location of your cursor, click the **Insert at Cursor** icon.
    - To view additional options, click the **...** icon.
        - To create a new file and insert the suggestion into it, click **Insert Into New File**.
        - To run the code suggestion in the {% data variables.product.prodname_vscode %} terminal, click **Run in Terminal**.

## Asking {% data variables.product.prodname_copilot_chat %} questions about your code

{% data variables.product.prodname_copilot_chat_short %} can provide answers and support with a wide range of coding related topics.

1. In {% data variables.product.prodname_vscode %}, open the file you want {% data variables.product.prodname_copilot_chat_short %} to help you with.
1. In the activity bar, click the **{% data variables.product.prodname_copilot_chat_short %}** icon to open the {% data variables.product.prodname_copilot_chat_short %} chat window.

{% data reusables.copilot.chat-asking-questions %}

{% note %}

**Note:** To find out about other special commands you can use with {% data variables.product.prodname_copilot_chat_short %}, enter `/help` in the chat input box. For more information on slash commands, see [Using {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% endnote %}

## Sharing feedback about {% data variables.product.prodname_copilot_chat %}

To share feedback about {% data variables.product.prodname_copilot_chat_short %}, you can use the **share feedback** button in the {% data variables.product.prodname_copilot_chat_short %} window.

1. At the top of the {% data variables.product.prodname_copilot_chat_short %} window, click the ellipsis (**...**), then click **Send Chat Feedback**.
1. In your browser, in the **vscode-copilot-release** repository, click **New issue**.
1. Choose one of the options that are displayed:
    - To open an issue to report a bug, click **Bug report for {% data variables.product.prodname_copilot_chat %}**.
    - To open an issue to request a feature, click **Feature request for {% data variables.product.prodname_copilot_chat %}**.
    - To report a security vulnerability, click **Report a security vulnerability**.
    - To ask a question in a discussion, click **Questions**.

## Further reading

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
