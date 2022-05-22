---
title: 限制在组织中更改仓库可见性
intro: 为保护组织的数据，您可以配置在组织中更改仓库可见性的权限。
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 组织
  - 团队
---
您可以将更改仓库可见性的权限仅限于组织所有者，或者允许具有仓库管理员权限的成员也可以更改仓库可见性。

{% warning %}

**警告**：如果启用，此设置允许具有管理员权限的用户将现有仓库更改为任何可见性，即使您不允许创建该类型的仓库。 有关在创建过程中限制仓库可见性的更多信息，请参阅“[限制组织中的仓库创建](/articles/restricting-repository-creation-in-your-organization)”。

{% endwarning %}


{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository visibility change（仓库可见性更改）”下，取消选择 **Allow members to change repository visibilities for this organization（允许成员为此组织更改仓库可见性）**。 ![允许成员更改仓库可见性的复选框](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. 单击 **Save（保存）**。

### 延伸阅读

- "[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
