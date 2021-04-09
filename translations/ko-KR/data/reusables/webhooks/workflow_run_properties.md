| 키              | 유형    | 설명                                                                                                                                                                    |
| -------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `동작`           | `문자열` | The action that was performed. Can be one of `requested` or `completed`.                                                                                              |
| `workflow_run` | `개체`  | The workflow run. Many `workflow_run` keys, such as `head_branch`, `conclusion`, and `pull_requests` are the same as those in a [`check_suite`](#check_suite) object. |
