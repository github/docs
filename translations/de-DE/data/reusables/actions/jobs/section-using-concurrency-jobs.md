---
ms.openlocfilehash: e0ae7814db2deb2c1e666172e71566cc6d28ca1b
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: "147888002"
---
{% note %}

**Hinweis:** Wenn Parallelität auf Auftragsebene angegeben wird, wird die Reihenfolge für Aufträge oder Ausführungen, die der Warteschlange innerhalb eines Zeitraums von bis zu fünf Minuten hinzugefügt werden, nicht garantiert.

{% endnote %}

Du kannst `jobs.<job_id>.concurrency` verwenden, um sicherzustellen, dass immer nur ein einzelner Auftrag oder Workflow mit der gleichen Parallelitätsgruppe ausgeführt wird. Eine Parallelitätsgruppe kann eine beliebige Zeichenfolge oder ein beliebiger Ausdruck sein. Der Ausdruck kann einen beliebigen Kontext verwenden. Einzige Ausnahme ist der Kontext `secrets`. Weitere Informationen zu Ausdrücken findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

`concurrency` kann auch auf Workflowebene angegeben werden. Weitere Informationen findest du unter [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
