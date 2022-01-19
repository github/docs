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

## Solicitações de servidor para servidor

{% ifversion ghec %}

Os limites de taxa para as solicitações de servidor para servidor feitas por {% data variables.product.prodname_github_apps %} dependem de onde o aplicativo está instalado. Se o aplicativo estiver instalado em organizações ou repositórios pertencentes a uma empresa em {% data variables.product.product_location %}, a taxa é mais alta do que para instalações fora de uma empresa.

### Limites de taxa normais de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion ghec %}

### Limites de taxa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_github_apps %} que são instalados em uma organização ou repositório pertencente a uma empresa em {% data variables.product.product_location %} têm um limite de taxa de 15.000 solicitações por hora para solicitações de servidor para servidor.

{% endif %}

## Solicitações de usuário para servidor

{% data variables.product.prodname_github_apps %} também pode atuar [em nome de um usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), fazendo solicitações do usuário para servidor.

{% ifversion ghec %}

Os limites de taxa para as solicitações de servidor para servidor feitas por {% data variables.product.prodname_github_apps %} dependem de onde o aplicativo está instalado. Se o aplicativo estiver instalado em organizações ou repositórios pertencentes a uma empresa em {% data variables.product.product_location %}, a taxa é mais alta do que para instalações fora de uma empresa.

### Limites de taxa normais de usuário para servidor

{% endif %}

As solicitações de usuário para servidor têm um limite de {% ifversion ghae %}15.000{% else %}5.000{% endif %} solicitações por hora e por usuário autenticado. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário e solicitações autenticadas com o usuário {% ifversion ghae %} token{% else %} usuário e senha{% endif %} compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% ifversion ghec %}

### Limites de taxa de usuário para servidor de {% data variables.product.prodname_ghe_cloud %}

Quando um usuário pertence a uma empresa em {% data variables.product.product_location %}, as solicitações de usuário para servidor para recursos pertencentes à mesma empresa têm uma taxa limite de 15.000 solicitações por hora e por usuário autenticado. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário, e pedidos autenticados com o nome de usuário e senha compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% endif %}

Para obter informações mais detalhadas sobre os limites de taxa, consulte "[Limite de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting)" para API REST e "[Limitações de recursos]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" para API do GraphQL.
