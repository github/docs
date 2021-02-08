`issue`|`object` | The [issue](/rest/reference/issues) itself.
`changes`|`object`| The changes to the issue if the action was `edited`.
`changes[title][from]`|`string` | The previous version of the title if the action was `edited`.
`changes[body][from]`|`string` | The previous version of the body if the action was `edited`.
`assignee`|`object` | The optional user who was assigned or unassigned from the issue.
`label`|`object` | The optional label that was added or removed from the issue.
