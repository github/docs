---
title: Acerca de las notificaciones
intro: 'Las notificaciones proporcionan actualizaciones sobre las actividades de {% data variables.product.product_location %} a las que te hayas suscrito. Puedes usar la bandeja de entrada de notificaciones para personalizar, evaluar y administrar las actualizaciones.'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: 87034df88eb94c1d880806f01cb8748ed555a284
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432028'
---
## Notificaciones y suscripciones

Puede optar por recibir actualizaciones constantes sobre actividades específicas en {% data variables.product.product_location %} mediante una suscripción. Las notificaciones son actualizaciones que recibes para alguna actividad específica a la cual te hayas suscrito.

### Opciones de suscripción

Puedes elegir suscribirte a notificaciones para:
- Una conversación sobre un informe de problemas, solicitud de extracción o gist específico.
- Todas las actividades en un repositorio o en un debate de equipo.
- Actividades de CI, tales como el estado de los flujos de trabajo en los repositorios configurados con {% data variables.product.prodname_actions %}. 
- Repositorio {% data reusables.notifications-v2.custom-notification-types %} (en caso de que estén habilitadas).

También puedes elegir seguir automáticamente todos los repositorios en los que tienes acceso de escritura, con excepción de sus bifurcaciones. Puede ver cualquier otro repositorio al que tenga acceso manualmente haciendo clic en **Watch** (Inspeccionar).

Si ya no te interesa alguna conversación, te puedes dar de baja, dejar de seguir o personalizar los tipos de notificaciones que recibirás en el futuro. Por ejemplo, si ya no quiere recibir notificaciones de un repositorio en particular, puede hacer clic en **Unsubscribe** (Cancelar suscripción). Para más información, consulte "[Administración de sus suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

### Suscripciones predeterminadas

Generalmente, estarás suscrito automática y predeterminadamente a las conversaciones cuando:
- No has inhabilitado el seguimiento automático a través de tu configuración de notificaciones para los repositorios o equipos a los cuales te has unido. Esta opción está habilitada de forma predeterminada.
- Te han asignado a un informe de problemas o solicitud de extracción.
- Has abierto una solicitud de extracción, informe de problemas, o has creado una publicación para que un equipo la debata.
- Has comentado en un hilo.
- Se suscribe a un subproceso manualmente haciendo clic en **Watch** (Inspeccionar) o **Subscribe** (Suscribirse).
- Su nombre de usuario es @mentioned.
- Has cambiado el estado de un hilo, como cuando cierras un informe de problemas o fusionas una solicitud de extracción.
- Algún equipo al que pertenece es @mentioned.

De forma predeterminada, también inspeccionas automáticamente todos los repositorios que has creado y sean propiedad de tu cuenta personal.

Para cancelar su suscripción a las conversaciones a las cuales está suscrito automáticamente, puede cambiar su configuración de notificación o directamente finalizar la suscripción o dejar de seguir la actividad de {% data variables.product.product_location %}. Para más información, consulte "[Administración de sus suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

## Personalizar notificaciones y suscripciones

Puede elegir ver las notificaciones a través de la bandeja de notificaciones en [https://github.com/notifications](https://github.com/notifications){% ifversion fpt or ghes or ghec %} y en la aplicación {% data variables.product.prodname_mobile %} {% endif %}, a través de su correo electrónico o alguna combinación de estas opciones.

Para personalizar los tipos de actualizaciones que deseas recibir y el lugar a donde quieras que se envíen, modifica tu configuración de notificaciones. Para más información, consulte "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)".

Para poder seguir administrando tus suscripciones, revisa los repositorios que sigues y las suscripciones que tienes y date de baja de aquellos que ya no quieras seguir. Para obtener más información, consulte "[Administración de suscripciones para la actividad en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

Para personalizar la manera en la que deseas recibir actualizaciones para solicitudes de extracción o informes de problemas específicos, puedes configurar tus preferencias dentro de las mismas. Para obtener más información, vea "[Clasificar una sola notificación](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)".

{% ifversion fpt or ghes or ghec %} Puede personalizar y programar notificaciones push en la aplicación {% data variables.product.prodname_mobile %}. Para más información, consulte "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-mobile)".
{% endif %}

## Razones para que recibas notificaciones

Tu bandeja de entrada se configura con filtros predeterminados que representan las razones más comunes para que la gente necesite dar seguimiento a sus notificaciones. Para obtener más información sobre los filtros de bandeja de entrada, consulte "[Administración de notificaciones de la bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)".

Su bandeja de entrada muestra las razones (`reasons`) de las notificaciones a modo de etiqueta.

![Etiquetas de razones en la bandeja de entrada](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

Puedes filtrar tu bandeja de entrada por razón por la cual estás suscrito a notificaciones. Por ejemplo, para ver únicamente solicitudes de incorporación de cambios en las que alguien ha solicitado su revisión, puede usar el filtro de consulta `review-requested`.

![Filtrar notificaciones por revisión de la razón solicitada](/assets/images/help/notifications-v2/review-requested-reason.png)

Si configuraste las notificaciones para que se enviaran por correo electrónico y crees que estás recibiendo notificaciones que no te pertenecen, considera dar solución a los problemas especificando el tema en los encabezados de correo electrónico que muestren el receptor al que se pretende llegar. Para más información, consulte "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Clasificar las notificaciones de tu bandeja de entrada

Para administrar tus notificaciones de manera efectiva, puedes clasificar tu bandeja de entrada con opciones para:
- Quitar una notificación de la bandeja de entrada marcada como **Done** (Finalizada). Puede revisar todas las notificaciones marcadas como **Done** (Finalizadas) en un solo lugar haciendo clic en **Done** (Finalizadas) en la barra lateral o mediante la consulta `is:done`.
- Marcar la notificación como leída o no leída.
- **Guardar** una notificación para revisarla posteriormente. Las notificaciones **guardadas** se marcan en la bandeja de entrada. Puede revisar todas las notificaciones marcadas como **Saved** (Guardadas) en un solo lugar haciendo clic en **Saved** (Guardadas) en la barra lateral o mediante la consulta `is:saved`.
- Darte de baja automáticamente de esta notificación y de las actualizaciones futuras a esta conversación. Darte de baja también elimina la notificación de tu bandeja de entrada. Si te das de baja de una conversación y alguien menciona tu nombre de usuario o el equipo al que perteneces, del cual recibes notificaciones, entonces comenzarás a recibirlas de nuevo para dicha conversación.

También puedes clasificar varias notificaciones al mismo tiempo desde tu bandeja de entrada. Para obtener más información, consulte "[Administración de notificaciones de la bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)".

## Personalizar tu bandeja de entrada de notificaciones

Para centrarse en un grupo de notificaciones de la bandeja de entrada en {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} o {% data variables.product.prodname_mobile %}{% endif %}, puede crear filtros personalizados. Por ejemplo, puedes crear un filtro personalizado para un proyecto de código abierto en el que contribuyes y únicamente ver notificaciones para el repositorio en el que se te mencione. Para obtener más información, consulte "[Administración de notificaciones de la bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)". Para obtener más ejemplos de cómo personalizar su flujo de trabajo de clasificación, consulte "[Personalización de un flujo de trabajo para clasificar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)".

## Política de retención de notificaciones

Las notificaciones que no están marcadas como **Saved** (Guardadas) se mantienen durante 5 meses. Las notificaciones marcadas como **Saved** (Guardadas) se mantienen indefinidamente. Si tu notificación guardada tiene más de 5 meses y la dejas de guardad, ésta desaparecerá de tu bandeja de entrada en un día.

## Comentarios y soporte técnico

Si tienes comentarios o solicitudes de características para las notificaciones, usa un [debate de {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/general).
