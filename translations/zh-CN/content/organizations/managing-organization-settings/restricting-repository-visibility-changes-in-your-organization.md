---
title: 限制在组织中更改仓库可见性
intro: 为保护组织的数据，您可以配置在组织中更改仓库可见性的权限。
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 设置可见性更改策略
permissions: Organization owners can restrict repository visibility changes for an organization.
---

You can restrict who has the ability to change the visibility of repositories in your organization, such as changing a repository from private to public. For more information about repository visibility, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

You can restrict the ability to change repository visibility to organization owners only, or you can allow anyone with admin access to a repository to change visibility.

{% warning %}

**Warning**: If enabled, this setting allows people with admin access to choose any visibility for an existing repository, even if you do not allow that type of repository to be created. 有关在创建过程中限制仓库可见性的更多信息，请参阅“[限制组织中的仓库创建](/articles/restricting-repository-creation-in-your-organization)”。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository visibility change（仓库可见性更改）”下，取消选择 **Allow members to change repository visibilities for this organization（允许成员为此组织更改仓库可见性）**。 ![允许成员更改仓库可见性的复选框](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. 单击 **Save（保存）**。
