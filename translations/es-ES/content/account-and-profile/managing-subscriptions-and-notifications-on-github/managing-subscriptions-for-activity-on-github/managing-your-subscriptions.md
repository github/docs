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
shortTitle: Manage your subscriptions
ms.openlocfilehash: 750a3a9ad87ff9aa709b84a98f548d85d53072ee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145093188'
---
Para ayudarle a comprender las suscripciones y decidir si quiere anular la suscripción, vea "[Visualización de las suscripciones](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

{% note %}

**Nota:** En lugar de anular la suscripción, tiene la opción de omitir un repositorio. Si ignoras un repositorio, no recibirás ninguna notificación. No se recomienda ignorar repositorios ya que no se le notificará si recibe @mentioned. {% ifversion fpt or ghec %}Si experimenta un abuso y quiere omitir un repositorio, póngase en contacto con {% data variables.contact.contact_support %} para que podamos ayudar. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## Elegir cómo darte de baja

Para dejar de seguir rápidamente un repositorio (o cancelar la suscripción), vaya a [github.com/watching](https://github.com/watching) para ver todos los repositorios que sigue. Para más información, vea "[Dejar de seguir repositorios](#unwatching-repositories)".

Para desuscribirte de varias notificaciones al mismo tiempo, puedes hacerlo utilizando tu bandeja de entrada o en la página de suscripciones. Ambas de estas opciones ofrecen más contexto acerca de tus suscripciones que la página de "Repositorios en observación".

### Beneficios de darte de baja desde tu bandeja de entrada

Cuando te desuscribes de las notificaciones en tu bandeja de entrada, tienes varias otras opciones de clasificación y puedes filtrar tus notificaciones con filtros personalizados y tipos de discusión. Para más información, vea "[Administración de notificaciones de la Bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)".

### Beneficios de darte de baja desde la página de suscripciones

Cuando te desuscribes de las notificaciones en la página de suscripciones, puedes ver más notificaciones a las que estés suscrito y clasificarlas por "Suscrito más recientemente" o "Suscrito más antiguamente".

En la página de suscripciones se muestran todas las notificaciones a las que está actualmente suscrito, incluidas las que haya marcado como **Listas** en la Bandeja de entrada.

Solo puedes filtrar tus suscripciones por repositorio y por la razón que estás recibiendo la notificación.

## Darte de baja de las notificaciones en tu bandeja de entrada

Cuando te desuscribes de las notificaciones en tu bandeja de entrada, desaparecerán automáticamente de ésta.

{% data reusables.notifications.access_notifications %}
1. Desde la bandeja de notificaciones, selecciona aquellas de las cuales deseas darte de baja.
2. Haga clic en **Cancelar suscripción.** 
  ![ Opción Cancelar suscripción de la Bandeja de entrada principal](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## Darse de baja de las notificaciones en la página de suscripciones

{% data reusables.notifications.access_notifications %}
1. En la barra lateral izquierda, debajo de la lista de repositorios, use el menú desplegable "Administrar notificaciones" para hacer clic en **Suscripciones**.
  ![Opciones del menú desplegable Administrar notificaciones](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Selecciona las notificaciones de las cuales quieres darte de baja. En la parte superior derecha, haga clic en **Cancelar suscripción.** 
  ![ Página Suscripciones](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Dejar de observar los repositorios

Cuando deja de seguir un repositorio, anula la suscripción a las notificaciones futuras del mismo, a menos que participe en una conversación o le @mentioned.

{% data reusables.notifications.access_notifications %}
1. En la barra lateral izquierda, en la lista de repositorios, use el menú desplegable "Administrar notificaciones" y haga clic en **Repositorios que sigue**.

  ![Opciones del menú desplegable "Administrar notificaciones"](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. En la página de repositorios que sigues, después de que hayas evaluado aquellos que estás siguiendo, decide si quieres:
   
   - Dejar de seguir un repositorio
   - Ignorar todas las notificaciones de un repositorio
   - Si se habilitan, personaliza los tipos de evento para los cuales recibes notificaciones ({% data reusables.notifications-v2.custom-notification-types %})
   
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Opcionalmente, para anular la suscripción de todos los repositorios propiedad de un usuario u organización, seleccione el menú desplegable **Dejar de seguir todos** y haga clic en la organización de cuyos repositorios quiera anular la suscripción. El botón para dejar de observar todos los repositorios solo se encuentra disponible si estás observando toda la actividad o notificaciones personalizadas en más de 10 repositorios.

   ![Captura de pantalla del botón "Dejar de observar todos".](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Haga clic en **Dejar de seguir** para confirmar que quiere dejar de seguir a los repositorios que pertenecen al usuario u organización seleccionados, o bien haga clic en **Cancelar** para cancelar.

   ![Captura de pantalla del diálogo de confirmación para dejar de observar todos.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
