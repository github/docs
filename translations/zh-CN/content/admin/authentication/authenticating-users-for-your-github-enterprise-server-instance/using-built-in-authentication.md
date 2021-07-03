---
title: 使用内置身份验证
intro: '当您使用默认身份验证方法时，所有身份验证详细信息都将存储在 {% data variables.product.product_location %} 中。 如果您尚未建立身份验证提供程序（例如 LDAP、SAML 或 CAS），内置身份验证将是默认方法。'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---

您可以创建用户将在登录和注销页面上看到的自定义消息。 更多信息请参阅“[自定义您的实例上的用户消息](/enterprise/admin/user-management/customizing-user-messages-on-your-instance)”。

### 配置内置身份验证

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. 选择 **Built in authentication**。 ![选择内置身份验证选项](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### 创建帐户并添加用户

在实例创建完成后，您需要创建自己的管理员帐户并使用它配置用户。

1. 在 `http(s)://[hostname]/join` 的“Create Admin Account”页面下，选择您的用户名、密码和电子邮件地址，然后单击 **Create an account**。 ![创建管理员帐户](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}
