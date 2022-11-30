---
title: Rate limits for GitHub Apps
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Rate limits
---

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## About rate limits for apps

Rate limits for {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} depend on the plan for the organization where you install the application. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products)" and "[Types of {% data variables.product.company_short %} accounts](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)."

{% endif %}

## Server-to-server requests

{% ifversion ghec or fpt %}

### Default server-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% data variables.product.prodname_github_apps %} making server-to-server requests use the installation's minimum rate limit of 5,000 requests per hour. If an application is installed on an organization with more than 20 users, the application receives another 50 requests per hour for each user. Installations that have more than 20 repositories receive another 50 requests per hour for each repository. The maximum rate limit for an installation is 12,500 requests per hour.

{% ifversion fpt or ghec %}

### Server-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_github_apps %} that are installed on an organization within an enterprise on {% data variables.location.product_location %} are subject to a limit of 15,000 requests per hour per organization that has installed the app.

{% endif %}

## User-to-server requests

{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} can also act on behalf of a user, making user-to-server requests after the user authorizes the app. For more information, see "[Authorizing {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)."

User-to-server requests from {% data variables.product.prodname_oauth_apps %} are authenticated with an OAuth token. User-to-server requests from {% data variables.product.prodname_github_apps %} are authenticated with either an OAuth token or an expiring user access token. For more information, see "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps)."

{% ifversion fpt or ghec %}

### Default user-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

The rate limits for user-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.location.product_location %}, then the rate is higher than for installations outside an enterprise.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### User-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Further reading

- "[Rate limiting](/rest/overview/resources-in-the-rest-api#rate-limiting)" in the REST API documentation
- "[Resource limitations](/graphql/overview/resource-limitations)" in the GraphQL API documentation
