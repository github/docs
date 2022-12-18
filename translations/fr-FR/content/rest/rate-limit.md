---
title: Limite du taux
intro: Utilisez l’API REST pour vérifier l’état actuel de votre limite de débit.
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
ms.openlocfilehash: a609d339af2201bba5ec12044a8eebe733013cea
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193285'
---
## À propos des limites de débit

Vous pouvez vérifier l’état actuel de votre limite de débit à tout moment. Pour plus d’informations sur les règles des limites de débit, consultez « [Ressources dans l’API REST](/rest/overview/resources-in-the-rest-api#rate-limiting) ». 

L’API REST pour la recherche d’éléments a une limite de débit personnalisée qui est distincte de la limite de débit qui régit les autres points de terminaison d’API REST. Pour plus d’informations, consultez « [Rechercher](/rest/search) ». L’API GraphQL a également une limite de débit personnalisée distincte et calculée différemment des limites de débit dans l’API REST. Pour plus d’informations, consultez « [Limitations des ressources](/graphql/overview/resource-limitations#rate-limit) ». Pour ces raisons, la réponse de l’API catégorise votre limite de débit. Sous `resources`, vous voyez des objets relatifs à différentes catégories :

* L’objet `core` fournit l’état de votre limite de débit pour toutes les ressources non liées à la recherche dans l’API REST.

* L’objet `search` fournit l’état de votre limite de débit pour l’API REST pour la recherche.

* L’objet `graphql` fournit l’état de votre limite de débit pour l’API GraphQL.

* L’objet `integration_manifest` fournit l’état de votre limite de débit pour l’opération `POST /app-manifests/{code}/conversions`. Pour plus d’informations, consultez « [Création d’une application GitHub à partir d’un manifeste](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration) ».

Pour plus d’informations sur les en-têtes et les valeurs dans la réponse de limite de débit, consultez « [Ressources dans l’API REST](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers) ».
