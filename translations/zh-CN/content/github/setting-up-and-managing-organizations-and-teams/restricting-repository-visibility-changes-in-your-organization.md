---
title: 限制在组织中更改仓库可见性
intro: 为保护组织的数据，您可以配置在组织中更改仓库可见性的权限。
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以将更改仓库可见性的权限仅限于组织所有者，或者允许具有仓库管理员权限的成员在私有与公开之间更改仓库可见性。

{% warning %}

**Warning**: If enabled, this setting allows people with admin permissions to change an existing repository to any visibility, even if you do not allow that type of repository to be created. For more information about restricting the visibility of repositories during creation, see "[Restricting repository creation in your organization](/articles/restricting-repository-creation-in-your-organization)."

{% endwarning %}


{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository visibility change（仓库可见性更改）”下，取消选择 **Allow members to change repository visibilities for this organization（允许成员为此组织更改仓库可见性）**。 ![允许成员更改仓库可见性的复选框](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. 单击 **Save（保存）**。
