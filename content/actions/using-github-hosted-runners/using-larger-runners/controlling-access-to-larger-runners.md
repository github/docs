---
title: Controlling access to larger runners
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'You can use policies to limit access to {% data variables.actions.hosted_runner %}s that have been added to an organization or enterprise.'
permissions: '{% data reusables.actions.larger-runner-permissions %}'
versions:
  feature: actions-hosted-runners
type: tutorial
redirect_from:
  - /actions/using-github-hosted-runners/controlling-access-to-larger-runners
  - /actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners
---

{% note %}

**Note:** {% data reusables.actions.windows-linux-larger-runners-note %}

{% endnote %}

## About runner groups

{% data reusables.actions.about-runner-groups %}

### Managing access to your runners

{% note %}

**Note**: Before your workflows can send jobs to {% data variables.actions.hosted_runner %}s, you must first configure permissions for the runner group. See the following sections for more information.

{% endnote %}

Runner groups are used to control which repositories can run jobs on your {% data variables.actions.hosted_runner %}s. You must manage access to the group from each level of the management hierarchy, depending on where you've defined the {% data variables.actions.hosted_runner %}:

* **Runners at the enterprise level**: {% data reusables.actions.about-enterprise-level-runner-groups %}
* **Runners at the organization level**: {% data reusables.actions.about-organization-level-runner-groups %}

For example, the following diagram has a runner group named `grp-ubuntu-20.04-16core` at the enterprise level. Before the repository named `octo-repo` can use the runners in the group, you must first configure the group at the enterprise level to allow access to the `octo-org` organization. You must then configure the group at the organization level to allow access to `octo-repo`.

![Diagram showing a runner group defined at the enterprise level with an organization configuration that allows access for two repositories.](/assets/images/help/actions/hosted-runner-mgmt.png)

## Creating a runner group for an organization

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.creating-a-runner-group-for-an-organization %}

{% ifversion ghec or ghes %}

## Creating a runner group for an enterprise

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

{% ifversion ghec %}

## Changing which organizations can access a runner group

{% data reusables.actions.hosted-runner-security-admonition %}

For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group.

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.changing-organization-access-for-a-runner-group %}

{% endif %}

## Changing which repositories can access a runner group

{% data reusables.actions.hosted-runner-security-admonition %}

For runner groups in an organization, you can change what repositories in the organization can access a runner group.

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.changing-repository-access-for-a-runner-group %}

{% ifversion restrict-groups-to-workflows %}

## Changing which workflows can access a runner group

{% data reusables.actions.hosted-runner-security-admonition %}

{% data reusables.actions.about-restricting-workflow-access-with-runner-groups %}

* [Changing which workflows can access an organization runner group](#changing-which-workflows-can-access-an-organization-runner-group)
* [Changing which workflows can access an enterprise runner group](#changing-which-workflows-can-access-an-enterprise-runner-group)

### Changing which workflows can access an organization runner group

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.changing-workflow-access-for-a-runner-group %}

### Changing which workflows can access an enterprise runner group

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.changing-workflow-access-for-a-runner-group %}

{% endif %}

{% ifversion actions-private-networking-azure-vnet %}

## Configuring private network access for larger runners

{% data reusables.actions.azure-vnet-network-configuration-intro %}

If you have configured your {% ifversion ghec %}enterprise or {% endif %}organization to connect to an Azure VNET, you can give runner groups access to the virtual network. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/about-private-networking-with-github-hosted-runners#using-an-azure-virtual-network-vnet)."

{% endif %}

## Changing the name of a runner group

{% ifversion ghec %}
You can rename runner groups at the enterprise and organization levels.

* [Changing the name of an organization runner group](#changing-the-name-of-an-organization-runner-group)
* [Changing the name of an enterprise runner group](#changing-the-name-of-an-enterprise-runner-group)

### Changing the name of an organization runner group

{% endif %}

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec %}

### Changing the name of an enterprise runner group

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.changing-the-name-of-a-runner-group %}
{% endif %}

## Moving a runner to a group

{% data reusables.actions.about-moving-a-runner-to-a-group %}
{% ifversion ghec %}

* [Moving an organization runner to a group](#moving-an-organization-runner-to-a-group)
* [Moving an enterprise runner to a group](#moving-an-enterprise-runner-to-a-group)

### Moving an organization runner to a group

{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.moving-a-runner-to-a-group %}

{% ifversion ghec %}

### Moving an enterprise runner to a group

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.moving-a-runner-to-a-group %}
{% endif %}

## Removing a runner group

{% data reusables.actions.about-removing-a-runner-group %}
{% ifversion ghec %}

* [Removing a runner group from an organization](#removing-a-runner-group-from-an-organization)
* [Removing a runner group from an enterprise](#removing-a-runner-group-from-an-enterprise)

### Removing a runner group from an organization

{% endif %}

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.removing-a-runner-group %}

{% ifversion ghec %}

### Removing a runner group from an enterprise

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.removing-a-runner-group %}
{% endif %}
