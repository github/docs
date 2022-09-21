---
title: Utilizar el servidor de GitHub Enterprise con un balanceador de carga
intro: 'Usa un equilibrador de carga delante de una única instancia de {% data variables.product.prodname_ghe_server %} o un par de instancias en una configuración de alta disponibilidad.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
shortTitle: Use a load balancer
ms.openlocfilehash: dcbd1261d127e48140f6b6843ef4ec3c35fb84f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147167319'
---
## Acerca de los balanceadores de carga

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Manejar información de conexión de clientes

Debido a que las conexiones de cliente al {% data variables.product.prodname_ghe_server %} provienen del balanceador de carga, se puede perder la dirección IP del cliente.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### Habilitación de la compatibilidad con el protocolo de PROXY en {% data variables.product.product_location %}

Recomendamos firmemente habilitar el soporte para protocolo de PROXY para tu instancia y el equilibrador de carga. Utiliza las instrucciones provistas por tu proveedor para habilitar el protocolo PROXY en tu balanceador de carga. Para obtener más información, consulta la [documentación del protocolo de PROXY](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. En **Equilibradores de carga externos**, selecciona **Habilitar compatibilidad con el protocolo de PROXY**.
![Casilla para habilitar la compatibilidad con el protocolo de PROXY](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Habilitación de la compatibilidad con X-Forwarded-For en {% data variables.product.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Advertencia**: Si configuras la compatibilidad `X-Forwarded-For` en {% data variables.product.product_location %} y el equilibrador de carga, es posible que no puedas conectarte a {% data variables.enterprise.management_console %}. Para obtener más información, consulta "[Error: "La sesión ha expirado" para las conexiones a {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. En **Equilibradores de carga externos**, selecciona **Permitir el encabezado HTTP X-Forwarded-For**.
![Casilla para permitir el encabezado HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Configurar la revisión de estado

Las comprobaciones de estado permiten que un balanceador de carga deje de enviar tráfico a un nodo que no responde si una comprobación preconfigurada falla en ese nodo. Si la instancia está fuera de línea debido a un mantenimiento o un error inesperado, el equilibrador de carga puede mostrar una página de estado. En una configuración de alta disponibilidad (HA), un balanceador de carga puede usarse como parte de una estrategia de conmutación por error. Sin embargo, no está admitida la conmutación por error automática de los pares de HA. Debes impulsar de forma manual la instancia de réplica antes de que comience con las consultas activas. Para obtener más información, consulta "[Configuración de {% data variables.product.prodname_ghe_server %} para alta disponibilidad](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Solución de problemas de conectividad mediante un equilibrador de carga

Si no puedes conectarte a servicios en {% data variables.product.product_location %} a través de un equilibrador de carga, puedes revisar la siguiente información para solucionar el problema.

{% note %}

**Nota**: Prueba siempre los cambios en la configuración de la infraestructura de red y de la instancia en un entorno de ensayo. Para más información, vea "[Configuración de una instancia de almacenamiento provisional](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

{% endnote %}

### Error: "La sesión ha expirado" para las conexiones a {% data variables.enterprise.management_console %}

Si habilitas la compatibilidad con el encabezado `X-Forwarded-For` en la instancia y el equilibrador de carga, es posible que no puedas acceder a {% data variables.enterprise.management_console %} de la instancia. Para obtener más información sobre {% data variables.enterprise.management_console %} y los puertos necesarios para las conexiones, consulta "[Acceso a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)" y "[Puertos de red](/admin/configuration/configuring-network-settings/network-ports)".

Si {% data variables.product.product_location %} indica que la sesión ha expirado al conectarse a {% data variables.enterprise.management_console %} a través de un equilibrador de carga, prueba una de las siguientes configuraciones en el equilibrador de carga.

- Deshabilita los encabezados `X-Forwarded-For` para las conexiones a la instancia en los puertos 8080 y 8443.
- Configura el equilibrador de carga para que funcione en la capa 4 y use el protocolo PROXY en lugar de `X-Forwarded-For` para el paso a través de direcciones IP de cliente. Para obtener más información, consulta "[Habilitación de la compatibilidad con el protocolo PROXY en {% data variables.product.product_location %}](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)".

Para más información, consulta la documentación del equilibrador de carga.

### Actualizaciones dinámicas de problemas y comprobación de ejecuciones que no funcionan

Cuando se accede a {% data variables.product.product_location %} a través de un equilibrador de carga o un proxy inverso, es posible que las actualizaciones directas esperadas, como nuevos comentarios sobre incidencias y cambios en las señales de notificación o la salida de la ejecución de comprobación, no se muestren hasta que se actualice la página. Esto es más común cuando el proxy inverso o el equilibrador de carga se ejecutan en un modo de capa 7 o no admite el protocolo [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) necesario. 

Para habilitar las actualizaciones directas, es posible que tengas que volver a configurar el equilibrador de carga o el proxy. Para más información, consulta la documentación del equilibrador de carga.
