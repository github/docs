| キー                           | 種類       | 説明                                                                               |
| ---------------------------- | -------- | -------------------------------------------------------------------------------- |
| `action`                     | `string` | 実行されたアクション. Can be one of `created`, `closed`, `opened`, `edited`, or `deleted`. |
| `マイルストーン`                    | `オブジェクト` | The milestone itself.                                                            |
| `変更`                         | `オブジェクト` | The changes to the milestone if the action was `edited`.                         |
| `changes[description][from]` | `string` | The previous version of the description if the action was `edited`.              |
| `changes[due_on][from]`      | `string` | The previous version of the due date if the action was `edited`.                 |
| `changes[title][from]`       | `string` | The previous version of the title if the action was `edited`.                    |
