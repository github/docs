| 键                     | 类型    | 描述                                                           |
| --------------------- | ----- | ------------------------------------------------------------ |
| `action`              | `字符串` | 执行的操作内容. 可以是以下选项之一：<ul><li>`submitted` - A pull request review is submitted into a non-pending state.</li><li>`edited` - The body of a review has been edited.</li><li>`dismissed` - A review has been dismissed.</li></ul>                 |
| `pull_request`        | `对象`  | The [pull request](/v3/pulls/) the review pertains to.       |
| `审查`                  | `对象`  | The review that was affected.                                |
| `changes[body][from]` | `字符串` | The previous version of the body if the action was `edited`. |