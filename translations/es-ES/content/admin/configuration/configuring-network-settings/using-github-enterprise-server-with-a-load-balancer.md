---
title: Utilizar el servidor de GitHub Enterprise con un balanceador de carga
intro: 'Use a load balancer in front of a single {% data variables.product.prodname_ghe_server %} instance or a pair of instances in a High Availability configuration.'
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

We strongly recommend enabling PROXY protocol support for both your instance and the load balancer. Utiliza las instrucciones provistas por tu proveedor para habilitar el protocolo PROXY en tu balanceador de carga. Para obtener más información, consulta [la documentación de protocolo PROXY](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

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

**Warning**: If you configure `X-Forwarded-For` support on {% data variables.product.product_location %} and load balancer, you may not be able to connect to the {% data variables.enterprise.management_console %}. For more information, see "[Error: "Your session has expired" for connections to the {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)."

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Dentro de **External load balancers (Balanceadores de carga externos)**, selecciona **Allow HTTP X-Forwarded-For header (Permitir encabezados HTTP X-Forwarded-For)**. ![Casilla de verificación para permitir el encabezado de HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Configurar la revisión de estado

Las comprobaciones de estado permiten que un balanceador de carga deje de enviar tráfico a un nodo que no responde si una comprobación preconfigurada falla en ese nodo. If the instance is offline due to maintenance or unexpected failure, the load balancer can display a status page. En una configuración de alta disponibilidad (HA), un balanceador de carga puede usarse como parte de una estrategia de conmutación por error. Sin embargo, no está admitida la conmutación por error automática de los pares de HA. You must manually promote the replica instance before it will begin serving requests. Para obtener más información, consulta "[Configurar el {% data variables.product.prodname_ghe_server %} para alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Troubleshooting connectivity through a load balancer

If you cannot connect to services on {% data variables.product.product_location %} through a load balancer, you can review the following information to troubleshoot the problem.

{% note %}

**Note**: Always test changes to your network infrastructure and instance configuration in a staging environment. Para obtener más información, consulta "[Configurar una instancia de preparación](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endnote %}

### Error: "Your session has expired" for connections to the {% data variables.enterprise.management_console %}

If you enable support for the `X-Forwarded-For` header on your instance and load balancer, you may not be able to access your instance's {% data variables.enterprise.management_console %}. For more information about the {% data variables.enterprise.management_console %} and ports required for connections, see "[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)" and "[Network ports](/admin/configuration/configuring-network-settings/network-ports)."

If {% data variables.product.product_location %} indicates that your session has expired when you connect to the {% data variables.enterprise.management_console %} through a load balancer, try one of the following configurations on your load balancer.

- Disable `X-Forwarded-For` headers for connections to your instance on ports 8080 and 8443.
- Configure your load balancer to operate on Layer 4, and use the PROXY protocol instead of `X-Forwarded-For` for passthrough of client IP addresses. For more information, see "[Enabling PROXY protocol support on {% data variables.product.product_location %} ](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)."

For more information, refer to the documentation for your load balancer.
