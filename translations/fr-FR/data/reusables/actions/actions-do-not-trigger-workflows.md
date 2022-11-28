---
ms.openlocfilehash: d503b739b31064e743351c490bfbdc2dda14028f
ms.sourcegitcommit: 439a35836e56918d471759ff5ff9b2152c5a9aa3
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/08/2022
ms.locfileid: "147865928"
---
Lorsque vous utilisez le `GITHUB_TOKEN` du dépôt pour effectuer des tâches, les événements déclenchés par le `GITHUB_TOKEN`{% ifversion actions-token-updated-triggers %}, avec l’exception de `workflow_dispatch` et de `repository_dispatch`,{% endif %} ne créent pas de nouvelle exécution de workflow. Cela vous empêche de créer accidentellement des exécutions de workflow récursives. Par exemple, si une exécution de workflow pousse (push) du code à l’aide du `GITHUB_TOKEN` du dépôt, aucun nouveau workflow ne s’exécute même quand le dépôt contient un workflow configuré pour s’exécuter quand des événements `push` se produisent.
