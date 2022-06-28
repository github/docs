| 键              | 类型    | 描述                                                                |
| -------------- | ----- | ----------------------------------------------------------------- |
| `action`       | `字符串` | 执行的操作内容. 可以是以下选项之一：<ul><li>`resolved` - A comment thread on a pull request was marked as resolved.</li><li>`unresolved` - A previously resolved comment thread on a pull request was marked as unresolved.</li></ul>                      |
| `pull_request` | `对象`  | The [pull request](/rest/reference/pulls) the thread pertains to. |
| `线程`           | `对象`  | The thread that was affected.                                     |
