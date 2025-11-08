Key | Type | Description
----|------|-------------
| {% ifversion fpt or ghec %} |
`action`|`string` | The action that was performed. Can be `created`, `updated`, or `dismissed`.
| {% else %} |
`action`|`string` | The action that was performed. Can be `created`.
| {% endif %} |
`pull_request`|`object` | The [pull request](/rest/pulls) the review pertains to.
`review`|`object` |	The [review](/rest/pulls) that was affected.
