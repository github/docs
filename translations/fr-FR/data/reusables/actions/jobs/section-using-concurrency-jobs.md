---
ms.openlocfilehash: e0ae7814db2deb2c1e666172e71566cc6d28ca1b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087289"
---
{% note %}

**Remarque :** Lorsque l’accès concurrentiel est spécifié au niveau du travail, l’ordre n’est pas garanti pour les travaux ou exécutions en file d’attente avec moins de 5 minutes d’écart.

{% endnote %}

Vous pouvez utiliser `jobs.<job_id>.concurrency` pour vous assurer qu’un seul travail ou workflow utilisant le même groupe d’accès concurrentiel s’exécute à la fois. Un groupe d’accès concurrentiel peut être n’importe quelle chaîne ou expression. L’expression peut utiliser n’importe quel contexte à l’exception du contexte `secrets`. Pour plus d’informations sur les expressions, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

Vous pouvez également spécifier `concurrency` au niveau du workflow. Pour plus d’informations, consultez [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
