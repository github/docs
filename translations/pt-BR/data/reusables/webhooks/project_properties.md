| Tecla                 | Tipo     | Descrição                                                                                              |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `Ação`                | `string` | A acção que foi realizada no projeto. Pode ser `created`, `edited`, `closed`, `reopened` ou `deleted`. |
| `alterações`          | `objeto` | As alterações no projeto, se a ação foi `editada`.                                                     |
| `changes[name][from]` | `string` | A versão anterior do nome se a ação foi `editada`.                                                     |
| `changes[body][from]` | `string` | A versão anterior do texto se a ação foi `editada`.                                                    |
| `project`             | `objeto` | O próprio [projeto](/v3/projects/).                                                                    |
