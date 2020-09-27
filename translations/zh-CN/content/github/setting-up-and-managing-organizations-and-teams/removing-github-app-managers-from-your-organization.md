---
title: 从组织中删除 GitHub 应用程序管理员
intro: '组织所有者可以撤销授予组织成员的 {{ site.data.variables.product.prodname_github_app }}管理员权限。'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

有关 {{ site.data.variables.product.prodname_github_app }} 管理员权限的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization#github-app-managers)”。

### 删除整个组织的 {{ site.data.variables.product.prodname_github_app }}管理员权限

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. 在“Management（管理）”下，找到您要从其删除 {{ site.data.variables.product.prodname_github_app }}管理员权限的人员的用户名，然后单击 **Revoke（撤销）**。 ![撤销 {{ site.data.variables.product.prodname_github_app }}管理员权限](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### 删除单个 {{ site.data.variables.product.prodname_github_app }}的 {{ site.data.variables.product.prodname_github_app }}管理员权限

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. 在 "{{ site.data.variables.product.prodname_github_app }}" 下，单击要从其删除 {{ site.data.variables.product.prodname_github_app }}管理员的应用程序的头像。 ![选择 {{ site.data.variables.product.prodname_github_app }}](/assets/images/help/organizations/select-github-app.png)
{{ site.data.reusables.organizations.app-managers-settings-sidebar }}
1. 在“App managers（应用程序管理员）”下，找到您要从其删除 {{ site.data.variables.product.prodname_github_app }}管理员权限的人员的用户名，然后单击 **Revoke（撤销）**。 ![撤销 {{ site.data.variables.product.prodname_github_app }}管理员权限](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### 延伸阅读

- "[关于 {{ site.data.variables.product.prodname_dotcom }} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
