| キー                   | 種類       | 説明                                          |
| -------------------- | -------- | ------------------------------------------- |
| `pages`              | `array`  | 更新されたページ。                                   |
| `pages[][page_name]` | `string` | ページの名前。                                     |
| `pages[][title]`     | `string` | 現在のページのタイトル。                                |
| `pages[][action]`    | `string` | ページ上で行われたアクション。 `created`もしくは`edited`のいずれか。 |
| `pages[][sha]`       | `string` | ページの最新のコミットSHA。                             |
| `pages[][html_url]`  | `string` | HTMLのwikiページを指す。                            |
