---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008727"
---
Ключ | Тип | Описание
----|------|-------------
`action`|`string` | Действие, которое было выполнено. Возможные значения:<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: если действие имеет значение `closed`, а ключ `merged` — `false`, запрос на включение внесенных изменений был закрыт с фиксациями, для которых слияние не выполнялось. Если действие имеет значение `closed`, а ключ `merged` — `true`, было выполнено слияние запроса на включение внесенных изменений.</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued`: активируется при удалении запроса на вытягивание из очереди слияния.</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued`: активируется при добавлении запроса на вытягивание в очередь слияния.</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: активируется при обновлении головной ветви запроса на включение внесенных изменений. Например, при обновлении головной ветви из базовой ветви, при отправке новых фиксаций в головную ветвь или при изменении базовой ветви.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
