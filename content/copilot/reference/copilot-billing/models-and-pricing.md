---
title: Models and pricing for {% data variables.product.prodname_copilot %}
intro: 'See per-token pricing for the models available in {% data variables.product.prodname_copilot %} and reference rates for additional usage across plans.'
shortTitle: Models and pricing
versions:
  feature: copilot
category:
  - Learn about Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

## How model pricing works

When you use {% data variables.product.prodname_copilot_short %}, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used, and the total is converted into {% data variables.product.prodname_ai_credits_short %}, where 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}.

The cost of an interaction depends on two things: the model and the number of tokens consumed.

How {% data variables.product.prodname_copilot_short %} usage is tracked and billed depends on your plan type:

* Individual plans ({% data variables.copilot.copilot_free_short %}, {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, and {% data variables.copilot.copilot_max_short %}) include {% data variables.product.prodname_ai_credits %} allowances that vary by plan. For details, see [AUTOTITLE](/copilot/concepts/billing-and-usage/individuals/billing).
* {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} include per-user {% data variables.product.prodname_ai_credits %} allowances that are pooled at the billing entity level. For details, see [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing).

When usage exceeds the included allowances for any {% data variables.product.prodname_copilot_short %} plan, additional usage is billed in {% data variables.product.prodname_ai_credits %} at the per-token rates shown in the pricing tables below (1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}).

{% data reusables.copilot.ai-credits-mobile %}

## Pricing tables

All prices are **per 1 million tokens**.

### OpenAI

{% data reusables.copilot.extended-context-pricing %}

{% data variables.copilot.gpt_56_sol %}, {% data variables.copilot.gpt_56_terra %}, {% data variables.copilot.gpt_56_luna %}, {% data variables.copilot.gpt_6_astra %}, {% data variables.copilot.gpt_6_luna %}, {% data variables.copilot.gpt_6_sol %}, {% data variables.copilot.gpt_61_sol %}, and {% data variables.copilot.gpt_61_terra %} include a cache write cost in addition to cached input. Earlier OpenAI models have no cache write cost.

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Cache write | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "openai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.tier }} | {{ entry.threshold }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.cache_write }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Anthropic

{% data reusables.copilot.extended-context-pricing %}

Anthropic models include a cache write cost in addition to cached input.

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Cache write | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "anthropic" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {% if entry.tier %}{{ entry.tier }}{% else %}Default{% endif %} | {% if entry.threshold %}{{ entry.threshold }}{% else %}Not applicable{% endif %} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.cache_write }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Google

{% data reusables.copilot.extended-context-pricing %}

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "google" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.tier }} | {{ entry.threshold }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Fine-tuned ({% data variables.product.github %})

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "github" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Microsoft

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "microsoft" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### xAI

{% data reusables.copilot.extended-context-pricing %}

| Model | Release status | Category | Tier | Threshold (input tokens) | Input | Cached input | Output |
| --- | --- | --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "xai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.tier }} | {{ entry.threshold }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Moonshot AI

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "moonshot_ai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Image generation models

Image generation models are billed separately from the model you use for your session. Text sent to the image generation model counts as text input, images sent to the model count as image input, and the generated image counts as image output. Image generation models produce images, not text, so they have no text output price. For more information, see [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation).

| Model | Release status | Text input | Cached text input | Image input | Cached image input | Image output |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.image-models-and-pricing %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.text_input }} | {{ entry.cached_text_input }} | {{ entry.image_input }} | {{ entry.cached_image_input }} | {{ entry.image_output }} |
| {% endfor %} |

## Code completions

{% data reusables.copilot.tbb-completions %}

## Pricing and usage cost considerations for {% data variables.copilot.copilot_code-review_short %}

For most {% data variables.product.prodname_copilot_short %} features, the model used for each interaction is visible to you, so you can reference the pricing tables above to estimate costs. {% data variables.copilot.copilot_code-review_short %} is an exception—the model is selected automatically and is not disclosed, so per-token costs may vary between reviews.

Each code review is billed in two ways: token consumption is billed in {% data variables.product.prodname_ai_credits_short %}, and the agentic infrastructure that powers the review consumes {% data variables.product.prodname_actions %} minutes.

The number of {% data variables.product.prodname_ai_credits_short %} a review consumes depends on the review effort level. The following table shows estimated {% data variables.product.prodname_ai_credits_short %} consumption per review, which you can use to plan for costs.

{% data reusables.copilot.code-review.estimated-consumption %}

{% data variables.product.prodname_actions %} minutes are attributed to the repository, and from there to the enterprise or cost center where applicable. For requests associated with organization members who have paid {% data variables.product.prodname_copilot_short %} licenses, {% data variables.product.prodname_ai_credits_short %} are charged to the member or organization, depending on how the **Choose how members with a {% data variables.product.prodname_copilot_short %} license are billed** policy is configured.

If the person associated with a review does not have a {% data variables.product.prodname_copilot_short %} seat, usage is billed to the enterprise or cost center instead. For pull requests authored by {% data variables.copilot.copilot_cloud_agent %}, usage is attributed first to the human co-author associated with the change. If the co-author cannot be billed, usage is billed directly to the organization. For pull requests authored by other bots, or when a bot requests the review, usage is also billed directly to the organization. These pull requests are eligible for agentic review.

You can view your current {% data variables.product.prodname_actions %} usage for {% data variables.copilot.copilot_code-review_short %} in the following ways:

* **{% data variables.product.prodname_actions %} metrics**: Filter by the `copilot-pull-request-reviewer` workflow. See [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization).
* **Billing usage report**: Filter by `workflow_path` using the value `dynamic/agents/copilot-pull-request-reviewer`. See [AUTOTITLE](/billing/reference/billing-reports).

## Model multipliers for annual {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers

{% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers on **existing annual billing plans** using the **request-based billing** model have different model multipliers. See [AUTOTITLE](/copilot/reference/copilot-billing/request-based-billing-legacy/model-multipliers-for-annual-plans).

[^gemini-flash-promo]: {% data variables.copilot.gemini_38_flash %} is available at the promotional pricing of $0.75 per 1M input tokens, $0.075 per 1M cached input tokens, and $3.75 per 1M output tokens through December 31, 2026.

<!-- expires 2026-12-01 -->

[^gemini-4-argon-promo]: {% data variables.copilot.gemini_4_argon %} is available at the promotional pricing of $2.00 per 1M input tokens, $0.10 per 1M cached input tokens, and $10.00 per 1M output tokens until December 1, 2026.

<!-- end expires 2026-12-01 -->
