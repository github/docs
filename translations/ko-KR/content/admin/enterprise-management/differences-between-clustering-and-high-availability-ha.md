---
title: Differences between clustering and high availability (HA)
intro: '{% data variables.product.prodname_ghe_server %} High Availability Configuration (HA) is a primary/secondary failover configuration that provides redundancy while Clustering provides redundancy and scalability by distributing read and write load across multiple nodes.'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  enterprise-server: '*'
topics:
  - 엔터프라이즈
---

### Failure scenarios

High Availability (HA) and Clustering both provide redundancy by eliminating the single node as a point of failure. They are able to provide availability in these scenarios:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

### Scalability

{% data reusables.enterprise_clustering.clustering-scalability %} In HA, the scale of the appliance is dependent exclusively on the primary node and the load is not distributed to the replica server.

### Differences in failover method and configuration

| Feature                         | Failover configuration                                                        | Failover method                                                                                         |
|:------------------------------- |:----------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------- |
| High Availability Configuration | DNS record with a low TTL pointed to the primary appliance, or load balancer. | You must manually promote the replica appliance in both DNS failover and load balancer configurations.  |
| Clustering                      | DNS record must point to a load balancer.                                     | If a node behind the load balancer fails, traffic is automatically sent to the other functioning nodes. |

### Backups and disaster recovery

Neither HA or Clustering should be considered a replacement for regular backups. For more information, see "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)."

### Monitoring

Availability features, especially ones with automatic failover such as Clustering, can mask a failure since service is usually not disrupted when something fails. Whether you are using HA or Clustering, monitoring the health of each instance is important so that you are aware when a failure occurs. For more information on monitoring, see "[Recommended alert thresholds](/enterprise/{{ currentVersion }}/admin/guides/installation/recommended-alert-thresholds/)" and "[Monitoring cluster nodes](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)."

### 더 읽을거리
- For more information about {% data variables.product.prodname_ghe_server %} Clustering, see "[About clustering](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)."
- For more information about HA, see "[Configuring {% data variables.product.prodname_ghe_server %} for High Availability](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."
