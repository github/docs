---
title: Limites de débit pour les applications GitHub
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
shortTitle: Rate limits
ms.openlocfilehash: 46e1fddabff7d0e9c8d3d21c6a0d18668083ae63
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710354'
---
{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## À propos des limites de débit des applications

Les limites de débit des {% data variables.product.prodname_github_apps %} et des {% data variables.product.prodname_oauth_apps %} dépendent du plan de l’organisation où vous installez l’application. Pour plus d’informations, consultez « [Produits de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) » et « [Types de compte {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts#organization-accounts) ».

{% endif %}

## Requêtes serveur à serveur

{% ifversion ghec or fpt %}

### Limites de débit serveur à serveur par défaut pour {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

Les {% data variables.product.prodname_github_apps %} qui effectuent des requêtes serveur à serveur utilisent la limite de débit minimale de l’installation, soit 5 000 requêtes par heure. Si une application est installée dans une organisation comptant plus de 20 utilisateurs, l’application reçoit 50 requêtes supplémentaires par heure pour chaque utilisateur. Les installations qui ont plus de 20 dépôts reçoivent 50 requêtes supplémentaires par heure pour chaque dépôt. La limite de débit maximale d’une installation est de 12 500 requêtes par heure.

{% ifversion fpt or ghec %}

### Limites de débit serveur à serveur pour {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

Les {% data variables.product.prodname_github_apps %} installées sur une organisation au sein d’une entreprise sur {% data variables.product.product_location %} sont limitées à 15 000 requêtes par heure et par organisation qui a installé l’application.

{% endif %}

## Requêtes utilisateur à serveur

Les {% data variables.product.prodname_github_apps %} et les {% data variables.product.prodname_oauth_apps %} peuvent également agir au nom d’un utilisateur, en effectuant des requêtes utilisateur à serveur, une fois que l’utilisateur a autorisé l’application. Pour plus d’informations, consultez « [Autorisation des {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps) » et « [Autorisation des {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps) ».

Les requêtes utilisateur à serveur des {% data variables.product.prodname_oauth_apps %} sont authentifiées à l’aide d’un jeton OAuth. Les requêtes utilisateur à serveur des {% data variables.product.prodname_github_apps %} sont authentifiées à l’aide d’un jeton OAuth ou d’un jeton d’accès utilisateur ayant un délai d’expiration. Pour plus d’informations, consultez « [ Identification et autorisation des utilisateurs pour les {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps) » et « [Autorisation des {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps) ».

{% ifversion fpt or ghec %}

### Limites de débit utilisateur à serveur par défaut pour {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

Les limites de débit des requêtes utilisateur à serveur effectuées par les {% data variables.product.prodname_github_apps %} dépendent de l’emplacement d’installation de l’application. Si l’application est installée dans des organisations ou des dépôts appartenant à une entreprise sur {% data variables.product.product_location %}, le taux est plus élevé que pour les installations situées hors entreprise.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### Limites de débit utilisateur à serveur pour {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Pour aller plus loin

- « [Limitation du débit](/rest/overview/resources-in-the-rest-api#rate-limiting) » dans la documentation de l’API REST
- « [Limitations des ressources](/graphql/overview/resource-limitations) » dans la documentation de l’API GraphQL
