---
title: Using built-in authentication
intro: 'When you use the default authentication method, all authentication details are stored within {% data variables.product.product_location %}. Built-in authentication is the default method if you don’t already have an established authentication provider, such as LDAP, SAML, or CAS.'
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
You can create custom messages that users will see on the sign in and sign out pages. For more information, see "[Customizing user messages on your instance](/enterprise/admin/user-management/customizing-user-messages-on-your-instance)."

## Configuring built-in authentication

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Select **Built in authentication**.
![Select built-in authentication option](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Creating your account and adding users

Once your instance has been created, you'll need to create your own admin account and use it to provision users.

1. On the "Create Admin Account" page at `http(s)://[hostname]/join`, choose your username, password, and email address, then click **Create an account**.
![Create Admin Account](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}
