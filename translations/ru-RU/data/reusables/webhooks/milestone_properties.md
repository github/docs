| Клавиша                      | Тип      | Description                                                                                         |
| ---------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `действие`                   | `строка` | The action that was performed. Can be one of `created`, `closed`, `opened`, `edited`, or `deleted`. |
| `контрольная точка`          | `объект` | The milestone itself.                                                                               |
| `changes`                    | `объект` | The changes to the milestone if the action was `edited`.                                            |
| `changes[description][from]` | `строка` | The previous version of the description if the action was `edited`.                                 |
| `changes[due_on][from]`      | `строка` | The previous version of the due date if the action was `edited`.                                    |
| `changes[title][from]`       | `строка` | The previous version of the title if the action was `edited`.                                       |