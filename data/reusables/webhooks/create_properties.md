Key | Type | Description
----|------|-------------
`ref`|`string` | The [`git ref`](/rest/reference/git#get-a-reference) resource.
`ref_type`|`string` | The type of Git ref object created in the repository. Can be either `branch` or `tag`.
`master_branch`|`string` | The name of the repository's default branch (usually {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.23" or currentVersion == "github-ae@latest" %}`main`{% else %}`master`{% endif %}).
`description`|`string` | The repository's current description.
