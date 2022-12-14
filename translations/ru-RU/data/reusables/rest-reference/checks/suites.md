---
ms.openlocfilehash: 5c7822b9f2b85140fd63c8c9361721671546663c
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141520025"
---
## <a name="check-suites"></a>Проверить пакеты

{% note %}

  **Примечание.** Приложение GitHub получает только одно событие [`check_suite`](/webhooks/event-payloads/#check_suite) для каждой фиксации SHA, даже если фиксация SHA отправляется сразу в несколько ветвей. Чтобы узнать, когда фиксация SHA отправляется в ветвь, можно подписаться на события ветви [`create`](/webhooks/event-payloads/#create).

{% endnote %}