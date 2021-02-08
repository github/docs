| Клавиша               | Тип      | Description                                                                                                          |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `действие`            | `строка` | The action that was performed on the project. Can be one of `created`, `edited`, `closed`, `reopened`, or `deleted`. |
| `changes`             | `объект` | The changes to the project if the action was `edited`.                                                               |
| `changes[name][from]` | `строка` | The previous version of the name if the action was `edited`.                                                         |
| `changes[body][from]` | `строка` | The previous version of the body if the action was `edited`.                                                         |
| `проект`              | `объект` | The [project](/rest/reference/projects) itself.                                                                      |
