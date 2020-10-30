| 键                     | 类型    | 描述                                                                                                                   |
| --------------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| `action`              | `字符串` | The action that was performed on the project. Can be one of `created`, `edited`, `closed`, `reopened`, or `deleted`. |
| `changes`             | `对象`  | The changes to the project if the action was `edited`.                                                               |
| `changes[name][from]` | `字符串` | 名称的先前版本（如果操作为 `edited`）。                                                                                             |
| `changes[body][from]` | `字符串` | The previous version of the body if the action was `edited`.                                                         |
| `project`             | `对象`  | The [project](/v3/projects/) itself.                                                                                 |