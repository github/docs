| 키                     | 유형    | 설명                                                                     |
| --------------------- | ----- | ---------------------------------------------------------------------- |
| `동작`                  | `문자열` | The action that was performed. Can be one of:<ul><li>`submitted` - A pull request review is submitted into a non-pending state.</li><li>`edited` - The body of a review has been edited.</li><li>`dismissed` - A review has been dismissed.</li></ul> |
| `pull_request`        | `개체`  | The [pull request](/v3/pulls/) the review pertains to.                 |
| `검토`                  | `개체`  | The review that was affected.                                          |
| `changes[body][from]` | `문자열` | The previous version of the body if the action was `edited`.           |
