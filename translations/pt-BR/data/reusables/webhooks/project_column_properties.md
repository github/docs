| Tecla                 | Tipo      | Descrição                                                                                                              |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Ação`                | `string`  | A ação que foi executada na coluna do projeto. Pode ser `created`, `edited`, `moved` ou `deleted`.                     |
| `alterações`          | `objeto`  | As alterações na coluna do projeto, se a ação foi `editada`.                                                           |
| `changes[name][from]` | `string`  | A versão anterior do nome se a ação foi `editada`.                                                                     |
| `after_id`            | `inteiro` | O id da coluna que esta coluna agora segue se a ação foi "movida". Será `nulo` se for a primeira coluna em um projeto. |
| `project_column`      | `objeto`  | A própria [coluna do projeto](/rest/reference/projects#columns).                                                       |
