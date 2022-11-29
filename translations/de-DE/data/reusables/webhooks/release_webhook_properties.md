---
ms.openlocfilehash: e25410532059b625a9d72984993f3d6d2fcec565
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069174"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die durchgeführte Aktion. Kann eine der folgenden Aktionen sein:<ul><li>`published`: ein Release, eine Vorabversion oder ein Entwurf eines Release wird veröffentlicht</li><li>`unpublished`: ein Release oder eine Vorabversion wird gelöscht</li><li>`created`: ein Entwurf wird gespeichert, oder ein Release oder eine Vorabversion wird veröffentlicht, ohne zuvor als Entwurf gespeichert zu werden</li><li>`edited`: ein Release, eine Vorabversion oder ein Entwurf eines Release wird bearbeitet</li><li>`deleted`: ein Release, eine Vorabversion oder ein Entwurf eines Release wird gelöscht</li><li>`prereleased`: eine Vorabversion wird erstellt</li><li>`released`: ein Release wird veröffentlicht, oder eine Vorabversion wird in ein Release geändert</li>
