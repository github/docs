---
title: Handling plan cancellations
intro: 'Cancelling a {% data variables.product.prodname_marketplace %} app triggers the [`marketplace_purchase` event](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) webhook with the `cancelled` action, which kicks off the cancellation flow.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
versions:
  free-pro-team: '*'
---



For more information about cancelling as it relates to billing, see "[Billing customers in {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)."

### Step 1. Cancellation event

If a customer chooses to cancel a {% data variables.product.prodname_marketplace %} order, GitHub sends a [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) webhook with the action `cancelled` to your app when the cancellation takes effect. If the customer cancels during a free trial, your app will receive the event immediately. When a customer cancels a paid plan, the cancellation will occur at the end of the customer's billing cycle.

### Step 2. Deactivating customer accounts

When a customer cancels a free or paid plan, your app must perform these steps to complete cancellation:

1. Deactivate the account of the customer who cancelled their plan.
1. Revoke the OAuth token your app received for the customer.
1. If your app is an OAuth App, remove all webhooks your app created for repositories.
1. Remove all customer data within 30 days of receiving the `cancelled` event.

{% note %}

**Note:** We recommend using the [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) webhook's `effective_date` to determine when a plan change will occur and periodically synchronizing the [List accounts for a plan](/v3/apps/marketplace/#list-accounts-for-a-plan). For more information on webhooks, see "[{% data variables.product.prodname_marketplace %} webhook events](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)."

{% endnote %}
