---
ms.openlocfilehash: 830540b45884edcec609f94aeeaaf5b661a95a51
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163214"
---
| Действие | Описание
|--------|------------
| `workflows.approve_workflow_job` | Задание рабочего процесса одобрено. Дополнительные сведения см. в разделе [Просмотр развертываний](/actions/managing-workflow-runs/reviewing-deployments).
| `workflows.cancel_workflow_run` | Выполнение рабочего процесса отменено. Дополнительные сведения см. в статье [Отмена рабочего процесса](/actions/managing-workflow-runs/canceling-a-workflow).
| `workflows.delete_workflow_run` | Выполнение рабочего процесса удалено. Дополнительные сведения см. в статье [Удаление рабочего процесса](/actions/managing-workflow-runs/deleting-a-workflow-run).
| `workflows.disable_workflow` | Рабочий процесс был отключен.
| `workflows.enable_workflow` | Рабочий процесс был включен после того, как ранее был отключен пользователем `disable_workflow`.
| `workflows.reject_workflow_job` | Задание рабочего процесса отклонено. Дополнительные сведения см. в разделе [Просмотр развертываний](/actions/managing-workflow-runs/reviewing-deployments).
| `workflows.rerun_workflow_run` | Выполнение рабочего процесса перезапущено. Дополнительные сведения см. в статье [Перезапуск рабочего процесса](/actions/managing-workflow-runs/re-running-a-workflow).
| `workflows.completed_workflow_run` | Состояние рабочего процесса изменено на `completed`. Отображается только при использовании REST API; не показывается в пользовательском интерфейсе и при экспорте JSON/CSV. Дополнительные сведения см. в статье [Просмотр журнала выполнения рабочего процесса](/actions/managing-workflow-runs/viewing-workflow-run-history).
| `workflows.created_workflow_run` | Было создано выполнение рабочего процесса. Отображается только при использовании REST API; не показывается в пользовательском интерфейсе и при экспорте JSON/CSV. Дополнительные сведения см. в статье [Создание примера рабочего процесса](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow).
| `workflows.prepared_workflow_job` | Запущено задание рабочего процесса. Содержит список секретов, предоставленных заданию. Отображается только при использовании REST API. Она не отображается в веб-интерфейсе {% data variables.product.prodname_dotcom %} или не включена в экспорт JSON/CSV. Дополнительные сведения см. в разделе [События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows).
