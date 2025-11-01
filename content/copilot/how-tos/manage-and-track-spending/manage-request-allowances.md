---
title: Managing the premium request allowance for your organization or enterprise
shortTitle: Manage request allowances
intro: 'Configure policies and budgets for premium requests, or upgrade users to {% data variables.copilot.copilot_enterprise_short %}.'
permissions: Enterprise owners and organization owners
versions:
  feature: copilot
topics:
  - Copilot
allowTitleToDifferFromFilename: true
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}'
redirect_from:
  - /copilot/how-tos/premium-requests/manage-for-enterprise
  - /copilot/how-tos/spending/manage-for-enterprise
  - /copilot/how-tos/spending/manage-for-your-enterprise
  - /copilot/how-tos/manage-and-track-spending/manage-for-your-enterprise
contentType: how-tos
category: 
  - Manage Copilot for a team
---

Each {% data variables.product.prodname_copilot_short %} plan includes a per-user allowance for premium requests. If enabled, requests over the allowance are billed to your organization or enterprise. To learn more about premium requests, see [AUTOTITLE](/copilot/concepts/copilot-billing/requests-in-github-copilot). For allowances per plan, see [AUTOTITLE](/copilot/get-started/plans-for-github-copilot#comparing-copilot-plans).

Your organization or enterprise's policies and budgets determine whether users can use premium requests over their included allowance:

* The **Premium request paid usage** policy determines whether users can surpass their included premium request allowance for each AI tool. This policy is enabled by default.
* If your enterprise or organization has a **Bundled premium requests budget** that caps usage, all premium request-powered tools are blocked once the budget amount is reached for the billing period.

You can increase the allowance for users by ensuring the policy is enabled, editing your budgets, or upgrading users to {% data variables.copilot.copilot_enterprise_short %}.

{% data reusables.copilot.zero-budget-changes %}

## Prerequisites

* Before making changes, download a usage report to see which developers are frequently hitting the limit or using a significant number of requests over the allowance. You may want to contact these users to understand their use cases and requirements. See [AUTOTITLE](/billing/how-tos/products/view-productlicense-use).
* If a user receives licenses from multiple enterprises or standalone organizations, the user must select a billing entity to use premium requests. See [Managing premium request billing with multiple {% data variables.product.prodname_copilot_short %} licenses](/copilot/managing-copilot/monitoring-usage-and-entitlements/monitoring-your-copilot-usage-and-entitlements#managing-premium-request-billing-with-multiple-copilot-licenses).

## Setting a policy for paid usage

By default, premium requests over the allowance are enabled for organizations and enterprises. This allows for uninterrupted use of premium requests, unless you have a budget that caps spending on the Premium Request SKU.

You can set the policy for an enterprise or a standalone organization.

1. Navigate to the policy settings for your enterprise or organization. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).
1. Next to "Premium request paid usage", select the policy for your organization or enterprise.
   * To configure policies for specific AI products, click **Enabled for specific products** and set the desired options.

## Updating budgets

1. Ensure the "Premium request paid usage" policy is enabled. See [Setting a policy for paid usage](#setting-a-policy-for-paid-usage).
1. Check the budgets for your enterprise or organizations, and edit or delete any budgets that "stop usage when budget limit is reached" for the Premium Request SKU. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending#editing-or-deleting-a-budget).
1. Premium request budget types:
   * **Bundled premium requests budget**: Manages all premium request SKUs together (recommended for most users)
   * **Individual SKU budgets**: Set separate budgets for each AI tool (Copilot, {% data variables.product.prodname_spark_short %}, {% data variables.copilot.copilot_coding_agent %})

Creating new budgets without deleting an existing budget does not override the existing budget. If **any** applicable budget with "Stop usage when budget limit is reached" enabled is exhausted, additional premium requests are blocked.

## Upgrading users to {% data variables.copilot.copilot_enterprise_short %}

An enterprise owner can upgrade certain users to increase their base allowance of premium requests.

>[!TIP] {% data variables.copilot.copilot_business_short %} users who make more than 800 premium requests per month would save money with a {% data variables.copilot.copilot_enterprise_short %} license.

1. Create a new organization in your enterprise. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#creating-a-new-organization).
1. Add the users who need more premium requests to the new organization.
1. Grant {% data variables.copilot.copilot_enterprise_short %} licenses to all users in the organization.

   1. If needed, upgrade the enterprise to {% data variables.copilot.copilot_enterprise_short %}. See [AUTOTITLE](/enterprise-cloud@latest/copilot/how-tos/administer/enterprises/managing-the-copilot-plan-for-your-enterprise/upgrading-copilot-for-your-enterprise).

   1. Enable {% data variables.copilot.copilot_enterprise_short %} for the new organization. See [AUTOTITLE](/enterprise-cloud@latest/copilot/how-tos/administer/enterprises/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise).

   1. Grant licenses to all users in the organization. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization#granting-access-to-github-copilot-for-all-current-and-future-users-in-your-organization).

1. Check the usage report regularly to ensure that {% data variables.copilot.copilot_enterprise_short %} remains the most cost-effective option for these users.

## Setting a budget for specific members

You can set a higher budget for premium requests over the allowance for specific users in your enterprise. However, you must ensure that every user in your enterprise is covered by a budget. Users who are not covered by a budget will have access to unlimited spending on premium requests.

At a high level, the required steps are:

1. Ensure the "Premium request paid usage" policy is enabled. See [Setting a policy for paid usage](#setting-a-policy-for-paid-usage).
1. If there is a $0 budget for premium requests set at your enterprise or organization account level, delete it.

1. Create a new budget for the users who need a higher allowance. For example, create an organization or cost center containing just these users, then create a **Bundled premium requests budget** for the organization or cost center.
1. Create a separate, more restrictive budget that covers every other {% data variables.product.prodname_copilot_short %} user in your enterprise. You will likely need to integrate with the API to ensure that this budget covers new users as they are added to your enterprise.
