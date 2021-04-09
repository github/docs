---
title: Permitir autenticación integrada para usuarios fuera de tu proveedor de identidad
intro: 'Puedes configurar una autenticación integrada para autenticar usuarios que no tienen acceso a tu proveedor de identidad que usa LDAP, SAML o CAS.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  enterprise-server: '*'
topics:
  - empresa
---

### Acerca de la autenticación integrada para usuarios fuera de tu proveedor de identidad

Puedes utilizar la autenticación integrada para usuarios externos cuando no puedes agregar cuentas específicas a tu proveedor de identidad (IdP), como cuentas para contratistas o usuarios de equipos. También puedes usar la autenticación integrada para acceder a una cuenta de reserva si el proveedor de identidad no está disponible.

Una vez que se configura la autenticación integrada y un usuario autentica exitosamente con SAML o CAS, ya no tendrá la opción de autenticar con un nombre de usuario y una contraseña. Si un usuario autentica exitosamente con LDAP, las credenciales ya no se consideran internas.

La autenticación integrada para un IdP se desactiva por defecto.

{% warning %}

**Advertencia:** Si desactivas la autenticación integrada, debes suspender individualmente a todo usuario que ya no debe tener acceso a la instancia. Para obtener más información, consulta [Suspender y anular suspensión de usuarios](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)."

{% endwarning %}

### Configurar autenticación integrada para usuarios fuera de tu proveedor de identidad

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. Selecciona tu proveedor de identidad. ![Seleccionar la opción proveedor de identidad](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Selecciona **Permitir la creación de cuentas con autenticación integrada**. ![Seleccionar la opción autenticación integrada](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Lee la advertencia, luego haz clic en **Aceptar**.

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Invitar a usuarios fuera de tu proveedor de identidad a autenticar tu instancia

Cuando un usuario acepta la invitación, puede utilizar su nombre de usuario y contraseña para iniciar sesión en lugar de iniciar sesión a través del IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

### Leer más

- "[Usar LDAP](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap)"
- "[Usar SAML](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)"
- "[Usar CAS](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)"
