---
ms.openlocfilehash: e0ae7814db2deb2c1e666172e71566cc6d28ca1b
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "147888000"
---
{% note %}

注意：在作业级别指定并发时，不能保证作业的顺序或在 5 分钟内运行该队列。

{% endnote %}

可以使用 `jobs.<job_id>.concurrency` 确保只有使用相同并发组的单一作业或工作流才会同时运行。 并发组可以是任何字符串或表达式。 表达式可以使用除 `secrets` 上下文以外的任何上下文。 有关表达式的更多信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

还可以在工作流级别指定 `concurrency`。 有关详细信息，请参阅 [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency)。

{% data reusables.actions.actions-group-concurrency %}
