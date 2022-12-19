---
ms.openlocfilehash: 830540b45884edcec609f94aeeaaf5b661a95a51
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163211"
---
| Aktion | BESCHREIBUNG
|--------|------------
| `workflows.approve_workflow_job` | Ein Workflowauftrag wurde genehmigt. Weitere Informationen findest du unter [Überprüfen von Bereitstellungen](/actions/managing-workflow-runs/reviewing-deployments).
| `workflows.cancel_workflow_run` | Eine Workflowausführung wurde abgebrochen. Weitere Informationen findest du unter „[Abbrechen eines Workflows](/actions/managing-workflow-runs/canceling-a-workflow)“.
| `workflows.delete_workflow_run` | Eine Workflowausführung wurde gelöscht. Weitere Informationen findest du unter [Löschen einer Workflowausführung](/actions/managing-workflow-runs/deleting-a-workflow-run).
| `workflows.disable_workflow` | Ein Workflow wurde deaktiviert.
| `workflows.enable_workflow` | Ein Workflow wurde aktiviert, nachdem er zuvor von `disable_workflow` deaktiviert wurde.
| `workflows.reject_workflow_job` | Ein Workflowauftrag wurde abgelehnt. Weitere Informationen findest du unter [Überprüfen von Bereitstellungen](/actions/managing-workflow-runs/reviewing-deployments).
| `workflows.rerun_workflow_run` | Eine Workflowausführung wurde erneut ausgeführt. Weitere Informationen findest du unter „[Erneutes Ausführen eines Workflows](/actions/managing-workflow-runs/re-running-a-workflow)“.
| `workflows.completed_workflow_run` | Ein Workflowstatus wurde geändert in `completed`. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Anzeigen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history)“.
| `workflows.created_workflow_run` | Eine Workflowausführung wurde erstellt. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Erstellen eines Beispielworkflows](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)“.
| `workflows.prepared_workflow_job` | Ein Workflowauftrag wurde gestartet. Enthält die Liste der Geheimnisse, die dem Auftrag zur Verfügung gestellt wurden. Die Anzeige ist nur mithilfe der REST-API möglich. Sie wird nicht auf der Weboberfläche von {% data variables.product.prodname_dotcom %} angezeigt und ist nicht im JSON/CSV-Export enthalten. Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).
