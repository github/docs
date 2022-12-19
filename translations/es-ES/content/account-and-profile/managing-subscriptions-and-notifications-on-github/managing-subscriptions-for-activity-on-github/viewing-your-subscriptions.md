---
title: Visualizar tus suscripciones
intro: 'Para entender de dónde están llegando las notificaciones y la cantidad de las mismas, te recomendamos revisarlas frecuentemente, así como los repositorios que sigues de cerca.'
redirect_from:
  - /articles/subscribing-to-conversations
  - /articles/unsubscribing-from-conversations
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories
  - /articles/unwatching-repositories
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
  - /github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: View subscriptions
ms.openlocfilehash: 34faad79004d34f5beb14e8992b9aff4e6a3ab39
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117241'
---
Recibe notificaciones para sus suscripciones de la actividad reciente en {% data variables.product.product_name %}. Hay muchas razones por las cuales puedes estar suscrito a una conversación. Para obtener más información, consulte "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)".

Te recomendamos auditar tus suscripciones y desuscribirte de las que no sean necesarias como parte de un flujo de trabajo de notificaciones saludable. Para obtener más información sobre las opciones para cancelar la suscripción, consulte "[Administración de suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

## Diagnosticar el por qué recibes tantas notificaciones

Cuando tu bandeja de entrada tiene demasiadas notificaciones como para administrarlas, considera si estás suscrito a más de las que puedas manejar, o cómo puedes cambiar tu configuración de notificaciones para reducir aquellas que ya tienes y ver los tipos de notificaciones que estás recibiendo. Por ejemplo, puedes considerar inhabilitar la configuración para que observes automáticamente todos los repositorios y discusiones de equipo cada que te unas a un equipo o repositorio.

![Seguimiento automático](/assets/images/help/notifications-v2/automatic-watching-example.png)

Para más información, consulte "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)".

Para ver la información general de sus suscripciones a repositorios, consulte "[Revisión de los repositorios que sigue](#reviewing-repositories-that-youre-watching)". {% tip %}

**Sugerencia:** Puede seleccionar los tipos de eventos para los que quiere recibir notificaciones mediante la opción **Custom** (Personalizar) de la lista desplegable **Watch/Unwatch** (Seguir/Dejar de seguir) en la [página de seguimiento](https://github.com/watching) o en cualquier página de repositorio de {% data variables.product.product_name %}. Para más información, consulte "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".

{% endtip %}

Muchas personas se olvidan de los repositorios que han marcado para observar. Desde la página de "Repositorios observados" puedes dejar de observar los repositorios rápidamente. Para obtener más información sobre las formas de cancelar la suscripción, consulte "[Recomendaciones para desuscribirse](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" en {% data variables.product.prodname_blog %} y "[Administración de las suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)". También puedes crear un flujo de trabajo de clasificación para que te ayude con las notificaciones que recibes. Para obtener instrucciones sobre los flujos de trabajo de evaluación de prioridades, consulte "[Personalización de un flujo de trabajo para clasificar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)".

## Revisar todas tus suscripciones

{% data reusables.notifications.access_notifications %}
1. En la barra lateral izquierda, en la lista de repositorios de los cuales recibe notificaciones, abra el menú desplegable "Manage notifications" (Administrar notificaciones) y haga clic en **Subscriptions** (Suscripciones).
  ![Opciones del menú desplegable Manage notifications (Administrar notificaciones)](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Utiliza los filtros y organiza para reducir la lista de suscripciones y comenzar a darte de baja de las conversaciones de las cuales ya no quieres recibir notificaciones.

  ![Página de suscripciones](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Sugerencias:**
- Para revisar las suscripciones que pudiste haber olvidado, organiza por "suscripciones menos recientes"

- Para revisar una lista de repositorios de los cuales aún puedes recibir notificaciones, despliega el menú "filtrar por repositorio" para ver el listado.

{% endtip %}

## Revisar los repositorios que estás siguiendo de cerca

1. En la barra lateral izquierda, en la lista de repositorios, use el menú desplegable "Manage notifications" (Administrar notificaciones) y haga clic en **Watched repositories** (Repositorios que sigue).
  ![Opciones del menú desplegable Manage notifications (Administrar notificaciones)](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Evalúa si los repositorios que estás siguiendo de cerca tienen actualizaciones que aún sean útiles y relevantes. Cuando sigues de cerca un repositorio, se te notificará de todas las conversaciones en el mismo.
![Página de notificaciones de los repositorios que sigue](/assets/images/help/notifications-v2/watched-notifications-custom.png)

  {% tip %}

  **Sugerencia:** En lugar de seguir un repositorio, considere la posibilidad de recibir solo notificaciones cuando haya actualizaciones en {% data reusables.notifications-v2.custom-notification-types %} (si se han habilitado para el repositorio), o en cualquier combinación de estas opciones, o bien deje de seguir un repositorio por completo.
  
  Al dejar de seguir un repositorio, todavía recibirá notificaciones cuando le mencionen (@mentioned) o cuando participe en una conversación. Si configura las opciones para recibir notificaciones de ciertos tipos de eventos, solo se le notificará cuando haya actualizaciones en dichos eventos en el repositorio, cuando participe en una conversación o cuando usted o un equipo al que pertenece sean @mentioned.

  {% endtip %}
