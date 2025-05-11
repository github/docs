---
title: Changing the AI model for Copilot Chat
shortTitle: 'Change the chat model'
intro: 'Learn how to change the default LLM for {% data variables.product.prodname_copilot_chat_short %} to a different model.'
versions:
  feature: copilot
topics:
  - Copilot
---

By default, {% data variables.product.prodname_copilot_chat_short %} uses a base model to provide fast, capable responses for a wide range of tasks, such as summarization, knowledge-based questions, reasoning, math, and coding.

However, you are not limited to using this model. You can choose from a selection of other models, each with its own particular strengths. You may have a favorite model that you like to use, or you might prefer to use a particular model for inquiring about a specific subject.

> [!NOTE] Different models have different premium request multipliers, which can affect how much of your monthly usage allowance is consumed. For details, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

{% data variables.product.prodname_copilot_short %} allows you to change the model during a chat and have the alternative model used to generate responses to your prompts.

{% webui %}

> [!NOTE]
> * Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change. {% ifversion copilot-enterprise %}
> * Support for GPT-4.5 is only available on {% data variables.product.prodname_copilot_enterprise_short %}. {% endif %}
> * You can only use an alternative AI model in the immersive view of {% data variables.product.prodname_copilot_chat_short %}. This is the full-page version of {% data variables.product.prodname_copilot_chat_short %} that's displayed at [https://github.com/copilot](https://github.com/copilot). The {% data variables.product.prodname_copilot_chat_short %} panel always uses the default model.

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available in the immersive mode of {% data variables.product.prodname_copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %} {% ifversion copilot-enterprise %}
* {% data variables.copilot.copilot_gpt_45 %} {% endif %}
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gpt_o1 %}
* {% data variables.copilot.copilot_gpt_o3_mini %}

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

### Limitations of AI models for {% data variables.product.prodname_copilot_chat_short %}

* If you want to use the skills listed in the table above{% ifversion ghec %}, or knowledge bases{% endif %}, on the {% data variables.product.github %} website, only the GPT-4o, {% data variables.copilot.copilot_claude_sonnet %}, and {% data variables.copilot.copilot_gemini_flash %} models are supported.
* Experimental pre-release versions of the models may not interact with all filters correctly, including the duplication detection filter.

## Changing your AI model

These instructions are for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

> [!NOTE] If you use {% data variables.product.prodname_copilot_extensions_short %}, they may override the model you select.

1. In the top right of any page on {% data variables.product.github %}, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %} beside the **{% octicon "copilot" aria-hidden="true" %}** icon and click **Immersive** in the dropdown menu.

   ![Screenshot of the 'Immersive' button, highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-immersive-button.png)

1. At the top of the immersive view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

{% endwebui %}

{% vscode %}

Changing the model that's used by {% data variables.product.prodname_copilot_chat_short %} does not affect the model that's used for {% data variables.product.prodname_copilot_short %} code completion. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).

> [!NOTE]
> * Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change. {% ifversion copilot-enterprise %}
> * Support for GPT-4.5 is only available on {% data variables.product.prodname_copilot_enterprise_short %}. {% endif %}

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %} {% ifversion copilot-enterprise %}
* {% data variables.copilot.copilot_gpt_45 %} {% endif %}
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gpt_o1 %}
* {% data variables.copilot.copilot_gpt_o3_mini %}

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing your AI model

These instructions are for {% data variables.product.prodname_vscode_shortname %}. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

{% data reusables.copilot.open-chat-vs-code %}
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

{% endvscode %}

{% visualstudio %}

> [!NOTE] Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_gpt_o1 %}
* {% data variables.copilot.copilot_gpt_o3_mini %}

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model for {% data variables.product.prodname_copilot_chat_short %}

These instructions are for {% data variables.product.prodname_vs %}. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model {% data variables.product.prodname_copilot_chat_short %}, you must use {% data variables.product.prodname_vs %} 2022 version 17.12 or later. See the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.product.prodname_copilot_chat %}**.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

{% endvisualstudio %}

{% jetbrains %}

Changing the model that's used by {% data variables.product.prodname_copilot_chat_short %} does not affect the model that's used for {% data variables.product.prodname_copilot_short %} code completion. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %}
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gpt_o1 %}
* {% data variables.copilot.copilot_gpt_o3_mini %}

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model for {% data variables.product.prodname_copilot_chat_short %}

These instructions are for the JetBrains IDEs. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. Click the **{% octicon "copilot" aria-hidden="true" %}** icon in the status bar.
1. In the popup menu, click **Open {% data variables.product.prodname_copilot_chat %}**.
1. In the bottom right of the chat view, select an AI model of your choice from the {% octicon "chevron-down" aria-hidden="true" %} dropdown menu.

{% endjetbrains %}

{% eclipse %}

> [!NOTE]
> * Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.{% ifversion copilot-enterprise %}
> * Support for GPT-4.5 is only available on {% data variables.product.prodname_copilot_enterprise_short %}.{% endif %}

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %} {% ifversion copilot-enterprise %}
* {% data variables.copilot.copilot_gpt_45 %} {% endif %}
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gpt_o1 %}
* {% data variables.copilot.copilot_gpt_o3_mini %}

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model for {% data variables.product.prodname_copilot_chat_short %}

These instructions are for the Eclipse IDE. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. Click the **{% octicon "copilot" aria-hidden="true" %}** icon in the status bar.
1. In the popup menu, click **Open Chat**.
1. In the bottom right of the chat panel, click the currently selected AI model, then select an alternative model from the popup menu.

{% endeclipse %}

{% xcode %}

> [!NOTE]
> * Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.{% ifversion copilot-enterprise %}
> * Support for GPT-4.5 is only available on {% data variables.product.prodname_copilot_enterprise_short %}.{% endif %}

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data variables.copilot.copilot_gpt_4o %} {% ifversion copilot-enterprise %}
* {% data variables.copilot.copilot_gpt_45 %} {% endif %}
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_gemini_flash %}
* {% data variables.copilot.copilot_gpt_o1 %}
* {% data variables.copilot.copilot_gpt_o3_mini %}

For more information about these models, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).

## Changing the AI model for {% data variables.product.prodname_copilot_chat_short %}

These instructions are for Xcode. For instructions on different clients, click the appropriate tab at the top of this page.

To use multi-model {% data variables.product.prodname_copilot_chat_short %}, you must install the {% data variables.product.prodname_copilot %} for Xcode extension. See [AUTOTITLE](/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. To open the chat view, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** in the menu bar, then click **Open Chat**.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

{% endxcode %}

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task)
