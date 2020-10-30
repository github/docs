| 키                     | 유형        | 설명                                                                                                                           |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `동작`                  | `문자열`     | The action performed on the project card. Can be `created`, `edited`, `moved`, `converted`, or `deleted`.                    |
| `changes`             | `개체`      | The changes to the project card if the action was `edited` or `converted`.                                                   |
| `changes[note][from]` | `문자열`     | The previous version of the note if the action was `edited` or `converted`.                                                  |
| `after_id`            | `integer` | The id of the card that this card now follows if the action was "moved". Will be `null` if it is the first card in a column. |
| `project_card`        | `개체`      | The [project card](/v3/projects/cards) itself.                                                                               |