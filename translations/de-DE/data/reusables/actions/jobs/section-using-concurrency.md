---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089476"
---
Verwende `concurrency`, um sicherzustellen, dass immer nur ein einziger Auftrag oder Workflow mit derselben Parallelitätsgruppe ausgeführt wird. Eine Parallelitätsgruppe kann eine beliebige Zeichenfolge oder ein beliebiger Ausdruck sein. Der Ausdruck kann nur den [`github`-Kontext](/actions/learn-github-actions/contexts#github-context) verwenden. Weitere Informationen zu Ausdrücken findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

Du kannst `concurrency` auch auf Auftragsebene angeben. Weitere Informationen findest du unter [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
