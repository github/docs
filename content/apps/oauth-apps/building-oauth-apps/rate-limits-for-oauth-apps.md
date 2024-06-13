---
title: Rate limits for OAuth apps
intro: '{% data reusables.shortdesc.rate_limits_apps %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - OAuth apps
shortTitle: Rate limits
---

{% note %}

**Note**: Consider building a {% data variables.product.prodname_github_app %} instead of an {% data variables.product.prodname_oauth_app %}. The rate limit for {% data variables.product.prodname_github_apps %} using an installation access token scales with the number of repositories and number of organization users. Conversely, {% data variables.product.prodname_oauth_apps %} have lower rate limits and do not scale. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

{% endnote %}

## About rate limits for {% data variables.product.prodname_oauth_apps %}

{% data variables.product.prodname_oauth_apps %} act on behalf of a user, by making requests with a user access token after the user authorizes the app. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)."

The generation of these user access tokens is subject to a rate limit. Additionally, API requests made with these user access tokens are subject to rate limits.

## Rate limits for signing in users

{% data variables.product.prodname_oauth_apps %} should always cache their tokens, and only rarely need to sign in a user. Repeatedly signing in a user can indicate a bug, most frequently seen as an infinite loop between the app and {% data variables.product.company_short %}. If an app signs the user in ten times within one hour, the next sign in within the same hour will require re-authorization of the application. This ensures the user is aware that the app is minting so many tokens, and provides a break in what may be an infinite loop otherwise. This ten _sign in_ rate limit is distinct from the ten _token_ limit also enforced for {% data variables.product.prodname_oauth_apps %}. For information about the ten token limit, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#creating-multiple-tokens-for-oauth-apps)."

## Rate limits for the API

{% ifversion ghes %}

API rate limits are disabled by default for {% data variables.product.product_name %}. Contact your site administrator to confirm the rate limits for your instance.

If you are a site administrator, you can set rate limits for your instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-user-applications-for-your-enterprise/configuring-rate-limits)."

If you are developing an app for users or organizations outside of your instance, the standard {% data variables.product.prodname_dotcom_the_website %} rate limits apply. For more information, see "[AUTOTITLE](/free-pro-team@latest/rest/overview/rate-limits-for-the-rest-api)" and "[AUTOTITLE](/free-pro-team@latest/graphql/overview/resource-limitations)" in the {% data variables.product.prodname_free_user %} documentation.

{% else %}

{% data variables.product.company_short %} sets a limit on the number of requests a {% data variables.product.prodname_oauth_app %} can make to the REST API within a specific time period. It also sets a limit on the point value of queries that a {% data variables.product.prodname_oauth_app %} can make to the GraphQL API within a specific time period. In addition to these primary rate limits, {% data variables.product.company_short %} may also apply secondary rate limits. These limits help to prevent abuse and denial-of-service attacks, and ensure that the system remains available for all users.

For more information, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)" and "[AUTOTITLE](/graphql/overview/resource-limitations)."

{% endif %}

## Further reading

* "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)"
* "[AUTOTITLE](/graphql/overview/resource-limitations)"
* "[AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/rate-limits-for-github-apps)"
