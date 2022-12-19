---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145092083"
---
Utilice `concurrency` para asegurarse de que solo se ejecute al mismo tiempo un trabajo o flujo de trabajo que use el mismo grupo de concurrencia. Un grupo de concurrencia puede ser cualquier secuencia o expresión. La expresión solo puede usar el [contexto `github`](/actions/learn-github-actions/contexts#github-context). Para más información sobre las expresiones, vea "[Expresiones](/actions/learn-github-actions/expressions)".

También puede especificar `concurrency` en el nivel de trabajo. Para más información, vea [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
