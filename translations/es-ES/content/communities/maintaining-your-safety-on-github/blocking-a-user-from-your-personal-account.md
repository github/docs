---
title: Bloquear a un usuario de tu cuenta personal
intro: Puedes bloquear a un usuario para impedirle el acceso a tu actividad y repositorios y para evitar que te envíe notificaciones.
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  free-pro-team: '*'
topics:
  - Community
---

### Acerca de bloquear usuarios

Puedes bloquear a un usuario en los parámetros de tu cuenta o desde el perfil del usuario. {% data variables.product.prodname_dotcom %} no notificará al usuario cuando lo bloquees. Si quieres evitar contribuir en el mismo proyecto que alguien que has bloqueado, puedes elegir que se muestre una advertencia en cualquier repositorio que tenga contribuciones previas de los usuarios que has bloqueado. Para obtener más información, consulta la sección "[Bloquear a un usuario en tus ajustes de cuenta](#blocking-a-user-in-your-account-settings)". Puede que aún veas la actividad de los usuarios bloqueados en los espacios compartidos y los usuarios bloqueados pueden borrar su contenido existente.

{% tip %}

**Tip:** Si bloqueas a un usuario debido a una conversación fuerte, considera bloquear dicha conversación para que solo puedan comentar los colaboradores. Para obtener más información, consulta "[Bloquear conversaciones](/communities/moderating-comments-and-conversations/locking-conversations)."

{% endtip %}

Cuando bloqueas a un usuario:
- El usuario deja de seguirte
- El usuario deja de observar y deja de fijar tus repositorios
- El usuario no puede unirse a ninguna organización que te pertenezca
- Las asignaciones con estrella y las propuestas del usuario se eliminarán de tus repositorios
- Se borran los votos del usuario en los comentarios o debates de tus repositorios
- El usuario será eliminado como colaborador en los repositorios de tu organización
- Las contribuciones del usuario ya no contarán como tales para ellos en tus repositorios
- Tus contribuciones para los repositorios del usuario bloqueado ya no contarán como tales para ti
- Se te elimina como colaborador en sus repositorios
- Ya no contarás con su patrocinio
- Cualquier invitación de sucesor de una cuenta o repositorio que se haga a o que provenga del usuario bloqueado se cancela

Después de que hayas bloqueado a un usuario, no podrá:
- Enviarte notificaciones, incluso al [@mencionar](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) tu nombre de usuario
- Los comentarios o ediciones a los informes de problemas o solicitudes de extracción que has creado
- Reaccionar a tus comentarios en reportes de problemas, solicitudes de extracción y confirmaciones
- Seguir o ver tu contenido en el feed de sus actividades
- Se te asigna a los informes de problemas o solicitudes de extracción
- Invitarte para que seas colaborador en sus repositorios
- Invitarte como colaborador en una asesoría de seguridad
- Realizar referencias cruzadas con tus repositorios en comentarios
- Bifurcar, observar, fijar o marcar con estrella a tus repositorios
- Patrocinarte

En los repositorios que te pertenecen, los usuarios bloqueados tampoco podrán:
- Abrir propuestas
- Envía, cierra, o fusiona las solicitudes de extracción
- Comentar sobre las propuestas, solicitudes de extracción o confirmaciones
- Agregar o editar páginas wiki

### Bloquear a un usuario en tus parámetros de cuenta

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.blocked_users %}
3. En "Block a user" (Bloquear a un usuario), escribe el nombre de usuario del usuario que deseas bloquear, luego haz clic en **Block user** (Bloquear usuario). ![Campo Username (Nombre de usuario) y botón Block (Bloquear)](/assets/images/help/settings/user-settings-block-user.png)
4. Opcionalmente, para mostrar una advertencia al visitar un repositorio donde un usuario bloqueado es un colaborador, selecciona **Warn me when blocked user is a prior contributor to a repository** (Advertirme cuando un usuario bloqueado es un colaborador anterior del repositorio). ![Opción para advertir sobre usuarios bloqueados](/assets/images/help/settings/warn-block-user.png)

### Bloquear a un usuario desde su página de perfil

{% data reusables.profile.user_profile_page_navigation %}
{% data reusables.profile.user_profile_page_block_or_report %}
3. Haz clic en **Block user** (Bloquear usuario). ![Cuadro de modo con opciones para bloquear a un usuario o reportar abusos](/assets/images/help/profile/profile-blockuser.png)

{% note %}

Utiliza {% data variables.contact.report_abuse %} para contactarnos si te están acosando. {% data reusables.policies.abuse %}

{% endnote %}

### Leer más

- "[Ver usuarios que has bloqueado de tu cuenta personal](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)"
- "[Desbloquear a un usuario desde tu cuenta personal](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Bloquear a un usuario de tu organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"
- "[Desbloquear a un usuario de tu organización](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[Informar abuso o spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Limitar interacciones en tu repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"
