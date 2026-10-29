---
title: What's changing with GitHub Enterprise and Copilot billing
shortTitle: Enterprise and Copilot billing
allowTitleToDifferFromFilename: true
intro: 'Compare access and usage charges to decide whether and when to transition your enterprise to the new {% data variables.product.prodname_copilot_short %} billing model.'
versions:
  feature: copilot
contentType: get-started
category:
  - Manage Copilot for a team
---

"{% data variables.product.prodname_copilot_short %} access" is a new way for eligible enterprises to provide {% data variables.product.prodname_copilot_short %} to their developers. In this model, there is no {% data variables.product.prodname_copilot_short %} seat charge for users with a {% data variables.product.prodname_ghe_cloud %} license. For users without that license, {% data variables.copilot.copilot_standalone_short %} costs {% data variables.copilot.copilot_standalone_price_per_month %} per user per month. In both cases, metered usage is billed separately.

If you already use {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, you can retain your current plan. Transitioning is voluntary.

## Compare billing models

With {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, the monthly seat charge includes a usage allowance. With {% data variables.product.prodname_copilot_short %} access, there is no included usage allowance. The seat charge depends on whether each user has a {% data variables.product.prodname_ghe_cloud %} license:

| Billing model | Per-user seat charge | Included {% data variables.product.prodname_ai_credits_short %} |
| --- | --- | --- |
| {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.cfb_price_per_month %} per month | {% data variables.copilot.ai_credits_per_user_business %} per user per month, pooled |
| {% data variables.copilot.copilot_enterprise_short %} | {% data variables.copilot.ce_price_per_month %} per month | {% data variables.copilot.ai_credits_per_user_enterprise %} per user per month, pooled |
| {% data variables.product.prodname_copilot_short %} access | $0 seat charge for users with a {% data variables.product.prodname_ghe_cloud %} license<br><br>{% data variables.copilot.copilot_standalone_price_per_month %} per user per month as {% data variables.copilot.copilot_standalone_short %} for users without a {% data variables.product.prodname_ghe_cloud %} license | None |

The per-user charge for {% data variables.copilot.copilot_standalone_short %} covers identity, access, policy, security, and administration controls. For both {% data variables.product.prodname_copilot_short %} access options, metered usage is billed from the first use.

{% data variables.product.prodname_copilot_short %} access provides the same feature and model eligibility as {% data variables.copilot.copilot_enterprise_short %}, subject to administrator policies and spending controls. For capability comparisons, see [AUTOTITLE](/copilot/get-started/plans).

### Can I combine the two models?

An eligible enterprise can use both {% data variables.product.prodname_copilot_short %} access options simultaneously, with some developers receiving access through their {% data variables.product.prodname_ghe_cloud %} license and others using {% data variables.copilot.copilot_standalone_short %}.

However, the billing model applies to the whole enterprise. You cannot combine {% data variables.product.prodname_copilot_short %} access with {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} seats in the same enterprise, including in individual organizations.

### Assigning {% data variables.product.prodname_copilot_short %} seats is still required

With {% data variables.product.prodname_copilot_short %} access, developers do not automatically receive access to {% data variables.product.prodname_copilot_short %}. Enterprise owners must assign {% data variables.product.prodname_copilot_short %} seats to individual members, enterprise teams, or organizations. This also applies to users who have a {% data variables.product.prodname_ghe_cloud %} license.

## Who is eligible?

{% data reusables.copilot.enterprise-included-access %}

Transitioning is voluntary. Enterprises on {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} do not transition automatically.

## Estimate your monthly costs

Before deciding whether to transition, compare costs using the same monthly period, users, and expected usage:

1. Find your current {% data variables.product.prodname_copilot_short %} license charges and metered usage charges in your billing records. Add them together to establish your current monthly cost.
1. Review total usage in your AI usage dashboard or usage export. Estimate the cost of that usage without an included allowance. Include usage covered by your current pooled allowance, not only your current overage charges. For model rates, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).
1. Count users who will receive {% data variables.copilot.copilot_standalone_short %} because they do not have a {% data variables.product.prodname_ghe_cloud %} license. Multiply that number by {% data variables.copilot.copilot_standalone_price_per_month %}. Users with a {% data variables.product.prodname_ghe_cloud %} license have a $0 {% data variables.product.prodname_copilot_short %} seat charge.
1. Add the estimated metered usage charges and {% data variables.copilot.copilot_standalone_short %} seat charges. Compare the total with your current monthly cost.

Confirm any account-specific pricing and migration terms with your account team.

## Prepare for a voluntary transition

Before your transition takes effect:

1. Set spending controls using your cost estimate as a baseline. Account for any planned increase in users or usage. See [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/budgets).
1. Check the **{% data variables.product.prodname_ai_credits_short %} paid usage** policy in your enterprise's AI Controls settings. It is enabled by default and must remain enabled for users to use features that consume credits.
1. Review your firewall allowlist. On {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_copilot_short %} access uses the {% data variables.copilot.copilot_enterprise_short %} endpoint. This applies both through {% data variables.product.prodname_ghe_cloud %} and as {% data variables.copilot.copilot_standalone_short %}.

   If your allowlist permits only `*.business.githubcopilot.com`, add `*.enterprise.githubcopilot.com` to avoid interrupting access. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/manage-network-access).

## Request a voluntary transition

For an existing enterprise with {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, contact your {% data variables.product.github %} or Microsoft account team. They can confirm eligibility, review the expected access and billing impact, and coordinate an available transition date. Contacting your account team does not itself change access or billing or guarantee a transition date.

Transitions take effect on the first day of a month. Confirm the effective date with your account team.
