---
title: Requerir autenticación en dos fases en la organización
intro: 'Los propietarios de la organización pueden requerir que los {% ifversion fpt or ghec %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} habiliten la autenticación de dos factores para sus cuentas personales, lo que hace que sea más complicado para los actores maliciosos acceder a los repositorios y parámetros de una organización.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Require 2FA
ms.openlocfilehash: 1a6ea397b010855917f9304db9a5c51cb5440a22
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147872307'
---
## Acerca de la autenticación bifactorial para las organizaciones

{% data reusables.two_fa.about-2fa %} Puede exigir a todos los {% ifversion fpt or ghec %}miembros, colaboradores externos y gerentes de facturación{% else %}miembros y colaboradores externos{% endif %} de la organización que habiliten la autenticación en dos fases en {% data variables.product.product_name %}. Para obtener información más detallada sobre la autenticación en dos fases, consulte "[Asegurar la cuenta con autenticación en dos fases (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

{% ifversion fpt or ghec %}

También puedes requerir autenticación bifactorial para las organizaciones en una empresa. Para obtener más información, consulte "[Aplicación de directivas de configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)".

{% endif %}

{% warning %}

**Advertencias:**

- Cuando exige el uso de autenticación en dos fases en la organización, los {% ifversion fpt or ghec %}miembros, colaboradores externos y gerentes de facturación{% else %}miembros y colaboradores externos{% endif %} (incluidas las cuentas de bot) que no utilicen la autenticación en dos fases se eliminarán de la organización y perderán el acceso a sus repositorios. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización. Si habilitan la autenticación en dos fases en sus cuentas personales dentro de un plazo de tres meses a partir de la fecha de eliminación de la organización, puede [restablecer sus privilegios de acceso y su configuración](/articles/reinstating-a-former-member-of-your-organization).
- Si un propietario o miembro de la organización,{% ifversion fpt or ghec %} un gerente de facturación{% endif %} o un colaborador externo deshabilita la autenticación en dos fases en su cuenta personal después de que usted haya configurado la autenticación en dos fases obligatoria, se le eliminará automáticamente de la organización.
- Si eres el único propietario de una organización que requiere autenticación de dos factores, no podrás inhabilitar la 2FA de tu cuenta personal sin inhabilitar la autenticación de dos factores para la organización.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## Prerrequisitos

Para poder exigir a los {% ifversion fpt or ghec %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} que utilicen la autenticación en dos fases, debe habilitarla en su cuenta de {% data variables.product.product_name %}. Para obtener más información, consulte "[Asegurar la cuenta con autenticación en dos fases (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

Antes de exigir el uso de la autenticación en dos fases, le recomendamos avisar a los {% ifversion fpt or ghec %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} y pedirles que configuren la autenticación en dos fases en sus cuentas. Puedes ver si los miembros y colaboradores externos ya utilizan la 2FA. Para obtener más información, consulte "[Ver si los usuarios de la organización han habilitado la autenticación en dos fases](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled)".

## Requerir autenticación en dos fases en la organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %} {% ifversion fpt or ghec %}
8. Si algún miembro o colaborador externo se elimina de tu organización, te recomendamos enviarle una invitación para reinstalar sus privilegios antiguos y el acceso a tu organización. Deben habilitar la autenticación de dos factores para poder aceptar la invitación.
{% endif %}

## Ver las personas que se eliminaron de tu organización

Para ver a las personas eliminadas automáticamente de la organización por incumplir los requisitos de autenticación en dos fases, puede [buscar en el registro de auditoría](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log) los usuarios eliminados de la organización. El evento de registro de auditoría mostrará si se eliminó a una persona por no cumplir con la 2FA.

![Evento de registro de auditoría que muestra un usuario eliminado por no cumplir con la 2FA](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Ingresa tu consulta de búsqueda. Para buscar por:
    - Miembros eliminados de la organización, use `action:org.remove_member` en la consulta de búsqueda.
    - Colaboradores externos eliminados, use `action:org.remove_outside_collaborator` en la consulta de búsqueda{% ifversion fpt or ghec %}.
    - Gerentes de facturación eliminados, use `action:org.remove_billing_manager` en la consulta de búsqueda{% endif %}

 También puede ver a las personas eliminadas de su organización so utiliza un [período de tiempo](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) en la búsqueda.

## Ayudar a que los miembros y colaboradores externos eliminados se vuelvan a unir a tu organización

Si algún miembro o colaborador externo se eliminó de la organización cuando habilitaste el uso requerido de autenticación de dos factores, recibirá un correo electrónico que le notifique que ha sido eliminado. Debe entonces habilitar la 2FA para su cuenta personal y contactarse con un propietario de la organización para solicitar acceso a tu organización.

## Información adicional

- "[Visualización de si los usuarios de la organización han habilitado la autenticación en dos fases](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Protección de la cuenta con la autenticación en dos fases (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Readmisión de un miembro anterior de la organización](/articles/reinstating-a-former-member-of-your-organization)"
- "[Readmisión del acceso a la organización para un colaborador externo antiguo](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
