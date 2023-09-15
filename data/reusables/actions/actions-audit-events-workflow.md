| Action | Description
|------------------|-------------------
| `cancel_workflow_run` | Triggered when a workflow run has been cancelled. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/canceling-a-workflow)."
| `completed_workflow_run` | Triggered when a workflow status changes to `completed`. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."
| `created_workflow_run` | Triggered when a workflow run is created. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions#create-an-example-workflow)."
| `delete_workflow_run` | Triggered when a workflow run is deleted. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/deleting-a-workflow-run)."
| `disable_workflow` | Triggered when a workflow is disabled.
| `enable_workflow` | Triggered when a workflow is enabled, after previously being disabled by `disable_workflow`.
| `rerun_workflow_run` | Triggered when a workflow run is re-run. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."
| `prepared_workflow_job` | Triggered when a workflow job is started. Includes the list of secrets that were provided to the job. Can only be viewed using the REST API. It is not visible in the {% data variables.product.prodname_dotcom %} web interface or included in the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows)."
| `approve_workflow_job` | Triggered when a workflow job has been approved. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."
| `reject_workflow_job` | Triggered when a workflow job has been rejected. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."
