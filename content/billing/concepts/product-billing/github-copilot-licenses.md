---
title: GitHub Copilot licenses
intro: 'Learn how licenses for {% data variables.product.prodname_copilot_short %} work, including usage measurement and managing your budget.'
versions:
  feature: copilot
topics:
  - Billing
  - Copilot
redirect_from:
  - /billing/concepts/product-billing/github-copilot
  - /billing/managing-billing-for-github-copilot/about-billing-for-github-copilot
  - /billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot
  - /billing/managing-billing-for-your-products/managing-billing-for-github-copilot
  - /billing/managing-billing-for-github-copilot
  - /billing/managing-billing-for-your-products/about-billing-for-github-copilot
contentType: concepts
---

Usage of {% data variables.product.prodname_copilot %} is measured through a combination of licenses and monthly usage tracking. For more information about how usage costs in {% data variables.product.prodname_copilot_short %} work, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-premium-requests).

## Licenses for {% data variables.product.prodname_copilot_short %}

{% data variables.product.prodname_copilot_short %} licenses are required for each user who uses {% data variables.product.prodname_copilot_short %}. Licenses are available through different plans depending on your account type.

| Account type      | Options                                                                 |
|-------------------|-------------------------------------------------------------------------|
| **Personal accounts** | <ul><li>{% data variables.copilot.copilot_pro_short %}: {% data variables.copilot.cfi_price_per_month %} per calendar month or {% data variables.copilot.cfi_price_per_year %} per year.</li><li>{% data variables.copilot.copilot_pro_plus_short %}: {% data variables.copilot.cpp_price_per_month %} per calendar month or {% data variables.copilot.cpp_price_per_year %} per year.</li><li>{% data variables.copilot.copilot_free_short %} offers limited access to {% data variables.product.prodname_copilot_short %} features at no cost.</li></ul> |
| **Organizations** | {% data variables.copilot.copilot_business_short %}: {% data variables.copilot.cfb_price_per_month %} per user per month (billed monthly). |
| **Enterprises**   | Choose {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, or mix them across organizations. Both are billed monthly, pricing varies. |

> [!NOTE] {% data reusables.copilot.copilot-one-account %}

## Free use of {% data variables.product.prodname_copilot_short %}

There are several ways to use {% data variables.product.prodname_copilot_short %} for free.

### {% data variables.copilot.copilot_free_short %}

* Provides limited access to {% data variables.product.prodname_copilot_short %} features at no cost.
* Includes a monthly allowance of completions and premium requests.
* Intended for **individual use only** (not suitable for organizations or enterprises).
* For usage beyond the free plan limits, upgrade to {% data variables.copilot.copilot_pro_short %}.

### 30-day trial for {% data variables.copilot.copilot_pro_short %}

* Before starting a paid plan for a personal account, you can activate a **one-time 30-day trial**. [Start using {% data variables.copilot.copilot_free_short %}](https://github.com/copilot).
* You must choose a monthly or yearly billing cycle and provide a payment method.
* If you do not cancel before the end of the trial, it automatically converts to a paid plan.
* You can cancel any time during the 30 days. If you cancel, you will not be charged and will keep access until the trial ends.
* Free trials are limited to three per payment method. Additional trials will continue as paid subscriptions.

### Educational and open source benefits

* {% data variables.copilot.copilot_pro_short %} is free for verified students, teachers, and maintainers of popular open source projects. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer).

## How usage of {% data variables.product.prodname_copilot_short %} licenses is measured

Usage of {% data variables.product.prodname_copilot_short %} licenses is measured by the number of seats used.

### Personal accounts

* You choose monthly or yearly billing.
* Plan changes (upgrades, downgrades, or switching between monthly and yearly) take effect immediately, with proration applied where relevant.
* Canceling a monthly plan keeps access until the end of the cycle; yearly plans run until the end of the paid term.

For details on billing and proration, see [AUTOTITLE](/copilot/concepts/billing/billing-for-individuals).

### Organizations and enterprises

* A seat is a license for one user.
* Organizations and enterprises are billed for the number of assigned seats at the end of each monthly billing cycle.
* If a user has seats in multiple organizations within the same enterprise, the enterprise is only billed once per cycle.
* If both a {% data variables.copilot.copilot_business_short %} and a {% data variables.copilot.copilot_enterprise_short %} seat are assigned, only the enterprise seat is billed.

For more information about seat assignment, see [AUTOTITLE](/copilot/reference/copilot-billing/seat-assignment).

## Using more than your plan's included seats

Individual plans are tied to a single account and can’t include additional seats. To license multiple users, upgrade to an organizational plan.

For **organizations and enterprises**:

* You can assign additional {% data variables.product.prodname_copilot_short %} seats at any time.
* Additional seats are billed immediately on a prorated basis for the rest of the current billing cycle.
* Assigned users gain access to {% data variables.product.prodname_copilot_short %} features right away.

For details about how added seats are billed, see [AUTOTITLE](/copilot/reference/copilot-billing/license-changes).

## Paying for {% data variables.product.prodname_copilot_short %} licenses

You pay for additional licenses using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

## Managing your budget for {% data variables.product.prodname_copilot_short %} licenses

To help manage your budget for {% data variables.product.prodname_copilot_short %} licenses, consider the following strategies.

### Personal accounts

* You can set budgets for your personal account to receive email alerts at 75%, 90%, and 100% of the budget.
* Budgets help you monitor spending but do not stop license charges.

For more information about using budgets to control spending, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

### Organizations and enterprises

* Owners and billing managers can set budgets at the organization or enterprise level, or by cost center.
* Budgets for licenses are monitoring-only: spending can exceed the budget, but alerts notify you when thresholds are reached.
* Use cost centers to track spending across teams or initiatives.

For more information about managing company spending, see [AUTOTITLE](/copilot/how-tos/spending/manage-company-spending).
