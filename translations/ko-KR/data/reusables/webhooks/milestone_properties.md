| 키                            | 유형    | 설명                                                                                                  |
| ---------------------------- | ----- | --------------------------------------------------------------------------------------------------- |
| `동작`                         | `문자열` | The action that was performed. Can be one of `created`, `closed`, `opened`, `edited`, or `deleted`. |
| `마일스톤`                       | `개체`  | The milestone itself.                                                                               |
| `changes`                    | `개체`  | The changes to the milestone if the action was `edited`.                                            |
| `changes[description][from]` | `문자열` | The previous version of the description if the action was `edited`.                                 |
| `changes[due_on][from]`      | `문자열` | The previous version of the due date if the action was `edited`.                                    |
| `changes[title][from]`       | `문자열` | The previous version of the title if the action was `edited`.                                       |