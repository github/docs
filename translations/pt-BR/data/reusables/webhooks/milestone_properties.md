| Tecla                        | Tipo     | Descrição                                                                                      |
| ---------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `Ação`                       | `string` | A ação que foi executada. Can be one of `created`, `closed`, `opened`, `edited`, or `deleted`. |
| `marco`                      | `objeto` | The milestone itself.                                                                          |
| `alterações`                 | `objeto` | The changes to the milestone if the action was `edited`.                                       |
| `changes[description][from]` | `string` | A versão anterior da descrição se a ação foi `editada`.                                        |
| `changes[due_on][from]`      | `string` | The previous version of the due date if the action was `edited`.                               |
| `changes[title][from]`       | `string` | The previous version of the title if the action was `edited`.                                  |