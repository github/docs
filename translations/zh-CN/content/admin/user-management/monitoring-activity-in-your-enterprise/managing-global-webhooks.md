---
title: 管理全局 web 挂钩
shortTitle: Manage global webhooks
intro: You can configure global webhooks to notify external web servers when events occur within your enterprise.
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

You can use global webhooks to notify an external web server when events occur within your enterprise. You can configure the server to receive the webhook's payload, then run an application or code that monitors, responds to, or enforces rules for user and organization management for your enterprise. 更多信息请参阅“[web 挂钩](/developers/webhooks-and-events/webhooks)”。

For example, you can configure {% data variables.product.product_location %} to send a webhook when someone creates, deletes, or modifies a repository or organization within your enterprise. You can configure the server to automatically perform a task after receiving the webhook.

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
9. Optionally, if your payload URL is HTTPS and you would not like {% data variables.product.prodname_ghe_server %} to verify SSL certificates when delivering payloads, select **Disable SSL verification**. 阅读 SSL 验证的信息，然后单击 **I understand my webhooks may not be secure**。 ![Checkbox for disabling SSL verification](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **警告**：SSL 验证有助于确保安全投递挂钩有效负载。 我们不建议禁用 SSL 验证。

  {% endwarning %}
10. Decide if you'd like this webhook to trigger for every event or for selected events. ![包含用于为每个事件或选定事件接收有效负载的选项的单选按钮](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - 对于每个事件，请选择 **Send me everything**。
    - 要选择特定事件，请选择 **Let me select individual events**。
11. If you chose to select individual events, select the events that will trigger the webhook.
      {% ifversion ghec %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
      {% elsif ghes or ghae %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png)
      {% endif %}
12. Confirm that the **Active** checkbox is selected. ![已选择 Active 复选框](/assets/images/help/business-accounts/webhook-active.png)
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
