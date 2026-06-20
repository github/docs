---
title: Model multipliers for annual plans on request-based billing (legacy)
intro: 'Model multipliers for {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers staying on annual plans under request-based billing.'
shortTitle: Model multipliers for annual plans (legacy)
versions:
  feature: copilot
category:
  - Learn about Copilot
allowTitleToDifferFromFilename: true
contentType: reference
redirect_from:
  - /copilot/reference/copilot-billing/model-multipliers-for-annual-plans
---

> [!IMPORTANT] On June 1, 2026, {% data variables.product.github %} moved to usage-based billing. The model multipliers in this article apply only to {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers on an existing **annual plan** who remained on the legacy **premium request-based billing** model after June 1, 2026.
>
> To learn more about these billing changes, including what your options are as an existing {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscriber on an annual plan, see [AUTOTITLE](/copilot/reference/copilot-billing/request-based-billing-legacy/what-changed-with-billing).

Under the legacy premium request-based billing model, each model has a premium request multiplier, based on its complexity and resource usage. Your premium request allowance is deducted according to this multiplier.

Model multipliers are a concept specific to the legacy premium request-based billing system, and **do not apply** to {% data variables.product.github %}'s new usage-based billing model.

The models included with {% data variables.product.prodname_copilot_short %} plans are subject to change.

Model multipliers and costs are subject to change.

> [!NOTE] Users on legacy annual {% data variables.product.prodname_copilot_short %} plans will not receive access to new models and features. 

## Model multipliers

The following table shows the model multipliers per supported model.

> [!NOTE]
> The multiplier for these models are subject to change.
>
> * {% data variables.copilot.copilot_claude_sonnet_46 %}
> * {% data variables.copilot.copilot_gpt_54_mini %}
> * The multiplier for {% data variables.copilot.copilot_mai_code_1_flash %} is a promotional rate.
> 
> If you use {% data variables.copilot.copilot_auto_model_selection_short %} in {% data variables.copilot.copilot_chat_short %}, {% data variables.copilot.copilot_cli_short %}, or {% data variables.copilot.copilot_cloud_agent %}, you qualify for a 10% discount. For example, if a model has a multiplier of 1x you'll be billed at 0.9x instead.

| Model | Multiplier |
| --- | ---: |
| {% for entry in tables.copilot.annual-subscriber-model-multipliers %} |
| {{ entry.model }} | {{ entry.new_multiplier }} |
| {% endfor %} |

### Model multiplier for {% data variables.copilot.copilot_code-review_short %}

{% data variables.copilot.copilot_code-review_short %} has a model multiplier of 13. This means each time {% data variables.product.prodname_copilot_short %} reviews a pull request or reviews code in your IDE, your monthly quota of {% data variables.product.prodname_copilot_short %} premium requests is reduced by 13.

## Further reading

* To learn more about premium requests, see [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).
* To understand more about how the new usage-based billing model works, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals).
