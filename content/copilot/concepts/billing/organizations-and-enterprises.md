---
title: About billing for GitHub Copilot in organizations and enterprises
shortTitle: Organizations and enterprises
intro: 'Learn about pricing and billing cycles for {% data variables.product.prodname_copilot_short %}.'
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
contentType: concepts
category: 
  - Manage Copilot for a team
---

## Available plans

{% data variables.product.company_short %} offers the following plans for organization accounts:

* **{% data variables.copilot.copilot_business_short %}** at {% data variables.copilot.cfb_price_per_month %} per user per month, includes {% data variables.copilot.ai_credits_per_user_business %} {% data variables.product.prodname_ai_credits_short %} per user, and access to a broad model catalog.
* **{% data variables.copilot.copilot_enterprise_short %}** at {% data variables.copilot.ce_price_per_month %} per user per month, includes {% data variables.copilot.ai_credits_per_user_enterprise %} {% data variables.product.prodname_ai_credits_short %} per user ({% data variables.product.prodname_ghe_cloud %} only), and priority access to new models and features.

<!-- expires 2026-09-01 -->

> [!NOTE]
> Existing customers receive higher included {% data variables.product.prodname_ai_credits_short %} during the promotional period (June–August 2026). See [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises#promotional-amounts-for-existing-customers).

<!-- end expires 2026-09-01 -->

With {% data variables.product.prodname_ghe_cloud %}:

* An enterprise owner chooses the plan for each organization in the enterprise. For guidance on choosing a plan, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot).

* Data-resident and FedRAMP-compliant {% data variables.product.prodname_copilot_short %} requests include a 10% model multiplier increase. See [AUTOTITLE](/admin/data-residency/github-copilot-with-data-residency#pricing-for-data-resident-copilot).

## {% data variables.product.prodname_ai_credits %}

{% data variables.product.prodname_copilot_short %} usage is measured in {% data variables.product.prodname_ai_credits_short %} under usage-based billing. Each license contributes {% data variables.product.prodname_ai_credits_short %} to a shared enterprise pool, and usage beyond the pool is charged at {% data variables.product.prodname_ai_credits_value %} per {% data variables.product.prodname_ai_credit_singular %}. Code completions and {% data variables.copilot.next_edit_suggestions %} are not billed in {% data variables.product.prodname_ai_credits_short %} and remain unlimited for all paid plans.

For a full explanation of how {% data variables.product.prodname_ai_credits_short %} work, including pooling, additional usage, and what happens when credits run out, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Seat assignment

A {% data variables.product.prodname_copilot_short %} seat is a license to use {% data variables.product.prodname_copilot %} for a user. Each month, your organization or enterprise is billed for the number of assigned seats.

Seat assignment is managed by organization owners. With {% data variables.product.prodname_ghe_cloud %}, an enterprise owner must have enabled {% data variables.product.prodname_copilot %} for the organization before an organization owner can assign seats. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

If a user receives a seat from multiple organizations in the same enterprise, the enterprise will be billed only once, and one organization is selected and billed for the seat. To determine which organization is billed for a given user, request a detailed usage report and refer to the `organization` column for the user's {% data variables.product.prodname_copilot_short %} license. See [AUTOTITLE](/billing/reference/usage-reports).

## Billing cycles

Billed users are calculated at the end of each billing cycle, based on the number of {% data variables.product.prodname_copilot %} seats that are assigned. Although you can add or remove seats at any time during the billing cycle, billing for removed seats continues until the end of the current billing cycle. See [AUTOTITLE](/copilot/reference/copilot-billing/license-changes).

## Managing costs

You can control {% data variables.product.prodname_ai_credits_short %} spend using budget controls at the user, cost center, and enterprise level. For an overview of how budget controls work, see [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing). For guidance on choosing a configuration, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).

## Reference

For detailed reference information about billing options and the effects of changes during a billing cycle, see [AUTOTITLE](/copilot/reference/copilot-billing).
