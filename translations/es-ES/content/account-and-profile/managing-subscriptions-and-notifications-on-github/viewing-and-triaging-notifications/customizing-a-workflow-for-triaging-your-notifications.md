---
title: Personalizar un flujo de trabajo para clasificar tus notificaciones
intro: 'Para crear un flujo de trabajo ideal para clasificar tus notificaciones, puedes adaptar y personalizar estos flujos de trabajo de ejemplo.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/customizing-a-workflow-for-triaging-your-notifications
shortTitle: Triage your notifications
ms.openlocfilehash: 9e5771dff52408a1b6967a3792eb36eefebefd72
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115929'
---
## Comenzar la clasificación en tu bandeja de entrada

Antes de que comiences a clasificar tu bandeja de entrada, considera si prefieres encontrar y responder primero a las actualizaciones más importantes o si quieres vaciar tu bandeja de entrada de las actualizaciones que te distraen y que son fáciles de clasificar o de eliminar.

Puedes decidir utilizar una combinación de ambos acercamientos en varios momentos, dependiendo del volumen de notificaciones que tengas.

Para ver un flujo de trabajo de ejemplo de búsqueda y respuesta a las notificaciones más importantes, consulta "[Comprobación de las prioridades de notificación más altas](#checking-your-highest-notification-priorities)".

Para ver un flujo de trabajo de ejemplo de eliminación de notificaciones que son fáciles de quitar o evaluar, consulta "[Borrar las notificaciones menos importantes](#clearing-your-least-important-notifications)".

## Revisar las notificaciones con prioridades más altas

Elige qué tipo de notificaciones son más urgentes de revisar y escoge un la hora en la que te sea más conveniente revisarlas. Deberás considerar la pregunta "¿A quién estoy bloqueando?"

Por ejemplo, puedes elegir revisar tus notificaciones en este orden en la mañana mientras haces la planeación de tu día en general:
  - Solicitudes de extracción en donde se solicita tu revisión. (filtrar por `reason:review-requested`)
  - Eventos en los que el nombre de usuario es @mentioned, también denominados menciones directas. (filtrar por `reason:mention`)
  - Eventos en los que un equipo del cual eres miembro es @mentioned, también denominados menciones de equipo. (filtrar por `reason:team-mention`)
  - Fallos de flujo de trabajo de IC para un repositorio en específico. (filtra por `reason:ci-activity` y `repo:owner/repo-name` asegúrate de que has habilitado las notificaciones de actividad de CI para los errores de flujo de trabajo en la configuración de las notificaciones).

  {% tip %}

  **Consejo:** Para revisar rápidamente tus prioridades más altas, configura los filtros personalizados de acuerdo con su prioridad de revisión. Para obtener más información, consulta "[Administración de notificaciones de la Bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)".

  {% endtip %}

## Dar seguimiento a las actualizaciones de las notificaciones en curso

Para dar seguimiento a las notificaciones, podrías considerar la pregunta "¿En qué estaba bloqueado y ya no lo estoy?" Elige tus prioridades de notificaciones para seguimiento. Elige tus prioridades de notificaciones de seguimiento.

Por ejemplo, puedes decidir dar seguimiento en este orden:
  - Los informes de problemas y solicitudes de extracción a los que estás asignado. Inmediatamente cierra cualquier informe de problemas o solicitudes de extracción que puedas y añade actualizaciones. Guarda las notificaciones que desees revisar después conforme lo necesites.
  - Revisa las notificaciones en la bandeja de guardados, especialmente las que no leídas. Si el hilo ya no es relevante, deselecciona {% octicon "bookmark" aria-label="The bookmark icon" %} para eliminar la notificación de la bandeja de elementos guardados y deja de guardarlos.

## Administrar notificaciones de prioridad más baja

Después de clasificar las notificaciones de prioridad alta, revisa las notificaciones restantes, tales como las de participación. Tenga en cuenta estas preguntas:
  - ¿Puedes darte de baja de esta notificación? ¿Esta notificación se ha completado y está lista para marcarse como **Lista**?
  {% tip %}

  **Consejo:** Al cancelar la suscripción a una notificación, no recibirás nuevas actualizaciones a menos que empieces a participar en el hilo o seas @mentioned o se @mentioned un equipo al que perteneces. Al marcar una notificación como **Lista**, la notificación se quita de la vista principal de la bandeja de entrada y se puede ver con la consulta `is:read`. Para obtener más información, consulta "[Administración de notificaciones de la Bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)".

  {% endtip %}
  - ¿Te gustaría recibir actualizaciones en el futuro cuando este informe de problemas o solicitud de extracción se cierre o se reabra, o cuando se fusione una solicitud de extracción? Para obtener más información sobre estas opciones, consulta "[Clasificar una sola notificación](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)".
  - ¿Te gustaría evitar el seguir recibiendo notificaciones como esta posteriormente? En ese caso, considera darte de baja. Para obtener más información, consulta "[Administración de suscripciones para la actividad en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

## Limpiar tus notificaciones menos importantes

Elige qué tipo de notificaciones son las que puedes clasificar y eliminar de tu bandeja de entrada mas rápida y fácilmente, idealmente, clasificar varias notificaciones al mismo tiempo.

Por ejemplo, puedes decidir eliminar las notificaciones en este orden:
  - Notificaciones de participación en las que te puedes dar de baja.
  - Actualizaciones de repositorios que no son relevantes como para continuar con su seguimiento.

Para obtener más información sobre cómo administrar varias notificaciones en la bandeja de entrada al mismo tiempo, consulta "[Administración de notificaciones de la Bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)".

También podrías considerar cambiar tus ajustes de notificaciones o desuscribirte de estas actualizaciones si es posible. Para obtener más información, consulta "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)" o "[Administración de suscripciones para la actividad en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".
