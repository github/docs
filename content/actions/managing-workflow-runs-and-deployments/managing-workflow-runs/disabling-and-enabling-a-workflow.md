---
title: Disabling and enabling a workflow
intro: 'You can disable and re-enable a workflow using the {% data variables.product.prodname_dotcom %} UI, the REST API, or {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
redirect_from:
  - /actions/managing-workflow-runs/disabling-and-enabling-a-workflow
  - /actions/using-workflows/disabling-and-enabling-a-workflow
---

{% data reusables.actions.enterprise-github-hosted-runners %}

Disabling a workflow allows you to stop a workflow from being triggered without having to delete the file from the repo. You can easily re-enable the workflow again on {% data variables.product.prodname_dotcom %}.

Temporarily disabling a workflow can be useful in many scenarios. These are a few examples where disabling a workflow might be helpful:

* A workflow error that produces too many or wrong requests, impacting external services negatively.
* A workflow that is not critical and is consuming too many minutes on your account.
* A workflow that sends requests to a service that is down.
* Workflows on a forked repository that aren't needed (for example, scheduled workflows).

> [!WARNING]
> {% data reusables.actions.scheduled-workflows-disabled %}

You can also disable and enable a workflow using the REST API. For more information, see [AUTOTITLE](/rest/actions/workflows).

## Disabling a workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to disable.
1. Click {% octicon "kebab-horizontal" aria-label="Show workflow options" %} to display a dropdown menu and click **Disable workflow**.

   ![Screenshot of a workflow. The "Show workflow options" button, shown with a kebab icon, and the "Disable workflow" menu item are outlined in orange.](/assets/images/help/repository/actions-disable-workflow-2022.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To disable a workflow, use the `workflow disable` subcommand. Replace `workflow` with either the name, ID, or file name of the workflow you want to disable. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow disable WORKFLOW
```

{% endcli %}

## Enabling a workflow

{% webui %}

You can re-enable a workflow that was previously disabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to enable.

   ![Screenshot of the "Actions" page. In the left sidebar, a workflow name is highlighted with an outline in dark orange.](/assets/images/help/repository/actions-select-disabled-workflow-2022.png)

1. Click **Enable workflow**.

{% endwebui %}

{% cli %}

To enable a workflow, use the `workflow enable` subcommand. Replace `workflow` with either the name, ID, or file name of the workflow you want to enable. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow enable WORKFLOW
```

{% endcli %}
