| キー           | 種類       | 説明                                                                                                                 |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `action`     | `string` | 実行されたアクション. `created`、`reopened_by_user`、`closed_by_user`、`fixed`、`appeared_in_branch`、`reopened`のいずれか。            |
| `alert`      | `オブジェクト` | このイベントに関わるCode Scanningのアラート。                                                                                      |
| `ref`        | `string` | Code ScanningアラートのGit参照。 アクションが`reopened_by_user`もしくは`closed_by_user`であれば、イベントは`sender`によってトリガーされており、この値は空になります。   |
| `commit_oid` | `string` | Code ScanningアラートのコミットSHA。 アクションが`reopened_by_user`もしくは`closed_by_user`であれば、イベントは`sender`によってトリガーされており、この値は空になります。 |
