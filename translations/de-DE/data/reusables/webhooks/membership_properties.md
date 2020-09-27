| Schlüssel  | Typ      | Beschreibung                                                     |
| ---------- | -------- | ---------------------------------------------------------------- |
| `action`   | `string` | die Aktion, die durchgeführt wurde. Can be `added` or `removed`. |
| `Umfang`   | `string` | The scope of the membership. Currently, can only be `team`.      |
| `Mitglied` | `Objekt` | The [user](/v3/users/) that was added or removed.                |
| `Team`     | `Objekt` | The [team](/v3/teams/) for the membership.                       |