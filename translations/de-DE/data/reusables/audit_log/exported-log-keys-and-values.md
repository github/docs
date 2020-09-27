Nachdem Du das Log als JSON oder CSV exportiert hast, siehst Du die folgenden Schlüssel und Werte in der resultierenden Datei.

| Schlüssel           | Beispielwert                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------- |
| `action`            | team.create                                                                                 |
| `actor`             | octocat                                                                                     |
| `Benutzer`          | codertocat                                                                                  |
| `org`               | octo-org                                                                                    |
| `repo`              | octo-org/documentation                                                                      |
| `created_at`        | 1429548104000 (der Zeitstempel gibt die Zeit in Millisekunden seit Beginn der UNIX-Zeit an) |
| `data.hook_id`      | 245                                                                                         |
| `data.events`       | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]              |
| `data.events_were`  | ["push", "pull_request", "issues"]                                                          |
| `data.target_login` | octocat                                                                                     |
| `data.old_user`     | hubot                                                                                       |
| `data.team`         | octo-org/engineering                                                                        |
