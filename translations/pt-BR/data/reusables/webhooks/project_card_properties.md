| Tecla                 | Tipo      | Descrição                                                                                                              |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Ação`                | `string`  | A ação realizada no cartão do projeto. Pode ser `created`, `edited`, `moved`, `converted` ou `deleted`.                |
| `alterações`          | `objeto`  | As alterações no cartão do projeto se a ação foi `editada` ou `convertida`.                                            |
| `changes[note][from]` | `string`  | A versão anterior da nota se a ação foi `editada` ou `convertida`.                                                     |
| `after_id`            | `inteiro` | O ID do cartão que este cartão agora segue se a ação foi "movida". Será `nulo` se for o primeiro cartão em uma coluna. |
| `project_card`        | `objeto`  | O próprio [cartão do projeto](/v3/projects/cards).                                                                     |
