---
title: Permitir la autenticación integrada de los usuarios ajenos al proveedor
intro: 'Puedes configurar la autenticación de reserva a fin de permitir la autenticación integrada de los usuarios que no tienen cuenta en tu proveedor de autenticación SAML, LDAP o CAS.'
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
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064438'
---
## Acerca de la autenticación integrada de los usuarios ajenos al proveedor

De forma predeterminada, al habilitar la autenticación externa de {% data variables.product.product_name %}, la autenticación integrada está deshabilitada para la instancia. Para más información, consulta "[Acerca de la autenticación en tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)".

Si no puedes agregar cuentas específicas a tu proveedor de autenticación externo, como cuentas para contratistas o usuarios de máquinas, puedes configurar la autenticación de reserva. La autenticación de reserva permite la autenticación integrada de usuarios externos y el acceso a una cuenta de reserva si el proveedor de autenticación no está disponible.

Si configuras la autenticación integrada y un usuario se autentica correctamente con SAML o CAS, este ya no tendrá la opción de autenticarse con un nombre de usuario y una contraseña. Si un usuario autentica exitosamente con LDAP, las credenciales ya no se consideran internas.

{% warning %}

**Advertencia:** Si desactiva la autenticación integrada, debe suspender individualmente a todos los usuarios que ya no deban tener acceso a la instancia. Para más información, vea "[Suspensión y anulación de la suspensión de usuarios](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

{% endwarning %}

## Configuración de la autenticación integrada para usuarios ajenos al proveedor

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Selecciona tu proveedor de identidad.
  ![Selección de la opción de proveedor de identidades](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. Seleccione **Allow creation of accounts with built-in authentication** (Permitir la creación de cuentas con autenticación integrada).
  ![Selección de la opción de autenticación integrada](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. Lea la advertencia y haga clic en **Aceptar**.

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Invitar a los usuarios ajenos al proveedor a autenticarse en tu instancia

Cuando un usuario acepta la invitación, puede utilizar su nombre de usuario y contraseña para iniciar sesión en lugar de iniciar sesión a través del IdP.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## Información adicional

- "[Uso de CAS para IAM empresarial](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Uso de LDAP para IAM empresarial](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Uso de SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"
