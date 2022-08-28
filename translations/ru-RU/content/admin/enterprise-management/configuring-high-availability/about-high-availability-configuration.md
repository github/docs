---
title: About high availability configuration
intro: 'In a high availability configuration, a fully redundant secondary {% data variables.product.prodname_ghe_server %} appliance is kept in sync with the primary appliance through replication of all major datastores.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
---

When you configure high availability, there is an automated setup of one-way, asynchronous replication of all datastores (Git repositories, MySQL, Redis, and Elasticsearch) from the primary to the replica appliance.

{% data variables.product.prodname_ghe_server %} supports an active/passive configuration, where the replica appliance runs as a standby with database services running in replication mode but application services stopped.

{% data reusables.enterprise_installation.replica-limit %}

### Targeted failure scenarios

Use a high availability configuration for protection against:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

A high availability configuration is not a good solution for:

  - **Scaling-out**. While you can distribute traffic geographically using geo-replication, the performance of writes is limited to the speed and availability of the primary appliance. For more information, see "[About geo-replication](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)."
  - **Backing up your primary appliance**. A high availability replica does not replace off-site backups in your disaster recovery plan. Some forms of data corruption or loss may be replicated immediately from the primary to the replica. To ensure safe rollback to a stable past state, you must perform regular backups with historical snapshots.
  - **Zero downtime upgrades**. To prevent data loss and split-brain situations in controlled promotion scenarios, place the primary appliance in maintenance mode and wait for all writes to complete before promoting the replica.

### Network traffic failover strategies

During failover, you must separately configure and manage redirecting network traffic from the primary to the replica.

#### DNS failover

With DNS failover, use short TTL values in the DNS records that point to the primary {% data variables.product.prodname_ghe_server %} appliance. We recommend a TTL between 60 seconds and five minutes.

During failover, you must place the primary into maintenance mode and redirect its DNS records to the replica appliance's IP address. The time needed to redirect traffic from primary to replica will depend on the TTL configuration and time required to update the DNS records.

If you are using geo-replication, you must configure Geo DNS to direct traffic to the nearest replica. For more information, see "[About geo-replication](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)."

#### Load balancer

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

During failover, you must place the primary appliance into maintenance mode. You can configure the load balancer to automatically detect when the replica has been promoted to primary, or it may require a manual configuration change. You must manually promote the replica to primary before it will respond to user traffic. For more information, see "[Using {% data variables.product.prodname_ghe_server %} with a load balancer](/enterprise/{{ currentVersion }}/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)."

{% data reusables.enterprise_installation.monitoring-replicas %}

### Utilities for replication management

To manage replication on {% data variables.product.prodname_ghe_server %}, use these command line utilities by connecting to the replica appliance using SSH.

#### ghe-repl-setup

The `ghe-repl-setup` command puts a {% data variables.product.prodname_ghe_server %} appliance in replica standby mode.

 - An encrypted WireGuard VPN tunnel is configured for communication between the two appliances.
 - Database services are configured for replication and started.
 - Application services are disabled. Attempts to access the replica appliance over HTTP, Git, or other supported protocols will result in an "appliance in replica mode" maintenance page or error message.

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Run `ghe-repl-start' to start replicating against the newly configured primary.
```

#### ghe-repl-start

The `ghe-repl-start` command turns on active replication of all datastores.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
Use `ghe-repl-status' to monitor replication health and progress.
```

#### ghe-repl-status

The `ghe-repl-status` command returns an `OK`, `WARNING` or `CRITICAL` status for each datastore replication stream. When any of the replication channels are in a `WARNING` state, the command will exit with the code `1`. Similarly, when any of the channels are in a `CRITICAL` state, the command will exit with the code `2`.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

The `-v` and `-vv` options give details about each datastore's replication state:

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

#### ghe-repl-stop

The `ghe-repl-stop` command temporarily disables replication for all datastores and stops the replication services. To resume replication, use the [ghe-repl-start](#ghe-repl-start) command.

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

#### ghe-repl-promote

The `ghe-repl-promote` command disables replication and converts the replica appliance to a primary. The appliance is configured with the same settings as the original primary and all services are enabled.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

#### ghe-repl-teardown

The `ghe-repl-teardown` command disables replication mode completely, removing the replica configuration.

### Дополнительная литература

- "[Creating a high availability replica](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica)"
