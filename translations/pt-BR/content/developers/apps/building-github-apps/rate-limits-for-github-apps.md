---
title: Limites de taxa para aplicativos do GitHub
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits/
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps/
  - /apps/building-github-apps/rate-limits-for-github-apps/
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

## Solicitações de servidor para servidor

{% ifversion ghec %}

The rate limits for server-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### Limites de taxa normais de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion ghec %}

### Limites de taxa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by an enterprise on {% data variables.product.product_location %} have a rate limit of 15,000 requests per hour for server-to-server requests.

{% endif %}

## Solicitações de usuário para servidor

{% data variables.product.prodname_github_apps %} também pode atuar [em nome de um usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), fazendo solicitações do usuário para servidor.

{% ifversion ghec %}

The rate limits for user-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### Limites de taxa normais de usuário para servidor

{% endif %}

User-to-server requests are rate limited at {% ifversion ghae %}15,000{% else %}5,000{% endif %} requests per hour and per authenticated user. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário e solicitações autenticadas com o usuário {% ifversion ghae %} token{% else %} usuário e senha{% endif %} compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% ifversion ghec %}

### Limites de taxa de usuário para servidor de {% data variables.product.prodname_ghe_cloud %}

When a user belongs to an enterprise on {% data variables.product.product_location %}, user-to-server requests to resources owned by the same enterprise are rate limited at 15,000 requests per hour and per authenticated user. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário, e pedidos autenticados com o nome de usuário e senha compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% endif %}

Para obter informações mais detalhadas sobre os limites de taxa, consulte "[Limite de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting)" para API REST e "[Limitações de recursos]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" para API do GraphQL.
