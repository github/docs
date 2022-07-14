| アクション                            | 説明                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `workflows.approve_workflow_job` | A workflow job was approved. 詳しい情報については「[デプロイメントのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。  |
| `workflows.cancel_workflow_run`  | A workflow run was cancelled. 詳しい情報については「[ワークフローのキャンセル](/actions/managing-workflow-runs/canceling-a-workflow)」を参照してください。  |
| `workflows.delete_workflow_run`  | A workflow run was deleted. 詳しい情報については「[ワークフローの実行の削除](/actions/managing-workflow-runs/deleting-a-workflow-run)」を参照してください。 |
| `workflows.disable_workflow`     | A workflow was disabled.                                                                                                  |
| `workflows.enable_workflow`      | A workflow was enabled, after previously being disabled by `disable_workflow`.                                            |
| `workflows.reject_workflow_job`  | A workflow job was rejected. 詳しい情報については「[デプロイメントのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。  |
| `workflows.rerun_workflow_run`   | A workflow run was re-run. 詳しい情報については「[ワークフローの再実行](/actions/managing-workflow-runs/re-running-a-workflow)」を参照してください。      |
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `workflows.completed_workflow_run` | A workflow status changed to `completed`. REST APIを通じてのみ見ることができます。UIやJSON/CSVエクスポートでは見ることができません。 For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history). | `workflows.created_workflow_run` | A workflow run was created. REST APIを通じてのみ見ることができます。UIやJSON/CSVエクスポートでは見ることができません。 詳しい情報については「[サンプルワークフローの作成](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)」を参照してください。 | `workflows.prepared_workflow_job` | A workflow job was started. ジョブに渡されたシークレットのリストを含みます。 REST APIを使ってのみ見ることができます。 {% data variables.product.prodname_dotcom %} Webインターフェースでは見ることができず、JSON/CSVエクスポートにも含まれません。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。
{%- endif %}
