`number`|`integer` | The pull request number.
`changes`|`object`| The changes to the comment if the action was `edited`.
`changes[title][from]`|`string` | The previous version of the title if the action was `edited`.
`changes[body][from]`|`string` | The previous version of the body if the action was `edited`.
`pull_request`|`object` | The [pull request](/rest/pulls) itself.{% ifversion fpt or ghec %}
`reason`|`string` | The reason the pull request was removed from a merge queue if the action was `dequeued`.{% endif %}
