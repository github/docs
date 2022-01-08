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
## Server-to-server requests

{% ifversion ghec %}

The rate limits for server-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### Normal server-to-server rate limits

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion ghec %}

### {% data variables.product.prodname_ghe_cloud %} server-to-server rate limits

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by an enterprise on {% data variables.product.product_location %} have a rate limit of 15,000 requests per hour for server-to-server requests.

{% endif %}

## User-to-server requests

{% data variables.product.prodname_github_apps %} can also act [on behalf of a user](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), making user-to-server requests.

{% ifversion ghec %}

The rate limits for user-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### Normal user-to-server rate limits

{% endif %}

User-to-server requests are rate limited at {% ifversion ghae %}15,000{% else %}5,000{% endif %} requests per hour and per authenticated user. All OAuth applications authorized by that user, personal access tokens owned by that user, and requests authenticated with that user's{% ifversion ghae %} token{% else %} username and password{% endif %} share the same quota of 5,000 requests per hour for that user.

{% ifversion ghec %}

### {% data variables.product.prodname_ghe_cloud %} user-to-server rate limits

When a user belongs to an enterprise on {% data variables.product.product_location %}, user-to-server requests to resources owned by the same enterprise are rate limited at 15,000 requests per hour and per authenticated user. All OAuth applications authorized by that user, personal access tokens owned by that user, and requests authenticated with that user's username and password share the same quota of 5,000 requests per hour for that user.

{% endif %}

For more detailed information about rate limits, see "[Rate limiting](/rest/overview/resources-in-the-rest-api#rate-limiting)" for REST API and "[Resource limitations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" for GraphQL API.
