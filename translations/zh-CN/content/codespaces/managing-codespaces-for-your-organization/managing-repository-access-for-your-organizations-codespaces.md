---
title: Managing repository access for your organization's codespaces
shortTitle: 存储库访问
intro: '您可以管理 {% data variables.product.prodname_codespaces %} 可以访问的组织仓库。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access and security for Codespaces for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
---

默认情况下，代码空间只能访问创建它的仓库。 When you enable access and security for a repository owned by your organization, any codespaces that are created for that repository will also have read permissions to all other repositories the organization owns and the codespace creator has permissions to access. If you want to restrict the repositories a codespace can access, you can limit it to either the repository where the codespace was created, or to specific repositories. 您应该只对您信任的仓库启用访问和安全。

要管理组织中的哪些用户可以使用 {% data variables.product.prodname_codespaces %}，请参阅“[管理组织的用户权限](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)”。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. 在“Access and security（访问和安全）”下，为组织选择所需的设置。 ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问组织拥有的其他仓库。 对于您要允许其代码空间访问其他仓库的所有仓库重复此操作。 !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## 延伸阅读

- "[Managing repository access for your codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)"
