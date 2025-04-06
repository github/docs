---
title: Managing larger runners
shortTitle: Manage larger runners
intro: 'You can configure {% data variables.actions.hosted_runner %}s for your organization or enterprise.'
permissions: '{% data reusables.actions.larger-runner-permissions %}<br><br> Enterprise or organization owners can manage larger runners.{% ifversion custom-org-roles %} Users with the "Manage organization runners and runner groups" permission can manage larger runners at the organization level.{% endif %}'
versions:
  feature: actions-hosted-runners
redirect_from:
  - /actions/using-github-hosted-runners/managing-larger-runners
  - /actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners
---

> [!NOTE]
> * {% data reusables.actions.windows-linux-larger-runners-note %}

{% ifversion ghec %}

## Adding a {% data variables.actions.hosted_runner %} to an enterprise

Enterprise owners can add {% data variables.actions.hosted_runner %}s to an enterprise and assign them to organizations. By default, when a {% data variables.actions.hosted_runner %} is created for an enterprise, it is added to a default runner group that all organizations in the enterprise have access to. While all organizations are granted access to the runner, the repositories in each organization **are not** granted access. For each organization, an organization owner must configure the runner group to specify which repositories have access to the enterprise runner. For more information, see "[Allowing repositories to access {% data variables.actions.hosted_runner %}s](#allowing-repositories-to-access-larger-runners)."

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.add-hosted-runner %}
{% data reusables.actions.org-access-to-github-hosted-runners %}

{% endif %}

## Adding a {% data variables.actions.hosted_runner %} to an organization

Organization owners{% ifversion custom-org-roles %} and users with the "Manage organization runners and runner groups" permission{% endif %} can add a {% data variables.actions.hosted_runner %} to an organization control which repositories can use it. When you create a new runner for an organization, by default, all repositories in the organization have access to the runner. To limit which repositories can use the runner, assign it to a runner group with access to specific repositories. For more information, see "[Allowing repositories to access larger runners](#allowing-repositories-to-access-larger-runners)."

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.add-hosted-runner %}
1. To allow repositories to access your {% data variables.actions.hosted_runner %}s, add them to the list of repositories that can use it. For more information, see "[Allowing repositories to access {% data variables.actions.hosted_runner %}s](#allowing-repositories-to-access-larger-runners)."

## Allowing repositories to access {% data variables.actions.hosted_runner %}s

Repositories are granted access to {% data variables.actions.hosted_runner %}s through runner groups. Enterprise administrators can choose which organizations are granted access to enterprise-level runner groups, and organization owners{% ifversion custom-org-roles %} and users with the "Manage organization runners and runner groups" permission{% endif %} control repository-level access to all {% data variables.actions.hosted_runner %}s.

Organization owners can use and configure enterprise-level runner groups for the repositories in their organization, or they can create organization-level runner groups to control access.{% ifversion custom-org-roles %} Users with the "Manage organization runners and runner groups" can only manage organization-level runner groups. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."{% endif %}

* **For enterprise-level runner groups**: {% data reusables.actions.about-enterprise-level-runner-groups %}
* **For organization-level runner groups**: {% data reusables.actions.about-organization-level-runner-groups %}

Once a repository has access to {% data variables.actions.hosted_runner %}s, the {% data variables.actions.hosted_runner %}s can be added to workflow files. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/running-jobs-on-larger-runners)."

{% data reusables.actions.runner-groups-org-navigation %}
1. Select a runner group from either list on the page. Organization-level runner groups are listed at the top of the page, and enterprise-level runner groups are listed under "Shared by the Enterprise."
1. On the runner group page, under "Repository access," select **All repositories** or **Selected repositories**. If you choose to grant access to specific repositories, click {% octicon "gear" aria-label="The Settings gear" %}, then select the repositories you would like to grant access to from the list.

> [!WARNING]
> {% data reusables.actions.hosted-runner-security %}
> For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

## Changing the name of a {% data variables.actions.hosted_runner %}

{% data reusables.actions.larger-runner-name-note %}

{% ifversion ghec %}
You can edit the name of your {% data variables.actions.hosted_runner %}s.

* [Changing the name of an organization runner](#changing-the-name-of-an-organization-runner)
* [Changing the name of an enterprise runner](#changing-the-name-of-an-enterprise-runner)

### Changing the name of an organization runner

{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.select-a-larger-runner %}
{% data reusables.actions.rename-larger-runner %}

{% ifversion ghec %}

### Changing the name of an enterprise runner

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.select-a-larger-runner %}
{% data reusables.actions.rename-larger-runner %}
{% endif %}

## Configuring autoscaling for {% data variables.actions.hosted_runner %}s

You can control the maximum number of jobs allowed to run concurrently for specific runner sets. Setting this field to a higher value can help prevent workflows being blocked due to parallelism.

{% ifversion ghec %}
* [Configuring autoscaling for an organization runner](#configuring-autoscaling-for-an-organization-runner)
* [Configuring autoscaling for an enterprise runner](#configuring-autoscaling-for-an-enterprise-runner)

### Configuring autoscaling for an organization runner

{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.select-a-larger-runner %}
{% data reusables.actions.configure-autoscaling-for-larger-runners %}

{% ifversion ghec %}

### Configuring autoscaling for an enterprise runner

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.select-a-larger-runner %}
{% data reusables.actions.configure-autoscaling-for-larger-runners %}
{% endif %}

## Creating static IP addresses for {% data variables.actions.hosted_runner %}s

> [!NOTE]
> To use static IP addresses, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

You can enable static IP addresses for {% data variables.actions.hosted_runner %}s. When you do this, the {% data variables.actions.hosted_runner %}s are assigned static IP address ranges. All IP addresses in the range assigned are usable and not in CIDR notation. By default, you can configure up to 10 different {% data variables.actions.hosted_runner %}s with IP ranges for your account. {% data reusables.actions.larger-runner-static-ip-contact-support %}

The number of available IP addresses in the assigned ranges does not restrict number of concurrent jobs specified for autoscaling. Within a runner pool, there is a load balancer which allows for high reuse of the IP addresses in the assigned ranges. This ensures your workflows can run concurrently at scale while each machine is assigned a static IP address.

{% ifversion ghec %}

* [Creating static IP addresses for organization runners](#creating-static-ip-addresses-for-organization-runners)
* [Creating static IP addresses for enterprise runners](#creating-static-ip-addresses-for-enterprise-runners)

### Creating static IP addresses for organization runners

{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.select-a-larger-runner %}
{% data reusables.actions.networking-for-larger-runners %}

{% ifversion ghec %}

### Creating static IP addresses for enterprise runners

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.select-a-larger-runner %}
{% data reusables.actions.networking-for-larger-runners %}
{% endif %}
