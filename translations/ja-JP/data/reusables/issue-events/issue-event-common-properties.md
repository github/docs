| 名前           | 種類        | 説明                                                         |
| ------------ | --------- | ---------------------------------------------------------- |
| `id`         | `integer` | イベントの一意の識別子。                                               |
| `node_id`    | `string`  | イベントの[グローバルノード ID](/graphql/guides/using-global-node-ids)。 |
| `url`        | `string`  | イベントをフェッチするためのREST API URL。                                |
| `actor`      | `object`  | イベントを生成したユーザ。                                              |
| `event`      | `string`  | 発生したイベントの実際の種類を特定します。                                      |
| `commit_id`  | `string`  | このIssueを参照するコミットのSHA。                                      |
| `commit_url` | `string`  | このIssueを参照するコミットへのGitHub REST APIリンク。                      |
| `created_at` | `string`  | イベントが発生した時刻を示すタイムスタンプ。                                     |
