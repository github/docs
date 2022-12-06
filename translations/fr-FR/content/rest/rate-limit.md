---
title: Limite du taux
intro: 'Avec l’API Limite de débit, vous pouvez vérifier l’état actuel de la limite de débit de différentes API REST.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
ms.openlocfilehash: 282b7e7bbb947256ccad4950b6a17d8874044d8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081047'
---
## À propos de l’API Limite de débit

La documentation générale sur l’API REST décrit les [règles de limite de débit](/rest/overview/resources-in-the-rest-api#rate-limiting). Vous pouvez vérifier l’état actuel de votre limite de débit à tout moment à l’aide de l’API correspondante décrite ci-dessous.

### Compréhension de l’état de votre limite de débit

L’API Recherche a une [limite de débit personnalisée](/rest/reference/search#rate-limit), distincte de la limite de débit régissant le reste de l’API REST. L’API GraphQL a également une [limite de débit personnalisée](/graphql/overview/resource-limitations#rate-limit) distincte et calculée différemment des limites de débit dans l’API REST.

Pour ces raisons, la réponse de l’API Limite de débit classe votre limite de débit. Sous `resources`, vous verrez quatre objets :

* L’objet `core` fournit l’état de votre limite de débit pour toutes les ressources non liées à la recherche dans l’API REST.

* L’objet `search` fournit l’état de votre limite de débit pour [l’API Recherche](/rest/reference/search).

* L’objet `graphql` fournit l’état de votre limite de débit pour l’[API GraphQL](/graphql).

* L’objet `integration_manifest` fournit l’état de votre limite de débit pour le point de terminaison de [conversion du code du manifeste de l’application GitHub](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

Pour plus d’informations sur les en-têtes et les valeurs dans la réponse de limite de débit, consultez « [Ressources dans l’API REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers) ».
