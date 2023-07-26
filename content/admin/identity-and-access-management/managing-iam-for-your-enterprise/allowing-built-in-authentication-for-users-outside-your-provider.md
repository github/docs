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

By default, when you enable external authentication for {% data variables.product.product_name %}, built-in authentication is disabled for your instance. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)."

If you're unable to add specific accounts to your external authentication provider, such as accounts for contractors or machine users, you can configure fallback authentication. Fallback authentication allows built-in authentication for outside users and to access a fallback account if your authentication provider is unavailable.

If you configure built-in authentication and a person successfully authenticates with SAML or CAS, the person will no longer have the option to authenticate with a username and password. If a user successfully authenticates with LDAP, the credentials are no longer considered internal.

{% warning %}

**Warning:** If you disable built-in authentication, you must individually suspend any users that should no longer have access to the instance. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)."

{% endwarning %}

## Configuring built-in authentication for users outside your provider

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Under "Authentication", select your authentication method.
1. Select **Allow creation of accounts with built-in authentication**.
1. Read the warning, then click **Ok**.

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Inviting users outside your provider to authenticate to your instance

When a user accepts the invitation, they can use their username and password to sign in rather than signing in through the IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Further reading

- "[AUTOTITLE](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[AUTOTITLE](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"
