| キー       | 種類       | 説明                                                          |
| -------- | -------- | ----------------------------------------------------------- |
| `action` | `string` | 実行されたアクション. Can be `added` or `removed`.                    |
| `スコープ`   | `string` | The scope of the membership. Currently, can only be `team`. |
| `member` | `オブジェクト` | The [user](/v3/users/) that was added or removed.           |
| `Team`   | `オブジェクト` | The [team](/v3/teams/) for the membership.                  |