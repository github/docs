---
title: 从组织中删除 GitHub 应用程序管理员
intro: '组织所有者可以撤销授予组织成员的 {% data variables.product.prodname_github_app %}管理员权限。'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 组织
  - 团队
---

有关 {% data variables.product.prodname_github_app %} 管理员权限的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization#github-app-managers)”。

### 删除整个组织的 {% data variables.product.prodname_github_app %}管理员权限

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. 在“Management（管理）”下，找到您要从其删除 {% data variables.product.prodname_github_app %}管理员权限的人员的用户名，然后单击 **Revoke（撤销）**。 ![撤销 {% data variables.product.prodname_github_app %}管理员权限](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### 删除单个 {% data variables.product.prodname_github_app %}的 {% data variables.product.prodname_github_app %}管理员权限

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. 在 "{% data variables.product.prodname_github_app %}" 下，单击要从其删除 {% data variables.product.prodname_github_app %}管理员的应用程序的头像。 ![选择 {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. 在“App managers（应用程序管理员）”下，找到您要从其删除 {% data variables.product.prodname_github_app %}管理员权限的人员的用户名，然后单击 **Revoke（撤销）**。 ![撤销 {% data variables.product.prodname_github_app %}管理员权限](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### 延伸阅读

- "[关于 {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
