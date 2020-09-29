---
title: Requirements for listing an app
intro: 'Apps on {% data variables.product.prodname_marketplace %} must meet the requirements outlined on this page before our {% data variables.product.prodname_marketplace %} onboarding specialists will approve the listing.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
versions:
  free-pro-team: '*'
---



Before you submit your app for review, you must read and accept the terms of the "[{% data variables.product.prodname_marketplace %} Developer Agreement](/articles/github-marketplace-developer-agreement/)." You'll accept the terms within your [draft listing](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) on {% data variables.product.product_name %}. Once you've submitted your app, one of the {% data variables.product.prodname_marketplace %} onboarding specialists will reach out to you with more information about the onboarding process, and review your app to ensure it meets these requirements:

### User experience

- {% data variables.product.prodname_github_app %}s should have a minimum of 100 installations.
- {% data variables.product.prodname_oauth_app %}s should have a minimum of 200 users.
- Apps must provide value to customers and integrate with the platform in some way beyond authentication.
- Apps must be publicly available in {% data variables.product.prodname_marketplace %} and cannot be in beta or available by invite only.
- Apps cannot actively persuade users away from {% data variables.product.product_name %}.
- Marketing materials for the app must accurately represent the app's behavior.
- Apps must include links to user-facing documentation that describe how to set up and use the app.
- When a customer purchases an app and GitHub redirects them to the app's installation URL, the app must begin the OAuth flow immediately. For details, see "[Handling new purchases and free trials](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/#step-3-authorization)."

- Customers must be able to install your app and select repositories on both a personal and organization account. They should be able to view and manage those accounts separately.

### Brand and listing

- Apps that use GitHub logos must follow the "[{% data variables.product.product_name %} Logos and Usage](https://github.com/logos)" guidelines.
- Apps must have a logo, feature card, and screenshots images that meet the recommendations provided in "[Writing {% data variables.product.prodname_marketplace %} listing descriptions](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)."
- Listings must include descriptions that are well written and free of grammatical errors. For guidance in writing your listing, see "[Writing {% data variables.product.prodname_marketplace %} listing descriptions](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)."

### Security

Apps will go through a security review before being listed on {% data variables.product.prodname_marketplace %}. A successful review will meet the requirements and follow the security best practices listed in "[Security review process](/marketplace/getting-started/security-review-process/)." For information on the review process, contact [marketplace@github.com](mailto:marketplace@github.com).

### Billing flows

Your app must integrate [billing flows](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows) using the [{% data variables.product.prodname_marketplace %} webhook event](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

#### Free apps

{% data reusables.marketplace.free-apps-encouraged %} If you are listing a free app, you'll need to meet these requirements:

- Customers must be able to see that they have a free plan in the billing, profile, or account settings section of the app.
- When a customer cancels your app, you must follow the flow for [cancelling plans](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/).

#### Paid apps

To offer your app as a paid service, you'll need to meet these requirements to list your app on {% data variables.product.prodname_marketplace %}:

- To sell your app in {% data variables.product.prodname_marketplace %}, it must use GitHub's billing system. Your app does not need to handle payments but does need to use "[{% data variables.product.prodname_marketplace %} purchase events](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" to manage new purchases, upgrades, downgrades, cancellations, and free trials. See "[Billing flows](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)" to learn about how to integrate these events into your app. Using GitHub's billing system allows customers to purchase an app without leaving GitHub and pay for the service with the payment method already attached to their {% data variables.product.product_name %} account.
- Apps must support both monthly and annual billing for paid subscriptions purchases.
- Listings may offer any combination of free and paid plans. Free plans are optional but encouraged. For more information, see "[Setting a {% data variables.product.prodname_marketplace %} listing's pricing plan](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)."
{% data reusables.marketplace.marketplace-billing-ui-requirements %}
