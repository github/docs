---
title: Supported AI models in GitHub Copilot
shortTitle: Supported models
allowTitleToDifferFromFilename: true
intro: 'Learn about the supported AI models in {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
topics:
  - Copilot
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

| Model name                                                     | Provider  | Release status                                                  | Agent mode                                  | Ask mode | Edit mode |
|----------------------------------------------------------------|-----------|-----------------------------------------------------------------|---------------------------------------------|----------------------|---------------|
| {% data variables.copilot.copilot_gpt_41 %}                    | OpenAI    | GA                                                              | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gpt_5_codex %}               | OpenAI    | {% data variables.release-phases.public_preview_caps %}         | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gpt_5_mini %}                | OpenAI    | GA                                                              | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gpt_5 %}                     | OpenAI    | GA                                                              | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_o3 %}                        | OpenAI    | {% data variables.release-phases.closing_down_caps %}: 2025-10-23 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_o4_mini %}                   | OpenAI    | {% data variables.release-phases.closing_down_caps %}: 2025-10-23 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_haiku_45 %}           | Anthropic | {% data variables.release-phases.public_preview_caps %}            | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_45 %}          | Anthropic | GA         | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_opus_41 %}            | Anthropic | GA                                                              | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_opus %}               | Anthropic | {% data variables.release-phases.closing_down_caps %}: 2025-10-23 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_35 %}          | Anthropic | {% data variables.release-phases.closing_down_caps %}: 2025-11-06 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_37 %}          | Anthropic | {% data variables.release-phases.closing_down_caps %}: 2025-10-23 | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking | Anthropic | {% data variables.release-phases.closing_down_caps %}: 2025-10-23 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_40 %}          | Anthropic | GA                                                              | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gemini_25_pro %}             | Google    | GA                                                              | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gemini_flash %}              | Google    | {% data variables.release-phases.closing_down_caps %}: 2025-10-23 | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_grok_code %}                 | xAI       | {% data variables.release-phases.public_preview_caps %}         | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

## Supported AI models per client

The following table shows which models are available in each client.

> [!NOTE]
> * {% data reusables.copilot.auto-model-selection %}
> * {% data reusables.copilot.gpt-5-codex-vscode-support %}

{% rowheaders %}

| Model                                                          | {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_vscode %}      | {% data variables.product.prodname_vs %}    | Eclipse                                     | Xcode                                       | JetBrains IDEs                              |
|----------------------------------------------------------------|----------------------------------------------------------|---------------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|
| {% data variables.copilot.copilot_gpt_41 %}                    | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gpt_5_codex %}               | {% octicon "x" aria-label="Not included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} |
| {% data variables.copilot.copilot_gpt_5_mini %}                | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gpt_5 %}                     | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_o3 %}                        | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_o4_mini %}                   | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_haiku_45 %}           | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} | {% octicon "x" aria-label="Not included" %} |
| {% data variables.copilot.copilot_claude_sonnet_45 %}          | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_opus_41 %}            | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_opus %}               | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_35 %}          | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_37 %}          | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_40 %}          | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gemini_25_pro %}             | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gemini_flash %}              | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_grok_code %}                 | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

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
* To learn how to change your current model, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat) or [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).
* To learn more about Responsible Use and Responsible AI, see [{% data variables.product.prodname_copilot_short %} Trust Center](https://copilot.github.trust.page/) and [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features).
* To learn how {% data variables.copilot.copilot_chat_short %} serves different AI models, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting).
