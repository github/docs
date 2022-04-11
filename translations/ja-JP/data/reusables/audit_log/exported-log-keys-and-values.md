After you export the log, you'll see the following keys and values in the resulting file.

| キー                            | 値の例                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------ |
| `action`                      | team.create                                                                    |
| `actor`                       | octocat                                                                        |
| `ユーザ`                         | codertocat                                                                     |
| `actor_location.country_code` | US                                                                             |
| `org`                         | octo-org                                                                       |
| `repo`                        | octo-org/documentation                                                         |
| `created_at`                  | 1429548104000 (タイムスタンプは Epoch からの経過時間をミリ秒で示します。)                               |
| `data.email`                  | octocat@nowhere.com                                                            |
| `data.hook_id`                | 245                                                                            |
| `data.events`                 | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"] |
| `data.events_were`            | ["push", "pull_request", "issues"]                                             |
| `data.target_login`           | octocat                                                                        |
| `data.old_user`               | hubot                                                                          |
| `data.team`                   | octo-org/engineering                                                           |
