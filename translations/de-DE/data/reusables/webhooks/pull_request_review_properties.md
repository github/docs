| Schlüssel             | Typ      | Beschreibung                                                                |
| --------------------- | -------- | --------------------------------------------------------------------------- |
| `action`              | `string` | die Aktion, die durchgeführt wurde. Can be one of:<ul><li>`submitted` - A pull request review is submitted into a non-pending state.</li><li>`edited` - The body of a review has been edited.</li><li>`dismissed` - A review has been dismissed.</li></ul> |
| `pull_request`        | `Objekt` | The [pull request](/v3/pulls/) the review pertains to.                      |
| `Review`              | `Objekt` | The review that was affected.                                               |
| `changes[body][from]` | `string` | The previous version of the body if the action was `edited`.                |