| 键                     | 类型    | 描述                                                          |
| --------------------- | ----- | ----------------------------------------------------------- |
| `action`              | `字符串` | 在项目列上执行的操作。 可以以下项之一：`created`、`edited`、`moved` 或 `deleted`。 |
| `changes`             | `对象`  | 对项目列的更改，如果操作为 `edited`。                                     |
| `changes[name][from]` | `字符串` | 名称的先前版本（如果操作为 `edited`）。                                    |
| `after_id`            | `整数`  | 此列现在所遵循的列的 ID，如果操作为 "moved"。 将为 `null`，如果它是项目中的第一列。         |
| `project_column`      | `对象`  | [项目列](/rest/reference/projects#columns)本身。                  |
