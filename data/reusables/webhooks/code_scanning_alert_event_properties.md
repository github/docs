Key | Type | Description
----|------|-------------
`action` |`string` | The action that was performed. This can be one of `created`, `reopened_by_user`, `closed_by_user`, `fixed`, `appeared_in_branch`, or `reopened`.
`alert` |`object` | The code scanning alert involved in the event.
`ref` | `string` | The Git reference of the code scanning alert. When the action is `reopened_by_user ` or `closed_by_user `,  the event was triggered by the `sender` and this value will be empty.
`commit_oid` | `string` | The commit SHA of the code scanning alert. When the action is `reopened_by_user ` or `closed_by_user `,  the event was triggered by the `sender` and this value will be empty.
