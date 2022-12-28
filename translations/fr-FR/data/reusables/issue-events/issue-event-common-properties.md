---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147080975"
---
Nom | Type | Description
-----|------|--------------
`id` | `integer` | Identificateur unique de l’événement.
`node_id` | `string` | [ID de nœud global](/graphql/guides/using-global-node-ids) de l’événement.
`url`| `string` | URL de l’API REST pour récupérer (fetch) l’événement.
`actor` | `object`| Personne qui a généré l’événement.
`event` | `string` | Identifie le type réel d’événement qui s’est produit.
`commit_id` | `string` | SHA de la validation qui a référencé ce problème.
`commit_url` | `string` | Lien de l’API REST GitHub vers la validation qui a référencé ce problème.
`created_at` | `string` | Timestamp indiquant quand l’événement s’est produit.
