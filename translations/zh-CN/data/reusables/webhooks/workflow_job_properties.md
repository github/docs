| 键                                 | 类型    | 描述                                                                                                                   |
| --------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| `action`                          | `字符串` | 执行的操作。 可以是以下选项之一： <ul><li> `queued` - 已创建新作业。</li><li> `in_progress` - 作业已开始在运行器上进行处理。</li><li> `completed` - 作业的“状态”为“已完成”。</li></ul>                                                                           |
| `workflow_job`                    | `对象`  | 工作流程作业。 许多 `workflow_job` 键，如 `head_sha`、`conclusion` 和 `started_at` 与 [`check_run`](#check_run) 对象中的键相同。            |
| `workflow_job[status]`            | `字符串` | 作业的当前状态。 可以是 `queued`、`in_progress` 或 `completed`。                                                                   |
| `workflow_job[labels]`            | `数组`  | 作业的自定义标签。 由工作流程 YAML 中的 [`"runs-on"` 属性](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)指定。 |
| `workflow_job[runner_id]`         | `整数`  | 运行此作业的运行器的 ID。 只要 `workflow_job[status]` 为 `queued`，这将为 `null`。                                                      |
| `workflow_job[runner_name]`       | `字符串` | 运行此作业的运行器的名称。 只要 `workflow_job[status]` 为 `queued`，这将为 `null`。                                                       |
| `workflow_job[runner_group_id]`   | `整数`  | 运行此作业的运行器组的 ID。 只要 `workflow_job[status]` 为 `queued`，这将为 `null`。                                                     |
| `workflow_job[runner_group_name]` | `字符串` | 运行此作业的运行器组的名称。 只要 `workflow_job[status]` 为 `queued`，这将为 `null`。                                                      |
