`number`|`integer` | The pull request number.
`pull_request`|`object` | The [pull request](/rest/pulls) itself.
| {% ifversion fpt or ghec %} |
`assignee`|`object` | The optional user who was assigned or unassigned from the issue.
`assignees`|`array` | The optional array of assignee objects detailing the assignees on the issue.
`label`|`object` | 	The optional label that was added or removed from the issue if the action was `labeled` or `unlabeled`.
`labels`|`array` | The optional array of label objects describing the labels on the pull request if the action was `labeled` or `unlabeled`.
| {% endif %} |
