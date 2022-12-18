---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883771"
---
Clé | Type | Description
----|------|------------
`action` | `string` | Action qui a été effectuée. Peut être :<ul><li>`resolved` - Un fil de commentaires sur une demande de tirage a été marqué comme résolu.</li><li>`unresolved` - Un fil de commentaires précédemment résolu sur une demande de tirage a été marqué comme non résolu.</li></ul>
`pull_request` | `object` | La [demande de tirage](/rest/reference/pulls) à laquelle se rapporte le thread.
`thread` | `object` | Le fil affecté.
