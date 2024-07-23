---
title: Quickstart for GitHub Copilot
intro: 'Quickly learn how to use {% data variables.product.prodname_copilot %} in your editor{% ifversion ghec %} or on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
---

## Introduction

{% ifversion ghec %}
{% webui %}

You can use {% data variables.product.prodname_copilot_chat_dotcom %} to get answers to coding-related questions, such as how best to code something, how to fix a bug, or how someone else's code works. For full details of what {% data variables.product.prodname_copilot_short %} can do, see "[AUTOTITLE](/copilot/about-github-copilot/what-is-github-copilot)."

Instructions for using {% data variables.product.prodname_copilot_short %} differ depending on whether you are in an editor or on {% data variables.product.prodname_dotcom_the_website %}. This version of the quickstart is for {% data variables.product.prodname_dotcom_the_website %}. Click the tabs above for instructions on using {% data variables.product.prodname_copilot_short %} in an editor.

## Prerequisites

{% data reusables.copilot.chat-dotcom-prerequisites %}

## Asking your first question

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a repository and open a file.
1. Click the {% data variables.product.prodname_copilot_short %} icon ({% octicon "copilot" aria-hidden="true" %}) at the top right of the file view.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} button, highlighted with a dark orange outline, at the top of the file view.](/assets/images/help/copilot/copilot-button-for-file.png)

1. Type a question in the "Ask {% data variables.product.prodname_copilot_short %}" box at the bottom of the chat panel and press <kbd>Enter</kbd>.

   For example, you could enter:

   * Explain this file.
   * How could I improve this code?
   * How can I test this code?

   {% data variables.product.prodname_copilot_short %} responds to your request in the panel.

1. You can continue the conversation by asking a follow-up question. For example, you could type "tell me more" to get {% data variables.product.prodname_copilot_short %} to expand on its last comment.

## Other questions you can ask

There are many more things you can do with {% data variables.product.prodname_copilot_chat_dotcom %}. For example:

* Ask a general question about software development
* Ask exploratory questions about a repository
* Ask a question about a knowledge base
* Find out about the changes in a pull request
* Ask a question about a specific issue or commit

For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)."

## Next steps

* **Find out more about {% data variables.product.prodname_copilot_chat %}** - See "[AUTOTITLE](/copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide){% ifversion fpt %}.{% endif %}"{% ifversion ghec %} and "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)."{% endif %}
* **Get {% data variables.product.prodname_copilot_short %} code completion suggestions in an IDE** - See "[AUTOTITLE](/enterprise-cloud@latest/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor)."
* **Learn how to write effective prompts** - See "[AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)."
* **Use {% data variables.product.prodname_copilot_short %} on your mobile device** - See "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github-mobile/using-github-copilot-chat-in-github-mobile)."
* **Use {% data variables.product.prodname_copilot_short %} on the command line** - See "[AUTOTITLE](/copilot/github-copilot-in-the-cli/using-github-copilot-in-the-cli)."

{% endwebui %}
{% endif %}

{% vscode %}

{% data reusables.copilot.quickstart-intro %}

Instructions for using {% data variables.product.prodname_copilot_short %} differ depending on the editor you use. This version of the quickstart is for {% data variables.product.prodname_vscode %}. Click the tabs above to see instructions for other editors{% ifversion ghec %} and for {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion fpt %}
{% data reusables.copilot.quickstart-signup %}
{% endif %}

## Prerequisites

{% ifversion ghec %}
* **{% data variables.product.prodname_copilot_short %} subscription** - To use {% data variables.product.prodname_copilot %} you must have been assigned a seat as part of a {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %} subscription.
{% endif %}
{% data reusables.copilot.vscode-prerequisites %}

## Chat with {% data variables.product.prodname_copilot %}

After you've installed the {% data variables.product.prodname_copilot %} extension, you can ask {% data variables.product.prodname_copilot_short %} coding-related questions.

> [!NOTE] {% data reusables.copilot.chat-access-denied %}

1. Open an existing code file.
1. Open the Chat view from the Activity Bar.

   ![Screenshot of the Chat icon in the {% data variables.product.prodname_vscode_shortname %} Activity Bar.](/assets/images/help/copilot/chat-button-vscode.png)

1. At the bottom of the chat view, in the chat input field, type: `explain this file`.
1. Press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} replies in the chat view.

1. In the editor, select one or more lines of code that are not commented.
1. In the chat input field, type: `add comments to these lines`.
1. If you like the comments that {% data variables.product.prodname_copilot_short %} suggests, hover over the suggested code in the chat view and click the "Insert at Cursor" icon to replace the selected lines with the suggested code.

   ![Screenshot of the "Insert at Cursor" icon in the chat view.](/assets/images/help/copilot/insert-at-cursor-vscode.png)

## Get your first code completion suggestion

The following example uses JavaScript, however other languages will work similarly. {% data reusables.copilot.supported-languages %}

1. Open {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. {% data reusables.copilot.accept-suggestion %}

## Next steps

{% data reusables.copilot.quickstart-nextsteps1 %}
* **Use {% data variables.product.prodname_copilot_short %} like a pro** - Learn how to write effective prompts for {% data variables.product.prodname_copilot %}. For more information, see "[Best practices for using {% data variables.product.prodname_copilot %} in VS Code](https://code.visualstudio.com/docs/copilot/prompt-crafting)" in the {% data variables.product.prodname_vscode %} documentation.
{% data reusables.copilot.quickstart-nextsteps2 %}

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.quickstart-intro %}

Instructions for using {% data variables.product.prodname_copilot_short %} differ depending on the editor you use. This version of the quickstart is for {% data variables.product.prodname_vs %}. Click the tabs above to see instructions for other editors{% ifversion ghec %} and for {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion fpt %}
{% data reusables.copilot.quickstart-signup %}
{% endif %}

## Prerequisites

{% ifversion ghec %}
* **Subscription to {% data variables.product.prodname_copilot_short %}**. To use {% data variables.product.prodname_copilot %} in Visual Studio, you must have an active {% data variables.product.prodname_copilot %} subscription. {% data reusables.copilot.subscription-prerequisite %}
{% endif %}
{% data reusables.copilot.visual-studio-prerequisites %}

## Chat with {% data variables.product.prodname_copilot %}

After you've installed the {% data variables.product.prodname_copilot %} extension, you can ask {% data variables.product.prodname_copilot_short %} coding-related questions.

> [!NOTE] {% data reusables.copilot.chat-access-denied %}

1. Open an existing code file.
1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.product.prodname_copilot_chat %}**.
1. In the {% data variables.product.prodname_copilot_chat_short %} window, type `what does this file do` then press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %}'s answer is displayed below your question.

1. Select a line of code in the editor.
1. In the {% data variables.product.prodname_copilot_chat_short %} window, type `explain this line` then press <kbd>Enter</kbd>.

## Get your first code completion suggestion

The following example uses JavaScript, however other languages will work similarly. {% data reusables.copilot.supported-languages %}

1. Open {% data variables.product.prodname_vs %}.
1. In {% data variables.product.prodname_vs %}, create a new JavaScript (_*.js_) file.
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. {% data reusables.copilot.accept-suggestion %}

## Next steps

{% data reusables.copilot.quickstart-nextsteps1 %}
* **Prompt like a pro** - Watch "[{% data variables.product.prodname_vs %} Prompt Engineering with {% data variables.product.prodname_copilot %}](https://www.youtube.com/watch?v=9hZsOeIINg8&list=PLReL099Y5nRckZDdcQ21UigO9pKa14yxC)" on YouTube.
{% data reusables.copilot.quickstart-nextsteps2 %}

{% endvisualstudio %}

{% jetbrains %}

{% data reusables.copilot.quickstart-intro %}

Instructions for using {% data variables.product.prodname_copilot_short %} differ depending on the editor you use. This version of the quickstart is for JetBrains IDEs. Click the tabs above to see instructions for other editors{% ifversion ghec %} and for {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion fpt %}
{% data reusables.copilot.quickstart-signup %}
{% endif %}

## Prerequisites

{% ifversion ghec %}
* **Subscription to {% data variables.product.prodname_copilot_short %}**. To use {% data variables.product.prodname_copilot %} in Visual Studio, you must have an active {% data variables.product.prodname_copilot %} subscription. {% data reusables.copilot.subscription-prerequisite %}
{% endif %}
* **A compatible JetBrains IDE**. {% data variables.product.prodname_copilot_short %} is supported in a large number of JetBrains IDEs. For a full list, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide?tool=jetbrains)."
{% data reusables.copilot.jetbrains-plugin-prerequisites %}

## Chat with {% data variables.product.prodname_copilot %}

After you've installed the {% data variables.product.prodname_copilot %} plugin, you can ask {% data variables.product.prodname_copilot_short %} coding-related questions.

> [!NOTE] {% data reusables.copilot.chat-access-denied %}

1. Open an existing code file.
1. Open the {% data variables.product.prodname_copilot_chat_short %} window by clicking the **{% data variables.product.prodname_copilot_chat_short %}** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

1. In the {% data variables.product.prodname_copilot_chat_short %} window, type `what does this file do` then press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %}'s answer is displayed below your question.

1. Select a line of code in the editor.
1. In the {% data variables.product.prodname_copilot_chat_short %} window, type `explain this line` then press <kbd>Enter</kbd>.

## Get your first code completion suggestion

The following example uses JavaScript, however other languages will work similarly. {% data reusables.copilot.supported-languages %}

1. In your JetBrains editor, create a new JavaScript (_*.js_) file.
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. {% data reusables.copilot.accept-suggestion %}

## Next steps

{% data reusables.copilot.quickstart-nextsteps1 %}
{% data reusables.copilot.quickstart-nextsteps2 %}

{% endjetbrains %}
