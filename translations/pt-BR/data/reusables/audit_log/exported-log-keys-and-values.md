Depois de exportar o log como JSON ou CSV, você verá as seguintes chaves e valores no arquivo resultante.

| Tecla               | Valor de exemplo                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `Ação`              | team.create                                                                                  |
| `actor`             | octocat                                                                                      |
| `usuário`           | codertocat                                                                                   |
| `org`               | octo-org                                                                                     |
| `repo`              | octo-org/documentation                                                                       |
| `created_at`        | 1429548104000 (o registro de data e hora mostra o tempo desde a era Epoch em milissegundos.) |
| `data.hook_id`      | 245                                                                                          |
| `data.events`       | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]               |
| `data.events_were`  | ["push", "pull_request", "issues"]                                                           |
| `data.target_login` | octocat                                                                                      |
| `data.old_user`     | hubot                                                                                        |
| `data.team`         | octo-org/engineering                                                                         |
