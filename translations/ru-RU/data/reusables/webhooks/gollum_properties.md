| Клавиша              | Тип      | Description                                                              |
| -------------------- | -------- | ------------------------------------------------------------------------ |
| `pages`              | `array`  | The pages that were updated.                                             |
| `pages[][page_name]` | `строка` | The name of the page.                                                    |
| `pages[][title]`     | `строка` | The current page title.                                                  |
| `pages[][action]`    | `строка` | The action that was performed on the page. Can be `created` or `edited`. |
| `pages[][sha]`       | `строка` | The latest commit SHA of the page.                                       |
| `pages[][html_url]`  | `строка` | Points to the HTML wiki page.                                            |