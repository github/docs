---
title: Using GitHub Copilot Extensions
intro: 'You can use {% data variables.product.prodname_copilot_extensions %} to interact with external tools in {% data variables.product.prodname_copilot_chat %}.'
product: '{% data reusables.gated-features.copilot-extensions %}'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Use Copilot Extensions
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About using {% data variables.product.prodname_copilot_extensions %}

{% data variables.product.prodname_copilot_extensions_short %} **work the same way across all {% data variables.product.prodname_copilot_chat_short %} interfaces where {% data variables.product.prodname_copilot_extensions_short %} are available**. {% data variables.product.prodname_copilot_extensions_short %} are available in:

{% data reusables.copilot.copilot-extensions.compatible-chat-interfaces %}

If you have a {% data variables.product.prodname_copilot_individuals_short %} subscription, you need to install a {% data variables.product.prodname_copilot_extension_short %} before you can use the extension in {% data variables.product.prodname_copilot_chat_short %}. See "[AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/installing-github-copilot-extensions-for-your-personal-account)."

If you have access to {% data variables.product.prodname_copilot_short %} through a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription, an organization owner needs to install {% data variables.product.prodname_copilot_extensions_short %} for your organization. See "[AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/installing-github-copilot-extensions-for-your-organization)."

## Using {% data variables.product.prodname_copilot_extensions %}

1. To start using a {% data variables.product.prodname_copilot_extension_short %}, open any of the following {% data variables.product.prodname_copilot_chat_short %} interfaces:
    - {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}. See "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide?tool=vscode#asking-your-first-question)."
    - {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %}. See "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide?tool=visualstudio#asking-your-first-question-1)."{% ifversion ghec %}
    - {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_dotcom_the_website %} (if you have a {% data variables.product.prodname_copilot_enterprise_short %} subscription). See "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-a-general-question-about-software-development)."{% endif %}
1. To see a list of all {% data variables.product.prodname_copilot_extensions_short %} available in your {% data variables.product.prodname_copilot_chat_short %} conversation, in the {% data variables.product.prodname_copilot_chat_short %} text box, type `@`.

    > [!NOTE] If you are using {% data variables.product.prodname_copilot_chat_short %} in an IDE, and you or your organization owner install a {% data variables.product.prodname_copilot_extension_short %} while your IDE is open, you need to restart your IDE to begin using the {% data variables.product.prodname_copilot_extension_short %}.

1. In the list of available {% data variables.product.prodname_copilot_extensions_short %}, click the one you want to use.
1. To begin interacting with the {% data variables.product.prodname_copilot_extension_short %}, in the {% data variables.product.prodname_copilot_chat_short %} text box, ask the extension to answer a question or perform an action, then press <kbd>Enter</kbd>. For each new request, be sure to include `@EXTENSION-NAME` at the beginning of your sentence.
    - If you did not install the {% data variables.product.prodname_copilot_extension_short %} yourself, and it is your first time using the {% data variables.product.prodname_copilot_extension_short %}, you will be asked to authorize the extension. See "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."
    - If you ask a {% data variables.product.prodname_copilot_extension_short %} to perform an action, you need to confirm the extension has your permission to act on your behalf before it will complete the task. After carefully reviewing the proposed action, in the confirmation dialog, click **Allow** or **Dismiss**.

## Tips for using {% data variables.product.prodname_copilot_extensions %}

- When you are using a {% data variables.product.prodname_copilot_extension_short %}, consider how you would interact with the tool outside of {% data variables.product.prodname_copilot_chat_short %}, then use natural language to ask questions and assign tasks that integrate the capabilities of the tool with {% data variables.product.prodname_dotcom %}. For example, [Sentry](https://sentry.io/welcome/) is an application monitoring software with a {% data variables.product.prodname_copilot_extension_short %}. The following are some example prompts for the Sentry extension for {% data variables.product.prodname_copilot %}:
  - `@sentry list my most recent issues`
  - `@sentry tell me more about issue ISSUE-ID-OR-ISSUE-LINK`
  - `@sentry create a {% data variables.product.prodname_dotcom %} issue for the most recent Sentry issue and assign it to @DEVELOPER`

  For information on the best ways to use a specific {% data variables.product.prodname_copilot_extension_short %}, read the description of the extension on [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=apps&copilot_app=true).
- Interactions with one {% data variables.product.prodname_copilot_extension_short %} will never be shared with another {% data variables.product.prodname_copilot_extension_short %}. To interact with different {% data variables.product.prodname_copilot_extensions_short %} in an IDE, change the `@EXTENSION-NAME` at the beginning of each sentence. Interactions with different extensions will appear in the same {% data variables.product.prodname_copilot_chat_short %} window, but the conversations themselves are automatically separated.

  {% ifversion ghec %} To interact with different {% data variables.product.prodname_copilot_extensions_short %} on {% data variables.product.prodname_dotcom_the_website %}, you need to start a new conversation for each extension by clicking {% octicon "plus" aria-label="New conversation" %} at the top of the {% data variables.product.prodname_copilot_chat_short %} window.{% endif %}
