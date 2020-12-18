| 名前           | 種類        | 説明                                                                 |
| ------------ | --------- | ------------------------------------------------------------------ |
| `id`         | `integer` | イベントの一意の識別子。                                                       |
| `node_id`    | `string`  | イベントの[グローバルノード ID](/graphql/guides/using-global-node-ids)。         |
| `url`        | `string`  | The REST API URL for fetching the event.                           |
| `actor`      | `オブジェクト`  | イベントを生成したユーザ。                                                      |
| `event`      | `string`  | Identifies the actual type of event that occurred.                 |
| `commit_id`  | `string`  | The SHA of the commit that referenced this issue.                  |
| `commit_url` | `string`  | The GitHub REST API link to the commit that referenced this issue. |
| `created_at` | `string`  | The timestamp indicating when the event occurred.                  |
