---
title: About billing for GitHub Copilot Individual
shortTitle: About billing
intro: 'Learn about pricing and billing cycles for {% data variables.product.prodname_copilot_for_individuals %}.'
versions:
  feature: copilot
type: overview
topics:
  - Copilot
---

## Pricing for {% data variables.product.prodname_copilot_for_individuals %}

The {% data variables.product.prodname_copilot_for_individuals %} subscription is available on a monthly or yearly cycle.

* **If you choose a monthly billing cycle**, you will be billed {% data variables.copilot.cfi_price_per_month %} per calendar month.
* **If you choose a yearly billing cycle**, you will be billed {% data variables.copilot.cfi_price_per_year %} per year.

You can change to a monthly or yearly billing cycle at any time. The change will take effect from the start of your next billing cycle.

{% ifversion billing-auth-and-capture %}

{% data reusables.billing.authorization-charge %}

> [!NOTE] If you are an eligible student, teacher, or open-source maintainer, you can access {% data variables.product.prodname_copilot_for_individuals %} for free. See "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/getting-free-access-to-copilot-as-a-student-teacher-or-maintainer)."

{% endif %}

{% ifversion fpt %}

### About the 30-day trial for {% data variables.product.prodname_copilot_for_individuals %}

Before starting a paid subscription for a personal account, you can set up a one-time {% data reusables.copilot.trial-period %}-day trial to evaluate {% data variables.product.prodname_copilot %}. To begin a trial, you will need to choose a monthly or yearly billing cycle, and provide a payment method. If you do not cancel the trial before the end of the {% data reusables.copilot.trial-period %} days, the trial will automatically convert to a paid subscription.

You can cancel your {% data variables.product.prodname_copilot %} trial at any time during the {% data reusables.copilot.trial-period %} days and you won't be charged. If you cancel before the end of the trial, you will continue to have access to {% data variables.product.prodname_copilot %} until the {% data reusables.copilot.trial-period %}-day trial period ends. For more information, see "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/canceling-your-copilot-trial-as-an-individual-user)."

{% data reusables.copilot.tp-users-trial-eligibility %}{% endif %}

## About changes to your {% data variables.product.prodname_copilot_short %} subscription

{% data reusables.copilot.copilot-one-account %}

You can cancel your {% data variables.product.prodname_copilot_individuals_short %} subscription at any time. The cancellation will take effect at the end of your current billing cycle. For more information, see "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/canceling-copilot-as-an-individual-user)."

## Determining your billing date

Your billing date will depend on whether or not you are already being billed by {% data variables.product.prodname_dotcom %}.

* **If you are not already being billed by {% data variables.product.prodname_dotcom %}**, in most cases your billing cycle will start on the day you sign up for {% data variables.product.prodname_copilot %}. For example, if you sign up on 3 September, with monthly billing, your initial billing cycle will run from 3 September until and including 2 October, and then on the same days of subsequent months. For annual billing, if you sign up on 3 September, your initial cycle will end on 2 September the following year.

* **If you already have a billing cycle**, billing for {% data variables.product.prodname_copilot %} will be included in your next bill, or your first bill after the end of your 30-day {% data variables.product.prodname_copilot_short %} trial. You will be charged on a pro rata basis for that initial period. If you do not already have an established billing date, you will be billed for {% data variables.product.prodname_copilot_for_individuals %} at the end of your 30-day trial, or when you set up a new paid {% data variables.product.prodname_copilot %} subscription.

## Further reading

* "[AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot)"
* "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription)"
* "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-information-to-your-receipts)"
