| 操作                       | 描述                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cancel_workflow_run`    | 工作流程运行取消时触发。 更多信息请参阅“[取消工作流程](/actions/managing-workflow-runs/canceling-a-workflow)。                                                                                |
| `completed_workflow_run` | 当工作流程状态更改为`完成`时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。                  |
| `created_workflow_run`   | 工作流程运行创建时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[创建示例工作流程](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”。 |
| `delete_workflow_run`    | 工作流程运行被删除时触发。 更多信息请参阅“[删除工作流程运行](/actions/managing-workflow-runs/deleting-a-workflow-run)”。                                                                         |
| `rerun_workflow_run`     | 工作流程运行重新运行时触发。 更多信息请参阅“[重新运行工作流程](/actions/managing-workflow-runs/re-running-a-workflow)。                                                                           |
| `prepared_workflow_job`  | 工作流程作业启动时触发。 包括提供给作业的机密列表。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。                         |
