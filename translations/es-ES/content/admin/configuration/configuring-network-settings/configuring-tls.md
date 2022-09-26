---
title: Configurar TLS
intro: 'Puedes configurar la Seguridad de la capa de transporte (TLS) en {% data variables.product.product_location %} para poder usar un certificado firmado por una entidad de certificación de confianza.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration
  - /enterprise/admin/guides/installation/about-tls
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: c11f78b69f5b251a63c0796d46bca4d6c926f002
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682337'
---
## Acerca de la Seguridad de la capa de transporte

El TLS, que reemplazó al SSL, se habilita y configura con un certificado autofirmado cuando se inicia el {% data variables.product.prodname_ghe_server %} por primera vez. Como los certificados autofirmados no son confiables para los navegadores web y los clientes de Git, estos clientes informarán advertencias de certificados hasta que inhabilites TLS o cargues un certificado firmado por una entidad confiable, como Let's Encrypt.

El aparato {% data variables.product.prodname_ghe_server %} enviará encabezados de Seguridad de transporte estricta de HTTP mientras SSL esté habilitado. Inhabilitar TLS hará que los usuarios pierdan acceso al aparato, porque sus navegadores no permitirán que un protocolo se degrade a HTTP. Para obtener más información, consulte "[HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)" en Wikipedia.

{% data reusables.enterprise_installation.terminating-tls %}

Para permitir que los usuarios utilicen FIDO U2F para la autenticación de dos factores, debes habilitar TLS para tu instancia. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication)".

## Prerrequisitos

Para utilizar TLS en la producción, debes tener un certificado en un formato de PEM no cifrado firmado por una entidad de certificación confiable.

El certificado también necesitará tener configurados nombres alternativos del firmante para los subdominios enumerados en "[Habilitar el aislamiento de subdominios](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)", y tendrá que incluir la cadena de certificados completa si la ha firmado una entidad de certificación intermedia. Para obtener más información, consulte "[Nombre alternativo del firmante](http://en.wikipedia.org/wiki/SubjectAltName)" en Wikipedia.

Puede generar una solicitud de firma de certificado (CSR) para la instancia mediante el comando `ghe-ssl-generate-csr`. Para más información, vea "[Utilidades de línea de comandos](/enterprise/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)".

La clave debe ser una clave RSA y no debe tener ninguna frase de contraseña. Para obtener más información, consulte "[Eliminar la frase de contraseña de un archivo de clave](/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)".

## Cargar un certificado TLS personalizado

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
4. En "TLS Protocol support" (Asistencia de protocolo TLS), selecciona los protocolos que quieres permitir.
  ![Botones de radio con opciones para elegir protocolos TLS](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. En "Certificate", haga clic en **Choose File** para elegir el certificado TLS o la cadena de certificación (en formato PEM) que quiera instalar. Este archivo suele tener la extensión *.pem*, *.crt* o *.cer* .
  ![Botón para buscar el archivo de certificado TLS](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. En "Unencrypted key", haga clic en **Choose File** para elegir la clave RSA (en formato PEM) que desea instalar. Este archivo suele tener la extensión *.key* .
  ![Botón para buscar el archivo de clave TLS](/assets/images/enterprise/management-console/install-tls-key.png)

{% data reusables.enterprise_management_console.save-settings %}

## Acerca de la asistencia de Let's Encrypt

Let's Encrypt es una entidad de certificación pública que emite certificados TLS gratuitos y automáticos que son confiables para los navegadores que usan el protocolo ACME. De hecho, puedes obtener y renovar los certificados de Let's Encrypt para tu aparato sin la necesidad de realizar ningún mantenimiento manual.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Cuando habilite la automatización de la gestión de certificados TLS con Let's Encrypt, {% data variables.product.product_location %} contactará con los servidores de Let's Encrypt para obtener un certificado. Para renovar un certificado, los servidores de Let's Encrypt deben validar el control del nombre de dominio configurado con las solicitudes HTTP entrantes.

También puede usar la utilidad `ghe-ssl-acme` de la línea de comandos en {% data variables.product.product_location %} para generar automáticamente un certificado de Let's Encrypt. Para más información, vea "[Utilidades de línea de comandos](/enterprise/admin/guides/installation/command-line-utilities#ghe-ssl-acme)".

## Configurar TLS usando Let's Encrypt

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
5. Seleccione **Enable automation of TLS certificate management using Let's Encrypt**.
  ![Casilla para habilitar Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% data reusables.enterprise_management_console.privacy %}
7. Haga clic en **Request TLS certificate**.
  ![Botón Request TLS certificate](/assets/images/enterprise/management-console/request-tls-button.png)
8. Espera para que el "Estado" cambie de "INICIADO" a "HECHO".
   ![Estado de Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-status.png)
9. Haga clic en **Guardar configuración**.
