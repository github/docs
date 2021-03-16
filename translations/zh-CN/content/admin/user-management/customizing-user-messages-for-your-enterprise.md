---
title: 自定义企业的用户消息
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
intro: 'You can create custom messages that users will see on {% data variables.product.product_location %}.'
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### About user messages

There are several types of user messages.
- Messages that appear on the {% if enterpriseServerVersions contains currentVersion %}sign in or {% endif %}sign out page{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- Mandatory messages, which appear once in a pop-up window that must be dismissed{% endif %}{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- Announcement banners, which appear at the top of every page{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% note %}

**注**：如果您使用 SAML 进行身份验证，登录页面将由您的身份提供程序呈现，无法通过 {% data variables.product.prodname_ghe_server %} 进行自定义。

{% endnote %}

您可以使用 Markdown 格式化消息。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的书写和格式化](/articles/about-writing-and-formatting-on-github/)”。

### 创建自定义登录消息

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" %}To the right of{% else %}Under{% endif %} "Sign in page", click **Add message** or **Edit message**. ![{% if currentVersion ver_gt "enterprise-server@2.22" %}Add{% else %}Edit{% endif %} message button](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. 在 **Sign in message** 下，输入您想要用户看到的消息。 ![Sign in message](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% if currentVersion ver_gt "enterprise-server@2.22" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Preview 按钮](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. 预览呈现的消息。 ![呈现的登录消息](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}
{% endif %}

### 创建自定义退出消息

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}To the right of{% else %}Under{% endif %} "Sign out page", click **Add message** or **Edit message**. ![Add message 按钮](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. 在 **Sign out message** 下，输入您想要用户看到的消息。 ![Sign two_factor_auth_header message](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Preview 按钮](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. 预览呈现的消息。 ![呈现的注销消息](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Creating a mandatory message

You can create a mandatory message that {% data variables.product.product_name %} will show to all users the first time they sign in after you save the message. The message appears in a pop-up window that the user must dismiss before the user can use {% data variables.product.product_location %}. Mandatory messages have a variety of uses.

- Providing onboarding information for new employees
- Telling users how to get help with {% data variables.product.product_location %}
- Ensuring that all users read your terms of service for using {% data variables.product.product_location %}

If you include Markdown checkboxes in the message, all checkboxes must be selected before the user can dismiss the message. For example, if you include your terms of service in the mandatory message, you can require that each user selects a checkbox to confirm the user has read the terms.

Each time a user sees a mandatory message, an audit log event is created. The event includes the version of the message that the user saw. For more information see "[Audited actions](/admin/user-management/audited-actions)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. To the right of "Mandatory message", click **Add message**. ![Add message 按钮](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Under "Mandatory message", in the text box, type your message. ![Add message 按钮](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### 创建全局公告横幅

您可以设置全局公告横幅，以便在每个页面顶部向所有用户显示。

{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
You can also set an announcement banner
{% if enterpriseServerVersions contains currentVersion %} in the administrative shell using a command line utility or{% endif %} using the API. 更多信息请参阅 {% if enterpriseServerVersions contains currentVersion %}“[命令行实用工具](/enterprise/admin/configuration/command-line-utilities#ghe-announce)”和 {% endif %}“[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#announcements)”。
{% else %}

您还可以使用命令行工具在管理 shell 中设置公告横幅。 更多信息请参阅“[命令行实用程序](/enterprise/admin/configuration/command-line-utilities#ghe-announce)”。

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}To the right of{% else %}Under{% endif %} "Announcement", click **Add announcement**. ![Add message 按钮](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. 在“Announcement（公告）”下的在文本字段中键入要显示在横幅中的公告。 ![用于输入公告的文本字段](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", select the calendar drop-down menu and click an expiration date. ![用于选择到期日期的日历下拉菜单](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
{% endif %}
