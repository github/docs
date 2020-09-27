| 键                      | 类型    | 描述                                                                                    |
| ---------------------- | ----- | ------------------------------------------------------------------------------------- |
| `action`               | `字符串` | 执行的操作内容. Can be either `added` or `removed`.                                          |
| `repository_selection` | `字符串` | The choice of repositories the installation is on. Can be either `selected` or `all`. |
| `repositories_added`   | `数组`  | An array of repository objects, which were added to the installation.                 |
| `repositories_removed` | `数组`  | An array of repository objects, which were removed from the installation.             |