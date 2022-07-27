| アクション                            | 説明                                                                                                               |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `workflows.approve_workflow_job` | ワークフロージョブが承認されました。 詳しい情報については「[デプロイメントのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。   |
| `workflows.cancel_workflow_run`  | ワークフローの実行がキャンセルされました。 詳しい情報については「[ワークフローのキャンセル](/actions/managing-workflow-runs/canceling-a-workflow)」を参照してください。 |
| `workflows.delete_workflow_run`  | ワークフローの実行が削除されました。 詳しい情報については「[ワークフローの実行の削除](/actions/managing-workflow-runs/deleting-a-workflow-run)」を参照してください。 |
| `workflows.disable_workflow`     | ワークフローが無効化されました。                                                                                                 |
| `workflows.enable_workflow`      | `disable_workflow`によって以前に無効化されたあと、ワークフローが有効化されました。                                                               |
| `workflows.reject_workflow_job`  | ワークフロージョブが拒否されました。 詳しい情報については「[デプロイメントのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。   |
| `workflows.rerun_workflow_run`   | ワークフローの実行が再実行されました。 詳しい情報については「[ワークフローの再実行](/actions/managing-workflow-runs/re-running-a-workflow)」を参照してください。    |
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `workflows.completed_workflow_run` | ワークフローのステータスが`completed`に変更されました。 REST APIを通じてのみ見ることができます。UIやJSON/CSVエクスポートでは見ることができません。 詳しい情報については「[ワークフローの実行履歴の表示](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。 | `workflows.created_workflow_run` | ワークフローの実行がキャンセルされました。 REST APIを通じてのみ見ることができます。UIやJSON/CSVエクスポートでは見ることができません。 詳しい情報については「[サンプルワークフローの作成](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)」を参照してください。 | `workflows.prepared_workflow_job` | ワークフロージョブが開始されました。 ジョブに渡されたシークレットのリストを含みます。 REST APIを使ってのみ見ることができます。 {% data variables.product.prodname_dotcom %} Webインターフェースでは見ることができず、JSON/CSVエクスポートにも含まれません。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。
{%- endif %}
