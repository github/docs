---
ms.openlocfilehash: 4f04b4395ec12d834bc4d8f350b302c09badea6d
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163179"
---
| Aktion | BESCHREIBUNG
|------------------|-------------------
| `cancel_workflow_run` | Wird ausgelöst, wenn eine Workflowausführung abgebrochen wurde. Weitere Informationen findest du unter „[Abbrechen eines Workflows](/actions/managing-workflow-runs/canceling-a-workflow)“.
| `completed_workflow_run` | Wird ausgelöst, wenn sich ein Workflowstatus in `completed` ändert. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).
| `created_workflow_run` | Wird ausgelöst, wenn eine Workflowausführung erstellt wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Erstellen eines Beispielworkflows](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)“.
| `delete_workflow_run` | Wird ausgelöst, wenn eine Workflowausführung gelöscht wird. Weitere Informationen findest du unter [Löschen einer Workflowausführung](/actions/managing-workflow-runs/deleting-a-workflow-run).
| `disable_workflow` | Wird ausgelöst, wenn ein Workflow deaktiviert wird.
| `enable_workflow` | Wird ausgelöst, wenn ein Workflow aktiviert wird, nachdem er zuvor mit `disable_workflow` deaktiviert wurde.
| `rerun_workflow_run` | Wird ausgelöst, wenn eine Workflowausführung wiederholt wird. Weitere Informationen findest du unter „[Erneutes Ausführen eines Workflows](/actions/managing-workflow-runs/re-running-a-workflow)“.
| `prepared_workflow_job` | Wird ausgelöst, wenn ein Workflowauftrag gestartet wird. Enthält die Liste der Geheimnisse, die dem Auftrag zur Verfügung gestellt wurden. Die Anzeige ist nur mithilfe der REST-API möglich. Sie wird nicht auf der Weboberfläche von {% data variables.product.prodname_dotcom %} angezeigt und ist nicht im JSON/CSV-Export enthalten. Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).
| `approve_workflow_job` | Wird ausgelöst, wenn ein Workflowauftrag genehmigt wurde. Weitere Informationen findest du unter [Überprüfen von Bereitstellungen](/actions/managing-workflow-runs/reviewing-deployments).
| `reject_workflow_job` | Wird ausgelöst, wenn ein Workflowauftrag abgelehnt wurde. Weitere Informationen findest du unter [Überprüfen von Bereitstellungen](/actions/managing-workflow-runs/reviewing-deployments).
