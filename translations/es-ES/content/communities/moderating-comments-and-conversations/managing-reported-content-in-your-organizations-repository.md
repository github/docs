---
title: Administrar el contenido reportado en el repositorio de tu organización
intro: 'Una vez que un colaborador reporta contenido ofensivo en un repositorio, los mantenedores del mismo pueden ver y administrar esta información.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117650'
---
Cualquiera con permisos de administrador para un repositorio puede ver y administrar el contenido reportado del mismo.

## Acerca de la administración del contenido reportado

Antes de ver o administrar el contenido reportado, debes habilitar esta opción para el repositorio. Para obtener más información, consulta "[Administrar la forma en que los colaboradores reportan abusos en el repositorio de tu organización](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)".

Puedes rastrear, clasificar y responder a los reportes de contenido ofensivo. Puedes ver todos los reportes y navegar directamente a cada comentario en {% data variables.product.prodname_dotcom %} dentro del listado de "Reportes de abuso".

{% data reusables.community.tools-for-moderating %}

Cuando termines de moderar el contenido ofensivo, puedes marcar el reporte como resuelto. Si decides que aún no has terminado de moderarlo, también puedes marcarlo como no resuelto.

## Ver el contenido que reportó un colaborador

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. A la derecha del contenido notificado que quieres ver, haz clic en {% octicon "kebab-horizontal" aria-label="The edit icon" %} y, a continuación, haz clic en **Ver contenido**.
  !["Ver contenido" en la lista desplegable Editar para el contenido notificado](/assets/images/help/repository/reported-content-report-view-content.png)

## Resolver un reporte

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. A la derecha del informe que quieres resolver, haz clic en {% octicon "kebab-horizontal" aria-label="The edit icon" %} y, a continuación, haz clic en **Marcar como resuelto**.
  !["Marcar como resuelto" en la lista desplegable Editar para el contenido notificado](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## Marcar un reporte como no resuelto

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. A la derecha del informe del que quieres anular la resolución, haz clic en {% octicon "kebab-horizontal" aria-label="The edit icon" %} y, a continuación, haz clic en **Marcar como no resuelto**.
  !["Marcar como no resuelto" en la lista desplegable Editar para el contenido notificado](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## Información adicional

- "[Acerca de la administración y moderación de la comunidad](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)"
