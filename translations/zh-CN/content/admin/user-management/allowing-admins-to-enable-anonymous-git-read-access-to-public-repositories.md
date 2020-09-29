---
title: 允许管理员启用对公共仓库的匿名 Git 读取权限
intro: '为了简化自定义工具在您的实例上的使用和绕过身份验证要求，您可以允许仓库管理员启用对 {% data variables.product.product_location_enterprise %} 上公共仓库的匿名 Git 读取权限。'
redirect_from:
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

如果已启用私有模式，您可以允许仓库管理员启用对 {% data variables.product.product_location_enterprise %} 上公共仓库的匿名 Git 读取权限。 有关私有模式的更多信息，请参阅“[启用私有模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode/)”。

允许匿名 Git 读取权限使您能够在实例上为自定义工具绕过身份验证。 当您或仓库管理员为仓库启用此权限设置时，未经过身份验证的 Git 操作（和具有 {% data variables.product.prodname_ghe_server %} 的网络访问权限的任何人）将获得仓库的读取权限（无需身份验证）。

您还可以阻止仓库管理员更改 {% data variables.product.product_location_enterprise %} 上所有仓库或特定仓库的匿名 Git 访问设置。 更多信息请参阅“[阻止用户更改匿名 Git 读取权限](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”。

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Anonymous Git read access”下，使用下列菜单并单击 **Enabled**。 ![匿名 Git 读取权限下拉菜单显示菜单选项"Enabled（已启用）"和"Disabled（已禁用）"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. 或者，如果要阻止仓库管理员为实例上的所有仓库更改匿名 Git 读取权限设置，请选择 **Prevent repository admins from changing anonymous Git read access**。 ![选中复选框可阻止仓库管理员更改实例上所有仓库的匿名 Git 读取权限设置。](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### 为特定仓库启用匿名 Git 读取权限

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. 在“Danger Zone”下的“Enable Anonymous Git read access”旁，请单击 **Enable**。 ![仓库站点管理员设置的危险区域中“Enable anonymous Git read access”下的“Enabled”按钮 ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. 审查更改。 要确认，请单击 **Yes, enable anonymous Git read access（是，启用匿名 Git 读取权限）**。 ![在弹出窗口中确认匿名 Git 读取权限设置](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. 或者，如果要阻止仓库管理员为此仓库更改设置，请选择 **Prevent repository admins from changing anonymous Git read access**。 ![选中复选框可阻止仓库管理员更改此仓库的匿名 Git 读取权限。](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)
