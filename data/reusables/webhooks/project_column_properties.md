Key | Type | Description
----|------|-------------
`action`|`string` | The action that was performed on the project column. Can be one of `created`, `edited`, `moved` or `deleted`.
`changes`|`object` | The changes to the project column if the action was `edited`.
`changes[name][from]` |`string` | The previous version of the name if the action was `edited`.
`after_id`|`integer` | The id of the column that this column now follows if the action was "moved". Will be `null` if it is the first column in a project.
`project_column`|`object` | The [project column](/v3/projects/columns) itself.
