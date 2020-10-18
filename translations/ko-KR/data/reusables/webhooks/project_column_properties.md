| 키                     | 유형        | 설명                                                                                                                                  |
| --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `동작`                  | `문자열`     | The action that was performed on the project column. Can be one of `created`, `edited`, `moved` or `deleted`.                       |
| `changes`             | `개체`      | The changes to the project column if the action was `edited`.                                                                       |
| `changes[name][from]` | `문자열`     | The previous version of the name if the action was `edited`.                                                                        |
| `after_id`            | `integer` | The id of the column that this column now follows if the action was "moved". Will be `null` if it is the first column in a project. |
| `project_column`      | `개체`      | The [project column](/v3/projects/columns) itself.                                                                                  |
