Key | Type | Description
----|------|-------------
`action`|`string` | Most webhook payloads contain an `action` property that contains the specific activity that triggered the event.
`workflow_run`|`object` | The Workflow.
`workflow_run[head_branch]`|`string` | The head branch name the changes are on.
`workflow_run[conclusion]`|`string`| The summary conclusion for all check runs that are part of the check suite. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`,  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}`action_required` or `stale`{% else %}or `action_required`{% endif %}. This value will be `null` until the check run has `completed`.
`workflow_run[pull_requests]`|`array`| An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_sha` and `head_branch`. When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.
