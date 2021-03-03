---
title: Using groups to manage access to AE hosted runners
intro: You can use policies to limit access to {% data variables.actions.hosted_runner %}s that have been added to an organization or enterprise.
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### About {% data variables.actions.hosted_runner %} groups

{% data variables.actions.hosted_runner %} groups are used to control access to {% data variables.actions.hosted_runner %}s at the organization and enterprise level. Enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group. Organization admins can configure access policies that control which repositories in an organization have access to the runner group.

When an enterprise admin grants an organization access to a runner group, organization admins can see the runner group listed in the organization's {% data variables.actions.hosted_runner %} settings. The organizations admins can then assign additional granular repository access policies to the enterprise runner group.

When new runners are created, they are automatically assigned to the default group. Runners can only be in one group at a time. You can move runners from the default group to another group. For more information, see "[Moving an {% data variables.actions.hosted_runner %} to a group](#moving-an-ae-hosted-runner-to-a-group)."

### Creating an {% data variables.actions.hosted_runner %} group for an organization

All organizations have a single default {% data variables.actions.hosted_runner %} group. Organizations within an enterprise account can create additional runner groups. Organization admins can allow individual repositories access to a runner group.

{% data variables.actions.hosted_runner %}s are automatically assigned to the default group when created, and can only be members of one group at a time. You can move a runner from the default group to any group you create.

When creating a group, you must choose a policy that defines which repositories have access to the runner group.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. In the **Self-hosted runners** section, click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. Enter a name for your runner group, and assign a policy for repository access.

     You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization. By default, only private repositories can access runners in a runner group, but you can override this.
     ![Add runner group options](/assets/images/help/settings/actions-org-add-runner-group-options.png)

1. Click **Save group** to create the group and apply the policy.

### Creating an {% data variables.actions.hosted_runner %} group for an enterprise

Enterprises can add their {% data variables.actions.hosted_runner %}s to groups for access management. Enterprises can create groups of {% data variables.actions.hosted_runner %}s that are accessible to specific organizations in the enterprise account. Organization admins can then assign additional granular repository access policies to the enterprise runner groups.

{% data variables.actions.hosted_runner %}s are automatically assigned to the default group when created, and can only be members of one group at a time. You can assign the runner to a specific group during the registration process, or you can later move the runner from the default group to a custom group.

When creating a group, you must choose a policy that defines which organizations have access to the runner group.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Click the **Self-hosted runners** tab.
1. Click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. Enter a name for your runner group, and assign a policy for organization access.

   You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.  By default, only private repositories can access runners in a runner group, but you can override this.
    ![Add runner group options](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
    
1. Click **Save group** to create the group and apply the policy.

### Changing the access policy of an {% data variables.actions.hosted_runner %} group

You can update the access policy of a runner group, or rename a runner group.

{% data reusables.github-actions.hosted-runner-configure-runner-group-access %}

### Moving an {% data variables.actions.hosted_runner %} to a group

New {% data variables.actions.hosted_runner %}s are automatically assigned to the default group, and can then be moved to another group.

1. In the **Self-hosted runners** section of the settings page, locate the current group of the runner you want to move and expand the list of group members.
![View runner group members](/assets/images/help/settings/actions-hosted-runner-group-members.png)
1. Select the checkbox next to the runner, and then click **Move to group** to see the available destinations.
![Runner group member move](/assets/images/help/settings/actions-hosted-runner-group-member-move.png)
1. To move the runner, click on the destination group.
![Runner group member move](/assets/images/help/settings/actions-hosted-runner-group-member-move-destination.png)

### Removing an {% data variables.actions.hosted_runner %} group

{% data variables.actions.hosted_runner %}s are automatically returned to the default group when their group is removed.

1. In the **Self-hosted runners** section of the settings page, locate the group you want to delete, and click the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} button.
    ![View runner group settings](/assets/images/help/settings/actions-hosted-runner-group-kebab.png)

1. To remove the group, click **Remove group**.

    ![View runner group settings](/assets/images/help/settings/actions-hosted-runner-group-remove.png)

1. Review the confirmation prompts, and click **Remove this runner group**.
