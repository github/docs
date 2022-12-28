---
title: Points de terminaison REST pour l’API GitHub Marketplace
intro: 'Pour faciliter la gestion de votre application sur {% data variables.product.prodname_marketplace %}, utilisez ces points de terminaison d’API {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/github-marketplace-api-endpoints
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /developers/github-marketplace/rest-endpoints-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: REST API
ms.openlocfilehash: aac7df5600863521c482b8a13c31abf8fd103ecf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145102842'
---
Voici quelques points de terminaison utiles disponibles pour les listings Marketplace :

* [Lister les plans](/rest/reference/apps#list-plans)
* [Lister les comptes d’un plan](/rest/reference/apps#list-accounts-for-a-plan)
* [Obtenir un plan d’abonnement pour un compte](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [Lister les abonnements de l’utilisateur authentifié](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

Pour plus d’informations sur l’authentification en cas d’utilisation de l’API {% data variables.product.prodname_marketplace %}, consultez ces pages :

* [Options d’autorisation pour les applications OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [Options d’authentification pour les applications GitHub](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**Remarque :** Les [limites de débit de l’API REST](/rest/overview/resources-in-the-rest-api#rate-limiting) s’appliquent à tous les points de terminaison de l’API {% data variables.product.prodname_marketplace %}.

{% endnote %}
