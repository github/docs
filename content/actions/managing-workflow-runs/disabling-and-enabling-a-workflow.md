---
title: Disabling and enabling a workflow
intro: 'You can disable and re-enable a workflow using the {% data variables.product.prodname_dotcom %} UI, the REST API, or {% data variables.product.prodname_cli %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
shortTitle: Disable & enable a workflow
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Disabling a workflow allows you to stop a workflow from being triggered without having to delete the file from the repo. You can easily re-enable the workflow again on {% data variables.product.prodname_dotcom %}.

Temporarily disabling a workflow can be useful in many scenarios. These are a few examples where disabling a workflow might be helpful:

- A workflow error that produces too many or wrong requests, impacting external services negatively.
- A workflow that is not critical and is consuming too many minutes on your account.
- A workflow that sends requests to a service that is down.
- Workflows on a forked repository that aren't needed (for example, scheduled workflows).

{% warning %}

**Warning:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

## Disabling and enabling workflows with the {% data variables.product.prodname_dotcom %} UI

### Disabling a workflow

You can manually disable a workflow so that it won't execute any workflow runs. A disabled workflow is not deleted, and can be re-enabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to disable.
![actions select workflow](/assets/images/actions-select-workflow.png)
1. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![actions kebab menu](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Click **Disable workflow**.
![actions disable workflow](/assets/images/help/repository/actions-disable-workflow.png)
The disabled workflow is marked {% octicon "stop" aria-label="The stop icon" %} to indicate its status.
![actions list disabled workflow](/assets/images/help/repository/actions-find-disabled-workflow.png)

### Enabling a workflow

You can re-enable a workflow that was previously disabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to enable.
![actions select disabled workflow](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Click **Enable workflow**.
![actions enable workflow](/assets/images/help/repository/actions-enable-workflow.png)

## Disabling and enabling workflows with {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

To disable a workflow, use the `workflow disable` subcommand. Replace `workflow` with either the name, ID, or file name of the workflow you want to disable. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow disable <em>workflow</em>
```

To enable a workflow, use the `workflow enable` subcommand. Replace `workflow` with either the name, ID, or file name of the workflow you want to enable. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow enable <em>workflow</em>
```

## Disabling and enabling workflows through the REST API

You can also disable and enable a workflow using the REST API. For more information, see the "[Actions REST API](/rest/reference/actions#workflows)."
