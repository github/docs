---
title: Acerca de las revisiones de solicitudes de extracción
intro: 'Las revisiones le permiten a los colaboradores comentar los cambios propuestos en las solicitudes de extracción, aprobar los cambios o solicitar más cambios antes de que se fusione la solicitud de extracción. Los administradores de repositorio pueden solicitar que todas las solicitudes de extracción sean aprobadas antes de ser fusionadas.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
ms.openlocfilehash: b68da308dc1e405f2b8fff5b0dd85dadbeabef80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179411'
---
## Acerca de las revisiones de solicitudes de extracción

Después de abrir una solicitud de incorporación de cambios, cualquiera con acceso de *lectura* puede revisar y comentar los cambios propuestos. También puedes sugerir cambios específicos a las líneas de código que el autor puede aplicar directamente desde las solicitud de extracción. Para más información, vea "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Los colaboradores y los propietarios del repositorio pueden solicitar la revisión de una solicitud de extracción por parte de una persona específica. Los miembros de la organización también pueden solicitar la revisión de una solicitud de extracción por parte de un equipo con acceso de lectura al repositorio. Para más información, vea "[Solicitud de la revisión de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)". Puedes especificar un subconjunto de miembros del equipo que se asignarán automáticamente en lugar de todo el equipo. Para más información, consulta "[Administración de la configuración de revisión del código para el equipo](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)".

Las revisiones permiten el debate de los cambios propuestos y ayudan a asegurarse de que los cambios cumplen con las pautas de contribución del repositorio y otras normas de calidad. Puedes definir qué individuos o equipos poseen ciertos tipos o áreas de código en un archivo CODEOWNERS. Cuando una solicitud de extracción modifica un código que tiene un propietario definido, ese individuo o equipo será solicitado automáticamente como revisor. Para más información, vea "[Acerca de los propietarios del código](/articles/about-code-owners/)".

{% ifversion fpt or ghec %}Puede programar recordatorios para las solicitudes de incorporación de cambios que se deban revisar. Para más información, vea "[Administración de recordatorios programados para solicitudes de incorporación de cambios](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)".{% endif %}

![Encabezado de revisión solicitando cambios con comentarios en la línea](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Un revisión tiene tres posibles estado:
- **Comentario**: se envían comentarios generales sin aprobar de manera explícita los cambios ni solicitar cambios adicionales.
- **Aprobar**: se envían comentarios y se aprueba la combinación de los cambios propuestos en la solicitud de incorporación de cambios.
- **Solicitar cambios**: se envían comentarios que se deben abordar antes de que se pueda combinar la solicitud de incorporación de cambios.

![Imagen de los estados de revisión](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Puedes ver todas las revisiones que ha recibido una solicitud de extracción en la cronología de conversaciones y puedes ver las revisiones realizadas por los colaboradores y los propietarios del repositorio en la casilla de fusión de la solicitud de extracción.

![Imagen de las revisiones en una casilla de fusión](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Volver a solicitar una revisión

{% data reusables.pull_requests.re-request-review %}

## Revisiones requeridas

{% data reusables.pull_requests.required-reviews-for-prs-summary %} Para más información, vea "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

{% tip %}

**Sugerencia**: Si es necesario, los usuarios con acceso de *administrador* o *escritura* a un repositorio pueden descartar una revisión de solicitud de incorporación de cambios. Para más información, vea "[Descarte de la revisión de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

{% endtip %}

## Información adicional

- "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Visualización de una revisión de solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
- "[Establecimiento de instrucciones para colaboradores del repositorio](/articles/setting-guidelines-for-repository-contributors)"
