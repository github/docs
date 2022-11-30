---
ms.openlocfilehash: 6b8d3bb77c6a40a43ab22ffd0e60e61cd049fa61
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879027"
---
Schlüssel | type | BESCHREIBUNG
----|------|------------
`action` | `string` | Die durchgeführte Aktion. Kann eine der folgenden Aktionen sein:<ul><li>`submitted`: Ein Pull Request-Review wird in einen nicht ausstehenden Zustand übermittelt.</li><li>`edited`: Der Text eines Reviews wurde bearbeitet.</li><li>`dismissed`: Ein Review wurde verworfen.</li></ul>
`pull_request` | `object` | Der [Pull Request](/rest/reference/pulls), auf den sich das Review bezieht.
`review` | `object` | Das betroffene Review.
`changes[body][from]`|`string` | Die vorherige Version des Texts, wenn die Aktion `edited` war.
