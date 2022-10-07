Key | Type | Description
----|------|-------------
`action`|`string` | The action that was performed. Can be one of `requested`{% ifversion actions-workflow-run-in-progress %}, `in_progress`,{% endif %} or `completed`.
`workflow_run`| `object` | The workflow run. Includes information such as `artifacts_url`, `check_suite_id`, `conclusion`, `head_branch`, and `head_sha`.
