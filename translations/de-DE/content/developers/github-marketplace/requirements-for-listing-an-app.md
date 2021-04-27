---
title: Requirements for listing an app
intro: 'Apps on {% data variables.product.prodname_marketplace %} must meet the requirements outlined on this page before the listing can be published.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
versions:
  free-pro-team: '*'
topics:
  - marktplatz
---

<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

The requirements for listing an app on {% data variables.product.prodname_marketplace %} vary according to whether you want to offer a free or a paid app.

### Requirements for all {% data variables.product.prodname_marketplace %} listings

All listings on {% data variables.product.prodname_marketplace %} should be for tools that provide value to the {% data variables.product.product_name %} community. When you submit your listing for publication, you must read and accept the terms of the "[{% data variables.product.prodname_marketplace %} Developer Agreement](/articles/github-marketplace-developer-agreement/)."

#### User experience requirements for all apps

All listings should meet the following requirements, regardless of whether they are for a free or paid app.

- Listings must not actively persuade users away from {% data variables.product.product_name %}.
- Listings must include valid contact information for the publisher.
- Listings must have a relevant description of the application.
- Listings must specify a pricing plan.
- Apps must provide value to customers and integrate with the platform in some way beyond authentication.
- Apps must be publicly available in {% data variables.product.prodname_marketplace %} and cannot be in beta or available by invite only.
- Apps must have webhook events set up to notify the publisher of any plan changes or cancellations using the {% data variables.product.prodname_marketplace %} API. For more information, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

For more information on providing a good customer experience, see "[Customer experience best practices for apps](/developers/github-marketplace/customer-experience-best-practices-for-apps)."

#### Brand and listing requirements for all apps

- Apps that use GitHub logos must follow the {% data variables.product.company_short %} guidelines. For more information, see "[{% data variables.product.company_short %} Logos and Usage](https://github.com/logos)."
- Apps must have a logo, feature card, and screenshots images that meet the recommendations provided in "[Writing {% data variables.product.prodname_marketplace %} listing descriptions](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)."
- Listings must include descriptions that are well written and free of grammatical errors. For guidance in writing your listing, see "[Writing {% data variables.product.prodname_marketplace %} listing descriptions](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)."

To protect your customers, we recommend that you also follow security best practices. For more information, see "[Security best practices for apps](/developers/github-marketplace/security-best-practices-for-apps)."

### Considerations for free apps

{% data reusables.marketplace.free-apps-encouraged %}

### Requirements for paid apps

To publish a paid plan for your app on {% data variables.product.prodname_marketplace %}, your app must be owned by an organization that is a verified publisher. For more information about the verification process or transferring ownership of your app, see "[Applying for publisher verification for your organization](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)."

If your app is already published and you're a verified publisher, then you can publish a new paid plan from the pricing plan editor. For more information, see "[Setting pricing plans for your listing](/developers/github-marketplace/setting-pricing-plans-for-your-listing)."

To publish a paid app (or an app that offers a paid plan), you must also meet the following requirements:

- {% data variables.product.prodname_github_app %}s should have a minimum of 100 installations.
- {% data variables.product.prodname_oauth_app %}s should have a minimum of 200 users.
- All paid apps must handle {% data variables.product.prodname_marketplace %} purchase events for new purchases, upgrades, downgrades, cancellations, and free trials. For more information, see "[Billing requirements for paid apps](#billing-requirements-for-paid-apps)" below.

When you are ready to publish the app on {% data variables.product.prodname_marketplace %} you must request verification for the app listing.

{% note %}

**Note:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} For information on how to transfer an app to an organization, see: "[Submitting your listing for publication](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)."

{% endnote %}

### Billing requirements for paid apps

Your app does not need to handle payments but does need to use {% data variables.product.prodname_marketplace %} purchase events to manage new purchases, upgrades, downgrades, cancellations, and free trials. For information about how integrate these events into your app, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

Using GitHub's billing API allows customers to purchase an app without leaving GitHub and to pay for the service with the payment method already attached to their {% data variables.product.product_name %} account.

- Apps must support both monthly and annual billing for paid subscriptions purchases.
- Listings may offer any combination of free and paid plans. Free plans are optional but encouraged. For more information, see "[Setting a {% data variables.product.prodname_marketplace %} listing's pricing plan](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)."
