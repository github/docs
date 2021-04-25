---
title: 审查组织安装的集成
intro: 您可以审查组织安装的集成的权限级别，并配置每个集成对组织仓库的访问权限。
redirect_from:
  - /articles/reviewing-your-organization-s-installed-integrations
  - /articles/reviewing-your-organizations-installed-integrations
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 组织
  - 团队
---

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 在左侧边栏中，单击 **Installed {% data variables.product.prodname_github_app %}s（安装的 GitHub 应用程序）**。 ![组织设置边栏中安装的 {% data variables.product.prodname_github_app %}选项卡](/assets/images/help/organizations/org-settings-installed-github-apps.png)
5. 在您要审查的 {% data variables.product.prodname_github_app %} 旁边，单击 **Configure（配置）**。 ![配置按钮](/assets/images/help/organizations/configure-installed-integration-button.png)
6. 审查 {% data variables.product.prodname_github_app %} 的权限和仓库访问权限。 ![授予 {% data variables.product.prodname_github_app %}所有仓库或特定仓库访问权限的选项](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - 要授予 {% data variables.product.prodname_github_app %}所有组织仓库的访问权限，请选择 **All repositories（所有仓库）**。
    - 要选择特定仓库授予应用程序的访问权限，请选择 **Only select repositories（仅选择仓库）**，然后输入仓库名称。
7. 单击 **Save（保存）**。
