---
title: Disabling and enabling a workflow
intro: '{% data variables.product.prodname_dotcom %} または REST API を使用して、ワークフローを無効化したり、再度有効化したりすることができます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

Disabling a workflow allows you to stop a workflow from being triggered without having to delete the file from the repo. You can easily re-enable the workflow again on {% data variables.product.prodname_dotcom %}. REST API を使用して、ワークフローを無効化または有効化することもできます。 詳しい情報については、「[アクション REST API](/rest/reference/actions#workflows)」を参照してください。

Temporarily disabling a workflow can be useful in many scenarios. These are a few examples where disabling a workflow might be helpful:

- A workflow error that produces too many or wrong requests, impacting external services negatively.
- A workflow that is not critical and is consuming too many minutes on your account.
- A workflow that sends requests to a service that is down.
- Workflows on a forked repository that aren't needed (for example, scheduled workflows).

{% warning %}

**警告：** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

### Disabling a workflow

You can manually disable a workflow so that it won't execute any workflow runs. A disabled workflow is not deleted, and can be re-enabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to disable. ![アクション選択ワークフロー](/assets/images/actions-select-workflow.png)
1. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![actions kebab menu](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Click **Disable workflow**. ![actions disable workflow](/assets/images/help/repository/actions-disable-workflow.png) The disabled workflow is marked {% octicon "stop" aria-label="The stop icon" %} to indicate its status. ![actions list disabled workflow](/assets/images/help/repository/actions-find-disabled-workflow.png)

### Enabling a workflow

You can re-enable a workflow that was previously disabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to enable. ![actions select disabled workflow](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Click **Enable workflow**. ![actions enable workflow](/assets/images/help/repository/actions-enable-workflow.png)
