Key | Type | Description
----|------|-------------
`action`|`string` | The action performed. Can be one of: <ul><li> `queued` - A new job was created.</li><li> `in_progress` - The job has started processing on the runner.</li><li> `completed` - The `status` of the job is `completed`.</li></ul>
`workflow_job`|`object`| The workflow job. Many `workflow_job` keys, such as `head_sha`, `conclusion`, and `started_at` are the same as those in a [`check_run`](#check_run) object.
`workflow_job[status]`|`string`| The current status of the job. Can be `queued`, `in_progress`, or `completed`.
`workflow_job[labels]`|`array`| Custom labels for the job. Specified by the [`"runs-on"` attribute](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) in the workflow YAML.
`workflow_job[runner_id]`|`integer`| The ID of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
`workflow_job[runner_name]`|`string`| The name of the runner that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
`workflow_job[runner_group_id]`|`integer`| The ID of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
`workflow_job[runner_group_name]`|`string`| The name of the runner group that is running this job. This will be `null` as long as `workflow_job[status]` is `queued`.
