---
title: Acerca de las notificaciones por correo electrónico
intro: 'Cuando activas las notificaciones por correo electrónico, recibirás notificaciones de participación y de observación en tu cliente de correo electrónico y puedes filtrarlas usando la información del encabezado del correo electrónico.'
versions:
  enterprise-server: <2.21
---

Para obtener más información acerca de las diferencias entre las notificaciones de *participar* y *observar*, consulta la sección [Acerca de las notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)".

Después de activar las notificaciones por correo electrónico, {% data variables.product.product_name %} te enviará notificaciones como correos electrónicos con varias partes que contienen copias del contenido tanto en HTML como en texto simple. El contenido de las notificaciones por correo electrónico incluye cualquier Markdown, @menciones, emojis, vínculos hash, etc., que aparecen en el contenido original en {% data variables.product.product_name %}. Si solo quieres ver el texto en el correo electrónico, puedes configurar tu cliente de correo electrónico para que muestre solo la copia de texto simple. Para obtener más información acerca de habilitar las notificaciones por correo electrónico, consulta la sección "[Elegir el método de entrega de tus notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)".

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

### Filtrar las notificaciones por correo electrónico

Cada notificación por correo electrónico que envía {% data variables.product.product_name %} contiene información de encabezado. La información del encabezado en cada correo electrónico es consistente, para que puedas usarla en tu cliente de correo electrónico para filtrar o enviar todas las notificaciones de {% data variables.product.product_name %} o ciertos tipos de notificaciones de {% data variables.product.product_name %}.

Las notificaciones por correo electrónico de {% data variables.product.product_name %} contienen la siguiente información de encabezado:

| Encabezado                                                | Información                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dirección `De`                                            | Esta dirección siempre será la dirección de correo electrónico de tipo "no-reply" que configure tu administrador de sitio.                                                                                                                                                                                                                                    |
| campo `Para`                                              | Este campo se conecta directamente con el hilo de correo. Si respondes al correo electrónico, agregarás un nuevo comentario a la conversación.                                                                                                                                                                                                                |
| dirección `Cc`                                            | {% data variables.product.product_name %} te enviará `Cc` si estás suscripto a una conversación. La segunda dirección de correo electrónico `Cc` coincide con el motivo de la notificación. El sufijo para estos motivos de notificación es {% data variables.notifications.cc_address %}. Los posibles motivos de notificación son: <ul><li>`assign`: Te asignaron a una propuesta o solicitud de extracción.</li><li>`author`: Creaste una propuesta o solicitud de extracción.</li><li>`comment`: Comentaste una propuesta o solicitud de extracción.</li><li>`manual`: Hubo una actualización de una propuesta o solicitud de extracción a la que te suscribiste de forma manual.</li><li>`mention`: Te mencionaron en una propuesta o solicitud de extracción.</li><li>`push`: Alguien confirmó una solicitud de extracción a la que estás suscripto.</li><li>`review_requested`: Te solicitaron a tí o a un equipo del que eres miembro revisar una solicitud de extracción.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} detectó una vulnerabilidad en un repositorio para el que recibes alertas de seguridad.</li><li>`state_change`: Se cerró o se abrió una propuesta o solicitud de extracción a la que estás suscripto.</li><li>`subscribed`: Hubo una actualización en un repositorio que estás mirando.</li><li>`team_mention`: Un equipo al que perteneces fue mencionado en una propuesta o solicitud de extracción.</li><li>`your_activity`: Abriste, comentaste en o cerraste una propuesta o solicitud de extracción.</li></ul> |
| Campo `mailing list` (lista de correos)                   | Este campo identifica el nombre del repositorio y su propietario. El formato de esta dirección siempre es `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`.                                                                                                                                                     |{% if currentVersion ver_gt "enterprise-server@2.19" % %}
| Campo `X-GitHub-Severity`                                 | {% data reusables.repositories.security-alerts-x-github-severity %} Los posibles niveles de gravedad son:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)". 
{% endif %}

### Leer más

- "[Listar los repositorios que estás observando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "[Observar y dejar de observar un repositorio](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Suscribirse y desuscribirse de las notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- "[Crear gists](/articles/creating-gists)"
