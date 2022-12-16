---
ms.openlocfilehash: 142794535bf66481cbdf5ec8430ed18ff9a0034d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079932"
---
Auf wiederverwendbare Workflows aus öffentlichen Repositorys kann mithilfe eines SHA, eines Releasetags oder eines Branchnamens verwiesen werden. Weitere Informationen findest du unter [Aufrufen eines wiederverwendbaren Workflows](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow). 

Wenn du einen Workflow, der einen wiederverwendbaren Workflow verwendet, erneut ausführst, und der Verweis kein SHA-Verweis ist, sind einige Verhaltensweisen zu beachten:

* Bei erneuter Ausführung aller Aufträge in einem Workflow wird der wiederverwendbare Workflow aus dem angegebenen Verweis verwendet. Weitere Informationen zum erneuten Ausführen aller Aufträge in einem Workflow findest du unter [Erneutes Ausführen aller Aufträge in einem Workflow](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow).
* Beim erneuten Ausführen fehlerhafter Aufträge oder eines bestimmten Auftrags in einem Workflow wird der wiederverwendbare Workflow aus dem Commit-SHA des ersten Versuches verwendet. Weitere Informationen zum erneuten Ausführen fehlerhafter Aufträge in einem Workflow findest du unter [Erneutes Ausführen fehlerhafter Aufträge in einem Workflow](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow). Weitere Informationen zum erneuten Ausführen eines bestimmten Auftrags in einem Workflow findest du unter [Erneutes Ausführen eines bestimmten Auftrags in einem Workflow](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow).
