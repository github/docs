---
title: About billing for individual GitHub Copilot plans
shortTitle: Billing for individuals
intro: 'Learn how billing works for {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %}.'
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/about-billing-for-github-copilot-individual
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-github-copilot-pro-subscription/about-billing-for-copilot-pro
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-copilot-pro
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans
  - /copilot/concepts/copilot-billing/about-billing-for-individual-copilot-plans
  - /copilot/concepts/copilot-billing/billing-for-individuals
contentType: concepts
category: 
  - Learn about Copilot
---

> [!IMPORTANT]
> {% data reusables.copilot.plans.individual-plans-paused %} If you hit unexpected limits as a result of these changes, you can cancel your Pro or Pro+ subscription and you will not be charged for April usage. Please reach out to [GitHub support](https://support.github.com/) between April 20 and May 20, 2026, for a refund.

## Pricing for {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %}

{% data variables.product.github %} offers two paid plans for individuals: {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %}.

* {% data variables.copilot.copilot_pro_short %} is billed at {% data variables.copilot.cfi_price_per_month %} per calendar month.
* {% data variables.copilot.copilot_pro_plus_short %} is billed at {% data variables.copilot.cpp_price_per_month %} per calendar month.

{% ifversion billing-auth-and-capture %}

{% data reusables.billing.authorization-charge %}

{% endif %}

{% ifversion fpt %}

> [!NOTE] {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} are paid plans. Billing starts when you subscribe. If you already have a billing cycle, charges are prorated and included in your next bill.

{% endif %}

## About premium requests

Your {% data variables.product.prodname_copilot_short %} plan includes premium requests. Premium requests use more advanced models or features and count against your monthly premium request allowance.

The premium request quota renews on the first day of the month, regardless of the subscription renewal date.

To learn more about premium requests and how they affect your billing, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs).

### Purchasing additional premium requests

If you use all of your premium requests, you can continue using {% data variables.product.prodname_copilot_short %} with the included models for the rest of the month at no additional cost.

If you need more premium requests, you have two options:

* Upgrade to a higher plan with a larger monthly premium request allowance.
* Set a budget for premium requests over your plan's allowance. Additional premium requests beyond the limit of your {% data variables.product.prodname_copilot_short %} plan are billed at {% data variables.copilot.additional_premium_requests %} per premium request. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

{% data reusables.copilot.premium-requests-mobile %}

## About changes to your {% data variables.product.prodname_copilot_short %} plan

{% data reusables.copilot.copilot-one-account %}

You can cancel your {% data variables.product.prodname_copilot_short %} plan at any time. The cancellation will take effect at the end of your current billing cycle. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/canceling-copilot-as-an-individual-user).

## Determining your billing date

Your billing date will depend on whether or not you are already being billed by {% data variables.product.prodname_dotcom %}.

* **If you are not already being billed by {% data variables.product.prodname_dotcom %}**, in most cases your billing cycle will start on the day you sign up for {% data variables.product.prodname_copilot_short %}. For example, if you sign up on 3 September, with monthly billing, your initial billing cycle will run from 3 September until and including 2 October, and then on the same days of subsequent months.
* **If you already have a billing cycle**, billing for {% data variables.product.prodname_copilot_short %} will be included in your next bill. You will be charged on a pro rata basis for that initial period.

## Further reading

* [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription)
* [AUTOTITLE](/billing/managing-your-billing/managing-your-payment-and-billing-information)
