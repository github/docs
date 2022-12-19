---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086192"
---
Clé | Type | Description
----|------|-------------
`action` |`string` | Action qui a été effectuée. Peut être `added` ou `removed`.
`scope`  |`string` | Étendue associée à l’appartenance. Actuellement, il peut uniquement s’agir de `team`.
`member` |`object` | [Utilisateur](/rest/reference/users) qui a été ajouté ou supprimé.
`team`   |`object` | [Équipe](/rest/reference/teams) associée à l’appartenance.
