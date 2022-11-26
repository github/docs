---
ms.openlocfilehash: 1162ab428d4c20f7f0ca4af8c1ec743b30e42852
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107863"
---
| Ação | Descrição
|------------------|-------------------
| `cancel_workflow_run` | Acionada quando uma execução do fluxo de trabalho foi cancelada. Para obter mais informações, confira "[Como cancelar um fluxo de trabalho](/actions/managing-workflow-runs/canceling-a-workflow)".
| `completed_workflow_run` | Disparado quando um status de fluxo de trabalho é alterado para `completed`. Só pode ser visto usando a API REST; não visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
| `created_workflow_run` | Acionada quando uma execução do fluxo de trabalho é criada. Só pode ser visto usando a API REST; não visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Criar um exemplo de fluxo de trabalho](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".
| `delete_workflow_run` | Acionada quando a execução do fluxo de trabalho é excluída. Para obter mais informações, confira "[Como excluir uma execução de fluxo de trabalho](/actions/managing-workflow-runs/deleting-a-workflow-run)".
| `disable_workflow` | Acionada quando um fluxo de trabalho está desabilitado.
| `enable_workflow` | Disparada quando um fluxo de trabalho é habilitado, depois de ter sido desabilitado por `disable_workflow`.
| `rerun_workflow_run` | Acionada quando uma execução do fluxo de trabalho é executada novamente. Para obter mais informações, confira "[Como executar novamente um fluxo de trabalho](/actions/managing-workflow-runs/re-running-a-workflow)".
| `prepared_workflow_job` | Acionada quando um trabalho no fluxo de trabalho é iniciado. Inclui a lista de segredos que foram fornecidos ao trabalho. Só pode ser visto usando a API REST. Não é visível na interface da web de {% data variables.product.prodname_dotcom %} ou incluído na exportação do JSON/CSV. Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".
| `approve_workflow_job` | Acionada quando um trabalho no fluxo de trabalho foi aprovado. Para obter mais informações, confira "[Como revisar implantações](/actions/managing-workflow-runs/reviewing-deployments)".
| `reject_workflow_job` | Acionada quando um trabalho no fluxo de trabalho foi rejeitado. Para obter mais informações, confira "[Como revisar implantações](/actions/managing-workflow-runs/reviewing-deployments)".
