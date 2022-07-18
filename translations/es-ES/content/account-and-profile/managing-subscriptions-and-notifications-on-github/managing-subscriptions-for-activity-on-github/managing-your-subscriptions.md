---
title: Administrar tus suscripciones
intro: Hay varias maneras de darte de baja para ayudarte a administrar tus notificaciones de manera eficiente.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: Administrar tus suscripciones
---

Para ayudarte a entender tus suscripciones y decidir si quieres desuscribirte, consulta la sección "[Visualizar tus suscripciones](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

{% note %}

**Nota:** En vez de desuscribirte, tienes la opción de ignorar un repositorio. Si ignoras un repositorio, no recibirás ninguna notificación. No recomendamos ignorar repositorios ya que no se te notificará si eres mencionado. {% ifversion fpt or ghec %}Si te encuentras con algún tipo de abuso y quieres ignorar un repositorio, por favor, contacta a {% data variables.contact.contact_support %} para que podamos ayudarte. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## Elegir cómo darte de baja

Para dejar de observar (o desuscribirte de) los repositorios rápidamente, navega a [github.com/watching](https://github.com/watching) para ver todos los repositorios que estás siguiendo. Para obtener más información, consulta la sección "[Dejar de observar los repositorios](#unwatching-repositories)".

Para desuscribirte de varias notificaciones al mismo tiempo, puedes hacerlo utilizando tu bandeja de entrada o en la página de suscripciones. Ambas de estas opciones ofrecen más contexto acerca de tus suscripciones que la página de "Repositorios en observación".

### Beneficios de darte de baja desde tu bandeja de entrada

Cuando te desuscribes de las notificaciones en tu bandeja de entrada, tienes varias otras opciones de clasificación y puedes filtrar tus notificaciones con filtros personalizados y tipos de discusión. Para obtener más información, consulta la sección "[Administrar notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)".

### Beneficios de darte de baja desde la página de suscripciones

Cuando te desuscribes de las notificaciones en la página de suscripciones, puedes ver más notificaciones a las que estés suscrito y clasificarlas por "Suscrito más recientemente" o "Suscrito más antiguamente".

La página de suscripciones te muestra todas las notificaciones a las que estás actualmente suscrito, incluyendo aquellas que hayas marcado como **Listas** en tu bandeja de entrada.

Solo puedes filtrar tus suscripciones por repositorio y por la razón que estás recibiendo la notificación.

## Darte de baja de las notificaciones en tu bandeja de entrada

Cuando te desuscribes de las notificaciones en tu bandeja de entrada, desaparecerán automáticamente de ésta.

{% data reusables.notifications.access_notifications %}
1. Desde la bandeja de notificaciones, selecciona aquellas de las cuales deseas darte de baja.
2. Haz clic en **Desuscribirse.** ![Opción para darse de baja de una bandeja principal](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## Darse de baja de las notificaciones en la página de suscripciones

{% data reusables.notifications.access_notifications %}
1. En la barra lateral izquierda, bajo la lista de repositorios, utiliza el menú desplegable de "Administrar notificaciones" para dar clic en **Suscripciones**. ![Opciones del menú desplegable de administrar notificaciones](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Selecciona las notificaciones de las cuales quieres darte de baja. En la esquina superior derecha, da clic en **Darse de baja** ![Página de suscripciones](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Dejar de observar los repositorios

Cuando dejas de observar un repositorio, de desuscribes de notificaciones futuras del mismo, a menos de que participes en una conversación o te @mencionen.

{% data reusables.notifications.access_notifications %}
1. En la barra lateral izquierda, bajo la lista de repositorios, utiliza el menú desplegable de "Administrar notificaciones" para dar clic en **Repositorios que sigues**.

  ![Opciones del menú desplegable de administrar notificaciones](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. En la página de repositorios que sigues, después de que hayas evaluado aquellos que estás siguiendo, decide si quieres:

   - Dejar de seguir un repositorio
   - Ignorar todas las notificaciones de un repositorio
   - Si se habilitan, personaliza los tipos de evento para los cuales recibes notificaciones ({% data reusables.notifications-v2.custom-notification-types %})

{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Opcionalmente, para desuscribirte de todos los repositorios que le pertenecen a algún usuario u organización, selecciona el menú desplegable de **Dejar de observar todos** y haz clic en la organización que tiene los repositorios de los cuales quieres desuscribirte. El botón para dejar de observar todos los repositorios solo se encuentra disponible si estás observando toda la actividad o notificaciones personalizadas en más de 10 repositorios.

   ![Captura de pantalla del botón "Dejar de observar todos".](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Haz clic en **Dejar de observar** para confirmar que quieres dejar de observar los repositorios que le pertenecen al usuario u organización seleccionado o haz clic en **Cancelar** para cancelar la acción.

   ![Captura de pantalla del diálogo de confirmación para dejar de observar todos.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
