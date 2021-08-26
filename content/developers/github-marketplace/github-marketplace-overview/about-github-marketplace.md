---
title: About GitHub Marketplace
intro: 'Learn about {% data variables.product.prodname_marketplace %} where you can share your apps and actions publicly with all {% data variables.product.product_name %} users.'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
topics:
  - Marketplace
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) connects you to developers who want to extend and improve their {% data variables.product.prodname_dotcom %} workflows. You can list free and paid tools for developers to use in {% data variables.product.prodname_marketplace %}. {% data variables.product.prodname_marketplace %} offers developers two types of tools: {% data variables.product.prodname_actions %} and Apps, and each tool requires different steps for adding it to {% data variables.product.prodname_marketplace %}.

## GitHub Actions

{% data reusables.actions.actions-not-verified %}

To learn about publishing {% data variables.product.prodname_actions %} in {% data variables.product.prodname_marketplace %}, see "[Publishing actions in GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)."

## Apps

Anyone can share their apps with other users for free on {% data variables.product.prodname_marketplace %} but only apps owned by organizations can sell their app. 

To publish paid plans for your app and display a marketplace badge, you must complete the publisher verification process. For more information, see "[Applying for publisher verification for your organization](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)" or "[Requirements for listing an app](/developers/github-marketplace/requirements-for-listing-an-app)."

Once the organization meets the requirements, someone with owner permissions in the organization can publish paid plans for any of their apps. Each app with a paid plan also goes through a financial onboarding process to enable payments.

To publish apps with free plans, you only need to meet the general requirements for listing any app. For more information, see "[Requirements for all GitHub Marketplace listings](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)."

### New to apps?

If you're interested in creating an app for {% data variables.product.prodname_marketplace %}, but you're new to {% data variables.product.prodname_github_apps %} or {% data variables.product.prodname_oauth_apps %}, see "[Building {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" or "[Building {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps)."

### {% data variables.product.prodname_github_apps %} vs. {% data variables.product.prodname_oauth_apps %}

{% data reusables.marketplace.github_apps_preferred %}, although you can list both OAuth and {% data variables.product.prodname_github_apps %} in {% data variables.product.prodname_marketplace %}. For more information, see "[Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)" and "[Migrating {% data variables.product.prodname_oauth_apps %} to {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)."

## Publishing an app to {% data variables.product.prodname_marketplace %} overview

When you have finished creating your app, you can share it with other users by publishing it to {% data variables.product.prodname_marketplace %}. In summary, the process is:

1. Review your app carefully to ensure that it will behave as expected in other repositories and that it follows best practice guidelines. For more information, see "[Security best practices for apps](/developers/github-marketplace/security-best-practices-for-apps)" and "[Requirements for listing an app](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)."

1. Add webhook events to the app to track user billing requests. For more information about the {% data variables.product.prodname_marketplace %} API, webhook events, and billing requests, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

1. Create a draft {% data variables.product.prodname_marketplace %} listing. For more information, see "[Drafting a listing for your app](/developers/github-marketplace/drafting-a-listing-for-your-app)."

1. Add a pricing plan. For more information, see "[Setting pricing plans for your listing](/developers/github-marketplace/setting-pricing-plans-for-your-listing)."

1. Read and accept the terms of the "[{% data variables.product.prodname_marketplace %} Developer Agreement](/articles/github-marketplace-developer-agreement/)."

1. Submit your listing for publication in {% data variables.product.prodname_marketplace %}. For more information, see "[Submitting your listing for publication](/developers/github-marketplace/submitting-your-listing-for-publication)."

## Seeing how your app is performing

You can access metrics and transactions for your listing. For more information, see:

- "[Viewing metrics for your listing](/developers/github-marketplace/viewing-metrics-for-your-listing)"
- "[Viewing transactions for your listing](/developers/github-marketplace/viewing-transactions-for-your-listing)"

## Contacting Support 

If you have questions about {% data variables.product.prodname_marketplace %}, please contact {% data variables.contact.contact_support %} directly.
