---
title: Elegir el método de entrega para tus notificaciones
intro: 'Puedes recibir tus notificaciones en {% data variables.product.product_location %} o recibirlas mediante tu cliente de correo electrónico.'
versions:
  enterprise-server: <2.21
---

Para las cuentas personales, los correos electrónicos de notificación se envían automáticamente a tu correo electrónico de notificación predeterminado.

{% data reusables.notifications.outbound_email_tip %}

### Elegir el método de entrega para notificaciones sobre la actividad del repositorio

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Configura cómo deseas recibir las notificaciones en las que participas u observas al seleccionar las casillas de verificación:
    - Si seleccionas **Email** (Correo electrónico) se envía un correo electrónico a tu correo electrónico predeterminado.
    - Si seleccionas **Web** podrás acceder a las notificaciones en {% data variables.product.product_location %}. ![Configurar ajustes de notificaciones](/assets/images/help/settings/ent-notifications-settings.png)
4. Si seleccionaste **Email** (Correo electrónico) para conversaciones en las que participas u observas, elige qué actualizaciones recibirás al seleccionar las casillas de verificación en la sección "Notification email" (Correo electrónico de notificación):
    - Selecciona **Comments on Issues and Pull Requests** (Comentarios sobre propuestas y solicitudes de extracción)</strong> para recibir un correo electrónico cuando alguien realiza un comentario en una propuesta en la pestaña "Conversation" (Conversación) de una solicitud de extracción.
    - Selecciona **Pull request reviews** (Revisiones de solicitudes de extracción) para recibir un correo electrónico cuando alguien realiza un comentario de revisión en la pestaña "Files changed" (Archivos cambiados) de una solicitud de extracción.
    - Selecciona **Pull request pushes** (Impulsos de solicitud de extracción) para recibir un correo electrónico cuando alguien agrega confirmaciones a una solicitud de extracción a la que te suscribiste.
    - Selecciona **Include your own updates** (Incluir tus propias actualizaciones) para recibir un correo electrónico cuando abras, comentes o cierres una propuesta o solicitud de extracción. ![Configurar opciones de notificación por correo electrónico](/assets/images/help/settings/email_notification_settings.png)

### Elegir el método de entrega para alertas de seguridad para dependencias vulnerables

{% data reusables.repositories.security-alert-delivery-options %}

{% data reusables.repositories.enable-security-alerts %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Debajo de "Alertas de seguridad", configura cómo te gustaría recibir las notificaciones cuando {% data variables.product.product_name %} detecte una dependencia vulnerable en tu repositorio: ![Opciones para configurar notificaciones para alertas de seguridad](/assets/images/help/settings/vulnerability-alerts-options.png)
    - Si seleccionas **UI alerts** (Alertas de UI) muestra un mensaje emergente en la interfaz de {% data variables.product.product_name %}.
    - Si seleccionas **Command Line** (Línea de comando) muestra advertencias como una devolución cuando subes a un repositorio con vulnerabilidades.
    - Si seleccionas **Web** podrás acceder a las notificaciones en {% data variables.product.product_location %}.
    - Si seleccionas **Email each time a vulnerabilidad is found** (Enviar un correo electrónico cada vez que se encuentra una vulnerabilidad) se envía un correo electrónico a tu correo electrónico predeterminado.
    - Si seleccionas **Email a digest summary of vulnerabilities** (Enviar un correo electrónico con un resumen de vulnerabilidades) envía un correo electrónico condensado con un resumen de hasta 10 alertas de seguridad de los repositorios. Usa el menú desplegable para recibir correos electrónicos condensados diariamente o semanalmente.

### Further reading

- "[Acerca de las notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[Acerca de las notificaciones por correo electrónico](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[Acerca de las notificaciones web](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "[Observar y dejar de observar un repositorio](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Administrar preferencias de correo electrónico](/articles/managing-email-preferences)"
