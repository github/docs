| Tecla        | Tipo     | Descrição                                                   |
| ------------ | -------- | ----------------------------------------------------------- |
| `Ação`       | `string` | A ação que foi executada. Can be `added` or `removed`.      |
| `escopo`     | `string` | The scope of the membership. Currently, can only be `team`. |
| `integrante` | `objeto` | The [user](/v3/users/) that was added or removed.           |
| `equipe`     | `objeto` | The [team](/v3/teams/) for the membership.                  |