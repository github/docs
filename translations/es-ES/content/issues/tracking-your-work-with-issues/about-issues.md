---
title: Acerca de las propuestas
intro: 'Utiliza {% data variables.product.prodname_github_issues %} para rastrear ideas, retroalimentación, tareas o errores para trabajar en {% data variables.product.company_short %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147422736'
---
## Integrado con GitHub

Las propuestas te permiten rastrear tu trabajo en {% data variables.product.company_short %}, donde sucede el desarrollo. Cuando mencionas una propuesta en otra propuesta o solicitud de cambios, la línea de tiempo de la propuesta refleja la referencia cruzada para que puedas rastrear el trabajo relacionado. Para indicar que el trabajo está en curso, puedes enlazar una propeusta a una solicitud de cambios. Cuando la solicitud de cambios se fusiona, la propuesta enlazada se cierra automáticamente.

Para más información acerca de las palabras clave, consulta "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

## Crea propuestas rápidamente

Las propuestas pueden crearse de varias formas, así que puedes elegir el método más conveniente para tu flujo de trabajo. Por ejemplo, puede crear una incidencia a partir de un repositorio,{% ifversion fpt or ghec %} un elemento de una lista de tareas,{% endif %} una nota en un proyecto, un comentario en una incidencia o solicitud de incorporación de cambios, una línea de código específica o una consulta de dirección URL. También puedes crear una propuesta desde tu plataforma de elección: a través de la UI web, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, las API de GraphQL y de REST o desde {% data variables.product.prodname_mobile %}. Para más información, vea "[Creación de una incidencia](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".

## Seguimiento del trabajo

Puedes organizar y priorizar las propuestas con los proyectos. {% ifversion fpt or ghec %} Para realizar un seguimiento de las incidencias como parte de una incidencia de mayor tamaño, puede usar listas de tareas.{% endif %} Para clasificar las incidencias relacionadas, puede usar etiquetas e hitos.

Para obtener más información sobre los proyectos, consulta {% ifversion projects-v2 %}"[Acerca de los proyectos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)." {% else %}"[Organización del trabajo con paneles de proyecto](/issues/organizing-your-work-with-project-boards)". {% endif %} {% ifversion fpt or ghec %} Para obtener más información sobre las listas de tareas, consulta "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)". {% endif %}Para obtener más información sobre las etiquetas y los hitos, vea "[Uso de etiquetas e hitos para realizar un seguimiento del trabajo](/issues/using-labels-and-milestones-to-track-work)".

## Manténgase actualizado.

Para mantenerte actualizado sobre la mayoría de los comentarios recientes de una propuesta, puedes suscribirte a ella para recibir notificaciones sobre las confirmaciones más recientes. Para encontrar rápidamente los enlaces a los informes de problemas recientemente actualizados a los cuales te has suscrito, visita tu tablero. Para obtener más información, consulta "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications)" y "[Acerca de tu panel personal](/articles/about-your-personal-dashboard)".

## Administración de comunidad

Para ayudar a los colaboradores a abrir incidencias significativas que proporcionen la información que necesita, puede usar los {% ifversion fpt or ghec %}formularios de incidencias y las {% endif %}plantillas de incidencias. Para más información, vea "[Uso de plantillas para fomentar incidencias útiles y solicitudes de incorporación de cambios](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

{% ifversion fpt or ghec %}Para mantener una comunidad saludable, puede notificar comentarios que infrinjan las [Directrices de la comunidad](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. Para obtener más información, vea "[Notificación de abusos o correo no deseado](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)".{% endif %}

## Comunicación eficiente

Puede @mention colaboradores que tengan acceso a su repositorio en una incidencia para dirigir su atención a un comentario. Para vincular las incidencias relacionadas en el mismo repositorio, puede escribir `#` seguido de parte del título de la incidencia y luego hacer clic en la que quiera vincular. Para comunicar la responsabilidad, puedes asignar propuestas. Si frecuentemente te encuentras tecleando el mismo comentario, puedes utilizar las respuestas guardadas.
{% ifversion fpt or ghec %} Para obtener más información, vea "[Sintaxis básica de escritura y formato](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" y "[Asignación de incidencias y solicitudes de incorporación de cambios a otros usuarios de GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".
{% endif %} {% ifversion discussions %}
## Comparar propuestas y debates

Algunas conversaciones son más adecuadas para los {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} Para obtener instrucciones sobre cuándo usar una incidencia o un debate, vea "[Comunicación en GitHub](/github/getting-started-with-github/quickstart/communicating-on-github)".

Cuando una conversación en una propuesta se adecua mejor para un debate, puedes intentar convertir la propuesta en debate.
{% endif %}
