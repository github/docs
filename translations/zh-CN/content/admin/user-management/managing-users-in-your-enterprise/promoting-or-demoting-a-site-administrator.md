---
title: 升级或降级站点管理员
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator/
  - /enterprise/admin/articles/demoting-a-site-administrator/
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: 站点管理员可以将任何普通用户升级为站点管理员，也可以将其他站点管理员降级为普通用户。
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
---
{% tip %}

**注**：如果已[启用 LDAP 同步](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)并且在[为用户配置 LDAP 访问](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)时设置了 `Administrators group` 属性，这些用户将自动获得您的实例的站点管理员访问权限。 在这种情况下，您无法按照下面的步骤手动升级用户；您必须将其添加到 LDAP 管理员组中。

{% endtip %}

有关将用户升级为组织所有者的信息，请参阅“[命令行实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)”的 `ghe-org-admin-promote` 部分。

### 从企业设置升级用户

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
5. 在页面的右上角，单击 **Add owner（添加所有者）**。 ![用于添加管理员的按钮](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. 在搜索字段中，输入用户的名称，然后单击 **Add**。 ![用于添加管理员的搜索字段](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

### 从企业设置降级站点管理员

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. 在页面左上角的“Find an administrator（查找管理员）”搜索字段中，输入您想要降级的人员的用户名。 ![用于查找管理员的搜索字段](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. 在搜索结果中，查找您想要降级的人员的用户名，然后使用 {% octicon "gear" %} 下拉菜单选择 **Remove owner（删除所有者）**。 ![从企业选项中删除](/assets/images/help/business-accounts/demote-admin-button.png)

### 从命令行升级用户

1. 通过 [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) 登录您的设备。
2. 使用您想要升级的用户名运行 [ghe-user-promote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-promote)。
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

### 从命令行降级站点管理员

1. 通过 [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) 登录您的设备。
2. 使用您想要降级的用户名运行 [ghe-user-demote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-demote)。
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
