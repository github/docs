---
title: Deleting a workflow run
shortTitle: Delete a workflow run
intro: 'You can delete a workflow run that has been completed, or is more than two weeks old.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/managing-workflow-runs/deleting-a-workflow-run
---

{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. To delete a workflow run, select {% octicon "kebab-horizontal" aria-label="Show options" %}, then click **Delete workflow run**.

   ![Screenshot of a list of workflow runs. To the right of a run, an icon of three horizontal dots is highlighted with an orange outline.](/assets/images/help/settings/workflow-delete-run.png)

1. Review the confirmation prompt and click **Yes, permanently delete this workflow run**.
