---
title: GitHub Copilot seats and billing cycles for organizations and enterprises
shortTitle: Seats and billing cycles
intro: 'Learn about seats and billing cycles for {% data variables.product.prodname_copilot_short %}.'
product: 'Organizations on a {% data variables.product.prodname_free_team %} or {% data variables.product.prodname_team %} plan, or organizations and enterprises on {% data variables.product.prodname_ghe_cloud %}'
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-plan-for-your-organization/about-billing-for-github-copilot-in-your-organization
  - /copilot/concepts/copilot-billing/about-billing-for-github-copilot-in-your-organization
  - /copilot/concepts/copilot-billing/billing-for-organizations
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-plan-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise
  - /copilot/concepts/copilot-billing/about-billing-for-github-copilot-in-your-enterprise
  - /copilot/concepts/copilot-billing/billing-for-enterprises
  - /copilot/concepts/billing/billing-for-enterprises
  - /copilot/concepts/billing/billing-for-organizations
  - /copilot/concepts/billing/organizations-and-enterprises
  - /copilot/concepts/billing/organizations-and-enterprises/fundamentals
contentType: concepts
category:
  - Manage Copilot for a team
---

## Available plans

Organizations and enterprises provide {% data variables.product.prodname_copilot_short %} through assigned seats. The per-user access charge and included usage depend on the plan:

* **{% data variables.copilot.copilot_business_short %}** at {% data variables.copilot.cfb_price_per_month %} per user per month, includes {% data variables.copilot.ai_credits_per_user_business %} {% data variables.product.prodname_ai_credits_short %} per user, and access to a broad model catalog.
* **{% data variables.copilot.copilot_enterprise_short %}** at {% data variables.copilot.ce_price_per_month %} per user per month, includes {% data variables.copilot.ai_credits_per_user_enterprise %} {% data variables.product.prodname_ai_credits_short %} per user ({% data variables.product.prodname_ghe_cloud %} only), and priority access to new models and features.
* **{% data variables.product.prodname_copilot_short %} access**, for eligible enterprises, at $0 incremental charge through {% data variables.product.prodname_ghe_cloud %} for licensed users, or {% data variables.copilot.copilot_standalone_price_per_month %} per user per month as {% data variables.copilot.copilot_standalone_short %} without a {% data variables.product.prodname_ghe_cloud %} license. This plan has no included usage allowance.

For eligibility and a comparison of the models, see [AUTOTITLE](/copilot/get-started/whats-changing-with-github-enterprise-and-copilot).

Data-resident and FedRAMP-compliant {% data variables.product.prodname_copilot_short %} requests include a 10% model multiplier increase. See [AUTOTITLE](/admin/data-residency/github-copilot-with-data-residency#pricing-changes).

## {% data variables.product.prodname_ai_credits %}

Metered usage is measured in {% data variables.product.prodname_ai_credits_short %}. On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, each license contributes credits to a shared pool, and usage beyond the pool is billed separately. On the {% data variables.product.prodname_copilot_short %} access plan, metered usage is billed from the first use.

Inline code completions and {% data variables.copilot.next_edit_suggestions %} do not consume credits and remain unlimited, including when a user has a $0 USD budget or reaches an enforced spending limit.

For a full explanation of how {% data variables.product.prodname_ai_credits_short %} work, including pooling, additional usage, and what happens when credits run out, see [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing).

## Seat assignment

A {% data variables.product.prodname_copilot_short %} seat is a license for one user. Assignment is required even when access has no incremental charge.

With {% data variables.product.prodname_copilot_short %} access or {% data variables.copilot.copilot_business_short %}, enterprise owners can assign seats directly to individuals or enterprise teams. Each member of an assigned team receives a seat.

Organization-wide assignment works differently by plan. With {% data variables.product.prodname_copilot_short %} access, enterprise owners can assign seats to all members of an organization. With {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, enterprise owners enable {% data variables.product.prodname_copilot_short %} for an organization, then organization owners assign seats to its members.

With licenses assigned through organizations on {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, a user with seats from multiple organizations in the same enterprise is billed only once. One organization is selected and billed for the seat. To identify it, request a detailed usage report and refer to the `organization` column. See [AUTOTITLE](/billing/reference/billing-reports).

For assignment instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access) or [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

## Billing cycles

You can add or remove seats during a billing cycle. The effect on billing and access depends on your plan and the action taken.

### {% data variables.product.prodname_copilot_short %} access through {% data variables.product.prodname_ghe_cloud %} or as {% data variables.copilot.copilot_standalone_short %}

Removing a member's seat with **Remove access** retains their access until the end of the billing cycle. Losing the underlying {% data variables.product.prodname_ghe_cloud %} license or leaving the enterprise revokes access immediately. For the billing effects of each change, see [AUTOTITLE](/copilot/reference/copilot-billing/license-changes#copilot-access).

### {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}

Billed users are calculated at the end of each billing cycle, based on the number of {% data variables.product.prodname_copilot %} seats that are assigned. You can add or remove seats at any time during the billing cycle.

When you add seats, you will be billed pro rata for those seats for the rest of the billing cycle. Included {% data variables.product.prodname_ai_credits_short %} for the seats may also be prorated. If you pay by credit card or PayPal, you will need to pay a prorated amount upfront to cover the seats for the rest of the current billing cycle.

When you remove seats, billing for those seats continues until the end of the current billing cycle.

> [!IMPORTANT]
> Users who are suspended or removed from your organization or enterprise lose access to {% data variables.product.prodname_copilot_short %} immediately, but their seats are still billed through the end of the current billing cycle.

For more information, see [AUTOTITLE](/copilot/reference/copilot-billing/license-changes).

#### Payment dates for credit card or PayPal

If you pay by credit card or PayPal, you will be charged at the following times:

* At the beginning of the calendar month, for all assigned {% data variables.product.prodname_copilot %} licenses
* At the beginning of the billing cycle, for any usage from the previous cycle outside your plan's allowance
* Whenever you need to pay to continue using {% data variables.product.prodname_ai_credits_short %}
* Whenever you purchase additional licenses during the billing cycle

You will receive a receipt and invoice at each point, which you can view on your "Payment history" page.

## Managing costs

You can control {% data variables.product.prodname_ai_credits_short %} spend using budget controls at the user, cost center, and enterprise level. For an overview of how budget controls work, see [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets). For guidance on choosing a configuration, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).

## Reference

For detailed reference information about billing options and the effects of changes during a billing cycle, see [AUTOTITLE](/copilot/reference/copilot-billing).
