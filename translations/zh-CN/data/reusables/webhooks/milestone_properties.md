| 键                            | 类型    | 描述                                                                            |
| ---------------------------- | ----- | ----------------------------------------------------------------------------- |
| `action`                     | `字符串` | 执行的操作内容. Can be one of `created`, `closed`, `opened`, `edited`, or `deleted`. |
| `里程碑`                        | `对象`  | The milestone itself.                                                         |
| `changes`                    | `对象`  | The changes to the milestone if the action was `edited`.                      |
| `changes[description][from]` | `字符串` | 说明的先前版本（如果操作为 `edited`）。                                                      |
| `changes[due_on][from]`      | `字符串` | The previous version of the due date if the action was `edited`.              |
| `changes[title][from]`       | `字符串` | The previous version of the title if the action was `edited`.                 |