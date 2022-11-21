---
ms.openlocfilehash: d503b739b31064e743351c490bfbdc2dda14028f
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865929"
---
Wenn Sie das `GITHUB_TOKEN` des Repositorys zum Ausführen von Tasks verwenden, erstellen Ereignisse, die von `GITHUB_TOKEN`{% ifversion actions-token-updated-triggers %} ausgelöst werden, mit Ausnahme von `workflow_dispatch` und `repository_dispatch`{% endif %} keine neue Workflowausführung. Dadurch wird verhindert, dass du versehentlich rekursive Workflow-Ausführung erstellst. Wenn beispielsweise eine Workflowausführung Code über das `GITHUB_TOKEN` des Repositorys pusht, wird ein neuer Workflow auch dann nicht ausgeführt, wenn das Repository einen Workflow enthält, der für die Ausführung beim Auftreten von `push`-Ereignissen konfiguriert wurde.
