---
title: Configuring multiple data disks
product: '{% data variables.product.prodname_ghe_server %}'
intro: 'You can configure additional data disks and use them to host data of different services.'
versions:
  ghes: '>= 3.19'
type: overview
topics:
  - Enterprise
---

> [!NOTE]
> The ability to configure and use multiple data disks is in {% data variables.release-phases.public_preview %} and subject to change. We would love to hear your feedback on the preview. You can share it with your customer success team, or leave a comment in the [community discussion post](https://github.com/orgs/community/discussions/181173). Our preferred option is sharing your feedback with your customer success team.

## Why introduce more disks to the GHES instance?

* Improved resource distribution:
  * Different services have unique disk requirements.
  * MySQL is mostly latency and IOPS sensitive.
  * Some resources (such as repositories) don't benefit as much from expensive block storage.
* Maximized VM limits:
  * A single disk is often not able to max out the limitations of an instance.
  * From a cost perspective, it is usually not feasible or worthwhile to run everything on the most expensive or fastest storage.
* Clearer separation between resource allocation and services:
  * Resources can be allocated in a targeted way, preventing critical services from being starved.
* Scaling:
  * Customers on both standalone and high-availability topologies can scale out as needed.
{% ifversion ghes > 3.19 %}
* Resiliency:
  * Isolating logs from the root disk enhances resiliency by preventing the volume of logs from flooding the root disk.
{%- endif %}

## Constraints

* Multi-data disks are only supported on Standalone and High Availability (HA) topologies.
* Once multiple data disks are configured in a deployment, this change cannot be undone for that deployment.
* Setting up multi-data disks and migrating data typically requires some downtime.
   * You can minimize this by configuring a replica with multi-data disks, replicating data from the primary, and then failing over to the replica.
   * If you are adding multi-data disks directly to the primary, expect a much longer downtime.
* During the public preview, multi-data disks should be used only in non-production environments.
{% ifversion ghes < 3.20 %}
* It is not recommended to migrate MySQL and repositories to the same disk.
* Currently, only MySQL and repositories can be migrated to additional disks.
{%- endif %}
{% ifversion ghes > 3.19 %}
* It is not recommended to migrate MySQL, repositories, system logs, or {% data variables.product.github %} logs to the same disk. Each additional disk should only contain one migration.
* Currently, only MySQL, repositories, system logs, and {% data variables.product.github %} logs can be migrated to additional disks.
* Rebooting the {% data variables.product.prodname_ghe_server %} node is required after migrating system logs to ensure it is working on a system level. It will take some time as config apply also runs during startup of the node.
{%- endif %}

## Resource recommendations

If you add disks that are as fast or faster than your current ones, you should see improved performance. Storage devices are typically measured by IOPS (Input/Output Operations Per Second), throughput, and latency. For MySQL, we recommend using a disk with lower latency and higher IOPS than your existing data disk. For repositories, choose a disk with higher IOPS and throughput than your current data disk.{% ifversion ghes > 3.19 %} For logs, we recommend using a disk with higher IOPS and throughput than your existing data disk to handle continuous write operations from logging activities. {%- endif %}

In high availability setups, it is best to use multi-data disks on both the primary and all replicas. Mixing configurations, where the primary has multi-data disks but the replica does not, is not recommended.

## Setting up multiple data disks and data paths

### Prerequisites

* We recommend taking a recent backup of your data before getting started.
* Create a test environment to try the feature.
  * During the public preview, we recommend **only** using the feature in a test environment.
  * Once the feature becomes generally available, we recommend testing the feature in a non-production environment before using it in production.

### Instructions

1. You can perform fresh installation of GHES or use an existing GHES instance. It should have the data disk configured at `/data/user`.

1. Once `/data/user` is set up, add additional block storage devices to the instance.

   Currently, `ghe-storage-find` chooses the first block storage for setting up `/data/user` based on the alphabetical order of the block storage path. This happens on the first boot of the GHES appliance.

   To have more control over which disk is used for `/data/user`, it is better to complete the initialization process with only one disk attached initially.

1. Initialize the multi-disk setup using the new block storage devices. To initialize multi-disk support, run `ghe-storage-multi-disk init`. On every reboot, the `ghe-multi-disk.service` will automatically remount the existing data disks at the correct paths.

   ``` shell copy
   /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme2n1 db
   ```

   ``` shell copy
   /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme3n1 git
   ```

  {% ifversion ghes > 3.19 %}

   ``` shell copy
   /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme4n1 systemlogs
   ```


   ``` shell copy
   /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme5n1 githublogs
   ```

  {%- endif %}

  {% ifversion ghes < 3.20 %}
  Please note that `/dev/nvme2n1` and `/dev/nvme3n1` are example paths only. They might not match the paths on your system. Similarly, `db` and `git` are examples. You may choose different names.
  {%- endif %}
  {% ifversion ghes > 3.19 %}
  Please note that `/dev/nvme2n1`, `/dev/nvme3n1`, `/dev/nvme4n1`, and `/dev/nvme5n1` are example paths only. They might not match the paths on your system. Similarly, `db`, `git`, `systemlogs`, and `githublogs` are examples. You may choose different names.
  {%- endif %}

1. Switch to maintenance mode.

   ``` shell copy
   gh es maintenance set --enabled true
   ```

1. Migrate your desired data paths.

   To migrate MySQL:

    ``` shell copy
    /usr/local/share/enterprise/ghe-storage-migrate-mysql db
    ```

   To migrate repositories:

    ``` shell copy
    /usr/local/share/enterprise/ghe-storage-migrate-repositories git
    ```

  {% ifversion ghes > 3.19 %}
   To migrate system logs:

    ``` shell copy
    /usr/local/share/enterprise/ghe-storage-migrate-logs systemlogs
    ```

   After migrating system logs, reboot the instance:

    ``` shell copy
    sudo reboot
    ```

   To migrate {% data variables.product.github %} logs:

    ``` shell copy
    /usr/local/share/enterprise/ghe-storage-migrate-github-logs githublogs
    ```
  {%- endif %}

1. Exit maintenance mode.

   ``` shell copy
   gh es maintenance set --enabled false
   ```

1. Test the instance for a period of time to make sure everything works as expected.
{% ifversion ghes < 3.20 %}
1. **Only after sufficient testing**, remove `/data/user/mysql-backup` and `/data/user/repositories-backup`.
{%- endif %}
{% ifversion ghes > 3.19 %}
1. **Only after sufficient testing**, remove `/data/user/mysql-backup`, `/data/user/repositories-backup`, `/var/log-backup`, `/data/github/current/log-backup`, and `/data/github/shared/log-backup`.
{%- endif %}

   Keeping these folders during testing allows you to roll back in an emergency. After sufficient testing, you should remove those backup folders to free up space.

### Guidance for high availability configurations

The following guidance helps reduce downtime in high availability (HA) topologies. If you are using a standalone topology, we do not have similar additional guidance at this time.

For HA topologies, the best approach is to stand up a new replica with multiple data disks configured, replicate data from the primary, and then promote the replica to primary. Migrating data to additional disks on the current primary is not recommended, as this process can lead to significant downtime.

1. Set up a new HA replica with better disks.
  {% ifversion ghes < 3.20 %}
   To plan for the data migration, use `du -sh /data/user/mysql` and `du -sh /data/user/repositories` on the primary to calculate disk space requirements for the new replica.
   {%- endif %}
   {% ifversion ghes > 3.19 %}
   To plan for the data migration, use `du -sh /data/user/mysql`, `du -sh /data/user/repositories`, `du -sh /var/log`, `du -sh /data/github/current/log`, and `du -sh /data/github/shared/log` on the primary to calculate disk space requirements for the new replica.
   {%- endif %}

1. Set up multi-disk on the new HA replica.
1. Allow the HA primary to replicate to the replica.
1. Follow the failover sequence as documented in [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/initiating-a-failover-to-your-replica-appliance).

While the replication process can take a long time, the advantage is that it runs in the background, so the actual disruption from maintenance mode is dramatically reduced.

## Example: configuring additional disks

This example demonstrates the required commands and outputs for disk initialization and data migration. Specifically, `/data/user/mysql` is migrated to `/data/multi-disk/db/mysql`, and `/data/user/repositories` is migrated to `/data/multi-disk/git/repositories`.{% ifversion ghes > 3.19 %} Additionally, system logs are migrated to `/data/multi-disk/systemlogs/log`, and {% data variables.product.github %} logs are migrated to `/data/multi-disk/githublogs`.{%- endif %}

{% ifversion ghes < 3.20 %}

```shell
admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk status
Checking system status...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk info
Dumping disk status and information...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme2n1 db
Starting initialization sequence for /dev/nvme2n1 at /data/multi-disk/db...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme3n1 git
Starting initialization sequence for /dev/nvme3n1 at /data/multi-disk/git...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-mysql db
Start MySQL migration to /data/multi-disk/db...
Running checks..
Error: maintenance mode must be enabled before being able to proceed.
ERROR: Last Command: return 1 LINE: 36 ghe-storage-migrate-mysql
Script exited with exit code: 1

admin@ghe-test-primary:~$ ghe-maintenance -s

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-mysql db
Start MySQL migration to /data/multi-disk/db...
Success: /data/user/mysql moved to /data/multi-disk/db/mysql
Script exited with exit code: 0

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-repositories git
Start repository migration to /data/multi-disk/git...
Success: /data/user/repositories moved to /data/multi-disk/git
Script exited with exit code: 0

admin@ghe-test-primary:~$ ghe-maintenance -u

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk status
Checking system status...
/data/user/mysql -> /data/multi-disk/db/mysql is correctly symlinked.
Repositories migration was detected...
/data/user/repositories -> /data/multi-disk/git/repositories is correctly symlinked.

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk info
Dumping disk status and information...
# Multi disk configuration /data/user/multi-disk-config:
DISK_DB="lvm"
DISK_GIT="lvm"
MYSQL_MIGRATION_PATH="/data/multi-disk/db/mysql"
REPOSITORIES_MIGRATION_PATH="/data/multi-disk/git/repositories"

admin@ghe-test-primary:~$ ls /var/log/multi-disk/
ghe-storage-init-db.log  ghe-storage-init-git.log  ghe-storage-migrate-mysql.log  ghe-storage-migrate-repositories.log

```

{%- endif %}

{% ifversion ghes > 3.19 %}

```shell
admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk status
Checking system status...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk info
Dumping disk status and information...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme2n1 db
Starting initialization sequence for /dev/nvme2n1 at /data/multi-disk/db...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme3n1 git
Starting initialization sequence for /dev/nvme3n1 at /data/multi-disk/git...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme4n1 systemlogs
Starting initialization sequence for /dev/nvme4n1 at /data/multi-disk/systemlogs...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk init /dev/nvme5n1 githublogs
Starting initialization sequence for /dev/nvme5n1 at /data/multi-disk/githublogs...

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-mysql db
Start MySQL migration to /data/multi-disk/db...
Running checks..
Error: maintenance mode must be enabled before being able to proceed.
ERROR: Last Command: return 1 LINE: 36 ghe-storage-migrate-mysql
Script exited with exit code: 1

admin@ghe-test-primary:~$ ghe-maintenance -s

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-mysql db
Start MySQL migration to /data/multi-disk/db...
Success: /data/user/mysql moved to /data/multi-disk/db/mysql
Script exited with exit code: 0

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-repositories git
Start repository migration to /data/multi-disk/git...
Success: /data/user/repositories moved to /data/multi-disk/git
Script exited with exit code: 0

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-logs systemlogs
Start log migration to /data/multi-disk/systemlogs...
Success: /var/log moved to /data/multi-disk/systemlogs/log
Please restart the GitHub Enterprise instance to apply the changes.
Script exited with exit code: 0

admin@ghe-test-primary:~$ sudo reboot

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-github-logs githublogs
Error: Config apply currently in progress. Please wait for it to finish...

# Wait for config apply to finish

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-github-logs githublogs
Start github log migration to /data/multi-disk/githublogs...
Success:  moved to /data/multi-disk/githublogs
Script exited with exit code: 0

admin@ghe-test-primary:~$ ghe-maintenance -u

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk status
Checking system status...
Multi disk setup is enabled...
Potential disks are automatically mounted on startup...
# Disk check
Detected multi disk path at /data/multi-disk/db...
/data/multi-disk/db is set up correctly for multi disk use.
Detected multi disk path at /data/multi-disk/git...
/data/multi-disk/git is set up correctly for multi disk use.
Detected multi disk path at /data/multi-disk/githublogs...
/data/multi-disk/githublogs is set up correctly for multi disk use.
Detected multi disk path at /data/multi-disk/systemlogs...
/data/multi-disk/systemlogs is set up correctly for multi disk use.
# Service migration check
MySQL migration was detected...
/data/user/mysql -> /data/multi-disk/db/mysql is correctly symlinked.
Repositories migration was detected...
/data/user/repositories -> /data/multi-disk/git/repositories is correctly symlinked.
GitHub current log migration was detected...
/data/github/current/log -> /data/multi-disk/githublogs/github-current-log is correctly symlinked.
GitHub shared log migration was detected...
/data/github/shared/log -> /data/multi-disk/githublogs/github-shared-log is correctly symlinked.
Logs migration was detected...
/var/log -> /data/multi-disk/systemlogs/log is correctly symlinked.

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-multi-disk info
Dumping disk status and information...
# Multi disk configuration /data/user/multi-disk-config:
DISK_DB="lvm"
DISK_GIT="lvm"
DISK_SYSTEMLOGS="lvm"
DISK_GITHUBLOGS="lvm"
MYSQL_MIGRATION_PATH="/data/multi-disk/db/mysql"
REPOSITORIES_MIGRATION_PATH="/data/multi-disk/git/repositories"
# Multi-disk logs path is stored in /etc/multi-disk/ghe-multi-disk-logs-mount
GHCURRENT_LOG_MIGRATION_PATH="/data/multi-disk/githublogs/github-current-log"
GHSHARED_LOG_MIGRATION_PATH="/data/multi-disk/githublogs/github-shared-log"
ENABLE_MULTI_DISK_LOGS_MOUNT=true

LOGS_MIGRATION_PATH=/data/multi-disk/systemlogs/log

admin@ghe-test-primary:~$ ls /var/log/multi-disk/
ghe-storage-init-db.log   ghe-storage-init-git.log    ghe-storage-migrate-github-logs.log   ghe-storage-migrate-mysql.log   ghe-storage-init-githublogs.log   ghe-storage-init-systemlogs.log   ghe-storage-migrate-logs.log    ghe-storage-migrate-repositories.log

```

{%- endif %}

## Hygiene checks

Both `/usr/local/share/enterprise/ghe-storage-multi-disk status` and `/usr/local/share/enterprise/ghe-storage-multi-disk info` are helpful for checking your setup.

To view the current multi-disk configuration, use:

{% ifversion ghes < 3.20 %}

```shell
$ cat /data/user/multi-disk-config
DISK_DB="lvm"
DISK_GIT="lvm"
MYSQL_MIGRATION_PATH="/data/multi-disk/db/mysql"
REPOSITORIES_MIGRATION_PATH="/data/multi-disk/git/repositories"
```

{%- endif %}
{% ifversion ghes > 3.19 %}

```shell
$ cat /data/user/multi-disk-config
DISK_DB="lvm"
DISK_GIT="lvm"
DISK_SYSTEMLOGS="lvm"
DISK_GITHUBLOGS="lvm"
MYSQL_MIGRATION_PATH="/data/multi-disk/db/mysql"
REPOSITORIES_MIGRATION_PATH="/data/multi-disk/git/repositories"
# Multi-disk logs path is stored in /etc/multi-disk/ghe-multi-disk-logs-mount
GHCURRENT_LOG_MIGRATION_PATH="/data/multi-disk/githublogs/github-current-log"
GHSHARED_LOG_MIGRATION_PATH="/data/multi-disk/githublogs/github-shared-log"

$ cat /etc/multi-disk/ghe-multi-disk-logs-mount
ENABLE_MULTI_DISK_LOGS_MOUNT=true

LOGS_MIGRATION_PATH=/data/multi-disk/systemlogs/log
```

{%- endif %}

To review multi-disk logs, including disk initialization and migration events, run:

{% ifversion ghes < 3.20 %}

```shell
$ ls -l /var/log/multi-disk/
total 56
-rw-r--r-- 1 root root  2398 Mar  3 13:22 ghe-storage-init-db.log
-rw-r--r-- 1 root root  2497 Mar  3 13:23 ghe-storage-init-git.log
-rw-r--r-- 1 root root  2201 Mar  3 13:28 ghe-storage-migrate-mysql.log
-rw-r--r-- 1 root root 37296 Mar  3 13:30 ghe-storage-migrate-repositories.log
```

{%- endif %}
{% ifversion ghes > 3.19 %}

```shell
$ ls -l /var/log/multi-disk/
total 64
-rw-r--r-- 1 root root  2115 Feb 13 16:32 ghe-storage-init-db.log
-rw-r--r-- 1 root root  2478 Feb 13 16:36 ghe-storage-init-githublogs.log
-rw-r--r-- 1 root root  2114 Feb 13 16:36 ghe-storage-init-git.log
-rw-r--r-- 1 root root  2378 Feb 13 16:36 ghe-storage-init-systemlogs.log
-rw-r--r-- 1 root root 20450 Feb 13 17:27 ghe-storage-migrate-github-logs.log
-rw-r--r-- 1 root root  1053 Feb 13 17:15 ghe-storage-migrate-logs.log
-rw-r--r-- 1 root root  2460 Feb 13 16:38 ghe-storage-migrate-mysql.log
-rw-r--r-- 1 root root 19011 Feb 13 16:42 ghe-storage-migrate-repositories.log
```

{%- endif %}

## Commands for managing multiple disks

These commands make it possible to add multiple disks and migrate specific services or folder paths to those disks. The original folder paths are maintained and kept static. Other services are unaware that anything has changed. The static folder paths are symlinked to the newly migrated paths.

The commands include:

* ghe-storage-multi-disk
  * `status`
  * `init`
  * `info`
  * `mount`
  * `start-services` (only recommended for debugging)
  * `stop-services` (only recommended for debugging)
* ghe-storage-migrate-repositories
  * Migrates `/data/user/repositories` to any disk path created using `ghe-storage-multi-disk init`.
* ghe-storage-migrate-mysql
  * Migrates `/data/user/mysql` to any disk path created using `ghe-storage-multi-disk init`.
{% ifversion ghes > 3.19 %}
* ghe-storage-migrate-logs
  * Migrates `/var/log` to any disk path created using `ghe-storage-multi-disk init`.
* ghe-storage-migrate-github-logs
  * Migrates `/data/github/current/log` and `/data/github/shared/log` to any disk path created using `ghe-storage-multi-disk init`.
{%- endif %}
