---
title: About billing for GitHub Copilot in your enterprise
shortTitle: Billing for enterprises
intro: 'Learn about pricing and billing cycles for {% data variables.product.prodname_copilot_short %} in your enterprise.'
permissions: Enterprise owners
product: '{% data variables.copilot.copilot_for_business %} and {% data variables.copilot.copilot_enterprise %}'
versions:
  feature: copilot
type: overview
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-plan-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise
---

## About {% data variables.product.prodname_copilot_short %} plans for your enterprise

{% data variables.product.company_short %} offers the following plans for enterprise accounts:
* **{% data variables.copilot.copilot_business_short %}** at {% data variables.copilot.cfb_price_per_month %} per user per month
* **{% data variables.copilot.copilot_enterprise_short %}** at {% data variables.copilot.ce_price_per_month %} per user per month

When you subscribe to {% data variables.copilot.copilot_enterprise_short %} at the enterprise level, you can choose which plan to enable for each organization in your enterprise.

For guidance, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot).

## Premium requests

Paid {% data variables.product.prodname_copilot_short %} plans include premium requests. Premium requests use advanced models and features and are subject to monthly allowances or potential overage costs. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs).

## About the billing cycle for {% data variables.product.prodname_copilot_short %} in your enterprise

Billed users are calculated at the end of each billing cycle, based on the number of {% data variables.product.prodname_copilot %} seats that are assigned. You can add or remove seats at any time during the billing cycle.

* **Any seat assigned part way through the billing cycle** is prorated based on the number of days remaining in the cycle.
* **Any seat assignment cancellation during a billing cycle** takes effect at the beginning of the next cycle. The user can access {% data variables.product.prodname_copilot_short %} until the end of the cycle.
* **Any user removed from an organization with {% data variables.product.prodname_copilot_short %} during a billing cycle** loses access to {% data variables.product.prodname_copilot_short %} immediately. Billing for that user stops at the end of the cycle.  If the user is restored to the organization during the billing cycle, they regain access to {% data variables.product.prodname_copilot_short %} immediately.

Your enterprise will be charged on whichever payment method you’ve set up for the enterprise account, such as a credit card or a Microsoft Azure subscription.

{% data reusables.billing.authorization-charge %}

> [!NOTE] {% data variables.product.prodname_copilot %} billing operates in Coordinated Universal Time (UTC), but it calculates your bill according to the timezone of your billing cycle. For example, if you're billed through Azure and your current billing cycle ends at 11:59 PM EST on December 1st, canceling a seat at 7:00 PM EST on December 1st might show the seat cancellation at 12:00 AM UTC on December 2nd. However, the seat would end within the billing cycle that you requested the cancellation, and you would not pay for that seat in the following cycle.

### About seat assignment for {% data variables.product.prodname_copilot_short %} in your enterprise

A {% data variables.product.prodname_copilot %} seat is a license to use {% data variables.product.prodname_copilot %}, which is granted to a unique user account through an enterprise's {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} plan. Each month, the enterprise is charged for the number of assigned seats.

If a single user receives a seat from multiple organizations in the same enterprise, the enterprise will only be billed once per billing cycle for that unique user. One of the organizations that assigned {% data variables.product.prodname_copilot_short %} to the user will be chosen at random each month to be billed for the seat.

Seat assignment is managed by owners of organizations{% ifversion ghec %} that have been granted access to {% data variables.product.prodname_copilot %} at the enterprise level{% endif %}. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

If you are a member of an organization or enterprise with a {% data variables.product.prodname_copilot %} plan, to use the plan, you will need to be assigned a seat by an organization owner.

### About billing through Azure

When you connect an Azure subscription to your organization or enterprise account and enable metered billing via Azure, metered usage will start to be sent to Azure. You will be billed through {% data variables.product.prodname_dotcom %} for usage from the start of the current billing cycle to when you enabled metered billing via Azure, on your next billing date. The period between the date you connected your Azure subscription and enabled metered billing via Azure, and the end of the calendar month will be charged in Azure on the first of the month. For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

> [!NOTE] Usage data is sent to Azure daily, but you are billed at the end of the month based on the number of seats used. This means that although you can track your daily spending (number of seats in this case), actual payments are processed monthly.

## About changes to your {% data variables.product.prodname_copilot_short %} plan

If you upgrade an organization from {% data variables.copilot.copilot_business_short %} to {% data variables.copilot.copilot_enterprise_short %}, all users who currently have a seat for {% data variables.copilot.copilot_business_short %} will immediately receive access to {% data variables.copilot.copilot_enterprise_short %}. You will be charged for each {% data variables.copilot.copilot_enterprise %} seat pro rata for the rest of the cycle.

If you downgrade an organization's {% data variables.copilot.copilot_enterprise %} plan during a billing cycle, the users will have access to {% data variables.copilot.copilot_enterprise %} for the rest of the cycle, and the change to your bill will take effect from the following cycle.

Disabling {% data variables.product.prodname_copilot %} for all organizations in your enterprise will cancel your enterprise's {% data variables.product.prodname_copilot_short %} plan. All users with a seat in those organizations will lose access to {% data variables.product.prodname_copilot_short %} immediately. You will be billed for those seats until the end of the current billing cycle.

{% data reusables.copilot.copilot-one-account %}

## Further reading

* [AUTOTITLE](/billing/managing-your-billing/about-billing-for-your-enterprise)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise)
* [AUTOTITLE](/billing/managing-your-billing/managing-your-payment-and-billing-information)
