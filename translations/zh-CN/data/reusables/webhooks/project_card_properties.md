| 键                     | 类型    | 描述                                                                                                                           |
| --------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------- |
| `action`              | `字符串` | The action performed on the project card. Can be `created`, `edited`, `moved`, `converted`, or `deleted`.                    |
| `changes`             | `对象`  | The changes to the project card if the action was `edited` or `converted`.                                                   |
| `changes[note][from]` | `字符串` | The previous version of the note if the action was `edited` or `converted`.                                                  |
| `after_id`            | `整数`  | The id of the card that this card now follows if the action was "moved". Will be `null` if it is the first card in a column. |
| `project_card`        | `对象`  | The [project card](/v3/projects/cards) itself.                                                                               |