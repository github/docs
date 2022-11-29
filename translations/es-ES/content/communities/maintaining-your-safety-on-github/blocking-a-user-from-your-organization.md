---
title: Bloquear a un usuario de tu organización
intro: Los propietarios y moderadores de la organización pueden impedir que cualquier persona que no sea miembro de la organización colabore en los repositorios de la organización.
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your org
ms.openlocfilehash: 527ce4fcf92946836f7a3d93e5caf07193561d4b
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164359'
---
Puede bloquear a los usuarios que no son miembros desde la configuración de la organización o desde un comentario específico que realice un usuario. Al bloquear a un usuario en un comentario, puedes elegir si deseas enviar una notificación al usuario explicando que fue bloqueado y por qué. De lo contrario, el usuario no será notificado directamente que ha sido bloqueado. Los usuarios bloqueados aún podrán borrar el contenido existente.

{% data reusables.organizations.blocking-a-user %}

{% tip %}

**Sugerencia**: Si bloquea a un usuario debido a una conversación acalorada, considere bloquear dicha conversación para que solo puedan comentar los colaboradores. Para obtener más información, consulte "[Bloqueo de conversaciones](/communities/moderating-comments-and-conversations/locking-conversations)".

{% endtip %}

Al momento en que bloqueas a un usuario de tu organización:
- El usuario deja de ver los repositorios de la organización
- Las asignaciones con estrella y las propuestas del usuario se eliminarán de tus repositorios
- Se borrarán los votos del usuario sobre los comentarios y debates en los repositorios de tu organización
- El usuario será eliminado como colaborador en los repositorios de tu organización
- Las contribuciones del usuario ya no contarán como tales para ellos en los repositorios de tu organización
- Cualquier repositorio o invitación de la organización pendientes para el usuario bloqueado se cancelará

Una vez que has bloqueado a un usuario de tu organización, no podrá:
- Realizar referencias cruzadas con repositorios de la organización en comentarios
- Bifurca, observa, fija, o marca con una estrella los repositorios de tu organización

En los repositorios de tu organización, los usuarios bloqueados tampoco podrán:
- Abrir propuestas
- Envía, cierra, o fusiona las solicitudes de extracción
- Comentar propuestas, solicitudes de extracción o confirmaciones
- Agregar o editar páginas wiki

## Bloquear a un usuario en un comentario

1. Desplázate hasta el comentario cuyo autor deseas bloquear.
2. En la esquina superior derecha del comentario, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Block user**. (Bloquear usuario).
![El icono de kebab horizontal y el menú de moderación de comentario que muestra la opción de bloqueo del usuario](/assets/images/help/repository/comment-menu-block-user.png)
3. Si deseas establecer un límite de tiempo para el bloqueo, usa el menú desplegable Block user (Bloquear usuario), y selecciona el período que deseas bloquear al usuario.
![Bloquear límite de tiempo en el menú desplegable para bloquear al usuario](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. Si quiere ocultar todos los comentarios que realizó el usuario en la organización, seleccione **Hide this user's comments** (Ocultar los comentarios de este usuario) y elija un motivo.
![Enviar una notificación en el menú desplegable para bloquear al usuario](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. Si quiere notificar al usuario el motivo por el que se le ha bloqueado, seleccione **Send a notification to this user** (Enviar una notificación a este usuario).
![Enviar una notificación en el menú desplegable para bloquear al usuario](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. Para bloquear al usuario, haga clic en **Block user from organization** (Bloquear usuario de la organización) o **Block user from organization and send message** (Bloquear usuario de la organización y enviar un mensaje).
![Botón Block user (Bloquear usuario)](/assets/images/help/organizations/org-block-user-button-in-comment.png)

## Bloquear a un usuario en los parámetros de la organización

1. Para bloquear a un miembro de la organización, en primer lugar [quite el usuario](/articles/removing-a-member-from-your-organization) de la organización.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
6. En "Block a user" (Bloquear a un usuario), escribe el nombre de usuario del usuario que deseas bloquear.
![Campo Username (Nombre de usuario)](/assets/images/help/organizations/org-block-username-field.png)
7. Si deseas establecer un límite de tiempo para el bloqueo, usa el menú desplegable Block options (Bloquear opciones), y selecciona el período que deseas bloquear al usuario.
![Menú desplegable con las opciones de bloqueo](/assets/images/help/organizations/org-block-options-menu.png)
8. Haga clic en **Block user** (Bloquear usuario).
![Botón Block (Bloquear)](/assets/images/help/organizations/org-block-user-button.png)

## Información adicional

- "[Ver usuarios bloqueados de su organización](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)"
- "[Bloquear a un usuario de su organización](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[Bloquear a un usuario desde su cuenta personal](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[Desbloquear a un usuario desde su cuenta personal](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Notificar un abuso o correo no deseado](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
