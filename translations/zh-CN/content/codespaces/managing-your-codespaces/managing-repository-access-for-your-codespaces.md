---
title: 管理代码空间的存储库访问
shortTitle: 存储库访问
intro: '您可以管理 {% data variables.product.prodname_codespaces %} 可以访问的仓库。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
---

 

为用户帐户拥有的仓库启用访问和安全后，为该仓库创建的任何代码空间都将对您拥有的所有其他仓库具有读取权限。 如果要限制代码空间可以访问的仓库，您可以将其限制为代码空间打开的仓库或特定仓库。 您应该只对您信任的仓库启用访问和安全。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. 在“Access and security（访问和安全）”下，为用户帐户选择所需的设置。 ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问您拥有的其他仓库。 对于您要允许其代码空间访问您拥有的其他仓库的所有仓库重复此操作。 !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## 延伸阅读

- "[管理组织的代码空间的存储库访问](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
