---
title: Rate limits for OAuth Apps
intro: '{% data reusables.shortdesc.rate_limits_apps %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Rate limits
---

## About rate limits for {% data variables.product.prodname_oauth_apps %}

{% ifversion ghec or fpt or ghae %}

{% data variables.product.company_short %} sets a limit on the number of requests an {% data variables.product.prodname_oauth_app %} can send to the server within a specific time period. This limit helps to prevent abuse and denial-of-service attacks, and ensures that the system remains available for all users.

{% endif %}

{% ifversion ghec or fpt %}

{% data variables.product.company_short %} may apply additional secondary rate limits to some actions, to ensure API availability. You can avoid secondary rate limits by following best practices and staying within the rate limit guidelines listed below. For more information about secondary rate limits, see "[AUTOTITLE](/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" and "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#secondary-rate-limits)."

{% elsif ghes %}

{% note %}

Rate limits are disabled by default for {% data variables.product.product_name %}. Contact your site administrator to confirm the rate limits for your instance.

{% endnote %}

When rate limits are enabled for your {% data variables.product.product_name %} instance, there is a limit on the number of requests an {% data variables.product.prodname_oauth_app %} can send to the server within a specific time period. This limit helps to ensure the system remains available for all users.

{% endif %}

{% data variables.product.prodname_oauth_apps %} act on behalf of a user, by making requests with a user access token after the user authorizes the app. User access token requests from {% data variables.product.prodname_oauth_apps %} are authenticated with an OAuth token. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)."

## Determining rate limits for an {% data variables.product.prodname_oauth_app %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghes %}By default, {% data variables.product.prodname_oauth_apps %}{% else %}{% data variables.product.prodname_oauth_apps %}{% endif %} are limited to {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} requests per hour and per authenticated user. All requests from {% data variables.product.prodname_oauth_apps %} that are authorized by a user or a {% data variables.product.pat_generic %} owned by the user, and requests authenticated with any of the user's authentication credentials, share the same quota of {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} requests per hour for that user.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_oauth_apps %} are subject to a higher limit of 15,000 requests per hour and per authenticated user when both of the following are true:

- The request is from an {% data variables.product.prodname_oauth_app %} that's owned or approved by a {% data variables.product.prodname_ghe_cloud %} organization.
- The authenticated user is a member of the {% data variables.product.prodname_ghe_cloud %} organization.

For more information about rate limits, see "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#rate-limiting)" and "[AUTOTITLE](/rest/rate-limit#understanding-your-rate-limit-status)" in the REST API documentation.

{% endif %}

## Further reading

- "[AUTOTITLE](/graphql/overview/resource-limitations)" in the GraphQL API documentation
