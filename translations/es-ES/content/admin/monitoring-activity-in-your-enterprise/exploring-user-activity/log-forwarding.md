---
title: Redireccionamiento de registro
intro: '{% data variables.product.product_name %} usa `syslog-ng` para reenviar registros del {% ifversion ghes %}sistema{% elsif ghae %}Git{% endif %} y aplicaciones al servidor que especifiques.'
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
ms.openlocfilehash: 935c8f0221c4541d2801a5e705779efff3d34370
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115218'
---
## Acerca del reenvío de bitácoras

Se admite cualquier sistema de recopilación de registros que admita flujos de registro de estilo syslog (por ejemplo, [Logstash](http://logstash.net/) y [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

Cuando habilitas el reenvío de bitácoras, debes cargar un certificado de CA para cifrar las comunicaciones entre las terminales de syslog. Tu aplicativo y el servidor remoto de syslog realizará un SSL de dos vías, cada una proporcionará un certificado a la otra y validará el certificado que recibió.

## Habilitar redireccionamiento de registro

{% ifversion ghes %}
1. En la página de configuración de {% data variables.enterprise.management_console %}, en la barra lateral izquierda, haga clic en **Supervisión**.
1. Seleccione **Habilitar reenvío de registros**.
1. En el campo **Dirección del servidor**, escriba la dirección del servidor al que quiera redireccionar los registros. Puedes especificar varias direcciones en una lista de separación por coma.
1. En el menú desplegable de Protocolo, selecciona el protocolo a utilizar para que se comunique con el servidor de registro. El protocolo se aplicará a todos los destinos de registro especificados.
1. Opcionalmente, seleccione **Habilitar TLS**. Te recomendamos habilitar TLS de acuerdo con tus políticas de seguridad locales, especialmente si existen redes no confiables entre el aplicativo y cualquier servidor de bitácoras remoto. 
1. Para cifrar la comunicación entre los puntos de conexión de syslog, haga clic en **Elegir archivo** y seleccione un certificado de CA para el servidor remoto de syslog. Deberás cargar un paquete de CA que contenga una concatenación del certificado de las CA que se involucran en firmar el certificado del servidor de remoto de bitácoras. Se validará la cadena de certificado completa, y debe terminar en un certificado raíz. Para más información, vea [Opciones de TLS en la documentación de syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. En {% octicon "gear" aria-label="The Settings gear" %} **Configuración**, haga clic en **Reenvío de registros**.
  ![Pestaña Reenvío de registros](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. En "Reenvío de registros", seleccione **Habilitar reenvío de registros**.
  ![Casilla para habilitar el reenvío de registros](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Debajo de "Dirección del servidor", ingresa la dirección del servidor al cual quieras reenviar las bitácoras.
  ![Campo Dirección del servidor](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Utiliza el menú desplegable de "Protocolo", y selecciona un protocolo.
  ![Menú desplegable Protocolo](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Opcionalmente, para habilitar la comunicación cifrada de TLS entre los puntos de conexión de syslog, seleccione **Habilitar TLS**.
  ![Casilla para habilitar TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Debajo de "Certificado público", pega tu certificado x509.
  ![Cuadro de texto para el certificado público](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Haga clic en **Save**(Guardar).
  ![Botón Guardar para el reenvío de registros](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png) {% endif %}

{% ifversion ghes %}
## Solución de problemas

Si tiene problemas con el reenvío de registros, póngase en contacto con {% data variables.contact.contact_ent_support %} y adjunte el archivo de salida de `http(s)://[hostname]/setup/diagnostics` al correo electrónico.
{% endif %}
