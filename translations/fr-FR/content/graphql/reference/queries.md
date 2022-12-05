---
title: Requêtes
miniTocMaxHeadingLevel: 3
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: d5c31e8e00788d2e75f27b0bb161249f01fcfb1d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108445'
---
## À propos des requêtes

Chaque schéma GraphQL possède un type racine pour les requêtes et les mutations. Le [type de requête](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) définit les opérations GraphQL qui récupèrent les données à partir du serveur.

Pour plus d’informations, consultez « [À propos des requêtes](/graphql/guides/forming-calls-with-graphql#about-queries) ».

{% note %}

**Remarque :** pour les requêtes {% data variables.product.prodname_github_app %} [utilisateur à serveur](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests), vous devez utiliser des requêtes distinctes pour les problèmes et les demandes de tirage. Par exemple, utilisez les filtres `is:issue` ou `is:pull-request` et leurs équivalents. L’utilisation de la connexion `search` pour renvoyer une combinaison de problèmes et de demandes de tirage au sein d’une même requête se traduit par un ensemble vide de nœuds.

{% endnote %}

<!-- Content after this section is automatically generated -->
