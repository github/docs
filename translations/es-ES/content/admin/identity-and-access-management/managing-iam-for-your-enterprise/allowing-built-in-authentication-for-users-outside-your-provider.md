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

If you configure built-in authentication and a person successfully authenticates with SAML or CAS, the person will no longer have the option to authenticate with a username and password. Si un usuario autentica exitosamente con LDAP, las credenciales ya no se consideran internas.

{% warning %}

**Advertencia:** Si desactivas la autenticación integrada, debes suspender individualmente a todo usuario que ya no debe tener acceso a la instancia. Para obtener más información, consulta "[Suspender y anular suspensión de usuarios](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)."

{% endwarning %}

## Configuring built-in authentication for users outside your provider

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecciona tu proveedor de identidad. ![Seleccionar la opción proveedor de identidad](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Selecciona **Permitir la creación de cuentas con autenticación integrada**. ![Seleccionar la opción autenticación integrada](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Lee la advertencia, luego haz clic en **Aceptar**.

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

## Inviting users outside your provider to authenticate to your instance

Cuando un usuario acepta la invitación, puede utilizar su nombre de usuario y contraseña para iniciar sesión en lugar de iniciar sesión a través del IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Leer más

- "[Utilizar CAS para el IAM empresarial](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Utilizar LDAP para el IAM empresarial](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Utilizar SAML para el IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"
