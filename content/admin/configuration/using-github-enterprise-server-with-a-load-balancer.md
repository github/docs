---
title: Using GitHub Enterprise Server with a load balancer
intro: 'Use a load balancer in front of a single {{ site.data.variables.product.prodname_ghe_server }} appliance or a pair of appliances in a High Availability configuration.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer/
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.enterprise_clustering.load_balancer_intro }}

{{ site.data.reusables.enterprise_clustering.load_balancer_dns }}

### Handling client connection information

Because client connections to {{ site.data.variables.product.prodname_ghe_server }} come from the load balancer, the client IP address can be lost.

{{ site.data.reusables.enterprise_clustering.proxy_preference }}

{{ site.data.reusables.enterprise_clustering.proxy_xff_firewall_warning }}

#### Enabling PROXY protocol support on {{ site.data.variables.product.product_location_enterprise }}

We strongly recommend enabling PROXY protocol support for both your appliance and the load balancer. Use the instructions provided by your vendor to enable the PROXY protocol on your load balancer. For more information, see [the PROXY protocol documentation](http://www.haproxy.org/download/1.6/doc/proxy-protocol.txt).

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.privacy }}
3. Under **External load balancers**, select **Enable support for PROXY protocol**.
![Checkbox to enable support for PROXY protocol](/assets/images/enterprise/management-console/enable-proxy.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

{{ site.data.reusables.enterprise_clustering.proxy_protocol_ports }}

#### Enabling X-Forwarded-For support on {{ site.data.variables.product.product_location_enterprise }}

{{ site.data.reusables.enterprise_clustering.x-forwarded-for }}

{{ site.data.reusables.enterprise_installation.terminating-tls }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.privacy }}
3. Under **External load balancers**, select **Allow HTTP X-Forwarded-For header**.
![Checkbox to allow the HTTP X-Forwarded-For header](/assets/images/enterprise/management-console/allow-xff.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

{{ site.data.reusables.enterprise_clustering.without_proxy_protocol_ports }}

### Configuring health checks

Health checks allow a load balancer to stop sending traffic to a node that is not responding if a pre-configured check fails on that node. If the appliance is offline due to maintenance or unexpected failure, the load balancer can display a status page. In a High Availability (HA) configuration, a load balancer can be used as part of a failover strategy. However, automatic failover of HA pairs is not supported. You must manually promote the replica appliance before it will begin serving requests. For more information, see "[Configuring {{ site.data.variables.product.prodname_ghe_server }} for High Availability](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

{{ site.data.reusables.enterprise_clustering.health_checks }}
{{ site.data.reusables.enterprise_site_admin_settings.maintenance-mode-status }}
