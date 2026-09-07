---
title: Plans for GitHub Copilot
intro: 'Discover the plans available for {% data variables.product.prodname_copilot_short %}.'
versions:
  feature: copilot
shortTitle: Plans
redirect_from:
  - /copilot/about-github-copilot/subscription-plans-for-github-copilot
  - /copilot/about-github-copilot/plans-for-github-copilot
  - /copilot/get-started/plans-for-github-copilot
  - /copilot/concepts/billing/individual-plans
contentType: get-started
category: 
  - Learn about Copilot
---

## {% data variables.product.prodname_copilot %} plans

{% data variables.product.company_short %} offers a variety of plans for {% data variables.product.prodname_copilot_short %}. Choose between them depending on your needs and whether you're using {% data variables.product.prodname_copilot_short %} as an individual or as part of an organization or enterprise.

**{% data variables.copilot.copilot_free_short %}**: [Start using {% data variables.copilot.copilot_free_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=free).

* This plan includes limited access to a selection of {% data variables.product.prodname_copilot_short %} features allowing you to try AI-powered coding assistance at no cost.

**{% data variables.copilot.copilot_student_short %}**: [Get access to {% data variables.copilot.copilot_student_short %}](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students).

* Available to verified students. Get access to {% data variables.product.prodname_copilot_short %}'s features for free. 

**{% data variables.copilot.copilot_pro %}**: [Subscribe to {% data variables.copilot.copilot_pro_short %}](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro).

* Designed for individuals who want more flexibility with access to a selection of models and a monthly allowance of {% data variables.product.prodname_ai_credits_short %}. 

**{% data variables.copilot.copilot_pro_plus %}**: [Subscribe to {% data variables.copilot.copilot_pro_plus_short %}](https://github.com/github-copilot/signup?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=pro-plus).

* Ideal for AI power users who want access to the most advanced capabilities. This paid plan includes everything in {% data variables.copilot.copilot_pro %} and a higher monthly allowance of {% data variables.product.prodname_ai_credits_short %}. 

**{% data variables.copilot.copilot_max %}**: [Upgrade to {% data variables.copilot.copilot_max_short %}](https://github.com/settings/billing/licensing?ref_product=copilot&ref_type=purchase&ref_style=text&ref_plan=max).

* Ideal for sustained, high-volume AI power users who want access to the most AI credits available to them. This paid plan includes everything in {% data variables.copilot.copilot_pro_plus_short %}, plus our highest individual monthly allowance of {% data variables.product.prodname_ai_credits_short %}. 

**{% data variables.copilot.copilot_for_business %}**: [Subscribe to {% data variables.copilot.copilot_business_short %}](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=button&ref_plan=business).

* Made for organizations an enterprises, this plan offers centralized management and {% data variables.product.prodname_copilot_short %} policy control for organization members.

**{% data variables.copilot.copilot_enterprise %}**: [Subscribe to {% data variables.copilot.copilot_enterprise_short %}](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=button&ref_plan=enterprise).

* Designed for enterprises using {% data variables.product.prodname_ghe_cloud %}. This plan includes all the features of {% data variables.copilot.copilot_business_short %}, offers a larger monthly pool of {% data variables.product.prodname_ai_credits_short %}, plus additional enterprise-grade capabilities. 

> [!NOTE]
> {% data variables.product.prodname_copilot_short %} is not currently available for {% data variables.product.prodname_ghe_server %}.

## {% data variables.product.prodname_copilot_short %} plans overview

The table below provides an overview of differences between plans. All plans include {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.github_copilot_app_short %}. 

{% rowheaders %}

| Plan                                                  | Pricing                                                                             | {% data variables.product.prodname_ai_credits %} | Agents                                                                     | Models                            |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------- | --------------------------------- |
| {% data variables.copilot.copilot_free_short %}       | Free                                                                                | An allowance of {% data variables.product.prodname_ai_credits %}                | Limited                                                                    | Auto model selection only         |
| {% data variables.copilot.copilot_student_short %}    | Free                                                                                | An allowance of {% data variables.product.prodname_ai_credits %}                | {% octicon "check" aria-label="Included" %}<br>Excludes third-party agents | Auto model selection only         |
| {% data variables.copilot.copilot_pro_short %}        | {% data variables.copilot.cfi_price_per_month %} per month<br>(free for some users) | Base: {% data variables.copilot.ai_credits_per_user_pro %}                | {% octicon "check" aria-label="Included" %}                                | A selection of models             |
| {% data variables.copilot.copilot_pro_plus_short %}   | {% data variables.copilot.cpp_price_per_month %} per month.                         | Base: {% data variables.copilot.ai_credits_per_user_pro_plus %}                | {% octicon "check" aria-label="Included" %}                                | Access to premium models          |
| {% data variables.copilot.copilot_max_short %}        | {% data variables.copilot.cm_price_per_month %} per month                           | Base: {% data variables.copilot.ai_credits_per_user_max %}                | {% octicon "check" aria-label="Included" %}                                | Priority access to premium models |
| {% data variables.copilot.copilot_business_short %}   | {% data variables.copilot.cfb_price_per_month %} per granted seat per month         | Total per user per month: {% data variables.copilot.ai_credits_per_user_business %}                | {% octicon "check" aria-label="Included" %}                                | Access to premium models          |
| {% data variables.copilot.copilot_enterprise_short %} | {% data variables.copilot.ce_price_per_month %} per granted seat per month          | Total per user per month: {% data variables.copilot.ai_credits_per_user_enterprise %}                | {% octicon "check" aria-label="Included" %}                                | Priority access to premium models |

{% endrowheaders %}

Each plan comes with an allowance of {% data variables.product.prodname_ai_credits %}. For more information, including how {% data variables.product.prodname_ai_credits %} work, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals) and [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

For more detail on what's uniquely available in each plan, see the following sections: 
* [Individual plans](#individual-plans)
* [Organization and enterprise plans](#organization-and-enterprise-plans)

## Individual plans

The individual plans available are: 
* Free plans including {% data variables.copilot.copilot_free_short %} and {% data variables.copilot.copilot_student_short %}.
* Paid plans including {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, and {% data variables.copilot.copilot_max_short %}.

With these plans you'll receive access to the following features and capabilities. 

> [!NOTE] 
> * {% data variables.copilot.copilot_free_short %} plans are only available to individual developers who don't have access to {% data variables.product.prodname_copilot_short %} through an organization or enterprise.
> * Verified teachers, and maintainers of popular open source projects may be eligible for free access to {% data variables.copilot.copilot_pro_short %}. 

### {% data variables.product.prodname_ai_credits %} allowance by plan

The following table shows what's included with each paid plan.

{% data reusables.copilot.plans.ai-credits-by-plan %}

{% data variables.copilot.copilot_free_short %} and {% data variables.copilot.copilot_student_short %} both have an allowance of {% data variables.product.prodname_ai_credits_short %}.

For more information on how {% data variables.product.prodname_ai_credits %} work, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals)

### Inline suggestions and {% data variables.copilot.copilot_chat_short %}

Inline suggestions are real-time code suggestions with included models in IDEs and {% data variables.copilot.next_edit_suggestions_caps %}. 
* Limited to 2000 completions per month on {% data variables.copilot.copilot_free_short %}. 

**{% data variables.copilot.copilot_chat_short %}** features available include:
* {% data variables.copilot.copilot_chat_short %} in IDEs
* Inline chat
* Slash commands
* {% data variables.copilot.copilot_mobile_short %}
* {% data variables.copilot.copilot_chat_dotcom_short %}
* {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_windows_terminal %}
* {% data variables.copilot.copilot_chat_short %} skills in IDEs.[^1] (Not available in {% data variables.copilot.copilot_free_short %}).

### Models

On {% data variables.copilot.copilot_free_short %} and {% data variables.copilot.copilot_student_short %} plans, access to models is available through {% data variables.copilot.copilot_auto_model_selection_short %} only.

{% rowheaders %}

| Available models                               | {% data variables.copilot.copilot_pro_short %}  | {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.copilot_max_short %} |
|---------------------------------------------------------|-------------------------------------------------|-----------------------------------------------------|------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'Claude Fable 5' or model.name == 'Claude Fable 5.1' %}[^claude-fable-5]{% endif %} | {% if model.pro == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.pro_plus == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.max == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

### Agents

{% rowheaders %}

| Agents                                                                  | {% data variables.copilot.copilot_free_short %}                                   | {% data variables.copilot.copilot_student_short %} | {% data variables.copilot.copilot_pro_short %} | {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.copilot_max_short %} |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| {% data variables.copilot.copilot_cloud_agent %}                        | {% octicon "x" aria-label="Not included" %}                                       | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Agent mode                                                              | {% octicon "check" aria-label="Included" %}                                       | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| {% data variables.product.prodname_copilot_short %} code review         | Only "Review selection" in {% data variables.product.prodname_vscode_shortname %} | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Model Context Protocol (MCP)                                            | {% octicon "check" aria-label="Included" %}                                       | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Third-party Agents ({% data variables.release-phases.public_preview %}) | {% octicon "x" aria-label="Not included" %}                                       | {% octicon "x" aria-label="Not included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |

{% endrowheaders %}

### Customization

{% rowheaders %}

| Customization                                                                    | {% data variables.copilot.copilot_free_short %} | {% data variables.copilot.copilot_student_short %} | {% data variables.copilot.copilot_pro_short %} | {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.copilot_max_short %} |
| -------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| Repository and personal custom instructions                                      | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Organization custom instructions                                                 | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |
| Prompt files                                                                     | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Model Context Protocol (MCP)                                                     | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Block suggestions matching public code                                           | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Exclude specified files from {% data variables.product.prodname_copilot_short %} | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |
| Organization-wide policy management                                              | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |

{% endrowheaders %}

### Other features

{% rowheaders %}

|                                                                                                  | {% data variables.copilot.copilot_free_short %} | {% data variables.copilot.copilot_student_short %} | {% data variables.copilot.copilot_pro_short %} | {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.copilot_max_short %} |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| {% data variables.copilot.copilot_for_prs %}                                                     | {% octicon "x" aria-label="Not included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Audit logs                                                                                       | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| Content exclusion                                                                                | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "x" aria-label="Not included" %}         | {% octicon "x" aria-label="Not included" %}    |
| {% data variables.copilot.copilot_cli_short %}                                                   | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| {% data variables.copilot.github_copilot_app_short %}                                                   | {% octicon "check" aria-label="Included" %}     | {% octicon "check" aria-label="Included" %}        | {% octicon "check" aria-label="Included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}    |
| {% data variables.product.prodname_spark %} ({% data variables.release-phases.public_preview %}) | {% octicon "x" aria-label="Not included" %}     | {% octicon "x" aria-label="Not included" %}        | {% octicon "x" aria-label="Not included" %}    | {% octicon "check" aria-label="Included" %}         | {% octicon "x" aria-label="Not included" %}    |

{% endrowheaders %}

## Organization and enterprise plans

The {% data variables.product.prodname_copilot_short %} plans available for organizations and enterprises are: 
* {% data variables.copilot.copilot_business_short %}
* {% data variables.copilot.copilot_enterprise_short %}

With these plans you'll receive access to the following features and capabilities. 

> [!NOTE] With {% data variables.product.prodname_ghe_cloud %}, an enterprise owner chooses the plan for each organization in the enterprise. For guidance on choosing a plan, see [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/assign-licenses/choose-enterprise-plan).

### {% data variables.product.prodname_ai_credits %} allowance by plan

| Plan | Price per granted seat per month | {% data variables.product.prodname_ai_credits %} per user per month | 
| --- | --- | --- | 
| {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.cfb_price_per_month %}  | {% data variables.copilot.ai_credits_per_user_business %} | 
| {% data variables.copilot.copilot_enterprise_short %}| {% data variables.copilot.ce_price_per_month %}  | {% data variables.copilot.ai_credits_per_user_enterprise %} | 

{% data variables.product.prodname_copilot_short %} usage is measured in {% data variables.product.prodname_ai_credits_short %} under usage-based billing. Each license contributes {% data variables.product.prodname_ai_credits_short %} to a shared enterprise pool, and usage beyond the pool is charged at {% data variables.product.prodname_ai_credits_value %} per {% data variables.product.prodname_ai_credit_singular %}. Code completions and {% data variables.copilot.next_edit_suggestions %} are not billed in {% data variables.product.prodname_ai_credits_short %} and remain unlimited for all paid plans.

For a full explanation of how {% data variables.product.prodname_ai_credits_short %} work, including pooling, additional usage, and what happens when credits run out, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

### Inline suggestions and {% data variables.copilot.copilot_chat_short %}

**Inline suggestions**: Inline suggestion features are available in all plans:

* Real-time code suggestions with included models
* {% data variables.copilot.next_edit_suggestions_caps %}

**{% data variables.copilot.copilot_chat_short %}** features are available in all plans: 

* {% data variables.copilot.copilot_chat_short %} in IDEs
* Inline chat
* Slash commands
* {% data variables.copilot.copilot_mobile_short %}
* {% data variables.copilot.copilot_chat_dotcom_short %}
* {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_windows_terminal %}
* {% data variables.copilot.copilot_chat_short %} skills in IDEs[^1]

### Models

{% rowheaders %}

| Available models                               | {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.copilot_enterprise_short %} |
|---------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'Claude Fable 5' or model.name == 'Claude Fable 5.1' %}[^claude-fable-5]{% endif %} | {% if model.business == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.enterprise == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

[^gpt54nano]: GPT-5.4 nano is currently only available in the Codex {% data variables.product.prodname_vscode %} extension ({% data variables.copilot.copilot_pro_plus_short %} only) and is not available in {% data variables.copilot.copilot_chat_short %}.

### Agents

{% rowheaders %}

| Agents                                                                  | {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.copilot_enterprise_short %} |
| ----------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| {% data variables.copilot.copilot_cloud_agent %}                        | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Agent mode                                                              | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| {% data variables.product.prodname_copilot_short %} code review         | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Model Context Protocol (MCP)                                            | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Third-party Agents ({% data variables.release-phases.public_preview %}) | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |

{% endrowheaders %}

### Customization

{% rowheaders %}

| Customization                                                                    | {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.copilot_enterprise_short %} |
| -------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Repository and personal custom instructions                                      | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Organization custom instructions                                                 | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Prompt files                                                                     | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Model Context Protocol (MCP)                                                     | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Block suggestions matching public code                                           | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Exclude specified files from {% data variables.product.prodname_copilot_short %} | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Organization-wide policy management                                              | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |

{% endrowheaders %}

### Other features

{% rowheaders %}

|                                                                                                  | {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.copilot_enterprise_short %} |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------- | ----------------------------------------------------- |
| {% data variables.copilot.copilot_for_prs %}                                                     | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Audit logs                                                                                       | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| Content exclusion                                                                                | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| {% data variables.copilot.copilot_cli_short %}                                                   | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| {% data variables.copilot.github_copilot_app_short %}                                                  | {% octicon "check" aria-label="Included" %}         | {% octicon "check" aria-label="Included" %}           |
| {% data variables.product.prodname_spark %} ({% data variables.release-phases.public_preview %}) | {% octicon "x" aria-label="Not included" %}         | {% octicon "check" aria-label="Included" %}           |

{% endrowheaders %}

## Further reading

* To compare feature support across IDEs, see [AUTOTITLE](/copilot/reference/copilot-feature-matrix).
* To compare models supported across plans, features, and IDEs, see [AUTOTITLE](/copilot/reference/ai-models/supported-models).

[^1]: {% data variables.copilot.copilot_chat_short %} skills in IDEs is available in {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_vs %}.
[^claude-fable-5]: When {% data variables.copilot.copilot_claude_fable_5 %} or {% data variables.copilot.copilot_claude_fable_51 %} is used, Anthropic retains data, including prompts and outputs, by default to operate safety classifiers that detect harmful use. Customers can request to use {% data variables.copilot.copilot_claude_fable_5 %} or {% data variables.copilot.copilot_claude_fable_51 %} with zero data retention (ZDR) through the end of 2026 under a time-bound exemption while Anthropic rolls out Enterprise Frontier Safeguards (EFS). After that point, continued use of these models would require EFS, which will enable eligible customers to keep their data under their own control while also enabling automated safety monitoring. For an enterprise that has been approved and configured for this type of access, {% data variables.copilot.copilot_claude_fable_5 %} and {% data variables.copilot.copilot_claude_fable_51 %} requests will use the ZDR endpoint through the end of 2026 when the models are enabled. To learn whether your enterprise is eligible and request access, contact your {% data variables.product.github %} account team. Approval for access does not automatically enable {% data variables.copilot.copilot_claude_fable_5 %} or {% data variables.copilot.copilot_claude_fable_51 %}. An enterprise or organization administrator must still enable each model before users can access it. Other Claude models, except for {% data variables.copilot.copilot_claude_fable_5 %} and {% data variables.copilot.copilot_claude_fable_51 %}, continue to operate under ZDR. Customers who enable a Fable model with ZDR agree to use this model only for internal operations, including to develop and evaluate products for their own customers. They may not make the model endpoints or outputs available externally. To enable these models, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-access-to-ai-models).
