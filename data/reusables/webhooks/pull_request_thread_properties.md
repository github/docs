Key | Type | Description
----|------|------------
`action` | `string` | The action that was performed. Can be one of:<ul><li>`resolved` - A comment thread on a pull request was marked as resolved.</li><li>`unresolved` - A previously resolved comment thread on a pull request was marked as unresolved.</li></ul>
`pull_request` | `object` | The [pull request](/rest/pulls) the thread pertains to.
`thread` | `object` | The thread that was affected.
