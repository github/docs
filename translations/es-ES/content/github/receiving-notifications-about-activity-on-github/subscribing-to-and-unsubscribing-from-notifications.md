---
title: Suscribirse y cancelar las suscripciones de las notificaciones
intro: 'Puedes suscribirte a conversaciones individuales en propuestas, solicitudes de extracción y debates de equipo, incluso si no estás observando el repositorio o un miembro del equipo donde se está dando el debate. Si ya no estás interesado en una conversación, puedes cancelar la suscripción o personalizar los tipos de notificaciones que recibes.'
versions:
  enterprise-server: <2.21
---

### Administrar tus configuraciones de notificación para una propuesta o solicitud de extracción

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Elige una propuesta o solicitud de extracción a la que suscribirte.
4. En el barra lateral derecha, haz clic en **Subscribe (Suscribirse)** o **Unsubscribe (Cancelar la suscripción)**. ![Botón para suscribirte a una conversación](/assets/images/help/notifications/subscribe_button_with_gear.png)
5. Para personalizar tus notificaciones, haz clic en {% octicon "gear" aria-label="The gear icon" %}. ![Botón de ajustes al lado de Suscribirse a una conversación](/assets/images/help/notifications/subscribe_button_with_gear_chosen.png)
6. Selecciona el tipo de notificaciones que deseas recibir de esta conversación, después haz clic en **Save (Guardar)**. ![Conversation Subscribe options list](/assets/images/help/notifications/subscribe_options.png) Puedes ver una lista de todas las propuestas y solicitudes de cambios a las cuales estás suscrito. Para obtener más información, consulta la sección "[ Listar los informes de problemas y solicitudes de extracción a los que estás suscrito](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-issues-and-pull-requests-youre-subscribed-to)".

### Suscribirte a debates de equipo

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. En la página del equipo, encuentra el debate al que deseas suscribirte.
6. En el ángulo superior derecho del debate, haz clic en {% octicon "unmute" aria-label="The subscribe symbol" %} para suscribirte al debate. ![Botón para suscribirse a un debate de equipo](/assets/images/help/notifications/team-discussion-subscribe-button.png)

### Cancelar la suscripción a debates de equipo

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. En la página del equipo, encuentra el debate del que deseas cancelar la suscripción.
6. En el ángulo superior derecho del debate, haz clic en {% octicon "mute" aria-label="The unsubscribe symbol" %} para cancelar la suscripción al debate. ![Botón para suscribirse a un debate de equipo](/assets/images/help/notifications/team-discussion-unsubscribe-button.png)

### Further reading

- "[Acerca de las notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[Acerca de los debates en {% data variables.product.product_name %}](/articles/about-conversations-on-github)"
- "[Observar y dejar de observar un repositorio](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"

- "[Listar los repositorios que estás observando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
