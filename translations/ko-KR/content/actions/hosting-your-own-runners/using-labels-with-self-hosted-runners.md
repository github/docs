---
title: Using labels with self-hosted runners
intro: You can use labels to organize your self-hosted runners based on their characteristics.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

For information on how to use labels to route jobs to specific types of self-hosted runners, see "[Using self-hosted runners in a workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)."

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

### Creating a custom label

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. In the "Filter labels" field, type the name of your new label, and click **Create new label**. ![Add runner label](/assets/images/help/settings/actions-add-runner-label.png)

The custom label is created and assigned to the self-hosted runner. Custom labels can be removed from self-hosted runners, but they currently can't be manually deleted. {% data reusables.github-actions.actions-unused-labels %}

### Assigning a label to a self-hosted runner

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. Click on a label to assign it to your self-hosted runner.

### Removing a custom label from a self-hosted runner

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. Click on the assigned label to remove it from your self-hosted runner. {% data reusables.github-actions.actions-unused-labels %}

### Using the configuration script to create and assign labels

You can use the configuration script on the self-hosted runner to create and assign custom labels. For example, this command assigns a label named `gpu` to the self-hosted runner.

```shell
./config.sh --labels gpu
```

The label is created if it does not already exist. You can also use this approach to assign the default labels to runners, such as `x64` or `linux`. When default labels are assigned using the configuration script, {% data variables.product.prodname_actions %} accepts them as given and does not validate that the runner is actually using that operating system or architecture.

You can use comma separation to assign multiple labels. 예시:

```shell
./config.sh --labels gpu,x64,linux
```

{% note %}

** Note:** If you replace an existing runner, then you must reassign any custom labels.

{% endnote %}
