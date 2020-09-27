| Клавиша               | Тип       | Description                                                                                                                  |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `действие`            | `строка`  | The action performed on the project card. Can be `created`, `edited`, `moved`, `converted`, or `deleted`.                    |
| `changes`             | `объект`  | The changes to the project card if the action was `edited` or `converted`.                                                   |
| `changes[note][from]` | `строка`  | The previous version of the note if the action was `edited` or `converted`.                                                  |
| `after_id`            | `integer` | The id of the card that this card now follows if the action was "moved". Will be `null` if it is the first card in a column. |
| `project_card`        | `объект`  | The [project card](/v3/projects/cards) itself.                                                                               |