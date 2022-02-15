Después de que exportes el registro como JSON o CSV, verás las siguientes claves y valores en el archivo resultante.

| Clave                    | Valor de ejemplo                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `Acción`                 | team.create                                                                           |
| `actor (actor)`          | octocat                                                                               |
| `usuario`                | codertocat                                                                            |
| `org`                    | octo-org                                                                              |
| `repo`                   | octo-org/documentation                                                                |
| `created_at (creado en)` | 1429548104000 (Los registros horarios muestran la hora desde Epoch con milisegundos). |
| `data.hook_id`           | 245                                                                                   |
| `data.events`            | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]        |
| `data.events_were`       | ["push", "pull_request", "issues"]                                                    |
| `data.target_login`      | octocat                                                                               |
| `data.old_user`          | hubot                                                                                 |
| `data.team`              | octo-org/engineering                                                                  |
