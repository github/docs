---
title: Changing the AI model for Copilot Chat
shortTitle: 'Change the chat model'
intro: 'Learn how to change the default LLM for {% data variables.copilot.copilot_chat_short %} to a different model.'
versions:
  feature: copilot
topics:
  - Copilot
---

By default, {% data variables.copilot.copilot_chat_short %} uses {% data variables.copilot.copilot_gpt_41 %} to provide fast, capable responses for a wide range of tasks, such as summarization, knowledge-based questions, reasoning, math, and coding.

However, you are not limited to using this model. You can choose from a selection of other models, each with its own particular strengths. You may have a favorite model that you like to use, or you might prefer to use a particular model for inquiring about a specific subject.

> [!NOTE] Different models have different premium request multipliers, which can affect how much of your monthly usage allowance is consumed. For details, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

{% data variables.product.prodname_copilot_short %} allows you to change the model during a chat and have the alternative model used to generate responses to your prompts.

Changing the model that's used by {% data variables.copilot.copilot_chat_short %} does not affect the model that's used for {% data variables.product.prodname_copilot_short %} code completion. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).

{% webui %}

> [!NOTE]
> * Support for {% data variables.copilot.copilot_gpt_45 %}, {% data variables.copilot.copilot_claude_opus %}, and {% data variables.copilot.copilot_o3 %} are only available on {% data variables.copilot.copilot_pro_plus_short %}{% ifversion copilot-enterprise %} and {% data variables.copilot.copilot_enterprise_short %}{% endif %}.
> * You can only use an alternative AI model in the immersive view of {% data variables.copilot.copilot_chat_short %} on GitHub.com. This is the full-page version of {% data variables.copilot.copilot_chat_short %} that's displayed at [https://github.com/copilot](https://github.com/copilot). The {% data variables.copilot.copilot_chat_short %} panel always uses the default model.

## AI models for {% data variables.copilot.copilot_chat_short %}

The following models are currently available in the immersive mode of {% data variables.copilot.copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_gpt_41 %}
* {% data variables.copilot.copilot_gpt_45 %} (preview)
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking
* {% data variables.copilot.copilot_claude_sonnet_40 %} (preview)
* {% data variables.copilot.copilot_claude_opus %} (preview)
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gemini_25_pro %} (preview)
* {% data variables.copilot.copilot_o1 %} (preview)
* {% data variables.copilot.copilot_o3 %} (preview)
* {% data variables.copilot.copilot_o3_mini %}
* {% data variables.copilot.copilot_o4_mini %} (preview)

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

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

> [!NOTE]
> * Multiple model support in {% data variables.copilot.copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.
> * Support for {% data variables.copilot.copilot_gpt_45 %}, {% data variables.copilot.copilot_claude_opus %}, and {% data variables.copilot.copilot_o3 %} are only available on {% data variables.copilot.copilot_pro_plus_short %}{% ifversion copilot-enterprise %} and {% data variables.copilot.copilot_enterprise_short %}{% endif %}.

## AI models for {% data variables.copilot.copilot_chat_short %}

The following models are currently available through multi-model {% data variables.copilot.copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_gpt_41 %}
* {% data variables.copilot.copilot_gpt_45 %} (preview)
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking
* {% data variables.copilot.copilot_claude_sonnet_40 %} (preview)
* {% data variables.copilot.copilot_claude_opus %} (preview)
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gemini_25_pro %} (preview)
* {% data variables.copilot.copilot_o1 %} (preview)
* {% data variables.copilot.copilot_o3 %} (preview)
* {% data variables.copilot.copilot_o3_mini %}
* {% data variables.copilot.copilot_o4_mini %} (preview)

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model

These instructions are for {% data variables.product.prodname_vscode %}. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

{% data reusables.copilot.open-chat-vs-code %}
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

{% endvscode %}

{% visualstudio %}

## AI models for {% data variables.copilot.copilot_chat_short %}

The following models are currently available through multi-model {% data variables.copilot.copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_gpt_41 %}
* {% data variables.copilot.copilot_gpt_45 %} (preview)
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gemini_25_pro %} (preview)
* {% data variables.copilot.copilot_o1 %} (preview)
* {% data variables.copilot.copilot_o3 %} (preview)
* {% data variables.copilot.copilot_o3_mini %}
* {% data variables.copilot.copilot_o4_mini %} (preview)

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model

These instructions are for {% data variables.product.prodname_vs %}. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model {% data variables.copilot.copilot_chat_short %}, you must use {% data variables.product.prodname_vs %} 2022 version 17.12 or later. See the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click the AI model of your choice.

{% endvisualstudio %}

{% jetbrains %}

> [!NOTE]
> * Multiple model support in {% data variables.copilot.copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.
> * Support for {% data variables.copilot.copilot_gpt_45 %} and {% data variables.copilot.copilot_o3 %} are only available on {% data variables.copilot.copilot_pro_plus_short %}{% ifversion copilot-enterprise %} and {% data variables.copilot.copilot_enterprise_short %}{% endif %}.

## AI models for {% data variables.copilot.copilot_chat_short %}

The following models are currently available through multi-model {% data variables.copilot.copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_gpt_41 %}
* {% data variables.copilot.copilot_gpt_45 %} (preview)
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gemini_25_pro %} (preview)
* {% data variables.copilot.copilot_o1 %} (preview)
* {% data variables.copilot.copilot_o3 %} (preview)
* {% data variables.copilot.copilot_o3_mini %}
* {% data variables.copilot.copilot_o4_mini %} (preview)

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model

These instructions are for the JetBrains IDEs. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Open {% data variables.copilot.copilot_chat %}**.
1. In the bottom right of the chat view, select an AI model of your choice from the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click the AI model of your choice.

{% endjetbrains %}

{% eclipse %}

> [!NOTE]
> * Multiple model support in {% data variables.copilot.copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.
> * Support for {% data variables.copilot.copilot_gpt_45 %} and {% data variables.copilot.copilot_o3 %} are only available on {% data variables.copilot.copilot_pro_plus_short %}{% ifversion copilot-enterprise %} and {% data variables.copilot.copilot_enterprise_short %}{% endif %}.

## AI models for {% data variables.copilot.copilot_chat_short %}

The following models are currently available through multi-model {% data variables.copilot.copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_gpt_41 %}
* {% data variables.copilot.copilot_gpt_45 %} (preview)
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gemini_25_pro %} (preview)
* {% data variables.copilot.copilot_o1 %} (preview)
* {% data variables.copilot.copilot_o3 %} (preview)
* {% data variables.copilot.copilot_o3_mini %}
* {% data variables.copilot.copilot_o4_mini %} (preview)

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model

These instructions are for the Eclipse IDE. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. Click the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** icon in the status bar.
1. In the popup menu, click **Open Chat**.
1. In the bottom right of the chat panel, click the currently selected AI model, then select an alternative model from the popup menu.

{% endeclipse %}

{% xcode %}

> [!NOTE]
> * Multiple model support in {% data variables.copilot.copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.
> * Support for {% data variables.copilot.copilot_gpt_45 %} and {% data variables.copilot.copilot_o3 %} are only available on {% data variables.copilot.copilot_pro_plus_short %}{% ifversion copilot-enterprise %} and {% data variables.copilot.copilot_enterprise_short %}{% endif %}.

## AI models for {% data variables.copilot.copilot_chat_short %}

The following models are currently available through multi-model {% data variables.copilot.copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_gpt_41 %}
* {% data variables.copilot.copilot_gpt_45 %} (preview)
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gemini_25_pro %} (preview)
* {% data variables.copilot.copilot_o1 %} (preview)
* {% data variables.copilot.copilot_o3 %} (preview)
* {% data variables.copilot.copilot_o3_mini %}
* {% data variables.copilot.copilot_o4_mini %} (preview)

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

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
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-in-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-in-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task)
