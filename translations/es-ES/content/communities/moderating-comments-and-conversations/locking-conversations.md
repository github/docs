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
ms.openlocfilehash: 986d23cb4fe9850cb6c6824e9a3f2c256b6fd4e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092379'
---
Es correcto bloquear una conversación cuando no toda es constructiva, o bien infringe el código de conducta de la comunidad{% ifversion fpt or ghec %} o las [Directrices de la comunidad](/free-pro-team@latest/github/site-policy/github-community-guidelines) de GitHub{% endif %}. Cuando bloqueas una conversación, también puedes especificar el motivo, que queda públicamente visible.

Bloquear una conversación genera un evento de cronología que queda visible para cualquiera que tenga acceso de lectura al repositorio. Sin embargo, el nombre de usuario de la persona que bloqueó la conversación solo lo pueden ver las personas con acceso de escritura al repositorio. Para aquellos que no tienen acceso de escritura, el evento cronológico es anónimo.

![Evento de cronología anónimo de una conversación bloqueada](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

Mientras una conversación está bloqueada, solo los [usuarios con acceso de escritura](/articles/repository-permission-levels-for-an-organization/) y los [propietarios y colaboradores del repositorio](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account) pueden agregar, ocultar y eliminar comentarios.

Para buscar conversaciones bloqueadas en un repositorio que no está archivado, puede usar los calificadores de búsqueda `is:locked` y `archived:false`. Las conversaciones se bloquean de forma automática en los repositorios archivados. Para más información, vea "[Búsqueda de incidencias y solicitudes de incorporación de cambios](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)".

1. De manera opcional, escribe un comentario que explique el motivo por el cual estás bloqueando la conversación.
2. En el margen derecho de la incidencia o solicitud de incorporación de cambios, o encima del cuadro de comentarios de la página de confirmaciones, haga clic en **Bloquear conversación**.
![Vínculo Bloquear conversación](/assets/images/help/repository/lock-conversation.png)
3. De manera opcional, elige el motivo para bloquear la conversación.
![Menú Motivo para bloquear una conversación](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Lea la información sobre cómo bloquear conversaciones y haga clic en **Bloquear conversación en esta conversación**, **Bloquear conversación en esta solicitud de incorporación de cambios** o **Bloquear conversación en esta confirmación**.
![Cuadro de diálogo Confirmar bloqueo con motivo](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. Cuando esté listo para desbloquear la conversación, haga clic en **Desbloquear conversación**.
![Vínculo Desbloquear conversación](/assets/images/help/repository/unlock-conversation.png)

## Información adicional

- "[Configuración del proyecto para contribuciones correctas](/communities/setting-up-your-project-for-healthy-contributions)"
- "[Uso de plantillas para fomentar incidencias útiles y solicitudes de incorporación de cambios](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)"
- "[Administración de comentarios negativos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"{% ifversion fpt or ghec %}
- "[Mantenimiento de la seguridad en {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"
- "[Notificación de abusos o correos no deseados](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)" {% endif %}
