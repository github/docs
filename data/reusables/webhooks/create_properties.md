Key | Type | Description
----|------|-------------
`ref`|`string` | The [`git ref`](/rest/reference/git#get-a-reference) resource.
`ref_type`|`string` | The type of Git ref object created in the repository. Can be either `branch` or `tag`.
`master_branch`|`string` | The name of the repository's default branch (usually {% ifversion fpt or ghes > 3.1 or ghae %}`main`{% else %}`master`{% endif %}).
`description`|`string` | The repository's current description.
