| 操作                               | 描述                                                                                       |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| `workflows.approve_workflow_job` | 工作流程作业已获批准。 更多信息请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。      |
| `workflows.cancel_workflow_run`  | 工作流程运行已取消。 更多信息请参阅“[取消工作流程](/actions/managing-workflow-runs/canceling-a-workflow)。       |
| `workflows.delete_workflow_run`  | 工作流程运行已删除。 更多信息请参阅“[删除工作流程运行](/actions/managing-workflow-runs/deleting-a-workflow-run)”。 |
| `workflows.disable_workflow`     | 工作流程已禁用。                                                                                 |
| `workflows.enable_workflow`      | 在先前被 `disable_workflow` 禁用后，启用了工作流程。                                                     |
| `workflows.reject_workflow_job`  | 工作流程作业被拒绝。 更多信息请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。       |
| `workflows.rerun_workflow_run`   | 已重新运行工作流程运行。 更多信息请参阅“[重新运行工作流程](/actions/managing-workflow-runs/re-running-a-workflow)。  |
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `workflows.completed_workflow_run` | 工作流程状态更改为 `completed`。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。 | `workflows.created_workflow_run` | 已创建工作流程运行。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[创建示例工作流程](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”。 | `workflows.prepared_workflow_job` | 工作流程作业已启动。 包括提供给作业的机密列表。 只能使用 REST API 查看。 它在 {% data variables.product.prodname_dotcom %} Web 界面中不可见，也不包含在 JSON/CSV 导出中。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。
{%- endif %}
