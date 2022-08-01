| Action | Description
|------------------|-------------------
| `cancel_workflow_run` | Triggered when a workflow run has been cancelled. For more information, see "[Canceling a workflow](/actions/managing-workflow-runs/canceling-a-workflow)."{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `completed_workflow_run` | Triggered when a workflow status changes to `completed`. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."{% endif %}{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `created_workflow_run` | Triggered when a workflow run is created. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[Create an example workflow](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)."{% endif %}
| `delete_workflow_run` | Triggered when a workflow run is deleted. For more information, see "[Deleting a workflow run](/actions/managing-workflow-runs/deleting-a-workflow-run)."
| `disable_workflow` | Triggered when a workflow is disabled.
| `enable_workflow` | Triggered when a workflow is enabled, after previously being disabled by `disable_workflow`.
| `rerun_workflow_run` | Triggered when a workflow run is re-run. For more information, see "[Re-running a workflow](/actions/managing-workflow-runs/re-running-a-workflow)."{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `prepared_workflow_job` | Triggered when a workflow job is started. Includes the list of secrets that were provided to the job. Can only be viewed using the REST API. It is not visible in the the {% data variables.product.prodname_dotcom %} web interface or included in the JSON/CSV export. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)."{% endif %}
| `approve_workflow_job` | Triggered when a workflow job has been approved. For more information, see "[Reviewing deployments](/actions/managing-workflow-runs/reviewing-deployments)."
| `reject_workflow_job` | Triggered when a workflow job has been rejected. For more information, see "[Reviewing deployments](/actions/managing-workflow-runs/reviewing-deployments)."
