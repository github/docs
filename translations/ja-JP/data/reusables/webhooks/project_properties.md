| キー                    | 種類       | 説明                                                                        |
| --------------------- | -------- | ------------------------------------------------------------------------- |
| `action`              | `string` | プロジェクトで実行されたアクション。 `created`、`edited`、`closed`、`reopened`、`deleted`のいずれか。 |
| `changes`             | `オブジェクト` | アクションが`edited`の場合、プロジェクトへの変更。                                             |
| `changes[name][from]` | `string` | アクションが`edited`だった場合、以前のバージョンの名前。                                          |
| `changes[body][from]` | `string` | アクションが`edited`だった場合の、以前のバージョンのボディ。                                        |
| `project`             | `オブジェクト` | [プロジェクト](/rest/reference/projects)自体。                                     |
