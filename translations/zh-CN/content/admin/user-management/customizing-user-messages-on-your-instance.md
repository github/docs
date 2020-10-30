---
title: 自定义您的实例上的用户消息
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
intro: '您可以创建{% if currentVersion ver_gt "enterprise-server@2.15" %}用户将在登录和退出页面上看到的自定义消息{% else %}用户将在登录页面上看到的自定义消息{% endif %}。'
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
### Creating a global announcement banner

You can set a global announcement banner to be displayed to all users at the top of every page.

You can also set an announcement banner in the administrative shell using a command line utility. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-announce)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. 在“Sign out page”下，单击 **Add message** 或 **Edit message**。 ![Add message 按钮](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Under "Announcement", in the text field, type the announcement you want displayed in a banner. ![Text field to enter announcement](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", use the calendar drop-down menu, and select an expiration date. ![Calendar drop-down menu to choose expiration date](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
1. 在“Sign in page”下，单击 **Add message** 或 **Edit message**。 ![Preview 按钮](/assets/images/enterprise/site-admin-settings/preview-announcement-button.png)
1. 单击 **Save changes（保存更改）**。 ![Edit message 按钮](/assets/images/enterprise/site-admin-settings/save-announcement-button.png)
{% endif %}
