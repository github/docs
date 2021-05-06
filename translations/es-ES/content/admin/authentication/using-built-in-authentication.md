---
title: Usar la autenticación integrada
intro: 'Cuando usas el método de autenticación predeterminado, todos los detalles de autenticación se almacenan dentro de {% data variables.product.product_location %}. La autenticación integrada es el método predeterminado, si ya no tienes un proveedor de autenticación establecido, como LDAP, SAML o CAS.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Puedes crear mensajes personalizados que los usuarios verán en las páginas de inicio de sesión y de cierre de sesión. Para obtener más información, consulta "[Personalizar mensajes de usuario en tu instancia](/enterprise/admin/user-management/customizing-user-messages-on-your-instance)."

### Configurar la autenticación integrada

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecciona **Autenticación integrada**. ![Seleccionar la opción autenticación integrada](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Crear tu cuenta y agregar usuarios

Una vez que se ha creado tu instancia, necesitarás crear tu propia cuenta de administrador y usarla para aprovisionar usuarios.

1. En la página "Crear cuenta de administrador " en `http(s)://[hostname]/join`, elige tu nombre de usuario, contraseña y dirección de correo electrónico, luego haz clic en **Crear una cuenta**. ![Crear cuenta de administrador](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}
