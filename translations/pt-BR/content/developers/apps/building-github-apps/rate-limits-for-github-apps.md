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
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

### Solicitações de servidor para servidor

{% if currentVersion == "free-pro-team@latest" %}

Aplicam-se diferentes limites de solicitação de servidor para servidor aos {% data variables.product.prodname_github_app %}s se o aplicativo estiver instalado em organizações ou repositórios pertencentes a uma conta do {% data variables.product.prodname_ghe_cloud %}.

#### Limites de taxa normais de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% if currentVersion == "free-pro-team@latest" %}

#### Limites de taxa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

Os {% data variables.product.prodname_github_app %}s que estão instalados em uma organização ou repositório pertencente a uma conta do {% data variables.product.prodname_ghe_cloud %} e fazem requisições do servidor para servidor têm um limite de taxa de 15.000 solicitações por hora.

{% endif %}

### Solicitações de usuário para servidor

{% data variables.product.prodname_github_app %}s também podem agir [em nome de um usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), fazendo solicitações de usuário para servidor.

{% if currentVersion == "free-pro-team@latest" %}

Aplicam-se diferentes limites de taxa de solicitação de usuário para servidor aos {% data variables.product.prodname_github_app %}s se o aplicativo estiver instalado em organizações ou repositórios pertencentes a uma conta de {% data variables.product.prodname_ghe_cloud %} e o usuário autenticado também pertencer à mesma conta de {% data variables.product.prodname_ghe_cloud %} .

#### Limites de taxa normais de usuário para servidor

{% endif %}

As solicitações usuário para servidor são limitadas a 5.000 solicitações por hora e por usuário autenticado. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário e solicitações autenticadas com o usuário {% if currentVersion == "github-ae@latest" %} token{% else %} usuário e senha{% endif %} compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% if currentVersion == "free-pro-team@latest" %}

#### Limites de taxa de usuário para servidor de {% data variables.product.prodname_ghe_cloud %}

Quando um usuário pertence a uma conta de {% data variables.product.prodname_ghe_cloud %}, as solicitações de usuário para servidor para recursos pertencentes à mesma conta de {% data variables.product.prodname_ghe_cloud %} são limitadas em 15.000 solicitações por hora e por usuário autenticado. Todos os aplicativos OAuth autorizados por esse usuário, tokens de acesso pessoal pertencentes a esse usuário e solicitações de {% data variables.product.prodname_ghe_cloud %} autenticadas com o usuário e senha desse usuário compartilham a mesma cota de 5.000 solicitações por hora para esse usuário.

{% endif %}

Para obter informações mais detalhadas sobre os limites de taxa, consulte "[Limite de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting)" para API REST e "[Limitações de recursos](/graphql/overview/resource-limitations)" para API do GraphQL.
