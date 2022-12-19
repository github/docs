---
title: Administrar comentarios negativos
intro: 'Puedes {% ifversion fpt or ghec %}ocultar, editar,{% else %}editar{% endif %}o eliminar comentarios sobre incidencias, solicitudes de incorporación de cambios y confirmaciones.'
redirect_from:
  - /articles/editing-a-comment
  - /articles/deleting-a-comment
  - /articles/managing-disruptive-comments
  - /github/building-a-strong-community/managing-disruptive-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage comments
ms.openlocfilehash: f27a310b0ee299839967f6db402c6fdebbc129f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117657'
---
## Ocultar un comentario

{% ifversion fpt or ghec %}Los moderadores de la organización y cualquier persona{% else %}Cualquiera{% endif %} con acceso de escritura a un repositorio pueden ocultar comentarios sobre incidencias, solicitudes de incorporación de cambios y confirmaciones.

Si un comentario está fuera de tema, desactualizado o resuelto, es posible que desees ocultarlo para mantener el foco de la conversación o facilitar la navegación o la revisión de una solicitud de extracción. Los comentarios ocultos están minimizados pero las personas con acceso de lectura a un repositorio puede expandirlos.

![Contenido minimizado](/assets/images/help/repository/hidden-comment.png)

1. Navega hasta el comentario que deseas ocultar.
2. En la esquina superior derecha del comentario, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Hide** (Ocultar).
  ![El icono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Ocultar y Eliminar](/assets/images/help/repository/comment-menu.png)
3. Utilizando el menú desplegable "Choose a reason" (Elige una razón), haz clic en una razón para ocultar el comentario. Luego, haga clic en **Hide comment** (Ocultar comentario).
  {% ifversion fpt or ghec %} ![Menú desplegable para elegir el motivo a fin de ocultar el comentario](/assets/images/help/repository/choose-reason-for-hiding-comment.png) {% else %} ![Menú desplegable para elegir el motivo a fin de ocultar el comentario](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png) {% endif %}

## Desocultar un comentario

{% ifversion fpt or ghec %}Los moderadores de la organización y cualquier persona{% else %}Cualquiera{% endif %} con acceso de escritura a un repositorio pueden mostrar comentarios sobre incidencias, solicitudes de incorporación de cambios y confirmaciones.

1. Navega hasta el comentario que deseas desocultar.
2. En la esquina superior derecha del comentario, haga clic en **{% octicon "fold" aria-label="The fold icon" %} Show comment** (Mostrar comentario).
   ![Texto para mostrar el comentario](/assets/images/help/repository/hidden-comment-show.png)
3. En el lateral derecho del comentario expandido, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Unhide** (Mostrar).
   ![El icono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Mostrar y Eliminar](/assets/images/help/repository/comment-menu-hidden.png)

## Editar un comentario

Cualquiera con acceso de escritura a un repositorio puede editar comentarios sobre reportes de problemas, solicitudes de extracción y confirmaciones.

Es adecuado editar un comentario y quitar contenido que no contribuya a la conversación e infrinja el código de conducta de la comunidad{% ifversion fpt or ghec %} o las [Directrices de la comunidad](/free-pro-team@latest/github/site-policy/github-community-guidelines) de GitHub{% endif %}.

A veces puede resultar útil indicar claramente las ediciones y su justificación.

Ahora bien, cualquier persona con acceso de lectura a un repositorio puede ver el historial de ediciones de un comentario. El menú desplegable **edited** (editado) situado en la parte superior del comentario incluye un historial de las ediciones y muestra el usuario y la marca de tiempo de cada edición.

![Comentario con nota adicional que indica que el contenido fue redactado](/assets/images/help/repository/content-redacted-comment.png)

## Censura de información confidencial

Los autores de los comentarios y cualquiera con acceso de escritura a un repositorio puede también eliminar información sensible de un historial de edición de los comentarios. Para obtener más información, vea "[Seguimiento de cambios en un comentario](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment)".

1. Navega hasta el comentario que deseas editar.
2. En la esquina superior derecha del comentario, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Edit** (Editar).
  ![El icono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Ocultar, Eliminar e Informar](/assets/images/help/repository/comment-menu.png)
3. En la ventana de comentarios, elimine el contenido que quiere quitar y, después, escriba `[REDACTED]` para reemplazarlo.
  ![Ventana de comentario con contenido redactado](/assets/images/help/issues/redacted-content-comment.png)
4. En la parte inferior del comentario, escribe una nota que indique que has editado el comentario, y de forma opcional, la razón por la que editaste el comentario.
  ![Ventana de comentario con nota adicional que indica que el contenido se ha redactado](/assets/images/help/issues/note-content-redacted-comment.png)
5. Haga clic en **Update comment** (Actualizar comentario).

## Eliminar un comentario

Cualquiera con acceso de escritura a un repositorio puede borrar comentarios sobre reportes de problemas, solicitudes de extracción y confirmaciones. Los propietarios de organizaciones, mantenedores de equipos, y el autor del comentario también pueden borrarlo en la página del equipo.

Si un comentario contiene algún contenido constructivo que suma a la conversación en cuanto a la propuesta o a la solicitud de extracción, puedes editar el comentario.

Eliminar un comentario es tu último recurso como moderador. Es adecuado eliminar un comentario si todo este no agrega contenido constructivo a una conversación e infringe el código de conducta de la comunidad{% ifversion fpt or ghec %} o las [Directrices de la comunidad](/free-pro-team@latest/github/site-policy/github-community-guidelines) de GitHub{% endif %}.

Eliminar un comentario crea un evento cronológico que es visible para todos aquellos que tienen acceso de lectura al repositorio. Sin embargo, el nombre de usuario de la persona que eliminó el comentario solo es visible para personas con acceso de escritura al repositorio. Para aquellos que no tienen acceso de escritura, el evento cronológico es anónimo.

![Evento cronológico anónimo para un comentario eliminado](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

{% note %}

**Nota**: El comentario inicial (o cuerpo) de una incidencia o solicitud de incorporación de cambios no puede eliminarse. Por el contrario, puedes editar los cuerpos de la propuesta o de la solicitud de extracción para eliminar el contenido no deseado.

{% endnote %}

### Pasos para eliminar un comentario

1. Navega hasta el comentario que deseas eliminar.
2. En la esquina superior derecha del comentario, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Delete** (Eliminar).
  ![El icono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Ocultar, Eliminar e Informar](/assets/images/help/repository/comment-menu.png)
3. De forma opcional, escribe un comentario señalando que eliminaste un comentario y el porqué.

{% ifversion fpt or ghec %}
## Información adicional
- "[Administración de moderadores en la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)" {% endif %} 
