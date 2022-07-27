---
title: Reviewing deployments
intro: You can approve or reject jobs awaiting review.
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---


## About required reviews in workflows

Jobs that reference an environment configured with required reviewers will wait for an approval before starting. While a job is awaiting approval, it has a status of "Waiting". If a job is not approved within 30 days, the workflow run will be automatically canceled.

For more information about environments and required approvals, see "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)." For information about how to review deployments with the REST API, see "[Workflow Runs](/rest/reference/actions#workflow-runs)."

## Approving or rejecting a job

1. Navigate to the workflow run that requires review. For more information about navigating to a workflow run, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."
2. Click **Review deployments**. 
   ![Review deployments](/assets/images/actions-review-deployments.png)
3. Select the job environment(s) to approve or reject. Optionally, leave a comment.
   ![Approve deployments](/assets/images/actions-approve-deployments.png)
4. Approve or reject:
   - To approve the job, click **Approve and deploy**. Once a job is approved (and any other environment protection rules have passed), the job will proceed. At this point, the job can access any secrets stored in the environment.
   - To reject the job, click **Reject**. If a job is rejected, the workflow will fail.
