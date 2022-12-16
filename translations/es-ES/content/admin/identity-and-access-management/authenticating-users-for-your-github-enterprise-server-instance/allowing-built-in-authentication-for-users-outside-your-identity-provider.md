---
title: Permitir autenticación integrada para usuarios fuera de tu proveedor de identidad
intro: You can configure built-in authentication to authenticate users who don't have access to your identity provider that uses LDAP, SAML, or CAS.
redirect_from:
- /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
- /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
- /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
- /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
shortTitle: Authentication outside IdP
ms.openlocfilehash: 6b78f8a0b1ec144b0eb9f4dd742b2548b79893df
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141517622"
---
## <a name="about-built-in-authentication-for-users-outside-your-identity-provider"></a>Acerca de la autenticación integrada para usuarios fuera de tu proveedor de identidad

Puedes utilizar la autenticación integrada para usuarios externos cuando no puedes agregar cuentas específicas a tu proveedor de identidad (IdP), como cuentas para contratistas o usuarios de equipos. También puedes usar la autenticación integrada para acceder a una cuenta de reserva si el proveedor de identidad no está disponible.  

Una vez que se configura la autenticación integrada y un usuario autentica exitosamente con SAML o CAS, ya no tendrá la opción de autenticar con un nombre de usuario y una contraseña. Si un usuario autentica exitosamente con LDAP, las credenciales ya no se consideran internas.

La autenticación integrada para un IdP se desactiva por defecto.

{% warning %}

**Advertencia:** Si desactiva la autenticación integrada, debe suspender individualmente a todos los usuarios que ya no deban tener acceso a la instancia. Para más información, vea "[Suspensión y anulación de la suspensión de usuarios](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)".

{% endwarning %}

## <a name="configuring-built-in-authentication-for-users-outside-your-identity-provider"></a>Configurar autenticación integrada para usuarios fuera de tu proveedor de identidad

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Selecciona tu proveedor de identidad.
  ![Selección de la opción de proveedor de identidades](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Seleccione **Allow creation of accounts with built-in authentication** (Permitir la creación de cuentas con autenticación integrada).
  ![Selección de la opción de autenticación integrada](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Lea la advertencia y haga clic en **Aceptar**.

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## <a name="inviting-users-outside-your-identity-provider-to-authenticate-to-your-instance"></a>Invitar a usuarios fuera de tu proveedor de identidad a autenticar tu instancia

Cuando un usuario acepta la invitación, puede utilizar su nombre de usuario y contraseña para iniciar sesión en lugar de iniciar sesión a través del IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## <a name="further-reading"></a>Información adicional

- "[Uso de LDAP](/enterprise/admin/authentication/using-ldap)"
- "[Uso de SAML](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)"
- "[Uso de CAS](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)"
