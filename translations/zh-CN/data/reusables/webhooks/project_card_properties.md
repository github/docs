| 键                     | 类型    | 描述                                                                  |
| --------------------- | ----- | ------------------------------------------------------------------- |
| `action`              | `字符串` | 在项目卡上执行的操作。 可以是 `created`、`edited`、`moved`、`converted` 或 `deleted`。 |
| `changes`             | `对象`  | 对项目卡的更改，如果操作为 `edited` 或 `converted`。                               |
| `changes[note][from]` | `字符串` | 备注的先前版本，如果操作为 `edited` 或 `converted`。                               |
| `after_id`            | `整数`  | 此卡现在所遵循的卡的 ID，如果操作为 "moved"。 将为 `null`，如果它是列中的第一张卡。                 |
| `project_card`        | `对象`  | [项目卡](/v3/projects/cards)本身。                                        |
