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
---

## Integrado con GitHub

Las propuestas te permiten rastrear tu trabajo en {% data variables.product.company_short %}, donde sucede el desarrollo. Cuando mencionas una propuesta en otra propuesta o solicitud de cambios, la línea de tiempo de la propuesta refleja la referencia cruzada para que puedas rastrear el trabajo relacionado. Para indicar que el trabajo está en curso, puedes enlazar una propeusta a una solicitud de cambios. Cuando la solicitud de cambios se fusiona, la propuesta enlazada se cierra automáticamente.

Para obtener más información sobre las palabras clave, consulta la sección "[enlazar una solicitud de cambios a una propuesta](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

## Crea propuestas rápidamente

Las propuestas pueden crearse de varias formas, así que puedes elegir el método más conveniente para tu flujo de trabajo. Por ejemplo, puedes crear una propuesta desde un repositorio,{% ifversion fpt or ghec %} un elemento en una lista de tareas,{% endif %} una nota en un proyecto, un comentario en una propuesta o solicitud de cambios, una línea específica de código o una consulta de URL. También puedes crear una propuesta desde tu plataforma de elección: a través de la UI web, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, las API de GraphQL y de REST o desde {% data variables.product.prodname_mobile %}. Para obtener más información, consulta la sección "[Crear una propuesta](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".

## Rastrea el trabajo

Puedes organizar y priorizar las propuestas con los proyectos. {% ifversion fpt or ghec %}Para rastrear las propuestas como parte de una propuesta más grande, puedes utilizar las listas de tareas.{% endif %} Para categorizar las propuestas relacionadas, puedes utilizar etiquetas e hitos.

Para obtener más información sobre los proyectos, consulta las secciones {% ifversion fpt or ghec %}"[Acerca de los proyectos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)" y {% endif %}"[Organizar tu trabajo con tableros de proyecto](/issues/organizing-your-work-with-project-boards)". {% ifversion fpt or ghec %}Para obtener más información sobre las listas de tareas, consulta la sección "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)". {% endif %}Para obtener más información sobre las etiquetas y los hitos, consulta la sección "[Utilizar etiquetas e hitos para rastrear el trabajo](/issues/using-labels-and-milestones-to-track-work)".

## Mantente actualizado

Para mantenerte actualizado sobre la mayoría de los comentarios recientes de una propuesta, puedes suscribirte a ella para recibir notificaciones sobre las confirmaciones más recientes. Para encontrar rápidamente los enlaces a los informes de problemas recientemente actualizados a los cuales te has suscrito, visita tu tablero. Para obtener más información, consulta la sección "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications)" y "[Acerca de tu tablero personal](/articles/about-your-personal-dashboard)".

## Administración de comunidad

Para ayudar a que los colaboradores abran propuestas significativas que proporcionen la información que necesiten, puedes utilizar {% ifversion fpt or ghec %}formatos de propuestas y {% endif %}plantillas de propuestas. Para obtener más información, consulta la sección "[Utilizar plantillas para fomentar las propuestas y solicitudes de cambio útiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% ifversion fpt or ghec %}Para mantener una comunidad saludable, puedes reportar comentrios que violen los [Lineamientos comunitarios](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Informar abuso o spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)".{% endif %}

## Comunicación eficiente

Puedes @mencionar colaboradores que tengan acceso a tu repositorio en una propuesta para dirigir su atención a un cometnario. Para enlazar las propuestas relacionadas en el mismo repositorio, puedes teclear `#` seguido de parte del título de la propuesta y luego hacer clic en la propueta que quieras enlazar. Para comunicar la responsabilidad, puedes asignar propuestas. Si frecuentemente te encuentras tecleando el mismo comentario, puedes utilizar las respuestas guardadas.
{% ifversion fpt or ghec %} Para obtener más información, consulta las secciones "[Sintaxis básica para escritura y formato](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" y "[Asignar propuestas y solicitudes de cambio a otros usuarios de GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".

## Comparar propuestas y debates

Algunas conversaciones son más adecuadas para los {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} Para orientarte sobre cuándo utilizar una propuesta o debate, consulta la sección "[Comuinicarte en GitHub](/github/getting-started-with-github/quickstart/communicating-on-github)".

Cuando una conversación en una propuesta se adecua mejor para un debate, puedes intentar convertir la propuesta en debate.
{% endif %}
