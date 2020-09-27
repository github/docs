| 键        | 类型    | 描述                                                          |
| -------- | ----- | ----------------------------------------------------------- |
| `action` | `字符串` | 执行的操作内容. Can be `added` or `removed`.                       |
| `作用域`    | `字符串` | The scope of the membership. Currently, can only be `team`. |
| `成员`     | `对象`  | The [user](/v3/users/) that was added or removed.           |
| `团队`     | `对象`  | The [team](/v3/teams/) for the membership.                  |