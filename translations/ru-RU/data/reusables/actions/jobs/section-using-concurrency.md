---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089477"
---
Используйте `concurrency`, чтобы одновременно могли выполняться только одно задание или один процесс с использованием той же группы параллелизма. Группа параллелизма может представлять собой любую строку или выражение. Выражение может использовать только [ контекст `github`](/actions/learn-github-actions/contexts#github-context). Дополнительные сведения о выражениях см. в разделе [Выражения](/actions/learn-github-actions/expressions).

Также можно задать `concurrency` на уровне задания. Дополнительные сведения см. на веб-сайте [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
