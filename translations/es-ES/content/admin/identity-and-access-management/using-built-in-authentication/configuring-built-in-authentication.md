---
title: Configurar la autenticación integrada
intro: 'Cuando usas el método de autenticación predeterminado, todos los detalles de autenticación se almacenan en {% data variables.product.product_location %}.'
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
ms.openlocfilehash: 6fbcd68efc953b5a32139a6907975e6918976860
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717817'
---
## Acerca de la autenticación integrada

De forma predeterminada, {% data variables.product.product_name %} usa la autenticación integrada. Cada persona crea una cuenta de usuario en {% data variables.product.product_location %} a partir de una invitación o mediante registro y, luego, se autentica con las credenciales de la cuenta para acceder a la instancia. La instancia de {% data variables.product.product_name %} almacena la información de autenticación de la cuenta.

Puedes impedir que las personas no autenticadas creen nuevas cuentas de usuario en la instancia. Para más información, consulta "[Deshabilitación de los registros no autenticados](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Configurar la autenticación integrada

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. Selecciona la opción **Autenticación integrada**.
![Selección de la opción de autenticación integrada](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## Crear tu cuenta

Una vez que se ha creado tu instancia, necesitarás crear tu propia cuenta de administrador.

1. En la página "Crear cuenta de administrador" de `http(s)://[hostname]/join`, elige el nombre de usuario, la contraseña y la dirección de correo electrónico y, a continuación, haz clic en **Crear una cuenta**.
![Crear cuenta de administrador](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## Pasos siguientes

<a name="inviting-users"></a>

Después de configurar la autenticación integrada y crear la cuenta administrativa, puedes invitar a los usuarios a crear cuentas y usar la instancia. Para más información, consulta "[Invitar a personas a usar la instancia](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)".

## Información adicional

- "[Configuración del correo electrónico para las notificaciones](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)"
