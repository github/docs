---
title: Changing the AI model for Copilot Chat
shortTitle: 'Change the chat model'
intro: 'Learn how to change the default LLM for {% data variables.product.prodname_copilot_chat_short %} to a different model.'
versions:
  feature: copilot
topics:
  - Copilot
---

By default, {% data variables.product.prodname_copilot_chat_short %} uses OpenAI's GPT-4o large language model. This is a highly proficient model that performs well for text generation tasks, such as summarization and knowledge-based chat. The model is also capable of reasoning, solving complex math problems and coding.

However, you are not limited to using this model. You can choose from a selection of other models, each with its own particular strengths. You may have a favorite model that you like to use, or you might prefer to use a particular model for inquiring about a specific subject.

{% data variables.product.prodname_copilot_short %} allows you to change the model during a chat and have the alternative model used to generate responses to your prompts.

Changing the model that's used by {% data variables.product.prodname_copilot_chat_short %} does not affect the model that's used for {% data variables.product.prodname_copilot_short %} code completion. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).

{% webui %}

> [!NOTE]
> * Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change. {% ifversion copilot-enterprise %}
> * Support for GPT-4.5 is only available on {% data variables.product.prodname_copilot_enterprise_short %}. {% endif %}
> * You can only use an alternative AI model in the immersive view of {% data variables.product.prodname_copilot_chat_short %}. This is the full-page version of {% data variables.product.prodname_copilot_chat_short %} that's displayed at [https://github.com/copilot](https://github.com/copilot). The {% data variables.product.prodname_copilot_chat_short %} panel always uses the default model.

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available in the immersive mode of {% data variables.product.prodname_copilot_chat_short %}:

* {% data reusables.copilot.model-description-gpt-4o %} {% ifversion copilot-enterprise %}
* {% data reusables.copilot.model-description-gpt-4-5 %} {% endif %}
* {% data reusables.copilot.model-description-claude-sonnet-37 %}
* {% data reusables.copilot.model-description-claude-sonnet-35 %}
* {% data reusables.copilot.model-description-gemini-flash %}
* {% data reusables.copilot.model-description-o1 %}
* {% data reusables.copilot.model-description-o3-mini %}

For more information about these models, see:

* **OpenAI's GPT-4o,{% ifversion copilot-enterprise %} GPT-4.5,{% endif %} o1, and o3-mini models**: [Models](https://platform.openai.com/docs/models) in the OpenAI Platform documentation.
* **Anthropic's {% data variables.copilot.copilot_claude_sonnet %} models**: [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot).
* **Google's {% data variables.copilot.copilot_gemini_flash %} model**: [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot).

### Limitations of AI models for {% data variables.product.prodname_copilot_chat_short %}

* If you want to use the skills listed in the table above{% ifversion ghec %}, or knowledge bases{% endif %}, on the {% data variables.product.github %} website, only the GPT-4o, {% data variables.copilot.copilot_claude_sonnet %}, and {% data variables.copilot.copilot_gemini_flash %} models are supported.
* Experimental pre-release versions of the models may not interact with all filters correctly, including the duplication detection filter.

## Changing your AI model

These instructions are for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website. For {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode_shortname %}, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

> [!NOTE] If you use {% data variables.product.prodname_copilot_extensions_short %}, they may override the model you select.

1. In the top right of any page on {% data variables.product.github %}, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %} beside the **{% octicon "copilot" aria-hidden="true" %}** icon and click **Immersive** in the dropdown menu.

   ![Screenshot of the 'Immersive' button, highlighted with a dark orange outline.](/assets/images/help/copilot/copilot-immersive-button.png)

1. At the top of the immersive view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

{% endwebui %}

{% vscode %}

> [!NOTE]
> * Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change. {% ifversion copilot-enterprise %}
> * Support for GPT-4.5 is only available on {% data variables.product.prodname_copilot_enterprise_short %}. {% endif %}

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data reusables.copilot.model-description-gpt-4o %} {% ifversion copilot-enterprise %}
* {% data reusables.copilot.model-description-gpt-4-5 %} {% endif %}
* {% data reusables.copilot.model-description-claude-sonnet-37 %}
* {% data reusables.copilot.model-description-claude-sonnet-35 %}
* {% data reusables.copilot.model-description-gemini-flash %}
* {% data reusables.copilot.model-description-o1 %}
* {% data reusables.copilot.model-description-o3-mini %}

For more information about these models, see:

* **OpenAI's GPT-4o,{% ifversion copilot-enterprise %} GPT-4.5,{% endif %} o1, and o3-mini models**: [Models](https://platform.openai.com/docs/models) in the OpenAI Platform documentation.
* **Anthropic's {% data variables.copilot.copilot_claude_sonnet %} models**: [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot).
* **Google's {% data variables.copilot.copilot_gemini_flash %} model**: [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot).

## Changing your AI model

These instructions are for {% data variables.product.prodname_vscode_shortname %}. For {% data variables.product.prodname_vs %} or for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

{% data reusables.copilot.open-chat-vs-code %}
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "chevron-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

{% endvscode %}

{% visualstudio %}

> [!NOTE] Multiple model support in {% data variables.product.prodname_copilot_chat_short %} is in {% data variables.release-phases.public_preview %} and is subject to change.

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data reusables.copilot.model-description-gpt-4o %}
* {% data reusables.copilot.model-description-claude-sonnet-37 %}
* {% data reusables.copilot.model-description-claude-sonnet-35 %}
* {% data reusables.copilot.model-description-o1 %}
* {% data reusables.copilot.model-description-o3-mini %}

For more information about these models, see:

* **OpenAI's GPT-4o, o1, and o3-mini models**: [Models](https://platform.openai.com/docs/models) in the OpenAI Platform documentation.
* **Anthropic's {% data variables.copilot.copilot_claude_sonnet %} models**: [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot).

## Changing the AI model for {% data variables.product.prodname_copilot_chat_short %}

These instructions are for {% data variables.product.prodname_vs %}. For {% data variables.product.prodname_vscode_shortname %} or for {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website, click the appropriate tab at the top of this page.

To use multi-model {% data variables.product.prodname_copilot_chat_short %}, you must use {% data variables.product.prodname_vs %} 2022 version 17.12 or later. See the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.product.prodname_copilot_chat %}**.
1. In the bottom right of the chat view, select the **CURRENT-MODEL** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click the AI model of your choice.

{% endvisualstudio %}

{% jetbrains %}

## AI models for {% data variables.product.prodname_copilot_chat_short %}

The following models are currently available through multi-model {% data variables.product.prodname_copilot_chat_short %}:

* {% data reusables.copilot.model-description-gpt-4o %}
* {% data reusables.copilot.model-description-claude-sonnet-35 %}
* {% data reusables.copilot.model-description-gemini-flash %}
* {% data reusables.copilot.model-description-o1 %}
* {% data reusables.copilot.model-description-o3-mini %}

* **OpenAI's GPT-4o, o1, and o3-mini models**: [Models](https://platform.openai.com/docs/models) in the OpenAI Platform documentation.
* **Anthropic's {% data variables.copilot.copilot_claude_sonnet %} models**: [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot).
* **Google's {% data variables.copilot.copilot_gemini_flash %} model**: [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot).

## Changing the AI model for {% data variables.product.prodname_copilot_chat_short %}

These instructions are for the JetBrains IDEs. For instructions on different clients, click the appropriate tab at the top of this page.

{% data reusables.copilot.model-picker-enable-alternative-models %}

{% data reusables.copilot.chat-model-limitations-ide %}

1. Click the **{% octicon "copilot" aria-hidden="true" %}** icon in the status bar.
1. In the popup menu, click **Open {% data variables.product.prodname_copilot_chat %}**.
1. In the bottom right of the chat view, select an AI model of your choice from the {% octicon "chevron-down" aria-hidden="true" %} dropdown menu.

{% endjetbrains %}
