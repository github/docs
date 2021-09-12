---
title: Configurar el correo electrónico para notificaciones
intro: 'Para que sea más fácil para los usuarios el responder rápidamente a la actividad de {% data variables.product.product_name %}, puedes configurar a {% data variables.product.product_location %} para que envíe notificaciones por correo electrónico para las propuestas, solicitudes de cambio y comentarios de las confirmaciones.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration/
  - /enterprise/admin/articles/configuring-email/
  - /enterprise/admin/articles/troubleshooting-email/
  - /enterprise/admin/articles/email-configuration-and-troubleshooting/
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
---

{% if currentVersion == "github-ae@latest" %}
Los propietarios de las empresas pueden configurar los correos electrónicos para las notificaciones.
{% endif %}
### Configurar el SMTP para tu empresa

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. En la parte superior de la página, haz clic en **Parámetros**. ![Pestaña Parámetros](/assets/images/enterprise/management-console/settings-tab.png)
3. En la barra lateral de la izquierda, haz clic en **Correo electrónico**. ![Pestaña Correo electrónico](/assets/images/enterprise/management-console/email-sidebar.png)
4. Selecciona **Activar correo electrónico**. Esto activará tanto el correo electrónico de salida como el de entrada, sin embargo para trabajar con el correo electrónico entrante también necesitarás configurar los parámetros de tu DNS como se describe a continuación en ["Configurar DNS y parámetros de firewall para permitir correos electrónicos entrantes](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)". ![Activar correo electrónico de salida](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Teclea la configuración para tu servidor de SMTP.
      - En el campo **Dirección del servidor**, escribe la dirección de tu servidor SMTP.
      - En el campo **Puerto**, escribe el puerto que usa tu servidor SMTP para enviar correo electrónico.
      - En el campo **Dominio**, escribe el nombre de dominio que enviará tu servidor SMTP con una respuesta HELO, de ser el caso.
      - Selecciona el menú desplegable de **Autenticación** y elige el tipo de cifrado que utiliza tu servidor SMTP.
      - En el campo **Dirección de correo electrónico sin respuesta**, escribe la dirección de correo electrónico para usar en los campos De y Para para todos los correos electrónicos para notificaciones.
6. Si quieres descartar todos los correos electrónicos entrantes que estén dirigidos al correo electrónico sin respuesta, selecciona **Descartar correo electrónico dirigido a la dirección de correo electrónico sin respuesta**. ![Casilla de verificación para descartar los correos electrónicos dirigidos a la dirección de correo electrónico sin respuesta](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. En **Soporte**, elige un tipo de enlace para ofrecer un soporte adicional a tus usuarios.
    - **Correo electrónico:** Una dirección de correo electrónico interna.
    - **URL:** Un enlace a un sitio de soporte interno. Debes incluir tanto `http://` como `https://`. ![Correo de soporte técnico o URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [Prueba de entrega del correo electrónico](#testing-email-delivery).
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.email-tab %}
2. Selecciona **Activar correo electrónico**. ![Casilla de "Habilitar" para la configuración de ajustes de correo electrónico](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Teclea la configuración para tu servidor de correo electrónico.
    - En el campo **Dirección del servidor**, escribe la dirección de tu servidor SMTP.
    - En el campo **Puerto**, escribe el puerto que usa tu servidor SMTP para enviar correo electrónico.
    - En el campo **Dominio**, escribe el nombre de dominio que enviará tu servidor SMTP con una respuesta HELO, de ser el caso.
    - Selecciona el menú desplegable de **Autenticación** y elige el tipo de cifrado que utiliza tu servidor SMTP.
    - En el campo **Dirección de correo electrónico sin respuesta**, escribe la dirección de correo electrónico para usar en los campos De y Para para todos los correos electrónicos para notificaciones.
4. Si quieres descartar todos los correos electrónicos entrantes que estén dirigidos al correo electrónico sin respuesta, selecciona **Descartar correo electrónico dirigido a la dirección de correo electrónico sin respuesta**. ![Casilla de "Descartar" para la configuración de ajustes de correo electrónico](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Haz clic en **Probar la configuración de correo electrónico**. ![Botón de "Probar la configuración de correo electrónico" para la configuración de ajustes de correo electrónico](/assets/images/enterprise/configuration/ae-test-email.png)
6. Debajo de "Enviar correo electrónico de pruebas a," teclea la dirección de correo electrónico a donde quieras enviar un mensaje de prueba y haz clic en **Enviar correo electrónico de pruebas**. ![Botón de "Enviar correo electrónico de pruebas" para la configuración de ajustes de correo electrónico](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Haz clic en **Save ** (guardar). ![Botón de "Guardar" para la configuración del contacto de soporte empresarial](/assets/images/enterprise/configuration/ae-save.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Probar entrega del correo electrónico

1. En la parte superior de la sección **Correo electrónico**, haz clic en **Probar parámetros del correo electrónico**. ![Probar parámetros del correo electrónico](/assets/images/enterprise/management-console/test-email.png)
2. En el campo **Enviar correo electrónico de prueba**, escribe una dirección donde enviar el correo electrónico de prueba. ![Probar dirección de correo electrónico](/assets/images/enterprise/management-console/test-email-address.png)
3. Haz clic en **Enviar correo electrónico de prueba**. ![Enviar correo electrónico de prueba](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Sugerencia:** Si ocurren errores SMTP mientras se envía un correo electrónico de prueba, como un error de entrega inmediato o un error de configuración del correo saliente, los verás en el cuadro de diálogo de los parámetros del Correo electrónico de prueba.

  {% endtip %}

4. Si el correo electrónico de prueba falla, [soluciona los problemas de los parámetros de tu correo electrónico](#troubleshooting-email-delivery).
5. Cuando el correo electrónico de prueba es exitoso, en la parte inferior de la página, haz clic en **Guardar parámetros**. ![Botón Guardar parámetros](/assets/images/enterprise/management-console/save-settings.png)
6. Espera que se complete la fase de configuración. ![Configurar tu instancia](/assets/images/enterprise/management-console/configuration-run.png)

### Configurar DNS y parámetros de firewall para permitir correos electrónicos entrantes

Si quieres permitir respuestas de correo electrónico para las notificaciones, debes configurar los parámetros de tu DNS.

1. Asegúrate de que el puerto 25 en la instancia esté accesible para tu servidor SMTP.
2. Crea un registro A que apunte a `reply.[hostname]`. Dependiendo de tu proveedor DNS y de la configuración del host de instancia, es posible que puedas crear un registro A único que apunte a `*.[hostname]`.
3. Crea un registro MX que apunte a `reply.[hostname]` para que los correos electrónicos para ese dominio sean enrutados a la instancia.
4. Crea un registro MX que apunte a `noreply.[hostname]` para `[hostname]` para que las respuestas a la dirección `cc` en los correos electrónicos para notificación sean enrutados a la instancia. Para obtener más información, consulta la sección {% if currentVersion ver_gt "enterprise-server@2.20" %}"[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[Acerca de las notificaciones por correo electrónico](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."

### Solución de problemas de entrega de correo electrónico

#### Crea un Paquete de soporte

Si no puedes determinar qué está mal desde el mensaje de error mostrado, puedes descargar un [paquete de soporte](/enterprise/{{ currentVersion }}/admin/guides/enterprise-support/providing-data-to-github-support) que contiene toda la conversación SMTP entre tu servidor de correo y {% data variables.product.prodname_ghe_server %}. Una vez que hayas descargado el paquete, verifica las entradas en *enterprise-manage-logs/unicorn.log* de todo el registro de conversación SMTP y cualquier error relacionado.

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

* Abrió una conexión con el servidor SMTP (`Connection opened: smtp.yourdomain.com:587`).
* Realizó una conexión exitosa y eligió usar TLS (`TLS connection started`).
* Fue realizado el tipo de autenticación `login` (`<- "AUTH LOGIN\r\n"`).
* El servidor SMTP rechazó la autenticación como inválida (`-> "535-5.7.1 Username and Password not accepted.`).

#### Consultar los registros {% data variables.product.product_location %}

Si necesitas verificar que tu correo electrónico entrante está funcionando, hay dos archivos de registro que puedes examinar en tu instancia: para verificar */var/log/mail.log* y */var/log/mail-replies/metroplex.log*.

*/var/log/mail.log* verifica que los mensajes estén alcanzando tu servidor. Este es un ejemplo de una respuesta de correo electrónico exitosa:

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

*/var/log/mail-replies/metroplex.log* muestra si los correos electrónicos entrantes están siendo procesados para agregarse a las propuestas y a las solicitudes de extracción como respuestas. Este es un ejemplo de un mensaje exitoso:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

Notarás que `metroplex` captura el mensaje de entrada, lo procesa y luego mueve el archivo a `/data/user/incoming-mail/success`.{% endif %}

#### Verificar los parámetros de tu DNS

Para procesar los correos electrónicos entrantes de manera adecuada, debes configurar un Registro A válido (o CNAME), así como un Registro MX. Para obtener más información, consulta "[Configurar DNS y parámetros de firewall para permitir correos electrónicos entrantes](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)".

#### Controlar los parámetros de AWS Security Group o firewall

Si {% data variables.product.product_location %} está detrás de un firewall o está siendo servido a través de un AWS Security Group, asegúrate de que el puerto 25 esté abierto a todos los servidores de correo que envíen correos electrónicos a `reply@reply.[hostname]`.

#### Contactar con soporte técnico
{% if enterpriseServerVersions contains currentVersion %}
Si aún no puedes resolver el problema, comunícate con {% data variables.contact.contact_ent_support %}. Adjunta el archivo de salida desde `http(s)://[hostname]/setup/diagnostics` en tu correo electrónico para ayudarnos a resolver tu problema.
{% elsif currentVersion == "github-ae@latest" %}
Puedes contactar a {% data variables.contact.github_support %} para obtener ayuda en la configuración del correo electrónico para que se envíen las notificaciones a través de tu servidor de SMTP. Para obtener más información, consulta la sección "[Recibir ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".
{% endif %}
