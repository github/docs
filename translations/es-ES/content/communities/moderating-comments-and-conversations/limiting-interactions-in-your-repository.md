---
title: Limitar las interacciones en tu organización
intro: Puedes requerir temporalmente un periodo de actividad limitada para usuarios específicos en un repositorio público.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067254'
---
## Acerca de los límites de interacción temporales

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Después de que pase el periodo de tu límite, los usuarios pueden reanudar sus actividades normales en tu repositorio.

{% data reusables.community.types-of-interaction-limits %}

También puedes habilitar las limitaciones de actividad en todos los repositorios que pertenecen a tu cuenta personal o a una organización. Si se habilita un límite a lo largo de la organización o del usuario, no podrás limitar la actividad para los repositorios individuales que pertenezcan a la cuenta. Para obtener más información, consulta "[Limitación de las interacciones para la cuenta de usuario](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account)" y "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".

## Limitar las interacciones en tu organización

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. En la barra lateral, seleccione **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} Moderation options** (Opciones de moderación) y haga clic en **Interaction limits** (Límites de interacción).
{% data reusables.community.set-interaction-limit %} ![Opciones de límite de interacción temporales](/assets/images/help/repository/temporary-interaction-limits-options.png)

## Información adicional
- "[Notificación de abusos o correos no deseados](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Administración del acceso de un individuo a un repositorio de la organización](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Niveles de permisos para un repositorio de una cuenta personal](/articles/permission-levels-for-a-user-account-repository)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Administración de moderadores en la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)"
