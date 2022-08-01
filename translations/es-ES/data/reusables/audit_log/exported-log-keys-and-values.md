Después de que exportes la bitácora, verás la siguientes claves y valores en el archivo de resultado.

| Clave                         | Valor de ejemplo                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| `Acción`                      | team.create                                                                           |
| `actor (actor)`               | octocat                                                                               |
| `usuario`                     | codertocat                                                                            |
| `actor_location.country_code` | US                                                                                    |
| `org`                         | octo-org                                                                              |
| `repo`                        | octo-org/documentation                                                                |
| `created_at (creado en)`      | 1429548104000 (Los registros horarios muestran la hora desde Epoch con milisegundos). |
| `data.email`                  | octocat@nowhere.com                                                                   |
| `data.hook_id`                | 245                                                                                   |
| `data.events`                 | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]        |
| `data.events_were`            | ["push", "pull_request", "issues"]                                                    |
| `data.target_login`           | octocat                                                                               |
| `data.old_user`               | hubot                                                                                 |
| `data.team`                   | octo-org/engineering                                                                  |
