---
title: Configurar TLS
intro: 'Puedes configurar la Seguridad de la capa de transporte (TLS) en {% data variables.product.product_location %} para poder usar un certificado firmado por una entidad de certificación confiable.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration/
  - /enterprise/admin/guides/installation/about-tls/
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
---

### Acerca de la Seguridad de la capa de transporte

El TLS, que reemplazó al SSL, se habilita y configura con un certificado autofirmado cuando se inicia el {% data variables.product.prodname_ghe_server %} por primera vez. Como los certificados autofirmados no son confiables para los navegadores web y los clientes de Git, estos clientes informarán advertencias de certificados hasta que inhabilites TLS o cargues un certificado firmado por una entidad confiable, como Let's Encrypt.

El aparato {% data variables.product.prodname_ghe_server %} enviará encabezados de Seguridad de transporte estricta de HTTP mientras SSL esté habilitado. Inhabilitar TLS hará que los usuarios pierdan acceso al aparato, porque sus navegadores no permitirán que un protocolo se degrade a HTTP. Para obtener más información, consulta "[Seguridad de transporte estricta de HTTP (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)" en Wikipedia.

{% data reusables.enterprise_installation.terminating-tls %}

Para permitir que los usuarios utilicen FIDO U2F para la autenticación de dos factores, debes habilitar TLS para tu instancia. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)".

### Prerrequisitos

Para utilizar TLS en la producción, debes tener un certificado en un formato de PEM no cifrado firmado por una entidad de certificación confiable.

Tu certificado también deberá tener configurados Nombres alternativos de sujeto para los subdominios detallados en "[Habilitar aislamiento de subdominio](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)" y deberá incluir toda la cadena de certificación si lo firmó una entidad de certificación intermedia. Para obtener más información, consulta "[Nombre alternativo de sujeto](http://en.wikipedia.org/wiki/SubjectAltName)" en Wikipedia.

Puedes generar una solicitud de firma de certificados (CSR) para tu instancia usando el comando `ghe-ssl-generate-csr`. Para obtener más información, consulta "[Utilidades de la línea de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)."

### Cargar un certificado TLS personalizado

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
4. En "TLS Protocol support" (Asistencia de protocolo TLS), selecciona los protocolos que quieres permitir. ![Botones de radio con opciones para elegir protocolos TLS](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. En "Certificate" (Certificado), haz clic en **Choose File** (Elegir archivo) para elegir el certificado TLS o la cadena de certificación (en formato de PEM) que quieras instalar. Este archivo suele tener una extensión *.pem*, *.crt* o *.cer*. ![Botón para encontrar archivo de certificado TLS](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. En "Unencrypted key" (Clave no cifrada), haz clic en **Choose File** (Elegir archivo) para elegir la clave TLS (en formato de PEM) que quieras instalar. Ese archivo suele tener una extensión *.key*. ![Botón para encontrar archivo de clave TLS](/assets/images/enterprise/management-console/install-tls-key.png)

  {% warning %}

  **Advertencia**: Tu clave TLS no debe tener contraseña. Para obtener más información, consulta "[Eliminar la contraseña de tu archivo clave](/enterprise/{{ currentVersion }}/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)".

  {% endwarning %}
{% data reusables.enterprise_management_console.save-settings %}

### Acerca de la asistencia de Let's Encrypt

Let's Encrypt es una entidad de certificación pública que emite certificados TLS gratuitos y automáticos que son confiables para los navegadores que usan el protocolo ACME. De hecho, puedes obtener y renovar los certificados de Let's Encrypt para tu aparato sin la necesidad de realizar ningún mantenimiento manual.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Cuando habilites la automatización de la gestión de certificado TLS con Let's Encrypt, {% data variables.product.product_location %} se contactará con los servidores de Let's Encrypt para obtener un certificado. Para renovar un certificado, los servidores de Let's Encrypt deben validar el control del nombre de dominio configurado con las solicitudes HTTP entrantes.

También puedes usar la utilidad de la línea de comando `ghe-ssl-acme` en {% data variables.product.product_location %} para generar un certificado de Let's Encrypt de manera automática. Para obtener más información, consulta "[Utilidades de la línea de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-ssl-acme)."

### Configurar TLS usando Let's Encrypt

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
5. Selecciona **Enable automation of TLS certificate management using Let's Encrypt** (Habilitar la automatización de la gestión de certificado TLS con Let's Encrypt). ![Casilla de verificación para habilitar Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% data reusables.enterprise_management_console.privacy %}
7. Haz clic en **Request TLS certificate** (Solicitar certificado TLS). ![Botón para solicitar certificado TLS](/assets/images/enterprise/management-console/request-tls-button.png)
8. Haz clic en **Save configuration** (Guardar configuración).
