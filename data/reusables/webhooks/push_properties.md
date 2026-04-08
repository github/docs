Key | Type | Description
----|------|-------------
`repository_id`|`integer` | The unique identifier of the repository where the push occurred.
`push_id`|`integer` | The unique identifier for the push.
| {% ifversion ghes %} |
`size`|`integer` | The number of commits in the push.
`distinct_size`|`integer` | The number of distinct commits in the push.
| {% endif %} |
`ref`|`string` | The full [`git ref`](/rest/git/refs) that was pushed. Example: `refs/heads/main`.
`head`|`string` | The SHA of the most recent commit on `ref` after the push.
`before`|`string` | The SHA of the most recent commit on `ref` before the push.
| {% ifversion ghes %} |
`commits`|`array` | An array of commit objects describing the pushed commits. (The array includes a maximum of 20 commits. If necessary, you can use the [Commits API](/rest/repos#commits) to fetch additional commits. This limit is applied to timeline events only and isn't applied to webhook deliveries.)
`commits[][sha]`|`string` | The SHA of the commit.
`commits[][message]`|`string` | The commit message.
`commits[][author]`|`object` | The git author of the commit.
`commits[][author][name]`|`string` | The git author's name.
`commits[][author][email]`|`string` | The git author's email address.
`commits[][url]`|`url` | URL that points to the commit API resource.
`commits[][distinct]`|`boolean` | Whether this commit is distinct from any that have been pushed before.
| {% endif %} |
