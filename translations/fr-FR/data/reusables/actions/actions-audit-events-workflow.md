---
ms.openlocfilehash: 4f04b4395ec12d834bc4d8f350b302c09badea6d
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163178"
---
| Action | Description
|------------------|-------------------
| `cancel_workflow_run` | Déclenchée lorsqu’une exécution de workflow a été annulée. Pour plus d’informations, consultez « [Annulation d’un workflow](/actions/managing-workflow-runs/canceling-a-workflow) ».
| `completed_workflow_run` | Déclenchée lorsqu’un état de workflow passe à `completed`. Visible uniquement à l’aide de l’API REST. Non visible dans l’IU ou l’exportation JSON/CSV. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
| `created_workflow_run` | Déclenchée lors de la création d’une exécution de workflow. Visible uniquement à l’aide de l’API REST. Non visible dans l’IU ou l’exportation JSON/CSV. Pour plus d’informations, consultez « [Créer un exemple de workflow](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow) ».
| `delete_workflow_run` | Déclenchée lorsqu’une exécution de workflow est supprimée. Pour plus d’informations, consultez « [Suppression d’une exécution de workflow](/actions/managing-workflow-runs/deleting-a-workflow-run) ».
| `disable_workflow` | Déclenchée lorsqu’un workflow est désactivé.
| `enable_workflow` | Déclenchée lorsqu’un workflow est activé après avoir été désactivé par `disable_workflow`.
| `rerun_workflow_run` | Déclenchée lorsqu’une exécution de workflow est réexécutée. Pour plus d’informations, consultez « [Réexécution d’un workflow](/actions/managing-workflow-runs/re-running-a-workflow) ».
| `prepared_workflow_job` | Déclenchée lorsqu’un travail de workflow est démarré. Inclut la liste des secrets fournis au travail. Visible uniquement à l’aide de l’API REST. Non visible dans l’interface web de {% data variables.product.prodname_dotcom %} ni inclus dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows) ».
| `approve_workflow_job` | Déclenchée lorsqu’un travail de workflow a été approuvé. Pour plus d’informations, consultez « [Révision des déploiements](/actions/managing-workflow-runs/reviewing-deployments) ».
| `reject_workflow_job` | Déclenchée lorsqu’un travail de workflow a été rejeté. Pour plus d’informations, consultez « [Révision des déploiements](/actions/managing-workflow-runs/reviewing-deployments) ».
