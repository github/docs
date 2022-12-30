---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145086313"
---
Utilisez `concurrency` pour vérifier qu’un seul travail ou workflow utilisant le même groupe d’accès concurrentiel s’exécute à la fois. Un groupe d’accès concurrentiel peut correspondre à n’importe quelle chaîne ou expression. L’expression peut uniquement utiliser le [contexte `github`](/actions/learn-github-actions/contexts#github-context). Pour plus d’informations sur les expressions, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

Vous pouvez également spécifier `concurrency` au niveau du travail. Pour plus d’informations, consultez [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
