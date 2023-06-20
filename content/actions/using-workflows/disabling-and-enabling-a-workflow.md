---
title: Disabling and enabling a workflow
intro: 'You can disable and re-enable a workflow using the {% data variables.product.prodname_dotcom %} UI, the REST API, or {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
redirect_from:
  - /actions/managing-workflow-runs/disabling-and-enabling-a-workflow
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

Disabling a workflow allows you to stop a workflow from being triggered without having to delete the file from the repo. You can easily re-enable the workflow again on {% data variables.product.prodname_dotcom %}.

Temporarily disabling a workflow can be useful in many scenarios. These are a few examples where disabling a workflow might be helpful:

- A workflow error that produces too many or wrong requests, impacting external services negatively.
- A workflow that is not critical and is consuming too many minutes on your account.
- A workflow that sends requests to a service that is down.
- Workflows on a forked repository that aren't needed (for example, scheduled workflows).

{% warning %}

**Warning:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

You can also disable and enable a workflow using the REST API. For more information, see the "[AUTOTITLE](/rest/actions#workflows)."

## Disabling a workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to disable.
1. Click {% octicon "kebab-horizontal" aria-label="Show workflow options" %} to display a dropdown menu and click **Disable workflow**.

   {% ifversion workflow-nav-2022 -%}
   ![Screenshot of a workflow. The "Show workflow options" button, labeled with a horizontal kebab icon, and the "Disable workflow" menu item are outlined in dark orange.](/assets/images/help/repository/actions-disable-workflow-2022.png)
   {%- else -%}
   ![Screenshot of a workflow. Features apart from the "Disable workflow" menu item are grayed out.](/assets/images/help/repository/actions-disable-workflow.png)

   The disabled workflow is marked {% octicon "stop" aria-label="The stop icon" %} to indicate its status.

   ![Screenshot showing the actions list. The name of the disabled "Greet Everyone" workflow is prefixed with a stop icon.](/assets/images/help/repository/actions-find-disabled-workflow.png)
   {%- endif %}

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

   {% ifversion workflow-nav-2022 -%}
   ![Screenshot of the "Actions" page. In the left sidebar, a workflow name is highlighted with an outline in dark orange.](/assets/images/help/repository/actions-select-disabled-workflow-2022.png)
   {%- else -%}
   ![Screenshot of the "Actions" page. Features are grayed out apart from one workflow name in the left sidebar.](/assets/images/help/repository/actions-select-disabled-workflow.png)
   {%- endif %}
1. Click **Enable workflow**.

{% endwebui %}

{% cli %}

To enable a workflow, use the `workflow enable` subcommand. Replace `workflow` with either the name, ID, or file name of the workflow you want to enable. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow enable WORKFLOW
```

{% endcli %}
