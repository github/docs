---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084915"
---
使用 `concurrency` 以确保只有使用相同并发组的单一作业或工作流才会同时运行。 并发组可以是任何字符串或表达式。 表达式只能使用 [`github` 上下文](/actions/learn-github-actions/contexts#github-context)。 有关表达式的详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

你还可以在作业级别指定 `concurrency`。 有关详细信息，请参阅 [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency)。

{% data reusables.actions.actions-group-concurrency %}
