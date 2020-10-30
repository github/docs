---
title: 关于 GitHub Marketplace
intro: 'Learn the basics to prepare your app for review before joining {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) connects you to developers who want to extend and improve their {% data variables.product.prodname_dotcom %} workflows. You can list free and paid tools for developers to use in {% data variables.product.prodname_marketplace %}. {% data variables.product.prodname_marketplace %} offers developers two types of tools: {% data variables.product.prodname_actions %} and Apps, and each tool requires different steps for adding it to {% data variables.product.prodname_marketplace %}.

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

To learn about publishing {% data variables.product.prodname_actions %} in the {% data variables.product.prodname_marketplace %}, see "[{% data variables.product.prodname_actions %} in the {% data variables.product.prodname_marketplace %}](/marketplace/actions/)."

### 应用

You can list verified and unverified apps in {% data variables.product.prodname_marketplace %}. Unverified apps do not go through the security, testing, and verification cycle {% data variables.product.prodname_dotcom %} requires for verified apps.

Verified apps have a green badge in {% data variables.product.prodname_marketplace %}. Unverified apps have a grey badge next to their listing and are only available as free apps.

![Green verified and grey unverified badge](/assets/images/marketplace/marketplace_verified_badges.png)

If you're interested in creating an app for {% data variables.product.prodname_marketplace %}, but you're new to {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_app %}s, see "[Building apps](/apps/)."

{% data reusables.marketplace.github_apps_preferred %}, although you can list both OAuth and {% data variables.product.prodname_github_app %}s in {% data variables.product.prodname_marketplace %}. See "[Differences between GitHub and OAuth apps](/apps/differences-between-apps/)" for more details. To learn more about switching from OAuth to {% data variables.product.prodname_github_apps %}, see [Migrating OAuth Apps to {% data variables.product.prodname_github_app %}s](/apps/migrating-oauth-apps-to-github-apps/).

If you have questions about {% data variables.product.prodname_marketplace %}, please contact {% data variables.contact.contact_support %} directly.

#### Unverified Apps

Unverified apps do not need to meet the "[Requirements for listing an app on {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)" or go through the "[Security review process](/marketplace/getting-started/security-review-process/)".

{% data reusables.marketplace.unverified-apps %} Having a published paid plan will prevent you from being able to submit an unverified app. You must remove paid plans or keep them in draft mode before publishing an unverified app.

To list your unverified app in {% data variables.product.prodname_marketplace %}, you only need to create a "[Listing on {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/)" and submit it as an unverified listing.

{% data reusables.marketplace.launch-with-free %}

#### Verified Apps

If you've already built an app and you're interested in submitting a verified listing in {% data variables.product.prodname_marketplace %}, start here:

1. [Getting started with {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/)<br/>Learn about requirements, guidelines, and the app submission process.

1. [Integrating with the {% data variables.product.prodname_marketplace %} API](/marketplace/integrating-with-the-github-marketplace-api/)<br/>Before you can list your app on {% data variables.product.prodname_marketplace %}, you'll need to integrate billing flows using the {% data variables.product.prodname_marketplace %} API and webhook events.

1. [Listing on {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/) <br/>Create a draft {% data variables.product.prodname_marketplace %} listing, configure webhook settings, and set up pricing plans.

1. [Selling your app](/marketplace/selling-your-app/)<br/>Learn about pricing plans, billing cycles, and how to receive payment from {% data variables.product.prodname_dotcom %} for your app.

1. [{% data variables.product.prodname_marketplace %} Insights](/marketplace/github-marketplace-insights/)<br/>See how your app is performing in {% data variables.product.prodname_marketplace %}. You can use metrics collected by {% data variables.product.prodname_dotcom %} to guide your marketing campaign and  be successful in {% data variables.product.prodname_marketplace %}.

1. [{% data variables.product.prodname_marketplace %} transactions](/marketplace/github-marketplace-transactions/)<br/>Download and view transaction data for your {% data variables.product.prodname_marketplace %} listing.

### Reviewing your app

We want to make sure that the apps offered on {% data variables.product.prodname_marketplace %} are safe, secure, and well tested. The {% data variables.product.prodname_marketplace %} onboarding specialists will review your app to ensure that it meets all requirements. Follow the guidelines in these articles before submitting your app:


* [Requirements for listing an app on {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)
* [Security review process](/marketplace/getting-started/security-review-process/)
