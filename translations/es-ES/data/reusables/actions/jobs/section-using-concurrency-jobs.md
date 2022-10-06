---
ms.openlocfilehash: e0ae7814db2deb2c1e666172e71566cc6d28ca1b
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: "147888006"
---
{% note %}

**Nota:** Cuando se especifica la simultaneidad a nivel de trabajo, no se garantiza el orden para los trabajos ni las ejecuciones que se ponen en cola con una diferencia de 5 minutos entre sí

{% endnote %}

Use `jobs.<job_id>.concurrency` para asegurarse de que solo se ejecute al mismo tiempo un trabajo o flujo de trabajo que use el mismo grupo de concurrencia. Un grupo de concurrencia puede ser cualquier secuencia o expresión. La expresión puede usar cualquier contexto excepto `secrets`. Para más información sobre las expresiones, vea "[Expresiones](/actions/learn-github-actions/expressions)".

También puede especificar `concurrency` en el nivel de flujo de trabajo. Para más información, vea [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
