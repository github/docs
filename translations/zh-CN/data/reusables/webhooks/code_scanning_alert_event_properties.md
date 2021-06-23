| 键            | 类型    | 描述                                                                                                         |
| ------------ | ----- | ---------------------------------------------------------------------------------------------------------- |
| `action`     | `字符串` | 执行的操作内容. 可以是以下项之一：`created`、`reopened_by_user`、`closed_by_user`、`fixed`、`appeared_in_branch` 或 `reopened`。 |
| `警报`         | `对象`  | 事件中涉及的代码扫描警报。                                                                                              |
| `ref`        | `字符串` | 代码扫描警报的 Git 引用。 当操作为 `reopened_by_user` 或 `closed_by_user` 时，事件由 `sender` 触发，此值将为空。                        |
| `commit_oid` | `字符串` | 代码扫描警报的提交 SHA。 当操作为 `reopened_by_user` 或 `closed_by_user` 时，事件由 `sender` 触发，此值将为空。                         |
