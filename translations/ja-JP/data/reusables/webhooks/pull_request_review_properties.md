| キー                    | 種類       | 説明                                                |
| --------------------- | -------- | ------------------------------------------------- |
| `action`              | `string` | 実行されたアクション. 次のいずれかになります。<ul><li>`submitted` - Pull Requestレビューが非保留状態にサブミットされた。</li><li>`edited` - レビューのボディが編集された。</li><li>`dismissed` - レビューが却下された。</li></ul> |
| `pull_request`        | `オブジェクト` | レビューが関連する[Pull Request](/rest/reference/pulls)。   |
| `review`              | `オブジェクト` | 影響されるレビュー。                                        |
| `changes[body][from]` | `string` | アクションが`edited`だった場合の、以前のバージョンのボディ。                |
