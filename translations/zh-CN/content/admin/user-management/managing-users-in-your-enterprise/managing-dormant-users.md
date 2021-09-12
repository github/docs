---
title: 管理休眠用户
redirect_from:
  - /enterprise/admin/articles/dormant-users/
  - /enterprise/admin/articles/viewing-dormant-users/
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant/
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '如果用户帐户至少在一个月内未激活，则被视为休眠状态。{% if enterpriseServerVersions contains currentVersion %} 您可以选择暂停休眠用户以释放用户许可。{% endif %}'
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
---

“活动”包括但不限于：
- 登录 {% data variables.product.product_name %}。
- 评论问题和拉取请求。
- 创建、删除、关注仓库和加星标。
- 推送提交。{% if currentversion ver_gt "enterprise-server@2.21" or currentversion == "github-ae@latest" %}
- 使用个人访问令牌或 SSH 密钥访问资源。{% endif %}

### 查看休眠用户

您可以查看未被挂起和不属于站点管理员的所有休眠用户的列表。

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在左侧边栏中，单击 **Dormant users**。 ![Dormant users tab](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% if enterpriseServerVersions contains currentVersion %}
4. 要挂起此列表中的所有休眠用户，请在页面顶部单击 **Suspend all**。 ![Suspend all button](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

### 确定用户帐户是否休眠

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. 在 **User info** 部分中，后面为“Dormant”的红点表示该用户帐户为休眠状态，后面为“Active”的绿点表示该用户帐户处于活跃状态。 ![Dormant 用户帐户](/assets/images/enterprise/stafftools/dormant-user.png) ![Active 用户帐户](/assets/images/enterprise/stafftools/active-user.png)

### 配置休眠阈值

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Dormancy threshold”，使用下拉菜单，然后单击所需的休眠阈值。 ![Dormancy threshold 下拉菜单](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)
