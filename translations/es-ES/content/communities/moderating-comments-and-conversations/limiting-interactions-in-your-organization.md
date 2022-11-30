---
title: Limitar las interacciones en tu organización
intro: Puedes requerir temporalmente un periodo de actividad limitada para usuarios específicos en todos los repositorios públicos que pertenezcan a tu organización.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limit interactions in org
ms.openlocfilehash: 03bfad7a0da3386b6205517deb66e6b923de8386
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066686'
---
## Acerca de los límites de interacción temporales

El limitar las interacciones en tu organización habilita los límites de interacción temporal para todos los repositorios públicos que pertenezcan a la organización. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Después de que pase el periodo de límite, los usuarios pueden reanudar sus actividades normales en los repositorios públicos de tu organización.

{% data reusables.community.types-of-interaction-limits %}

Los miembros de la organización no se verán afectados por ninguno de los tipos de límites.

Cuando habilitas limitaciones de actividad en toda la organización, no puedes habilitar o inhabilitar límites de interacción en los repositorios individuales. Para obtener más información sobre cómo limitar la actividad de un repositorio individual, consulte "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".

Los propietarios y moderadores de la organización también pueden bloquear a los usuarios durante un período de tiempo específico. Después de que expira el bloqueo, el usuario se desbloquea de manera automática. Para más información, vea "[Bloqueo de usuarios de la organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".

## Limitar las interacciones en tu organización


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. _Para los propietarios de las organizaciones:_ En la sección "Access" (Acceso) de la barra lateral, seleccione **{% octicon "report" aria-label="The report icon" %} Moderation** (Moderación) y, después, haga clic en **Interaction limits** (Límites de interacción).

   _Para los moderadores de las organizaciones:_ En la barra lateral, haga clic en **Interaction limits** (Límites de interacción).

{% data reusables.community.set-interaction-limit %} ![Opciones de límite de interacción temporales](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## Información adicional
- "[Notificación de abusos o correos no deseados](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Administración del acceso de un individuo a un repositorio de la organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Niveles de permisos para un repositorio de una cuenta personal](/articles/permission-levels-for-a-user-account-repository)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Administración de moderadores en la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
