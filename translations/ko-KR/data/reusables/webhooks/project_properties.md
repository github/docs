| 키                     | 유형    | 설명                                                                                                                   |
| --------------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| `동작`                  | `문자열` | The action that was performed on the project. Can be one of `created`, `edited`, `closed`, `reopened`, or `deleted`. |
| `changes`             | `개체`  | The changes to the project if the action was `edited`.                                                               |
| `changes[name][from]` | `문자열` | The previous version of the name if the action was `edited`.                                                         |
| `changes[body][from]` | `문자열` | The previous version of the body if the action was `edited`.                                                         |
| `프로젝트`                | `개체`  | The [project](/rest/reference/projects) itself.                                                                      |
