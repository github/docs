---
title: Comentar en una solicitud de extracción
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: 'Luego de abrir una solicitud de extracción en un repositorio, los colaboradores o miembros del equipo pueden comentar sobre la comparación de archivos entre dos ramas especificadas, o dejar comentarios generales en el proyecto en general.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578960'
---
## Acerca de los comentarios de las solicitudes de extracción

Puedes comentar en la pestaña **Conversación** de una solicitud de incorporación de cambios para dejar comentarios generales, preguntas o propuestas. También puedes sugerir cambios que el autor de la solicitud de extracción puede aplicar directamente desde tu comentario.

![Conversación de solicitud de extracción](/assets/images/help/pull_requests/conversation.png)

También puedes comentar en secciones específicas de un archivo en la pestaña **Archivos modificados** de una solicitud de incorporación de cambios en forma de comentarios de línea individuales o como parte de una [revisión de solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews). Agregar comentarios en la línea es una gran manera de debatir preguntas sobre la implementación o brindar retroalimentación al autor.

Para obtener más información sobre cómo agregar comentarios de línea a una revisión de solicitud de incorporación de cambios, consulta "[Revisión de cambios propuestos en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

{% note %}

**Nota:** Si respondes a una solicitud de incorporación de cambios por correo electrónico, el comentario se agregará en la pestaña **Conversación** y no formará parte de una revisión de la solicitud de incorporación de cambios.

{% endnote %}

Para responder a un comentario de línea existente, deberás ir al comentario en la pestaña **Conversación** o en la pestaña **Archivos modificados** y agregar un comentario de línea adicional debajo de él.

{% tip %}

**Sugerencias:**
- Los comentarios de solicitud de incorporación de cambios admiten el mismo [formato](/categories/writing-on-github) que los comentarios normales en {% data variables.product.product_name %}, como @mentions, emoji y referencias.
- Puedes agregar reacciones a los comentarios en las solicitudes de incorporación de cambios en la pestaña **Archivos modificados**.

{% endtip %}

## Agregar comentarios en la línea a una solicitud de extracción

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción en la que deseas dejar los comentarios en la línea.
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. Cuando hayas terminado, haz clic en **Agregar comentario único**.
  ![Ventana de comentario en línea](/assets/images/help/commits/inline-comment.png)

Cualquier persona que observe la solicitud de extracción o el repositorio recibirá una notificación de tu comentario.

{% data reusables.pull_requests.resolving-conversations %}

## Información adicional

- "[Escribir en GitHub](/github/writing-on-github)" {% ifversion fpt or ghec %}- "[Informar de abuso o correo no deseado](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)" {% endif %}
