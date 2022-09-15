---
title: Configuración de notificaciones
intro: 'Elige el tipo de actividad en {% data variables.product.prodname_dotcom %} para el que deseas recibir notificaciones y cómo deseas que se entreguen estas actualizaciones.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: b7822a7db40455476c5fc5ac6f779e45d7f558a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060766'
---
## Opciones de entrega de notificaciones

Puede recibir notificaciones de actividad en {% data variables.product.product_location %} en las siguientes ubicaciones.

  - La bandeja de entrada de notificaciones de la interfaz web de {% data variables.product.product_location %} {% ifversion fpt or ghes or ghec %}
  - La bandeja de notificaciones en {% data variables.product.prodname_mobile %}, que se sincroniza con la de {% data variables.product.product_location %}{% endif %}
  - Un cliente de correo electrónico que utiliza una dirección de correo electrónico verificada, la cual también se sincroniza con la bandeja de entrada de notificaciones en {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} y {% data variables.product.prodname_mobile %}{% endif %}

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Para obtener más información, consulte "[Escoger la configuración de notificaciones](#choosing-your-notification-settings)."
{% endif %}

{% data reusables.notifications.shared_state %}

### Beneficios de la bandeja de entrada de notificaciones

La bandeja de notificaciones de {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} y {% data variables.product.prodname_mobile %}{% endif %} incluye opciones de evaluación de prioridades diseñadas específicamente para su flujo de notificaciones de {% data variables.product.prodname_dotcom %}, con opciones como:
  - Evaluación de prioridades de varias notificaciones a la vez.
  - Marque las notificaciones completadas como **Done** y quítelas de la bandeja de entrada. Para ver todas las notificaciones marcadas como **Done**, use la consulta `is:done`.
  - Guarde una notificación para revisarla más adelante. Las notificaciones guardadas se marcan en la bandeja de entrada y se conservan indefinidamente. Para ver todas las notificaciones guardadas, use la consulta `is:saved`.
  - Cancele la suscripción y quite una notificación de la bandeja de entrada.
  - Obtenga la vista previa de la incidencia, la solicitud de incorporación de cambios o el debate de equipo donde se origina la notificación en {% data variables.product.product_location %} desde la bandeja de notificaciones.
  - Vea una de las razones más recientes por las que recibe una notificación de la bandeja de entrada con una etiqueta `reasons`.
  - Cree filtros personalizados para centrarse en diferentes notificaciones cuando quiera.
  - Agrupar notificaciones por repositorio o fecha en tu bandeja de entrada para obtener un resumen rápido con menos cambios de contexto

{% ifversion fpt or ghes or ghec %} Además, puede recibir y evaluar las notificaciones en el dispositivo móvil con {% data variables.product.prodname_mobile %}. Para obtener más información, consulte "[Administración de la configuración de notificaciones con GitHub Mobile](#managing-your-notification-settings-with-github-mobile)" o "[GitHub Mobile](/get-started/using-github/github-mobile)".
{% endif %}

### Beneficios de utilizar un cliente de correo electrónico para las notificaciones

Un beneficio de utilizar un cliente de correo electrónico es que todas tus notificaciones se pueden mantener por tiempo indefinido dependiendo de la capacidad de almacenamiento de éste. Las notificaciones de la bandeja de entrada solo se conservan durante 5 meses en {% data variables.product.prodname_dotcom %} a menos que las haya marcado como **Saved**. Las notificaciones marcadas como **Saved** se conservan indefinidamente. Para obtener más información sobre la directiva de retención de la bandeja de entrada, consulte "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)".

Enviar notificaciones a tu cliente de correo electrónico también te permite personalizar tu bandeja de entrada de acuerdo con la configuración del mismo, lo cual puede incluir etiquetas personalizadas o con códigos de color.

Las notificaciones por correo electrónico también permiten la flexibilidad con los tipos de notificaciones que recibes y te permiten escoger diferentes direcciones para las actualizaciones. Por ejemplo, puedes enviar ciertas notificaciones para un repositorio a una dirección de correo electrónico personal verificada. Para obtener más información sobre las opciones de personalización de correo electrónico, consulte "[Personalización de las notificaciones por correo electrónico](#customizing-your-email-notifications)".

## Acerca de participar y seguir de cerca las notificaciones

Cuando observas un repositorio, te suscribes a las actualizaciones de la actividad en el mismo. De forma similar, cuando observas las discusiones específicas de un equipo, te suscribes a todas las actualizaciones de la conversación en la página de ese equipo. Para obtener más información, consulte "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions)".

Para ver los repositorios que está inspeccionando, vaya a la [página de inspección](https://github.com/watching). Para obtener más información, consulte "[Administración de suscripciones y notificaciones en GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

{% ifversion ghae %}
### Configuración de notificaciones
{% endif %} Puede configurar las notificaciones de un repositorio en su página o en la página de inspección.

### Acerca de las notificaciones personalizadas
Puedes personalizar las notificaciones de un repositorio. Por ejemplo, puedes elegir que solo se te notifique cuando suceden las actualizaciones a uno o más eventos ({% data reusables.notifications-v2.custom-notification-types %}) dentro de un repositorio o ignorar todas las notificaciones de este. Para obtener más información, consulte "[Configuración de los valores de inspección para un repositorio individual](#configuring-your-watch-settings-for-an-individual-repository)".

### Participar en conversaciones
Cada vez que comenta en una conversación o cuando alguien @mentions su nombre de usuario, _participa_ en una conversación. Predeterminadamente, estás suscrito automáticamente a una conversación cuando participas en ella. Puede cancelar la suscripción de una conversación en la que ha participado manualmente haciendo clic en **Unsubscribe** en la incidencia o la solicitud de incorporación de cambios o mediante la opción **Unsubscribe** en la bandeja de entrada de notificaciones.

Para las conversaciones que inspecciona o en las que participa, puede elegir si quiere recibir notificaciones por correo electrónico o en la bandeja de notificaciones en {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} y {% data variables.product.prodname_mobile %}{% endif %}.

![Opciones de notificación para observar y participar](/assets/images/help/notifications-v2/participating-and-watching-options.png)

Por ejemplo:
  - Si no desea que las notificaciones se envíen a su correo electrónico, anule la selección del **correo electrónico** para participar e inspeccionar las notificaciones.
  - Si desea recibir notificaciones por correo electrónico cuando haya participado en una conversación, puede seleccionar **email** en "Participating".

Si no desea habilitar las notificaciones de inspección o participación para web{% ifversion fpt or ghes or ghec %} and mobile{% endif %}, su bandeja de notificaciones no mostrará actualizaciones.

## Personalizar tus notificaciones de correo electrónico

Después de activar las notificaciones por correo electrónico, {% data variables.product.product_location %} le enviará notificaciones en forma de correos electrónicos con varias partes que contienen copias del contenido tanto en HTML como en texto simple. El contenido de las notificaciones por correo electrónico incluye cualquier Markdown, @mentions, emojis, vínculos hash, etc., que aparecen en el contenido original de {% data variables.product.product_location %}. Si solo quieres ver el texto en el correo electrónico, puedes configurar tu cliente de correo electrónico para que muestre solo la copia de texto simple.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Si usas Gmail, puedes hacer clic en un botón al lado del correo electrónico para notificaciones para visitar la propuesta o la solicitud de extracción original que generó la notificación.

![Botones en Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Escoge una dirección de correo electrónico predeterminada en donde quieras enviar actualizaciones para las conversaciones que observes o en las cuales participes. También puede especificar la actividad de {% data variables.product.product_location %} sobre la cual quiera recibir actualizaciones para utilizar su dirección de correo electrónico predeterminada. Por ejemplo, escoge si quieres recibir actualizaciones en tu correo electrónico predeterminado sobre:
  - Comentarios sobre informes de problemas y solicitudes de extracción.
  - Revisiones de solicitudes de incorporación de cambios.
  - Subidas de solicitudes de extracción.
  - Tus propias actualizaciones, tales como cuando abres, comentas o cierras un informe de problemas o solicitud de extracción.

Dependiendo de la organización a la que pertenezca el repositorio, también puedes enviar notificaciones a direcciones de correo electrónico distintas. Tu organización podría requerir que dicha dirección se verifique en un dominio específico. Para obtener más información, consulte "[Elegir adónde se envían las notificaciones por correo electrónico de su organización](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)".

También puedes enviar las notificaciones para un repositorio específico a una dirección decorreo electrónico. Para obtener más información, consulte "[Acerca de las notificaciones por correo electrónico para las inserciones en el repositorio](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)".

{% data reusables.notifications-v2.email-notification-caveats %}

## Filtrar las notificaciones por correo electrónico

Cada notificación por correo electrónico que enví {% data variables.product.product_location %} contiene información de encabezado. La información del encabezado en cada correo electrónico es consistente, para que pueda usarla en su cliente de correo electrónico para filtrar o reenviar todas las notificaciones de {% data variables.product.prodname_dotcom %} o ciertos tipos de notificaciones de {% data variables.product.prodname_dotcom %}.

Si cree que recibe notificaciones que no le corresponden, examine los encabezados `X-GitHub-Recipient` y `X-GitHub-Recipient-Address`. Estos encabezados te muestran quién es el destinatario previsto. Dependiendo de tu configuración de correo electrónico, podrías recibir notificaciones destinadas para otro usuario.

Las notificaciones por correo electrónico de {% data variables.product.product_location %} contienen la siguiente información de encabezado:

| Encabezado | Información |
| --- | --- |
| Dirección `From` | Esta dirección siempre será {% ifversion fpt or ghec %}'`notifications@github.com`'{% else %}'la dirección de correo electrónico sin respuesta configurada por el administrador del sitio'{% endif %}. |
| Campo de`To` | Este campo se conecta directamente al subproceso. {% ifversion not ghae %} Si responde al correo electrónico, agregará un nuevo comentario a la conversación. {% endif %} |
| Dirección `Cc` | {% data variables.product.product_name %} le enviará `Cc` si está suscripto a una conversación. La segunda dirección de correo electrónico de `Cc` coincide con el motivo de la notificación. El sufijo para estos motivos de notificación es {% data variables.notifications.cc_address %}. Los posibles motivos de notificación son: <ul><li>`assign`: se le asignó a una incidencia o solicitud de incorporación de cambios.</li><li>`author`: creó una incidencia o solicitud de incorporación de cambios.</li><li>`ci_activity`: se completó una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}.</li><li>`comment`: hizo un comentario sobre una incidencia o solicitud de incorporación de cambios.</li><li>`manual`: hubo una actualización de una incidencia o solicitud de incorporación de cambios a la que se suscribió de forma manual.</li><li>`mention`: lo mencionaron en una incidencia o solicitud de incorporación de cambios.</li><li>`push`: alguien confirmó una solicitud de incorporación de cambios a la que está suscrito.</li><li>`review_requested`: se le solicita a usted o a un equipo del que es miembro revisar una solicitud de incorporación de cambios.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} detectó una vulnerabilidad en un repositorio para el que recibe alertas.</li><li>`state_change`: se cerró o se abrió una incidencia o solicitud de incorporación de cambios a la que está suscrito.</li><li>`subscribed`: hubo una actualización en un repositorio que inspecciona.</li><li>`team_mention`: un equipo al que pertenece fue mencionado en una incidencia o solicitud de incorporación de cambios.</li><li>`your_activity`: abrió, comentó o cerró una incidencia o solicitud de incorporación de cambios.</li></ul> |
| Campo de`mailing list` | Este campo identifica el nombre del repositorio y su propietario. El formato de esta dirección siempre es `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. |
| Campo de`X-GitHub-Severity` | {% data reusables.repositories.security-alerts-x-github-severity %} Los posibles niveles de gravedad son:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)". |

## Escoger tu configuración de notificaciones

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. En la página de configuración de notificaciones, elige cómo deseas recibir las notificaciones cuando:
    - Existen actualizaciones en repositorios o debates de equipo que estás siguiendo de cerca, o en una conversación en la que estás participando. Para obtener más información, consulte "[Acerca de las notificaciones de participación e inspección](#about-participating-and-watching-notifications)".
    - Obtienes acceso a un repositorio nuevo o te has unido a un equipo nuevo. Para más información, consulta [Seguimiento automático](#automatic-watching).
    - Hay nuevas {% data variables.product.prodname_dependabot_alerts %} en tu repositorio. Para obtener más información, consulte "[Opciones de notificación de {% data variables.product.prodname_dependabot_alerts %}](#dependabot-alerts-notification-options)".  {% ifversion fpt or ghec %}
    - Hay actualizaciones en la ejecución de flujos de trabajo en los repositorios configurados con {% data variables.product.prodname_actions %}. Para obtener más información, consulte "[Opciones de notificación de {% data variables.product.prodname_actions %}](#github-actions-notification-options)".{% endif %}{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
    - Hay llaves de lanzamiento nuevas que se agregan a los repositorios y que pertenece a las organizaciones de las cuales eres propietario. Para obtener más información, consulte "[Opciones de notificación de alertas de la organización](#organization-alerts-notification-options)". {% endif %}

## Seguimiento automático

Predeterminadamente, cada que obtienes acceso a un repositorio nuevo, comenzarás automáticamente a observarlo. Cada vez que se una a un equipo, se suscribirá automáticamente a las actualizaciones y recibirá notificaciones cuando se @mentioned al equipo. Si no te quieres suscribir automáticamente, puedes deseleccionar las opciones de observar automáticamente.

  ![Opciones de observar automáticamente](/assets/images/help/notifications-v2/automatic-watching-options.png)

Si inhabilitas la opción de "Observar los repositorios automáticamente", no podrás observar automáticamente tus propios repositorios. Debes navegar hasta tu página de repositorio y escoger la opción de observar.

## Configurar los ajustes de observación para un repositorio individual

Puedes elegir si quieres observar o dejar de observar un repositorio individual. También puedes elegir que solo se te notifique sobre tipos de eventos específicos, tales como los {% data reusables.notifications-v2.custom-notification-types %} (si es que se habilitaron para el repositorio) o ignorar un repositorio individual por completo.

{% data reusables.repositories.navigate-to-repo %}
2. En la esquina superior derecha, selecciona en el menú desplegable "Observar" para hacer clic en una opción de observación.
{% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![Opciones de inspección en un menú desplegable de un repositorio](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   La opción **Custom** le permite personalizar aún más las notificaciones para que solo se le notifique cuando sucedan eventos específicos en el repositorio, además de la participación y las @mentions.
{% else %} ![Opciones de inspección del menú desplegable de un repositorio](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %} {% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![Opciones de inspección personalizadas en el menú desplegable de un repositorio](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) Si selecciona "Issues", se le notificará y se suscribirá a las actualizaciones de todas las incidencias (incluidas las que existían antes de seleccionar esta opción) en el repositorio. Si se le @mentioned en una solicitud de incorporación de cambios en este repositorio, también recibirá notificaciones por este evento y se le suscribirá a las actualizaciones de esa solicitud de cambios específica, además de a las notificaciones sobre las incidencias.
   {% endif %}

## Elegir a dónde se envían las notificaciones por correo electrónico de tu organización

Si perteneces a una organización, puedes escoger la cuenta de correo electrónico a la que desees que se envíen las notificaciones de la actividad de la empresa. Por ejemplo, si perteneces a una organización de trabajo, es posible que desees que tus notificaciones se envíen a tu dirección de correo electrónico laboral, en lugar de tu dirección personal.    

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. En "Default notification email" (Correo electrónico de notificación predeterminado), selecciona la dirección de correo electrónico a la que deseas que se envíen las notificaciones.   
![Desplegable de direcciones de correo electrónico de notificación predeterminadas](/assets/images/help/notifications/notifications_primary_email_for_orgs.png) 
4. Haga clic en **Save**(Guardar).  

### Personalizar rutas de correo electrónico por organización   

Si eres miembro de más de una organización, puedes configurar cada una para enviar notificaciones a cualquiera de{% ifversion fpt or ghec %} tus direcciones de correo electrónico verificadas{% else %} las direcciones de correo electrónico de tu cuenta{% endif %}. {% ifversion fpt or ghec %} Para obtener más información, consulte "[Comprobación de la dirección de correo electrónico](/articles/verifying-your-email-address)".{% endif %} 

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. En "Custom routing" (Enrutamiento personalizado) busca el nombre de tu organización en la lista.   
![Lista de organizaciones y direcciones de correo electrónico](/assets/images/help/notifications/notifications_org_emails.png)    
4. Haga clic en **Edit** junto a la dirección de correo electrónico que desea cambiar.
![Editar las direcciones de correo electrónico de la organización](/assets/images/help/notifications/notifications_edit_org_emails.png)   
5. Seleccione una de las direcciones de correo electrónico verificadas y haga clic en **Save**.    
![Alternar las direcciones de correo electrónico por organización](/assets/images/help/notifications/notifications_switching_org_email.gif)

## Opciones de notificación de {% data variables.product.prodname_dependabot_alerts %} 

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

Para obtener más información sobre los métodos de entrega de notificaciones disponibles y consejos sobre cómo optimizar las notificaciones en {% data variables.product.prodname_dependabot_alerts %}, consulte "[Configuración de las notificaciones de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_actions %}opciones de notificación

Elige cómo quieres recibir las actualizaciones para las ejecuciones de flujo de trabajo en los repositorios que estás observando y que se configuraron con {% data variables.product.prodname_actions %}. También puedes elegir recibir únicamente las notificaciones para las ejecuciones de flujo de trabajo fallidas.

  ![Opciones de notificación para las {% data variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
## Opciones de alertas de notificación de las organizaciones 

Si eres un propietario de una organización, recibirás notificaciones de correo electrónico predeterminadamente cuando los miembros de esta agreguen llaves de despliegue a los repositorios dentro de la organización. Puedes dejar de suscribirte a estas notificaciones. En la página de configuración de notificaciones, en "Organization alerts", anule la selección de **Email**. 

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

1. En el menú inferior, pulse **Profile**.
2. Para ver la configuración, pulse {% octicon "gear" aria-label="The Gear icon" %}.
3. Para actualizar la configuración de notificaciones, pulse **Notifications** y use los alternadores para habilitar o deshabilitar sus tipos de notificaciones push preferidos.
4. También puede programar cuándo {% data variables.product.prodname_mobile %} enviará notificaciones push al dispositivo móvil. Para ello, pulse **Working Hours**, use el botón **Custom working hours** y, a continuación, elija cuándo desea recibir notificaciones push.

### Administrar tu configuración de notificaciones con {% data variables.product.prodname_android %}

1. En el menú inferior, pulse **Profile**.
2. Para ver la configuración, pulse {% octicon "gear" aria-label="The Gear icon" %}.
3. Para actualizar la configuración de notificaciones, pulse **Configure Notifications** y use los alternadores para habilitar o deshabilitar sus tipos de notificaciones push preferidos.
4. También puede programar cuándo {% data variables.product.prodname_mobile %} enviará notificaciones push al dispositivo móvil. Para ello, pulse **Working Hours**, use el botón **Custom working hours** y, a continuación, elija cuándo desea recibir notificaciones push.

## Configurar tus ajustes de observación para un repositorio individual con {% data variables.product.prodname_mobile %} 

Puedes elegir si quieres observar o dejar de observar un repositorio individual. También puede elegir que solo se le notifique de {% ifversion fpt or ghec %}algunos tipos de eventos, tales como incidencias, solicitudes de incorporación de cambios, debates (si se habilitaron en el repositorio) y {% endif %}versiones nuevas, o bien puede ignorar completamente un repositorio específico.

1. En {% data variables.product.prodname_mobile %}, navegue hasta la página principal del repositorio.
2. Pulse **Watch**.
   ![El botón Watch en {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. Para elegir para qué actividades recibes notificaciones, pulsa en tus ajustes de observación preferidos.
   ![Menú desplegable de ajustes de inspección en {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
