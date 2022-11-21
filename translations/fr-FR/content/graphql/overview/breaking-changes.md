---
title: Changements cassants
intro: 'Découvrez les changements cassants récents et à venir qui concernent l’API GraphQL {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/breaking_changes
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: c76520b1f9dc806659373771b42501e072319937
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108607'
---
## À propos des changements cassants

Les changements cassants sont tous les changements qui peuvent nécessiter une action de la part de nos intégrateurs. Nous répartissons ces changements en deux catégories :

- **Cassants :** changements qui interrompent les requêtes existantes à l’API GraphQL. Par exemple, la suppression d’un champ constitue un changement cassant.
- **Dangereux :** changements qui n’interrompent pas les requêtes existantes, mais qui peuvent affecter le comportement d’exécution des clients. L’ajout d’une valeur d’enum est un exemple de changement dangereux.

Nous nous efforçons de fournir des API stables pour nos intégrateurs. Lorsqu’une nouvelle fonctionnalité est toujours en cours d’évolution, nous la publions derrière une [préversion de schéma](/graphql/overview/schema-previews).

Nous annoncerons les changements cassants à venir au moins trois mois avant de modifier le schéma GraphQL, afin de donner aux intégrateurs le temps d’apporter les ajustements nécessaires. Les changements entrent en vigueur le premier jour d’un trimestre (1er janvier, 1er avril, 1er juillet ou 1er octobre). Par exemple, si nous annonçons une modification le 15 janvier, elle sera apportée le 1er juillet.
