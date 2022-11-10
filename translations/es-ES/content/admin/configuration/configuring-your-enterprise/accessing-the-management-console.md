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
shortTitle: Access the management console
ms.openlocfilehash: 60cd45e9e33dfbd037c831b96bed806dddcf6a21
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107129'
---
## Acerca de {% data variables.enterprise.management_console %}

Utiliza {% data variables.enterprise.management_console %} para las actividades administrativas básicas:
- **Configuración inicial**: recorre el proceso de configuración inicial durante el primer inicio de {% data variables.location.product_location %}; para ello, visita la dirección IP de {% data variables.location.product_location %} en el explorador.
- **Configuración de directivas de autenticación para {% data variables.enterprise.management_console %}** : establece los límites de frecuencia para los intentos de inicio de sesión y la duración del bloqueo si algún usuario los supera. 
- **Configuración de los valores básicos para la instancia**: en la página Settings, configure DNS, el nombre de host, SSL, autenticación de usuarios, correo electrónico, servicios de supervisión y redireccionamiento de registros.
- **Programación de ventanas de mantenimiento**: trabaja sin conexión en {% data variables.location.product_location %} mientras realizas tareas de mantenimiento con la {% data variables.enterprise.management_console %} o el shell administrativo.
- **Solución de problemas**: genere un paquete de soporte o vea la información general de diagnóstico.
- **Administración de licencias**: vea o actualice la licencia de {% data variables.product.prodname_enterprise %}.

Siempre puedes acceder a la {% data variables.enterprise.management_console %} mediante la dirección IP de {% data variables.location.product_location %}, incluso cuando la instancia se encuentre en modo de mantenimiento, si se produce un error crítico en la aplicación o si la configuración del nombre de host o SSL no es correcta.

Para acceder a la {% data variables.enterprise.management_console %}, debes usar la contraseña de administrador establecida durante la configuración inicial de {% data variables.location.product_location %}. También debes poder conectarte con el host de la máquina virtual en el puerto 8443. Si tienes problemas para acceder a {% data variables.enterprise.management_console %}, controla las configuraciones del firewall intermedio y del grupo de seguridad. 

El hash de la contraseña de {% data variables.enterprise.management_console %} se almacena en `/data/user/common/secrets.conf` y ese archivo se sincroniza automáticamente desde el dispositivo principal en cualquier réplica de alta disponibilidad. Cualquier cambio a la contraseña primaria se replicará automáticamente en réplicas de disponibilidad alta. Para más información sobre la alta disponibilidad, vea "[Acerca de la configuración de alta disponibilidad](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".

## Acceder a la {% data variables.enterprise.management_console %} como administrador del sitio

La primera vez que accedas a la {% data variables.enterprise.management_console %} como administrador de sitio, deberás cargar tu archivo de licencia de {% data variables.product.prodname_enterprise %} para autenticarte en la app. Para más información, vea "[Administración de la licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## Acceder a {% data variables.enterprise.management_console %} como usuario sin autenticación

1. Visite esta URL en el explorador y reemplace `hostname` por el nombre de host o la dirección IP reales de {% data variables.product.prodname_ghe_server %}:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## Desbloquear {% data variables.enterprise.management_console %} después de los intentos de inicio de sesión fallidos

La {% data variables.enterprise.management_console %} se bloquea después {% ifversion enterprise-authentication-rate-limits %}del número de intentos de inicio de sesión erróneos que configuran las directivas de autenticación. Para obtener más información, consulta "[Configuración de límites de frecuencia de directivas de autenticación](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)". {% else %}diez intentos de inicio de sesión erróneos realizados en un intervalo de diez minutos. Debes esperar para que la pantalla de inicio de sesión se desbloquee automáticamente antes de intentar iniciar sesión nuevamente. La pantalla de inicio de sesión se desbloquea automáticamente siempre que el período de diez minutos previo contenga menos de diez intentos de inicio de sesión fallidos. El contador se restablece después de que se produzca un inicio de sesión correcto.{% endif %}

{% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}

## Solución de problemas de conexiones erróneas en la {% data variables.enterprise.management_console %}

Si no puedes conectarte a {% data variables.enterprise.management_console %} en {% data variables.location.product_location %}, puedes revisar la información siguiente para solucionar el problema.

### Error: "La sesión ha expirado" para las conexiones mediante un equilibrador de carga

Si accedes a {% data variables.location.product_location %} mediante un equilibrador de carga y las conexiones a {% data variables.enterprise.management_console %} producen un error con un mensaje que indica que la sesión ha expirado, es posible que tengas que volver a configurar el equilibrador de carga. Para obtener más información, consulta "[Uso de {% data variables.product.product_name %} con un equilibrador de carga](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".
