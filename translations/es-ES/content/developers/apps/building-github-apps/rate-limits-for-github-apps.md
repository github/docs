---
title: Límites de tasa para las GitHub Apps
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
shortTitle: Límites de tasa
---

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## About rate limits for apps

Rate limits for {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} depend on the plan for the organization where you install the application. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products)" and "[Types of {% data variables.product.company_short %} accounts](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)."

{% endif %}

## Solicitudes de servidor a servidor

{% ifversion ghec or fpt %}

### Default server-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

Las {% data variables.product.prodname_github_apps %} que hagan solicitudes de servidor a servidor utilizan el límite de tasa mínimo de la instalación, el cual es de 5,000 solicitudes por hora. If an application is installed on an organization with more than 20 users, the application receives another 50 requests per hour for each user. Las instalaciones que tienen más de 20 repositorios reciben otras 50 solicitudes adicionales por hora para cada repositorio. El límite de tasa máximo para una instalación es de 12,500 solicitudes por hora.

{% ifversion fpt or ghec %}

### Server-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_github_apps %} that are installed on an organization or a repository within an enterprise on {% data variables.product.product_location %} are subject to a limit of 15,000 requests per hour.

{% endif %}

## Solicitudes de usuario a servidor

{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} can also act on behalf of a user, making user-to-server requests after the user authorizes the app. For more information, see "[Authorizing {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)."

User-to-server requests from {% data variables.product.prodname_oauth_apps %} are authenticated with an OAuth token. User-to-server requests from {% data variables.product.prodname_github_apps %} are authenticated with either an OAuth token or an expiring user access token. For more information, see "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps)."

{% ifversion fpt or ghec %}

### Default user-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

Los límites de tasa para las solicitudes de usuario a servidor que hace {% data variables.product.prodname_github_apps %} dependen de donde se instala la app. Si la app está instalada en los repositorios u organizaciones que pertenecen a una empresa en {% data variables.product.product_location %}, entonces la tasa es más alta que para aquellas instalaciones que están fuera de una empresa.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### User-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Leer más

- "[Rate limiting](/rest/overview/resources-in-the-rest-api#rate-limiting)" in the REST API documentation
- "[Resource limitations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" in the GraphQL API documentation
