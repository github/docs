---
title: GitHub Copilot premium requests
intro: 'Learn how premium requests in {% data variables.product.prodname_copilot_short %} work, including usage measurement and managing your budget.'
versions:
  feature: copilot
topics:
  - Billing
  - Copilot
contentType: concepts
---

Usage of {% data variables.product.prodname_copilot_short %} is measured through a combination of licenses and monthly usage tracking. For more information about how license costs in {% data variables.product.prodname_copilot_short %} work, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-licenses).

> [!IMPORTANT]
> {% data reusables.billing.pru-sku-split-notice %}

## What are premium requests?

Some {% data variables.product.prodname_copilot_short %} features use premium requests.
Premium requests give you access to advanced models and additional AI features.

Examples include:

* Using {% data variables.copilot.copilot_chat_short %} with premium models
* Large context windows or advanced reasoning models
* Features like {% data variables.copilot.copilot_coding_agent %}
* {% data variables.product.prodname_spark_short %} app creation

Each product's premium request usage is attributed to a premium request SKU:

* **Copilot premium requests** - Chat, CLI, Code Review, Extensions, and Spaces
* **{% data variables.product.prodname_spark_short %} premium requests** - {% data variables.product.prodname_spark_short %} app creation
* **{% data variables.copilot.copilot_coding_agent %} premium requests** - {% data variables.copilot.copilot_coding_agent %} sessions

See [AUTOTITLE](/copilot/concepts/billing/copilot-requests) for details on which models and features consume premium requests and their SKU attribution.

## How usage of premium requests is measured

Usage of premium requests is tracked monthly and is based on the following factors.

### Monthly allowance

* Each plan includes a fixed number of premium requests per user per month.
* Allowances vary by plan. See [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* Allowances reset on the 1st of each month at 00:00:00 UTC.

### Multiple licenses

If you receive licenses from multiple enterprises, you must choose which entity is billed for your premium requests. See [AUTOTITLE](/copilot/managing-copilot/understanding-and-managing-copilot-usage/monitoring-your-copilot-usage-and-entitlements#managing-premium-request-billing-with-multiple-copilot-licenses).

### Usage by premium models

* Each interaction that uses a premium model consumes from your allowance.
* Some models use **multipliers**, meaning a single interaction may count as multiple premium requests.
* For example, advanced reasoning models may consume 5× or 20× the standard rate.
* If you exceed your allowance and overages are enabled, extra usage is billed at the standard rate.

### Usage by {% data variables.copilot.copilot_coding_agent %}

When you use {% data variables.copilot.copilot_coding_agent %}, including any {% data variables.copilot.copilot_custom_agents %}, both **{% data variables.product.prodname_actions %} minutes** and **premium requests** are consumed:

* **{% data variables.product.prodname_actions %} minutes** come from your account’s monthly allowance of free minutes for {% data variables.product.github %}-hosted runners. This allowance is shared with all {% data variables.product.prodname_actions %} workflows. See [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes).
* **Premium requests** come from the monthly allowance associated with your {% data variables.product.prodname_copilot_short %} license. This allowance is shared with other features, such as {% data variables.copilot.copilot_chat_short %}.

Each coding agent **session** consumes one premium request. A session begins when you:

* Ask {% data variables.product.prodname_copilot_short %} to create or edit a pull request
* Assign {% data variables.product.prodname_copilot_short %} to an issue

If you run out of free minutes or premium requests, and you have _not_ set up billing, a message is displayed explaining why {% data variables.product.prodname_copilot_short %} cannot work on the task.

{% data variables.copilot.copilot_coding_agent %} uses a dedicated {% data variables.copilot.copilot_coding_agent %} premium request SKU. This SKU still pulls from your monthly allowance of premium requests, but allows for more granular budget control and monitoring.

For more information about {% data variables.copilot.copilot_coding_agent %} and {% data variables.copilot.copilot_custom_agents %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent) and [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

## Using more than your included premium requests

If you exceed your plan's included premium requests, there are options available depending on your account type.

### Personal accounts

If you exceed your allowance, set a budget for additional premium requests or upgrade to a higher plan. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

### Organizations and enterprises

* Admins can control whether members are allowed to exceed their premium request allowance across AI features using the **Premium request paid usage** policy.
* Separate policy options are available for Copilot, {% data variables.product.prodname_spark_short %}, and {% data variables.copilot.copilot_coding_agent %}. See [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/manage-request-allowances).
* Premium request budgets can be set to either monitor or block overages, with options for bundled or individual SKU management.
* Enterprises can also upgrade frequent users to {% data variables.copilot.copilot_enterprise_short %} for higher included allowances.

## Paying for premium requests

Additional usage is charged to the payment method configured for your {% data variables.product.github %} account.

If you are billed through Azure, premium request usage appears on your Azure invoice. See [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

## Managing your budget for premium requests

To help manage your budget for premium requests, consider the following strategies.

### Budget options for personal accounts

You can set a budget in your personal billing settings to receive alerts when you reach 75%, 90%, or 100% of your budget. Setting a premium request budget depends on the level of granularity you need:

* **Bundled premium request budget** - Combines all premium requests into a single budget (Recommended for most users)
* **Individual SKU budgets** - Set separate budgets for each AI product (Copilot, {% data variables.product.prodname_spark_short %}, {% data variables.copilot.copilot_coding_agent %})

### Budget options for organizations and enterprises

You can set budgets at the organization, enterprise, or cost center level. If you enable **stop usage when budget is reached**, extra premium requests are blocked when the budget runs out.

For detailed setup instructions, see [AUTOTITLE](/billing/tutorials/set-up-budgets).

{% data reusables.copilot.zero-budget-changes-link %}

## Monitoring usage

* Track your monthly usage in your IDE, in {% data variables.product.prodname_copilot_short %} settings on {% data variables.product.prodname_dotcom %}, or by downloading a usage report.
* Usage reports show all premium requests, both within and beyond the allowance, and can be used to identify high-usage users.
* Premium request analytics display usage by dedicated SKUs, providing detailed insights into which AI products consume your allowance.

For more information about monitoring your usage, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-premium-requests).
