---
title: Using GitHub Copilot Chat
intro: 'You can start using {% data variables.product.prodname_copilot_chat %} by installing the extension in your preferred environment.'
product: '{% data reusables.gated-features.copilot-chat %}'
topics:
  - Copilot
defaultTool: vscode
versions:
  feature: copilot
shortTitle: Using Copilot Chat
---

{% vscode %}

## About {% data variables.product.prodname_copilot_chat %} and {% data variables.product.prodname_vscode %}

{% data reusables.copilot.chat-procedural-intro %}

## Prerequisites

{% data reusables.copilot.chat-subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vscode %}, you must have the latest version of {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/).

- To use {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vscode %}, you must be signed into {% data variables.product.prodname_vscode %} with the same {% data variables.product.prodname_dotcom %} ID that has access to {% data variables.product.prodname_copilot %}.

{% data reusables.copilot.enabling-copilot-chat-beta %}

## Installing the {% data variables.product.prodname_vscode %} extension

To use {% data variables.product.prodname_copilot_chat %}, you must first install the {% data variables.product.prodname_copilot_chat %} extension for {% data variables.product.prodname_vscode %}.

1. In {% data variables.product.prodname_vscode %}, open the **Extensions** view by clicking the **Extensions** icon in the activity bar on the left side of the {% data variables.product.prodname_vscode %} window.

    ![Screenshot of the extensions icon in the Activity Bar.](/assets/images/help/copilot/vsc-extensions-icon.png)

1. In the "Search Extensions in Marketplace" search box, search for the `{% data variables.product.prodname_copilot_chat %}` extension, then click **Install**.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat %} extension in the Extensions Marketplace.](/assets/images/help/copilot/vscode-extension-search.png)

1. In the {% data variables.product.prodname_vscode %} window, click **Reload required** to update {% data variables.product.prodname_vscode %}.
1. If you are prompted to sign in by a toast notification in the bottom right corner of {% data variables.product.prodname_vscode %}, click **Sign in to {% data variables.product.prodname_dotcom %}** and sign in with the same {% data variables.product.prodname_dotcom %} ID that has been granted access to the {% data variables.product.prodname_copilot_chat %} limited public beta.
1. Follow the prompts in {% data variables.product.prodname_vscode %} and on {% data variables.product.prodname_dotcom %} in your browser to complete the sign in and authentication process.
1. To confirm that {% data variables.product.prodname_copilot_chat %} has been successfully installed, in the activity bar on the left side of the {% data variables.product.prodname_vscode %} window, click the **{% data variables.product.prodname_copilot_chat %}** icon to open the {% data variables.product.prodname_copilot_chat %} chat window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat %} icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

{% note %}

**Note:** If you experience authentication issues after installing the extension, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat#troubleshooting-authentication-issues-in-your-editor)."

{% endnote %}

## Asking your first question

{% data reusables.copilot.copilot-chat-exclusively-code-questions %}

1. In the {% data variables.product.prodname_vscode %} activity bar, click the **{% data variables.product.prodname_copilot_chat %}** icon to open the {% data variables.product.prodname_copilot_chat %} chat window.

    ![Screenshot of the {% data variables.product.prodname_copilot_chat %} icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

1. At the bottom of the {% data variables.product.prodname_copilot_chat %} window, in the **Ask {% data variables.product.prodname_copilot_short %} a question or type `/` for topics** text box, type a coding related question, then press **Enter**. For example, type "How do I write a function that returns the sum of two numbers?".
1. {% data variables.product.prodname_copilot_chat %} will process your question and provide an answer, with code suggestions when appropriate, in the chat window.

   If your question is outside the scope of {% data variables.product.prodname_copilot_chat %}, it will tell you and may suggest an alternative question to ask.

1. Optionally, if {% data variables.product.prodname_copilot_chat %} suggests a follow-up question above the **Ask {% data variables.product.prodname_copilot_short %} a question or type `/` for topics** text box, click the follow-up question to ask it.

## Using code suggestions from {% data variables.product.prodname_copilot_chat %}

When {% data variables.product.prodname_copilot_chat %} provides code suggestions, you have a few options for how to use them.

1. In the {% data variables.product.prodname_copilot_chat %} window, to show the options for a code suggestion, hover over the suggestion.

    ![Screenshot of code suggestion options in the {% data variables.product.prodname_copilot_chat %} window.](/assets/images/help/copilot/vsc-code-suggestion-options.png)

1. Choose one of the options for using the code suggestion.
    - To copy the code suggestion to your clipboard, click the **Copy** icon.
    - To insert the code suggestion into your code at the current location of your cursor, click the **Insert at Cursor** icon.
    - To view additional options, click the **...** icon.
        - To create a new file and insert the suggestion into it, click **Insert Into New File**.
        - To run the code suggestion in the {% data variables.product.prodname_vscode %} terminal, click **Run in Terminal**.

## Asking {% data variables.product.prodname_copilot_chat %} questions about your code

{% data variables.product.prodname_copilot_chat %} can provide answers and support with a wide range of coding related topics.

1. In {% data variables.product.prodname_vscode %}, open the file you want {% data variables.product.prodname_copilot_chat %} to help you with.
1. Ask {% data variables.product.prodname_copilot_chat %} a question about the file you have open. For example:
    - To generate a description of the file's purpose, ask a question like, `What does this file do?`.
    - To generate a unit test for the file, type a request like, `Write a unit test for this file`. Alternatively, highlight the code you want to generate a unit test for, then ask a question like, `Write a unit test for this code`.
    - To generate a fix for a bug in the file, type a request like, `Fix this bug`.

## Sharing feedback about {% data variables.product.prodname_copilot_chat %}

To share feedback about {% data variables.product.prodname_copilot_chat %}, you can use the **share feedback** button in the {% data variables.product.prodname_copilot_chat %} window.

1. Scroll to the top of the {% data variables.product.prodname_copilot_chat %} window.
1. Click the **share feedback** button.
1. In your browser, in the **vscode-copilot-release** repository, create a new issue or open the {% data variables.product.prodname_copilot %} community discussion.
    - To open an issue to report a bug, next to **Bug report for {% data variables.product.prodname_copilot_chat %}**, click **Get started**.
    - To open an issue to request a feature, next to **Feature request for {% data variables.product.prodname_copilot_chat %}**, click **Get started**.
    - To report a security vulnerability, next to **Report a security vulnerability**, click **View policy**.
    - To ask a question in a discussion, next to **Questions**, click **Open**.

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)"
- "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"{% ifversion ghec %}
- "[AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"{% endif %}
- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvscode %}

{% visualstudio %}

## About {% data variables.product.prodname_copilot_chat %} and {% data variables.product.prodname_vs %}

{% data reusables.copilot.chat-procedural-intro %}

## Prerequisites

{% data reusables.copilot.chat-subscription-prerequisite %}

- To use {% data variables.product.prodname_copilot_chat %} with {% data variables.product.prodname_vs %}, you must be running {% data variables.product.prodname_vs %} 2022 version 17.6 or higher. For more information, see the [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) documentation.

- To use {% data variables.product.prodname_copilot_chat %} with {% data variables.product.prodname_vs %}, you must be signed into {% data variables.product.prodname_vs %} with the same {% data variables.product.prodname_dotcom %} ID that has access to {% data variables.product.prodname_copilot %}.

{% data reusables.copilot.enabling-copilot-chat-beta %}

## Installing the {% data variables.product.prodname_vs %} extension

To use {% data variables.product.prodname_copilot_chat %} with {% data variables.product.prodname_vs %}, you must install the {% data variables.product.prodname_vs %} extension.
{% data reusables.copilot.vs-extensions %}
1. In the "Manage Extensions" window, click **Visual Studio Marketplace**, search for "{% data variables.product.prodname_copilot_chat %}", then click **Download**.
{% data reusables.copilot.vs-exit-and-relaunch %}

{% note %}

**Note:** If you experience authentication issues after installing the extension, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat#troubleshooting-authentication-issues-in-your-editor)."

{% endnote %}

## Asking your first question

{% data reusables.copilot.copilot-chat-exclusively-code-questions %}

1. In the {% data variables.product.prodname_vs %} menu bar, to launch {% data variables.product.prodname_copilot_chat %}, click **View**, then click **{% data variables.product.prodname_copilot_chat %}**.
1. At the bottom of the {% data variables.product.prodname_copilot_chat_short %} window, in the **Ask {% data variables.product.prodname_copilot_short %}** text box, type a coding related question, then press **Enter**. For example, type "How do I write a function that returns the sum of two numbers?".

    {% note %}

    **Note:** If your question is outside the scope of {% data variables.product.prodname_copilot_chat %}, it will tell you and may suggest an alternative question to ask.

    {% endnote %}

1. If {% data variables.product.prodname_copilot_chat_short %} offers a code suggestion that you want to use, click the **Copy** icon to copy the code suggestion to your clipboard.
1. Optionally, if {% data variables.product.prodname_copilot_chat %} suggests a follow-up question under your last answer, click the follow-up question to ask it.

## Asking {% data variables.product.prodname_copilot_chat %} questions about your code

{% data variables.product.prodname_copilot_chat %} can provide answers and support with a wide range of coding related topics.

1. In {% data variables.product.prodname_vs %}, open the file you want {% data variables.product.prodname_copilot_chat %} to help you with.
1. Ask {% data variables.product.prodname_copilot_chat %} a question about the file you have open. For example:
    - To generate a description of the file's purpose, ask a question like, `What does this file do?`.
    - To generate a unit test for the file, type a request like, `Write a unit test for this file`. Alternatively, highlight the code you want to generate a unit test for, then ask a question like, `Write a unit test for this code`.
    - To generate a fix for a bug in the file, type a request like, `Fix this bug`.

## Sharing feedback about {% data variables.product.prodname_copilot_chat %}

To share feedback about {% data variables.product.prodname_copilot_chat %}, you can use the **Send feedback** button in {% data variables.product.prodname_vs %}. For more information on providing feedback for {% data variables.product.prodname_vs %}, see the [Visual Studio Feedback](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio?view=vs-2022) documentation.

1. In the top right corner of the {% data variables.product.prodname_vs %} window, click the **Send feedback** button.

    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)

1. Choose the option that best describes your feedback.
    - To report a bug, click **Report a problem**.
    - To request a feature, click **Suggest a feature**.

## Further reading

- [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-copilot-pre-release-terms)
- [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot){% ifversion ghec %}
- [AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement){% endif %}
- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot#faq)

{% endvisualstudio %}
