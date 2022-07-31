---
title: Bloquear conversaciones
intro: 'Los propietarios y colaboradores del repositorio, y las personas con acceso de escritura, pueden bloquear conversaciones sobre propuestas, solicitudes de extracción y confirmaciones de manera permanente o temporal para desactivar una interacción subida de tono.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
---

Es adecuado fijar una conversación cuando toda ella carece de comentarios constructivos o cuando viola el código de conducta de tu comunidad{% ifversion fpt or ghec %} o los [Lineamientos comunitarios](/free-pro-team@latest/github/site-policy/github-community-guidelines) de GitHub{% endif %}. Cuando bloqueas una conversación, también puedes especificar el motivo, que queda públicamente visible.

Bloquear una conversación genera un evento de cronología que queda visible para cualquiera que tenga acceso de lectura al repositorio. Sin embargo, el nombre de usuario de la persona que bloqueó la conversación solo lo pueden ver las personas con acceso de escritura al repositorio. Para cualquiera que no tenga acceso de escritura, el evento de cronología es anónimo.

![Evento de cronología anónimo de una conversación bloqueada](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

Mientras una conversación está bloqueada, solo [las personas con acceso de escritura](/articles/repository-permission-levels-for-an-organization/) y [los propietarios y colaboradores del repositorio](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account) pueden agregar, ocultar y eliminar comentarios.

Para buscar conversaciones bloqueadas en un repositorio que no está archivado, puedes usar los calificadores de búsqueda `is:locked` y `archived:false`. Las conversaciones se bloquean de forma automática en los repositorios archivados. Para obtener más información, consulta "[Buscar propuestas y solicitudes de extracción](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)".

1. De manera opcional, escribe un comentario que explique el motivo por el cual estás bloqueando la conversación.
2. En el margen derecho de la propuesta o solicitud de extracción, o por encima del cuadro de comentarios de la página de confirmaciones, haz clic en **Lock conversation** (Bloquear conversación). ![Enlace Lock conversation (Bloquear conversación)](/assets/images/help/repository/lock-conversation.png)
3. De manera opcional, elige el motivo para bloquear la conversación. ![Menú Reason for locking a conversation (Motivo para bloquear una conversación)](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Lee la información acerca de bloquear conversaciones y haz clic en **Lock conversation on this issue** (Bloquear conversación sobre esta propuesta), **Lock conversation on this pull request** (Bloquear conversación sobre esta solicitud de extracción) o **Lock conversation on this commit** (Bloquear conversación sobre esta confirmación). ![Cuadro de diálogo Confirm lock with a reason (Confirmar bloqueo con motivo)](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. Cuando estés listo para desbloquear la conversación, haz clic en **Unlock conversation** (Desbloquear conversación). ![Enlace Unlock conversation (Anular bloqueo de la conversación)](/assets/images/help/repository/unlock-conversation.png)

## Leer más

- "[Configurar tu proyecto para contribuciones positivas](/communities/setting-up-your-project-for-healthy-contributions)"
- [Utilizar plantillas para promover informes de problemas y solicitudes de extracción útiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)"
- [Administrar los comentarios ofensivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"{% ifversion fpt or ghec %}
- "[Mantener tu seguridad en {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"
- "[Informar abuso o spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Limitar interacciones en tu repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"
{% endif %}
