---
title: Acerca de los debates de equipo
intro: 'Tu equipo puede planificar de manera conjunta, actualizarse unos a otros o hablar sobre cualquier tema que quieran en las publicaciones de debates en la página de tu equipo en una organización.'
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

{% data reusables.organizations.team-discussions-purpose %}

Todo miembro de una organización puede publicar en la página de tu equipo o participar de un debate público. {% data reusables.organizations.team-discussions-permissions %}

![Pestaña Debayes de la página del equipo con debates privados y públicos](/assets/images/help/organizations/team-page-discussions-tab.png)

Puedes vincularte a cualquier debate de equipo para hacer referencia al mismo en otro lugar. Puedes anclar publicaciones importantes a la página de tu equipo para una referencia rápida a futuro. Para obtener más información, consulta "[Anclar un debate del equipo](/organizations/collaborating-with-your-team/pinning-a-team-discussion)".

![Pestaña Debates anclados de la página del equipo con debate anclado](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %} Los propietarios pueden desactivar debates del equipo para toda la organización. Para obtener más información, consulta "[Desactivar los debates del equipo para tu organización](/articles/disabling-team-discussions-for-your-organization)".

### Notificaciones para los debates del equipo

Cuando alguien publica o responde a un debate público en la página de un equipo, los miembros del equipo y los miembros de cualquier equipo hijo reciben un correo electrónico o notificaciones web. Cuando alguien publica o responde a un debate privado en la página de un equipo, solo los miembros del equipo reciben notificaciones.

{% tip %}

**Sugerencia:** Dependiendo de los parámetros de tu notificación, recibirás actualizaciones por correo electrónico, la página de notificaciones web en {% data variables.product.product_name %}, o ambas. Para obtener más información, consulta las secciones {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[Acerca de las notificaciones por correo electrónico](/github/receiving-notifications-about-activity-on-github/about-email-notifications)" y "[Acerca de las notificaciones web](/github/receiving-notifications-about-activity-on-github/about-web-notifications){% endif %}".

{% endtip %}

Por defecto, si se menciona tu nombre de usuario en un debate del equipo, recibirás notificaciones por la publicación que menciona tu nombre de usuario y toda respuesta a esa publicación. Además, por defecto, si respondes a una publicación, recibirás notificaciones por otras respuestas a la publicación.

Para apagar las notificaciones para los debates del equipo, puedes cancelar la suscripción a una publicación de debate específica o cambiar tus parámetros de notificación para dejar de ver o ignorar por completo los debtaes de un equipo específico. Te puedes suscribir a las notificaciones para la publicación de un debate específico incluso si dejaste de ver los debates de ese equipo.

Para obtener más información, consulta las secciones{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Visualizar tus suscripciones](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Suscribirte y desuscribirte de las notificaciones](/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications){% endif %}" y "[Equipos anidados](/articles/about-teams/#nested-teams)".

### Leer más

- "[Inicio rápido para comunicarte con {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)"
- [Acerca de los equipos](/articles/about-teams)"
- "[Crear un debate de equipo](/organizations/collaborating-with-your-team/creating-a-team-discussion)"
- "[Editar o eliminar un debate de equipo](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)"
