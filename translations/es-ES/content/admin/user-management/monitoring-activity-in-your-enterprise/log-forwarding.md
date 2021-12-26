---
title: Redireccionamiento de registro
intro: '{% data variables.product.product_name %} utiliza `syslog-ng` para reenviar bitácoras de {% if enterpriseServerVersions contains currentVersion %}sistema{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} y de aplicaciones al servidor que especifiques.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

Es compatible cualquier sistema de recopilación de registro que admita los flujos de registro syslog-style (p. ej., [Logstash](http://logstash.net/) y [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Habilitar redireccionamiento de registro

{% if enterpriseServerVersions contains currentVersion %}
1. En la página de parámetros {% data variables.enterprise.management_console %}, en la barra lateral izquierda, haz clic en **(Monitoring) Revisar**.
1. Selecciona **Enable log forwarding (Habilitar redireccionamiento de registro)**.
1. En el campo **Server address (Dirección del servidor)**, escribe la dirección del servidor al que desees redireccionar los registros. Puedes especificar varias direcciones en una lista de separación por coma.
1. En el menú desplegable de Protocolo, selecciona el protocolo a utilizar para que se comunique con el servidor de registro. El protocolo se aplicará a todos los destinos de registro especificados.
1. Selecciona **Enable TLS (Habilitar TLS)**.
1. Haz clic en **Choose File (Elegir el archivo)** y elige un certificado CA para encriptar la comunicación entre puntos de conexión syslog. Se validará la cadena de certificado completa, y debe terminar en un certificado raíz. Para obtener más información, consulta [Opciones TLS en la documentación de syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Debajo de {% octicon "gear" aria-label="The Settings gear" %} **Configuración**, da clic en **Reenvío de bitácoras**. ![Pestaña de reenvío de bitácoras](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Debajo de "Reenvío de bitácoras", selecciona **Habilitar el reenvío de bitácoras**. ![Casilla de verificación para habilitar el reenvío de bitácoras](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Debajo de "Dirección del servidor", ingresa la dirección del servidor al cual quieras reenviar las bitácoras. ![Campo de dirección del servidor](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Utiliza el menú desplegable de "Protocolo", y selecciona un protocolo. ![Menú desplegable del protocolo](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Opcionalmente, para habilitar la comunicación cifrada con TLS entre las terminales de syslog, selecciona **Habilitar TLS**. ![Casilla de verificación para habilitar TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Debajo de "Certificado público", pega tu certificado x509. ![Caja de texto para el certificado público](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Haz clic en **Save ** (guardar). ![Botón de guardar para el reenvío de bitácoras](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Solución de problemas

Si encuentras problemas con el redireccionamiento de registro, contacta a {% data variables.contact.contact_ent_support %} y adjunta el archivo de salida de `http(s)://[hostname]/setup/diagnostics` to your email.
{% endif %}
