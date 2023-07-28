---
title: Rate limits for GitHub Apps
intro: '{% data reusables.shortdesc.rate_limits_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
  - /developers/apps/building-github-apps/rate-limits-for-github-apps
  - /apps/creating-github-apps/creating-github-apps/rate-limits-for-github-apps
  - /apps/creating-github-apps/setting-up-a-github-app/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Rate limits
---

## About rate limits for {% data variables.product.prodname_github_apps %}

{% ifversion ghec or fpt or ghae %}

{% data variables.product.company_short %} sets a limit on the number of requests a {% data variables.product.prodname_github_app %} can send to the server within a specific time period. This limit helps to prevent abuse and denial-of-service attacks, and ensures that the system remains available for all users.

{% endif %}

{% ifversion ghec or fpt %}

{% data variables.product.company_short %} may apply additional secondary rate limits to some actions, to ensure API availability. You can avoid secondary rate limits by following best practices and staying within the rate limit guidelines listed below. For more information about secondary rate limits, see "[AUTOTITLE](/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" and "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#secondary-rate-limits)."

{% elsif ghes %}

{% note %}

Rate limits are disabled by default for {% data variables.product.product_name %}. Contact your site administrator to confirm the rate limits for your instance.

{% endnote %}

When rate limits are enabled for your {% data variables.product.product_name %} instance, there is a limit on the number of requests a {% data variables.product.prodname_github_app %} can send to the server within a specific time period. This limit helps to ensure the system remains available for all users.

{% endif %}

## Determining rate limits for a {% data variables.product.prodname_github_app %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

The rate limits for requests made by a {% data variables.product.prodname_github_app %} depend on where the app is installed. If the app is installed on an organization or repository owned by an enterprise on {% data variables.location.product_location %}, the rate limit will be higher than for an app that is installed outside an enterprise. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)" and "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)."

{% endif %}

Rate limits {% ifversion ghec or fpt %}also {% endif %}depend on whether the {% data variables.product.prodname_github_app %} authenticates with a user access token or with an installation access token. A user access token allows an app to act on behalf of a specific user, after the user authorizes the app. An installation access token allows an app to attribute actions to the app itself. For more information about user and installation access tokens, "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)."

### Installation access tokens{% ifversion fpt or ghec %} on {% data variables.product.prodname_dotcom_the_website %}{% endif %}

{% data variables.product.prodname_github_apps %} authenticating with an installation access token use the installation's minimum rate limit of 5,000 requests per hour. If an application is installed on an organization with more than 20 users, the application receives another 50 requests per hour for each user. Installations that have more than 20 repositories receive another 50 requests per hour for each repository. The maximum rate limit for an installation is 12,500 requests per hour.

{% ifversion fpt or ghec %}

### Installation access tokens on {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_github_apps %} that are installed on an organization within an enterprise on {% data variables.location.product_location %} are subject to a limit of 15,000 requests per hour per organization that has installed the app.

{% endif %}

### User access tokens{% ifversion fpt or ghec %} on {% data variables.product.prodname_dotcom_the_website %}{% endif %}

{% ifversion ghes %}By default, user access token{% else %}User access token{% endif %} requests are limited to {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} requests per hour and per authenticated user.

{% ifversion fpt or ghec %}

### User access tokens on {% data variables.product.prodname_ghe_cloud %}

User access token requests are subject to a higher limit of 15,000 requests per hour and per authenticated user when the request is from a {% data variables.product.prodname_github_app %} that is owned by a {% data variables.product.prodname_ghe_cloud %} organization.

{% endif %}

## Further reading

- "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#rate-limiting)" in the REST API documentation
- "[AUTOTITLE](/graphql/overview/resource-limitations)" in the GraphQL API documentation
