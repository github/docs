---
title: Changing the AI model for GitHub Copilot Chat
shortTitle: Change the chat model
intro: 'Learn how to switch between models for {% data variables.copilot.copilot_chat_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat
  - /copilot/how-tos/ai-models/changing-the-ai-model-for-copilot-chat
  - /copilot/how-tos/ai-models/change-the-chat-model
contentType: how-tos
category: 
  - Configure Copilot
---

Choose from a selection of models, each with its own particular strengths. You may have a favorite model that you like to use, or you might prefer to use a particular model for inquiring about a specific subject.

To view the available models per client, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot#supported-models-per-client).

> [!NOTE] Different models have different premium request multipliers, which can affect how much of your monthly usage allowance is consumed. For details, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

{% data variables.product.prodname_copilot_short %} allows you to change the model during a chat and have the alternative model used to generate responses to your prompts.

Changing the model used by {% data variables.copilot.copilot_chat_short %} does not affect the model used for {% data variables.product.prodname_copilot_short %} code completion. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).

{% webui %}

> [!NOTE]
> You can only use an alternative AI model in the immersive view of {% data variables.copilot.copilot_chat_short %} on {% data variables.product.prodname_dotcom_the_website %}. This is the full-page version of {% data variables.copilot.copilot_chat_short %} that's displayed at [https://github.com/copilot](https://github.com/copilot). The {% data variables.copilot.copilot_chat_short %} panel always uses the default model.

### Limitations of AI models for {% data variables.copilot.copilot_chat_short %}

Experimental pre-release versions of the models may not interact with all filters correctly, including the setting to block suggestions matching public code (see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code)).

## Changing the AI model

These instructions are for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

> [!NOTE] If you use {% data variables.copilot.copilot_extensions_short %}, they may override the model you select.

1. In the top right of any page on {% data variables.product.github %}, click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon.

   ![Screenshot of the 'Copilot' button, highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-icon-top-right.png)

1. At the bottom of the immersive view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

1. Optionally, after submitting a prompt, you can regenerate the same prompt using a different model by clicking the retry icon ({% octicon "sync" aria-label="The re-run icon" %}) below the response. The new response will use your selected model and maintain the full context of the conversation.

{% endwebui %}

{% vscode %}

## Changing the AI model

These instructions are for {% data variables.product.prodname_vscode %}. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

{% data reusables.copilot.open-chat-vs-code %}
1. At the bottom of the chat view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

## Adding more models

You can expand the model options that are available to power {% data variables.copilot.copilot_chat_short %}. You can add models from:

* **A model provider**—such as Anthropic, Gemini, OpenAI, and others.
* **The AI Toolkit for {% data variables.product.prodname_vscode %}**.

> [!NOTE] Using the AI Toolkit for {% data variables.product.prodname_vscode_shortname %} is in {% data variables.release-phases.public_preview %} and subject to change.

### Prerequisites

* Depending on the provider or model you choose, you may need to supply an API key, or model ID, from the provider, or a {% data variables.product.github %} {% data variables.product.pat_generic %} (PAT).
* To add models from the AI Toolkit for {% data variables.product.prodname_vscode %}, you must <a href="vscode:extension/ms-windows-ai-studio.windows-ai-studio?ref_product=copilot&ref_type=engagement&ref_style=text">install the AI Toolkit extension</a>.

### Adding models

1. In the {% data variables.product.prodname_copilot_short %} chat view, click the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu.
1. Click **Manage Models**.

   ![Screenshot of the 'Manage Models' option, highlighted with a dark orange outline.](/assets/images/help/copilot/vsc-manage-models-option.png)

   A list of providers is displayed.

   If you have installed the AI Toolkit, then additional providers, added via the AI Toolkit, are also listed.

   ![Screenshot of the 'Manage Language Models' list.](/assets/images/help/copilot/vsc-manage-models-list.png)

1. Click the provider whose model(s) you want to add.
1. Depending on which provider you selected, you may be prompted to enter a {% data variables.product.github %} PAT, an API key for the provider, or a model ID for a specific model.

   Enter the required information, then press <kbd>Enter</kbd>.

   A list of available models is displayed.

1. Select the model(s) you want to add, then click **OK**.

The models you selected are now available in the model picker in the chat view.

If you added a model from a provider via the AI Toolkit then the first time you use the model, you will be prompted to download it. You may also be prompted to authenticate with the provider.

> [!TIP] If you're already using chat with {% data variables.copilot.copilot_auto_model_selection_short %}, you'll need to start a new chat session to switch models. To start a new session, in the top right of the chat view, click {% octicon "plus" aria-label="new chat" %} new chat.

{% endvscode %}

{% visualstudio %}

## Changing the AI model

These instructions are for {% data variables.product.prodname_vs %}. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model {% data variables.copilot.copilot_chat_short %}, you must use {% data variables.product.prodname_vs %} 2022 version 17.12 or later. See the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click the AI model of your choice.

{% endvisualstudio %}

{% jetbrains %}

## Changing the AI model

These instructions are for the JetBrains IDEs. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Open {% data variables.copilot.copilot_chat %}**.
1. In the bottom right of the chat view, select an AI model of your choice from the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

{% endjetbrains %}

{% eclipse %}

## Changing the AI model

These instructions are for the Eclipse IDE. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Open Chat**.
1. In the bottom right of the chat panel, click the currently selected AI model, then select an alternative model from the popup menu.

{% endeclipse %}

{% xcode %}

## Changing the AI model

These instructions are for Xcode. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model {% data variables.copilot.copilot_chat_short %}, you must install the {% data variables.product.prodname_copilot %} for Xcode extension. See [AUTOTITLE](/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. To open the chat view, click **Editor** in the menu bar, then click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** then **Open Chat**. {% data variables.copilot.copilot_chat_short %} opens in a new window.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click the AI model of your choice.

{% endxcode %}

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion)
* [AUTOTITLE](/copilot/reference/ai-models/model-comparison)

{% vscode %}

* [AI language models in VS Code](https://code.visualstudio.com/docs/copilot/language-models#_bring-your-own-language-model-key) in the {% data variables.product.prodname_vscode %} documentation.

{% endvscode %}
