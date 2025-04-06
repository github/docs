---
title: About high availability configuration
intro: 'In a high availability configuration, a fully redundant secondary {% data variables.product.prodname_ghe_server %} appliance is kept in sync with the primary appliance through replication of all major datastores.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/configuring-high-availability/about-high-availability-configuration
  - /admin/monitoring-managing-and-updating-your-instance/configuring-high-availability/about-high-availability-configuration
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: About HA configuration
---
When you configure high availability, there is an automated setup of one-way, asynchronous replication of all datastores (Git repositories, MySQL, Redis, and Elasticsearch) from the primary to the replica appliance. Most {% data variables.product.prodname_ghe_server %} configuration settings are also replicated, including the {% data variables.enterprise.management_console %} password. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console)."

{% data variables.product.prodname_ghe_server %} supports an active/passive configuration, where replica appliances run as a standby with database services running in replication mode but application services stopped.

After replication has been established, the {% data variables.enterprise.management_console %} is no longer accessible on replica appliances. If you navigate to a replica's IP address or hostname on port 8443, you'll see a "Server in replication mode" message, which indicates that the appliance is currently configured as a replica.

Replica appliances do accept Git client requests, and these requests are forwarded to the active appliance.

{% data reusables.enterprise_installation.replica-limit %}

## Targeted failure scenarios

Use a high availability configuration for protection against:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

A high availability configuration is not a good solution for:

* **Scaling-out**. While you can distribute traffic geographically using geo-replication, the performance of writes is limited to the speed and availability of the primary appliance. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-geo-replication)."
* **CI/CD load**. If you have a large number of CI clients that are geographically distant from your primary instance, you may benefit from configuring a repository cache. For more information, see "[AUTOTITLE](/admin/enterprise-management/caching-repositories/about-repository-caching)."
* **Backing up your primary appliance**. A high availability replica does not replace off-site backups in your disaster recovery plan. Some forms of data corruption or loss may be replicated immediately from the primary to the replica. To ensure safe rollback to a stable past state, you must perform regular backups with historical snapshots.
* **Zero downtime upgrades**. To prevent data loss and split-brain situations in controlled promotion scenarios, place the primary appliance in maintenance mode and wait for all writes to complete before promoting the replica.

## Network traffic failover strategies

During failover, you must separately configure and manage redirecting network traffic from the primary to the replica.

### DNS failover

With DNS failover, use short TTL values in the DNS records that point to the primary {% data variables.product.prodname_ghe_server %} appliance. We recommend a TTL between 60 seconds and five minutes.

During failover, you must place the primary into maintenance mode and redirect its DNS records to the replica appliance's IP address. The time needed to redirect traffic from primary to replica will depend on the TTL configuration and time required to update the DNS records.

If you are using geo-replication, you must configure Geo DNS to direct traffic to the nearest replica. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-geo-replication)."

### Load balancer

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

During failover, you must place the primary appliance into maintenance mode. You can configure the load balancer to automatically detect when the replica has been promoted to primary, or it may require a manual configuration change. You must manually promote the replica to primary before it will respond to user traffic. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer)."

{% data reusables.enterprise_installation.monitoring-replicas %}

## Utilities for replication management

People with administrative SSH access to an instance in a high-availability configuration can use command-line utilities to manage replication. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#high-availability)."

## Further reading

* "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/creating-a-high-availability-replica)"
* "[AUTOTITLE](/admin/configuration/configuring-network-settings/network-ports)"
