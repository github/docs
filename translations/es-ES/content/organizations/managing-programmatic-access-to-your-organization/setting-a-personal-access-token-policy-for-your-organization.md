---
title: Establecimiento de una directiva de token de acceso personal en la organización
intro: 'Los propietarios de organizaciones pueden controlar si permitir el uso de un {% data variables.product.pat_v2 %} y de {% data variables.product.pat_v1_plural %}, así como requerir aprobación para un {% data variables.product.pat_v2 %}.'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106473'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Restricción del acceso mediante un {% data variables.product.pat_v2 %}

Los propietarios de organizaciones pueden impedir que un {% data variables.product.pat_v2 %} acceda a los recursos pertenecientes a la organización. Con ese {% data variables.product.pat_v2_caps %} seguirá siendo posible leer los recursos públicos dentro de la organización. Esta configuración solo controla el acceso mediante un {% data variables.product.pat_v2 %}, no mediante {% data variables.product.pat_v1_plural %}. Para obtener más información sobre cómo restringir el acceso mediante {% data variables.product.pat_v1_plural %}, consulta "[Restricción del acceso mediante {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" en esta página.

{% ifversion ghec or ghes or ghae %} Si tu organización es propiedad de una empresa y el propietario de esa empresa ha restringido el acceso mediante un {% data variables.product.pat_v2 %}, no podrás invalidar esta directiva en tu organización. Para obtener más información, consulta "[Aplicación de directivas de {% data variables.product.pat_generic %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)."{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Configuración**.
1. En **{% data variables.product.pat_v2_caps %}** , selecciona la opción acorde a tus necesidades:
   - **Permitir el acceso mediante un {% data variables.product.pat_v2 %}** : se puede acceder a los recursos propiedad de la organización mediante un {% data variables.product.pat_v2_caps %}.
   - **Restringir el acceso mediante un {% data variables.product.pat_v2 %}** : no se puede acceder a los recursos propiedad de la organización mediante un {% data variables.product.pat_v2_caps %}. Las claves SSH creadas con un {% data variables.product.pat_v2 %} seguirán funcionando.
1. Haga clic en **Save**(Guardar).

## Aplicación de una directiva de aprobación de {% data variables.product.pat_v2 %}

Los propietarios de organizaciones pueden requerir la aprobación de cada {% data variables.product.pat_v2 %} que puede acceder a la organización. Con ese {% data variables.product.pat_v2_caps %} se seguirán pudiendo leer recursos públicos dentro de la organización sin necesidad de aprobación. Un {% data variables.product.pat_v2_caps %} creado por los propietarios de la organización no necesitará aprobación.

{% ifversion ghec or ghes or ghae %} Si tu organización es propiedad de una empresa y el propietario de esa empresa ha establecido una directiva de aprobación de {% data variables.product.pat_v2 %}, no podrás invalidar esta directiva en tu organización. Para obtener más información, consulta "[Aplicación de directivas de {% data variables.product.pat_generic %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)."{% endif %}

{% note %}

**Nota**: Solo están sujetos a aprobación los {% data variables.product.pat_v2 %}, no los {% data variables.product.pat_v1_plural %}. A menos que la organización tenga acceso restringido mediante {% data variables.product.pat_v1_plural %}, cualquier {% data variables.product.pat_v1 %} puede acceder a los recursos de la organización sin aprobación previa. Para obtener más información, consulta "[Restricción del acceso mediante {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" en esta página.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Configuración**.
1. En **Requerir aprobación de {% data variables.product.pat_v2 %}** , selecciona la opción acorde a tus necesidades:
   - **Requerir aprobación del administrador**: un propietario de organización debe aprobar cada {% data variables.product.pat_v2 %} que puede acceder a la organización. Un {% data variables.product.pat_v2_caps %} creado por los propietarios de la organización no necesitará aprobación.
   - **No requerir aprobación del administrador**: un {% data variables.product.pat_v2_caps %} creado por los miembros de la organización puede acceder a los recursos de la organización sin aprobación previa.
1. Haga clic en **Save**(Guardar).

## Restricción del acceso mediante {% data variables.product.pat_v1_plural %}

Los propietarios de organizaciones pueden impedir que los {% data variables.product.pat_v1_plural %} accedan a los recursos pertenecientes a la organización. Con esos {% data variables.product.pat_v1_caps_plural %} se seguirán pudiendo leer los recursos públicos dentro de la organización. Esta configuración solo controla el acceso mediante {% data variables.product.pat_v1_plural %}, no con un {% data variables.product.pat_v2 %}. Para obtener más información sobre cómo restringir el acceso mediante un {% data variables.product.pat_v2 %}, consulta "[Restricción del acceso mediante un {% data variables.product.pat_v2 %}](#restricting-access-by-fine-grained-personal-access-tokens)" en esta página.

{% ifversion ghec or ghes or ghae %} Si tu organización es propiedad de una empresa y el propietario de esa empresa ha restringido el acceso mediante {% data variables.product.pat_v1_plural %}, no podrás invalidar esta directiva en tu organización. Para obtener más información, consulta "[Aplicación de directivas de {% data variables.product.pat_generic %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)."{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Configuración**.
1. En **{% data variables.product.pat_v1_caps %}** , selecciona la opción acorde a tus necesidades:
   - **Permitir el acceso mediante {% data variables.product.pat_v1_plural %}** : los {% data variables.product.pat_v1_caps_plural %} pueden acceder a los recursos propiedad de la organización.
   - **Restringir el acceso mediante {% data variables.product.pat_v1_plural %}** : los {% data variables.product.pat_v1_caps_plural %} no pueden acceder a los recursos propiedad de la organización. Las claves SSH creadas con {% data variables.product.pat_v1_plural %} seguirán funcionando.
1. Haga clic en **Save**(Guardar).
