---
title: Utilizar el servidor de GitHub Enterprise con un balanceador de carga
intro: 'Utiliza un balanceador de carga frente a una sola instancia de {% data variables.product.prodname_ghe_server %} o de un par de instancias en una configuración de disponibilidad alta.'
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
shortTitle: Utilizar un balanceador de carga
---

## Acerca de los balanceadores de carga

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Manejar información de conexión de clientes

Debido a que las conexiones de cliente al {% data variables.product.prodname_ghe_server %} provienen del balanceador de carga, se puede perder la dirección IP del cliente.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### Habilitar soporte para protocolo de PROXY en {% data variables.product.product_location %}

Te recomendamos firmemente habilitar la compatibilidad con el protocolo PROXY, tanto para tu instancia como para el balanceador de carga. Utiliza las instrucciones provistas por tu proveedor para habilitar el protocolo PROXY en tu balanceador de carga. Para obtener más información, consulta [la documentación de protocolo PROXY](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Dentro de **External load balancers (Balanceadores de carga externos)**, selecciona **Enable support for PROXY protocol (Habilitar soporte para el protocolo de PROXY)**. ![Casilla de verificación para habilitar el soporte para el protocolo PROXY](/assets/images/enterprise/management-console/enable-proxy.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Habilitar soporte para X-Forwarded-For en {% data variables.product.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Advertencia**: Si configuras el soporte de `X-Forwarded-For` en {% data variables.product.product_location %} y el balanceador de carga, podrías no ser capaz de conectarte a la {% data variables.enterprise.management_console %}. Para obtener más información, consulta la explicación del mensaje "[Error: "Your session has expired" para las conexiones a la {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Dentro de **External load balancers (Balanceadores de carga externos)**, selecciona **Allow HTTP X-Forwarded-For header (Permitir encabezados HTTP X-Forwarded-For)**. ![Casilla de verificación para permitir el encabezado de HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Configurar la revisión de estado

Las comprobaciones de estado permiten que un balanceador de carga deje de enviar tráfico a un nodo que no responde si una comprobación preconfigurada falla en ese nodo. Si la instancia está desconectada por mantenimiento o tiene un fallo inesperado, el balanceador de carga puede mostrar una página de estado. En una configuración de alta disponibilidad (HA), un balanceador de carga puede usarse como parte de una estrategia de conmutación por error. Sin embargo, no está admitida la conmutación por error automática de los pares de HA. Debes promover la instancia de réplica manualmente antes de que pueda comenzar a servir solicitudes. Para obtener más información, consulta "[Configurar {% data variables.product.prodname_ghe_server %} para alta disponibilidad](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Solucionar problemas de conectividad mediante un balanceador de carga

Si no puedes conectar los servicios en {% data variables.product.product_location %} mediante un balanceador de carga, peudes revisar la siguiente información para solucionar el problema.

{% note %}

**Nota**: Prueba siempre los cambios a tu infraestructura de red y configuraciones de instancia en un ambiente de pruebas. Para obtener más información, consulta "[Configurar una instancia de preparación](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endnote %}

### Error: "Your session has expired" para las conexiones a la {% data variables.enterprise.management_console %}

Si habilitas la compatibilidad con el encabezado `X-Forwarded-For` en tu instancia y balanceador de carga, es posible que no puedas acceder a la {% data variables.enterprise.management_console %} de tu instancia. Para obtener más información sobre la {% data variables.enterprise.management_console %} y los puertos que se requieren par alas ocnexiones, consulta las secciones "[Acceder a la consola de adminsitración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)" y "[Puertos de red](/admin/configuration/configuring-network-settings/network-ports)".

Si {% data variables.product.product_location %} indica que tu sesión venció cuando te conectaste a la {% data variables.enterprise.management_console %} mediante un balanceador de carga, intenta una de las siguientes configuraciones en este balanceador.

- Inhabilita los encabezados de `X-Forwarded-For` para tu instancia en los puertos 8080 y 8443.
- Configura tu balanceador de carga para operar en capa 4 y utiliza el protocolo PROXY en vez de `X-Forwarded-For` para pasar las direcciones IP del cliente. Para obtener más información, consulta la sección "[Habilitar la compatibilidad con el protocolo PROXY en {% data variables.product.product_location %} ](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)".

Para obtener más información, refiérete a la documentación para tu balanceador de carga.

### Live updates to issues and check runs not working

When {% data variables.product.product_location %} is accessed via a load balancer or reverse proxy, expected live updates, such as new comments on issues and changes in notification badges or check run output, may not display until the page is refreshed. This is most common when the reverse proxy or load balancer is running in a layer 7 mode or does not support the required [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) protocol.

To enable live updates, you may need to reconfigure the load balancer or proxy. Para obtener más información, refiérete a la documentación para tu balanceador de carga.
