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

您可以限制谁能够更改组织中存储库的可见性，例如将存储库从私有更改为公共存储库。 有关存储库可见性的更多信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。

您可以将更改存储库可见性的功能限制为仅组织所有者，也可以允许对存储库具有管理员访问权限的任何人更改可见性。

{% warning %}

**警告**：如果启用，则此设置允许具有管理员访问权限的人员选择现有存储库的任何可见性，即使您不允许创建该类型的存储库也是如此。 有关在创建过程中限制仓库可见性的更多信息，请参阅“[限制组织中的仓库创建](/articles/restricting-repository-creation-in-your-organization)”。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository visibility change（仓库可见性更改）”下，取消选择 **Allow members to change repository visibilities for this organization（允许成员为此组织更改仓库可见性）**。 ![允许成员更改仓库可见性的复选框](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. 单击 **Save（保存）**。
