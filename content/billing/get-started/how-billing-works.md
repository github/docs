---
title: How GitHub billing works
shortTitle: How billing works
intro: 'Learn what you''ll be charged for, when charges occur, and how to track your usage on GitHub to avoid billing surprises.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-on-github
  - /articles/about-billing-on-github
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/about-billing-on-github
  - /billing/managing-your-github-billing-settings/about-billing-on-github
  - /billing/using-the-billing-platform/about-billing-on-github
  - /billing/using-the-new-billing-platform/about-billing-on-github
  - /billing/managing-your-billing/about-billing-on-github
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-accounts
  - /articles/what-is-the-total-cost-of-using-an-organization-account
  - /articles/what-are-the-costs-of-using-an-organization-account
  - /articles/what-plan-should-i-choose
  - /articles/do-you-have-custom-plans
  - /articles/user-account-billing-plans
  - /articles/organization-billing-plans
  - /articles/github-s-billing-plans
  - /articles/about-billing-for-github-accounts
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-billing-for-github-accounts
  - /billing/managing-billing-for-your-github-account/about-billing-for-github-accounts
  - /billing/managing-the-plan-for-your-github-account/about-billing-for-plans
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - Fundamentals
contentType: get-started
---

<!--
Audience: All users
JTBD: When I decide I want to pay for increased access, I need to understand what and how GitHub will charge me, so that I feel confident that I have been billed correctly and don't get any surprises. -->

## What {% data variables.product.github %} charges for

You can use {% data variables.product.github %} without incurring any costs. If you choose a paid plan, subscribe to a paid product, or use more than the allowance included in your plan for a billed product, then you will need to pay {% data variables.product.github %} for your usage.

* **{% data variables.product.github %} plans**: A fixed monthly cost for a paid {% data variables.product.github %} account (for example: {% data variables.product.prodname_pro %} or {% data variables.product.prodname_team %}) or {% data variables.product.prodname_copilot_short %} plan.
* **Subscriptions**: Fixed monthly costs for any additional products you subscribe to (for example: {% data variables.product.prodname_GH_secret_protection %})
* **Metered usage**: Variable costs that depend on how much you use certain features above the amounts included with your {% data variables.product.github %} plan (for example: {% data variables.product.prodname_actions %}). For more information see, [AUTOTITLE](/billing/reference/product-usage-included) and [AUTOTITLE](/billing/concepts/budgets-and-alerts).

> [!TIP]
> {% data variables.product.github %} has discounted plans for verified students and academic faculties, and for non-profit organizations. For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/discounted-plans-for-github-accounts).

## How does billing work?

{% data variables.product.github %} bills you separately for each account you own (personal, organization, or enterprise). Each account has a separate:

* Billing date
* Billing period, monthly or yearly, for {% data variables.product.github %} and {% data variables.product.prodname_copilot_short %} plans
* Payment method of credit card, PayPal, or a connected Azure subscription
* Receipt

If required, {% data variables.product.prodname_ghe_cloud %} accounts can request a purchase order by contacting their account manager in {% data variables.contact.contact_enterprise_sales %}.

## When will I be charged?

Each account has a **billing date** and a **billing cycle**.

For credit card and PayPal payments, the billing date is the day you started a paid plan (not necessarily when the account was created). For example, if you started a paid plan on the 15th of a month, you will be billed on the 15th of each subsequent month. For payments using an Azure subscription ID, the billing date is available in the Azure commerce portal.

Most users pay for {% data variables.product.github %} using metered billing. The billing cycle for all metered products is a fixed period from the first day to the last day of the month.

## How do I see what I'm billed for?

You can see the billing and usage information for your account at anytime in the "Billing and licensing" pages of your account or using the REST API. For more information, see [AUTOTITLE](/billing/how-tos/products/view-product-use).

## Next steps

* [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)
* [AUTOTITLE](/billing/managing-your-billing/managing-your-payment-and-billing-information)
* [AUTOTITLE](/billing/tutorials/set-up-budgets)
* [AUTOTITLE](/billing/how-tos/set-up-payment/add-sales-tax-certificate)
