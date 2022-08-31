---
title: Bloquear a un usuario de tu organización
intro: Los propietarios y moderadores de las organizaciones pueden bloquear a cualquiera que no sea miembro de la organización para que no colabore en los repositorios de esta.
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Bloquear de tu organización
---

Puedes bloquear a quienes no sean miembros desde dentro de los ajustes de tu organización o desde un comentario específico que haya hecho un usuario. Al bloquear a un usuario en un comentario, puedes elegir si deseas enviar una notificación al usuario explicando que fue bloqueado y por qué. De lo contrario, el usuario no será notificado directamente que ha sido bloqueado. Los usuarios bloqueados aún podrán borrar el contenido existente.

Cuando bloqueas a un usuario, puedes elegir bloquearlo indefinidamente o durante un período determinado. Si bloqueas a alguien durante un tiempo determinado, estará desbloqueado automáticamente cuando caduque ese período. Si bloqueas a alguien indefinidamente, puedes desbloquearlo manualmente en cualquier momento. Para obtener más información, consulta "[Desbloquear a un usuario de tu organización](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)".

{% tip %}

**Tip:** Si bloqueas a un usuario debido a una conversación fuerte, considera bloquear dicha conversación para que solo puedan comentar los colaboradores. Para obtener más información, consulta "[Bloquear conversaciones](/communities/moderating-comments-and-conversations/locking-conversations)."

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
- Comentar sobre las propuestas, solicitudes de extracción o confirmaciones
- Agregar o editar páginas wiki

## Bloquear a un usuario en un comentario

1. Desplázate hasta el comentario cuyo autor deseas bloquear.
2. En la esquina superior derecha del comentario, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} (el ícono de kebab horizontal) , después haz clic en **Block user** (Bloquear usuario). ![El ícono de kebab horizontal y el menú de moderación de comentario que muestra las opciones de bloqueo del usuario](/assets/images/help/repository/comment-menu-block-user.png)
3. Si deseas establecer un límite de tiempo para el bloqueo, usa el menú desplegable Block user (Bloquear usuario), y selecciona el período que deseas bloquear al usuario. ![Bloquear límite de tiempo en el menú desplegable para bloquear al usuario](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. Si deseas ocultar todos los comentarios que realizó el usuario en la organización, selecciona **Hide this user's comments** (Ocultar los comentarios del usuario) y elige un motivo. ![Enviar una notificación en el menú desplegable para bloquear al usuario](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. Si te gustaría notificar al usuario sobre el motivo por el que fue bloqueado, selecciona **Send a notification to this user** (Enviar una notificación a este usuario). ![Enviar una notificación en el menú desplegable para bloquear al usuario](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. Para bloquear al usuario, haz clic en **Block user from organization** (Bloquear usuario de la organización) o **Block user from organization and send message** (Bloquear usuario de la organización y enviar mensaje). ![Botón Block user (Bloquear usuario)](/assets/images/help/organizations/org-block-user-button-in-comment.png)

## Bloquear a un usuario en los parámetros de la organización

1. Para bloquear a un miembro de la organización, primero [elimina al usuario](/articles/removing-a-member-from-your-organization) desde la organización.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.block_users %}
6. En "Block a user" (Bloquear a un usuario), escribe el nombre de usuario del usuario que deseas bloquear. ![Campo Username (Nombre de usuario)](/assets/images/help/organizations/org-block-username-field.png)
7. Si deseas establecer un límite de tiempo para el bloqueo, usa el menú desplegable Block options (Bloquear opciones), y selecciona el período que deseas bloquear al usuario. ![Menú desplegable con las opciones de bloqueo](/assets/images/help/organizations/org-block-options-menu.png)
8. Haz clic en **Block user** (Bloquear usuario). ![Botón Block (Bloquear)](/assets/images/help/organizations/org-block-user-button.png)

## Leer más

- "[Ver usuarios que están bloqueados en tu organización](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)"
- "[Desbloquear a un usuario de tu organización](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[Bloquear a un usuario desde tu cuenta personal](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[Desbloquear a un usuario desde tu cuenta personal](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Informar abuso o spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
