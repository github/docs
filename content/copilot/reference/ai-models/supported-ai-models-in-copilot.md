---
title: Supported AI models in Copilot
intro: 'Learn about the supported AI models in {% data variables.product.prodname_copilot %}.'
type: reference
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
---

{% data variables.product.prodname_copilot %} supports multiple models, each with different strengths. Some models prioritize speed and cost-efficiency, while others are optimized for accuracy, reasoning, or working with multimodal inputs (like images and code together).

Depending on your {% data variables.product.prodname_copilot_short %} plan and where you're using it—such as {% data variables.product.prodname_dotcom_the_website %} or an IDE—you may have access to different models.

>[!NOTE] Model availability is subject to change. Some models may be replaced or updated over time.

For all AI models, input prompts and output completions run through {% data variables.product.prodname_copilot %}'s content filters for harmful, offensive, or off-topic content, and for public code matching when enabled.

## Supported AI models in {% data variables.product.prodname_copilot_short %}

This table lists the AI models available in {% data variables.product.prodname_copilot_short %}, along with their release status and availability in different modes.

{% rowheaders %}

| Model name | Provider | Release status | Agent mode | Ask mode | Edit mode |
|------------|----------|----------------|------------|----------------------|---------------|
| {% data variables.copilot.copilot_gpt_41 %} | OpenAI | GA | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gpt_4o %} | OpenAI | GA | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_o3 %} | OpenAI | {% data variables.release-phases.public_preview_caps %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_o3_mini %} | OpenAI | GA | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_o4_mini %} | OpenAI | {% data variables.release-phases.public_preview_caps %} | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_opus %} | Anthropic | GA | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_35 %} | Anthropic | GA | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_37 %} | Anthropic | GA | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking | Anthropic | GA | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_claude_sonnet_40 %} | Anthropic | GA | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gemini_25_pro %} | Google | {% data variables.release-phases.public_preview_caps %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gemini_flash %} | Google | GA | {% octicon "x" aria-label="Not included" %} | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

## Supported AI models per client

The following table shows which models are available in each client.

{% rowheaders %}

| Model                      | {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_vscode %} | {% data variables.product.prodname_vs %} | Eclipse | Xcode | JetBrains IDEs |
|---------------------------|------------|---------|----------------|---------|--------|------------|
| {% data variables.copilot.copilot_gpt_41 %}                   | {% octicon "check" aria-label="Included" %}           | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       |  {% octicon "check" aria-label="Included" %}     |    {% octicon "check" aria-label="Included" %}       |
| {% data variables.copilot.copilot_gpt_4o %}                    | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}      |   {% octicon "check" aria-label="Included" %}        |
| {% data variables.copilot.copilot_o3 %}              | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}      |   {% octicon "check" aria-label="Included" %}        |
| {% data variables.copilot.copilot_o3_mini %}                   | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}      |   {% octicon "check" aria-label="Included" %}        |
| {% data variables.copilot.copilot_o4_mini %}         | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}      |   {% octicon "check" aria-label="Included" %}        |
| {% data variables.copilot.copilot_claude_opus %}  | {% octicon "check" aria-label="Included" %}           | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}      | {% octicon "check" aria-label="Included" %}          |
| {% data variables.copilot.copilot_claude_sonnet_35 %}         | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              |  {% octicon "check" aria-label="Included" %}      | {% octicon "check" aria-label="Included" %}      |  {% octicon "check" aria-label="Included" %}         |
| {% data variables.copilot.copilot_claude_sonnet_37 %}         | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       |{% octicon "check" aria-label="Included" %}              |  {% octicon "check" aria-label="Included" %}      | {% octicon "check" aria-label="Included" %}      |  {% octicon "check" aria-label="Included" %}         |
| {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              |  {% octicon "check" aria-label="Included" %}      | {% octicon "check" aria-label="Included" %}      |  {% octicon "check" aria-label="Included" %}         |
| {% data variables.copilot.copilot_claude_sonnet_40 %} | {% octicon "check" aria-label="Included" %}           | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}      | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %} |
| {% data variables.copilot.copilot_gemini_25_pro %}  | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}      |   {% octicon "check" aria-label="Included" %}        |
| {% data variables.copilot.copilot_gemini_flash %}          | {% octicon "check" aria-label="Included" %}          | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}              | {% octicon "check" aria-label="Included" %}       | {% octicon "check" aria-label="Included" %}      |   {% octicon "check" aria-label="Included" %}        |

{% endrowheaders %}

## Supported AI models per {% data variables.product.prodname_copilot_short %} plan

The following table shows which AI models are available in each {% data variables.product.prodname_copilot_short %} plan. For more information about the plans, see [AUTOTITLE](/copilot/about-github-copilot/plans-for-github-copilot).

{% data reusables.copilot.available-models-per-plan %}

## Model multipliers

Each model has a premium request multiplier, based on its complexity and resource usage. If you are on a paid {% data variables.product.prodname_copilot_short %} plan, your premium request allowance is deducted according to this multiplier.

For more information about premium requests, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

{% rowheaders %}

| Model | Multiplier for **paid plans** | Multiplier for **{% data variables.copilot.copilot_free_short %}** |
|-------|-------------------------------|-------------------------------------------------|
| {% data variables.copilot.copilot_gpt_41 %} | 0 | 1 |
| {% data variables.copilot.copilot_gpt_4o %} | 0 | 1 |
| {% data variables.copilot.copilot_o3 %} | 1 | Not applicable |
| {% data variables.copilot.copilot_o3_mini %} | 0.33 | 1 |
| {% data variables.copilot.copilot_o4_mini %} | 0.33 | Not applicable |
| {% data variables.copilot.copilot_claude_opus %} | 10 | Not applicable |
| {% data variables.copilot.copilot_claude_sonnet_35 %} | 1 | 1 |
| {% data variables.copilot.copilot_claude_sonnet_37 %} | 1 | Not applicable |
| {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking | 1.25 | Not applicable |
| {% data variables.copilot.copilot_claude_sonnet_40 %} | 1 | Not applicable |
| {% data variables.copilot.copilot_gemini_25_pro %} | 1 | Not applicable |
| {% data variables.copilot.copilot_gemini_flash %} | 0.25 | 1 |

{% endrowheaders %}

## Next steps

* For task-based guidance on selecting a model, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task).
* To configure which models are available to you, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/configuring-access-to-ai-models-in-copilot).
* To learn how to change your current model, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat) or [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-code-completion).
* To learn more about Responsible Use and Responsible AI, see [{% data variables.product.prodname_copilot_short %} Trust Center](https://copilot.github.trust.page/) and [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features).
* To learn how {% data variables.copilot.copilot_chat_short %} serves different AI models, see [AUTOTITLE](/copilot/reference/ai-models/how-copilot-serves-ai-models).
