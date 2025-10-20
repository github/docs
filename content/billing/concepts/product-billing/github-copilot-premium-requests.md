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

## What are premium requests?

Some {% data variables.product.prodname_copilot_short %} features use premium requests.
Premium requests give you access to advanced models and additional AI features.

Examples include:

* Using {% data variables.copilot.copilot_chat_short %} with premium models
* Large context windows or advanced reasoning models
* Features like {% data variables.copilot.copilot_coding_agent %}

See [AUTOTITLE](/copilot/concepts/billing/copilot-requests) for details on which models and features consume premium requests.

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

When you use {% data variables.copilot.copilot_coding_agent %}, both **{% data variables.product.prodname_actions %} minutes** and **premium requests** are consumed:

* **{% data variables.product.prodname_actions %} minutes** come from your account’s monthly allowance of free minutes for {% data variables.product.github %}-hosted runners. This allowance is shared with all {% data variables.product.prodname_actions %} workflows. See [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes).
* **Premium requests** come from your monthly allowance of premium {% data variables.product.prodname_copilot_short %} requests. This allowance is shared with other features, such as {% data variables.copilot.copilot_chat_short %}.

Each coding agent **session** consumes one premium request. A session begins when you ask {% data variables.product.prodname_copilot_short %} to create a pull request or make one or more changes to an existing pull request.

If you run out of free minutes or premium requests, and you have _not_ set up billing, a message is displayed explaining why {% data variables.product.prodname_copilot_short %} cannot work on the task.

For more information about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Using more than your included premium requests

If you exceed your plan's included premium requests, there are options available depending on your account type.

### Personal accounts

If you exceed your allowance, set a budget for additional premium requests or upgrade to a higher plan. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

### Organizations and enterprises

* Admins can control whether members are allowed to exceed their allowance using the **Premium request paid usage** policy. See [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/manage-request-allowances).
* Budgets can be set to either monitor or block overages.
* Enterprises can also upgrade frequent users to {% data variables.copilot.copilot_enterprise_short %} for higher included allowances.

## Paying for premium requests

Additional usage is charged to the payment method configured for your {% data variables.product.github %} account.

If you are billed through Azure, premium request usage appears on your Azure invoice. See [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

## Managing your budget for premium requests

To help manage your budget for premium requests, consider the following strategies.

### Personal accounts

You can set a budget in your personal billing settings to receive alerts when you reach 75%, 90%, or 100% of your budget.

### Organizations and enterprises

You can set budgets at the organization, enterprise, or cost center level. If you enable **stop usage when budget is reached**, extra premium requests are blocked when the budget runs out.

{% data reusables.copilot.zero-budget-changes-link %}

## Monitoring usage

* Track your monthly usage in your IDE, in {% data variables.product.prodname_copilot_short %} settings on {% data variables.product.prodname_dotcom %}, or by downloading a usage report.
* Usage reports show all premium requests, both within and beyond the allowance, and can be used to identify high-usage users.

For more information about monitoring your usage, see [AUTOTITLE](/copilot/managing-copilot/understanding-and-managing-copilot-usage/monitoring-your-copilot-usage-and-entitlements).
