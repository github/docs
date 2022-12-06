---
ms.openlocfilehash: e0ae7814db2deb2c1e666172e71566cc6d28ca1b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093114"
---
{% note %}

**Примечание.** Если параллелизм задается на уровне задания, упорядочение не гарантируется для заданий или запусков, которые отстоят на интервал в пределах 5 минут друг от друга в очереди.

{% endnote %}

Можно использовать `jobs.<job_id>.concurrency`, чтобы одновременно могли выполняться только одно задание или один процесс с использованием той же группы параллелизма. Группа параллелизма может представлять собой любую строку или выражение. Выражение может использовать любой контекст, кроме контекста `secrets`. Дополнительные сведения о выражениях см. в разделе [Выражения](/actions/learn-github-actions/expressions).

Можно также указать `concurrency` на уровне рабочего процесса. Дополнительные сведения см. на веб-сайте [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
