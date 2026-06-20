---
title: Overview of request-based billing (legacy)
shortTitle: Billing overview (legacy)
allowTitleToDifferFromFilename: true
intro: Learn how premium requests in {% data variables.product.prodname_copilot_short %} work, including usage measurement and managing your budget.
versions:
  feature: copilot
contentType: reference
category:
  - Understand product costs
redirect_from:
  - /billing/concepts/product-billing/github-copilot-premium-requests
---

{% data reusables.billing.legacy-pru-annual-plans-applicability %}

Usage of {% data variables.product.prodname_copilot_short %} is measured through a combination of licenses and monthly usage tracking. For more information about how license costs in {% data variables.product.prodname_copilot_short %} work, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-licenses).

## What are premium requests?

Some {% data variables.product.prodname_copilot_short %} features use premium requests.
Premium requests give you access to advanced models and additional AI features.

Examples include:

* Using {% data variables.copilot.copilot_chat_short %} with premium models
* Large context windows or advanced reasoning models
* Features like {% data variables.copilot.copilot_cloud_agent %}
* {% data variables.product.prodname_spark_short %} app creation

Each product's premium request usage is attributed to a premium request SKU:

* **{% data variables.product.prodname_copilot_short %} premium requests** - Chat, CLI, Code Review, Extensions, and Spaces
* **{% data variables.product.prodname_spark_short %} premium requests** - {% data variables.product.prodname_spark_short %} app creation
* **{% data variables.copilot.copilot_cloud_agent %} premium requests** - {% data variables.copilot.copilot_cloud_agent %} sessions

See [AUTOTITLE](/copilot/concepts/billing/copilot-requests) for details on which models and features consume premium requests and their SKU attribution.

> [!NOTE]
> {% data reusables.billing.pru-sku-split-notice %}

## How usage of premium requests is measured

Usage of premium requests is tracked monthly and is based on the following factors.

### Monthly allowance

* Each plan includes a fixed number of premium requests per user per month.
* Allowances vary by plan.
* Allowances reset on the 1st of each month at 00:00:00 UTC.

### Usage by premium models

* Each interaction that uses a premium model consumes from your allowance.
* Some models use **multipliers**, meaning a single interaction may count as multiple premium requests.
* For example, advanced reasoning models may consume 5× or 20× the standard rate.
* If you exceed your allowance and overages are enabled, extra usage is billed at the standard rate.

### Usage by {% data variables.copilot.copilot_cloud_agent %}

When you use {% data variables.copilot.copilot_cloud_agent %}, including any {% data variables.copilot.copilot_custom_agents %}, both **{% data variables.product.prodname_actions %} minutes** and **premium requests** are consumed:

* **{% data variables.product.prodname_actions %} minutes** come from your account’s monthly allowance of free minutes for {% data variables.product.github %}-hosted runners. This allowance is shared with all {% data variables.product.prodname_actions %} workflows. See [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes).
* **Premium requests** come from the monthly allowance associated with your {% data variables.product.prodname_copilot_short %} license. This allowance is shared with other features, such as {% data variables.copilot.copilot_chat_short %}.

Each cloud agent **session** consumes one premium request. A session begins when you:

* Prompt {% data variables.product.prodname_copilot_short %} to undertake a task.
* Assign {% data variables.product.prodname_copilot_short %} to an issue

If you run out of free minutes or premium requests, and you have _not_ set up billing, a message is displayed explaining why {% data variables.product.prodname_copilot_short %} cannot work on the task.

{% data variables.copilot.copilot_cloud_agent %} uses a dedicated {% data variables.copilot.copilot_cloud_agent %} premium request SKU. This SKU still pulls from your monthly allowance of premium requests, but allows for more granular budget control and monitoring.

For more information about {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_custom_agents %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent) and [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Using more than your included premium requests

If you exceed your allowance, set a budget for additional premium requests or upgrade to a higher plan.

## Paying for premium requests

Additional usage is charged to the payment method configured for your {% data variables.product.github %} account.

If you are billed through Azure, premium request usage appears on your Azure invoice. See [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

## Managing your budget for premium requests

You can set a budget in your personal billing settings to receive alerts when you reach 75%, 90%, or 100% of your budget. Setting a premium request budget depends on the level of granularity you need:

* **Bundled premium request budget** - Combines all premium requests into a single budget (Recommended for most users)
* **Individual SKU budgets** - Set separate budgets for each AI product (Copilot, {% data variables.product.prodname_spark_short %}, {% data variables.copilot.copilot_cloud_agent %})

## Monitoring usage

* Track your monthly usage in your IDE, in {% data variables.product.prodname_copilot_short %} settings on {% data variables.product.prodname_dotcom %}, or by downloading a usage report.
* Usage reports show all premium requests, both within and beyond the allowance, and can be used to identify high-usage users.
* Premium request analytics display usage by dedicated SKUs, providing detailed insights into which AI products consume your allowance.

For more information about monitoring your usage, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-premium-requests).
