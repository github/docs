---
title: Moving Redis to a dedicated cluster node
shortTitle: Move Redis to a dedicated node
intro: Separate Redis from other services in your {% data variables.product.prodname_ghe_server %} cluster by moving the Redis primary to a dedicated node.
product: '{% data reusables.gated-features.cluster %}'
versions:
  feature: dedicated-redis-cluster-node
contentType: how-tos
category:
  - Scale your instance
---

## About moving Redis

Use this procedure when Redis and MySQL compete for resources on the same node and you want to isolate their workloads.

You can move the Redis primary from a node that also runs other services, such as MySQL, to a dedicated node in your {% data variables.product.prodname_ghe_server %} cluster. Redis then uses the dedicated node's resources and data volume rather than sharing them with those services. This procedure does not attach a new disk to an existing node or use an external Redis service. It also does not apply to high availability configurations.

During a maintenance window, add a node with the `redis-server` role and let it replicate from the current Redis primary. Confirm that replication has caught up, then designate the new node as the primary. Keep the original node as a Redis replica so you can move the primary back later without restoring an older copy of the data.

The `redis-master` setting in the `[cluster]` section of `/data/user/common/cluster.conf` selects the Redis primary for the cluster. The `redis-server` setting in an individual node's section enables Redis on that node. Changing the Redis primary does not require changing `mysql-master` or removing MySQL from the original node.

The `redis-master` setting in the `[cluster]` section of `/data/user/common/cluster.conf` selects the Redis primary for the cluster. The `redis-server` setting in an individual node's section enables Redis on that node. Changing the Redis primary does not require changing `mysql-master` or removing MySQL from the original node. The existing colocated Redis and MySQL topology remains supported.

## Prerequisites

Before you begin:

* Schedule a maintenance window for the topology change. Applying cluster configuration can interrupt service.
* Complete and verify a recent backup of your instance. See [AUTOTITLE](/admin/backing-up-and-restoring-your-instance).
* Ensure that every cluster node, including the new node, runs the same exact {% data variables.product.prodname_ghe_server %} release. Wait for any upgrade or configuration run to finish. For shared instructions to provision a node and configure its IP address, see steps 1 and 2 under [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/replacing-a-cluster-node#replacing-a-functional-node).
* Provision the new node with a unique hostname, enough memory for the Redis dataset, and a separate data volume with sufficient free space. Review the hardware and network requirements in [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/about-cluster-nodes) and [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/cluster-network-configuration).
* Ensure you have administrative SSH access to the cluster. See [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
* Keep at least one healthy Redis replica in addition to the primary.

> [!IMPORTANT]
> Run the configuration commands from one existing cluster node that you will retain, such as the primary MySQL node. Edit `/data/user/common/cluster.conf` on that node and run `ghe-cluster-config-init` and `ghe-cluster-config-apply` there. The apply command distributes the configuration to the other nodes. Do not edit separate copies on each node.

## Adding the dedicated node as a Redis replica

Add the node without changing the existing Redis primary.

1. Install {% data variables.product.prodname_ghe_server %} on the new node. Using the administrative shell or DHCP, configure only its IP address. Do not configure other settings. For these shared installation and IP configuration steps, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/initializing-the-cluster#installing-github-enterprise-server).
1. Back up `/data/user/common/cluster.conf`, then open the file in a text editor. For the file's structure and node hostname and IP address requirements, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/initializing-the-cluster#about-the-cluster-configuration-file).
1. Add a section for the dedicated node with `redis-server = true`. Replace `REDIS-NODE-HOSTNAME`, `IPV4-ADDRESS`, and `DATACENTER` with the new node's unique hostname, private IPv4 address, and the datacenter of the current primary Redis node. Set `CONSUL-DATACENTER` to the current primary Redis node's `consul-datacenter` value.

   ```text
   [cluster "REDIS-NODE-HOSTNAME"]
     hostname = REDIS-NODE-HOSTNAME
     ipv4 = IPV4-ADDRESS
     consul-datacenter = CONSUL-DATACENTER
     datacenter = DATACENTER
     redis-server = true
   ```

   Do not assign `mysql-server` or other service roles to the dedicated node. Leave the existing `[cluster]` section, including `redis-master` and `mysql-master`, unchanged. Keep the `redis-server = true` setting on the original Redis node and the existing Redis replicas.

   During your scheduled maintenance window, initialize the new node, then apply the configuration. Run both commands from the node where you edited `cluster.conf`.

> [!IMPORTANT]
> Applying this configuration restarts Redis on every Redis node, including the current primary.

   ```shell
   ghe-cluster-config-init
   ghe-cluster-config-apply
   ```

1. Check Redis replication.

   ```shell
   /usr/local/share/enterprise/ghe-cluster-status-redis -v
   ```

   Wait until the new node's entry reports `ok` and `replication is in sync`. The current primary's entry must also report `ok`. Initial replication time is proportional to the size of your Redis dataset and is usually in the order of minutes.

> [!WARNING]
> Stop here if either node remains unhealthy. Resolve the issue before continuing.

## Promoting the dedicated node

Promote only a healthy replica that has caught up with the current primary.

> [!WARNING]
> Changing `redis-master` before the target replica has caught up can discard Redis data, including background-job queue state. Do not promote an empty or out-of-date node.
>
> This procedure does not guarantee zero data loss. Background jobs can keep writing to Redis during maintenance mode, and writes made while the primary changes can be lost even after the replica has caught up.

1. During your scheduled maintenance window, enable maintenance mode and confirm that it is active.

   ```shell
   ghe-cluster-maintenance -s
   ghe-cluster-maintenance -q
   ```

   For details about cluster maintenance mode, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#managing-maintenance-mode-for-a-cluster-using-ssh).

1. Confirm that the target replica has caught up using [Checking replication before promotion](#checking-replication-before-promotion). Use the dedicated node as `TARGET-NODE-HOSTNAME`. Do not change `redis-master` until these checks pass.
1. On the existing node where you have been editing the configuration, back up the current `cluster.conf`. In the file's existing `[cluster]` section, change only `redis-master` to the dedicated node's hostname. Replace `REDIS-NODE-HOSTNAME` with that hostname.

   ```text
   [cluster]
     redis-master = REDIS-NODE-HOSTNAME
   ```

   This snippet shows only the setting to change. Preserve all other settings in `[cluster]`, including `mysql-master`, and all node sections. Do not put `redis-master` inside a `[cluster "HOSTNAME"]` node section.

1. Check the configuration, then apply it from the same node.

   ```shell
   ghe-cluster-config-check /data/user/common/cluster.conf
   ghe-cluster-config-apply
   ```

> [!WARNING]
> Stop here if either command fails. Keep maintenance mode enabled and work with {% data variables.contact.github_support %} to resolve the failure.

1. Verify the result using [Verifying the Redis primary](#verifying-the-redis-primary). The dedicated node must be the primary, and the original node must be a healthy replica.
1. Disable maintenance mode.

   ```shell
   ghe-cluster-maintenance -u
   ```

1. Confirm that users can access the instance and that background jobs resume normally.

## Checking replication before promotion

Use these checks immediately before promoting a Redis replica, whether you are moving Redis to the dedicated node or moving it back.

1. To compare Redis data and background-job queues after this transfer, run the following commands and save the output.

   ```shell
   ghe-redis-cli INFO keyspace
   ghe-aqueduct status
   ```

   ```shell
   /usr/local/share/enterprise/ghe-cluster-status-redis -v
   ```

   The current primary and target replica must report `ok`. The target must report `replication is in sync`.

1. Look up the current Redis and MySQL primary hostnames. Use the Redis primary hostname in the following commands. Confirm after applying the configuration that the MySQL primary has not changed.

   ```shell
   ghe-config cluster.redis-master
   ghe-config cluster.mysql-master
   ```

1. Read the target replica's replication information, then the current primary's information. Replace `TARGET-NODE-HOSTNAME` with the node you want to promote and `CURRENT-PRIMARY-HOSTNAME` with the hostname from the previous step.

   ```shell
   ghe-redis-cli --remote -h TARGET-NODE-HOSTNAME INFO replication
   ghe-redis-cli --remote -h CURRENT-PRIMARY-HOSTNAME INFO replication
   ```

1. Confirm that the target reports `role:slave`, `master_link_status:up`, and `master_sync_in_progress:0`, and that its `master_host` identifies the current primary. Confirm that the current primary reports `role:master`.
1. Compare the target's `slave_repl_offset` with the current primary's `master_repl_offset`. The values must match. Repeat both commands and confirm that the offsets still match immediately before changing `redis-master`, checking the target first. The cluster status check reports replication freshness, not exact offsets, so it does not replace this comparison.

> [!WARNING]
> Stop here if you cannot obtain matching offsets or replication is unhealthy. Do not change `redis-master`. Keep maintenance mode enabled and contact {% data variables.contact.github_support %}.

## Verifying the Redis primary

After applying a primary change, verify both routing and replication before disabling maintenance mode.

1. Confirm that the configured Redis primary is the node you intended to promote and that the MySQL primary has not changed.

   ```shell
   ghe-config cluster.redis-master
   ghe-config cluster.mysql-master
   ```

1. Check cluster health and access to Redis through the default HAProxy endpoint.

   ```shell
   ghe-cluster-status -ev
   /usr/local/share/enterprise/ghe-cluster-status-redis -v
   ghe-redis-cli PING
   ```

   Confirm that the cluster checks are healthy, the new primary's entry reports `ok`, and `PING` returns `PONG`. The former primary must report `ok` and `replication is in sync`.

1. Check the Redis roles directly. Replace `NEW-PRIMARY-HOSTNAME` and `FORMER-PRIMARY-HOSTNAME` with the hostnames for this change.

   ```shell
   ghe-redis-cli --remote -h NEW-PRIMARY-HOSTNAME INFO replication
   ghe-redis-cli --remote -h FORMER-PRIMARY-HOSTNAME INFO replication
   ```

   The new primary must report `role:master`. The former primary must report `role:slave`, a `master_host` that identifies the new primary, `master_link_status:up`, and `master_sync_in_progress:0`. Repeat the replica check for every other Redis node.

1. Run the following commands again and compare the output with what you saved before this transfer.

   ```shell
   ghe-redis-cli INFO keyspace
   ghe-aqueduct status
   ```

> [!WARNING]
> Stop here if a check fails. Keep maintenance mode enabled. Do not point Redis back at another node without first checking that node's replication state.

## Moving Redis back to the original node

Because the original node remains a Redis replica, moving Redis back does not require restoring an old dump or re-adding the node. Promote it from its current replica state. Redis data can have changed since the move, so do not restore an old dump or configuration file.

1. Confirm that the original node still has `redis-server = true` and appears as a healthy replica in `/usr/local/share/enterprise/ghe-cluster-status-redis -v`. Leave its other roles, including `mysql-server`, unchanged.
1. During a scheduled maintenance window, enable maintenance mode and confirm that it is active.

   ```shell
   ghe-cluster-maintenance -s
   ghe-cluster-maintenance -q
   ```

1. Complete [Checking replication before promotion](#checking-replication-before-promotion), using the original node as `TARGET-NODE-HOSTNAME` and the dedicated node as the current primary. Wait for matching offsets.
1. On the retained cluster node where you manage `cluster.conf`, back up the current file. Change `redis-master` in the existing `[cluster]` section to the original node's hostname. Keep both nodes' `redis-server = true` settings and leave `mysql-master` unchanged.
1. Check and apply the configuration from that same node.

   ```shell
   ghe-cluster-config-check /data/user/common/cluster.conf
   ghe-cluster-config-apply
   ```

1. Complete [Verifying the Redis primary](#verifying-the-redis-primary). The original node must now be the primary, and the dedicated node must be a healthy replica. If a command or check fails, keep maintenance mode enabled and contact {% data variables.contact.github_support %}.
1. If you plan to remove the dedicated node, install the latest patch release for your feature release on every node first. Ensure that every node runs the same exact release, and wait for any upgrade or configuration run to finish.

1. Removing the dedicated node applies the cluster configuration and restarts Redis on the remaining nodes. From the primary MySQL node, run the following command, replacing `REDIS-NODE-HOSTNAME` with the dedicated node's hostname.

   ```shell
   ghe-remove-node REDIS-NODE-HOSTNAME
   ```

   After removal, confirm that the cluster is healthy. Do not remove the node while it is still the Redis primary. Retain the required Redis replicas for your cluster topology. For details about removal, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-remove-node).
1. Disable maintenance mode, then confirm that users can access the instance and background jobs resume.

   ```shell
   ghe-cluster-maintenance -u
   ```
