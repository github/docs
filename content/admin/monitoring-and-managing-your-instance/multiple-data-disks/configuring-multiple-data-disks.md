---
title: Configuring multiple data disks
product: '{% data variables.product.prodname_ghe_server %}'
intro: 'You can configure additional data disks and use them to host MySQL and repositories data.'
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

## Constraints

* Multi-data disks are only supported on Standalone and High Availability (HA) topologies.
* Once multiple data disks are configured in a deployment, this change cannot be undone for that deployment.
* Setting up multi-data disks and migrating data typically requires some downtime.
   * You can minimize this by configuring a replica with multi-data disks, replicating data from the primary, and then failing over to the replica.
   * If you are adding multi-data disks directly to the primary, expect a much longer downtime.
* During the public preview, multi-data disks should be used only in non-production environments.
* It is not recommended to migrate MySQL and repositories to the same disk.
* Currently, only MySQL and repositories can be migrated to additional disks.

## Resource recommendations

If you add disks that are as fast or faster than your current ones, you should see improved performance. Storage devices are typically measured by IOPS (Input/Output Operations Per Second), throughput, and latency. For MySQL, we recommend using a disk with lower latency and higher IOPS than your existing data disk. For repositories, choose a disk with higher IOPS and throughput than your current data disk.

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

  Please note that `/dev/nvme2n1` and `/dev/nvme3n1` are example paths only. They might not match the paths on your system. Similarly, `db` and `git` are examples. You may choose different names.

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

1. Exit maintenance mode.

   ``` shell copy
   gh es maintenance set --enabled false
   ```

1. Test the instance for a period of time to make sure everything works as expected.
1. **Only after sufficient testing**, remove `/data/user/mysql-backup` and `/data/user/repositories-backup`.

   Keeping these folders during testing allows you to roll back in an emergency. After sufficient testing, you should remove those backup folders to free up space.

### Guidance for high availability configurations

The following guidance helps reduce downtime in high availability (HA) topologies. If you are using a standalone topology, we do not have similar additional guidance at this time.

For HA topologies, the best approach is to stand up a new replica with multiple data disks configured, replicate data from the primary, and then promote the replica to primary. Migrating data to additional disks on the current primary is not recommended, as this process can lead to significant downtime.

1. Set up a new HA replica with better disks.

   To plan for the data migration, use `du -sh /data/user/mysql` and `du -sh /data/user/repositories` on the primary to calculate disk space requirements for the new replica.

1. Set up multi-disk on the new HA replica.
1. Allow the HA primary to replicate to the replica.
1. Follow the failover sequence as documented in [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/initiating-a-failover-to-your-replica-appliance).

While the replication process can take a long time, the advantage is that it runs in the background, so the actual disruption from maintenance mode is dramatically reduced.

## Example: configuring two additional disks

This example demonstrates the required commands and outputs for disk initialization and data migration. Specifically, `/data/user/mysql` is migrated to `/data/multi-disk/db/mysql`, and `/data/user/repositories` is migrated to `/data/multi-disk/git/repositories`.

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
Start mysql migration to /data/multi-disk/db...
Running checks..
Error: maintenance mode must be enabled before being able to proceed.
ERROR: Last Command: return 1 LINE: 36 ghe-storage-migrate-mysql
Script exited with exit code: 1

admin@ghe-test-primary:~$ ghe-maintenance -s

admin@ghe-test-primary:~$ /usr/local/share/enterprise/ghe-storage-migrate-mysql db
Start repository migration to /data/multi-disk/db...
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

## Hygiene checks

Both `/usr/local/share/enterprise/ghe-storage-multi-disk status` and `/usr/local/share/enterprise/ghe-storage-multi-disk info` are helpful for checking your setup.

To view the current multi-disk configuration, use:

```shell
$ cat /data/user/multi-disk-config
DISK_DB="lvm"
DISK_GIT="lvm"
MYSQL_MIGRATION_PATH="/data/multi-disk/db/mysql"
REPOSITORIES_MIGRATION_PATH="/data/multi-disk/git/repositories"
```

To review multi-disk logs, including disk initialization and migration events, run:

```shell
$ ls -l /var/log/multi-disk/
total 56
-rw-r--r-- 1 root root  2398 Mar  3 13:22 ghe-storage-init-db.log
-rw-r--r-- 1 root root  2497 Mar  3 13:23 ghe-storage-init-git.log
-rw-r--r-- 1 root root  2201 Mar  3 13:28 ghe-storage-migrate-mysql.log
-rw-r--r-- 1 root root 37296 Mar  3 13:30 ghe-storage-migrate-repositories.log
```

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
