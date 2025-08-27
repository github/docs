---
title: About billing for GitHub Copilot in organizations and enterprises
shortTitle: Organizations and enterprises
intro: 'Learn about pricing and billing cycles for {% data variables.product.prodname_copilot_short %}.'
product: 'Organizations on a {% data variables.product.prodname_free_team %} or {% data variables.product.prodname_team %} plan, or organizations and enterprises on {% data variables.product.prodname_ghe_cloud %}'
versions:
  feature: copilot
topics:
  - Copilot
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
---

## Available plans

{% data variables.product.company_short %} offers the following plans for organization accounts:

* **{% data variables.copilot.copilot_business_short %}** at {% data variables.copilot.cfb_price_per_month %} per user per month
* **{% data variables.copilot.copilot_enterprise_short %}** at {% data variables.copilot.ce_price_per_month %} per user per month ({% data variables.product.prodname_ghe_cloud %} only)

With {% data variables.product.prodname_ghe_cloud %}, an enterprise owner chooses the plan for each organization in the enterprise. For guidance on choosing a plan, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot).

## Premium requests

Paid {% data variables.product.prodname_copilot_short %} plans include premium requests. Premium requests use advanced models and features and are subject to monthly allowances or potential overage costs. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs).

## Seat assignment

A {% data variables.product.prodname_copilot_short %} seat is a license to use {% data variables.product.prodname_copilot %} for a user. Each month, your organization or enterprise is billed for the number of assigned seats.

Seat assignment is managed by organization owners. With {% data variables.product.prodname_ghe_cloud %}, an enterprise owner must have enabled {% data variables.product.prodname_copilot %} for the organization before an organization owner can assign seats. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

If a single user receives a seat from multiple organizations in the same enterprise, the enterprise will only be billed once per billing cycle for that unique user. One of the organizations that assigned {% data variables.product.prodname_copilot_short %} to the user will be chosen at random each month to be billed for the seat.

## Billing cycles

Billed users are calculated at the end of each billing cycle, based on the number of {% data variables.product.prodname_copilot %} seats that are assigned. Although you can add or remove seats at any time during the billing cycle, billing for removed seats continues until the end of the current billing cycle. See [AUTOTITLE](/copilot/reference/copilot-billing/license-changes).

## Reference

For detailed reference information about billing options and the effects of changes during a billing cycle, see [AUTOTITLE](/copilot/reference/copilot-billing).
