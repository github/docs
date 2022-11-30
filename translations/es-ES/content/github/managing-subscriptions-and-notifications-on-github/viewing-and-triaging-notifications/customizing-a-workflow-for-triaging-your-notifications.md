---
title: Personalizar un flujo de trabajo para clasificar tus notificaciones
intro: 'Para crear un flujo de trabajo ideal para clasificar tus notificaciones, puedes adaptar y personalizar estos flujos de trabajo de ejemplo.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications
---

### Comenzar la clasificación en tu bandeja de entrada

Antes de que comiences a clasificar tu bandeja de entrada, considera si prefieres encontrar y responder primero a las actualizaciones más importantes o si quieres vaciar tu bandeja de entrada de las actualizaciones que te distraen y que son fáciles de clasificar o de eliminar.

Puedes decidir utilizar una combinación de ambos acercamientos en varios momentos, dependiendo del volumen de notificaciones que tengas.

Para encontrar un flujo de trabajo de ejemplo que trata sobre encontrar y responder a las notificaciones más importantes, consulta la sección "[Revisar tus notificaciones con prioridad más alta](#checking-your-highest-notification-priorities)".

Para encontrar un ejemplo de flujo de trabajo que muestra cómo eliminar las notificaciones que se pueden clasificar o eliminar fácilmente, consulta la sección "[Borrar tus notificaciones menos importantes](#clearing-your-least-important-notifications)".

### Revisar las notificaciones con prioridades más altas

Elige qué tipo de notificaciones son más urgentes de revisar y escoge un la hora en la que te sea más conveniente revisarlas. Deberás considerar la pregunta "¿A quién estoy bloqueando?"

Por ejemplo, puedes elegir revisar tus notificaciones en este orden en la mañana mientras haces la planeación de tu día en general:
  - Solicitudes de extracción en donde se solicita tu revisión. (filtra por `reason:review-requested`)
  - Eventos en donde se @menciona tu nombre de usuario, también llamadas menciones directas. (filtra por `reason:mention`)
  - Eventos en donde se @menciona un equipo del cual eres miembro, también llamadas menciones de equipo. (filtra por `reason:team-mention`)
  - Fallos de flujo de trabajo de IC para un repositorio en específico. (filtra por by `reason:ci-activity` y `repo:owner/repo-name` y asegúrate de que habilitaste las notificaciones de IC para fallas en el flujo de trabajo en tu configuración de notificaciones)

  {% tip %}

  **Tip:** Para revisar rápidamente tus prioridades más altas, configura los filtros personalizados de acuerdo con su prioridad de revisión. Para obtener más información, consulta la sección "[Administrar notificación desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)".

  {% endtip %}

### Dar seguimiento a las actualizaciones de las notificaciones en curso

Para dar seguimiento a las notificaciones, podrías considerar la pregunta "¿En qué estaba bloqueado y ya no lo estoy?" Elige tus prioridades de notificaciones para seguimiento. Elige tus prioridades de notificaciones de seguimiento.

Por ejemplo, puedes decidir dar seguimiento en este orden:
  - Los informes de problemas y solicitudes de extracción a los que estás asignado. Inmediatamente cierra cualquier informe de problemas o solicitudes de extracción que puedas y añade actualizaciones. Guarda las notificaciones que desees revisar después conforme lo necesites.
  - Revisa las notificaciones en la bandeja de guardados, especialmente las que no leídas. Si el hilo ya no es relevante, desmarca {% octicon "bookmark" aria-label="The bookmark icon" %} para eliminar la notificación de la bandeja de guardados, y márcala como no guardada.

### Administrar notificaciones de prioridad más baja

Después de clasificar las notificaciones de prioridad alta, revisa las notificaciones restantes, tales como las de participación. Considera las siguientes preguntas:
  - ¿Puedes darte de baja de esta notificación? ¿Se ha completado la notificación y se encuentra lista para marcarse como **Completada**?
  {% tip %}

  **Tip:**Cuando te das de baja de una notificación, ya no recibirás nuevas actualizaciones a menos de que comiences a participar en el hilo o que @mencionen a tu usuario o a algún equipo al que pertenezcas. Cuando marcas alguna notificación como **Completada**, esta se elimina de la vista de tu bandeja principal y se puede visualizar con el query `is:read`. Para obtener más información, consulta la sección "[Administrar notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)".

  {% endtip %}
  - ¿Te gustaría recibir actualizaciones en el futuro cuando este informe de problemas o solicitud de extracción se cierre o se reabra, o cuando se fusione una solicitud de extracción? Para obtener más información sobre estas opciones, consulta la sección [Clasificar solo una notificación](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)".
  - ¿Te gustaría evitar el seguir recibiendo notificaciones como esta posteriormente? En ese caso, considera darte de baja. Para obtener más información, consulta la sección "[Administrar suscripciones de actividad en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

### Limpiar tus notificaciones menos importantes

Elige qué tipo de notificaciones son las que puedes clasificar y eliminar de tu bandeja de entrada mas rápida y fácilmente, idealmente, clasificar varias notificaciones al mismo tiempo.

Por ejemplo, puedes decidir eliminar las notificaciones en este orden:
  - Notificaciones de participación en las que te puedes dar de baja.
  - Actualizaciones de repositorios que no son relevantes como para continuar con su seguimiento.

Para obtener más información sobre la administración de notificaciones múltiples en tu bandeja de entrada al mismo tiempo, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)".

También podrías considerar cambiar tus ajustes de notificaciones o desuscribirte de estas actualizaciones si es posible. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)" o "[Administrar tus suscripciones para la actividad en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".
