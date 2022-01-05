---
title: Managing access to self-hosted runners using groups
intro: You can use policies to limit access to self-hosted runners that have been added to an organization or enterprise.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Manage runner groups
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About self-hosted runner groups

{% ifversion fpt %}
{% note %}

**Note:** All organizations have a single default self-hosted runner group. Only enterprise accounts and organizations owned by enterprise accounts can create and manage additional self-hosted runner groups.

{% endnote %}

Self-hosted runner groups are used to control access to self-hosted runners. Organization admins can configure access policies that control which repositories in an organization have access to the runner group.

If you use {% data variables.product.prodname_ghe_cloud %}, you can create additional runner groups; enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group; and organization admins can assign additional granular repository access policies to the enterprise runner group. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).
{% endif %}

{% ifversion ghec or ghes or ghae %}
Self-hosted runner groups are used to control access to self-hosted runners at the organization and enterprise level. Enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group. Organization admins can configure access policies that control which repositories in an organization have access to the runner group.

When an enterprise admin grants an organization access to a runner group, organization admins can see the runner group listed in the organization's self-hosted runner settings. The organizations admins can then assign additional granular repository access policies to the enterprise runner group.

When new runners are created, they are automatically assigned to the default group. Runners can only be in one group at a time. You can move runners from the default group to another group. For more information, see "[Moving a self-hosted runner to a group](#moving-a-self-hosted-runner-to-a-group)."

## Creating a self-hosted runner group for an organization

All organizations have a single default self-hosted runner group. Organizations within an enterprise account can create additional self-hosted groups. Organization admins can allow individual repositories access to a runner group. For information about how to create a self-hosted runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

Self-hosted runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can move a runner from the default group to any group you create.

When creating a group, you must choose a policy that defines which repositories have access to the runner group.

{% ifversion ghec %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
 {% data reusables.github-actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Warning**: {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. In the "Self-hosted runners" section, click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Enter a name for your runner group, and assign a policy for repository access.

   {% ifversion ghes or ghae %} You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization. By default, only private repositories can access runners in a runner group, but you can override this. This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.{% endif %}

   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

   ![Add runner group options](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Click **Save group** to create the group and apply the policy.
{% endif %}

## Creating a self-hosted runner group for an enterprise

Enterprises can add their self-hosted runners to groups for access management. Enterprises can create groups of self-hosted runners that are accessible to specific organizations in the enterprise account. Organization admins can then assign additional granular repository access policies to the enterprise runner groups. For information about how to create a self-hosted runner group with the REST API, see the [Enterprise Administration GitHub Actions APIs](/rest/reference/enterprise-admin#github-actions).

Self-hosted runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can assign the runner to a specific group during the registration process, or you can later move the runner from the default group to a custom group.

When creating a group, you must choose a policy that defines which organizations have access to the runner group.

{% ifversion ghec %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Click **New runner group**.
 {% data reusables.github-actions.runner-group-assign-policy-org %}

   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. Enter a name for your runner group, and assign a policy for organization access.

    You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise. By default, only private repositories can access runners in a runner group, but you can override this. This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.

   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}

    ![Add runner group options](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. Click **Save group** to create the group and apply the policy.
{% endif %}
{% endif %}

## Changing the access policy of a self-hosted runner group

You can update the access policy of a runner group, or rename a runner group.
{% ifversion fpt or ghec %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups-selection %}
1. Modify the access options, or change the runner group name.

   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}

{% ifversion ghec or ghes or ghae %}
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
{% ifversion ghec or ghes > 3.1 or ghae %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-org-enterprise %}
1. In the "Runners" list, click the runner that you want to configure.
2. Select the Runner group dropdown menu.
3. In "Move runner to group", choose a destination group for the runner.
{% endif %}
{% ifversion ghes < 3.2 or ghae %}
1. In the "Self-hosted runners" section of the settings page, locate the current group of the runner you want to move and expand the list of group members.
    ![View runner group members](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Select the checkbox next to the self-hosted runner, and then click **Move to group** to see the available destinations.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. To move the runner, click on the destination group.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}
## Removing a self-hosted runner group

Self-hosted runners are automatically returned to the default group when their group is removed.

{% ifversion ghes > 3.1 or ghae or ghec %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. To remove the group, click **Remove group**.
3. Review the confirmation prompts, and click **Remove this runner group**.
{% endif %}
{% ifversion ghes < 3.2 or ghae %}
1. In the "Self-hosted runners" section of the settings page, locate the group you want to delete, and click the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} button.
    ![View runner group settings](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. To remove the group, click **Remove group**.
    ![View runner group settings](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Review the confirmation prompts, and click **Remove this runner group**.
{% endif %}
{% endif %}
