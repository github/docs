---
title: Configurar notificaciones
intro: 'Elige el tipo de actividad en {% data variables.product.prodname_dotcom %} para el que deseas recibir notificaciones y cómo deseas que se entreguen estas actualizaciones.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails/
  - /articles/configuring-notification-emails/
  - /articles/about-notification-emails/
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods/
  - /articles/managing-notification-delivery-methods/
  - /articles/managing-notification-emails-for-organizations/
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive/
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
---

{% ifversion ghes %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

## Opciones de entrega de notificaciones

Puedes recibir notificaciones de actividad en {% data variables.product.product_location %} en las siguientes ubicaciones.

  - La bandeja de notificaciones en la interface web de {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %}
  - La bandeja de notificaciones en {% data variables.product.prodname_mobile %}, la cual sesincroniza con aquella de {% data variables.product.product_location %}{% endif %}
  - Un cliente de correo electrónico que utilice una dirección de correo electrónico verificada y que también sincronice la bandeja de notificaciones en {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} y {% data variables.product.prodname_mobile %}{% endif %}

{% ifversion fpt or ghes or ghec %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} Para obtener más información, consulta la sección "[Escoger tu configuración de notificaciones](#choosing-your-notification-settings)".
{% endif %}

{% data reusables.notifications.shared_state %}

### Beneficios de la bandeja de entrada de notificaciones

La bandeja de entrada de notificaciones en {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} y en {% data variables.product.prodname_mobile %}{% endif %} incluye opciones de clasificación designadas específicamente para tu flujo de notificaciones de {% data variables.product.prodname_dotcom %}, incluyendo opciones para:
  - Clasificar varias notificaciones al mismo tiempo.
  - Marcar las notificaciones como **Completadas** y eliminarlas de tu bandeja de entrada. Para ver todas tus notificaciones marcadas como **Completadas**, utiliza el query `is:done`.
  - Guardar una notificación para revisarla más tarde. Las notificaciones se resaltan en tu bandeja de entrada y se mantienen indefinidamente. Para ver todas tus notificaciones guardadas, utiliza el query `is:saved`.
  - Darse de baja y eliminar una notificación de tu bandeja de entrada.
  - Prever el informe de problemas, solicitud de extracción o debate de equipo de donde se origina la notificación en {% data variables.product.product_location %} desde dentro de la bandeja de notificaciones.
  - Ver una de las últimas razones por las cuales estás recibiendo una notificación desde tu bandeja de entrada con la etiqueta `razones`.
  - Crear filtros personalizados para enfocarte en diferentes notificaciones cuando así lo quieras.
  - Agrupar notificaciones por repositorio o fecha en tu bandeja de entrada para obtener un resumen rápido con menos cambios de contexto

{% ifversion fpt or ghes or ghec %}
Adicionalmente, puedes recibir las notificaciones de clasificación en tu dispositivo móvil con {% data variables.product.prodname_mobile %}. Para obtener más información, consulta la sección "[Administrar tu configuración de notificaciones con GitHub para móviles](#managing-your-notification-settings-with-github-for-mobile)" o "[GitHub para móviles](/github/getting-started-with-github/github-for-mobile)".
{% endif %}

### Beneficios de utilizar un cliente de correo electrónico para las notificaciones

Un beneficio de utilizar un cliente de correo electrónico es que todas tus notificaciones se pueden mantener por tiempo indefinido dependiendo de la capacidad de almacenamiento de éste. Las notificaciones de tu bandeja de entrada solo se mantienen por 5 meses en {% data variables.product.prodname_dotcom %} a menos de que las hayas marcado como **Guardadas**. Las notificaciones **Guardadas** se mantendrán por tiempo indefinido. Para obtener más información acerca de la política de retención de tu bandeja de entrada, consulta la sección "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)".

Enviar notificaciones a tu cliente de correo electrónico también te permite personalizar tu bandeja de entrada de acuerdo con la configuración del mismo, lo cual puede incluir etiquetas personalizadas o con códigos de color.

Las notificaciones por correo electrónico también permiten la flexibilidad con los tipos de notificaciones que recibes y te permiten escoger diferentes direcciones para las actualizaciones. Por ejemplo, puedes enviar ciertas notificaciones para un repositorio a una dirección de correo electrónico personal verificada. Para obtener más información acerca de las opciones de personalización para tu correo electrónico, consulta la secicón "[Personalizar tus notificaciones por correo electrónico](#customizing-your-email-notifications)".

## Acerca de participar y seguir de cerca las notificaciones

Cuando observas un repositorio, te suscribes a las actualizaciones de la actividad en el mismo. De forma similar, cuando observas las discusiones específicas de un equipo, te suscribes a todas las actualizaciones de la conversación en la página de ese equipo. Para obtener más información, consulta [Acerca de los debates del equipo](/organizations/collaborating-with-your-team/about-team-discussions)".

Para ver los repositorios que estás observando, dirígete a tu [página de observados](https://github.com/watching). Para obtener más información, consulta la sección "[Administrar suscricpiones y notificaciones en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

{% ifversion ghae or ghes < 3.1 %}
### Configurar notificaciones
{% endif %}
Puedes configurar las notificaciones de un repositorio en la página del mismo o en tu página de observados.{% ifversion ghes < 3.1 %} puedes elegir solo recibir notificaciones para los lanzamientos de un repositorio o ignorar todas las notificaciones de este.{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}

### Acerca de las notificaciones personalizadas
Puedes personalizar las notificaciones de un repositorio. Por ejemplo, puedes elegir que solo se te notifique cuando suceden las actualizaciones a uno o más eventos ({% data reusables.notifications-v2.custom-notification-types %}) dentro de un repositorio o ignorar todas las notificaciones de este.
{% endif %} Para obtener más información, consulta la sección "[Configurar tus ajustes de observación para un repositorio individual](#configuring-your-watch-settings-for-an-individual-repository)" a continuación.

### Participar en conversaciones
Siempre que comentes en una conversación, o cuando alguien @menciona tu nombre de usuario, estarás _participando_ en una conversación. Predeterminadamente, estás suscrito automáticamente a una conversación cuando participas en ella. Puedes desuscribirte manualmente de una conversación en la que hayas participado si das clic en **Desuscribir** en el informe de problemas o solicitud de extracción, o a través de la opción de **Desuscribir** en la bandeja de notificaciones.

Para las conversaciones que observas o en las cuales participas, puedes elegir si quieres recibir notificaciones por correo electrónico o a través de la bandeja de notificaciones en {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} y en {% data variables.product.prodname_mobile %}{% endif %}.

![Opciones de notificación para observar y participar](/assets/images/help/notifications-v2/participating-and-watching-options.png)

Por ejemplo:
  - Si no quieres que se te envíen notificaciones a tu correo electrónico, deselecciona **email** de la opción en participar y seguir de cerca las notificaciones.
  - Si quieres recibir notificaciones por correo electrónico cuando hayas participado en una conversación, entonces puedes seleccionar **email** debajo de "Participando".

Si no quieres habilitar las notificaciones de observar o participar para web{% ifversion fpt or ghes or ghec %} y para dispositivos móviles{% endif %}, entonces tu bandeja de notificaciones no mostrará actualizaciones.

## Personalizar tus notificaciones de correo electrónico

Después de activar las notificaciones por correo electrónico, {% data variables.product.product_location %} te enviará notificaciones como correos electrónicos con varias partes que contienen copias del contenido tanto en HTML como en texto simple. El contenido de las notificaciones por correo electrónico incluye cualquier Markdown, @menciones, emojis, vínculos hash, etc., que aparecen en el contenido original en {% data variables.product.product_location %}. Si solo quieres ver el texto en el correo electrónico, puedes configurar tu cliente de correo electrónico para que muestre solo la copia de texto simple.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Si usas Gmail, puedes hacer clic en un botón al lado del correo electrónico para notificaciones para visitar la propuesta o la solicitud de extracción original que generó la notificación.

![Botones en Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Escoge una dirección de correo electrónico predeterminada en donde quieras enviar actualizaciones para las conversaciones que observes o en las cuales participes. También puedes especificar la actividad de {% data variables.product.product_location %} sobre la cual quieras recibir actualizaciones para utilizar tu dirección de correo electrónico predeterminada. Por ejemplo, escoge si quieres recibir actualizaciones en tu correo electrónico predeterminado sobre:
  - Comentarios sobre informes de problemas y solicitudes de extracción.
  - Revisiones de solicitudes de extracción.
  - Subidas de solicitudes de extracción.
  - Tus propias actualizaciones, tales como cuando abres, comentas o cierras un informe de problemas o solicitud de extracción.

Dependiendo de la organización a la que pertenezca el repositorio, también puedes enviar notificaciones a direcciones de correo electrónico distintas. Tu organización podría requerir que dicha dirección se verifique en un dominio específico. Para obtener más información, consulta la sección "[Escoger a dónde se envían las notificaciones de tu organización por correo electrónico](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)".

También puedes enviar las notificaciones para un repositorio específico a una dirección decorreo electrónico. Para obtener más información, consulta la sección "[Acerca de las notificaciones por correo electrónico para las cargas a tu repositorio](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)".

{% data reusables.notifications-v2.email-notification-caveats %}

## Filtrar las notificaciones por correo electrónico

Cada notificación por correo electrónico que envía {% data variables.product.product_location %} contiene información de encabezado. La información del encabezado en cada correo electrónico es consistente, para que puedas usarla en tu cliente de correo electrónico para filtrar o enviar todas las notificaciones de {% data variables.product.prodname_dotcom %} o ciertos tipos de notificaciones de {% data variables.product.prodname_dotcom %}.

Si crees que estás recibiendo notificaciones que no te pertenecen, examina los encabezados `X-GitHub-Recipient` y `X-GitHub-Recipient-Address`. Estos encabezados te muestran quién es el destinatario previsto. Dependiendo de tu configuración de correo electrónico, podrías recibir notificaciones destinadas para otro usuario.

Las notificaciones por correo electrónico de {% data variables.product.product_location %} contienen la siguiente información de encabezado:

| Encabezado                              | Información                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dirección `De`                          | Esta dirección siempre será {% ifversion fpt or ghec %}'`notifications@github.com`'{% else %}'la dirección de correo electrónico sin respuesta configurada por el administrador de tu sitio'{% endif %}.                                                                                                                                                      |
| campo `Para`                            | Este campo se conecta directamente al hilo.{% ifversion not ghae %} Si respondes al correo electrónico, agregarás un comentario nuevo a la conversación.{% endif %}
| dirección `Cc`                          | {% data variables.product.product_name %} te enviará `Cc` si estás suscripto a una conversación. La segunda dirección de correo electrónico `Cc` coincide con el motivo de la notificación. El sufijo para estos motivos de notificación es {% data variables.notifications.cc_address %}. Los posibles motivos de notificación son: <ul><li>`assign`: Te asignaron a una propuesta o solicitud de extracción.</li><li>`author`: Creaste una propuesta o solicitud de extracción.</li><li>`ci_activity`: Se completó uya ejecución de flujo de trabajo de {% data variables.product.prodname_actions %} que activaste.</li><li>`comment`: Comentaste una propuesta o solicitud de extracción.</li><li>`manual`: Hubo una actualización de una propuesta o solicitud de extracción a la que te suscribiste de forma manual.</li><li>`mention`: Te mencionaron en una propuesta o solicitud de extracción.</li><li>`push`: Alguien confirmó una solicitud de extracción a la que estás suscripto.</li><li>`review_requested`: Te solicitaron a tí o a un equipo del que eres miembro revisar una solicitud de extracción.</li>{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}<li>`security_alert`: {% data variables.product.prodname_dotcom %} detectó una vulnerabilidad en un repositorio para el que recibes alertas de seguridad.</li>{% endif %}<li>`state_change`: Se cerró o se abrió una propuesta o solicitud de extracción a la que estás suscripto.</li><li>`subscribed`: Hubo una actualización en un repositorio que estás mirando.</li><li>`team_mention`: Un equipo al que perteneces fue mencionado en una propuesta o solicitud de extracción.</li><li>`your_activity`: Abriste, comentaste en o cerraste una propuesta o solicitud de extracción.</li></ul> |
| Campo `mailing list` (lista de correos) | Este campo identifica el nombre del repositorio y su propietario. El formato de esta dirección siempre es `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. |{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
| Campo `X-GitHub-Severity`               | {% data reusables.repositories.security-alerts-x-github-severity %} Los posibles niveles de gravedad son:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)". 
{% endif %}

## Escoger tu configuración de notificaciones

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. En la página de configuración de notificaciones, elige cómo deseas recibir las notificaciones cuando:
    - Existen actualizaciones en repositorios o debates de equipo que estás siguiendo de cerca, o en una conversación en la que estás participando. Para obtener más información, consulta la sección "[Acerca de participar y seguir notificaciones](#about-participating-and-watching-notifications)".
    - Obtienes acceso a un repositorio nuevo o te has unido a un equipo nuevo. Para obtener más información, consulta la sección "[Observar automáticamente](#automatic-watching)".{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
    - Hay nuevas {% if page.version == 'dotcom' %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de seguridad{% endif %} en tu repositorio. Para obtener más información, consulta la sección "[{% data variables.product.prodname_dependabot_alerts %} opciones de notificación](#dependabot-alerts-notification-options)". {% endif %} {% ifversion fpt or ghec %}
    - Hay actualizaciones en la ejecución de flujos de trabajo en los repositorios configurados con {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[opciones de notificación de {% data variables.product.prodname_actions %}](#github-actions-notification-options)".{% endif %}

## Seguimiento automático

Predeterminadamente, cada que obtienes acceso a un repositorio nuevo, comenzarás automáticamente a observarlo. En cualquier momento que te unas a un equipo, te suscribirás automáticamente a las actualizaciones y recibirás notificaciones cuando se @mencione a dicho equipo. Si no te quieres suscribir automáticamente, puedes deseleccionar las opciones de observar automáticamente.

  ![Opciones de observar automáticamente](/assets/images/help/notifications-v2/automatic-watching-options.png)

Si inhabilitas la opción de "Observar los repositorios automáticamente", no podrás observar automáticamente tus propios repositorios. Debes navegar hasta tu página de repositorio y escoger la opción de observar.

## Configurar los ajustes de observación para un repositorio individual

Puedes elegir si quieres observar o dejar de observar un repositorio individual. También puedes elegir que solo se te notifique sobre {% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}algunos tipos de evento tales como {% data reusables.notifications-v2.custom-notification-types %} (si es que se habilitó en el repositorio) {% else %}lanzamientos nuevos{% endif %}, o ignorar completamente un repositorio individual.

{% data reusables.repositories.navigate-to-repo %}
2. En la esquina superior derecha, selecciona en el menú desplegable "Observar" para hacer clic en una opción de observación.
{% ifversion fpt or ghes > 3.0 or ghae-issue-4910 or ghec %}
   ![Ver opciones en un menú desplegable para un repositorio](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   La opción **Personalizar** te permite personalizar aún más las notificaciones para que solo se te notifique cuando suceden eventos específicos en el repositorio, adicionalmente a participar y tener @menciones.
{% else %}
     ![Ver opciones en un menú desplegable para un repositorio](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %}
{% ifversion fpt or ghes > 3.0 or ghae-issue-4910 or ghec %}
   ![Opciones de observación personalizada en un menú desplegable de un repositorio](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) Si seleccionas "propuestas", se te notificará sobre y suscribirá a las actualizaciones de cada propuesta (incluyendo aquellas que existieron antes de que seleccionaras esta opción) del repositorio. Si se te @menciona en una solicitud de cambios de este repositorio, también recibirás notificaciones por este evento y se te suscribirá a las actualizaciones de esa solicitud de cambios específica adicionalmente a las notificaciones que tendrás sobre las propuestas.
{% endif %}

## Elegir a dónde se envían las notificaciones por correo electrónico de tu organización

Si perteneces a una organización, puedes escoger la cuenta de correo electrónico a la que desees que se envíen las notificaciones de la actividad de la empresa. Por ejemplo, si perteneces a una organización de trabajo, es posible que desees que tus notificaciones se envíen a tu dirección de correo electrónico laboral, en lugar de tu dirección personal.

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. En "Default notification email" (Correo electrónico de notificación predeterminado), selecciona la dirección de correo electrónico a la que deseas que se envíen las notificaciones.   
   ![Desplegable de direcciones de correo electrónico de notificación predeterminadas](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)
4. Haz clic en **Save ** (guardar).

### Personalizar rutas de correo electrónico por organización

If you are a member of more than one organization, you can configure each one to send notifications to any of{% ifversion fpt or ghec %} your verified email addresses{% else %} the email addresses for your account{% endif %}. {% ifversion fpt or ghec %} Para obtener más información, consulta la sección "[Verificar tu dirección de correo electrónico](/articles/verifying-your-email-address)".{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. En "Custom routing" (Enrutamiento personalizado) busca el nombre de tu organización en la lista.   
   ![Lista de organizaciones y direcciones de correo electrónico](/assets/images/help/notifications/notifications_org_emails.png)
4. Haz clic en **Edit** (Editar) junto a la dirección de correo electrónico que deseas cambiar. ![Editar las direcciones de correo electrónico de la organización](/assets/images/help/notifications/notifications_edit_org_emails.png)
5. Selecciona una de las direcciones de correo electrónico verificadas, luego haz clic en **Save** (Guardar).    
   ![Alternar tus direcciones de correo electrónico por organización](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## {% data variables.product.prodname_dependabot_alerts %}opciones de notificación

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

Para obtener más información acerca de los métodos de entrega de las notificaciones que tienes disponibles, así como para encontrar consejos sobre cómo optimizar tus notificaciones para {% ifversion fpt or ghes or ghec %}las {% else %}alertas de seguridad{% endif %} del {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Configurar las notificaciones para las dependencias vulnerables](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".
{% endif %}

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_actions %}opciones de notificación

Elige cómo quieres recibir las actualizaciones para las ejecuciones de flujo de trabajo en los repositorios que estás observando y que se configuraron con {% data variables.product.prodname_actions %}. También puedes elegir recibir únicamente las notificaciones para las ejecuciones de flujo de trabajo fallidas.

  ![Opciones de notificación para {% data variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghes or ghec %}
## Administrar tu configuración de notificaciones con {% data variables.product.prodname_mobile %}

Cuando instalas {% data variables.product.prodname_mobile %}, ingresarás automáticamente en las notificaciones web. Dentro de la app, puedes habilitar notificaciones de subida para los siguientes eventos.
- Menciones directas
- Tareas para propuestas o sollicitudes de cambio
- Solicitudes para revisar una solicitud de cambios
- Solicitudes para aprobar un despliegue

También puedes programar si {% data variables.product.prodname_mobile %} enviará notificaciones de subida a tu dispositivo móvil.

{% data reusables.mobile.push-notifications-on-ghes %}

### Administrar tu configuración de notificaciones con {% data variables.product.prodname_ios %}

1. En el menú inferior, pulsa en **Perfil**.
2. Para ver tu configuración, toca en {% octicon "gear" aria-label="The Gear icon" %}.
3. Para actualizar tu configuración de notificaciones, pulsa en **Notificaciones** y luego usa los alternadores para habilitar o inhabilitar tus tipos de notificaciones de subida preferidos.
4. Opcionalmente, para programar cuando {% data variables.product.prodname_mobile %} enviará notificaciones de subida a tu dispositivo móvil, pusla en **Horas laborales**, utiliza el botón para alternar de **Horas laborales personalizadas** y elige entonces cuándo te gustaría recibir notificaciones de subida.

### Administrar tu configuración de notificaciones con {% data variables.product.prodname_android %}

1. En el menú inferior, pulsa en **Perfil**.
2. Para ver tu configuración, toca en {% octicon "gear" aria-label="The Gear icon" %}.
3. Para actualizar tu configuración de notificaciones, pulsa en **Configurar Notificaciones** y luego usa los alternadores para habilitar o inhabilitar tus tipos de notificaciones de subida preferidos.
4. Opcionalmente, para programar cuando {% data variables.product.prodname_mobile %} enviará notificaciones de subida a tu dispositivo móvil, pusla en **Horas laborales**, utiliza el botón para alternar de **Horas laborales personalizadas** y elige entonces cuándo te gustaría recibir notificaciones de subida.

## Configurar tus ajustes de observación para un repositorio individual con {% data variables.product.prodname_mobile %}

Puedes elegir si quieres observar o dejar de observar un repositorio individual. También puedes elegir que solo se te notifique de {% ifversion fpt or ghec %}algunos tipos de eventos, tales como propuestas, solicitudes de cambios, debates (si se habilitaron en el repositorio) y {% endif %}lanzamientos nuevos, o puedes ignorar completamente un repositorio específico.

1. En {% data variables.product.prodname_mobile %}, visita la página principal del repositorio.
2. Pulsa en **Observar**. ![El botón de observar en {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. Para elegir para qué actividades recibes notificaciones, pulsa en tus ajustes de observación preferidos. ![Menú desplegable de ajustes de observación en {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
