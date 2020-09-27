#### Parameters

Name | Type | Description
-----|------|--------------
`actor` | `string` | Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
`branch` | `string` | Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
`event` | `string` | Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)".
`status` | `string` | Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in "[Create a check run](/v3/checks/runs/#create-a-check-run)."
