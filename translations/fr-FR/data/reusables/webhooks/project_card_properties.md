---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145086182"
---
Clé | Type | Description
----|------|-------------
`action`|`string` | Action effectuée sur la carte de projet. Peut être `created`, `edited`, `moved`, `converted` ou `deleted`.
`changes`|`object` | Changements de la carte de projet si l’action est `edited` ou `converted`.
`changes[note][from]` |`string` | Version précédente de la note si l’action est `edited` ou `converted`.
`after_id`|`integer` | ID de la carte que cette carte suit maintenant si l’action est « moved ». Est `null` s’il s’agit de la première carte d’une colonne.
`project_card`|`object` | La [carte de projet](/rest/reference/projects#cards) elle-même.
