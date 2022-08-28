| 键               | 类型    | 描述                                                                                           |
| --------------- | ----- | -------------------------------------------------------------------------------------------- |
| `ref`           | `字符串` | The [`git ref`](/rest/reference/git#get-a-reference) 资源。                                     |
| `ref_type`      | `字符串` | 在仓库中创建的 Git ref 对象的类型。 可以是 `branch` 或 `tag`。                                                 |
| `master_branch` | `字符串` | 仓库默认分支的名称（通常是 {% ifversion fpt or ghes > 3.1 or ghae %}`main`{% else %}`master`{% endif %}）。 |
| `说明`            | `字符串` | 仓库的当前描述。                                                                                     |
