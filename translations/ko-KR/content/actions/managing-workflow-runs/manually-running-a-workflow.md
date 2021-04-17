---
title: Manually running a workflow
intro: 'When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the REST API or from the Actions tab on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Configuring a workflow to run manually

To run a workflow manually, the workflow must be configured to run on the `workflow_dispatch` event. For more information about configuring the `workflow_dispatch` event, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Running a workflow on {% data variables.product.prodname_dotcom %}

To trigger the `workflow_dispatch` event on {% data variables.product.prodname_dotcom %}, your workflow must be in the default branch. Follow these steps to manually trigger a workflow run.

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to run. ![actions select workflow](/assets/images/actions-select-workflow.png)
1. Above the list of workflow runs, select **Run workflow**. ![actions workflow dispatch](/assets/images/actions-workflow-dispatch.png)
1. Select the branch where the workflow will run and type the input parameters used by the workflow. Click **Run workflow**. ![actions manually run workflow](/assets/images/actions-manually-run-workflow.png)

### Running a workflow using the REST API

When using the REST API, you configure the `inputs` and `ref` as request body parameters. If the inputs are omitted, the default values defined in the workflow file are used.

For more information about using the REST API, see the "[Create a workflow dispatch event](/rest/reference/actions/#create-a-workflow-dispatch-event)."
