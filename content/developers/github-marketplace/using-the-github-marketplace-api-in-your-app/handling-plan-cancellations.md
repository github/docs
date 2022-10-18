---
title: Handling plan cancellations
intro: 'Cancelling a {% data variables.product.prodname_marketplace %} app triggers the [`marketplace_purchase` event](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) webhook with the `cancelled` action, which kicks off the cancellation flow.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
---
For more information about cancelling as it relates to billing, see "[Billing customers in {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)."

## Step 1. Cancellation event

If a customer chooses to cancel a {% data variables.product.prodname_marketplace %} order, GitHub sends a [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) webhook with the action `cancelled` to your app when the cancellation takes effect. If the customer cancels during a free trial, your app will receive the event immediately. When a customer cancels a paid plan, the cancellation will occur at the end of the customer's billing cycle.

## Step 2. Deactivating customer accounts

When a customer cancels a plan, you must:

* Automatically downgrade them to the free plan, if it exists.

    When a customer cancels a GitHub Marketplace subscription, GitHub does not automatically uninstall the app, so the customer can expect that free features will continue to function.

* Enable them to upgrade the plan through GitHub if they would like to continue the plan at a later time.

{% note %}

**Note:** We recommend using the [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) webhook's `effective_date` to determine when a plan change will occur and periodically synchronizing the [List accounts for a plan](/rest/reference/apps#list-accounts-for-a-plan). For more information on webhooks, see "[{% data variables.product.prodname_marketplace %} webhook events](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)."

{% endnote %}
