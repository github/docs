---
title: Canceling a workflow run
shortTitle: Cancel a workflow run
intro: 'You can cancel a workflow run, including all jobs and steps, that is in progress.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: '{% data reusables.repositories.permissions-statement-write %}'
redirect_from:
  - /actions/managing-workflow-runs/canceling-a-workflow
  - /actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow
  - /actions/how-tos/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow
---

## Canceling a workflow run

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. From the list of workflow runs, click the name of the `queued` or `in progress` run that you want to cancel.
1. In the upper-right corner of the workflow, click **Cancel workflow**.
![Screenshot showing the summary for a workflow that is currently running. The "Cancel workflow" button is highlighted with a dark orange outline.](/assets/images/help/repository/cancel-check-suite-updated.png)

## Next steps

To learn about the process {% data variables.product.prodname_dotcom %} uses to cancel a workflow run, as well as the ways you can free up related resources, see [AUTOTITLE](/actions/reference/workflow-cancellation-reference).
