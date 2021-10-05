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
topics:
  - GitHub Apps
shortTitle: Limites de taxa
---

## Solicitações de servidor para servidor

{% ifversion fpt %}

Different server-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account.

### Limites de taxa normais de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion fpt %}

### Limites de taxa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by a {% data variables.product.prodname_ghe_cloud %} account and make server-to-server requests have a rate limit of 15,000 requests per hour.

{% endif %}

## Solicitações de usuário para servidor

{% data variables.product.prodname_github_apps %} can also act [on behalf of a user](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), making user-to-server requests.

{% ifversion fpt %}

Different user-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account and the authenticated user also belongs to the same {% data variables.product.prodname_ghe_cloud %} account.

### Limites de taxa normais de usuário para servidor

{% endif %}

As solicitações usuário para servidor são limitadas a 5.000 solicitações por hora e por usuário autenticado. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário e solicitações autenticadas com o usuário {% ifversion ghae %} token{% else %} usuário e senha{% endif %} compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% ifversion fpt %}

### Limites de taxa de usuário para servidor de {% data variables.product.prodname_ghe_cloud %}

Quando um usuário pertence a uma conta de {% data variables.product.prodname_ghe_cloud %}, as solicitações de usuário para servidor para recursos pertencentes à mesma conta de {% data variables.product.prodname_ghe_cloud %} são limitadas em 15.000 solicitações por hora e por usuário autenticado. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário e solicitações de {% data variables.product.prodname_ghe_cloud %} autenticadas com o usuário e senha desse usuário compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% endif %}

Para obter informações mais detalhadas sobre os limites de taxa, consulte "[Limite de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting)" para API REST e "[Limitações de recursos](/graphql/overview/resource-limitations)" para API do GraphQL.
