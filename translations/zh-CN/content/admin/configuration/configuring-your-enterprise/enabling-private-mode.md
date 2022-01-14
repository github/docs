---
title: 启用私有模式
intro: '在私有模式下，{% data variables.product.prodname_ghe_server %} 要求每个用户必须登录才能访问安装。'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
---

如果 {% data variables.product.product_location %} 可通过 Internet 公开访问，您必须启用私有模式。 在私有模式下，用户不能通过 `git://` 匿名克隆仓库。 如果还启用了内置身份验证，管理员必须邀请新用户在实例上创建帐户。 更多信息请参阅“[使用内置身份验证](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-built-in-authentication)”。

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

启用私有模式后，您可以允许未验证的 Git 操作（以及对 {% data variables.product.product_location %} 具有网络访问权限的任何人）读取已启用匿名 Git 读取权限的实例上的公共仓库代码。 更多信息请参阅“[允许管理员启用对公共仓库的匿名 Git 读取权限](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. 选择 **Private mode**。 ![启用私有模式的复选框](/assets/images/enterprise/management-console/private-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
