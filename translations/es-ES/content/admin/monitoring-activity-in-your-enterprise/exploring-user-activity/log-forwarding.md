---
title: Redireccionamiento de registro
intro: '{% data variables.product.product_name %} utiliza `syslog-ng` para reenviar bitácoras de {% ifversion ghes %}sistema{% elsif ghae %}Git{% endif %} y de aplicaciones al servidor que especifiques.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

## Acerca del reenvío de bitácoras

Es compatible cualquier sistema de recopilación de registro que admita los flujos de registro syslog-style (p. ej., [Logstash](http://logstash.net/) y [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

Cuando habilitas el reenvío de bitácoras, debes cargar un certificado de CA para cifrar las comunicaciones entre las terminales de syslog. Tu aplicativo y el servidor remoto de syslog realizará un SSL de dos vías, cada una proporcionará un certificado a la otra y validará el certificado que recibió.

## Habilitar redireccionamiento de registro

{% ifversion ghes %}
1. En la página de parámetros {% data variables.enterprise.management_console %}, en la barra lateral izquierda, haz clic en **(Monitoring) Revisar**.
1. Selecciona **Enable log forwarding (Habilitar redireccionamiento de registro)**.
1. En el campo **Server address (Dirección del servidor)**, escribe la dirección del servidor al que desees redireccionar los registros. Puedes especificar varias direcciones en una lista de separación por coma.
1. En el menú desplegable de Protocolo, selecciona el protocolo a utilizar para que se comunique con el servidor de registro. El protocolo se aplicará a todos los destinos de registro especificados.
1. Opcionalmente, selecciona **Habilitar TLS**. Te recomendamos habilitar TLS de acuerdo con tus políticas de seguridad locales, especialmente si existen redes no confiables entre el aplicativo y cualquier servidor de bitácoras remoto.
1. Para cifrar la comunicación entre las terminales de syslog, haz clic en **Elegir archivo** y elige un certificado de CA para el servidor remoto de syslog. Deberás cargar un paquete de CA que contenga una concatenación del certificado de las CA que se involucran en firmar el certificado del servidor de remoto de bitácoras. Se validará la cadena de certificado completa, y debe terminar en un certificado raíz. Para obtener más información, consulta [Opciones TLS en la documentación de syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif ghae %}
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

{% ifversion ghes %}
## Solución de problemas

Si encuentras problemas con el redireccionamiento de registro, contacta a {% data variables.contact.contact_ent_support %} y adjunta el archivo de salida de `http(s)://[hostname]/setup/diagnostics` to your email.
{% endif %}
