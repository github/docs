| 键              | 类型    | 描述                                                                                                                                                                    |
| -------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`       | `字符串` | 执行的操作内容. Can be one of `requested` or `completed`.                                                                                                                    |
| `workflow_run` | `对象`  | The workflow run. Many `workflow_run` keys, such as `head_branch`, `conclusion`, and `pull_requests` are the same as those in a [`check_suite`](#check_suite) object. |
