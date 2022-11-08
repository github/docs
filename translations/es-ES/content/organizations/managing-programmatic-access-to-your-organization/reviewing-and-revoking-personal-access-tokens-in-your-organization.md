---
title: Revisión y revocación de tokens de acceso personal en la organización
intro: 'Los propietarios de la organización pueden revisar cualquier {% data variables.product.pat_v2 %} que tenga acceso a la organización. También pueden revocar el acceso de un {% data variables.product.pat_v2 %} específico.'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: b45401441473f892ba61cf199852588e2a3b3d67
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131381'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Acerca de la revisión y la revocación de un {% data variables.product.pat_v2 %}

Los propietarios de la organización pueden ver cualquier {% data variables.product.pat_v2 %} que tenga acceso a los recursos que pertenecen a la organización. Los propietarios de la organización también pueden revocar el acceso en función del {% data variables.product.pat_v2 %}. Cuando se revoca un {% data variables.product.pat_v2 %}, las claves SSH que haya creado el token seguirán funcionando y el token seguirá pudiendo leer los recursos públicos de la organización.

Cuando se revoque un token, el usuario que lo creó recibirá una notificación por correo electrónico.

Los propietarios de la organización solo pueden ver y revocar {% data variables.product.pat_v2 %}, no {% data variables.product.pat_v1_plural %}. A menos que la organización {% ifversion ghec or ghes or ghae %}o empresa {% endif %}tenga acceso restringido por {% data variables.product.pat_v1_plural %}, cualquier {% data variables.product.pat_v1 %} puede acceder a los recursos de la organización hasta que el token expire. Para obtener más información sobre cómo restringir el acceso por {% data variables.product.pat_v1_plural %}, consulta "[Establecimiento de una directiva de {% data variables.product.pat_generic %} para la organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)"{% ifversion ghec or ghes or ghae %} y "[Aplicación de directivas para {% data variables.product.pat_generic %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)"{% endif %}.

{% ifversion ghec %} Los propietarios de la organización también pueden ver y revocar {% data variables.product.pat_v1_plural %} si la organización requiere el inicio de sesión único de SAML. Para obtener más información, consulta "[Visualización y administración del acceso SAML de un usuario a la empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials)". Para obtener más información sobre cómo usar la API REST para hacerlo, consulta "[Enumeración de las autorizaciones de inicio de sesión único de SAML para una organización](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization)" y "[Eliminación de una autorización de inicio de sesión único de SAML para una organización](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization)".{% endif %}

## Revisión y revocación de un {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Tokens activos**. Se mostrará cualquier {% data variables.product.pat_v2 %} que pueda acceder a la organización.
1. Haz clic en el nombre del token que quieres revisar o revocar.
1. Revisa el acceso y los permisos que tiene el token.
1. Para revocar el acceso a la organización en función del token, haz clic en **Revocar**.

Como alternativa, puedes revocar varios tokens a la vez:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Tokens activos**. Se mostrará cualquier {% data variables.product.pat_v2 %} que pueda acceder a la organización.
{% data reusables.user-settings.patv2-filters %}
1. Selecciona cada token que quieras revocar.
1. Selecciona el menú desplegable **Tokens seleccionados…** y haz clic en **Revocar…**
