---
title: About billing for GitHub Copilot
intro: 'If you want to use {% data variables.product.prodname_copilot %}, you either need a subscription for {% data variables.product.prodname_copilot %} in your personal account, or you need to be assigned a seat in a subscription managed by an organization or enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
---

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform %}

{% endif %}

## About billing for {% data variables.product.prodname_copilot_short %}

{% ifversion billing-auth-and-capture %}

{% data reusables.billing.authorization-charge %}

{% endif %}

You can set up a {% data variables.product.prodname_copilot %} subscription for your personal account, or for an organization or enterprise.

* **For your personal account**, you can set up a subscription to {% data variables.product.prodname_copilot_for_individuals %}.
* **For an organization**, you can set up a subscription to {% data variables.product.prodname_copilot_for_business %}, then grant access to members.
* **For an enterprise on {% data variables.product.prodname_ghe_cloud %}**, you can set up a subscription to {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %}, then allow organizations to grant access to members. Enterprises with a {% data variables.product.prodname_copilot_enterprise_short %} subscription can assign either {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %} to each organization in the enterprise.

> [!NOTE] A free subscription for {% data variables.product.prodname_copilot %} is available to verified students, teachers, and maintainers of popular open-source repositories on {% data variables.product.company_short %}. See "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-free-access-to-copilot-as-a-student-teacher-or-maintainer)."

## About billing for {% data variables.product.prodname_copilot_for_individuals %}

The {% data variables.product.prodname_copilot_for_individuals %} subscription is available on a monthly or yearly cycle.

* **If you choose a monthly billing cycle**, you will be billed {% data variables.copilot.cfi_price_per_month %} per calendar month.
* **If you choose a yearly billing cycle**, you will be billed {% data variables.copilot.cfi_price_per_year %} per year.

You can change to a monthly or yearly billing cycle at any time. The change will take effect from the start of your next billing cycle.

{% data reusables.copilot.copilot-one-account %}

### Determining your billing date for {% data variables.product.prodname_copilot_for_individuals %}

Your billing date will depend on whether or not you are already being billed by {% data variables.product.prodname_dotcom %}.

* **If you are not already being billed by {% data variables.product.prodname_dotcom %}**, in most cases your billing cycle will start on the day you sign up for {% data variables.product.prodname_copilot %}. For example, if you sign up on 3 September, with monthly billing, your initial billing cycle will run from 3 September until and including 2 October, and then on the same days of subsequent months. For annual billing, if you sign up on 3 September, your initial cycle will end on 2 September the following year.

* **If you already have a billing cycle**, billing for {% data variables.product.prodname_copilot %} will be included in your next bill, or your first bill after the end of your 30-day trial, and you will be charged on a pro rata basis for that initial period. If you do not already have an established billing date, you will be billed for {% data variables.product.prodname_copilot_for_individuals %} at the end of your 30-day trial, or when you set up a new paid {% data variables.product.prodname_copilot %} subscription.

{% ifversion fpt %}

### About the 30-day trial for {% data variables.product.prodname_copilot_for_individuals %}

Before starting a paid subscription for a personal account, you can set up a one-time {% data reusables.copilot.trial-period %}-day trial to evaluate {% data variables.product.prodname_copilot %}. To begin a trial, you will need to choose a monthly or yearly billing cycle, and provide a payment method. If you do not cancel the trial before the end of the {% data reusables.copilot.trial-period %} days, the trial will automatically convert to a paid subscription.

You can cancel your {% data variables.product.prodname_copilot %} trial at any time during the {% data reusables.copilot.trial-period %} days and you won't be charged. If you cancel before the end of the trial, you will continue to have access to {% data variables.product.prodname_copilot %} until the {% data reusables.copilot.trial-period %}-day trial period ends. For more information, see "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/canceling-your-copilot-trial-as-an-individual-user)."{% endif %}

{% data reusables.copilot.tp-users-trial-eligibility %}

## About billing for {% data variables.product.prodname_copilot_for_business %} and {% data variables.product.prodname_copilot_enterprise %}

The {% data variables.product.prodname_copilot_for_business %} and {% data variables.product.prodname_copilot_enterprise %} subscriptions for organizations and enterprises are available on a monthly cycle. The subscriptions are billed at the following prices:

* **{% data variables.product.prodname_copilot_for_business %}**: {% data variables.copilot.cfb_price_per_month %} per user per month.
* **{% data variables.product.prodname_copilot_enterprise %}**: {% data variables.copilot.ce_price_per_month %} per user per month.

Billed users are calculated at the end of each billing cycle, based on the number of {% data variables.product.prodname_copilot %} seats that are assigned.

* **Any seat assigned part way through the billing cycle** will be prorated based on the number of days remaining in the cycle.
* **Any seat assignment removed during a billing cycle** will take effect from the beginning of the next cycle. The person will still be able to use {% data variables.product.prodname_copilot %} until the end of the cycle. If a user's access to the organization itself is removed, they will lose access immediately.

{% ifversion ghec %}
For a {% data variables.product.prodname_copilot_enterprise %} subscription, all {% data variables.product.prodname_copilot_short %} usage is billed to the enterprise account. For more general information about billing information for your enterprise account, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise)."
{% endif %}

{% ifversion ghec %}
For {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %}, policy settings and the usage overview are available at the enterprise level. For more information, see "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)" and "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage)."
{% endif %}

> [!NOTE] {% data variables.product.prodname_copilot %} billing operates in Coordinated Universal Time (UTC), but it calculates your bill according to the timezone of your billing cycle. For example, if you're billed through Azure and your current billing cycle ends at 11:59 PM EST on December 1st, canceling a seat at 7:00 PM EST on December 1st might show the seat cancellation at 12:00 AM UTC on December 2nd. However, the seat would end within the billing cycle that you requested the cancellation, and you would not pay for that seat in the following cycle.

### About seat assignment for {% data variables.product.prodname_copilot_for_business %} and {% data variables.product.prodname_copilot_enterprise %}

A {% data variables.product.prodname_copilot %} seat is a license to use {% data variables.product.prodname_copilot %}, which is granted to a unique user account through either an organization or enterprise's {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %} subscription.

Seat assignment is managed by owners of organizations{% ifversion ghec %} that have been granted access to {% data variables.product.prodname_copilot %} at the enterprise level{% endif %}. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)."

If you are a member of an organization or enterprise with a {% data variables.product.prodname_copilot %} subscription, to use the subscription, you will need to be assigned a seat by an organization owner.

{% ifversion ghec %}You can be assigned {% data variables.product.prodname_copilot %} by multiple organizations in an enterprise, but your enterprise will only be billed once per billing cycle. One organization that assigned you {% data variables.product.prodname_copilot_short %} will be chosen at random each month to be billed for your seat.{% endif %}

{% data reusables.copilot.copilot-one-account %}

### About billing through Azure

When you connect an Azure subscription to your organization or enterprise account and enable metered billing via Azure, metered usage will start to be sent to Azure. You will be billed through {% data variables.product.prodname_dotcom %} for usage from the start of the current billing cycle to when you enabled metered billing via Azure, on your next billing date. The period between the date you connected your Azure subscription and enabled metered billing via Azure, and the end of the calendar month will be charged in Azure on the first of the month. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

> [!NOTE] Usage data is sent to Azure daily, but you are billed at the end of the month based on the number of seats used. This means that although you can track your daily spending (number of seats in this case), actual payments are processed monthly.

### About changes to your {% data variables.product.prodname_copilot_enterprise %} subscription

If you upgrade from {% data variables.product.prodname_copilot_for_business %} to {% data variables.product.prodname_copilot_enterprise %}, all users who currently have a seat for {% data variables.product.prodname_copilot_for_business %} will immediately receive access to {% data variables.product.prodname_copilot_enterprise %}. You will be charged for each {% data variables.product.prodname_copilot_enterprise %} seat pro rata for the rest of the cycle.

If you downgrade your {% data variables.product.prodname_copilot_enterprise %} subscription during a billing cycle, users will have access to {% data variables.product.prodname_copilot_enterprise %} for the rest of the cycle, and the change to your bill will take effect from the following cycle.
