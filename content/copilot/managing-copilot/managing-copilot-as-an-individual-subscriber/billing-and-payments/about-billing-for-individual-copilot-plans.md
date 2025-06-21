---
title: About billing for individual Copilot plans
shortTitle: About billing
intro: 'Learn how billing works for {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %}.'
versions:
  feature: copilot
type: overview
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/about-billing-for-github-copilot-individual
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-github-copilot-pro-subscription/about-billing-for-copilot-pro
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-copilot-pro
---

## Pricing for {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %}

{% data variables.product.github %} offers two paid plans for individuals: {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %}. Both plans are available on a monthly or yearly billing cycle.

**{% data variables.copilot.copilot_pro_short %}**

* **If you choose a monthly billing cycle**, you will be billed {% data variables.copilot.cfi_price_per_month %} per calendar month.
* **If you choose a yearly billing cycle**, you will be billed {% data variables.copilot.cfi_price_per_year %} per year.

**{% data variables.copilot.copilot_pro_plus_short %}**

* **If you choose a monthly billing cycle**, you will be billed {% data variables.copilot.cpp_price_per_month %} per calendar month.
* **If you choose a yearly billing cycle**, you will be billed {% data variables.copilot.cpp_price_per_year %} per year.

You can change to a monthly or yearly billing cycle at any time. The change will take effect from the start of your next billing cycle.

{% ifversion billing-auth-and-capture %}

{% data reusables.billing.authorization-charge %}

{% endif %}

{% ifversion fpt %}

### About the 30-day trial for {% data variables.copilot.copilot_pro_short %}

> [!NOTE] {% data variables.copilot.copilot_pro_plus_short %} does not include a trial. You will be billed immediately upon subscribing.

Before starting a paid plan for a personal account, you can set up a one-time {% data reusables.copilot.trial-period %}-day trial to evaluate {% data variables.product.prodname_copilot_short %}. To begin a trial, you will need to choose a monthly or yearly billing cycle, and provide a payment method. If you do not cancel the trial before the end of the {% data reusables.copilot.trial-period %} days, the trial will automatically convert to a paid plan.

You can cancel your {% data variables.product.prodname_copilot_short %} trial at any time during the {% data reusables.copilot.trial-period %} days and you won't be charged. If you cancel before the end of the trial, you will continue to have access to {% data variables.product.prodname_copilot_short %} until the {% data reusables.copilot.trial-period %}-day trial period ends. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/canceling-your-copilot-trial-as-an-individual-user).

{% data reusables.copilot.tp-users-trial-eligibility %}{% endif %}

## About premium requests

Your {% data variables.product.prodname_copilot_short %} plan includes premium requests. Premium requests use more advanced models or features and count against your monthly premium request allowance.

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

* **If you are not already being billed by {% data variables.product.prodname_dotcom %}**, in most cases your billing cycle will start on the day you sign up for {% data variables.product.prodname_copilot_short %}. For example, if you sign up on 3 September, with monthly billing, your initial billing cycle will run from 3 September until and including 2 October, and then on the same days of subsequent months. For annual billing, if you sign up on 3 September, your initial cycle will end on 2 September the following year.

* **If you already have a billing cycle**, billing for {% data variables.product.prodname_copilot_short %} will be included in your next bill, or your first bill after the end of your 30-day {% data variables.product.prodname_copilot_short %} trial. You will be charged on a pro rata basis for that initial period. If you do not already have an established billing date, you will be billed for {% data variables.copilot.copilot_pro_short %} at the end of your 30-day trial, or when you set up a new paid {% data variables.product.prodname_copilot_short %} plan.

## Further reading

* [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription)
* [AUTOTITLE](/billing/managing-your-billing/managing-your-payment-and-billing-information)
