---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086191"
---
Clé | Type | Description
----|------|-------------
`action` |`string` | Action qui a été effectuée. Peut être `created`, `closed`, `opened` (un jalon fermé est rouvert), `edited` ou `deleted`.
`milestone`  |`object` | Jalon proprement dit.
`changes`|`object`| Modifications apportées au jalon si l’action était `edited`.
`changes[description][from]`|`string` | Version précédente de la description si l’action était `edited`.
`changes[due_on][from]`|`string` | Version précédente de la date d'échéance si l’action était `edited`.
`changes[title][from]`|`string` | Version précédente du titre si l’action était `edited`.
