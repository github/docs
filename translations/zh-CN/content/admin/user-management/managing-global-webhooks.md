---
title: 管理全局 web 挂钩
intro: 站点管理员可以查看、添加、编辑和删除全局 web 挂钩，以跟踪企业的事件。
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
---

### 关于全局 web 挂钩

您可以使用全局 web 挂钩自动监视、响应或者为企业的用户和组织管理强制执行规则。 例如，您可以将 web 挂钩配置为在以下情况下执行：
- 创建或删除用户帐户
- 创建或删除组织
- 向仓库添加协作者或从仓库中移除协作者
- 复刻仓库

![全局 web 挂钩列表](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

### 添加全局 web 挂钩

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 单击 **Add webhook（添加 web 挂钩）**。 ![Webhooks 页面上 Admin center 中的 Add webhook 按钮](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. 输入您想要接收有效负载的 URL。![用于输入有效负载 URL 的字段](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. 或者，使用 **Content type** 下拉菜单，并单击有效负载格式。 ![列出内容类型选项的下拉菜单](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. 或者，在 **Secret** 字段中，输入用作 `secret` 密钥的字符串。 ![用于输入用作密钥的字符串的字段](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. 或者，如果您不希望 {% data variables.product.prodname_ghe_server %} 在投递有效负载时验证 SSL 证书，请单击 **Disable SSL verification**。 阅读 SSL 验证的信息，然后单击 **I understand my webhooks may not be secure**。 ![用于禁用 SSL 验证的按钮](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **警告**：SSL 验证有助于确保安全投递挂钩有效负载。 我们不建议禁用 SSL 验证。

  {% endwarning %}
10. 确定您希望此 web 挂钩对每个事件还是选定事件触发：![包含用于为每个事件或选定事件接收有效负载的选项的单选按钮](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - 对于每个事件，请选择 **Send me everything**。
    - 要选择特定事件，请选择 **Let me select individual events**。
11. 如果您选择针对各个事件触发，请选择针对组织还是用户活动触发此 web 挂钩。![组织和用户事件的复选框](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
12. 确认已选中 **Active** 复选框（默认处于选中状态）。 ![已选择 Active 复选框](/assets/images/enterprise/site-admin-settings/add-global-webhook-active-checkbox.png)
13. 单击 **Add webhook（添加 web 挂钩）**。

### 编辑全局 web 挂钩

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 在您想要编辑的 web 挂钩旁，单击 **Edit**。 ![web 挂钩旁的 Edit 按钮](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. 更新 web 挂钩的设置。
7. 单击 **Update webhook**。

### 删除全局 web 挂钩

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 在您想要删除的 web 挂钩旁，请单击 **Delete**。 ![web 挂钩旁的 Delete 按钮](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. 阅读有关删除 web 挂钩的信息，然后单击 **Yes, delete webhook**。 ![包含警告信息的弹出框和用于确认删除 web 挂钩的按钮](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

### 查看最近的交付和回复

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 在 web 挂钩列表中，单击您想要查看其投递的 web 挂钩。 ![包含用于查看每个 web 挂钩的链接的 web 挂钩列表](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. 在“Recent deliveries”下，单击投递以查看详细信息。 ![包含用于查看详细信息的链接的 web 挂钩最近投递列表](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
