---
title: 允许对身份提供程序覆盖范围以外的用户进行内置身份验证
intro: '您可以配置内置身份验证，为无法访问使用 LDAP、SAML 或 CAS 的身份提供程序的用户验证身份。'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  enterprise-server: '*'
topics:
  - 企业
---

### 关于对您的身份提供程序覆盖范围外的用户进行内置身份验证

在无法将特定帐户（例如，合同工或计算机用户的帐户）添加到身份提供程序 (IdP) 时，您可以为外部用户使用内置身份验证。 如果无法使用身份提供程序，您还可以使用内置身份验证来访问回退帐户。

内置身份验证配置完成且用户使用 SAML 或 CAS 成功地进行身份验证后，他们将无法使用用户名和密码进行身份验证。 如果用户使用 LDAP 成功地完成身份验证，凭据将不再被视为内部凭据。

在默认情况下，特定 IdP 的内置身份验证处于禁用状态。

{% warning %}

**警告**：如果您禁用内置身份验证，则必须单独挂起不应具有实例访问权限的任何用户。 更多信息请参阅“[挂起和取消挂起用户](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)”。

{% endwarning %}

### 为您的身份提供程序覆盖范围外的用户配置内置身份验证

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. 选择身份提供程序。![选择身份提供程序选项](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. 选择 **Allow creation of accounts with built-in authentication**。 ![选择内置身份验证选项](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 阅读警告，然后单击 **Ok**。

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### 邀请您的身份提供程序覆盖范围外的用户在您的实例上进行身份验证

在用户接受邀请后，他们可以使用用户名和密码登录，无需通过 IdP。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

### 延伸阅读

- "[使用 LDAP](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap)"
- "[使用 SAML](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)"
- "[使用 CAS](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)"
