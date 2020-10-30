| 键                     | 类型    | 描述                                                                                                                                  |
| --------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `action`              | `字符串` | The action that was performed on the project column. Can be one of `created`, `edited`, `moved` or `deleted`.                       |
| `changes`             | `对象`  | The changes to the project column if the action was `edited`.                                                                       |
| `changes[name][from]` | `字符串` | 名称的先前版本（如果操作为 `edited`）。                                                                                                            |
| `after_id`            | `整数`  | The id of the column that this column now follows if the action was "moved". Will be `null` if it is the first column in a project. |
| `project_column`      | `对象`  | The [project column](/v3/projects/columns) itself.                                                                                  |