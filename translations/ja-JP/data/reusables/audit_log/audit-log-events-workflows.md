---
ms.openlocfilehash: 7ab479031ca12cf907f9e94d259fae30b274a424
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063875"
---
| アクション | 説明
|--------|------------
| `workflows.approve_workflow_job` | ワークフロー ジョブが承認されました。 詳細については、「[デプロイの確認](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。
| `workflows.cancel_workflow_run` | ワークフロー実行が取り消されました。 詳細については、「[ワークフローの取り消し](/actions/managing-workflow-runs/canceling-a-workflow)」を参照してください。
| `workflows.delete_workflow_run` | ワークフロー実行が削除されました。 詳細については、「[ワークフロー実行の削除](/actions/managing-workflow-runs/deleting-a-workflow-run)」を参照してください。
| `workflows.disable_workflow` | ワークフローが無効になりました。
| `workflows.enable_workflow` | `disable_workflow` によって無効にされたワークフローが有効になりました。
| `workflows.reject_workflow_job` | ワークフロー ジョブが拒否されました。 詳細については、「[デプロイの確認](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。
| `workflows.rerun_workflow_run` | ワークフロー実行が再実行されました。 詳細については、[ワークフローの再実行](/actions/managing-workflow-runs/re-running-a-workflow)に関するページを参照してください。
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %} | `workflows.completed_workflow_run` | ワークフローの状態が `completed` に変わりました。 REST APIを通じてのみ見ることができます。UIやJSON/CSVエクスポートでは見ることができません。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
| `workflows.created_workflow_run` | ワークフロー実行が作成されました。 REST APIを通じてのみ見ることができます。UIやJSON/CSVエクスポートでは見ることができません。 詳細については、「[ワークフローの例を作成する](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)」を参照してください。
| `workflows.prepared_workflow_job` | ワークフロー ジョブが開始されました。 ジョブに渡されたシークレットのリストを含みます。 REST API を使ってのみ表示できます。 これは、{% data variables.product.prodname_dotcom %} Web インターフェイスでは表示されず、JSON/CSV エクスポートにも含まれません。 詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。
{%- endif %}
