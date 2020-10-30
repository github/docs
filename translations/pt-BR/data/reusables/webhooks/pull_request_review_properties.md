| Tecla                 | Tipo     | Descrição                                                                           |
| --------------------- | -------- | ----------------------------------------------------------------------------------- |
| `Ação`                | `string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`submitted` - A pull request review is submitted into a non-pending state.</li><li>`edited` - The body of a review has been edited.</li><li>`dismissed` - A review has been dismissed.</li></ul> |
| `pull_request`        | `objeto` | The [pull request](/v3/pulls/) the review pertains to.                              |
| `revisar`             | `objeto` | The review that was affected.                                                       |
| `changes[body][from]` | `string` | The previous version of the body if the action was `edited`.                        |