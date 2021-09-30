---
title: Enabling Codespaces for your organization
shortTitle: Enabling Codespaces
intro: '您可以控制组织中的哪些用户可以使用 {% data variables.product.prodname_codespaces %}。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## About enabling {% data variables.product.prodname_codespaces %} for your organization

组织所有者可以控制组织中的哪些用户可以创建和使用代码空间。

To use codespaces in your organization, you must do the following:

- Ensure that users have [at least write access](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) to the repositories where they want to use a codespace.
- [Enable {% data variables.product.prodname_codespaces %} for users in your organization](#configuring-which-users-in-your-organization-can-use-codespaces). You can choose allow {% data variables.product.prodname_codespaces %} for selected users or only for specific users.
- [Set a spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)

By default, a codespace can only access the repository from which it was created. 如果您希望组织中的代码空间能够访问代码空间创建者可以访问的其他组织仓库，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的访问和安全](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”。

## Enable {% data variables.product.prodname_codespaces %} for users in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. 在“User permissions（用户权限）”下，选择以下选项之一：

   * **Allow for all users（允许所有用户）**允许所有组织成员使用 {% data variables.product.prodname_codespaces %}。
   * **Selected users（所选用户）**选择特定组织成员使用 {% data variables.product.prodname_codespaces %}。

   !["用户权限"单选按钮](/assets/images/help/codespaces/organization-user-permission-settings.png)

## Disabling {% data variables.product.prodname_codespaces %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Under "User permissions", select **Disabled**.

## Setting a spending limit

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。
