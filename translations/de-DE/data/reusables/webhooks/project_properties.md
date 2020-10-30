| Schlüssel             | Typ      | Beschreibung                                                                                                         |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `action`              | `string` | The action that was performed on the project. Can be one of `created`, `edited`, `closed`, `reopened`, or `deleted`. |
| `changes`             | `Objekt` | The changes to the project if the action was `edited`.                                                               |
| `changes[name][from]` | `string` | The previous version of the name if the action was `edited`.                                                         |
| `changes[body][from]` | `string` | The previous version of the body if the action was `edited`.                                                         |
| `project (Projekt)`   | `Objekt` | The [project](/v3/projects/) itself.                                                                                 |