---
title: Using labels with self-hosted runners
intro: You can use labels to organize your self-hosted runners based on their characteristics.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

For information on how to use labels to route jobs to specific types of self-hosted runners, see "[Using self-hosted runners in a workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)." {% ifversion target-runner-groups %}You can also route jobs to runners in a specific group. For more information, see "[Targeting runners in a group](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group)."{% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## Creating a custom label

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
 {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.
 1. In the "Find or create a label" field, type the name of your new label and click **Create new label**.
 The custom label is created and assigned to the self-hosted runner. Custom labels can be removed from self-hosted runners, but they currently can't be manually deleted. {% data reusables.actions.actions-unused-labels %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. In the "Filter labels" field, type the name of your new label, and click **Create new label**.
    ![Add runner label](/assets/images/help/settings/actions-add-runner-label.png)
    
The custom label is created and assigned to the self-hosted runner. Custom labels can be removed from self-hosted runners, but they currently can't be manually deleted. {% data reusables.actions.actions-unused-labels %}
{% endif %}

## Assigning a label to a self-hosted runner

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.runner-label-settings %}
  1. To assign a label to your self-hosted runner, in the "Find or create a label" field, click the label. 
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Click on a label to assign it to your self-hosted runner. 
{% endif %}

## Removing a custom label from a self-hosted runner

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.runner-label-settings %}
  1. In the "Find or create a label" field, assigned labels are marked with the {% octicon "check" aria-label="The Check icon" %} icon. Click on a marked label to unassign it from your self-hosted runner. 
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Click on the assigned label to remove it from your self-hosted runner. {% data reusables.actions.actions-unused-labels %}
{% endif %}

## Programmatically assign labels

You can programmatically assign labels to a self-hosted runner after the runner is created, or during its initial configuration.

* To programmatically assign labels to an existing self-hosted runner, you must use the REST API. For more information, see the "[Self-hosted runners](/rest/actions/self-hosted-runners)" REST API.
* To programmatically assign labels to a self-hosted runner during the initial runner configuration, you can pass label names to the `config` script using the `labels` parameter.

  {% note %}
  
  **Note:** You cannot use the `config` script to assign labels to an existing self-hosted runner.
  
  {% endnote %}

  For example, this command assigns a label named `gpu` when configuring a new self-hosted runner:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  The label is created if it does not already exist. You can also use this approach to assign the default labels to runners, such as `x64` or `linux`. When default labels are assigned using the configuration script, {% data variables.product.prodname_actions %} accepts them as given and does not validate that the runner is actually using that operating system or architecture.

  You can use comma separation to assign multiple labels. For example:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** Note:** If you replace an existing runner, then you must reassign any custom labels.

  {% endnote %}
