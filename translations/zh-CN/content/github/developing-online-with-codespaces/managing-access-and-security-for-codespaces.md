---
title: 管理代码空间的访问和安全
intro: 您可以管理代码空间可以访问的仓库。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% note %}

**注意：**{% data variables.product.prodname_codespaces %} 访问和安全目前处于测试阶段，可能会更改。

{% endnote %}

### 管理用户帐户的安全和访问

为用户帐户拥有的仓库启用访问和安全后，您为该仓库创建的任何代码空间都将对您拥有的所有其他仓库具有读取和写入权限。 您可以不对任何仓库、对所有仓库或特定仓库启用访问和安全。 您应该只对您信任的仓库启用访问和安全。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. 在“Access and security（访问和安全）”下，为用户帐户选择所需的设置。 ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问您拥有的其他仓库。 对于您要允许其代码空间访问您拥有的其他仓库的所有仓库重复此操作。 !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

### 管理组织的安全和访问

组织所有者可以管理 {% data variables.product.prodname_codespaces %} 的安全和访问。

为组织拥有的仓库启用访问和安全后，则为该仓库创建的任何代码空间都将对该组织拥有的所有其他仓库具有读取和写入权限。 您可以不对组织的任何仓库、对组织的所有仓库或特定仓库启用访问和安全。 您应该只对您信任的仓库启用访问和安全。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.click-codespaces %}
5. 要代表您的组织批准[预发布计划服务条款](/github/site-policy/github-pre-release-program)并启用 {% data variables.product.prodname_codespaces %}，请在“User permissions（用户权限）”下，选择 **Selected users（所选用户）**，然后输入要授予访问权限的每个人的用户名。 对要授予组织代码空间访问权限的所有用户重复此操作。  
   !["所选用户"单选按钮](/assets/images/help/organizations/select-selected-users-radio-button.png)
1. 在“Access and security（访问和安全）”下，为组织选择所需的设置。 ![管理信任仓库的单选按钮](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. 如果您选择了“Selected repositories（所选仓库）”，请选择下拉菜单，然后单击一个仓库，以允许该仓库的代码空间访问组织拥有的其他仓库。 对于您要允许其代码空间访问其他仓库的所有仓库重复此操作。 !["所选仓库" 下拉菜单](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
