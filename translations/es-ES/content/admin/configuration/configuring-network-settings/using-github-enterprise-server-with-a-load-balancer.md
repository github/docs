---
title: Using GitHub Enterprise Server with a load balancer
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
shortTitle: Use a load balancer
---

## About load balancers

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Handling client connection information

Because client connections to {% data variables.product.prodname_ghe_server %} come from the load balancer, the client IP address can be lost.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### Enabling PROXY protocol support on {% data variables.location.product_location %}

We strongly recommend enabling PROXY protocol support for both your instance and the load balancer. Use the instructions provided by your vendor to enable the PROXY protocol on your load balancer. For more information, see [the PROXY protocol documentation](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Under **External load balancers**, select **Enable support for PROXY protocol**.
![Checkbox to enable support for PROXY protocol](/assets/images/enterprise/management-console/enable-proxy.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Enabling X-Forwarded-For support on {% data variables.location.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Warning**: If you configure `X-Forwarded-For` support on {% data variables.location.product_location %} and load balancer, you may not be able to connect to the {% data variables.enterprise.management_console %}. For more information, see "[Error: "Your session has expired" for connections to the {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)."

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Under **External load balancers**, select **Allow HTTP X-Forwarded-For header**.
![Checkbox to allow the HTTP X-Forwarded-For header](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Configuring health checks

Health checks allow a load balancer to stop sending traffic to a node that is not responding if a pre-configured check fails on that node. If the instance is offline due to maintenance or unexpected failure, the load balancer can display a status page. In a High Availability (HA) configuration, a load balancer can be used as part of a failover strategy. However, automatic failover of HA pairs is not supported. You must manually promote the replica instance before it will begin serving requests. For more information, see "[Configuring {% data variables.product.prodname_ghe_server %} for High Availability](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Troubleshooting connectivity through a load balancer

If you cannot connect to services on {% data variables.location.product_location %} through a load balancer, you can review the following information to troubleshoot the problem.

{% note %}

**Note**: Always test changes to your network infrastructure and instance configuration in a staging environment. For more information, see "[Setting up a staging instance](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endnote %}

### Error: "Your session has expired" for connections to the {% data variables.enterprise.management_console %}

If you enable support for the `X-Forwarded-For` header on your instance and load balancer, you may not be able to access your instance's {% data variables.enterprise.management_console %}. For more information about the {% data variables.enterprise.management_console %} and ports required for connections, see "[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)" and "[Network ports](/admin/configuration/configuring-network-settings/network-ports)."

If {% data variables.location.product_location %} indicates that your session has expired when you connect to the {% data variables.enterprise.management_console %} through a load balancer, try one of the following configurations on your load balancer.

- Disable `X-Forwarded-For` headers for connections to your instance on ports 8080 and 8443.
- Configure your load balancer to operate on Layer 4, and use the PROXY protocol instead of `X-Forwarded-For` for passthrough of client IP addresses. For more information, see "[Enabling PROXY protocol support on {% data variables.location.product_location %}](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)."

For more information, refer to the documentation for your load balancer.

### Live updates to issues and check runs not working

When {% data variables.location.product_location %} is accessed via a load balancer or reverse proxy, expected live updates, such as new comments on issues and changes in notification badges or check run output, may not display until the page is refreshed. This is most common when the reverse proxy or load balancer is running in a layer 7 mode or does not support the required [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) protocol. 

To enable live updates, you may need to reconfigure the load balancer or proxy. For more information, refer to the documentation for your load balancer.
