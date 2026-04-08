`issue`|`object` | The [issue](/rest/issues) itself.
| {% ifversion fpt or ghec %} |
`assignee`|`object` | The optional user who was assigned or unassigned from the issue.
`assignees`|`array` | The optional array of assignee objects detailing the assignees on the issue.
`label`|`object` | The optional label that was added or removed from the issue.
`labels`|`array` | The optional array of label objects describing the labels on the issue.
| {% endif %} |
