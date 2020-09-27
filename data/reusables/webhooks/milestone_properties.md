Key | Type | Description
----|------|-------------
`action` |`string` | The action that was performed. Can be one of `created`, `closed`, `opened`, `edited`, or `deleted`.
`milestone`  |`object` | The milestone itself.
`changes`|`object`| The changes to the milestone if the action was `edited`.
`changes[description][from]`|`string` | The previous version of the description if the action was `edited`.
`changes[due_on][from]`|`string` | The previous version of the due date if the action was `edited`.
`changes[title][from]`|`string` | The previous version of the title if the action was `edited`.