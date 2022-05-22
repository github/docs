---
title: Rate limits for GitHub Apps
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits/
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps/
  - /apps/building-github-apps/rate-limits-for-github-apps/
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
### Server-to-server requests

{% if currentVersion == "free-pro-team@latest" %}

Different server-to-server request rate limits apply to {% data variables.product.prodname_github_app %}s if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account.

#### Normal server-to-server rate limits

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% if currentVersion == "free-pro-team@latest" %}

#### {% data variables.product.prodname_ghe_cloud %} server-to-server rate limits

{% data variables.product.prodname_github_app %}s that are installed on an organization or repository owned by a {% data variables.product.prodname_ghe_cloud %} account and make server-to-server requests have a rate limit of 15,000 requests per hour.

{% endif %}

### User-to-server requests

{% data variables.product.prodname_github_app %}s can also act [on behalf of a user](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), making user-to-server requests.

{% if currentVersion == "free-pro-team@latest" %}

Different user-to-server request rate limits apply to {% data variables.product.prodname_github_app %}s if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account and the authenticated user also belongs to the same {% data variables.product.prodname_ghe_cloud %} account.

#### Normal user-to-server rate limits

{% endif %}

User-to-server requests are rate limited at 5,000 requests per hour and per authenticated user. All OAuth applications authorized by that user, personal access tokens owned by that user, and requests authenticated with that user's{% if currentVersion == "github-ae@latest" %} token{% else %} username and password{% endif %} share the same quota of 5,000 requests per hour for that user.

{% if currentVersion == "free-pro-team@latest" %}

#### {% data variables.product.prodname_ghe_cloud %} user-to-server rate limits

When a user belongs to a {% data variables.product.prodname_ghe_cloud %} account, user-to-server requests to resources owned by the same {% data variables.product.prodname_ghe_cloud %} account are rate limited at 15,000 requests per hour and per authenticated user. All OAuth applications authorized by that user, personal access tokens owned by that user, and {% data variables.product.prodname_ghe_cloud %} requests authenticated with that user's username and password share the same quota of 5,000 requests per hour for that user.

{% endif %}

For more detailed information about rate limits, see "[Rate limiting](/rest/overview/resources-in-the-rest-api#rate-limiting)" for REST API and "[Resource limitations](/graphql/overview/resource-limitations)" for GraphQL API.
