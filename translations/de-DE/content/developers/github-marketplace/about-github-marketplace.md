---
title: Informationen zu GitHub Marketplace
intro: 'Learn about {% data variables.product.prodname_marketplace %} where you can share your apps and actions publicly with all {% data variables.product.product_name %} users.'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) connects you to developers who want to extend and improve their {% data variables.product.prodname_dotcom %} workflows. You can list free and paid tools for developers to use in {% data variables.product.prodname_marketplace %}. {% data variables.product.prodname_marketplace %} offers developers two types of tools: {% data variables.product.prodname_actions %} and Apps, and each tool requires different steps for adding it to {% data variables.product.prodname_marketplace %}.

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

To learn about publishing {% data variables.product.prodname_actions %} in {% data variables.product.prodname_marketplace %}, see "[Publishing actions in GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)."

### Apps

Anyone can share their apps with other users on {% data variables.product.prodname_marketplace %} but only listings that are verified by {% data variables.product.company_short %} can include paid plans. For more information, see "[About verified creators](/developers/github-marketplace/about-verified-creators)."

If you're interested in creating an app for {% data variables.product.prodname_marketplace %}, but you're new to {% data variables.product.prodname_github_apps %} or {% data variables.product.prodname_oauth_app %}s, see "[Building {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" or "[Building {% data variables.product.prodname_oauth_app %}s](/developers/apps/building-oauth-apps)."

{% data reusables.marketplace.github_apps_preferred %}, although you can list both OAuth and {% data variables.product.prodname_github_app %}s in {% data variables.product.prodname_marketplace %}. For more information, see "[Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_app %}s](/apps/differences-between-apps/)" and "[Migrating {% data variables.product.prodname_oauth_app %}s to {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)."

If you have questions about {% data variables.product.prodname_marketplace %}, please contact {% data variables.contact.contact_support %} directly.

### Publishing an app to {% data variables.product.prodname_marketplace %}

When you have finished creating your app, you can share it with other users by publishing it to {% data variables.product.prodname_marketplace %}. In summary, the process is:

1. Review your app carefully to ensure that it will behave as expected in other repositories and that it follows best practice guidelines. For more information, see "[Security best practices for apps](/developers/github-marketplace/security-best-practices-for-apps)" and "[Requirements for listing an app](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)."

1. Add webhook events to the app to track user billing requests. For more information about the {% data variables.product.prodname_marketplace %} API, webhook events, and billing requests, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

1. Create a draft {% data variables.product.prodname_marketplace %} listing. For more information, see "[Drafting a listing for your app](/developers/github-marketplace/drafting-a-listing-for-your-app)."

1. Add a pricing plan. For more information, see "[Setting pricing plans for your listing](/developers/github-marketplace/setting-pricing-plans-for-your-listing)."

1. Check whether your app meets the requirements for listing on {% data variables.product.prodname_marketplace %} as a free or a paid app. For more information, see "[Requirements for listing an app](/developers/github-marketplace/requirements-for-listing-an-app)."

1. Read and accept the terms of the "[{% data variables.product.prodname_marketplace %} Developer Agreement](/articles/github-marketplace-developer-agreement/)."

1. Submit your listing for publication in {% data variables.product.prodname_marketplace %}, requesting verification if you want to sell the app. For more information, see "[Submitting your listing for publication](/developers/github-marketplace/submitting-your-listing-for-publication)."

An onboarding expert will contact you with any questions or further steps. For example, if you have added a paid plan, you will need to complete the verification process and complete financial onboarding. As soon as your listing is approved the app is published to {% data variables.product.prodname_marketplace %}.

### Seeing how your app is performing

You can access metrics and transactions for your listing. Weitere Informationen findest Du unter:

- "[Viewing metrics for your listing](/developers/github-marketplace/viewing-metrics-for-your-listing)"
- "[Viewing transactions for your listing](/developers/github-marketplace/viewing-transactions-for-your-listing)"
