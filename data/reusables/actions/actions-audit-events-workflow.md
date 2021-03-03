| Action | Description
|------------------|-------------------
| `cancel_workflow_run` | Triggered when a workflow run has been cancelled. For more information, see "[Canceling a workflow](/actions/managing-workflow-runs/canceling-a-workflow)."
| `completed_workflow_run` | Triggered when a workflow status changes to `completed`. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
| `created_workflow_run` | Triggered when a workflow run is created. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[Create an example workflow](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)."
| `delete_workflow_run` | Triggered when a workflow run is deleted. For more information, see "[Deleting a workflow run](/actions/managing-workflow-runs/deleting-a-workflow-run)."
| `rerun_workflow_run` | Triggered when a workflow run is re-run. For more information, see "[Re-running a workflow](/actions/managing-workflow-runs/re-running-a-workflow)."
| `prepared_workflow_job` | Triggered when a workflow job is started. Includes the list of secrets that were provided to the job. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)."
