---
title: Configurar el correo electrónico para notificaciones
intro: 'Para que sea más fácil para los usuarios el responder rápidamente a la actividad de {% data variables.product.product_name %}, puedes configurar a {% data variables.product.product_location %} para que envíe notificaciones por correo electrónico para las propuestas, solicitudes de cambio y comentarios de las confirmaciones.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: d7dd82fa95db462abe8d9d19e8df60a45dab3f0c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718137'
---
{% ifversion ghae %} Los propietarios de la empresa pueden configurar el correo electrónico para las notificaciones.
{% endif %}
## Configurar el SMTP para tu empresa

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. Seleccione **Habilitar correo electrónico**. Esto habilitará tanto el correo electrónico de salida como el de entrada; pero para que el correo electrónico de entrada funcione, también tendrá que configurar las opciones de DNS, como se describe a continuación en "[Configuración de DNS y firewall para permitir correos electrónicos entrantes](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)".
![Habilitación del correo electrónico de salida](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Teclea la configuración para tu servidor de SMTP.
      - En el campo **Dirección del servidor**, escriba la dirección del servidor SMTP.
      - En el campo **Puerto**, escriba el puerto que usa el servidor SMTP para enviar correo electrónico.
      - En el campo **Dominio**, escriba el nombre de dominio que enviará el servidor SMTP con una respuesta HELO, si existe.
      - Seleccione la lista desplegable **Autenticación**, elija el tipo de cifrado que usa el servidor SMTP.
      - En el campo **Dirección de correo electrónico sin respuesta**, escriba la dirección de correo electrónico que se usará en los campos De y Para en todos los correos electrónicos de notificación.      
6. Si quiere descartar todos los correos electrónicos entrantes que estén dirigidos al correo electrónico sin respuesta, seleccione **Descartar correo electrónico dirigido a la dirección de correo electrónico sin respuesta**.
![Casilla para descartar los correos electrónicos dirigidos a la dirección de correo electrónico sin respuesta](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. En **Soporte técnico**, elija un tipo de vínculo para ofrecer soporte técnico adicional a los usuarios.
    - **Correo electrónico:** una dirección de correo electrónico interna.
    - **URL:** un vínculo a un sitio de soporte técnico interno. Debe incluir `http://` o `https://`.
  ![Dirección de correo electrónico o URL de soporte técnico](/assets/images/enterprise/management-console/support-email-url.png)
8. [Pruebe la entrega de correo electrónico](#testing-email-delivery).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. Seleccione **Habilitar correo electrónico**.
  ![Casilla "Habilitar" para la configuración de valores de correo electrónico](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Teclea la configuración para tu servidor de correo electrónico.
    - En el campo **Dirección del servidor**, escriba la dirección del servidor SMTP.
    - En el campo **Puerto**, escriba el puerto que usa el servidor SMTP para enviar correo electrónico.
    - En el campo **Dominio**, escriba el nombre de dominio que enviará el servidor SMTP con una respuesta HELO, si existe.
    - Seleccione la lista desplegable **Autenticación**, elija el tipo de cifrado que usa el servidor SMTP.
    - En el campo **Dirección de correo electrónico sin respuesta**, escriba la dirección de correo electrónico que se usará en los campos De y Para en todos los correos electrónicos de notificación.
4. Si quiere descartar todos los correos electrónicos entrantes que estén dirigidos al correo electrónico sin respuesta, seleccione **Descartar correo electrónico dirigido a la dirección de correo electrónico sin respuesta**.
  ![Casilla "Descartar" para la configuración de las opciones de correo electrónico](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Haga clic en **Probar configuración de correo electrónico**.
  ![Botón "Probar configuración de correo electrónico" para la configuración de las opciones de correo electrónico](/assets/images/enterprise/configuration/ae-test-email.png)
6. En "Enviar correo electrónico de prueba a", escriba la dirección de correo electrónico a la que quiera enviar un mensaje de prueba y haga clic en **Enviar correo electrónico de prueba**.
  ![Botón "Enviar correo electrónico de prueba" para la configuración de las opciones de correo electrónico](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Haga clic en **Save**(Guardar).
  ![Botón "Guardar" para la configuración de contacto de soporte técnico de la empresa](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## Probar entrega del correo electrónico

1. En la parte superior de la sección **Correo electrónico**, haga clic en **Probar configuración de correo electrónico**.
![Prueba de la configuración de correo electrónico](/assets/images/enterprise/management-console/test-email.png)
2. En el campo **Enviar correo electrónico de prueba a**, escriba una dirección para enviar el correo electrónico de prueba.
![Dirección de correo electrónico de prueba](/assets/images/enterprise/management-console/test-email-address.png)
3. Haga clic en **Enviar correo electrónico de prueba**.
![Envío de un correo electrónico de prueba](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Sugerencia:** Si se producen errores de SMTP mientras se envía un correo electrónico de prueba, como un error de entrega inmediato o de configuración del correo saliente, los verá en el cuadro de diálogo Configuración del correo electrónico de prueba.

  {% endtip %}

4. Si se produce un error en el correo electrónico de prueba, [solucione los problemas de configuración del correo electrónico](#troubleshooting-email-delivery).
5. Cuando el correo electrónico de prueba sea correcto, haga clic en **Guardar configuración** en la parte inferior de la página.
![Botón Guardar configuración](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## Aplicación de TLS para conexiones SMTP

Puedes aplicar el cifrado TLS para todas las conexiones SMTP entrantes, para ayudar a satisfacer un requisito de certificación ISO-27017.

{%- ifversion ghes = 3.6 %} {% note %}

**Nota**: La aplicación de TLS para conexiones SMTP no está disponible en {% data variables.product.product_name %} 3.6.0. La característica estará disponible en una próxima versión de revisión.

{% endnote %} {%- endif %}

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. En "Authentication," (Autenticación), selecciona **Enforce TLS auth (recommended)** (Aplicar autenticación TLS [recomendado]).

   ![Captura de pantalla de la casilla para aplicar la autenticación TLS (opción recomendada)](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% endif %}

## Configurar DNS y parámetros de firewall para permitir correos electrónicos entrantes

Si quieres permitir respuestas de correo electrónico para las notificaciones, debes configurar los parámetros de tu DNS.

1. Asegúrate de que el puerto 25 en la instancia esté accesible para tu servidor SMTP.
2. Cree un registro A que apunte a `reply.[hostname]`. En función del proveedor DNS y de la configuración del host de instancia, es posible que pueda crear un registro A único que apunte a `*.[hostname]`.
3. Cree un registro MX que apunte a `reply.[hostname]` para que los correos electrónicos a ese dominio se enruten a la instancia.
4. Cree un registro MX que apunte `noreply.[hostname]` a `[hostname]` para que las respuestas a la dirección `cc` de los correos electrónicos de notificación se enruten a la instancia. Para más información, vea {% ifversion ghes %}"[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[Acerca de las notificaciones por correo electrónico](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}".

## Solución de problemas de entrega de correo electrónico

### Crea un Paquete de soporte

Si no puede determinar cuál es el error del mensaje de error que se muestra, puede descargar un [conjunto de soporte técnico](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support) que contenga toda la conversación SMTP entre el servidor de correo y {% data variables.product.prodname_ghe_server %}. Una vez que haya descargado el conjunto, compruebe las entradas en *enterprise-manage-logs/unicorn.log* de todo el registro de conversación SMTP y cualquier error relacionado.

El registro unicornio debería mostrar una transacción similar a la siguiente:

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

Este registro muestra que el aparato:

* Ha abierto una conexión con el servidor SMTP (`Connection opened: smtp.yourdomain.com:587`).
* Ha realizado correctamente una conexión y ha elegido usar TLS (`TLS connection started`).
* Se ha realizado el tipo de autenticación `login` (`<- "AUTH LOGIN\r\n"`).
* El servidor SMTP ha rechazado la autenticación como no válida (`-> "535-5.7.1 Username and Password not accepted.`).

### Comprobación de los registros de {% data variables.product.product_location %} logs

Si tiene que verificar que el correo electrónico de entrada funciona, puede examinar dos archivos de registro en la instancia: */var/log/mail.log* y */var/log/mail-replies/metroplex.log*.

*/var/log/mail.log* comprueba que los mensajes llegan al servidor. Este es un ejemplo de una respuesta de correo electrónico exitosa:

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

Ten en cuenta que el cliente primero se conecta; luego, la cola se vuelve activa. Entonces, el mensaje es entregado, el cliente es retirado de la cola y la sesión se desconecta.

*/var/log/mail-replies/metroplex.log* muestra si los correos electrónicos entrantes se procesan para agregarse a las incidencias y solicitudes de incorporación de cambios como respuestas. Este es un ejemplo de un mensaje exitoso:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

Observará que `metroplex` captura el mensaje entrante, lo procesa y, después, mueve el archivo a `/data/user/incoming-mail/success`.{% endif %}

### Verificar los parámetros de tu DNS

Para procesar los correos electrónicos entrantes de manera adecuada, debes configurar un Registro A válido (o CNAME), así como un Registro MX. Para más información, vea "[Configuración de DNS y opciones de firewall para permitir correos electrónicos entrantes](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)".

### Controlar los parámetros de AWS Security Group o firewall

Si {% data variables.product.product_location %} está detrás de un firewall o se proporciona mediante un grupo de seguridad de AWS, asegúrese de que el puerto 25 está abierto para todos los servidores de correo que envían correos electrónicos a `reply@reply.[hostname]`.

### Póngase en contacto con el soporte técnico.
{% ifversion ghes %} Si todavía no puede resolver el problema, póngase en contacto con {% data variables.contact.contact_ent_support %}. Adjunte el archivo de salida de `http(s)://[hostname]/setup/diagnostics` al correo electrónico para ayudarnos a solucionar el problema.
{% elsif ghae %} Puede ponerse en contacto con {% data variables.contact.github_support %} a fin de obtener ayuda en la configuración del correo electrónico para las notificaciones que se envíen mediante el servidor SMTP. Para más información, vea "[Recepción de ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".
{% endif %}
