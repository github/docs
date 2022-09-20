---
title: 结合使用 GitHub Enterprise Server 和负载均衡器
intro: '在单个 {% data variables.product.prodname_ghe_server %} 设备或一对采用高可用性配置的示例前方使用负载均衡器。'
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
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '147167313'
---
## 关于负载均衡器

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## 处理客户端连接信息

由于与 {% data variables.product.prodname_ghe_server %} 的客户端连接来自负载均衡器，因此客户端 IP 可丢失。

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### 在 {% data variables.product.product_location %} 上启用 PROXY 协议支持

强烈建议同时为实例和负载均衡器启用 PROXY 协议支持。 按照您的供应商提供的说明操作，在负载均衡器上启用 PROXY 协议。 有关详细信息，请参阅 [PROXY 协议文档](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt)。

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. 在“外部负载均衡器”下，选择“启用对 PROXY 协议的支持” 。
![用于启用对 PROXY 协议的支持的复选框](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### 在 {% data variables.product.product_location %} 上启用 X-Forwarded-For 支持

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

警告：如果在 {% data variables.product.product_location %} 和负载均衡器上配置 `X-Forwarded-For` 支持，则可能无法连接到 {% data variables.enterprise.management_console %}。 有关详细信息，请参阅“[错误：“会话已过期”，无法连接到 {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)”。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. 在“外部负载均衡器”下，选择“允许 HTTP X-Forwarded-For 标头” 。
![用于允许 HTTP X-Forwarded-For 标头的复选框](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## 配置健康状态检查

如果预配置的检查在该节点上失败，则状态检查允许负载均衡器停止向未响应的节点发送流量。 如果实例因维护或计划外的故障而离线，负载均衡器可以显示状态页面。 在高可用性 (HA) 配置下，负载均衡器可用作故障转移策略的组成部分。 不过，不支持 HA 对的自动故障转移。 在副本示例设备开始为请求提供服务之前，你必须对其进行手动升级。 有关详细信息，请参阅“[为高可用性配置 {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)。”

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## 通过负载均衡器排查连接问题

如果无法通过负载均衡器连接到 {% data variables.product.product_location %} 上的服务，可以查看以下信息来解决问题。

{% note %}

注意：始终在过渡环境中测试对网络基础结构和实例配置的更改。 有关详细信息，请参阅“[设置暂存实例](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”。

{% endnote %}

### 错误：“会话已过期”，无法连接到 {% data variables.enterprise.management_console %}

如果在实例和负载均衡器上启用对 `X-Forwarded-For` 标头的支持，则可能无法访问实例的 {% data variables.enterprise.management_console %}。 有关连接所需的 {% data variables.enterprise.management_console %} 和端口的详细信息，请参阅“[访问管理控制台](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”和“[网络端口](/admin/configuration/configuring-network-settings/network-ports)”。

如果 {% data variables.product.product_location %} 指示通过负载均衡器连接到 {% data variables.enterprise.management_console %} 时会话已过期，请在负载均衡器上尝试以下配置之一。

- 在端口 8080 和 8443 上禁用连接到实例的 `X-Forwarded-For` 标头。
- 将负载均衡器配置为在第 4 层上运行，并使用 PROXY 协议（而不是 `X-Forwarded-For`）来传递客户端 IP 地址。 有关详细信息，请参阅在“[在 {% data variables.product.product_location %} 上启用 PROXY 协议支持](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)”。

有关详细信息，请参阅负载均衡器文档。

### 对问题的实时更新和检查运行不起作用

当通过负载均衡器或反向代理访问 {% data variables.product.product_location %} 时，预期的实时更新（如有关通知标记中问题和更改的新注释或检查运行输出）在页面刷新之前可能不会显示。 当反向代理或负载均衡器在第 7 层模式下运行或不支持所需的 [Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 协议时，这是最常见的。 

若要启用实时更新，可能需要重新配置负载均衡器或代理。 有关详细信息，请参阅负载均衡器文档。
