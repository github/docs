---
title: Answers to common questions about high-availability replicas
intro: 'Find information about high availability replica types, communication patterns, maintenance operations, and how to choose the right replica for your deployment.'
versions:
  ghes: '*'
contentType: concepts
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: HA replica information
---

## Replica types and capabilities

### What are the different types of replicas used in a HA deployment?

There are three types of replicas in a high-availability (HA) deployment:
* Passive replicas
* Active replica
* Cache replicas (known as repository caches).

**Passive replicas** simply sync data from the primary instance and don't handle any {% data variables.product.github %} traffic. However, operators can promote a passive replica to primary if needed.

A **geo replica** is an example of an **active replica** (these terms are often used interchangeably). Active replicas sync the data from the primary. An active replica can also process {% data variables.product.github %} traffic directly or proxy them to the primary.

**Cache replicas** sync both Git and Git Large File Storage (Git LFS) data from the primary. Cache replicas are designed for read-heavy scenarios, such as CI farms. They only accept reads/fetches/clones for repos that they have a local copy of. For any other repositories, they will return an error. They always reject pushes with a failure message.

### Can all replica types be promoted to primary?

Only passive and active replicas can be promoted to primary. Cache replicas can't be promoted to primary.

### Can a single deployment have all of the replicas?

A single deployment can include active replicas, passive replicas, and cache replicas all at once.

### Does the primary instance wait on replicas for writes?

The primary instance does not wait on replicas for writes. In HA, a push writes to the primary as well as all passive and active replicas. However, because the primary node is the only voting node, the push is considered accepted when it succeeds on the primary.

## Communication and network requirements

### What entities can communicate with active replicas?

The primary instance communicates with active replicas to sync the data and to handle any requests that active replicas proxy back to the primary. {% data variables.product.github %} web, API, and Git traffic (from both humans and automations) can be routed directly to active replicas. That is why it is important to configure DNS so that the traffic intended for an active replica actually reaches it.

### What entities can communicate with passive replicas?

The primary instance communicates with passive replicas to sync data. Passive replicas don't receive or process any other {% data variables.product.github %} traffic.

### What entities can communicate with cache replicas?

Read-only git traffic, primarily from automations such as CI farms, can be routed to and processed by cache replicas. To enable this, you should configure your DNS to direct the relevant traffic to the cache replica. Cache replicas are not designed to serve user traffic or push traffic.

### Should replicas be co-located with the primary?

There is no requirement for replicas to be co-located with the primary. By definition, a geo replica is geographically distant from the primary and not in the same data center. Cache replicas do not have any co-location requirements either.

However, it is recommended that at least one passive replica be co-located with the primary in the same data center for faster failover during a primary outage. In the event of a full data center outage, you can promote a geographically distributed passive replica.

### What are the latency requirements between primary and replicas?

Primary and active replicas have strict latency requirements. Primary and passive replicas, as well as primary and cache replicas, have recommended latency requirements. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/creating-a-high-availability-replica#creating-geo-replication-replicas) and [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/monitoring-a-high-availability-configuration#communication-issues-between-nodes). Network latencies beyond the required and recommended values may cause replicas to constantly lag behind.

## Administrative access and monitoring

### Is the {% data variables.enterprise.management_console %} available on replicas?

The {% data variables.enterprise.management_console %} is not available on either passive replicas or cache replicas. It is available only on active replicas (active replicas forward most of the requests to the primary).

### Is it possible to SSH into replicas?

An operator with administrative shell access can SSH into any of the replicas. Operators can add their public keys to the new replica via the {% data variables.enterprise.management_console %} before the replica is added to the cluster. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

### How do support bundles work for replicas?

You can generate either a cluster bundle or a node-specific bundle. A cluster bundle includes bundles from all nodes in the HA deployment, while a node-specific bundle contains data from just one node.

### Can the replicas be monitored and how?

All replicas can be monitored. The {% data variables.enterprise.management_console %} on the primary instance provides dashboards for all nodes, including passive and active replica nodes in the deployment.

In addition, you can export metrics and logs from all the nodes in a deployment to third party monitoring platforms.

To learn how to monitor the status of data replication among replica nodes, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/monitoring-a-high-availability-configuration#communication-issues-between-nodes).

## Difference between replicas and backups

### Are replicas and backups the same?

Replicas and backups are not the same. They serve different purposes.

Backups are used to create copies of your data that can be restored to another {% data variables.product.prodname_ghe_server %} environment. Customers often use backups to recover from disasters, or create new installations. In short, backup data is used to restore another {% data variables.product.prodname_ghe_server %} instance, while replicas are designed for high availability and redundancy in real time.

Replicas themselves are {% data variables.product.prodname_ghe_server %} instances. Backup-host is not a {% data variables.product.prodname_ghe_server %} installation.

### What software is running on replicas?

Replicas are a separate installation of {% data variables.product.prodname_ghe_server %}. The primary instance and all replicas should be running the same version of {% data variables.product.prodname_ghe_server %}.

## Maintenance operations

### What is the recommended sequence of operations for upgrades?

* Start the maintenance window on the primary and all replicas.
* Stop the replication on all replicas.
* Upgrade the primary to the target version.
* Upgrade the replicas to the same target version. All replicas can be upgraded in parallel.
* Once all upgrades are complete, restart the replication process.
* Close the maintenance window.

At times, customers may want to postpone upgrading replicas to a later time. In that case, remove the replica node from the deployment and convert it to a standalone node. Upgrade it to the same version as the primary and then add it back to the deployment.

### What is the recommended sequence of operations for hotpatching?

Hotpatching can be performed with minimal disruption. You can hotpatch the primary first, then the replicas.

## Choosing the right replica type

### When to use passive replicas?

If you need high availability and want an up-to-date instance to fail over to in case the primary goes down, passive replicas are the way to go. Most of our customers use passive replicas.

### When to use Geo replicas?

If you have a geographically distributed developer workforce, setting up geo replicas can help users in specific regions. For example, imagine a multinational company with engineering teams in North America, Europe, and Asia. If the primary instance is located in the US, deploying a geo-replica in Europe can significantly improve the  performance of read operations for European users. However, the same cannot be said for write operations. All writes must land on both the geo replicas and the primary before the operation completes. Geographic distance between the primary and replicas increases latency, which can slow down write operations.

### When to use cache replicas?

If your use cases are read-heavy like CI farms, cache replicas are a better fit. Here are a few scenarios where cache replicas make sense:
* A company with a small satellite office in a region with limited bandwidth to the main data center, where developers need faster access to repositories but do not require write access.
* An organization running CI/CD jobs in a remote data center that needs to clone repositories frequently and wants to minimize network traffic to the primary instance.

By design, cache replicas come with trade-offs. Cache replicas are eventually consistent and don't always serve the latest repository content. However, there are webhooks for when the latest changes land on the replica so the relevant CI/CD jobs can be kicked off. Very few {% data variables.product.github %} customers use cache replicas.
