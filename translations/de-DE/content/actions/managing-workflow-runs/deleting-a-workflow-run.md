---
title: Löschen einer Workflowausführung
intro: 'You can delete a workflow run that has been completed, or is more than two weeks old.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Um eine Workflowausführung zu löschen, verwenden Sie das Dropdownmenü {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} , und wählen Sie **Workflow löschen**.

    ![Löschen einer Workflowausführung](/assets/images/help/settings/workflow-delete-run.png)
2. Überprüfen Sie die Bestätigungsaufforderung, und klicken Sie auf **Ja, löschen Sie diesen Workflow, der**ausgeführt wird.

    ![Löschen einer Workflowausführungsbestätigung](/assets/images/help/settings/workflow-delete-run-confirmation.png)
