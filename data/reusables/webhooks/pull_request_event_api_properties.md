Key | Type | Description
----|------|-------------
| {% ifversion fpt or ghec %} |
`action`|`string` | The action that was performed. Can be one of `opened`, `closed`, `reopened`, `assigned`, `unassigned`, `labeled`, and `unlabeled`.
| {% else %} |
`action`|`string` | The action that was performed. Can be one of `opened`, `closed`, `reopened`.
| {% endif %} |
