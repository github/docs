---
title: Limites de taxa para aplicativos do GitHub
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
shortTitle: Limites de taxa
---

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## About rate limits for apps

Rate limits for {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} depend on the plan for the organization where you install the application. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products)" and "[Types of {% data variables.product.company_short %} accounts](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)."

{% endif %}

## Solicitações de servidor para servidor

{% ifversion ghec or fpt %}

### Default server-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% data variables.product.prodname_github_apps %} que faz os pedidos do servidor para servidor usa o limite mínimo da taxa de instalação de 5.000 solicitações por hora. If an application is installed on an organization with more than 20 users, the application receives another 50 requests per hour for each user. As instalações com mais de 20 repositórios recebem outras 50 solicitações por hora para cada repositório. O limite de taxa máximo para uma instalação é de 12.500 solicitações por hora.

{% ifversion fpt or ghec %}

### Server-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_github_apps %} that are installed on an organization or a repository within an enterprise on {% data variables.product.product_location %} are subject to a limit of 15,000 requests per hour.

{% endif %}

## Solicitações de usuário para servidor

{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} can also act on behalf of a user, making user-to-server requests after the user authorizes the app. For more information, see "[Authorizing {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)."

User-to-server requests from {% data variables.product.prodname_oauth_apps %} are authenticated with an OAuth token. User-to-server requests from {% data variables.product.prodname_github_apps %} are authenticated with either an OAuth token or an expiring user access token. For more information, see "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps)."

{% ifversion fpt or ghec %}

### Default user-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

Os limites de taxa para as solicitações de servidor para servidor feitas por {% data variables.product.prodname_github_apps %} dependem de onde o aplicativo está instalado. Se o aplicativo estiver instalado em organizações ou repositórios pertencentes a uma empresa em {% data variables.product.product_location %}, a taxa é mais alta do que para instalações fora de uma empresa.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### User-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Leia mais

- "[Rate limiting](/rest/overview/resources-in-the-rest-api#rate-limiting)" in the REST API documentation
- "[Resource limitations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" in the GraphQL API documentation
