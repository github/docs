---
title: Allowing built-in authentication for users outside your identity provider
intro: 'You can configure built-in authentication to authenticate users who don''t have access to your identity provider that uses LDAP, SAML, or CAS.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---

### About built-in authentication for users outside your identity provider

You can use built-in authentication for outside users when you are unable to add specific accounts to your identity provider (IdP), such as accounts for contractors or machine users. You can also use built-in authentication to access a fallback account if the identity provider is unavailable.

After built-in authentication is configured and a user successfully authenticates with SAML or CAS, they will no longer have the option to authenticate with a username and password. If a user successfully authenticates with LDAP, the credentials are no longer considered internal.

Built-in authentication for a specific IdP is disabled by default.

{% warning %}

**Warning:** If you disable built-in authentication, you must individually suspend any users that should no longer have access to the instance. For more information, see "[Suspending and unsuspending users](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)."

{% endwarning %}

### Configuring built-in authentication for users outside your identity provider

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Select your identity provider. ![Select identity provider option](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Select **Allow creation of accounts with built-in authentication**. ![Select built-in authentication option](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Read the warning, then click **Ok**.

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Inviting users outside your identity provider to authenticate to your instance

When a user accepts the invitation, they can use their username and password to sign in rather than signing in through the IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

### Дополнительная литература

- "[Using LDAP](/enterprise/admin/authentication/using-ldap)"
- "[Using SAML](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)"
- "[Using CAS](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)"
