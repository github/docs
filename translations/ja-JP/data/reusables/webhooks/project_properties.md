| キー                    | 種類       | 説明                                                                                                                   |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `action`              | `string` | The action that was performed on the project. Can be one of `created`, `edited`, `closed`, `reopened`, or `deleted`. |
| `変更`                  | `オブジェクト` | The changes to the project if the action was `edited`.                                                               |
| `changes[name][from]` | `string` | The previous version of the name if the action was `edited`.                                                         |
| `changes[body][from]` | `string` | The previous version of the body if the action was `edited`.                                                         |
| `project`             | `オブジェクト` | The [project](/v3/projects/) itself.                                                                                 |