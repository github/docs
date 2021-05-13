---
title: Acerca de las notificaciones
intro: 'Las notificaciones proporcionan actualizaciones sobre las actividades de {% data variables.product.product_name %} a las que te hayas suscrito. Puedes utilizar la bandeja de notificaciones para personalizar, clasificar y administrar tus actualizaciones.'
redirect_from:
  - /articles/notifications/
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

### Notificaciones y suscripciones

Puedes elegir recibir actualizaciones continuas sobre actividades específicas en {% data variables.product.product_name %} mediante una suscripción. Las notificaciones son actualizaciones que recibes por alguna actividad específica a la que te hayas suscrito.

#### Opciones de suscripción

Puedes elegir suscribirte a las notificaciones de:
- Una conversación sobre un informe de problemas, solicitud de extracción o gist específico.
- Todas las actividades en un repositorio o en un debate de equipo.
- Actividades de CI, tales como el estado de los flujos de trabajo en los repositorios configurados con {% data variables.product.prodname_actions %}.
- Lanzamientos en un repositorio.

También puedes elegir seguir automáticamente todos los repositorios en los que tienes acceso de escritura, con excepción de sus bifurcaciones. Puedes seguir de cerca manualmente a cualquier otro repositorio al que tengas acceso si das clic en **Seguir**.

Si ya no te interesa alguna conversación, te puedes dar de baja, dejar de seguir o personalizar los tipos de notificaciones que recibirás en el futuro. Por ejemplo, si ya no quieres recibir notificaciones de algún repositorio en particular, puedes dar clic en **Darse de baja**. Para obtener más información, consulta la opción "[Administrar tus suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

#### Suscripciones predeterminadas

Generalmente, estarás suscrito automática y predeterminadamente a las conversaciones cuando:
- No has inhabilitado el seguimiento automático a través de tu configuración de notificaciones para los repositorios o equipos a los cuales te has unido. Esta configuración está predeterminadamente habilitada.
- Te han asignado a un informe de problemas o solicitud de extracción.
- Has abierto una solicitud de extracción, informe de problemas, o has creado una publicación para que un equipo la debata.
- Has comentado en un hilo.
- Te has suscrito a un hilo manualmente dando clic en **Seguir** o **Suscribirse**.
- Han @mencionado tu nombre de usuario.
- Has cambiado el estado de un hilo, como cuando cierras un informe de problemas o fusionas una solicitud de extracción.
- Se ha @mencionado a algún equipo al que pertenezcas.

También está predeterminado que sigas automáticamente a todos los repositorios que has creado y sean propiedad de tu cuenta de usuario.

Para darte de baja de las conversaciones a las cuales estás suscrito automáticamente, puedes cambiar tu configuración de notificaciones o darte de baja directamente o dejar de seguir la actividad de {% data variables.product.product_name %}. Para obtener más información, consulta la opción "[Administrar tus suscripciones](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

### Personalizar notificaciones y suscripciones

Puedes elegir ver tus notificaciones a través de la bandeja de entrada de notificaciones en [https://github.com/notifications](https://github.com/notifications){% if currentVersion == "free-pro-team@latest" %} y en la app de {% data variables.product.prodname_mobile %}{% endif %}, a través de tu correo electrónico, o en alguna combinación de estas opciones.

Para personalizar los tipos de actualizaciones que deseas recibir y el lugar a donde quieras que se envíen, modifica tu configuración de notificaciones. Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)".

Para poder seguir administrando tus suscripciones, revisa los repositorios que sigues y las suscripciones que tienes y date de baja de aquellos que ya no quieras seguir. Para obtener más información, consulta la sección "[Administrar suscripciones de actividad en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

Para personalizar la manera en la que deseas recibir actualizaciones para solicitudes de extracción o informes de problemas específicos, puedes configurar tus preferencias dentro de las mismas. Para obtener más información, consulta la sección "[Categorizar una notificación](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)".

{% if currentVersion == "free-pro-team@latest" %}
Puedes habilitar las notificaciones de subida de información en la app de {% data variables.product.prodname_mobile %}. Para obtener más información, consulta la sección "[Configurar las notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)".
{% endif %}

### Razones para que recibas notificaciones

Tu bandeja de entrada se configura con filtros predeterminados que representan las razones más comunes para que la gente necesite dar seguimiento a sus notificaciones. Para obtener más información, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)".

Tu bandeja de entrada muestra las `reasons` (razones) para que recibas notificaciones a modo de etiqueta.

![Etiquetas de razones en la bandeja de entrada](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

Puedes filtrar tu bandeja de entrada por razón por la cual estás suscrito a notificaciones. Por ejemplo, para ver únicamente solicitudes de extracción en donde alguien solicitó tu revisión, puedes utilizar el filtro de búsqueda `review-requested` (revisión solicitada).

![Filtrar notificaciones por revisión de la razón solicitada](/assets/images/help/notifications-v2/review-requested-reason.png)

Si configuraste las notificaciones para que se enviaran por correo electrónico y crees que estás recibiendo notificaciones que no te pertenecen, considera dar solución a los problemas especificando el tema en los encabezados de correo electrónico que muestren el receptor al que se pretende llegar. Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

### Clasificar las notificaciones de tu bandeja de entrada

Para administrar tus notificaciones de manera efectiva, puedes clasificar tu bandeja de entrada con opciones para:
- Eliminar una notificación de la bandeja de entrada marcada como **Completada**. Puedes revisar las notificaciones **Completadas** en un mismo lugar dando clic en **Completada** en la barra lateral o utilizando el query `is:done`.
- Marcar la notificación como leída o no leída.
- **Guardar** una notificación para su revisión posterior. Las notificaciones **Guardadas** se resaltan en tu bandeja de entrada. Puedes revisar las notificaciones **Guardadas** en un mismo lugar en la barra lateral si das clic en **Guardadas**" o utilizando el query `is:saved`.
- Darte de baja automáticamente de esta notificación y de las actualizaciones futuras a esta conversación. Darte de baja también elimina la notificación de tu bandeja de entrada. Si te das de baja de una conversación y alguien menciona tu nombre de usuario o el equipo al que perteneces, del cual recibes notificaciones, entonces comenzarás a recibirlas de nuevo para dicha conversación.

También puedes clasificar varias notificaciones al mismo tiempo desde tu bandeja de entrada. Para obtener más información, consulta la sección "[Administrar notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)".

### Personalizar tu bandeja de entrada de notificaciones

Para enfocarte en un grupo de notificaciones en tu bandeja de entrada en {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} o en {% data variables.product.prodname_mobile %}{% endif %}, puedes crear filtros personalizados. Por ejemplo, puedes crear un filtro personalizado para un proyecto de código abierto en el que contribuyes y únicamente ver notificaciones para el repositorio en el que se te mencione. Para recibir más información, consulta la sección "[Administrar las notificaciones desde tu bandeja de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)". Para ver más ejemplos de cómo personalizar tu flujo de trabajo de clasificaciones, consulta la sección "[Personalizar un flujo de trabajo para clasificar tus notificaciones](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)".

### Política de retención de notificaciones

Las notificaciones que no se marquen como **Guardadas** se mantendrán por 5 meses. Aquellas marcadas como **Guardadas** se mantendrán por tiempo indefinido. Si tu notificación guardada tiene más de 5 meses y la dejas de guardad, ésta desaparecerá de tu bandeja de entrada en un día.

### Retroalimentación y soporte

Si tienes retroalimentación o alguna solicitud de características, utiliza el [formato de retroalimentación para notificaciones](https://support.github.com/contact/feedback?contact%5Bcategory%5D=notifications&contact%5Bsubject%5D=Product+feedback).
