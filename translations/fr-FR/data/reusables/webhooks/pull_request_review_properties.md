---
ms.openlocfilehash: 6b8d3bb77c6a40a43ab22ffd0e60e61cd049fa61
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877128"
---
Clé | Type | Description
----|------|------------
`action` | `string` | Action qui a été effectuée. Peut être :<ul><li>`submitted` - Une révision de demande de tirage est envoyée dans un état autre que « En attente ».</li><li>`edited` - Le corps d’une révision a été modifié.</li><li>`dismissed` - Une révision a été ignorée.</li></ul>
`pull_request` | `object` | [Demande de tirage](/rest/reference/pulls) à laquelle appartient la révision.
`review` | `object` | Révision qui a été affectée.
`changes[body][from]`|`string` | Version précédente du corps si l’action était `edited`.
