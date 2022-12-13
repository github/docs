---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008732"
---
`number`|`integer` | Номер запроса на вытягивание.
`changes`|`object` | Изменения в комментарии, если выполнялось действие `edited`.
`changes[title][from]`|`string` | Предыдущая версия заголовка, если выполнялось действие `edited`.
`changes[body][from]`|`string` | Предыдущая версия текста, если действие было `edited`.
`pull_request`|`object` | Сам [запрос на вытягивание](/rest/reference/pulls) . {% ifversion fpt or ghec %} `reason`|`string` | Причина удаления запроса на вытягивание из очереди слияния, если действие было `dequeued`.{ % endif %}
