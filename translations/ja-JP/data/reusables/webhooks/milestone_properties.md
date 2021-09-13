| キー                           | 種類       | 説明                                                               |
| ---------------------------- | -------- | ---------------------------------------------------------------- |
| `action`                     | `string` | 実行されたアクション. `created`、`closed`、`opened`、`edited`、`deleted`のいずれか。 |
| `milestone`                  | `オブジェクト` | マイルストーン自体。                                                       |
| `changes`                    | `オブジェクト` | アクションが`edited`の場合、マイルストーンへの変更。                                   |
| `changes[description][from]` | `string` | アクションが `edited` の場合、以前のバージョンの説明。                                 |
| `changes[due_on][from]`      | `string` | アクションが`edited`だった場合の、以前のバージョンの期限。                                |
| `changes[title][from]`       | `string` | アクションが`edited`だった場合の、以前のバージョンのタイトル。                              |
