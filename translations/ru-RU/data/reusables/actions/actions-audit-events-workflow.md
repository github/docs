---
ms.openlocfilehash: 4f04b4395ec12d834bc4d8f350b302c09badea6d
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163182"
---
| Действие | Описание
|------------------|-------------------
| `cancel_workflow_run` | Активируется при отмене запуска рабочего процесса. Дополнительные сведения см. в статье [Отмена рабочего процесса](/actions/managing-workflow-runs/canceling-a-workflow).
| `completed_workflow_run` | Активируется при изменении состояния рабочего процесса на `completed`. Отображается только при использовании REST API; не показывается в пользовательском интерфейсе и при экспорте JSON/CSV. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history)".
| `created_workflow_run` | Активируется при создании запуска рабочего процесса. Отображается только при использовании REST API; не показывается в пользовательском интерфейсе и при экспорте JSON/CSV. Дополнительные сведения см. в статье [Создание примера рабочего процесса](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow).
| `delete_workflow_run` | Активируется при удалении запуска рабочего процесса. Дополнительные сведения см. в статье [Удаление рабочего процесса](/actions/managing-workflow-runs/deleting-a-workflow-run).
| `disable_workflow` | Активируется при отключении рабочего процесса.
| `enable_workflow` | Активируется при включении рабочего процесса после его отключения `disable_workflow`.
| `rerun_workflow_run` | Активируется при повторном запуске рабочего процесса. Дополнительные сведения см. в статье [Перезапуск рабочего процесса](/actions/managing-workflow-runs/re-running-a-workflow).
| `prepared_workflow_job` | Активируется при запуске задания рабочего процесса. Содержит список секретов, предоставленных заданию. Отображается только при использовании REST API. Он не отображается в веб-интерфейсе {% data variables.product.prodname_dotcom %} и не включен в экспорт JSON/CSV. Дополнительные сведения см. в разделе [События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows).
| `approve_workflow_job` | Активируется при утверждении задания рабочего процесса. Дополнительные сведения см. в разделе [Просмотр развертываний](/actions/managing-workflow-runs/reviewing-deployments).
| `reject_workflow_job` | Активируется при отклонении задания рабочего процесса. Дополнительные сведения см. в разделе [Просмотр развертываний](/actions/managing-workflow-runs/reviewing-deployments).
