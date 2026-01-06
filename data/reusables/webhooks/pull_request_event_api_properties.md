Key | Type | Description
----|------|-------------
| {% ifversion fpt or ghec %} |
`action`|`string` | The action that was performed. Can be one of `opened`, `closed`, `merged`, `reopened`, `assigned`, `unassigned`, `labeled`, or `unlabeled`.
| {% else %} |
`action`|`string` | The action that was performed. Can be one of `opened`, `closed`, `reopened`.
| {% endif %} |
