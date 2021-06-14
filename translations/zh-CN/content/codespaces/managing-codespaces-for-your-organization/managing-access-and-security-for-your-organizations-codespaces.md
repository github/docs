---
title: 管理组织代码空间的访问和安全
shortTitle: 管理组织的访问和安全
intro: '您可以管理 {% data variables.product.prodname_codespaces %} 可以访问的组织仓库。'
permissions: 'To manage access and security for Codespaces for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
---

{% data reusables.codespaces.release-stage %}

组织所有者可以管理代码空间有权访问哪些仓库。

默认情况下，代码空间只能访问创建它的仓库。 为组织拥有的仓库启用访问和安全后，则为该仓库创建的任何代码空间都将对该组织拥有的和代码空间创建者有权访问的所有其他仓库具有读取和写入权限。 如果要限制代码空间可以访问的仓库，您可以将其限制为创建代码空间的仓库或特定仓库。 您应该只对您信任的仓库启用访问和安全。

要管理组织中的哪些用户可以使用 {% data variables.product.prodname_codespaces %}，请参阅“[管理组织的用户权限](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)”。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. 在“Access and security（访问和安全）”下，为组织选择所需的设置。 ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问组织拥有的其他仓库。 对于您要允许其代码空间访问其他仓库的所有仓库重复此操作。 !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
