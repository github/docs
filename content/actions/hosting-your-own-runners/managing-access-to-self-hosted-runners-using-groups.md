---
title: Managing access to self-hosted runners using groups
intro: You can use policies to limit access to self-hosted runners that have been added to an organization or enterprise.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
shortTitle: Manage access groups
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About self-hosted runner groups

{% ifversion fpt %}
{% note %}

**Note:** All organizations have a single default self-hosted runner group. Only enterprise accounts and organizations owned by enterprise accounts can create and manage additional self-hosted runner groups.

{% endnote %}
{% endif %}

Self-hosted runner groups are used to control access to self-hosted runners at the organization and enterprise level. Enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group. Organization admins can configure access policies that control which repositories in an organization have access to the runner group.

When an enterprise admin grants an organization access to a runner group, organization admins can see the runner group listed in the organization's self-hosted runner settings. The organizations admins can then assign additional granular repository access policies to the enterprise runner group.

When new runners are created, they are automatically assigned to the default group. Runners can only be in one group at a time. You can move runners from the default group to another group. For more information, see "[Moving a self-hosted runner to a group](#moving-a-self-hosted-runner-to-a-group)."

## Creating a self-hosted runner group for an organization

All organizations have a single default self-hosted runner group. Organizations within an enterprise account can create additional self-hosted groups. Organization admins can allow individual repositories access to a runner group.

Self-hosted runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can move a runner from the default group to any group you create.

When creating a group, you must choose a policy that defines which repositories have access to the runner group.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. In the {% ifversion fpt %}"Runners"{% else %}"Self-hosted runners"{% endif %} section, click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Enter a name for your runner group, and assign a policy for repository access.

   {% ifversion fpt or ghes > 2.22 or ghae %} You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization. By default, only private repositories can access runners in a runner group, but you can override this.{% elsif ghes = 2.22 %}You can configure a runner group to be accessible to a specific list of repositories, all private repositories, or all repositories in the organization.{% endif %}

   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

   ![Add runner group options](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Click **Save group** to create the group and apply the policy.

## Creating a self-hosted runner group for an enterprise

Enterprises can add their self-hosted runners to groups for access management. Enterprises can create groups of self-hosted runners that are accessible to specific organizations in the enterprise account. Organization admins can then assign additional granular repository access policies to the enterprise runner groups.

Self-hosted runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can assign the runner to a specific group during the registration process, or you can later move the runner from the default group to a custom group.

When creating a group, you must choose a policy that defines which organizations have access to the runner group.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. Enter a name for your runner group, and assign a policy for organization access.

   {% ifversion fpt or ghes > 2.22 or ghae %} You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise. By default, only private repositories can access runners in a runner group, but you can override this.{% elsif ghes = 2.22 %}You can configure a runner group to be accessible to all organizations in the enterprise or choose specific organizations.{% endif %}

   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

    ![Add runner group options](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. Click **Save group** to create the group and apply the policy.

## Changing the access policy of a self-hosted runner group

You can update the access policy of a runner group, or rename a runner group.

{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}
    
## Automatically adding a self-hosted runner to a group

You can use the configuration script to automatically add a new self-hosted runner to a group. For example, this command registers a new self-hosted runner and uses the `--runnergroup` parameter to add it to a group named `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

The command will fail if the runner group doesn't exist:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```

## Moving a self-hosted runner to a group

If you don't specify a runner group during the registration process, your new self-hosted runners are automatically assigned to the default group, and can then be moved to another group.

1. In the {% ifversion fpt %}"Runners"{% else %}"Self-hosted runners"{% endif %} section of the settings page, locate the current group of the runner you want to move and expand the list of group members.
    ![View runner group members](/assets/images/help/settings/actions-org-runner-group-members.png)
1. Select the checkbox next to the self-hosted runner, and then click **Move to group** to see the available destinations.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move.png)
1. To move the runner, click on the destination group.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)

## Removing a self-hosted runner group

Self-hosted runners are automatically returned to the default group when their group is removed.

1. In the {% ifversion fpt %}"Runners"{% else %}"Self-hosted runners"{% endif %} section of the settings page, locate the group you want to delete, and click the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} button.
    ![View runner group settings](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. To remove the group, click **Remove group**.
    ![View runner group settings](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Review the confirmation prompts, and click **Remove this runner group**.
