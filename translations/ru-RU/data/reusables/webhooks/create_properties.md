| Клавиша         | Тип      | Description                                                                                                                         |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `ref`           | `строка` | The [`git ref`](/rest/reference/git#get-a-reference) resource.                                                                      |
| `ref_type`      | `строка` | The type of Git ref object created in the repository. Can be either `branch` or `tag`.                                              |
| `master_branch` | `строка` | The name of the repository's default branch (usually {% ifversion fpt or ghes > 3.1 or ghae %}`main`{% else %}`master`{% endif %}). |
| `описание`      | `строка` | The repository's current description.                                                                                               |
