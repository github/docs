---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008191"
---
`number`|`integer` | Die Pull Request-Nummer.
`changes`|`object` | Die Änderungen am Kommentar, wenn die Aktion `edited` war.
`changes[title][from]`|`string` | Die vorherige Version des Titels, wenn die Aktion `edited` war.
`changes[body][from]`|`string` | Die vorherige Version des Texts, wenn die Aktion `edited` war.
`pull_request`|`object` | Der [Pull Request](/rest/reference/pulls) selbst.{% ifversion fpt or ghec %} `reason`|`string` | Der Grund, aus dem der Pull Request aus einer Mergewarteschlange entfernt wurde, wenn die Aktion `dequeued` war.{% endif %}
