---
title: Rate limits for OAuth apps
intro: '{% data reusables.shortdesc.rate_limits_apps %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth apps
shortTitle: Rate limits
---

{% note %}

**Note**: Consider building a {% data variables.product.prodname_github_app %} instead of an {% data variables.product.prodname_oauth_app %}. The rate limit for {% data variables.product.prodname_github_apps %} using an installation access token scales with the number of repositories and number of organization users. Conversely, {% data variables.product.prodname_oauth_apps %} have lower rate limits and do not scale. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

{% endnote %}

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

{% data variables.product.prodname_oauth_apps %} can encounter rate limits during the following two actions:

1. When signing in users.
1. When making API calls.

{% data variables.product.prodname_oauth_apps %} should always cache their tokens, and only rarely need to sign in a user. Repeatedly signing in a user can be a sign of a bug, most frequently seen as an infinite loop between the app and {% data variables.product.company_short %}. If an app signs the user in ten times within one hour, the next sign in within the same hour will require re-authorization of the application. This ensures the user is aware that the app is minting so many tokens, and provides a break in what may be an infinite loop otherwise. This ten _sign in_ rate limit is distinct from the ten _token_ limit also enforced for {% data variables.product.prodname_oauth_apps %}. For information about the ten token limit, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#creating-multiple-tokens-for-oauth-apps)."

{% ifversion ghes %}By default, {% data variables.product.prodname_oauth_apps %}{% else %}{% data variables.product.prodname_oauth_apps %}{% endif %} are also limited to {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} requests per hour and per authenticated user. All requests from {% data variables.product.prodname_oauth_apps %} that are authorized by a user or a {% data variables.product.pat_generic %} owned by the user, and requests authenticated with any of the user's authentication credentials, share the same quota of {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} requests per hour for that user.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_oauth_apps %} are subject to a higher limit of 15,000 requests per hour and per authenticated user when both of the following are true:

- The request is from an {% data variables.product.prodname_oauth_app %} that's owned or approved by a {% data variables.product.prodname_ghe_cloud %} organization.
- The authenticated user is a member of the {% data variables.product.prodname_ghe_cloud %} organization.

For more information about rate limits, see "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#rate-limiting)" and "[AUTOTITLE](/rest/rate-limit#understanding-your-rate-limit-status)" in the REST API documentation.

{% endif %}

## Further reading

- "[AUTOTITLE](/graphql/overview/resource-limitations)" in the GraphQL API documentation
