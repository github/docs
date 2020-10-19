---
title: 设置组织的基本权限
intro: 您可以为组织拥有的仓库设置基本权限。
permissions: 组织所有者可设置组织的基本权限。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于组织的基本权限

您可以在访问组织的任何仓库时设置适用于组织所有成员的基本权限。 基本权限不适用于外部协作者。

{% if currentVersion == "free-pro-team@latest" %}By default, members of an organization will have **Read** permissions to the organization's repositories.{% endif %}

如果拥有组织仓库管理员权限的人向组织成员授予更高级别的仓库权限，则更高级别的权限将覆盖基本权限。

### 设置基本权限

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Base permissions（基本权限）”下，使用下拉菜单选择新的基本权限。 ![从基本权限下拉菜单中选择新的权限级别](/assets/images/help/organizations/base-permissions-drop-down.png)
6. 审查更改。 要确认，请单击 **Change default permission to PERMISSION（将默认权限更改为所设权限）**。 ![审查并确认基本权限的更改](/assets/images/help/organizations/base-permissions-confirm.png)

### 延伸阅读

- “[组织的仓库权限级别](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)”
- “[将外部协作者添加到组织中的仓库](/github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization)”
