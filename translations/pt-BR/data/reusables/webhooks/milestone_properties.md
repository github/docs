| Tecla                        | Tipo     | Descrição                                                                                |
| ---------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| `Ação`                       | `string` | A ação que foi executada. Pode ser `created`, `closed`, `opened`, `edited` ou `deleted`. |
| `marco`                      | `objeto` | O próprio marco.                                                                         |
| `alterações`                 | `objeto` | As alterações para o marco se a ação foi `editada`.                                      |
| `changes[description][from]` | `string` | A versão anterior da descrição se a ação foi `editada`.                                  |
| `changes[due_on][from]`      | `string` | A versão anterior da data de vencimento se a ação foi `editada`.                         |
| `changes[title][from]`       | `string` | A versão anterior do título se a ação foi `editada`.                                     |
