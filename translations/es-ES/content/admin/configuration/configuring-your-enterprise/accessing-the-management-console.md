---
title: Acceder a la consola de administración
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Accede a la consola de administración
---

## Acerca de {% data variables.enterprise.management_console %}

Utiliza {% data variables.enterprise.management_console %} para las actividades administrativas básicas:
- **Configuración inicial**: Atraviesa el proceso de configuración inicial durante el primer lanzamiento {% data variables.product.product_location %} visitando la dirección IP de {% data variables.product.product_location %} en tu navegador.
- **Establecer configuraciones básicas para tu instancia**: Configura DNS, nombre del host, SSL, autenticación de usuario, correo electrónico, servicios de monitoreo y redireccionamiento de registro en la página de Configuraciones.
- **Programar ventanas de mantenimiento**: Trabaja sin conexión en {% data variables.product.product_location %} mientras realizas mantenimiento con {% data variables.enterprise.management_console %} o con el shell administrativo.
- **Solucionar problemas**: Genera un paquete de soporte o visualiza la información de diagnóstico de alto nivel.
- **Administración de licencias**: Visualiza o actualiza tu licencia {% data variables.product.prodname_enterprise %}.

También puedes acceder a {% data variables.enterprise.management_console %} utilizando la dirección IP de {% data variables.product.product_location %}, incluso cuando la instancia se encuentre en modo de mantenimiento o si ocurre una falla crítica en la aplicación o si están mal configurados el nombre del host o la SSL.

Para acceder a {% data variables.enterprise.management_console %}, debes utilizar la contraseña de administrador establecida durante la configuración inicial de {% data variables.product.product_location %}. También debes poder conectarte con el host de la máquina virtual en el puerto 8443. Si tienes problemas para acceder a {% data variables.enterprise.management_console %}, controla las configuraciones del firewall intermedio y del grupo de seguridad.

El hash de la contraseña de la {% data variables.enterprise.management_console %} se almacena en `/data/user/common/secrets.conf` y ese archivo se sincroniza automáticamente desde el aplicativo principal hacia cualquier réplica de alta disponibilidad. Cualquier cambio a la contraseña primaria se replicará automáticamente en réplicas de disponibilidad alta. Para obtener más información sobre la disponibilidad alta, consulta la sección "[Acerca de la configuración de disponibilidad alta](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".

## Acceder a la {% data variables.enterprise.management_console %} como administrador del sitio

La primera vez que accedas a la {% data variables.enterprise.management_console %} como administrador de sitio, deberás cargar tu archivo de licencia de {% data variables.product.prodname_enterprise %} para autenticarte en la app. Paa obtener más información, consulta la sección "[Administrar tu licencia de {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}

## Acceder a {% data variables.enterprise.management_console %} como usuario sin autenticación

1. Visita esta URL en tu navegador, reemplazando el `nombre del host` por tu nombre del host o tu dirección IP actuales {% data variables.product.prodname_ghe_server %}:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## Desbloquear {% data variables.enterprise.management_console %} después de los intentos de inicio de sesión fallidos

Los bloqueos de la {% data variables.enterprise.management_console %} después de diez intentos de inicio de sesión fallidos se hacen en el transcurso de diez minutos. Debes esperar para que la pantalla de inicio de sesión se desbloquee automáticamente antes de intentar iniciar sesión nuevamente. La pantalla de inicio de sesión se desbloquea automáticamente siempre que el período de diez minutos previo contenga menos de diez intentos de inicio de sesión fallidos. El contador se reinicia después de que ocurra un inicio de sesión exitoso.

Para desbloquear de inmediato la {% data variables.enterprise.management_console %}, utilice el comando `ghe-reactivate-admin-login` a través del shell administrativo. Para obtener más información, consulta "[Utilidades de la línea de comando](/enterprise/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)" y "[Acceder al shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)."

## Solucionar problemas en las conexiones fallidas a la {% data variables.enterprise.management_console %}

Si no puedes conectar la {% data variables.enterprise.management_console %} en {% data variables.product.product_location %}, puedes revisar la siguiente información para solucionar el problema.

### Error: "Your session has expired" para las conexiones a través de un balanceador de carga

Si accedes a {% data variables.product.product_location %} a través de un balanceador de carga y las conexiones a la {% data variables.enterprise.management_console %} fallan con un mensaje de sesión vencida, podrías tener que reconfigurar tu balanceador de carga. Para obtener más información, consulta la sección "[Utilizar {% data variables.product.product_name %} con un balanceador de carga](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".
