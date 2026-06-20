---
title: Supported AI models in GitHub Copilot
shortTitle: Supported models
allowTitleToDifferFromFilename: true
intro: 'Learn about the supported AI models in {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
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

{% data variables.product.prodname_copilot %} supports multiple AI models, each with different strengths. Some prioritize speed and cost-efficiency, while others are optimized for accuracy, reasoning, or multimodal inputs. The right model depends on your task. For a side-by-side comparison to help you choose, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

The models available to you depend on your {% data variables.product.prodname_copilot_short %} plan and where you're using {% data variables.product.prodname_copilot_short %}, such as {% data variables.product.prodname_dotcom_the_website %} or an IDE.

> [!NOTE]
> Model availability is subject to change. Some models may be replaced or updated over time.

For all of the default AI models, input prompts and output completions run through {% data variables.product.prodname_copilot %}'s content filters for harmful, offensive, or off-topic content, and for public code matching when enabled.

## Supported AI models in {% data variables.product.prodname_copilot_short %}

This table lists the AI models available in {% data variables.product.prodname_copilot_short %}, along with their release status.

{% data reusables.copilot.model-fable-disabled %}

{% rowheaders %}

| Model name                                             | Provider  | Release status             |
|--------------------------------------------------------|-----------|----------------------------|
| {% for model in tables.copilot.model-release-status %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'MAI-Code-1-Flash' %}[^mai-code-1-flash]{% endif %}{% if model.name == 'Claude Fable 5' %}[^claude-fable-5]{% endif %}| {{ model.provider }} | {{ model.release_status }} |
| {% endfor %}                                           |

{% endrowheaders %}

[^claude-fable-5]: When {% data variables.copilot.copilot_claude_fable_5 %} is used, Anthropic retains data, including prompts and outputs, to operate safety classifiers that detect harmful use. Other Claude models in {% data variables.product.prodname_copilot %} remain covered by {% data variables.product.github %}'s existing data retention agreements, as documented at [AUTOTITLE](/copilot/reference/ai-models/model-hosting#anthropic-models). Enterprise and business users need to enable the {% data variables.copilot.copilot_claude_fable_5 %} model to make it available for your organization. You can read more about Anthropic's data handling practices for this model under section F of their [Service Specific Terms](https://www.anthropic.com/legal/service-specific-terms). To enable {% data variables.copilot.copilot_claude_fable_5 %}, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).

## Supported AI models in {% data variables.copilot.copilot_auto_model_selection_short_cap_a %}

This table lists the supported AI models for {% data variables.copilot.copilot_auto_model_selection_short_cap_a %}. Available models may be limited by model policies. See [AUTOTITLE](/copilot/concepts/auto-model-selection).

{% rowheaders %}

| Model | {% data variables.copilot.copilot_cloud_agent %} | {% data variables.copilot.copilot_chat_short %} | {% data variables.copilot.copilot_cli_short %} |
| --- | --- | --- | --- |
| {% for model in tables.copilot.auto-model-selection %} |
| {{ model.name }} | {% if model.cloud_agent == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.chat == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.cli == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %} |

{% endrowheaders %}

## Models with extended capabilities

The latest {% data variables.product.prodname_copilot_short %} models support the following extended capabilities.

* **1 million token context window**: Allows the model to process significantly more content in a single session. This is useful when working across large codebases, long documents, or complex multi-file projects. When you select a supported model, you can choose between the default context size or the extended (1 million token) context.
* **Configurable reasoning levels**: Controls the depth of the model's reasoning process before it generates a response. When you select a supported model, you can choose which reasoning level you want to use. Higher reasoning levels can improve the quality of responses to complex problems.

Choosing a larger context window or higher reasoning will impact {% data variables.product.prodname_ai_credits_short %} consumption; more tokens will be consumed, so more credits will be used. For this reason, we recommend that you use the regular context window and regular reasoning by default, selecting the larger context window and higher reasoning for more complex tasks only.

> [!NOTE]
> * These extended capabilities are available in {% data variables.product.prodname_vscode %} and {% data variables.copilot.copilot_cli_short %} only.
> * Some models have extended capability pricing see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing#pricing-tables)

{% rowheaders %}

| Model | 1 million token context window | Configurable reasoning |
| --- | --- | --- |
| {% data variables.copilot.copilot_claude_sonnet_46 %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_claude_opus_46 %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_claude_opus_46_fast %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_claude_opus_47 %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_claude_opus_48 %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_claude_fable_5 %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_gpt_53_codex %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_gpt_54 %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_gpt_55 %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

## Model retirement history

The following table lists AI models that are retired or scheduled for retirement from {% data variables.product.prodname_copilot_short %}, along with their retirement dates and suggested alternatives.

{% rowheaders %}

| Model name                                                  | Retirement date             | Suggested alternative             |
|-------------------------------------------------------------|-----------------------------|-----------------------------------|
| {% for model in tables.copilot.model-deprecation-history %} |
| {{ model.name }}                                            | {{ model.retirement_date }} | {{ model.suggested_alternative }} |
| {% endfor %}                                                |

{% endrowheaders %}

## Supported AI models per client

The following table shows which models are available in each client.

{% data reusables.copilot.model-fable-disabled %}

{% rowheaders %}

| Model | {% data variables.product.prodname_dotcom_the_website %} | {% data variables.copilot.copilot_cli_short %} | {% data variables.product.prodname_vscode %} | {% data variables.product.prodname_vs %} | Eclipse | Xcode | JetBrains IDEs |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {% for model in tables.copilot.model-supported-clients %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %} | {% if model.dotcom == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.cli == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.vscode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.vs == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.eclipse == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.xcode == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.jetbrains == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %} |

{% endrowheaders %}

> [!NOTE]
> In {% data variables.product.prodname_vscode %} you can add more models than those that are available by default with your {% data variables.product.prodname_copilot_short %} subscription. See [AUTOTITLE](/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode#adding-more-models).

## Minimum IDE versions for recent models

Some {% data variables.product.prodname_copilot_short %} models require minimum versions of supported IDEs or {% data variables.product.prodname_copilot_short %} extensions or plugins. The table below lists the minimum versions known from changelog entries or provided release guidance. This information is tentative and subject to change as model support rolls out. For best results, keep your IDE and {% data variables.product.prodname_copilot_short %} extension or plugin updated to the latest available version.

{% rowheaders %}

| Model                                                    | {% data variables.product.prodname_vscode %} | {% data variables.product.prodname_vs %} | JetBrains IDEs | Xcode | Eclipse |
|----------------------------------------------------------| --- |------------------------------------------| -- | --- | --- |
| {% data variables.copilot.copilot_gemini_3_flash %}      | `v1.115.0` and later | `17.14.22` or `18.1.0` and later         | `1.5.62` and later | `0.46.0` and later | `0.14.0` and later |
| {% data variables.copilot.copilot_gemini_31_pro %}       | `v1.115.0` and later | `17.14.22` or `18.1.0` and later         | `1.5.62` and later | `0.46.0` and later | `0.14.0` and later |
| {% data variables.copilot.copilot_gemini_35_flash %}     | `v1.115.0` and later | `17.14.22` or `18.1.0` and later         | `1.5.62` and later | `0.46.0` and later | `0.14.0` and later |
| {% data variables.copilot.copilot_gpt_52_codex %}        | No minimum listed    | `17.14.19` or `18.0.0` and later         | `1.5.61` and later | `0.45.0` and later | `0.13.0` and later |
| {% data variables.copilot.copilot_gpt_53_codex %}        | `v1.104.1` and later | `17.14.19` and later                     | `1.5.61` and later | `0.45.0` and later | `0.13.0` and later |
| {% data variables.copilot.copilot_gpt_54 %}              | `v1.104.1` and later | `17.14.19` and later                     | `1.5.66` and later | `0.47.0` and later | `0.15.0` and later |
| {% data variables.copilot.copilot_gpt_54_mini %}         | `v1.104.1` and later | `17.14.19` and later                     | `1.5.66` and later | `0.47.0` and later | `0.15.0` and later |
| {% data variables.copilot.copilot_gpt_55 %}              | `v1.117` and later   | `17.14.19` and later                     | `1.5.66` and later | `0.47.0` and later | `0.15.0` and later |
| {% data variables.copilot.copilot_claude_opus_48 %}      | `v1.118` and later   | `17.14.6` and later                     | TBD | TBD | TBD |
| {% data variables.copilot.copilot_claude_fable_5 %}      | `v1.124` and later   | `17.14.6` and later                    | TBD | TBD | TBD |
| {% data variables.copilot.copilot_mai_code_1_flash %}    | `v1.121` and later   | Not available                            | Not available | Not available | Not available |

{% endrowheaders %}

> [!NOTE]
>
> * For {% data variables.copilot.copilot_gpt_53_codex %} in {% data variables.product.prodname_vscode %}, `v1.108` and later provide improved prompting and response quality.
> * "No minimum listed" means the reviewed changelog or release guidance did not specify a minimum version, not that all older versions are supported.
> * Even when a model appears in the model picker on older supported versions, prompting and model behavior may work best with the latest IDE and {% data variables.product.prodname_copilot_short %} extension or plugin versions.

## Supported AI models per {% data variables.product.prodname_copilot_short %} plan

The following table shows which AI models are available in each {% data variables.product.prodname_copilot_short %} plan. For more information about the plans, see [AUTOTITLE](/copilot/about-github-copilot/plans-for-github-copilot).

{% data reusables.copilot.available-models-per-plan %}

> [!NOTE]
> If you're an organization or enterprise owner, you can enable or restrict access to specific models for your members. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models#setup-for-organization-and-enterprise-use).

## Fallback and long-term support (LTS) models

For more information about fallback and LTS models, see [AUTOTITLE](/copilot/concepts/fallback-and-lts-models).

## Evaluation models

{% data variables.product.prodname_copilot %} offers access to evaluation models.

> [!IMPORTANT]
> * Testing revealed evaluation models may perform worse than other models on security-related, or other categories of prompts.
> * Users should always carefully review and validate code, including code security, using a range of models and with a thorough human review before incorporating suggestions into production.

Evaluation models may appear in the product with codenames rather than official model or provider names. These models come from or are fine-tuned by one or more of the following providers: Microsoft, OpenAI, Anthropic, and Google. Data handling for each provider is limited to {% data variables.product.github %}'s existing agreement with that provider, and evaluation models undergo {% data variables.product.github %} and Microsoft testing and verification before release.

Evaluation models may be added, updated, or removed without notice. Availability and rate limits may differ from generally available models.

Access to evaluation models in {% data variables.copilot.copilot_auto_model_selection_short %}  for users {% data variables.product.prodname_copilot_short %} plans for individuals is governed by a policy. To disable evaluation models:

{% data reusables.user-settings.access_settings %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. For the **Evaluation models in {% data variables.product.prodname_copilot_short %} {% data variables.copilot.copilot_auto_model_selection_short %}** setting, select **Disabled** from the dropdown.

[^mai-code-1-flash]: {% data variables.copilot.copilot_mai_code_1_flash %} is a continuously improving model. Performance and behavior may evolve over time as new checkpoints are released.

## Utility models

Utility models power background features across surfaces, and cannot be disabled or selected in the model picker. See [AUTOTITLE](/copilot/concepts/models/utility-models).

{% data reusables.copilot.utility-models %}

## Next steps

* To get up and running with {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/get-started/quickstart).
* To configure which models are available to you, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
* To learn more about Responsible Use and Responsible AI, see [{% data variables.product.prodname_copilot_short %} Trust Center](https://copilot.github.trust.page/) and [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features).
