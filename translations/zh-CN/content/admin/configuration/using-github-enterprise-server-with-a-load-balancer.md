---
title: 结合使用 GitHub Enterprise Server 和负载均衡器
intro: '在单个 {% data variables.product.prodname_ghe_server %} 设备或一对采用高可用性配置的设备前方使用负载均衡器。'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer/
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
---

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

### 处理客户端连接信息

由于与 {% data variables.product.prodname_ghe_server %} 的客户端连接来自负载均衡器，因此客户端 IP 可丢失。

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

#### 在 {% data variables.product.product_location %} 上启用 PROXY 协议支持

强烈建议同时为您的设备和负载均衡器启用 PROXY 协议支持。 按照您的供应商提供的说明操作，在负载均衡器上启用 PROXY 协议。 更多信息请参阅 [PROXY 协议文档](http://www.haproxy.org/download/1.6/doc/proxy-protocol.txt)。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. 在 **External load balancers** 下，选择 **Enable support for PROXY protocol**。 ![启用 PROXY 协议支持的复选框](/assets/images/enterprise/management-console/enable-proxy.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

#### 在 {% data variables.product.product_location %} 上启用 X-Forwarded-For 支持

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% data reusables.enterprise_installation.terminating-tls %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. 在 **External load balancers** 下，选择 **Allow HTTP X-Forwarded-For header**。 ![允许 HTTP X-Forwarded-For 标头的复选框](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### 配置健康状态检查

如果预配置的检查在该节点上失败，则状态检查允许负载均衡器停止向未响应的节点发送流量。 如果设备因维护或计划外的故障而离线，负载均衡器可以显示状态页面。 在高可用性 (HA) 配置下，负载均衡器可用作故障转移策略的组成部分。 不过，不支持 HA 对的自动故障转移。 在副本设备开始为请求提供服务之前，您必须手动升级副本设备。 更多信息请参阅“[配置 {% data variables.product.prodname_ghe_server %} 以实现高可用性](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)”。

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}
