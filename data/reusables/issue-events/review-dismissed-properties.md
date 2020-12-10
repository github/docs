`dismissed_review` | `object` | The information for the dismissed review.
`dismissed_review[state]` | `string` | The state the pull request was in when it was dismissed. Can be one of: `commented`, `approved`, or `changes_requested`.
`dismissed_review[review_id]` | `string` | The unique identifier of the pull request's review.
`dismissed_review[dismissal_message]` | `string` | The message the user included when dismissing the review.
`dismissed_review[dismissal_commit_id]` | `string` | The unique identifier of the commit that dismissed the review if one exists.
