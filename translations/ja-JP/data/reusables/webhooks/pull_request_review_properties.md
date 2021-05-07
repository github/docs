| キー                    | 種類       | 説明                                                                |
| --------------------- | -------- | ----------------------------------------------------------------- |
| `action`              | `string` | 実行されたアクション. 次のいずれかになります。<ul><li>`submitted` - A pull request review is submitted into a non-pending state.</li><li>`edited` - The body of a review has been edited.</li><li>`dismissed` - A review has been dismissed.</li></ul>                 |
| `pull_request`        | `オブジェクト` | The [pull request](/rest/reference/pulls) the review pertains to. |
| `レビュー`                | `オブジェクト` | The review that was affected.                                     |
| `changes[body][from]` | `string` | The previous version of the body if the action was `edited`.      |
