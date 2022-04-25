| Tecla          | Tipo     | Descrição                                                                           |
| -------------- | -------- | ----------------------------------------------------------------------------------- |
| `Ação`         | `string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`resolved` - A comment thread on a pull request was marked as resolved.</li><li>`unresolved` - A previously resolved comment thread on a pull request was marked as unresolved.</li></ul> |
| `pull_request` | `objeto` | The [pull request](/rest/reference/pulls) the thread pertains to.                   |
| `thread`       | `objeto` | The thread that was affected.                                                       |
