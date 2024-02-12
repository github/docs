---
title: REST endpoints for the GitHub Marketplace API
intro: 'To help manage your app on {% data variables.product.prodname_marketplace %}, use these {% data variables.product.prodname_marketplace %} API endpoints.'
redirect_from:
  - /apps/marketplace/github-marketplace-api-endpoints
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /developers/github-marketplace/rest-endpoints-for-the-github-marketplace-api
  - /developers/github-marketplace/using-the-github-marketplace-api-in-your-app/rest-endpoints-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: REST API
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

Here are some useful endpoints available for Marketplace listings:

- [List plans](/rest/apps#list-plans)
- [List accounts for a plan](/rest/apps#list-accounts-for-a-plan)
- [Get a subscription plan for an account](/rest/apps#get-a-subscription-plan-for-an-account)
- [List subscriptions for the authenticated user](/rest/apps#list-subscriptions-for-the-authenticated-user)

See these pages for details on how to authenticate when using the {% data variables.product.prodname_marketplace %} API:

- [Authorization options for {% data variables.product.prodname_oauth_apps %}](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
- [Authentication options for {% data variables.product.prodname_github_apps %}](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)

{% note %}

**Note:** [Rate limits for the REST API](/rest/overview/resources-in-the-rest-api#rate-limiting) apply to all {% data variables.product.prodname_marketplace %} API endpoints.

{% endnote %}
