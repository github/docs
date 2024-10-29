Reusable workflows from public repositories can be referenced using a SHA, a release tag, or a branch name. For more information, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)."

When you re-run a workflow that uses a reusable workflow and the reference is not a SHA, there are some behaviors to be aware of:

* Re-running all jobs in a workflow will use the reusable workflow from the specified reference. For more information about re-running all jobs in a workflow, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow)."
* Re-running failed jobs or a specific job in a workflow will use the reusable workflow from the same commit SHA of the first attempt. For more information about re-running failed jobs in a workflow, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow)." For more information about re-running a specific job in a workflow, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow)."
