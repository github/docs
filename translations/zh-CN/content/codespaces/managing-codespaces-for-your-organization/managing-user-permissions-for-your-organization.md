---
title: 管理组织的用户权限
intro: '您可以控制组织中的哪些用户可以使用 {% data variables.product.prodname_codespaces %}。'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---

{% data reusables.codespaces.release-stage %}

### 关于 {% data variables.product.prodname_codespaces %} 的用户权限

组织所有者可以控制组织中的哪些用户可以创建和使用代码空间。

要使用组织中的代码空间，用户必须对他们要使用代码空间的仓库至少具有写入权限。 您可以对组织中的所有用户启用代码空间，也可以仅对特定用户启用。

默认情况下，代码空间只能访问创建它的仓库。 如果您希望组织中的代码空间能够访问代码空间创建者可以访问的其他组织仓库，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的访问和安全](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”。

### 配置组织中的哪些用户可以使用 {% data variables.product.prodname_codespaces %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. 在“User permissions（用户权限）”下，选择以下选项之一：

   * **Disabled（禁用）**不允许任何组织成员使用 {% data variables.product.prodname_codespaces %}。
   * **Allow for all users（允许所有用户）**允许所有组织成员使用 {% data variables.product.prodname_codespaces %}。
   * **Selected users（所选用户）**选择特定组织成员使用 {% data variables.product.prodname_codespaces %}。

   !["用户权限"单选按钮](/assets/images/help/codespaces/organization-user-permission-settings.png)
