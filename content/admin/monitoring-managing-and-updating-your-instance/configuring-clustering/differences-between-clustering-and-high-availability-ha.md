---
title: Differences between clustering and high availability (HA)
intro: 'Learn about the differences between deployment topologies for the virtual machines (VMs) that comprise a {% data variables.product.product_name %} instance.'
product: '{% data reusables.gated-features.cluster %}'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/configuring-clustering/differences-between-clustering-and-high-availability-ha
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Choosing cluster or HA
---

## About deployment topologies for {% data variables.product.prodname_ghe_server %}

You can deploy the virtual machines for a {% data variables.product.prodname_ghe_server %} instance in different topologies depending on your environment and user needs.

- To support a plan for disaster recovery and supplement backups, or to improve network and write performance for geographically distributed users, you can configure high availability. In a high-availability configuration, one node acts as a primary, while others act as replicas. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)."

- To provide horizontal scaling for environments with tens of thousands of developers, a cluster topology is available. Clustering addresses situations where a single primary node would routinely experience resource exhaustion. This configuration requires careful planning and additional administrative overhead. {% data variables.product.company_short %} will work with you to determine your eligibility for clustering. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/about-clustering)."

## Failure scenarios

High availability (HA) and clustering both provide redundancy by eliminating the single node as a point of failure. They are able to provide availability in these scenarios:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## Scalability

{% data reusables.enterprise_clustering.clustering-scalability %} In HA, the scale of the appliance is dependent exclusively on the primary node and the load is not distributed to the replica server.

## Differences in failover method and configuration

| Feature     | Failover configuration     | Failover method |
| :------------- | :------------- | :--- |
| High availability configuration       | DNS record with a low TTL pointed to the primary appliance, or load balancer. | You must manually promote the replica appliance in both DNS failover and load balancer configurations. |
| Clustering | DNS record must point to a load balancer. | If a node behind the load balancer fails, traffic is automatically sent to the other functioning nodes. |

## Backups and disaster recovery

Neither HA nor clustering should be considered a replacement for regular backups. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)."

## Monitoring

Availability features, especially ones with automatic failover such as clustering, can mask a failure since service is usually not disrupted when something fails. Whether you are using HA or clustering, monitoring the health of each instance is important so that you are aware when a failure occurs. For more information about monitoring, see "[AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds)" and "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/monitoring-the-health-of-your-cluster)."
