---
title: Monitoring a high-availability configuration
intro: "After configuration of high availability for {% data variables.location.product_location %}, you can monitor the status of data replication among to your instance's replica nodes."
versions:
  ghes: '*'
permissions: Site administrators can monitor a high-availability configuration for a {% data variables.product.product_name %} instance.
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Monitoring
shortTitle: Monitor HA configuration
redirect_from:
  - /admin/enterprise-management/configuring-high-availability/monitoring-a-high-availability-configuration
---

## About observability for high availability

{% data reusables.enterprise.about-ha %} For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)."

After you configure high availability, you can proactively ensure redundancy by monitoring the overall health of replication and the status of each of your instance's replica nodes. You can use command-line utilities on the instance, an overview dashboard, {% ifversion replication-management-api %}the instance's REST API, {%endif %}or a remote monitoring system such as Nagios.

With high availability, your instance uses several approaches to replicate data between primary and replica nodes. Database services that support a native replication mechanism, such as MySQL, replicate using the service's native mechanism. Other services, such as Git repositories, replicate using a custom mechanism developed for {% data variables.product.product_name %}, or using platform tools like rsync.

## Monitoring replication from your instance

To monitor the replication status of an existing replica node for {% data variables.location.product_location %}, connect to the node's administrative console (SSH) and run the `ghe-repl-status` command-line utility. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repl-status)."

You can also monitor replication status from the overview dashboard on your instance. In a browser, navigate to the following URL, replacing HOSTNAME with your instance's hostname.

`http(s)://HOSTNAME/setup/replication`

{% ifversion replication-management-api %}

## Monitoring replication using the REST API

You can monitor replication status on your instance using the REST API. For more information, see "[Manage {% data variables.product.product_name %}](/rest/enterprise-admin/manage-ghes#list-the-status-of-services-running-on-all-replica-nodes)" in the REST API documentation.

{% endif %}

## Monitoring replication from a remote system

Output from the `ghe-repl-status` command-line utility conforms to the expectations of Nagios' check_by_ssh plugin. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repl-status)."

Additionally, you can monitor the availability of your instance by parsing the status code returned by a request to the following URL. For example, if you deploy a load balancer as part of your failover strategy, you can configure health checks that parse this output. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#configuring-health-checks)."

Depending on where and how you configure monitoring, replace HOST with either your instance's hostname or an individual node's IP address.

`http(s)://HOST/status`

An active node for geo-replication, which can respond to user requests, will return status code `200` (OK). Requests to individual nodes or the instance's hostname may return a `503` (Service Unavailable) error for the following reasons.

- The individual node is a passive replica node, such as the replica node in a two-node high-availability configuration.
- The individual node is part of a geo-replication configuration, but is a passive replica node.
- The instance is in maintenance mode. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."

For more information about geo-replication, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/about-geo-replication)."

## Troubleshooting replication issues

To troubleshoot replication issues on your instance, ensure replication is running and that nodes can communicate with each other over the network. You can also use command-line utilities to investigate under-replication.

### Replication is not running

You must start replication on each node using the `ghe-repl-start` command-line utility. If replication is not running, connect to the affected node using SSH, then run `ghe-repl-start`. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repl-start)."

### Communication issues between nodes

Replication requires that the primary node and all replica nodes can communicate with each other over the network. At minimum, ensure that ports 122/TCP and 1194/UDP are open for bidirectional communication between all of your instance's nodes. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/network-ports#administrative-ports)."

{% data reusables.enterprise_clustering.network-latency %} You can use `ping` or another network administration utility to test the network connectivity between nodes.

### Under-replication

If you run the `ghe-repl-status` command-line utility on a replica node and Git repositories, repository networks, or storage objects are under-replicated, one or more replica nodes are not fully synchronized with the primary node. Under-replication may occur if the primary node is unable to communicate with the replica nodes, or if the replica nodes are unable to communicate with the primary node.

If you've recently configured high availability or geo-replication, the initial sync will take some time. The duration of the initial sync depends on how much data exists and network conditions.

- [Under-replicated repositories or repository networks](#under-replicated-repositories-or-repository-networks)
- [Under-replicated storage objects](#under-replicated-storage-objects)

#### Under-replicated repositories or repository networks

You can view a specific repository's replication status by connecting to a node and running the following {% ifversion ghe-spokes-deprecation-phase-1 %}commands{% else %}command{% endif %}, replacing OWNER with the repository's owner and REPOSITORY with the repository's name.

```text
{%- ifversion ghe-spokes-deprecation-phase-1 %}
ghe-spokesctl check OWNER/REPOSITORY
ghe-spokesctl info OWNER/REPOSITORY
{%- else %}
ghe-spokes diagnose OWNER/REPOSITORY
{%- endif %}
```

Alternatively, if you want to view a repository network's replication status, replace NETWORK-ID/REPOSITORY-ID with the network ID and repository ID number.

```text
{%- ifversion ghe-spokes-deprecation-phase-1 %}
ghe-spokesctl check NETWORK-ID/REPOSITORY-ID
ghe-spokesctl info NETWORK-ID/REPOSITORY-ID
{%- else %}
ghe-spokes diagnose NETWORK-ID/REPOSITORY-ID
{%- endif %}
```

#### Under-replicated storage objects

You can view a specific storage object's status by connecting to a node and running the following command, replacing OID with the object's ID.

```shell
ghe-storage info OID
```

### Getting support from {% data variables.product.company_short %}

If you review the troubleshooting advice for replication and continue to experience issues on your instance, collect the following information, then contact us by visiting {% data variables.contact.contact_ent_support %}.

- On each affected node, run `ghe-repl-status -vv`, then copy the output to your ticket. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repl-status)."
- On each affected node, create a support bundle to attach to your ticket. For more information, see "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)."
