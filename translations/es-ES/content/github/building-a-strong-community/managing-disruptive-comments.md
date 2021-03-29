---
title: Administrar comentarios negativos
intro: 'Puedes {% if currentVersion == "free-pro-team@latest" %}ocultar, editar, {% else %}editar{% endif %} o borrar comentarios en propuestas, solicitudes de cambios y confirmaciones.'
redirect_from:
  - /articles/editing-a-comment/
  - /articles/deleting-a-comment/
  - /articles/managing-disruptive-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidad
---

### Ocultar un comentario

Cualquiera con acceso de escritura a un repositorio puede ocultar comentarios en reportes de problemas, solicitudes de extracción y confirmaciones.

Si un comentario está fuera de tema, desactualizado o resuelto, es posible que desees ocultar un comentario para mantener la conversación enfocada o hacer que una solicitud de extracción sea más fácil de navegar o revisar. Los comentarios ocultos se minimizan pero las personas con acceso de lectura a un repositorio puede expandirlos.

![Contenido minimizado](/assets/images/help/repository/hidden-comment.png)

1. Navega hasta el comentario que deseas ocultar.
2. En la esquina superior derecha del comentario, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, después haz clic en **Hide (Ocultar)**. ![El ícono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Ocultar y Eliminar](/assets/images/help/repository/comment-menu.png)
3. Utilizando el menú desplegable "Choose a reason" (Elige una razón), haz clic en una razón para ocultar el comentario. Después haz clic en **Hide comment (Ocultar comentario)**.
  {% if currentVersion == "free-pro-team@latest" %}
  ![Elija la razón para ocultar el menú desplegable de comentarios](/assets/images/help/repository/choose-reason-for-hiding-comment.png)
  {% else %}
  ![Elija la razón para ocultar el menú desplegable de comentarios](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png)
  {% endif %}

### Desocultar un comentario

Cualquiera con acceso de escritura a un repositorio puede volver a mostrar comentarios sobre reportes de problemas, solicitudes de extracción y confirmaciones.

1. Navega hasta el comentario que deseas desocultar.
2. En la esquina superior derecha del comentario, haz clic en **{% octicon "fold" aria-label="The fold icon" %} Show comment (Mostrar comentario)**. ![Mostrar el texto del comentario](/assets/images/help/repository/hidden-comment-show.png)
3. En el lateral derecho del comentario expandido, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} (el ícono de kebab horizontal), después **Unhide (Desocultar)**. ![El ícono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Desocultar y Eliminar](/assets/images/help/repository/comment-menu-hidden.png)

### Editar un comentario

Cualquiera con acceso de escritura a un repositorio puede editar comentarios sobre reportes de problemas, solicitudes de extracción y confirmaciones.

Es adecuado editar un comentario y eliminar el contenido que no haga ninguna colaboración con la conversación y viole el código de conducta de tu comunidad{% if currentVersion == "free-pro-team@latest" %} o los [Lineamientos comunitarios](/articles/github-community-guidelines) de GitHub{% endif %}.

Cuando editas un comentario, toma nota de la ubicación desde la que se ha eliminado el contenido y, de manera opcional, la razón por la que se lo eliminó.

Cualquier persona con acceso de lectura a un repositorio puede ver el historial de edición del comentario. El menú desplegable **editado** en la parte superior del comentario contiene un historial de las ediciones y muestra el usuario y el registro de horario de cada edición.

![Comentario con nota adicional que el contenido fue redactado](/assets/images/help/repository/content-redacted-comment.png)

Los autores de los comentarios y cualquiera con acceso de escritura a un repositorio puede también eliminar información sensible de un historial de edición de los comentarios. Para obtener más información, consulta "[Rastrear los cambios en un comentario](/github/building-a-strong-community/tracking-changes-in-a-comment)".

1. Navega hasta el comentario que deseas editar.
2. En la esquina superior derecha del comentario, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, después haz clic en **Edit (Editar)**. ![El ícono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Ocultar, Eliminar e Informar](/assets/images/help/repository/comment-menu.png)
3. En la ventana de comentario, elimina el contenido que deseas eliminar, después escribe `[REDACTED]` para reemplazarlo. ![Ventana de comentario con contenido redactado](/assets/images/help/issues/redacted-content-comment.png)
4. En la parte inferior del comentario, escribe una nota que indique que has editado el comentario, y de forma opcional, la razón por la que editaste el comentario. ![Ventana de comentario con nota adicional que indica que el contenido fue redactado](/assets/images/help/issues/note-content-redacted-comment.png)
5. Haz clic en **Update comment (Actualizar comentario)**.

### Eliminar un comentario

Cualquiera con acceso de escritura a un repositorio puede borrar comentarios sobre reportes de problemas, solicitudes de extracción y confirmaciones. Los propietarios de organizaciones, mantenedores de equipos, y el autor del comentario también pueden borrarlo en la página del equipo.

Eliminar un comentario es tu último recurso como moderador. Es correcto eliminar un comentario si todo este falla en añadir contenido constructivo a una conversación y viola el código de conducta de tu comunidad{% if currentVersion == "free-pro-team@latest" %} o los [Lineamientos comunitarios](/articles/github-community-guidelines) de GitHub{% endif %}.

Eliminar un comentario crea un evento cronológico que es visible para todos aquellos que tienen acceso de lectura al repositorio. Sin embargo, el nombre de usuario de la persona que eliminó el comentario solo es visible para personas con acceso de escritura al repositorio. Para cualquiera que no tenga acceso de escritura, el evento de cronología es anónimo.

![Evento cronológico anónimo para un comentario eliminado](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

Si un comentario contiene algún contenido constructivo que sume a la conversación en cuanto a la propuesta o a la solicitud de extracción, puedes editar el comentario.

{% note %}

**Nota:** el comentario inicial (o cuerpo) de una propuesta o solicitud de extracción no puede eliminarse. Por el contrario, pueden editar los cuerpos de la propuesta o de la solicitud de extracción para eliminar el contenido no deseado.

{% endnote %}

1. Navega hasta el comentario que deseas eliminar.
2. En la esquina superior derecha del comentario, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, después haz clic en **Delete (Eliminar)**. ![El ícono de kebab horizontal y el menú de moderación de comentario que muestra las opciones Editar, Ocultar, Eliminar e Informar](/assets/images/help/repository/comment-menu.png)
3. De forma opcional, escribe un comentario señalando que eliminaste un comentario y el porqué.
