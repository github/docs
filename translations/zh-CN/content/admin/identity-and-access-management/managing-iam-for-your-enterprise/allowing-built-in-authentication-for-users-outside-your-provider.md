---
title: 允许对提供程序覆盖范围以外的用户进行内置身份验证
intro: 您可以配置回退身份验证，以允许对在 CAS、LDAP 或 SAML 身份验证提供程序上没有帐户的人员进行内置身份验证。
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: 回退身份验证
---

## 关于对提供程序覆盖范围以外的用户进行内置身份验证

默认情况下，当您为 {% data variables.product.product_name %} 启用外部身份验证时，将为您的实例禁用内置身份验证。 更多信息请参阅“[关于企业的身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)”。

如果无法将特定帐户添加到外部身份验证提供程序（如承包商或计算机用户的帐户），则可以配置回退身份验证。 回退身份验证允许外部用户进行内置身份验证，并在身份验证提供程序不可用时访问回退帐户。

如果配置了内置身份验证，并且某人成功使用 SAML 或 CAS 进行身份验证，则该人员将不再有权选择使用用户名和密码进行身份验证。 如果用户使用 LDAP 成功地完成身份验证，凭据将不再被视为内部凭据。

{% warning %}

**警告**：如果您禁用内置身份验证，则必须单独挂起不应具有实例访问权限的任何用户。 更多信息请参阅“[挂起和取消挂起用户](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)”。

{% endwarning %}

## 为您的提供程序覆盖范围外的用户配置内置身份验证

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. 选择身份提供程序。![选择身份提供程序选项](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. 选择 **Allow creation of accounts with built-in authentication**。 ![选择内置身份验证选项](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 阅读警告，然后单击 **Ok**。

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## 邀请您的提供程序覆盖范围外的用户在您的实例上进行身份验证

在用户接受邀请后，他们可以使用用户名和密码登录，无需通过 IdP。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## 延伸阅读

- “[将 CAS 用于企业 IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)”
- “[将 LDAP 用于企业 IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)”
- “[将 SAML 用于企业 IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)”
