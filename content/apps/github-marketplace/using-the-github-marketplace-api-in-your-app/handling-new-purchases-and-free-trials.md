---
title: Handling new purchases and free trials
intro: 'When a customer purchases a paid plan, free trial, or the free version of your {% data variables.product.prodname_marketplace %} app, you''ll receive the [`marketplace_purchase` event](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) webhook with the `purchased` action, which kicks off the purchasing flow.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-new-purchases-and-free-trials
  - /apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

{% warning %}

If you offer a {% data variables.product.prodname_github_app %} in {% data variables.product.prodname_marketplace %}, your app must identify users following the OAuth authorization flow. You don't need to set up a separate {% data variables.product.prodname_oauth_app %} to support this flow. See "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)" for more information.

{% endwarning %}

## Step 1. Initial purchase and webhook event

Before a customer purchases your {% data variables.product.prodname_marketplace %} app, they select a [listing plan](/apps/github-marketplace/selling-your-app-on-github-marketplace/pricing-plans-for-github-marketplace-apps). They also choose whether to purchase the app from their personal account or an organization account.

The customer completes the purchase by clicking **Complete order and begin installation**.

{% data variables.product.product_name %} then sends the [`marketplace_purchase`](/webhooks/webhook-events-and-payloads#marketplace_purchase) webhook with the `purchased` action to your app.

Read the `effective_date` and `marketplace_purchase` object from the `marketplace_purchase` webhook to determine which plan the customer purchased, when the billing cycle starts, and when the next billing cycle begins.

If your app offers a free trial, read the `marketplace_purchase[on_free_trial]` attribute from the webhook. If the value is `true`, your app will need to track the free trial start date (`effective_date`) and the date the free trial ends (`free_trial_ends_on`). Use the `free_trial_ends_on` date to display the remaining days left in a free trial in your app's UI. You can do this in either a banner or in your [billing UI](/apps/github-marketplace/selling-your-app-on-github-marketplace/billing-customers#providing-billing-services-in-your-apps-ui). To learn how to handle cancellations before a free trial ends, see "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-plan-cancellations)." See "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-plan-changes)" to find out how to transition a free trial to a paid plan when a free trial expires.

See "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api)" for an example of the `marketplace_purchase` event payload.

## Step 2. Installation

If your app is a {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} prompts the customer to select which repositories the app can access when they purchase it. {% data variables.product.product_name %} then installs the app on the account the customer selected  and grants access to the selected repositories.

At this point, if you specified a **Setup URL** in your {% data variables.product.prodname_github_app %} settings, {% data variables.product.product_name %} will redirect the customer to that URL. If you do not specify a setup URL, you will not be able to handle purchases of your {% data variables.product.prodname_github_app %}.

{% note %}

**Note:** The **Setup URL** is described as optional in {% data variables.product.prodname_github_app %} settings, but it is a required field if you want to offer your app in {% data variables.product.prodname_marketplace %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/about-the-setup-url)."

{% endnote %}

If your app is an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} does not install it anywhere. Instead, {% data variables.product.product_name %} redirects the customer to the **Installation URL** you specified in your [{% data variables.product.prodname_marketplace %} listing](/apps/github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app#listing-urls).

When a customer purchases an {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} redirects the customer to the URL you choose (either Setup URL or Installation URL) and the URL includes the customer's selected pricing plan as a query parameter: `marketplace_listing_plan_id`.

## Step 3. Authorization

When a customer purchases your app, you must send the customer through the OAuth authorization flow:

* If your app is a {% data variables.product.prodname_github_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Setup URL**. Follow the steps in "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)."

* If your app is an {% data variables.product.prodname_oauth_app %}, begin the authorization flow as soon as {% data variables.product.product_name %} redirects the customer to the **Installation URL**. Follow the steps in "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)."

For either type of app, the first step is to redirect the customer to [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize).

After the customer completes the authorization, your app receives an OAuth access token for the customer. You'll need this token for the next step.

{% note %}

**Note:** When authorizing a customer on a free trial, grant them the same access they would have on the paid plan.  You'll move them to the paid plan after the trial period ends.

{% endnote %}

## Step 4. Provisioning customer accounts

Your app must provision a customer account for all new purchases. Using the access token you received for the customer in [Step 3. Authorization](#step-3-authorization), call the "[`GET /user/marketplace_purchases`](/rest/apps/marketplace#list-subscriptions-for-the-authenticated-user)" endpoint. The response will include the customer's `account` information and show whether they are on a free trial (`on_free_trial`). Use this information to complete setup and provisioning.

{% data reusables.marketplace.marketplace-double-purchases %}

If the purchase is for an organization and per-user, you can prompt the customer to choose which organization members will have access to the purchased app.

You can customize the way that organization members receive access to your app. Here are a few suggestions:

**Flat-rate pricing:** If the purchase is made for an organization using flat-rate pricing, your app can [get all the organization’s members](/rest/orgs/members#list-organization-members) via the API and prompt the organization owner to choose which members will have paid users on the integrator side.

**Per-unit pricing:** One method of provisioning per-unit seats is to allow users to occupy a seat as they log in to the app. Once the customer hits the seat count threshold, your app can alert the user that they need to upgrade through {% data variables.product.prodname_marketplace %}.
