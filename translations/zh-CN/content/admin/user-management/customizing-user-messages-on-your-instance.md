---
title: 自定义您的实例上的用户消息
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
intro: '您可以创建用户将在登录和退出页面上{% if currentVersion ver_gt "enterprise-server@2.21" %} 或在每个页面顶部的公告横幅中{% endif %} 看到的自定义消息。'
versions:
  enterprise-server: '*'
---

您可以使用 Markdown 格式化消息。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的书写和格式化](/articles/about-writing-and-formatting-on-github/)”。

{% note %}

**注**：如果您使用 SAML 进行身份验证，登录页面将由您的身份提供程序呈现，无法通过 {% data variables.product.prodname_ghe_server %} 进行自定义。

{% endnote %}

### 创建自定义登录消息

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. 在“Sign in page”下，单击 **Add message** 或 **Edit message**。 ![Edit message 按钮](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. 在 **Sign in message** 下，输入您想要用户看到的消息。 ![登录消息](/assets/images/enterprise/site-admin-settings/sign-in-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Preview 按钮](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. 预览呈现的消息。 ![呈现的登录消息](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### 创建自定义退出消息

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. 在“Sign out page”下，单击 **Add message** 或 **Edit message**。 ![Add message 按钮](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. 在 **Sign out message** 下，输入您想要用户看到的消息。 ![签名 two_factor_auth_header 消息](/assets/images/enterprise/site-admin-settings/sign-out-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Preview 按钮](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. 预览呈现的消息。 ![呈现的注销消息](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### 创建全局公告横幅

您可以设置全局公告横幅，以便在每个页面顶部向所有用户显示。

您还可以使用命令行工具在管理 shell 中设置公告横幅。 更多信息请参阅“[命令行实用程序](/enterprise/admin/configuration/command-line-utilities#ghe-announce)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. 在“Sign out page”下，单击 **Add message** 或 **Edit message**。 ![Add message 按钮](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. 在“Announcement（公告）”下的在文本字段中键入要显示在横幅中的公告。 ![用于输入公告的文本字段](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. （可选）在“Expires on（到期日）”下，使用日历下拉菜单选择一个到期日。 ![用于选择到期日期的日历下拉菜单](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
1. 在“Sign in page”下，单击 **Add message** 或 **Edit message**。 ![Preview 按钮](/assets/images/enterprise/site-admin-settings/preview-announcement-button.png)
1. 单击 **Save changes（保存更改）**。 ![Edit message 按钮](/assets/images/enterprise/site-admin-settings/save-announcement-button.png)
{% endif %}
