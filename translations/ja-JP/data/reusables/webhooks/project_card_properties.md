| キー                    | 種類        | 説明                                                                          |
| --------------------- | --------- | --------------------------------------------------------------------------- |
| `action`              | `string`  | プロジェクトカードで行われたアクション。 `created`、`edited`、`moved`、`converted`、`deleted`のいずれか。 |
| `changes`             | `オブジェクト`  | アクションが`edited`もしくは`converted`だった場合、プロジェクトカードへの変更。                           |
| `changes[note][from]` | `string`  | アクションが`edited`もしくは`converted`だった場合、以前のバージョンのノート。                            |
| `after_id`            | `integer` | アクションが"moved"だった場合、このカードがフォローするようになったカードのid。 これが列内の最初のカードの場合は`null`になる。     |
| `project_card`        | `オブジェクト`  | [プロジェクトカード](/rest/reference/projects#cards)自体。                              |
