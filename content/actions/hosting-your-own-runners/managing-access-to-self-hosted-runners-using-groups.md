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
shortTitle: Manage access to runners
---

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
Self-hosted runner groups are used to control access to self-hosted runners at the organization and enterprise level. Enterprise owners can configure access policies that control which organizations {% ifversion restrict-groups-to-workflows %}and workflows {% endif %}in an enterprise have access to the runner group. Organization owners can configure access policies that control which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} in an organization have access to the runner group.

When an enterprise owner grants an organization access to a runner group, organization owners can see the runner group listed in the organization's self-hosted runner settings. The organization owners can then assign additional granular repository{% ifversion restrict-groups-to-workflows %} and workflow{% endif %} access policies to the enterprise runner group.

When new runners are created, they are automatically assigned to the default group. Runners can only be in one group at a time. You can move runners from the default group to another group. For more information, see "[Moving a self-hosted runner to a group](#moving-a-self-hosted-runner-to-a-group)."

## Creating a self-hosted runner group for an organization

All organizations have a single default self-hosted runner group. Organizations within an enterprise account can create additional self-hosted groups. Organization admins can allow individual repositories access to a runner group. For information about how to create a self-hosted runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

Self-hosted runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can move a runner from the default group to any group you create.

When creating a group, you must choose a policy that defines which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
1. Enter a name for your runner group.
 {% data reusables.actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Warning**: {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Under {% ifversion ghes or ghae %}"Runners"{% endif %}, click **Add new**, and then **New group**.

    ![Add runner group](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Enter a name for your runner group, and assign a policy for repository access.

   You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization.{% ifversion ghec or ghes %} By default, only private repositories can access runners in a runner group, but you can override this. This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.{% endif %}
   
   {%- ifversion ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}

   ![Add runner group options](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Click **Save group** to create the group and apply the policy.
{% endif %}

## Creating a self-hosted runner group for an enterprise

Enterprises can add their self-hosted runners to groups for access management. Enterprises can create groups of self-hosted runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. Organization owners can then assign additional granular repository{% ifversion restrict-groups-to-workflows %} or workflow{% endif %} access policies to the enterprise runner groups. For information about how to create a self-hosted runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups).

Self-hosted runners are automatically assigned to the default group when created, and can only be members of one group at a time. You can assign the runner to a specific group during the registration process, or you can later move the runner from the default group to a custom group.

When creating a group, you must choose a policy that defines which organizations have access to the runner group.

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, select the **Organization access** drop-down, and click a policy. You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.{% ifversion ghes %} By default, only private repositories can access runners in a runner group, but you can override this.{% endif %}

   {%- ifversion ghec or ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
   {%- ifversion ghec or ghes %}

   ![Add runner group options](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![Add runner group options](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Click **Save group** to create the group and apply the policy.

{% endif %}

## Changing the access policy of a self-hosted runner group

For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group{% ifversion restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}. For runner groups in an organization, you can change what repositories in the organization can access a runner group{% ifversion restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}.

### Changing what organizations or repositories can access a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. For runner groups in an enterprise, under **Organization access**, modify what organizations can access the runner group. For runner groups in an organization, under **Repository access**, modify what repositories can access the runner group.

   {%- ifversion fpt or ghec or ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}

{% ifversion restrict-groups-to-workflows %}
### Changing what workflows can access a runner group
You can configure a self-hosted runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on self-hosted runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. This setting cannot be overridden if you are configuring an organization's runner group that was shared by an enterprise. 
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. Click {% octicon "gear" aria-label="the gear icon" %}.
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.
   
   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. Click **Save**.

{% endif %}

## Changing the name of a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Change the runner group name.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group %}
1. Change the runner group name.
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

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. In the "Runners" list, click the runner that you want to configure.
2. Select the **Runner group** drop-down.
3. In "Move runner to group", choose a destination group for the runner.
{% elsif ghae or ghes < 3.4 %}
1. In the {% ifversion ghes or ghae %}"Runner groups"{% endif %} section of the settings page, locate the current group of the runner you want to move and expand the list of group members.
    ![View runner group members](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Select the checkbox next to the self-hosted runner, and then click **Move to group** to see the available destinations.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. To move the runner, click on the destination group.
    ![Runner group member move](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}

## Removing a self-hosted runner group

Self-hosted runners are automatically returned to the default group when their group is removed.

{% ifversion ghes or ghae or ghec %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. To remove the group, click **Remove group**.
3. Review the confirmation prompts, and click **Remove this runner group**.

{% endif %}
{% endif %}
