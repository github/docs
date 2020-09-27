| Tecla                 | Tipo     | Descrição                                                                                                            |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `Ação`                | `string` | The action that was performed on the project. Can be one of `created`, `edited`, `closed`, `reopened`, or `deleted`. |
| `alterações`          | `objeto` | The changes to the project if the action was `edited`.                                                               |
| `changes[name][from]` | `string` | A versão anterior do nome se a ação foi `editada`.                                                                   |
| `changes[body][from]` | `string` | The previous version of the body if the action was `edited`.                                                         |
| `project`             | `objeto` | The [project](/v3/projects/) itself.                                                                                 |