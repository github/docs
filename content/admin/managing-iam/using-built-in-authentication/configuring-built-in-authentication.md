---
title: Configuring built-in authentication
intro: 'When you use the default authentication method, all authentication details are stored on {% data variables.location.product_location %}.'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configure built-in authentication
---

## About built-in authentication

By default, {% data variables.product.product_name %} uses built-in authentication. Each person creates a user account on {% data variables.location.product_location %} from an invitation or by signing up, and then authenticates with the credentials for the account to access your instance. Your {% data variables.product.product_name %} instance stores the authentication information for the account.

{% ifversion passkeys %}

By default, users can use passkeys for built-in authentication, but you can disable passkeys for your instance. See "[AUTOTITLE](/admin/managing-iam/using-built-in-authentication/disabling-passkeys-for-your-instance)."

{% endif %}

You can prevent unauthenticated people from creating new user accounts on your instance. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)."

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Configuring built-in authentication

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Under "Authentication", select **Built in authentication**.
{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Creating your account

Once your instance has been created, you'll need to create your own admin account.

1. On the "Create Admin Account" page at `http(s)://[hostname]/join`, type your username, password, and email address, then click **Create an account**.
{% data reusables.enterprise_site_admin_settings.sign-in %}

## Next steps

<a name="inviting-users"></a>

After you configure built-in authentication and create your administrative account, you can invite people to create accounts and use your instance. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)."

## Further reading

* "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)"
