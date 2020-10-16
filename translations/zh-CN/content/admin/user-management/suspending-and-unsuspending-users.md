---
title: 挂起和取消挂起用户
redirect_from:
  - /enterprise/admin/articles/suspending-a-user/
  - /enterprise/admin/articles/unsuspending-a-user/
  - /enterprise/admin/articles/viewing-suspended-users/
  - /enterprise/admin/articles/suspended-users/
  - /enterprise/admin/articles/suspending-and-unsuspending-users/
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
intro: '如果用户离开公司或者调动到公司的其他部门，您应当移除或修改他们访问 {% data variables.product.product_location_enterprise %} 的能力。'
versions:
  enterprise-server: '*'
---

如果员工从公司离职，您可以暂停他们的 {% data variables.product.prodname_ghe_server %} 帐户，打开您的 {% data variables.product.prodname_enterprise %} 许可中的用户许可，同时保存他们创建的议题、评论、仓库、Gist 及其他数据。 被挂起的用户既无法登录您的实例，也无法推送或拉取代码。

在您挂起用户时，变更将立即生效，并且不会通知用户。 如果用户尝试拉取仓库或推送到仓库，他们将收到此错误消息：

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

在挂起站点管理员之前，您必须将其降级为普通用户。 更多信息请参阅“[升级或降级站点管理员](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)”。

{% tip %}

**注**：如果已为 {% data variables.product.product_location_enterprise %} [启用 LDAP 同步](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)，那么当用户从 LDAP 目录服务器中移除时，他们也将被自动挂起。 为您的实例启用 LDAP 同步后，将禁用普通用户挂起方法。

{% endtip %}

### 从用户管理员仪表板挂起用户

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. 在红色 Danger Zone 框的“Account suspension”下，单击 **Suspend**。 ![Suspend 按钮](/assets/images/enterprise/site-admin-settings/suspend.png)
6. 提供挂起用户的原因。![挂起原因](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

### 从用户管理员仪表板取消挂起用户

挂起用户后，取消挂起用户的操作将立即可用。 用户将不会收到通知。

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在左侧边栏中，单击 **Suspended users**。 ![Suspended users 选项卡](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. 单击您想要取消挂起的用户帐户的名称。 ![已挂起的用户](/assets/images/enterprise/site-admin-settings/user/suspended-user.png)
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. 在红色 Danger Zone 框的“Account suspension”下，单击 **Unsuspend**。 ![Unsuspend 按钮](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. 提供取消挂起用户的原因。![取消挂起原因](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

### 从命令行挂起用户

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 使用要挂起的用户名运行 [ghe-user-suspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-suspend)。
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

### 为挂起的用户创建自定义消息

您可以创建自定义消息，被挂起的用户会在尝试登录时看到此消息。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. 单击 **Add message**。 ![Add message](/assets/images/enterprise/site-admin-settings/add-message.png)
6. 在 **Suspended user message** 框中输入您的消息。 您可以输入 Markdown，或者使用 Markdown 工具栏设置消息的样式。 ![Suspended user message](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. 单击 **Suspended user message** 字段下的 **Preview** 按钮，查看显示的消息。 ![Preview 按钮](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. 预览呈现的消息。 ![显示的已挂起用户消息](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### 从命令行取消挂起用户

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 使用要取消挂起的用户名运行 [ghe-user-unsuspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-unsuspend)。
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

### 延伸阅读
- "[暂停用户](/enterprise/{{ currentVersion }}/v3/enterprise-admin/users/#suspend-a-user)"
