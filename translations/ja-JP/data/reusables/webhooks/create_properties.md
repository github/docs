| キー              | 種類       | 説明                                                                                                           |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| `ref`           | `string` | [`git ref`](/rest/reference/git#get-a-reference)リソース。                                                        |
| `ref_type`      | `string` | リポジトリで作成されたGit refオブジェクトの種類。 `branch`もしくは`tag`になる。                                                           |
| `master_branch` | `string` | リポジトリのデフォルトブランチの名前（通常は{% ifversion fpt or ghes > 3.1 or ghae or ghec %}`main`{% else %}`master`{% endif %}）。 |
| `description`   | `string` | リポジトリの現在の説明。                                                                                                 |
