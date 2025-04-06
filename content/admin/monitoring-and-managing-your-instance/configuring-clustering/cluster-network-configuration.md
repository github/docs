---
title: Cluster network configuration
intro: 'A {% data variables.product.prodname_ghe_server %} cluster requires proper DNS name resolution, load balancing, and communication between nodes.'
product: '{% data reusables.gated-features.cluster %}'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
  - /admin/enterprise-management/cluster-network-configuration
  - /admin/enterprise-management/configuring-clustering/cluster-network-configuration
  - /admin/monitoring-managing-and-updating-your-instance/configuring-clustering/cluster-network-configuration
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - Infrastructure
  - Networking
shortTitle: Configure a cluster network
---

## About networking for a {% data variables.product.product_name %} cluster

Each node in your {% data variables.product.product_name %} cluster must be able to communicate with all of the other nodes in the cluster over the network. You can review the required ports and protocols for end users, administration, and communication between nodes. To distribute traffic among front-end nodes, {% data variables.product.company_short %} recommends that you configure an external load balancer.

## Network considerations

The simplest network design for clustering is to place the nodes on a single LAN. If a cluster must span subnetworks, we do not recommend configuring any firewall rules between the networks. The latency between nodes should be less than 1 millisecond.

{% data reusables.enterprise_clustering.network-latency %}

* [Application ports for end users](#application-ports-for-end-users)
* [Administrative ports](#administrative-ports)
* [Cluster communication ports](#cluster-communication-ports)

### Application ports for end users

Application ports provide web application and Git access for end users.

| Port     | Description     | Encrypted  |
| :------------- | :------------- | :------------- |
| 22/TCP    | Git over SSH | {% octicon "check" aria-label="Encrypted" %} |
| 25/TCP    | SMTP | Requires STARTTLS |
| 80/TCP    | HTTP | {% octicon "x" aria-label="Not encrypted" %}<br><br>When SSL is enabled this port redirects to HTTPS |
| 443/TCP   | HTTPS | {% octicon "check" aria-label="Encrypted" %} |
| 9418/TCP  | Simple Git protocol port<br>(Disabled in private mode) | {% octicon "x" aria-label="Not encrypted" %} |

### Administrative ports

Administrative ports are not required for basic application use by end users.

| Port     | Description     | Encrypted  |
| :------------- | :------------- | :------------- |
| ICMP      | ICMP Ping | {% octicon "x" aria-label="Not encrypted" %} |
| 122/TCP   | Administrative SSH | {% octicon "check" aria-label="Encrypted" %} |
| 161/UDP    | SNMP | {% octicon "x" aria-label="Not encrypted" %} |
| 8080/TCP  | Management Console HTTP | {% octicon "x" aria-label="Not encrypted" %}<br><br>When SSL is enabled this port redirects to HTTPS |
| 8443/TCP  | Management Console HTTPS | {% octicon "check" aria-label="Encrypted" %} |

### Cluster communication ports

If a network level firewall is in place between nodes, these ports will need to be accessible. The communication between nodes is not encrypted. These ports should not be accessible externally.

| Port     | Description     |
| :------------- | :------------- |
| 1336/TCP  | Internal API |
| 3033/TCP  | Internal SVN access |
| 3037/TCP  | Internal SVN access |
| 3306/TCP  | MySQL |
| 4486/TCP  | Governor access |
| 5115/TCP  | Storage backend |
| 5208/TCP  | Internal SVN access |
| 6379/TCP  | Redis |
| 8001/TCP  | Grafana |
| 8090/TCP  | Internal GPG access |
| 8149/TCP  | GitRPC file server access |
| 8300/TCP | Consul |
| 8301/TCP | Consul |
| 8302/TCP | Consul |
| 9000/TCP  | Git Daemon |
| 9102/TCP  | Pages file server |
| 9105/TCP  | LFS server |
| 9200/TCP  | Elasticsearch |
| 9203/TCP | Semantic code service |
| 9300/TCP  | Elasticsearch |
| 11211/TCP | Memcache |
| 161/UDP   | SNMP |
| 8125/UDP  | Statsd |
| 8301/UDP | Consul |
| 8302/UDP | Consul |
| 25827/UDP | Collectd |

## Configuring a load balancer

 We recommend an external TCP-based load balancer that supports the PROXY protocol to distribute traffic across nodes. Consider these load balancer configurations:

* TCP ports (shown below) should be forwarded to nodes running the `web-server` service. These are the only nodes that serve external client requests.
* Sticky sessions shouldn't be enabled.

{% data reusables.enterprise_installation.terminating-tls %}

## Handling client connection information

Because client connections to the cluster come from the load balancer, the client IP address can be lost. To properly capture the client connection information, additional consideration is required.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

### Enabling PROXY support on {% data variables.product.prodname_ghe_server %}

We strongly recommend enabling PROXY support for both your instance and the load balancer.

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

* For your instance, use this command:

  ```shell
  ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```

* For the load balancer, use the instructions provided by your vendor.

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Enabling X-Forwarded-For support on {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

To enable the `X-Forwarded-For` header, use this command:

```shell
ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### Configuring health checks

Health checks allow a load balancer to stop sending traffic to a node that is not responding if a pre-configured check fails on that node. If a cluster node fails, health checks paired with redundant nodes provides high availability.

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## DNS requirements

{% data reusables.enterprise_clustering.load_balancer_dns %}
