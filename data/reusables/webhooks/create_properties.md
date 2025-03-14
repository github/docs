Key | Type | Description
----|------|-------------
`ref`|`string` | The [`git ref`](/rest/git#get-a-reference) resource, or `null` if `ref_type` is `repository`.
`ref_type`|`string` | The type of Git ref object created in the repository. Can be either `branch`, `tag`, or `repository`.
`master_branch`|`string` | The name of the repository's default branch (usually `main`).
`description`|`string` | The repository's current description.
`pusher_type`|`string` | Can be either `user` or a deploy key.
