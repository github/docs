---
ms.openlocfilehash: 830540b45884edcec609f94aeeaaf5b661a95a51
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163215"
---
| Acción | Descripción
|--------|------------
| `workflows.approve_workflow_job` | Se aprobó un trabajo de flujo de trabajo. Para más información, vea "[Revisión de implementaciones](/actions/managing-workflow-runs/reviewing-deployments)".
| `workflows.cancel_workflow_run` | Se canceló una ejecución de flujo de trabajo. Para obtener más información, vea "[Cancelar un flujo de trabajo](/actions/managing-workflow-runs/canceling-a-workflow)".
| `workflows.delete_workflow_run` | Se eliminó una ejecución de flujo de trabajo. Para más información, vea "[Eliminación de una ejecución de flujo de trabajo](/actions/managing-workflow-runs/deleting-a-workflow-run)".
| `workflows.disable_workflow` | Se deshabilitó un flujo de trabajo.
| `workflows.enable_workflow` | Se habilitó un flujo de trabajo, después de que se deshabilitara anteriormente mediante `disable_workflow`.
| `workflows.reject_workflow_job` | Se rechazó un trabajo de flujo de trabajo. Para más información, vea "[Revisión de implementaciones](/actions/managing-workflow-runs/reviewing-deployments)".
| `workflows.rerun_workflow_run` | Se volvió a ejecutar una ejecución de flujo de trabajo. Para obtener más información, vea "[Volver a ejecutar un flujo de trabajo](/actions/managing-workflow-runs/re-running-a-workflow)".
| `workflows.completed_workflow_run` | Un estado de flujo de trabajo cambió a `completed`. Solo se puede visualizar utilizando la API de REST; no se puede visualizar en la IU ni en la exportación de JSON/CSV. Para obtener más información, vea "[Visualizar el historial de ejecución de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
| `workflows.created_workflow_run` | Se creó una ejecución de flujo de trabajo. Solo se puede visualizar utilizando la API de REST; no se puede visualizar en la IU ni en la exportación de JSON/CSV. Para obtener más información, vea "[Creación de un flujo de trabajo de ejemplo](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".
| `workflows.prepared_workflow_job` | Se inició un trabajo de flujo de trabajo. Incluye la lista de secretos que se proporcionaron al job. Solo puede verse utilizando la API de REST. No es visible en la interfaz web de {% data variables.product.prodname_dotcom %} ni se incluye en la exportación de JSON/CSV. Para más información, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".
