---
title: 管理组织代码空间的存储库访问
shortTitle: 存储库访问
intro: '您可以管理 {% data variables.product.prodname_github_codespaces %} 可以访问的组织仓库。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
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

{% warning %}

**Deprecation note**: The access and security setting described below is now deprecated and is documented here for reference only. To enable expanded access to other repositories, add the requested permissions to your `devcontainer.json` configuration file. 更多信息请参阅“[管理代码空间中对其他存储库的访问](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。

{% endwarning %}

默认情况下，代码空间只能访问创建它的仓库。 当您为组织拥有的存储库启用访问和安全性时，为该存储库创建的任何代码空间也将对组织拥有的所有其他存储库具有读取权限，并且代码空间创建者具有访问权限。 如果要限制代码空间可以访问的存储库，可以将其限制为创建代码空间的存储库或特定存储库。 您应该只对您信任的仓库启用访问和安全。

To manage which users in your organization can use {% data variables.product.prodname_github_codespaces %}, see "[Enabling GitHub Codespaces for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. 在“Access and security（访问和安全）”下，为组织选择所需的设置。 ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问组织拥有的其他仓库。 对于您要允许其代码空间访问其他仓库的所有仓库重复此操作。 !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## 延伸阅读

- "[管理代码空间的存储库访问](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)"
