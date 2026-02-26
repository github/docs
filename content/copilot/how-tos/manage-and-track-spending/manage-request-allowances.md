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

Premium request usage beyond the allowance is governed by two complementary control layers:

* **Policy setting:** The **Premium request paid usage** policy determines whether users can surpass their included premium request allowance for each AI tool. This policy is enabled by default.
* **Budget constraints:** If your enterprise or organization has a premium request SKU-level budget or a bundled premium requests budget, premium request usage will be blocked once the budget is fully consumed for the billing period.


The **Premium request paid usage policy** must be enabled for any additional billing to occur. Budgets then control whether and when usage is stopped.

You can increase the allowance for users by ensuring the policy is enabled, editing your budgets, or upgrading users to {% data variables.copilot.copilot_enterprise_short %}.

## Prerequisites

* Before making changes, download a usage report to see which developers are frequently hitting the limit or using a significant number of requests over the allowance. You may want to contact these users to understand their use cases and requirements. See [AUTOTITLE](/billing/how-tos/products/view-productlicense-use).
* If a user receives licenses from multiple enterprises or standalone organizations, the user must select a billing entity to use premium requests. See [Managing premium request billing with multiple {% data variables.product.prodname_copilot_short %} licenses](/copilot/managing-copilot/monitoring-usage-and-entitlements/monitoring-your-copilot-usage-and-entitlements#managing-premium-request-billing-with-multiple-copilot-licenses).
* For enterprises only, review which organizations are able to assign and are actively assigning {% data variables.product.prodname_copilot_short %} access to users. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#enabling-copilot-for-organizations).


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
   * **Individual SKU budgets**: Set separate budgets for each AI tool ({% data variables.product.prodname_copilot_short %}, {% data variables.product.prodname_spark_short %}, {% data variables.copilot.copilot_coding_agent %})

Creating new budgets without deleting an existing budget does not override the existing budget. If **any** applicable budget with "Stop usage when budget limit is reached" enabled is exhausted, additional premium requests are blocked.

 Enterprise-level budgets act as a failsafe for the entire enterprise, including any spending originating from within cost centers. If the enterprise budget is exhausted before the cost center budget, usage will be blocked. See [AUTOTITLE](/billing/concepts/budgets-and-alerts) for details on different scopes of budgets and stopping usage.


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

## Organization-based premium request management

With this budget management method, budgets are scoped to cost centers with organizations as the managed resource.

Users must be assigned a {% data variables.product.prodname_copilot_short %} license through only a single organization in the enterprise. If users are currently assigned licenses through multiple organizations within your enterprise, you must either update your assignment practices or use user-based management. For a comparison of methods, see [AUTOTITLE](/copilot/concepts/billing/premium-request-management).

### Setting up organization-based cost centers

1. Create a cost center and assign all organizations that contain users where no additional premium requests are required. These organizations should be the organizations that assign each user their {% data variables.product.prodname_copilot_short %} license. Assign a $0 budget to this cost center.
1. Create a second cost center and assign organizations with users who need access to additional premium requests. These organizations should be the organizations that assign each user their {% data variables.product.prodname_copilot_short %} license. Assign a budget to this cost center.
1. If you need more than one tier of budgets for additional premium requests, create further cost centers.

You should define a SKU-level budget for "`FEATURE` Premium Request", not a product-level budget for "{% data variables.product.prodname_copilot_short %}". Alternatively, use "Bundled premium requests budget" to define a budget for all types of premium requests.

>[!NOTE]
> Creating a budget scoped directly to the organization is an option, but it is not recommended due to how organization-scoped budgets interact with cost center-scoped budgets for cost centers that contain users as resources.

## User-based premium request management

With this budget management method, budgets are scoped to cost centers with users as the managed resource. When a user is added directly as a managed resource to a cost center, this takes precedence over the user being a member of any organizations that are managed resources in any cost centers.

User-based management applies to all metered, licensed products. See [AUTOTITLE](/billing/reference/cost-center-allocation#details-for-license-based-products).

> [!NOTE]
> If your business needs to allocate license costs for {% data variables.product.prodname_copilot %} and {% data variables.product.prodname_enterprise %} separately from costs for {% data variables.product.prodname_GHAS_cs_or_sp %}, you must use organization-based management.

### Setting up user-based cost centers

1. Create a cost center to contain each subset of users that needs a distinct limit on premium requests.
1. Assign the appropriate budget for premium requests to each cost center.

You should define a SKU-level budget for "`FEATURE` Premium Request", not a product-level budget for "{% data variables.product.prodname_copilot_short %}". Alternatively, use "Bundled premium requests budget" to define a budget for all types of premium requests.
