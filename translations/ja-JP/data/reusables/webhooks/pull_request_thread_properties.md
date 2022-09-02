| キー             | 種類       | 説明                                                                |
| -------------- | -------- | ----------------------------------------------------------------- |
| `action`       | `string` | 実行されたアクション. 次のいずれかになります。<ul><li>`resolved` - A comment thread on a pull request was marked as resolved.</li><li>`unresolved` - A previously resolved comment thread on a pull request was marked as unresolved.</li></ul>                 |
| `pull_request` | `オブジェクト` | The [pull request](/rest/reference/pulls) the thread pertains to. |
| `スレッド`         | `オブジェクト` | The thread that was affected.                                     |
