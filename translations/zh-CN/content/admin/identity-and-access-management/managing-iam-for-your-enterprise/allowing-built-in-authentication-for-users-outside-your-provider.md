---
title: Allowing built-in authentication for users outside your provider
intro: 'You can configure fallback authentication to allow built-in authentication for people who don''t have an account on your CAS, LDAP, or SAML authentication provider.'
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
shortTitle: Fallback authentication
---

## About built-in authentication for users outside your provider

By default, when you enable external authentication for {% data variables.product.product_name %}, built-in authentication is disabled for your instance. For more information, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)."

If you're unable to add specific accounts to your external authentication provider, such as accounts for contractors or machine users, you can configure fallback authentication. Fallback authentication allows built-in authentication for outside users and to access a fallback account if your authentication provider is unavailable.

If you configure built-in authentication and a person successfully authenticates with SAML or CAS, the person will no longer have the option to authenticate with a username and password. 如果用户使用 LDAP 成功地完成身份验证，凭据将不再被视为内部凭据。

{% warning %}

**警告**：如果您禁用内置身份验证，则必须单独挂起不应具有实例访问权限的任何用户。 更多信息请参阅“[挂起和取消挂起用户](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)”。

{% endwarning %}

## Configuring built-in authentication for users outside your provider

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. 选择身份提供程序。![选择身份提供程序选项](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. 选择 **Allow creation of accounts with built-in authentication**。 ![选择内置身份验证选项](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 阅读警告，然后单击 **Ok**。

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Inviting users outside your provider to authenticate to your instance

在用户接受邀请后，他们可以使用用户名和密码登录，无需通过 IdP。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## 延伸阅读

- "[Using CAS for enterprise IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Using LDAP for enterprise IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Using SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"
