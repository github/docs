---
title: Configurar la autenticación integrada
intro: 'When you use the default authentication method, all authentication details are stored on {% data variables.product.product_location %}.'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
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

By default, {% data variables.product.product_name %} uses built-in authentication. Each person creates a user account on {% data variables.product.product_location %} from an invitation or by signing up, and then authenticates with the credentials for the account to access your instance. Your {% data variables.product.product_name %} instance stores the authentication information for the account.

You can prevent unauthenticated people from creating new user accounts on your instance. Para obtener más información, consulta la sección "[Inhabilitar los inicios de sesión no autenticados](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Configurar la autenticación integrada

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecciona **Autenticación integrada**. ![Seleccionar la opción autenticación integrada](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Crear tu cuenta

Una vez que se ha creado tu instancia, necesitarás crear tu propia cuenta de administrador.

1. En la página "Crear cuenta de administrador " en `http(s)://[hostname]/join`, elige tu nombre de usuario, contraseña y dirección de correo electrónico, luego haz clic en **Crear una cuenta**. ![Crear cuenta de administrador](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}

## Pasos siguientes

<a name="inviting-users"></a>

After you configure built-in authentication and create your administrative account, you can invite people to create accounts and use your instance. For more information, see "[Inviting people to use your instance](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)."

## Leer más

- "[Configurar el correo electrónico para notificaciones](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)"
