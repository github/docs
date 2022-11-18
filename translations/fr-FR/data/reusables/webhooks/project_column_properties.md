---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145086181"
---
Clé | Type | Description
----|------|-------------
`action`|`string` | Action qui a été effectuée sur la colonne de projet. Peut être `created`, `edited`, `moved` ou `deleted`.
`changes`|`object` | Changements de la colonne de projet si l’action est `edited`.
`changes[name][from]` |`string` | Version précédente du nom si l’action est `edited`.
`after_id`|`integer` | ID de la colonne que cette colonne suit maintenant si l’action est « moved ». Est `null` s’il s’agit de la première colonne d’un projet.
`project_column`|`object` | [Colonne de projet](/rest/reference/projects#columns) elle-même.
