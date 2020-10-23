---
title: Deleting a workflow run
intro: 'You can delete a workflow run that has been completed, or is more than two weeks old.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. To delete a workflow run, use the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} drop-down menu, and select **Delete workflow run**.

    ![Deleting a workflow run](/assets/images/help/settings/workflow-delete-run.png)
2. Review the confirmation prompt and click **Yes, permanently delete this workflow run**.

    ![Deleting a workflow run confirmation](/assets/images/help/settings/workflow-delete-run-confirmation.png)
