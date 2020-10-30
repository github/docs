---
title: Utilizar el servidor de GitHub Enterprise con un balanceador de carga
intro: 'Utiliza un balanceador de carga frente a un aparato único del {% data variables.product.prodname_ghe_server %} o un par de aparatos en una configuración de alta disponibilidad.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer/
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

### Manejar información de conexión de clientes

Debido a que las conexiones de cliente al {% data variables.product.prodname_ghe_server %} provienen del balanceador de carga, se puede perder la dirección IP del cliente.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

#### Habilitar soporte para protocolo de PROXY en {% data variables.product.product_location_enterprise %}

Recomendamos firmemente habilitar el soporte para protocolo de PROXY para tu aparato y el balanceador de carga. Utiliza las instrucciones provistas por tu proveedor para habilitar el protocolo PROXY en tu balanceador de carga. Para obtener más información, consulta [la documentación de protocolo PROXY](http://www.haproxy.org/download/1.6/doc/proxy-protocol.txt).

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Dentro de **External load balancers (Balanceadores de carga externos)**, selecciona **Enable support for PROXY protocol (Habilitar soporte para el protocolo de PROXY)**. ![Casilla de verificación para habilitar el soporte para el protocolo PROXY](/assets/images/enterprise/management-console/enable-proxy.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

#### Habilitar soporte para X-Forwarded-For en {% data variables.product.product_location_enterprise %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% data reusables.enterprise_installation.terminating-tls %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Dentro de **External load balancers (Balanceadores de carga externos)**, selecciona **Allow HTTP X-Forwarded-For header (Permitir encabezados HTTP X-Forwarded-For)**. ![Casilla de verificación para permitir el encabezado de HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### Configurar la revisión de estado

Las comprobaciones de estado permiten que un balanceador de carga deje de enviar tráfico a un nodo que no responde si una comprobación preconfigurada falla en ese nodo. Si el aparato está fuera de línea debido a un mantenimiento o una falla inesperada, el balanceador de carga puede mostrar una página de estado. En una configuración de alta disponibilidad (HA), un balanceador de carga puede usarse como parte de una estrategia de conmutación por error. Sin embargo, no está admitida la conmutación por error automática de los pares de HA. Debes impulsar de forma manual el aparato réplica antes de que comience con las consultas activas. Para obtener más información, consulta "[Configurar {% data variables.product.prodname_ghe_server %} para alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}
