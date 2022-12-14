---
title: Solicitar autenticación de dos factores para una organización
intro: 'Le puedes solicitar a los miembros de la organización y a los colaboradores externos que activen la autenticación de dos factores para sus cuentas personales en una organización, para que sea más difícil para los actores maliciosos acceder a los parámetros y los repositorios de una organización.'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: Require 2FA
ms.openlocfilehash: 2f7fe986cf3b13a171f85da9d5fdb74eeed0d648
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331644'
---
Cuando utilizas LDAP o la autenticación integrada, la autenticación bifactorial será compatible en {% data variables.product.product_location %}. Los administradores de la organización le pueden solicitar a los miembros que tengan la autenticación de dos factores activada.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Para más información, vea "[Acerca de la autenticación en dos fases](/github/authenticating-to-github/about-two-factor-authentication)".

## Requisitos para aplicar la autenticación de dos factores

Para poder exigir que los miembros de la organización y los colaboradores externos usen 2FA, debe [habilitar la autenticación en dos fases](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa/) en la cuenta personal propia.

{% warning %}

**Advertencias:**

- Cuando solicitas la autenticación de dos factores, los miembros y los colaboradores externos (incluidas cuentas bot) que no usan la 2FA serán eliminados de la organización y perderán acceso a sus repositorios, incluidas sus bifurcaciones de los repositorios privados. Si habilitan 2FA para su cuenta personal en un plazo de tres meses después de quitarse de la organización, puede [restablecer sus privilegios de acceso y su configuración](/enterprise/user/articles/reinstating-a-former-member-of-your-organization).
- Cuando se solicita la 2FA, los miembros de la organización o los colaboradores externos que desactiven la 2FA se eliminarán automáticamente de la organización.
- Si eres el único propietario de una organización que requiere autenticación de dos factores, no podrás inhabilitar la 2FA de tu cuenta personal sin inhabilitar la autenticación de dos factores para la organización.

{% endwarning %}

Antes de solicitar el uso de la autenticación de dos factores, te recomendamos notificar a los miembros de la organización y a los colaboradores externos y pedirles que configuren la 2FA para sus cuentas. Puede [ver si los miembros y colaboradores externos ya usan 2FA](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) en la pestaña Personas de una organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %}

## Ver las personas que se eliminaron de tu organización

Para ver a las personas que se han quitado automáticamente de la organización por incumplir los requisitos de autenticación en dos fases, puede [buscar en el registro de auditoría](/enterprise/admin/guides/installation/searching-the-audit-log/) mediante `reason:two_factor_requirement_non_compliance` en el campo de búsqueda.

{% data reusables.audit_log.octicon_icon %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Escriba la consulta de búsqueda con `reason:two_factor_requirement_non_compliance`.
 ![Evento de registro de auditoría de herramientas del personal en el que se muestra un usuario quitado por incumplimiento de 2FA](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Para restringir la búsqueda:
    - Miembros de la organización quitados, escriba `action:org.remove_member AND reason:two_factor_requirement_non_compliance`
    - Colaboradores externos quitados, escriba `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

  También puedes ver las personas eliminadas de una organización en particular usando el nombre de la organización en tu búsqueda:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Haga clic en **Buscar**.  

## Ayudar a que los miembros y colaboradores externos eliminados se vuelvan a unir a tu organización

Si algún miembro o colaborador externo se eliminó de la organización cuando habilitaste el uso requerido de autenticación de dos factores, recibirá un correo electrónico que le notifique que ha sido eliminado. Debe entonces habilitar la 2FA para su cuenta personal y contactarse con un propietario de la organización para solicitar acceso a tu organización.

## Información adicional

- "[Visualización de si los usuarios de la organización han habilitado la autenticación en dos fases](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Protección de la cuenta con la autenticación en dos fases (2FA)](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Readmisión de un miembro anterior de la organización](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)"
- "[Readmisión del acceso a la organización para un colaborador externo antiguo](/enterprise/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
