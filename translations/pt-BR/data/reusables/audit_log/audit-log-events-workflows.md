---
ms.openlocfilehash: 7ab479031ca12cf907f9e94d259fae30b274a424
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063871"
---
| Ação | Descrição
|--------|------------
| `workflows.approve_workflow_job` | Um trabalho de fluxo de trabalho foi aprovado. Para obter mais informações, confira "[Como revisar implantações](/actions/managing-workflow-runs/reviewing-deployments)".
| `workflows.cancel_workflow_run` | Uma execução de fluxo de trabalho foi cancelada. Para obter mais informações, confira "[Como cancelar um fluxo de trabalho](/actions/managing-workflow-runs/canceling-a-workflow)".
| `workflows.delete_workflow_run` | Uma execução de fluxo de trabalho foi excluída. Para obter mais informações, confira "[Como excluir uma execução de fluxo de trabalho](/actions/managing-workflow-runs/deleting-a-workflow-run)".
| `workflows.disable_workflow` | Um fluxo de trabalho foi desabilitado.
| `workflows.enable_workflow` | Um fluxo de trabalho foi habilitado, depois de ter sido desabilitado por `disable_workflow`.
| `workflows.reject_workflow_job` | Um trabalho de fluxo de trabalho foi rejeitado. Para obter mais informações, confira "[Como revisar implantações](/actions/managing-workflow-runs/reviewing-deployments)".
| `workflows.rerun_workflow_run` | Uma execução de fluxo de trabalho foi executada novamente. Para obter mais informações, confira "[Como executar novamente um fluxo de trabalho](/actions/managing-workflow-runs/re-running-a-workflow)".
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %} | `workflows.completed_workflow_run` | Um status de fluxo de trabalho foi alterado para `completed`. Só pode ser visto usando a API REST; não visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Como ver o histórico de execuções de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
| `workflows.created_workflow_run` | Uma execução de fluxo de trabalho foi criada. Só pode ser visto usando a API REST; não visível na interface do usuário ou na exportação do JSON/CSV. Para obter mais informações, confira "[Criar um exemplo de fluxo de trabalho](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)".
| `workflows.prepared_workflow_job` | Um trabalho de fluxo de trabalho foi iniciado. Inclui a lista de segredos que foram fornecidos ao trabalho. Só pode ser visto usando a API REST. Não é visível na interface da web de {% data variables.product.prodname_dotcom %} ou incluído na exportação do JSON/CSV. Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".
{%- endif %}
