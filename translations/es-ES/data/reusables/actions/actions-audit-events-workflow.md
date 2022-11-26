---
ms.openlocfilehash: 4f04b4395ec12d834bc4d8f350b302c09badea6d
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163183"
---
| Acción | Descripción
|------------------|-------------------
| `cancel_workflow_run` | Se activa cuando se cancela una ejecución de flujo de trabajo. Para obtener más información, vea "[Cancelar un flujo de trabajo](/actions/managing-workflow-runs/canceling-a-workflow)".
| `completed_workflow_run` | Se desencadena cuando el estado de un flujo de trabajo cambia a `completed`. Solo se puede visualizar utilizando la API de REST; no se puede visualizar en la IU ni en la exportación de JSON/CSV. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".
| `created_workflow_run` | Se activa cuando se crea una ejecución de flujo de trabajo. Solo se puede visualizar utilizando la API de REST; no se puede visualizar en la IU ni en la exportación de JSON/CSV. Para obtener más información, vea "[Creación de un flujo de trabajo de ejemplo](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".
| `delete_workflow_run` | Se activa cuando se borra una ejecución de flujo de trabajo. Para más información, vea "[Eliminación de una ejecución de flujo de trabajo](/actions/managing-workflow-runs/deleting-a-workflow-run)".
| `disable_workflow` | Se activa cuando se inhabilita un flujo de trabajo.
| `enable_workflow` | Se desencadena cuando se habilita un flujo de trabajo después de que se deshabilitara mediante `disable_workflow`.
| `rerun_workflow_run` | Se activa cuando se vuelve a ejecutar una ejecución de flujo de trabajo. Para obtener más información, vea "[Volver a ejecutar un flujo de trabajo](/actions/managing-workflow-runs/re-running-a-workflow)".
| `prepared_workflow_job` | Se activa cuando se inicia un job de flujo de trabajo. Incluye la lista de secretos que se proporcionaron al job. Solo puede verse utilizando la API de REST. No es visible en la interfaz web de {% data variables.product.prodname_dotcom %} ni se incluye en la exportación de JSON/CSV. Para más información, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".
| `approve_workflow_job` | Se activa cuando se aprueba el job de un flujo de trabajo. Para más información, vea "[Revisión de implementaciones](/actions/managing-workflow-runs/reviewing-deployments)".
| `reject_workflow_job` | Se activa cuando se rechaza el job de un flujo de trabajo. Para más información, vea "[Revisión de implementaciones](/actions/managing-workflow-runs/reviewing-deployments)".
