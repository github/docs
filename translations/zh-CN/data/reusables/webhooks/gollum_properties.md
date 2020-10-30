| 键                    | 类型    | 描述                                                                       |
| -------------------- | ----- | ------------------------------------------------------------------------ |
| `页面`                 | `数组`  | The pages that were updated.                                             |
| `pages[][page_name]` | `字符串` | The name of the page.                                                    |
| `pages[][title]`     | `字符串` | The current page title.                                                  |
| `pages[][action]`    | `字符串` | The action that was performed on the page. Can be `created` or `edited`. |
| `pages[][sha]`       | `字符串` | The latest commit SHA of the page.                                       |
| `pages[][html_url]`  | `字符串` | Points to the HTML wiki page.                                            |