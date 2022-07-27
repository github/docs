| Action | Description
|--------|------------
| `workflows.approve_workflow_job` | A workflow job was approved. For more information, see "[Reviewing deployments](/actions/managing-workflow-runs/reviewing-deployments)."
| `workflows.cancel_workflow_run` | A workflow run was cancelled. For more information, see "[Canceling a workflow](/actions/managing-workflow-runs/canceling-a-workflow)."
| `workflows.delete_workflow_run` | A workflow run was deleted. For more information, see "[Deleting a workflow run](/actions/managing-workflow-runs/deleting-a-workflow-run)."
| `workflows.disable_workflow` | A workflow was disabled.
| `workflows.enable_workflow` | A workflow was enabled, after previously being disabled by `disable_workflow`.
| `workflows.reject_workflow_job` | A workflow job was rejected. For more information, see "[Reviewing deployments](/actions/managing-workflow-runs/reviewing-deployments)."
| `workflows.rerun_workflow_run` | A workflow run was re-run. For more information, see "[Re-running a workflow](/actions/managing-workflow-runs/re-running-a-workflow)."
{%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4963 %}
| `workflows.completed_workflow_run` | A workflow status changed to `completed`. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history).
| `workflows.created_workflow_run` | A workflow run was created. Can only be viewed using the REST API; not visible in the UI or the JSON/CSV export. For more information, see "[Create an example workflow](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)."
| `workflows.prepared_workflow_job` | A workflow job was started. Includes the list of secrets that were provided to the job. Can only be viewed using the REST API. It is not visible in the the {% data variables.product.prodname_dotcom %} web interface or included in the JSON/CSV export. For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows)."
{%- endif %}
