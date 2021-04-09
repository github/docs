---
title: Visualizar tus suscripciones
intro: 'Para entender de dónde están llegando las notificaciones y la cantidad de las mismas, te recomendamos revisarlas frecuentemente, así como los repositorios que sigues de cerca.'
redirect_from:
  - /articles/subscribing-to-conversations/
  - /articles/unsubscribing-from-conversations/
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories/
  - /articles/unwatching-repositories/
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories/
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - notifications
---

Recibes notificaciones para tus suscripciones de la actividad reciente en {% data variables.product.product_name %}. Hay muchas razones por las cuales puedes estar suscrito a una conversación. Para obtener más información, consulta la sección "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)".

Te recomendamos auditar tus suscripciones y desuscribirte de las que no sean necesarias como parte de un flujo de trabajo de notificaciones saludable. Para obtener más información acerca de tus opciones para desuscribirte, consulta la sección "[Administrar suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

### Diagnosticar el por qué recibes tantas notificaciones

Cuando tu bandeja de entrada tiene demasiadas notificaciones como para administrarlas, considera si estás suscrito a más de las que puedas manejar, o cómo puedes cambiar tu configuración de notificaciones para reducir aquellas que ya tienes y ver los tipos de notificaciones que estás recibiendo. Por ejemplo, puedes considerar inhabilitar la configuración para que observes automáticamente todos los repositorios y discusiones de equipo cada que te unas a un equipo o repositorio.

![Seguimiento automático](/assets/images/help/notifications-v2/automatic-watching-example.png)

Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)".

Para ver un resumen de tus suscripciones a repositorios, consulta la sección "[Revisar los repositorios que estás observando](#reviewing-repositories-that-youre-watching)".
{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Tip:** Puedes seleccionar los tipos de evento para los cuales quieres recibir notificaciones si utilizas la opción **Personalizar** de la lista desplegable **Observar/Dejar de observar** en tu [página de observados](https://github.com/watching) o en cualquier página de repositorio en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".

{% endtip %}
{% endif %}

Muchas personas se olvidan de los repositorios que han marcado para observar. Desde la página de "Repositorios observados" puedes dejar de observar los repositorios rápidamente. Para obtener más información sobre las formas de dejar de suscribirse, consulta la sección "[Dejar de observar las recomendaciones](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" en {% data variables.product.prodname_blog %} y "[Administrar tus suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)". También puedes crear un flujo de trabajo de clasificación para que te ayude con las notificaciones que recibes. Para obtener orientación sobre los flujos de trabajo de clasificación, consulta la sección "[Personalizar un flujo de trabajo para clasificar tus notificaciones](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)".

### Revisar todas tus suscripciones

{% data reusables.notifications.access_notifications %}
1. En la barra lateral izquierda, debajo de la lista de repositorios de los cuales recibes notificaciones, utiliza el menú desplegable "Administrar notificaciones" para dar clic en **Suscripciones**. ![Opciones del menú desplegable de administrar notificaciones](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Utiliza los filtros y organiza para reducir la lista de suscripciones y comenzar a darte de baja de las conversaciones de las cuales ya no quieres recibir notificaciones.

  ![Página de suscripciones](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Tips:**
- Para revisar las suscripciones que pudiste haber olvidado, organiza por "suscripciones menos recientes"

- Para revisar una lista de repositorios de los cuales aún puedes recibir notificaciones, despliega el menú "filtrar por repositorio" para ver el listado.

{% endtip %}

### Revisar los repositorios que estás siguiendo de cerca

1. En la barra lateral izquierda, bajo la lista de repositorios, utiliza el menú desplegable "Administrar notificaciones" y da clic en **Repositorios que sigues**. ![Opciones del menú desplegable de administrar notificaciones](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Evalúa si los repositorios que estás siguiendo de cerca tienen actualizaciones que aún sean útiles y relevantes. Cuando sigues de cerca un repositorio, se te notificará de todas las conversaciones en el mismo.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Página de notificaciones que sigues](/assets/images/help/notifications-v2/watched-notifications.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
  ![Página de notificaciones que sigues](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **Tip:** En vez de observar un repositorio, considera solo recibir notificaciones {% if currentVersion == "free-pro-team@latest" %}cuando existan actualizaciones a las propuestas, solicitudes de cambios, lanzamientos o debates (si se habilitaron en el repositorio), o cualquier combinación de estas opciones,{% else %}para los lanzamientos en un repositorio,{% endif %} o dejar de observar el repositorio completamente.

  Cuando dejas de seguir un repositorio, aún se te puede notificar cuando te @mencionan o cuando participas en un hilo. Cuando configuras el recibir notificaciones para ciertos tipos de evento, solo se te notificará cuando existan actualizaciones en éstos dentro del repositorio, si estás participando en un hilo, o si tú o un equipo al que perteneces tiene alguna @mención.

  {% endtip %}
