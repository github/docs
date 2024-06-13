---
title: Using labels with self-hosted runners
intro: You can use labels to organize your self-hosted runners based on their characteristics.
redirect_from:
  - /actions/hosting-your-own-runners/using-labels-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
---

{% data reusables.actions.enterprise-github-hosted-runners %}

For information on how to use labels to route jobs to specific types of self-hosted runners, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow)." {% ifversion target-runner-groups %}You can also route jobs to runners in a specific group. For more information, see "[AUTOTITLE](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group)."{% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

>[!NOTE]Action Runner Controller does not support multiple labels, to find our more please read our [Action Runner Controller documentation](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller#using-arc-runners-in-a-workflow)

## Creating a custom label

You can create custom labels for runners at the repository{% ifversion ghec or ghes %}, organization, and enterprise{% else %} and organization{% endif %} levels.

* [Creating a custom label for a repository runner](#creating-a-custom-label-for-a-repository-runner)
* [Creating a custom label for an organization runner](#creating-a-custom-label-for-an-organization-runner){% ifversion ghec or ghes %}
* [Creating a custom label for an enterprise runner](#creating-a-custom-label-for-an-enterprise-runner){% endif %}

{% note %}

**Note:** Labels are case-insensitive.

{% endnote %}

### Creating a custom label for a repository runner

{% data reusables.actions.self-hosted-runner-navigate-to-repo %}
{% data reusables.actions.self-hosted-runners-create-label-steps %}

### Creating a custom label for an organization runner

{% data reusables.actions.self-hosted-runner-navigate-to-org %}
{% data reusables.actions.self-hosted-runners-create-label-steps %}

{% ifversion ghec or ghes %}

### Creating a custom label for an enterprise runner

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.self-hosted-runners-create-label-steps %}

{% endif %}

## Assigning a label to a self-hosted runner

You can assign labels to self-hosted runners at the repository{% ifversion ghec or ghes %}, organization, and enterprise{% else %} and organization{% endif %} levels.

* [Assigning a label to a repository runner](#assigning-a-label-to-a-repository-runner)
* [Assigning a label to an organization runner](#assigning-a-label-to-an-organization-runner){% ifversion ghec or ghes %}
* [Assigning a label to an enterprise runner](#assigning-a-label-to-an-enterprise-runner){% endif %}

### Assigning a label to a repository runner

{% data reusables.actions.self-hosted-runner-navigate-to-repo %}
{% data reusables.actions.self-hosted-runner-assign-label-steps %}

### Assigning a label to an organization runner

{% data reusables.actions.self-hosted-runner-navigate-to-org %}
{% data reusables.actions.self-hosted-runner-assign-label-steps %}

{% ifversion ghec or ghes %}

### Assigning a label to an enterprise runner

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-assign-label-steps %}

{% endif %}

## Removing a custom label from a self-hosted runner

You can remove custom labels from self-hosted runners at the repository{% ifversion ghec or ghes %}, organization, and enterprise{% else %} and organization{% endif %} levels.

* [Removing a custom label from a repository runner](#removing-a-custom-label-from-a-repository-runner)
* [Removing a custom label from an organization runner](#removing-a-custom-label-from-an-organization-runner){% ifversion ghec or ghes %}
* [Removing a custom label from an enterprise runner](#removing-a-custom-label-from-an-enterprise-runner){% endif %}

### Removing a custom label from a repository runner

{% data reusables.actions.self-hosted-runner-navigate-to-repo %}
{% data reusables.actions.self-hosted-runner-remove-label-steps %}

### Removing a custom label from an organization runner

{% data reusables.actions.self-hosted-runner-navigate-to-org %}
{% data reusables.actions.self-hosted-runner-remove-label-steps %}

{% ifversion ghec or ghes %}

### Removing a custom label from an enterprise runner

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.self-hosted-runner-remove-label-steps %}

{% endif %}

## Programmatically assign labels

You can programmatically assign labels to a self-hosted runner after the runner is created, or during its initial configuration.

* To programmatically assign labels to an existing self-hosted runner, you must use the REST API. For more information, see "[AUTOTITLE](/rest/actions/self-hosted-runners)."
* To programmatically assign labels to a self-hosted runner during the initial runner configuration, you can pass label names to the `config` script using the `labels` parameter.

  {% note %}

  **Note:** You cannot use the `config` script to assign labels to an existing self-hosted runner.

  {% endnote %}

  For example, this command assigns a label named `gpu` when configuring a new self-hosted runner:

  ```shell
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  The label is created if it does not already exist. You can also use this approach to assign the default labels to runners, such as `x64` or `linux`. When default labels are assigned using the configuration script, {% data variables.product.prodname_actions %} accepts them as given and does not validate that the runner is actually using that operating system or architecture.

  You can use comma separation to assign multiple labels. For example:

  ```shell
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  **Note:** If you replace an existing runner, then you must reassign any custom labels.

  {% endnote %}
