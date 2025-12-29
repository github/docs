Key | Type | Description
----|------|-------------
`ref`|`string` | The [`git ref`](/rest/git#get-a-reference) resource branch.
`ref_type`|`string` | The type of Git ref object deleted in the repository. Can be either `branch` or `tag`.
| {% ifversion fpt or ghec %} |
`full_ref`|`string` | The fully-formed ref resource, meaning that for branches the format is `refs/heads/<branch_name>`.
| {% endif %} |
`pusher_type`|`string` | Can be either `user` or a deploy key.
