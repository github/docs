---
title: Reviewing deployments
shortTitle: Review deployments
intro: You can approve or reject jobs awaiting review.
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---


## About required reviews in workflows

Jobs that reference an environment configured with required reviewers will wait for an approval before starting. While a job is awaiting approval, it has a status of "Waiting". If a job is not approved within 30 days, it will automatically fail.

For more information about environments and required approvals, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)." For information about how to review deployments with the REST API, see "[AUTOTITLE](/rest/actions#workflow-runs)."

## Approving or rejecting a job

1. Navigate to the workflow run that requires review. For more information about navigating to a workflow run, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."
1. If the run requires review, you will see a notification for the review request. On the notification, click **Review deployments**.
1. Select the job environment(s) to approve or reject. Optionally, leave a comment.
1. Approve or reject:
   - To approve the job, click **Approve and deploy**. Once a job is approved (and any other deployment protection rules have passed), the job will proceed. At this point, the job can access any secrets stored in the environment.
   - To reject the job, click **Reject**. If a job is rejected, the workflow will fail.

{% ifversion deployments-prevent-self-approval %}{% note %}

**Note:** If the targeted environment is configured to prevent self-approvals for deployments, you will not be able to approve a deployment from a workflow run you initiated. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment#required-reviewers)."

{% endnote %}{% endif %}

{% ifversion actions-break-glass %}

## Bypassing deployment protection rules

If you have configured deployment protection rules that control whether software can be deployed to an environment, you can bypass these rules and force all pending jobs referencing the environment to proceed.

{% note %}

**Notes:**

- You cannot bypass deployment protection rules if the environment has been configured to prevent admins from bypassing configured protection rules. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment#creating-an-environment)."
- You can only bypass deployment protection rules during workflow execution when a job referencing the environment is in a "Pending" state.

{% endnote %}

1. Navigate to the workflow run. For more information about navigating to a workflow run, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."
1. To the right of **Deployment protection rules**, click **Start all waiting jobs**.
   ![Screenshot of the "Deployment protection rules" section with the "Start all waiting jobs" button outlined in orange.](/assets/images/actions-bypass-env-protection-rules.png)
1. In the pop-up window, select the environments for which you want to bypass deployment protection rules.
1. Under **Leave a comment**, enter a description for bypassing the deployment protection rules.
1. Click **I understand the consequences, start deploying**.
{% endif %}
