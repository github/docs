---
title: Supported AI models in GitHub Copilot
shortTitle: Supported models
allowTitleToDifferFromFilename: true
intro: 'Learn about the supported AI models in {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Learn about Copilot
redirect_from:
  - /copilot/using-github-copilot/using-claude-sonnet-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-claude-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-gemini-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-openai-gpt-41-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-openai-o3-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-openai-o4-mini-in-github-copilot
  - /copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot
  - /copilot/reference/ai-models/supported-ai-models-in-copilot
contentType: reference
---

{% data variables.product.prodname_copilot %} supports multiple models, each with different strengths. Some models prioritize speed and cost-efficiency, while others are optimized for accuracy, reasoning, or working with multimodal inputs (like images and code together).

Depending on your {% data variables.product.prodname_copilot_short %} plan and where you're using it—such as {% data variables.product.prodname_dotcom_the_website %} or an IDE—you may have access to different models.

> [!NOTE]
> * Model availability is subject to change. Some models may be replaced or updated over time.
> * In {% data variables.product.prodname_vscode %} you can add more models than those that are available by default with your {% data variables.product.prodname_copilot_short %} subscription. See [AUTOTITLE](/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode#adding-more-models).

For all of the default AI models, input prompts and output completions run through {% data variables.product.prodname_copilot %}'s content filters for harmful, offensive, or off-topic content, and for public code matching when enabled.

## Supported AI models in {% data variables.product.prodname_copilot_short %}

This table lists the AI models available in {% data variables.product.prodname_copilot_short %}, along with their release status and availability in different modes.

{% data reusables.copilot.grok-promo-period %}

{% rowheaders %}

| Model name                                             | Provider  | Release status             | Agent mode | Ask mode | Edit mode |
|--------------------------------------------------------|-----------|----------------------------|------------|----------|-----------|
| {% for model in tables.copilot.model-release-status %} |
| {{ model.name }}                                       | {{ model.provider }} | {{ model.release_status }} | {% if model.agent_mode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.ask_mode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.edit_mode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                           |

{% endrowheaders %}

## Model retirement history

The following table lists AI models that have been retired from {% data variables.product.prodname_copilot_short %}, along with their retirement dates and suggested alternatives.

{% rowheaders %}

| Model name                                                  | Retired date                | Suggested alternative             |
|-------------------------------------------------------------|-----------------------------|-----------------------------------|
| {% for model in tables.copilot.model-deprecation-history %} |
| {{ model.name }}                                            | {{ model.retirement_date }} | {{ model.suggested_alternative }} |
| {% endfor %}                                                |

{% endrowheaders %}

## Supported AI models per client

The following table shows which models are available in each client.

> [!NOTE]
> * {% data reusables.copilot.auto-model-selection %}
> * {% data reusables.copilot.gpt-5-codex-vscode-support %}
> * {% data variables.copilot.copilot_gpt_51_codex %} and {% data variables.copilot.copilot_gpt_51_codex_mini %} are supported in: 
>   * Visual Studio Code versions 1.104.1 or higher
>   * JetBrains, Copilot plugin versions 1.5.61 or higher
>   * Xcode, Copilot plugin versions 0.45.0 or later
>   * Eclipse, Copilot plugin versions 0.13.0 or later 

{% rowheaders %}

| Model | {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_vscode %} | {% data variables.product.prodname_vs %} | Eclipse | Xcode | JetBrains IDEs |
|--------|-----------------------------------------------------------|-----------------------------------------------|-------------------------------------------|----------|--------|----------------|
| {% for model in tables.copilot.model-supported-clients %} |
| {{ model.name }}                                          | {% if model.dotcom == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.vscode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.vs == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.eclipse == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.xcode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.jetbrains == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                              |

{% endrowheaders %}

## Supported AI models per {% data variables.product.prodname_copilot_short %} plan

The following table shows which AI models are available in each {% data variables.product.prodname_copilot_short %} plan. For more information about the plans, see [AUTOTITLE](/copilot/about-github-copilot/plans-for-github-copilot).

{% data reusables.copilot.available-models-per-plan %}

## Model multipliers

Each model has a premium request multiplier, based on its complexity and resource usage. If you are on a paid {% data variables.product.prodname_copilot_short %} plan, your premium request allowance is deducted according to this multiplier.

For more information about premium requests, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

{% data reusables.copilot.model-multipliers %}

## Next steps

* For task-based guidance on selecting a model, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).
* To configure which models are available to you, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/configuring-access-to-ai-models-in-copilot).
* To learn how to change your current model, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat) or [AUTOTITLE](/copilot/how-tos/use-ai-models/change-the-completion-model).
* To learn more about Responsible Use and Responsible AI, see [{% data variables.product.prodname_copilot_short %} Trust Center](https://copilot.github.trust.page/) and [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features).
* To learn how {% data variables.copilot.copilot_chat_short %} serves different AI models, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting).
