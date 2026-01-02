---
title: Managing the premium request allowance for users in your enterprise
shortTitle: Manage for your enterprise
intro: 'Change the default spending limit or upgrade users to {% data variables.copilot.copilot_enterprise_short %}.'
permissions: Enterprise owners
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
contentType: how-tos
---

Each {% data variables.product.prodname_copilot_short %} plan includes a per-user allowance for premium requests. To learn more about premium requests, see [AUTOTITLE](/copilot/concepts/copilot-billing/requests-in-github-copilot). For allowances per plan, see [AUTOTITLE](/copilot/get-started/plans-for-github-copilot#comparing-copilot-plans).

By default, every enterprise has a $0 budget for the Premium Request SKU. Unless this budget is edited or deleted, your enterprise will have **no extra costs** for premium requests: when one of your licensed users exhausts the allowance in their plan, the user's premium requests will be rejected for the rest of the month.

![Screenshot of the enterprise budgets page, with the default budget: a $0 budget for the Premium Request SKU.](/assets/images/help/copilot/enterprise-premium-request-budget.png)

You can edit or delete this budget to grant extra requests to all your licensed members. If you want to grant extra requests to certain users only, you can upgrade those users to {% data variables.copilot.copilot_enterprise_short %}.

## Prerequisites

* Before making changes, download a usage report to see which developers are frequently hitting the limit or using a significant number of requests over the allowance. You may want to contact these users to understand their use cases and requirements. See [Downloading a monthly usage report](/copilot/how-tos/monitoring-your-copilot-usage-and-entitlements#downloading-a-monthly-usage-report).
* If a user receives licenses from multiple enterprises or standalone organizations, the user must select a billing entity to use premium requests. See [Managing premium request billing with multiple {% data variables.product.prodname_copilot_short %} licenses](/copilot/managing-copilot/monitoring-usage-and-entitlements/monitoring-your-copilot-usage-and-entitlements#managing-premium-request-billing-with-multiple-copilot-licenses).

## Changing the budget for all members

To enable premium requests over the allowance for everyone, you can:

* Delete the default $0 budget to allow **unlimited spending on premium requests** for all users.
* Edit the "Budget amount" of the default $0 budget to set **a non-zero total spending limit** for premium requests in your enterprise.

For instructions, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending#editing-or-deleting-a-budget).

>[!NOTE] Creating new budgets without deleting the $0 budget does not override the $0 budget. If **any** applicable budget with "Stop usage when budget limit is reached" enabled is exhausted, additional premium requests are blocked.

## Upgrading users to {% data variables.copilot.copilot_enterprise_short %}

You can upgrade certain users to increase their base allowance of premium requests.

>[!TIP] {% data variables.copilot.copilot_business_short %} users who make make more than 800 premium requests per month would save money with a {% data variables.copilot.copilot_enterprise_short %} license.

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

1. Delete the default $0 budget.
1. Create a new budget for the users who need a higher allowance. For example, create an organization or cost center containing just these users, then create a Premium Request SKU budget for the organization or cost center.
1. Create a separate, more restrictive budget that covers every other {% data variables.product.prodname_copilot_short %} user in your enterprise. You will likely need to integrate with the API to ensure that this budget covers new users as they are added to your enterprise.
