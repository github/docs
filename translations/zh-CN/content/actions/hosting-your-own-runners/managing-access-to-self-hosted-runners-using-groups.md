---
title: 使用组管理自托管运行器的访问权限
intro: 您可以使用策略来限制对已添加到组织或企业的自托管运行器的访问。
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
shortTitle: Manage runner groups
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## 关于自托管运行器组

{% ifversion fpt %}
{% note %}

**注：**所有组织都有一个默认的自托管运行器组。 只有企业帐户和企业帐户拥有的组织才能创建和管理其他自托管的运行器组。

{% endnote %}
{% endif %}

自托管运行器组用于控制对组织和企业级自托管运行器的访问。 企业管理员可以配置访问策略，用以控制企业中的哪些组织可以访问运行器组。 组织管理员可以配置访问策略，用以控制组织中的哪些组织可以访问运行器组。

当企业管理员授予组织对运行器组的访问权限时，组织管理员可以看到组织的自托管运行器设置中列出的运行器组。 然后，组织管理员可以为企业运行器组分配其他细致的仓库访问策略。

新运行器在创建时，将自动分配给默认组。 运行器每次只能在一个组中。 您可以将运行器从默认组移到另一组。 更多信息请参阅“[将自托管运行器移动到组](#moving-a-self-hosted-runner-to-a-group)”。

## 为组织创建自托管的运行器组

所有组织都有一个默认的自托管运行器组。 企业帐户中的组织可以创建其他自托管组。 组织管理员可以允许单个仓库访问运行器组。

自托管运行器在创建时会自动分配给默认组，并且每次只能成为一个组的成员。 您可以将运行器从默认组移到您创建的任何组。

创建组时，必须选择用于定义哪些仓库有权访问运行器组的策略。

{% ifversion fpt %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
 {% data reusables.github-actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Warning**: {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”。

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.settings-sidebar-actions-runners %}
1. In the "Self-hosted runners" section, click **Add new**, and then **New group**.

    ![添加运行器组](/assets/images/help/settings/actions-org-add-runner-group.png)
1. 输入运行程序组的名称，并分配仓库访问策略。

   {% ifversion ghes > 2.22 or ghae %} 您可以配置一个运行器组可供一组特定的仓库或组织中所有仓库访问。 默认情况下，只有私有仓库可以访问运行器组中的运行器，但您可以覆盖此设置。 This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.{% endif %}{% ifversion ghes = 2.22 %}You can configure a runner group to be accessible to a specific list of repositories, all private repositories, or all repositories in the organization.{% endif %}

   {% warning %}

   **警告**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”。

   {% endwarning %}

   ![添加运行器组选项](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. 单击 **Save group（保存组）**创建组并应用策略。
{% endif %}


## 为企业创建自托管运行器组

企业可以将其自托管的运行器添加到组以进行访问管理。 企业可以创建供企业帐户中特定组织访问的自托管运行器组。 然后，组织管理员可以为企业运行器组分配其他细致的仓库访问策略。

自托管运行器在创建时会自动分配给默认组，并且每次只能成为一个组的成员。 您可以在注册过程中将运行器分配给特定组，也可以稍后将运行器从默认组移到自定义组。

创建组时，必须选择用于定义哪些组织有权访问运行器组的策略。

{% ifversion fpt %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Click **New runner group**.
 {% data reusables.github-actions.runner-group-assign-policy-org %}

   {% warning %}

   **警告**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”。

   {% endwarning %}
{% data reusables.github-actions.self-hosted-runner-create-group %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. 单击 **Add new（新增）**，然后单击 **New group（新组）**。

    ![添加运行器组](/assets/images/help/settings/actions-enterprise-account-add-runner-group.png)
1. 输入运行程序组的名称，并分配组织访问策略。

   {% ifversion fpt or ghes > 2.22 or ghae %} 您可以配置运行器组供特定的组织列表或企业中所有组织访问。 默认情况下，只有私有仓库可以访问运行器组中的运行器，但您可以覆盖此设置。 This setting can't be overridden if configuring an organization's runner group that was shared by an enterprise.{% elsif ghes = 2.22 %}You can configure a runner group to be accessible to all organizations in the enterprise or choose specific organizations.{% endif %}

   {% warning %}

   **警告**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”。

   {% endwarning %}

    ![添加运行器组选项](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
1. 单击 **Save group（保存组）**创建组并应用策略。
{% endif %}

## 更改自托管运行器组的访问策略

您可以更新运行器组的访问策略，或重命名运行器组。
{% ifversion fpt %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.settings-sidebar-actions-runner-groups-selection %}
1. Modify the access options, or change the runner group name.

   {% warning %}

   **警告**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”。

   {% endwarning %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.github-actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}
## Automatically adding a self-hosted runner to a group

You can use the configuration script to automatically add a new self-hosted runner to a group. For example, this command registers a new self-hosted runner and uses the `--runnergroup` parameter to add it to a group named `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

The command will fail if the runner group doesn't exist:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```

## 将自托管的运行器移动到组

If you don't specify a runner group during the registration process, your new self-hosted runners are automatically assigned to the default group, and can then be moved to another group.
{% ifversion fpt %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
1. In the "Runners" list, click the runner that you want to configure.
1. Select the Runner group dropdown menu.
1. In "Move runner to group", choose a destination group for the runner.
{% endif %}
{% ifversion ghae or ghes %}
1. 在设置页面的{% ifversion fpt %}“Runners（运行器）”{% else %}“Self-hosted runners（自托管运行器）”{% endif %}部分，找到要移动的运行器的当前组，并展开组成员列表。 ![查看运行器组成员](/assets/images/help/settings/actions-org-runner-group-members.png)
1. 选中自托管运行器旁边的复选框，然后单击 **Move to group（移动到组）**以查看可用的目的地。 ![运行器组成员移动](/assets/images/help/settings/actions-org-runner-group-member-move.png)
1. 要移动运行器，请单击目标组。 ![运行器组成员移动](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}
## 删除自托管运行器组

自托管运行器在其组被删除时将自动返回到默认组。

{% ifversion fpt %}
{% data reusables.github-actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. In the list of groups, to the right of the group you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
1. 要删除组，请单击 **Remove group（删除组）**。
1. 查看确认提示，然后单击 **Remove this runner group（删除此运行器组）**。
{% endif %}
{% ifversion ghae or ghes %}
1. 在设置页面的{% ifversion fpt %}“Runners（运行器）”{% else %}“Self-hosted runners（自托管运行器）”{% endif %}部分，找到要删除的组，然后单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 按钮。 ![查看运行器组设置](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. 要删除组，请单击 **Remove group（删除组）**。 ![查看运行器组设置](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. 查看确认提示，然后单击 **Remove this runner group（删除此运行器组）**。
{% endif %}
