---
title: 阻止用户更改匿名 Git 读取权限
intro: '您可以阻止仓库管理员更改一个仓库{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %}或所有仓库{% endif %}的匿名 Git 读取权限。'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

要阻止仓库管理员为特定仓库更改匿名 Git 读取权限设置，您可以锁定仓库的权限设置。 在您锁定仓库的 Git 读取权限设置后，只有站点管理员可以更改设置。

仓库管理员可为公共仓库（如果不是分叉）更改匿名 Git 读取权限。 更多信息请参阅“[允许管理员启用对公共仓库的匿名 Git 读取权限](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)”。

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

### 阻止用户更改仓库的匿名 Git 读取权限

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. 在“Danger Zone”下，选择 **Prevent repository admins from enabling anonymous Git read access**。 ![选中复选框，锁定仓库以阻止更改其匿名 Git 读取权限设置](/assets/images/enterprise/site-admin-settings/lock-repo-from-changing-anonymous-git-read-access.png)

### 阻止用户为所有仓库更改匿名 Git 读取权限

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
3. 在“Anonymous Git read access”下，确认已启用此设置，然后选择 **Prevent repository admins from changing anonymous Git read access**。 ![选中复选框，全局锁定仓库以阻止更改其匿名 Git 读取权限设置](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

