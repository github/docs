---
ms.openlocfilehash: 830540b45884edcec609f94aeeaaf5b661a95a51
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163210"
---
| Action | Description
|--------|------------
| `workflows.approve_workflow_job` | Une tâche de workflow a été approuvée. Pour plus d’informations, consultez « [Révision des déploiements](/actions/managing-workflow-runs/reviewing-deployments) ».
| `workflows.cancel_workflow_run` | Une exécution de workflow a été annulée. Pour plus d’informations, consultez « [Annulation d’un workflow](/actions/managing-workflow-runs/canceling-a-workflow) ».
| `workflows.delete_workflow_run` | Une exécution de workflow a été supprimée. Pour plus d’informations, consultez « [Suppression d’une exécution de workflow](/actions/managing-workflow-runs/deleting-a-workflow-run) ».
| `workflows.disable_workflow` | Un workflow a été désactivé.
| `workflows.enable_workflow` | Un workflow a été activé, après avoir été désactivé par `disable_workflow`.
| `workflows.reject_workflow_job` | Une tâche de workflow a été rejetée. Pour plus d’informations, consultez « [Révision des déploiements](/actions/managing-workflow-runs/reviewing-deployments) ».
| `workflows.rerun_workflow_run` | Une exécution de workflow a été réexécutée. Pour plus d’informations, consultez « [Réexécution d’un workflow](/actions/managing-workflow-runs/re-running-a-workflow) ».
| `workflows.completed_workflow_run` | L’état d’un workflow est passé à `completed`. Visible uniquement à l’aide de l’API REST. Non visible dans l’IU ou l’exportation JSON/CSV. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
| `workflows.created_workflow_run` | Une exécution de workflow a été créée. Visible uniquement à l’aide de l’API REST. Non visible dans l’IU ou l’exportation JSON/CSV. Pour plus d’informations, consultez « [Créer un exemple de workflow](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow) ».
| `workflows.prepared_workflow_job` | Un travail de workflow a démarré. Inclut la liste des secrets fournis au travail. Visible uniquement à l’aide de l’API REST. Non visible dans l’interface web de {% data variables.product.prodname_dotcom %} ni inclus dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows) ».
