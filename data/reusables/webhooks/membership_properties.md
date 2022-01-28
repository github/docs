Key | Type | Description
----|------|-------------
`action` |`string` | The action that was performed. Can be `added` or `removed`.
`scope`  |`string` | The scope of the membership. Currently, can only be `team`.
`member` |`object` | The [user](/rest/reference/users) that was added or removed.
`team`   |`object` | The [team](/rest/reference/teams) for the membership.
