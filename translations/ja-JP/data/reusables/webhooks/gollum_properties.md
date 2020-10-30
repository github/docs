| キー                   | 種類       | 説明                                                                       |
| -------------------- | -------- | ------------------------------------------------------------------------ |
| `ページ`                | `array`  | The pages that were updated.                                             |
| `pages[][page_name]` | `string` | The name of the page.                                                    |
| `pages[][title]`     | `string` | The current page title.                                                  |
| `pages[][action]`    | `string` | The action that was performed on the page. Can be `created` or `edited`. |
| `pages[][sha]`       | `string` | The latest commit SHA of the page.                                       |
| `pages[][html_url]`  | `string` | Points to the HTML wiki page.                                            |