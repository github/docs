| 키                    | 유형      | 설명                                                                       |
| -------------------- | ------- | ------------------------------------------------------------------------ |
| `pages`              | `array` | The pages that were updated.                                             |
| `pages[][page_name]` | `문자열`   | The name of the page.                                                    |
| `pages[][title]`     | `문자열`   | The current page title.                                                  |
| `pages[][action]`    | `문자열`   | The action that was performed on the page. Can be `created` or `edited`. |
| `pages[][sha]`       | `문자열`   | The latest commit SHA of the page.                                       |
| `pages[][html_url]`  | `문자열`   | Points to the HTML wiki page.                                            |
