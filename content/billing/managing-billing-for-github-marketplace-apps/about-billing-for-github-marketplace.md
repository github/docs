---
title: About billing for GitHub Marketplace
intro: 'If you install a paid app in {% data variables.product.prodname_marketplace %}, your subscription shares your account''s existing billing date, payment method, and receipt.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-marketplace
  - /articles/about-billing-for-github-marketplace
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace
versions:
  free-pro-team: '*'
type: overview
topics:
  - Marketplace
---
{% data variables.product.prodname_marketplace %} includes apps with free and paid pricing plans. After you purchase and install an app, you can upgrade, downgrade, or cancel at any time.

{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

## Payment methods and billing cycles for {% data variables.product.prodname_marketplace %} purchases

You will have the same payment method for all paid plans and subscriptions across {% data variables.product.prodname_dotcom %}.

If your personal account or organization doesn't have a payment method on file, when you choose a paid plan for an app:
- Your billing date is today.
- You must add a payment method to your personal account or the organization in which you want to install the app.
- Your payment method is charged the full amount of your subscription.
- Your receipt is sent to the primary or billing email address on file for your personal account or organization.

If your personal account or organization has an existing payment method, when you choose a paid plan for an app:
- The payment method on file is immediately charged a prorated amount based on the time remaining until your next billing date.
- The monthly or yearly billing date for your app subscription is the same as the account or organization's regular billing date.
- On your next billing date, your receipt lists charges for your paid {% data variables.product.prodname_dotcom %} plan and your app subscription.

When you choose a paid plan with a free trial:
- You must have an existing payment method or add a new payment method for your personal account or the organization in which you want to install the app.
- If you don't have any other paid plans or subscriptions, you are charged the full amount of your subscription at the end of the 14-day free trial.
- If you have other paid plans or subscriptions, once your 14-day free trial ends, the payment method on file is immediately charged a prorated amount based on the time remaining until your next billing date.
- If you have other paid plans or subscriptions, on your next billing date, your receipt lists charges for your paid {% data variables.product.prodname_dotcom %} plan and your app subscription.

{% data reusables.user_settings.context_switcher %}

## Unit plan limits

If you choose a unit plan (for example, a plan that charges per user), and you exceed the units that you're paying for, the integrator may disable your access until you upgrade the app. For more information, see "[Upgrading the billing plan for a {% data variables.product.prodname_marketplace %} app](/articles/upgrading-the-billing-plan-for-a-github-marketplace-app)."

## Downgrading a {% data variables.product.prodname_marketplace %} app

If you downgrade your app subscription to a less expensive plan or if you cancel a paid app subscription, your changes will take effect at the end your current billing cycle. Your subscription will be moved to your new plan on your next billing date.

If you cancel an app on a free plan, your subscription will immediately end and you'll lose access to the app.

{% data reusables.marketplace.downgrade-marketplace-only %}

If you cancel a free trial on a paid plan, your subscription is immediately canceled and you will lose access to the app. For more information, see "[Canceling a {% data variables.product.prodname_marketplace %} app](/articles/canceling-a-github-marketplace-app)."

## Further reading

- "[About {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)"
- "[Purchasing and installing apps in {% data variables.product.prodname_marketplace %}](/articles/purchasing-and-installing-apps-in-github-marketplace)"
- "[{% data variables.product.prodname_marketplace %} support](/articles/github-marketplace-support)"
