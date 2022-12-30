---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008188"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die durchgeführte Aktion. Kann eine der folgenden Aktionen sein:<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: Wenn die Aktion `closed` und der `merged`-Schlüssel `false` lautet, wurde der Pull Request mit ungemergeten Commits geschlossen. Wenn die Aktion `closed` und der `merged`-Schlüssel `true` lautet, wurde der Pull Request gemergt.</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued`: Wird ausgelöst, wenn ein Pull Request aus einer Mergewarteschlange entfernt wird.</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued`: Wird ausgelöst, wenn ein Pull Request einer Mergewarteschlange hinzugefügt wird.</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: Wird ausgelöst, wenn der Head-Branch eines Pull Requests aktualisiert wird. Wenn beispielsweise der Head-Branch aus dem Basisbranch aktualisiert wird, wenn neue Commits an den Head-Branch gepusht werden oder der Basisbranch geändert wird.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
