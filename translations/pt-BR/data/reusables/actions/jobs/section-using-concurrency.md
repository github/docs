---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145083893"
---
Use `concurrency` para garantir que apenas um trabalho ou um fluxo de trabalho que usa o mesmo grupo de simultaneidade seja executado por vez. Um grupo de concorrência pode ser qualquer string ou expressão. A expressão só pode usar o [contexto `github`](/actions/learn-github-actions/contexts#github-context). Para obter mais informações sobre expressões, confira "[Expressões](/actions/learn-github-actions/expressions)".

Você também pode especificar `concurrency` no nível do trabalho. Para obter mais informações, confira [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
