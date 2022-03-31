---
title: 管理全局 web 挂钩
shortTitle: 管理全局 web 挂钩
intro: 您可以配置全局 web 挂钩，以便在企业内部发生事件时通知外部 Web 服务器。
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
---

## 关于全局 web 挂钩

当企业内部发生事件时，您可以使用全局 web 挂钩通知外部 Web 服务器。 您可以将服务器配置为接收 web 挂钩的有效负载，然后运行监控、响应或实施企业用户和组织管理规则的应用程序或代码。 更多信息请参阅“[web 挂钩](/developers/webhooks-and-events/webhooks)”。

例如，您可以将 {% data variables.product.product_location %} 配置为在有人创建、删除或修改企业内的存储库或组织时发送 web 挂钩。 您可以将服务器配置为在收到 web 挂钩后自动执行任务。

![全局 web 挂钩列表](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## 添加全局 web 挂钩

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 单击 **Add webhook（添加 web 挂钩）**。 ![Webhooks 页面上 Admin center 中的 Add webhook 按钮](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. 输入您想要接收有效负载的 URL。![用于输入有效负载 URL 的字段](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. 或者，使用 **Content type** 下拉菜单，并单击有效负载格式。 ![列出内容类型选项的下拉菜单](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. 或者，在 **Secret** 字段中，输入用作 `secret` 密钥的字符串。 ![用于输入用作密钥的字符串的字段](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. （可选）如果有效负载 URL 为 HTTPS，并且您不希望 {% data variables.product.prodname_ghe_server %} 在交付有效负载时验证 SSL 证书，请选择 **Disable SSL verification（禁用 SSL 验证）**。 阅读 SSL 验证的信息，然后单击 **I understand my webhooks may not be secure**。 ![用于禁用 SSL 验证的复选框](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **警告**：SSL 验证有助于确保安全投递挂钩有效负载。 我们不建议禁用 SSL 验证。

  {% endwarning %}
10. 确定您希望此 web 挂钩对每个事件还是选定事件触发。 ![包含用于为每个事件或选定事件接收有效负载的选项的单选按钮](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - 对于每个事件，请选择 **Send me everything**。
    - 要选择特定事件，请选择 **Let me select individual events**。
11. 如果选择单个事件，请选择将触发 web 挂钩的事件。
      {% ifversion ghec %}
      ![单个全局 web 挂钩事件的复选框](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
      {% elsif ghes or ghae %}
      ![单个全局 web 挂钩事件的复选框](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png)
      {% endif %}
12. 确认选中了 **Active（活动）**复选框。 ![已选择 Active 复选框](/assets/images/help/business-accounts/webhook-active.png)
13. 单击 **Add webhook（添加 web 挂钩）**。

## 编辑全局 web 挂钩

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 在您想要编辑的 web 挂钩旁，单击 **Edit**。 ![web 挂钩旁的 Edit 按钮](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. 更新 web 挂钩的设置。
7. 单击 **Update webhook**。

## 删除全局 web 挂钩

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 在您想要删除的 web 挂钩旁，请单击 **Delete**。 ![web 挂钩旁的 Delete 按钮](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. 阅读有关删除 web 挂钩的信息，然后单击 **Yes, delete webhook**。 ![包含警告信息的弹出框和用于确认删除 web 挂钩的按钮](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## 查看最近的交付和回复

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 在 web 挂钩列表中，单击您想要查看其投递的 web 挂钩。 ![包含用于查看每个 web 挂钩的链接的 web 挂钩列表](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. 在“Recent deliveries”下，单击投递以查看详细信息。 ![包含用于查看详细信息的链接的 web 挂钩最近投递列表](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
