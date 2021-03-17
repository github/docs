---
title: Manuelle Ausführung eines Workflows
intro: 'When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the REST API or from the Actions tab on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Configuring a workflow to run manually

To run a workflow manually, the workflow must be configured to run on the `workflow_dispatch` event. For more information about configuring the `workflow_dispatch` event, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Running a workflow on {% data variables.product.prodname_dotcom %}

To trigger the `workflow_dispatch` event on {% data variables.product.prodname_dotcom %}, your workflow must be in the default branch. Führen Sie die folgenden Schritte aus, um eine Workflowausführung manuell auszulösen.

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Klicken Sie in der linken Seitenleiste auf den Workflow, den Sie ausführen möchten. ![Aktionen auswählen Workflow](/assets/images/actions-select-workflow.png)
1. Wählen Sie über der Liste der Workflowausführungen **Workflow ausführen**. ![Aktionsworkflow-Dispatch](/assets/images/actions-workflow-dispatch.png)
1. Wählen Sie die Verzweigung aus, in der der Workflow ausgeführt wird, und geben Sie die Eingabeparameter ein, die vom Workflow verwendet werden. Klicken Sie auf **Workflow ausführen**. ![Aktionen manuell ausgeführt Workflow](/assets/images/actions-manually-run-workflow.png)

### Running a workflow using the REST API

Wenn Sie die REST-API verwenden, konfigurieren Sie die `eingaben` und `ref` als Anforderungstextparameter. Wenn die Eingaben weggelassen werden, werden die in der Workflowdatei definierten Standardwerte verwendet.

Weitere Informationen zur Verwendung der REST-API finden Sie unter "[Erstellen eines Workflow-Dispatch-Ereignisses](/rest/reference/actions/#create-a-workflow-dispatch-event)."
