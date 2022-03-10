---
title: 为组织启用 Codespaces
shortTitle: 启用 Codespaces
intro: '您可以控制组织中的哪些用户可以使用 {% data variables.product.prodname_codespaces %}。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## 关于为组织启用 {% data variables.product.prodname_codespaces %}

组织所有者可以控制组织中的哪些用户可以创建和使用代码空间。

要在组织中使用 Codespaces，必须执行以下操作：

- 确保用户他们要在其中使用代码空间的存储库[至少具有写入权限](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)。
- [为组织中的用户启用 {% data variables.product.prodname_codespaces %}](#enable-codespaces-for-users-in-your-organization)。 您可以选择允许所选用户使用 {% data variables.product.prodname_codespaces %} ，也可以选择仅允许特定用户使用。
- [设置支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- 确保您的组织未启用 IP 地址允许列表。 更多信息请参阅“[管理组织允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)”。

默认情况下，代码空间只能访问从中创建它的存储库。 如果您希望组织中的代码空间能够访问代码空间创建者可以访问的其他组织仓库，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的访问和安全](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”。

## 为组织中的用户启用 {% data variables.product.prodname_codespaces %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. 在“User permissions（用户权限）”下，选择以下选项之一：

   * **Selected users（所选用户）**选择特定组织成员使用 {% data variables.product.prodname_codespaces %}。
   * **允许所有成员**以允许所有组织成员使用 {% data variables.product.prodname_codespaces %}。
   * **允许所有成员和外部协作者**以允许所有组织成员以及外部协作者使用 {% data variables.product.prodname_codespaces %}。

   !["用户权限"单选按钮](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **注意：** 当您选择 **Allow for all members and outside collaborators（允许所有成员和外部协作者）**时，所有已添加到特定存储库的外部协作者都可以创建和使用 {% data variables.product.prodname_codespaces %}。 您的组织将对外部协作者发生的所有使用付费。 有关管理外部协作者的详细信息，请参阅“[关于外部协作者](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)”。

   {% endnote %}

1. 单击 **Save（保存）**。

## 为组织禁用 {% data variables.product.prodname_codespaces %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. 在“User permissions（用户权限）”下，选择 **Disabled（已禁用）**。

## 设置支出限制

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。
