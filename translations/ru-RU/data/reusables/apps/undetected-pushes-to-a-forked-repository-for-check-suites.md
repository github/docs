---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881863"
---
{% note %}

**Примечание.** API проверки ищет push-уведомления только в том репозитории, где был создан набор проверок или проверка выполнения. Push-уведомления для ветви в разветвленном репозитории не обнаруживаются и возвращают пустой массив `pull_requests` и значение `null` для `head_branch`.

{% endnote %}
