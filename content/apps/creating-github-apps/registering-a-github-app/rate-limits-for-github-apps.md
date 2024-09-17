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
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Rate limits
---

{% ifversion ghes %}

API rate limits are disabled by default for {% data variables.product.product_name %}. Contact your site administrator to confirm the rate limits for your instance.

If you are a site administrator, you can set rate limits for your instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-user-applications-for-your-enterprise/configuring-rate-limits)."

If you are developing an app for users or organizations outside of your instance, the standard {% data variables.product.prodname_dotcom_the_website %} rate limits apply. For more information, see "[AUTOTITLE](/free-pro-team@latest/rest/overview/rate-limits-for-the-rest-api)" and "[AUTOTITLE](/free-pro-team@latest/graphql/overview/resource-limitations)" in the {% data variables.product.prodname_free_user %} documentation.

{% else %}

{% data variables.product.company_short %} sets a limit on the number of requests a {% data variables.product.prodname_github_app %} can make to the REST API within a specific time period. It also sets a limit on the point value of queries that a {% data variables.product.prodname_github_app %} can make to the GraphQL API within a specific time period. In addition to these primary rate limits, {% data variables.product.company_short %} may also apply secondary rate limits. These limits help to prevent abuse and denial-of-service attacks, and ensure that the system remains available for all users.

The rate limit for {% data variables.product.prodname_github_app %}s depends on whether the app authenticates with a user access token or an installation access token. It also depends on where the app is owned by or installed on a {% data variables.product.prodname_ghe_cloud %} organization.

For more information, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)" and "[AUTOTITLE](/graphql/overview/resource-limitations)."

{% endif %}
