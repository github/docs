---
title: GitHub Marketplace app subscriptions
intro: Understand how billing works for paid {% data variables.product.prodname_marketplace %} apps, including shared billing date and payment method, proration, free trials, unit limits, and plan changes.
permissions: '{% data reusables.permissions.marketplace-org-perms %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-marketplace
  - /articles/about-billing-for-github-marketplace
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace
  - /billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace
  - /billing/managing-billing-for-your-products/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - Marketplace
shortTitle: GitHub Marketplace apps
contentType: concepts
---

{% data variables.product.prodname_marketplace %} includes apps with free and paid pricing plans. After you purchase and install an app, you can upgrade, downgrade, or cancel **at any time**. This article explains the billing model, that is, what happens when you start, trial, change, or cancel a paid app subscription.

{% data reusables.marketplace.marketplace-apps-only %}

## Core billing model

All paid {% data variables.product.prodname_marketplace %} app subscriptions for a personal account or organization share:
* The existing payment method on file.
* The same monthly or yearly billing date.
* Consolidated receipts listing all paid {% data variables.product.prodname_dotcom %} products and app subscriptions.

**If no payment method exists when you first choose a paid plan**:

* You must define a payment method for the account.
* The billing cycle for your account starts immediately and that day is the billing date for the account.
* The full plan amount is charged.
* The receipt is sent to the primary or billing email address on file for your personal account or organization.

**If a payment method already exists**:

* The payment method on file is immediately charged a prorated amount based on the time remaining until your next billing date.
* The monthly or yearly billing date for your app subscription is the same as the account or organization's regular billing date.
* On your next billing date, your receipt lists charges for your paid {% data variables.product.prodname_dotcom %} plan and your app subscription.

## Free trials

**When you select a paid plan that includes a free trial:**
* You must have an existing payment method or add a new payment method for your personal account or the organization in which you want to install the app.
* If this is your only paid subscription, the first full charge occurs after the 14‑day trial ends.
* If you already have other paid subscriptions, the end of the 14‑day trial triggers an immediate prorated charge for the remainder of the current cycle, then the plan renews on the shared billing date.
* On your next billing date, your receipt will list charges for your paid {% data variables.product.prodname_dotcom %} plan and your app subscription.

{% data reusables.user-settings.context_switcher %}

> [!NOTE]
> When you transfer an organization with paid {% data variables.product.prodname_marketplace %} apps into an enterprise account, you may receive a second receipt but you will not be charged twice.

## Unit plan limits

For plans that charge per unit (for example, per user), exceeding the purchased units can lead the developer to restrict or disable app access until you move to a plan that covers the higher usage. For more information, see [AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps/upgrading-the-billing-plan-for-a-github-marketplace-app).

## Plan changes and cancellation

* **Upgrading or adding capacity** takes effect immediately; a prorated amount may be charged for the rest of the cycle (if applicable).
* **Downgrading a paid plan or canceling a paid app** takes effect at the end of the current billing cycle; access continues until then. Your subscription will be moved to your new plan on your next billing date.
  To learn how to downgrade a paid plan or cancel a paid app, see [AUTOTITLE](/billing/how-tos/pay-third-parties/downgrade-marketplace-app) and [AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps/canceling-a-github-marketplace-app).
* **Cancelling a free plan** ends the subscription immediately with loss of access.
* **Canceling a free trial** on a paid plan ends the trial immediately and access stops.

{% data reusables.marketplace.downgrade-marketplace-only %}

## Privacy

Publishers get only what they need to provision service, such as purchaser context (user or organization), plan identifier, effective dates, seat or unit counts, required usage metrics.

Publishers don't see your full payment details, other product invoices, or unrelated account data.

GitHub processes payments and issues receipts. Publishers cannot directly charge your payment method outside the standard plan billing flow.

## Further reading

* [AUTOTITLE](/apps/using-github-apps)
* [AUTOTITLE](/support/learning-about-github-support/github-marketplace-support)
