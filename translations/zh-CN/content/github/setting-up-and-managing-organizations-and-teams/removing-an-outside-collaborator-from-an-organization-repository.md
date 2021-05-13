---
title: 从组织仓库中删除外部协作者
intro: 所有者和仓库管理员可以删除外部协作者对仓库的访问权限。
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 组织
  - 团队
---

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**警告：**
- 从私有仓库删除外部协作者后，付费许可数不会自动降级。 要在从组织中删除用户后减少付费的许可数，请按照“[降级组织的付费席位](/articles/downgrading-your-organization-s-paid-seats)”中的步骤操作。

- 您负责确保无法访问仓库的人员删除任何机密信息或知识产权。

{% endwarning %}

{% endif %}

尽管删除协作者时将删除私有仓库的复刻，但此人员将仍保留您仓库的任何本地克隆。

### 从组织中的所有仓库删除外部协作者

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. 选择您想要从组织中删除的一个或多个外部协作者。 ![已选择两个外部协作者的外部协作者列表](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. 在外部协作者列表上方，使用下拉菜单，然后单击 **Remove from all repositories（从所有仓库中删除）**。 ![含有删除外部协作者选项的下拉菜单 ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. 查看将从组织中删除的一个或多个外部协作者，然后单击 **Remove outside collaborators（删除外部协作者）**。 ![将被删除的外部协作者列表和删除外部协作者按钮](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

### 从组织的特定仓库中删除外部协作者

如果只是想要从组织的特定仓库中删除外部协作者，则可以一次删除此人员对一个特定仓库的访问权限。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
5. 在您想要删除的人员用户名右侧，使用 {% octicon "gear" aria-label="The Settings gear" %} 下拉菜单，并单击 **Manage（管理）**。 ![管理访问权限按钮](/assets/images/help/organizations/member-manage-access.png)
6. 在您想要从其删除外部协作者的仓库右侧，单击 **Manage access（管理访问权限）**。 ![选择外部协作者具有访问权限的仓库旁边的管理访问权限按钮](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. 要完全删除外部协作者对仓库的访问权限，在右上角单击 **Remove access to this repository（删除对此仓库的访问权限）**。 ![删除此仓库访问权限按钮](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. 要确认，请单击 **Remove access（删除访问权限）**。 ![确认将从仓库中删除的外部协作者](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

### 延伸阅读

- “[将外部协作者添加到组织中的仓库](/articles/adding-outside-collaborators-to-repositories-in-your-organization)”
- "[将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)"
