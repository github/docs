---
title: Redireccionamiento de registro
intro: '{% data variables.product.prodname_enterprise %} utiliza `syslog-ng` para redireccionar los registros de la aplicación y del sistema al servidor que especifiques en los parámetros {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
---

Es compatible cualquier sistema de recopilación de registro que admita los flujos de registro syslog-style (p. ej., [Logstash](http://logstash.net/) y [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Habilitar redireccionamiento de registro

1. En la página de parámetros {% data variables.enterprise.management_console %}, en la barra lateral izquierda, haz clic en **(Monitoring) Revisar**.
1. Selecciona **Enable log forwarding (Habilitar redireccionamiento de registro)**.
1. En el campo **Server address (Dirección del servidor)**, escribe la dirección del servidor al que desees redireccionar los registros. Puedes especificar varias direcciones en una lista de separación por coma.
1. En el menú desplegable de Protocolo, selecciona el protocolo a utilizar para que se comunique con el servidor de registro. El protocolo se aplicará a todos los destinos de registro especificados.
1. Selecciona **Enable TLS (Habilitar TLS)**.
1. Haz clic en **Choose File (Elegir el archivo)** y elige un certificado CA para encriptar la comunicación entre puntos de conexión syslog. Se validará la cadena de certificado completa, y debe terminar en un certificado raíz. Para obtener más información, consulta [Opciones TLS en la documentación de syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).

### Solución de problemas

Si encuentras problemas con el redireccionamiento de registro, contacta a {% data variables.contact.contact_ent_support %} y adjunta el archivo de salida de `http(s)://[hostname]/setup/diagnostics` to your email.
