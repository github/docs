| Tecla          | Tipo     | Descrição                                                                                                                                                             |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação`         | `string` | A ação que foi executada. Can be one of `requested` or `completed`.                                                                                                   |
| `workflow_run` | `objeto` | The workflow run. Many `workflow_run` keys, such as `head_branch`, `conclusion`, and `pull_requests` are the same as those in a [`check_suite`](#check_suite) object. |
