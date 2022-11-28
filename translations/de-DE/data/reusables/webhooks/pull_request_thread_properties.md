---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883772"
---
Schlüssel | type | BESCHREIBUNG
----|------|------------
`action` | `string` | Die durchgeführte Aktion. Kann eine der folgenden Aktionen sein:<ul><li>`resolved`: Ein Kommentarthread zu einem Pull Request wurde als gelöst markiert.</li><li>`unresolved`: Ein zuvor gelöster Kommentarthread zu einem Pull Request wurde als nicht gelöst markiert.</li></ul>
`pull_request` | `object` | Der [Pull Request](/rest/reference/pulls), zu dem der Thread gehört
`thread` | `object` | Der betroffene Thread
