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

## Sobre os limites de taxa para os aplicativos

Os limites de taxa para {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} dependem do plano para a organização onde você instalar o aplicativo. Para obter mais informações, consulte "[Produtos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" e "[Tipos de contas de {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)".

{% endif %}

## Solicitações de servidor para servidor

{% ifversion ghec or fpt %}

### Limites de taxa padrão de servidor para servidor para {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% data variables.product.prodname_github_apps %} que faz os pedidos do servidor para servidor usa o limite mínimo da taxa de instalação de 5.000 solicitações por hora. Se um aplicativo estiver instalado em uma organização com mais de 20 usuários, ele receberá outras 50 solicitações por hora para cada usuário. As instalações com mais de 20 repositórios recebem outras 50 solicitações por hora para cada repositório. O limite de taxa máximo para uma instalação é de 12.500 solicitações por hora.

{% ifversion fpt or ghec %}

### Limites de taxa de servidor para servidor para {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_github_apps %} que estão instalados em uma organização ou um repositório dentro de uma empresa no {% data variables.product.product_location %} estão sujeitos a um limite de 15.000 solicitações por hora.

{% endif %}

## Solicitações de usuário para servidor

{% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} também podem agir em nome de um usuário, fazendo solicitações de usuário para servidor depois que o usuário autorizar o aplicativo. Para obter mais informações, consulte "[Autorizando {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)" e "[Autorizando {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".

As solicitações de usuário para servidor de {% data variables.product.prodname_oauth_apps %} são autenticadas com um token OAuth. As solicitações de usuário para servidor de {% data variables.product.prodname_github_apps %} são autenticadas com um token OAuth ou um token de acesso do usuário expirado. Para obter mais informações, consulte "[Identificando e autorizando usuários para {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)" e "[Autorizando {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps)".

{% ifversion fpt or ghec %}

### Limites de taxa padrão de usuário para servidor para {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

Os limites de taxa para as solicitações de servidor para servidor feitas por {% data variables.product.prodname_github_apps %} dependem de onde o aplicativo está instalado. Se o aplicativo estiver instalado em organizações ou repositórios pertencentes a uma empresa em {% data variables.product.product_location %}, a taxa é mais alta do que para instalações fora de uma empresa.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### Limites de taxa padrão de usuário para servidor para {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Leia mais

- "[Limite de taxa](/rest/overview/resources-in-the-rest-api#rate-limiting)" na documentação da API REST
- "[Limitações de recursos](/graphql/overview/resource-limitations)" na documentação da API do GraphQL
