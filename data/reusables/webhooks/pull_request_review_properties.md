Key | Type | Description
----|------|------------
`action` | `string` | The action that was performed. Can be one of:<ul><li>`submitted` - A pull request review is submitted into a non-pending state.</li><li>`edited` - The body of a review has been edited.</li><li>`dismissed` - A review has been dismissed.</li></ul>
`pull_request` | `object` | The [pull request](/v3/pulls/) the review pertains to.
`review` | `object` | The review that was affected.
`changes[body][from]`|`string` | The previous version of the body if the action was `edited`.
