| Action | Description
|--------|------------
| `workflows.approve_workflow_job` | A workflow job was approved. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."
| `workflows.cancel_workflow_run` | A workflow run was cancelled. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/canceling-a-workflow)."
| `workflows.delete_workflow_run` | A workflow run was deleted. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/deleting-a-workflow-run)."
| `workflows.disable_workflow` | A workflow was disabled.
| `workflows.enable_workflow` | A workflow was enabled, after previously being disabled by `disable_workflow`.
| `workflows.reject_workflow_job` | A workflow job was rejected. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."
| `workflows.rerun_workflow_run` | A workflow run was re-run. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."
| `workflows.completed_workflow_run` | A workflow status changed to `completed`. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."
| `workflows.created_workflow_run` | A workflow run was created. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions#create-an-example-workflow)."
| `workflows.prepared_workflow_job` | A workflow job was started. Includes the list of secrets that were provided to the job. Can only be viewed using the REST API. It is not visible in the {% data variables.product.prodname_dotcom %} web interface or included in the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows)."
