| Schlüssel                    | Typ      | Beschreibung                                                                                             |
| ---------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `action`                     | `string` | die Aktion, die durchgeführt wurde. Can be one of `created`, `closed`, `opened`, `edited`, or `deleted`. |
| `Meilensteine`               | `Objekt` | The milestone itself.                                                                                    |
| `changes`                    | `Objekt` | The changes to the milestone if the action was `edited`.                                                 |
| `changes[description][from]` | `string` | The previous version of the description if the action was `edited`.                                      |
| `changes[due_on][from]`      | `string` | The previous version of the due date if the action was `edited`.                                         |
| `changes[title][from]`       | `string` | The previous version of the title if the action was `edited`.                                            |
