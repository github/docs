---
title: Aplicación de directivas de tokens de acceso personal en la empresa
intro: 'Los propietarios de empresas pueden controlar si permitir el uso de un {% data variables.product.pat_v2 %} y de {% data variables.product.pat_v1_plural %}, así como requerir aprobación para un {% data variables.product.pat_v2 %}.'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
ms.openlocfilehash: 6252f7ac67fe77cbe20ab85ff2cbd6f04ac17905
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107009'
---
{% note %}

**Nota**: {% data reusables.user-settings.pat-v2-beta %}

Durante la versión beta, las empresas deben participar en el uso de {% data variables.product.pat_v2 %}. Si tu empresa aún no participa, se te pedirá que participes y establezcas directivas siguiendo los pasos que se indican a continuación.

Incluso si una empresa no participa en el uso de {% data variables.product.pat_v2 %}, las organizaciones propiedad de esa empresa sí pueden seguir participando. Todos los usuarios, incluidos los {% data variables.product.prodname_emus %}, pueden crear un {% data variables.product.pat_v2 %} que acceda a los recursos propiedad del usuario (como los repositorios creados en su cuenta), aun cuando la empresa no participe en el uso de {% data variables.product.pat_v2 %}.

{% endnote %}

## Restricción del acceso mediante un {% data variables.product.pat_v2 %}

Los propietarios de empresas pueden impedir el acceso a los recursos privados e internos de su propiedad mediante un {% data variables.product.pat_v2 %}. Con ese {% data variables.product.pat_v2_caps %} seguirá siendo posible acceder a los recursos públicos dentro de las organizaciones. Esta configuración solo controla el acceso mediante un {% data variables.product.pat_v2 %}s, no mediante {% data variables.product.pat_v1_plural %}. Para obtener más información sobre cómo restringir el acceso mediante {% data variables.product.pat_v1_plural %}, consulta "[Restricción del acceso mediante {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" en esta página.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. En {% octicon "law" aria-label="The law icon" %} **Directivas**, haz clic en **Organizaciones**.
1. En **Restringir el acceso con un {% data variables.product.pat_v2 %}** , selecciona la opción acorde a tus necesidades:
   - **Permitir que las organizaciones configuren los requisitos de acceso**: cada organización propiedad de la empresa puede decidir si restringir el acceso mediante un {% data variables.product.pat_v2 %}.
   - **Restringir el acceso mediante un {% data variables.product.pat_v2 %}** : no se puede acceder a las organizaciones pertenecientes a la empresa mediante un {% data variables.product.pat_v2_caps %}. Las claves SSH creadas con un {% data variables.product.pat_v2 %} seguirán funcionando. Las organizaciones no pueden invalidar esta configuración.
   - **Permitir el acceso mediante un {% data variables.product.pat_v2 %}** : se puede acceder a las organizaciones pertenecientes a la empresa mediante un {% data variables.product.pat_v2_caps %}. Las organizaciones no pueden invalidar esta configuración.
1. Haga clic en **Save**(Guardar).

## Aplicación de una directiva de aprobación de {% data variables.product.pat_v2 %}

Los propietarios de empresas pueden requerir a todas las organizaciones de su propiedad que aprueben cada {% data variables.product.pat_v2 %} que tenga acceso a la organización. Con ese {% data variables.product.pat_v2_caps %} se seguirán pudiendo leer recursos públicos dentro de la organización sin necesidad de aprobación. Lo mismo ocurre a la inversa: los propietarios de empresas pueden permitir el acceso a las organizaciones de la empresa mediante un {% data variables.product.pat_v2 %} sin aprobación previa. Los propietarios de empresas también pueden permitir que cada organización de la empresa elija su propia configuración de aprobación.

{% note %}

**Nota**: Solo están sujetos a aprobación los {% data variables.product.pat_v2 %}, no los {% data variables.product.pat_v1_plural %}. A menos que la organización o la empresa tenga acceso restringido mediante {% data variables.product.pat_v1_plural %}, cualquier {% data variables.product.pat_v1 %} puede acceder a los recursos de la organización sin aprobación previa. Para obtener más información sobre cómo restringir {% data variables.product.pat_v1_plural %}, consulta "[Restricción del acceso mediante {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" en esta página y "[Establecimiento de una directiva de {% data variables.product.pat_generic %} para la organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. En {% octicon "law" aria-label="The law icon" %} **Directivas**, haz clic en **Organizaciones**.
1. En **Requerir aprobación de {% data variables.product.pat_v2 %}** , selecciona la opción acorde a tus necesidades:
   - **Permitir que las organizaciones configuren los requisitos de aprobación**: cada organización propiedad de la empresa puede decidir si requerir la aprobación para que un {% data variables.product.pat_v2 %} pueda acceder a la organización.
   - **Requerir que las organizaciones usen el flujo de aprobación**: todas las organizaciones propiedad de la empresa deben aprobar cada {% data variables.product.pat_v2 %} que puede tener acceso a la organización. Un {% data variables.product.pat_v2_caps %} creado por los propietarios de la organización no necesitará aprobación. Las organizaciones no pueden invalidar esta configuración.
   - **Deshabilitar el flujo de aprobación en todas las organizaciones**: un {% data variables.product.pat_v2_caps %} creado por un miembro de la organización puede acceder a las organizaciones pertenecientes a la empresa sin aprobación previa. Las organizaciones no pueden invalidar esta configuración.
1. Haga clic en **Save**(Guardar).

## Restricción del acceso mediante {% data variables.product.pat_v1_plural %}

Los propietarios de empresas pueden impedir que los {% data variables.product.pat_v1_plural %} accedan a la empresa y a las organizaciones pertenecientes a ella. Con esos {% data variables.product.pat_v1_caps_plural %} se seguirá pudiendo acceder a los recursos públicos dentro de la organización. Esta configuración solo controla el acceso mediante {% data variables.product.pat_v1_plural %}, no con un {% data variables.product.pat_v2 %}. Para obtener más información sobre cómo restringir el acceso mediante un {% data variables.product.pat_v2 %}, consulta "[Restricción del acceso mediante un {% data variables.product.pat_v2 %}](#restricting-access-by-fine-grained-personal-access-tokens)" en esta página.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. En {% octicon "law" aria-label="The law icon" %} **Directivas**, haz clic en **Organizaciones**.
1. En **Restringir el acceso a las organizaciones mediante {% data variables.product.pat_v1_plural %}** , selecciona la opción acorde a tus necesidades:
   - **Permitir que las organizaciones configuren los requisitos de acceso de {% data variables.product.pat_v1_plural %}** : cada organización propiedad de la empresa puede decidir si restringir el acceso mediante {% data variables.product.pat_v1_plural %}.
   - **Restringir el acceso mediante {% data variables.product.pat_v1_plural %}** : no se puede acceder a la empresa o a las organizaciones propiedad de la empresa mediante {% data variables.product.pat_v1_caps_plural %}. Las claves SSH creadas con {% data variables.product.pat_v1_plural %} seguirán funcionando. Las organizaciones no pueden invalidar esta configuración.
   - **Permitir el acceso mediante {% data variables.product.pat_v1_plural %}** : se puede acceder a la empresa y a las organizaciones propiedad de la empresa mediante {% data variables.product.pat_v1_caps_plural %}. Las organizaciones no pueden invalidar esta configuración.
1. Haga clic en **Save**(Guardar).
