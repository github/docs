---
title: 设置组织的基本权限
intro: 您可以为组织拥有的仓库设置基本权限。
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 设置基本权限
---

## 关于组织的基本权限

您可以在访问组织的任何仓库时设置适用于组织所有成员的基本权限。 基本权限不适用于外部协作者。

{% ifversion fpt or ghec %}默认情况下，组织成员具有对组织仓库的**读取**权限。{% endif %}

If someone with admin access to an organization's repository grants a member a higher level of access for the repository, the higher level of access overrides the base permission.

{% ifversion ghec %}
If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

## 设置基本权限

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Base permissions（基本权限）”下，使用下拉菜单选择新的基本权限。 ![从基本权限下拉菜单中选择新的权限级别](/assets/images/help/organizations/base-permissions-drop-down.png)
6. 审查更改。 要确认，请单击 **Change default permission to PERMISSION（将默认权限更改为所设权限）**。 ![审查并确认基本权限的更改](/assets/images/help/organizations/base-permissions-confirm.png)

## 延伸阅读

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- “[将外部协作者添加到组织中的仓库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”
