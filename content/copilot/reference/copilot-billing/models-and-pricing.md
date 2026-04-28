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
<!-- expires 2026-06-01 -->

> [!IMPORTANT] Starting June 1, 2026, {% data variables.product.github %} is moving {% data variables.product.prodname_copilot_short %} from request-based billing to usage-based billing. See [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises) and [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals).
>
> The pricing tables below reflect the new usage-based billing rates that will take effect on June 1, 2026.

<!-- end expires 2026-06-01 -->

## How model pricing works

When you use {% data variables.product.prodname_copilot_short %}, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used, and the total is converted into {% data variables.product.prodname_ai_credits_short %}, where 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}.

The cost of an interaction depends on two things: the model and the number of tokens consumed.

How {% data variables.product.prodname_copilot_short %} usage is tracked and billed depends on your plan type:

* Individual plans ({% data variables.copilot.copilot_free_short %}, {% data variables.copilot.copilot_pro_short %}, and {% data variables.copilot.copilot_pro_plus_short %}) include {% data variables.product.prodname_ai_credits %} allowances that vary by plan. For details, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals).
* {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} include per-user {% data variables.product.prodname_ai_credits %} allowances that are pooled at the billing entity level. For details, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

When usage exceeds the included allowances for any {% data variables.product.prodname_copilot_short %} plan, additional usage is billed in {% data variables.product.prodname_ai_credits %} at the per-token rates shown in the pricing tables below (1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}).

{% data reusables.copilot.ai-credits-mobile %}

## Pricing tables

All prices are **per 1 million tokens**.

### OpenAI

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "openai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

[^1]: {% data variables.copilot.copilot_gpt_41 %} and {% data variables.copilot.copilot_gpt_5_mini %} are included models.
[^2]: {% data variables.copilot.copilot_gpt_54 %} pricing applies to prompts with ≤272K tokens.

### Anthropic

Anthropic models include a cache write cost in addition to cached input.

| Model | Release status | Category | Input | Cached input | Cache write | Output |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "anthropic" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.cache_write }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Google

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "google" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

[^5]: {% data variables.copilot.copilot_gemini_25_pro %} and {% data variables.copilot.copilot_gemini_31_pro %} pricing applies to prompts with ≤200K tokens.
[^6]: {% data variables.copilot.copilot_gemini_3_flash %} has no long-context surcharge.

### xAI

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "xai" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

### Fine-tuned ({% data variables.product.github %})

| Model | Release status | Category | Input | Cached input | Output |
| --- | --- | --- | ---: | ---: | ---: |
| {% for entry in tables.copilot.models-and-pricing %}{% if entry.provider == "github" %} |
| {{ entry.model }} | {{ entry.release_status }} | {{ entry.category }} | {{ entry.input }} | {{ entry.cached_input }} | {{ entry.output }} |
| {% endif %}{% endfor %} |

[^7]: {% data variables.copilot.copilot_raptor_mini %} uses {% data variables.copilot.copilot_gpt_5_mini %} pricing.
[^8]: {% data variables.copilot.copilot_goldeneye %} uses {% data variables.copilot.copilot_gpt_51_codex %} pricing.

## Code completions

{% data reusables.copilot.tbb-completions %}

## Pricing and usage cost considerations for {% data variables.copilot.copilot_code-review_short %}

For most {% data variables.product.prodname_copilot_short %} features, the model used for each interaction is visible to you, so you can reference the pricing tables above to estimate costs. {% data variables.copilot.copilot_code-review_short %} is an exception—the model is selected automatically and is not disclosed, so per-token costs may vary between reviews.

Each code review is billed in two ways: token consumption is billed in {% data variables.product.prodname_ai_credits_short %}, and the agentic infrastructure that powers the review consumes {% data variables.product.prodname_actions %} minutes.

<!-- expires 2026-06-01 -->

**Starting June 1, 2026**, {% data variables.copilot.copilot_code-review_short %} runs will consume {% data variables.product.prodname_actions %} minutes on {% data variables.product.prodname_dotcom %}-hosted runners. Self-hosted runners do not consume {% data variables.product.prodname_actions %} minutes. Larger runners are billed at different rates than standard {% data variables.product.prodname_dotcom %}-hosted runners. For more information on runner options, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-runners).

<!-- end expires 2026-06-01 -->

You can view your current {% data variables.product.prodname_actions %} usage for {% data variables.copilot.copilot_code-review_short %} in the following ways:

* **{% data variables.product.prodname_actions %} metrics**: Filter by the `copilot-pull-request-reviewer` workflow. See [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-github-actions-metrics-for-your-organization).
* **Billing usage report**: Filter by `workflow_path`. Before June 1, 2026, the value is `dynamic/copilot-pull-request-reviewer/copilot-pull-request-reviewer`. Starting June 1, 2026, the value changes to `dynamic/agents/copilot-pull-request-reviewer`. See [AUTOTITLE](/billing/reference/billing-reports).

## Model multipliers for annual {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers

<!-- expires 2026-06-01 -->

Starting **June 1, 2026**, {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers on **existing annual billing plans** will experience changes to model multipliers. The table below shows how the multipliers for each model will adjust.

<!-- end expires 2026-06-01 -->

Model multipliers and costs are subject to change.

For information about your options as an annual subscriber, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals#if-youre-on-an-annual-plan).

| Model | Current multiplier | New multiplier |
| --- | ---: | ---: |
| {% for entry in tables.copilot.annual-subscriber-model-multipliers %} |
| {{ entry.model }} | {{ entry.current_multiplier }} | {{ entry.new_multiplier }} |
| {% endfor %} |
