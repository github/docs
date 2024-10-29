---
title: Testing your app
intro: 'GitHub recommends testing your app with APIs and webhooks before submitting your listing to {% data variables.product.prodname_marketplace %} so you can provide an ideal experience for customers. Before an onboarding expert approves your app, it must adequately handle the billing flows.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
  - /developers/github-marketplace/using-the-github-marketplace-api-in-your-app/testing-your-app
  - /apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/testing-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

## Testing apps

You can use a draft {% data variables.product.prodname_marketplace %} listing to simulate each of the billing flows. A listing in the draft state means that it has not been submitted for approval. Any purchases you make using a draft {% data variables.product.prodname_marketplace %} listing will _not_ create real transactions, and GitHub will not charge your credit card. Note that you can only simulate purchases for plans published in the draft listing and not for draft plans. For more information, see "[AUTOTITLE](/apps/github-marketplace/listing-an-app-on-github-marketplace/drafting-a-listing-for-your-app)" and "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app)."

### Using a development app with a draft listing to test changes

A {% data variables.product.prodname_marketplace %} listing can only be associated with a single app registration, and each app can only access its own {% data variables.product.prodname_marketplace %} listing. For these reasons, we recommend configuring a separate development app, with the same configuration as your production app, and creating a draft {% data variables.product.prodname_marketplace %} listing that you can use for testing. The draft {% data variables.product.prodname_marketplace %} listing allows you to test changes without affecting the active users of your production app. You will never have to submit your development {% data variables.product.prodname_marketplace %} listing, since you will only use it for testing.

Because you can only create draft {% data variables.product.prodname_marketplace %} listings for public apps, you must make your development app public. Public apps are not discoverable outside of published {% data variables.product.prodname_marketplace %} listings as long as you don't share the app's URL. A Marketplace listing in the draft state is only visible to the app's owner.

Once you have a development app with a draft listing, you can use it to test changes you make to your app while integrating with the {% data variables.product.prodname_marketplace %} API and webhooks.

{% warning %}

Do not make test purchases with an app that is live in {% data variables.product.prodname_marketplace %}.

{% endwarning %}

### Simulating Marketplace purchase events

Your testing scenarios may require setting up listing plans that offer free trials and switching between free and paid subscriptions. Because downgrades and cancellations don't take effect until the next billing cycle, {% data variables.product.company_short %} provides a developer-only feature to "Apply Pending Change" to force `changed` and `cancelled` plan actions to take effect immediately. You can access **Apply Pending Change** for apps with draft Marketplace listings in https://github.com/settings/billing#pending-cycle:

## Testing APIs

For most {% data variables.product.prodname_marketplace %} API endpoints, we also provide stubbed API endpoints that return hard-coded, fake data you can use for testing. To receive stubbed data, you must specify stubbed URLs, which include `/stubbed` in the route (for example, `/user/marketplace_purchases/stubbed`). For a list of endpoints that support this stubbed-data approach, see [{% data variables.product.prodname_marketplace %} endpoints](/rest/apps#github-marketplace).

## Testing webhooks

GitHub provides tools for testing your deployed payloads. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/testing-webhooks)."
