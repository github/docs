---
title: Disk usage at or near capacity
intro: 'When the root or data disk on {% data variables.location.product_location %} is full or nearly full, web requests can return errors and pushes can fail.'
versions:
  ghes: '*'
shortTitle: Disk usage near capacity
contentType: how-tos
category:
  - Troubleshoot your instance
---

> [!WARNING]
> Remove only the files described in this article. Deleting anything else can cause data loss or leave {% data variables.location.product_location %} unusable. Increasing the size of a disk requires downtime, so plan a maintenance window before you start.

## Symptoms

{% data variables.product.prodname_ghe_server %} stores data on two disks: the root disk, mounted at `/`, and the data disk, mounted at `/data/user`. When either disk is full, services can no longer write to it, and you may see any of the following.

* The web interface returns 500 errors.
* `git push` operations fail.
* Services fail to start, or stop responding after a restart.
* Configuration runs fail, including those triggered when you save settings in the {% data variables.enterprise.management_console %} or upgrade the instance. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config-apply).

Elasticsearch also responds to data disk usage before the disk is full. Once usage reaches 85%, Elasticsearch can stop allocating shards and the cluster health becomes red. A red cluster blocks configuration runs, which in turn blocks upgrades and starting or stopping replication on a replica. Keep data disk usage below 85%, and alert well before that point, treating 60% as a warning and 75% as critical. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/recommended-alert-thresholds#monitoring-storage).

## Causes

The root disk fills when files written by the operating system and by {% data variables.product.prodname_ghe_server %} services accumulate faster than they are cleared. The most common causes are rapidly growing log files (including rotated logs), and upgrade packages downloaded by automatic update checks or stored in the place they were manually downloaded to, for example `/home/admin/`.

The data disk fills as repository, package, and {% data variables.product.prodname_actions %} data grows beyond the capacity you provisioned.

If {% data variables.product.prodname_actions %} is enabled, MSSQL transaction logs are a common cause for the data disk filling up. In a high availability configuration the databases run in FULL recovery model, which replication requires, so log space is only made reusable when a backup runs. If backups are not running often enough, or are failing, the logs keep extending until they fill the data disk, or until a log reaches the 2 TB per file limit, which also stops runners registering.

## Confirming the problem

1. SSH into the administrative shell. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Check how much space is used on each local disk.

   ```shell
   df -h -t ext4
   ```

   Read the `Use%` column for the row mounted on `/`, which is the root disk, and the row mounted on `/data/user`, which is the data disk.

   ```text
   Filesystem            Size  Used Avail Use% Mounted on
   /dev/sda1              98G   93G  1.1G  99% /
   /dev/mapper/ghe_user  251G   50G  189G  21% /data/user
   ```

1. If both disks report free space but services still cannot write, check inode usage. A disk with free space can still be full of inodes.

   ```shell
   df -i -t ext4
   ```

1. Identify what is using the space, and where there are opportunities to free some up. This reports on both the root and data disks.

   ```shell
   ghe-check-disk-usage
   ```

## Resolving the problem

Work from the `ghe-check-disk-usage` output. Reclaiming space is quicker than resizing and needs no downtime, so try it first where the output gives you something to act on. If it does not, the instance needs more storage.

### Reclaiming space on the root disk

1. If the output listed upgrade packages under `/var/lib/ghe-updates`, remove any for a release you have already installed, or do not plan to install. Each package is several gigabytes. Replace `PACKAGE` with the file name.

   ```shell
   sudo rm /var/lib/ghe-updates/PACKAGE
   ```

1. If the output listed upgrade packages under `/home/admin`, or wherever else you downloaded them to manually, remove any you have already installed or no longer need. Replace `PACKAGE` with the path to each one.

   ```shell
   sudo rm PACKAGE
   ```

1. If the output listed large log files under `/var/log` ending in `.1` or `.gz`, remove them. These have already been rotated and are no longer being written to. Replace `LOG-FILE` with the path to each one.

   ```shell
   sudo rm LOG-FILE
   ```

   > [!WARNING]
   > Treat this as an emergency measure to free space quickly. It does not address whatever is generating the log volume, so if that continues, the rotated logs will return and the disk will fill again. If space is consumed again after you remove them, contact {% data variables.contact.github_support %} rather than repeating this step.

1. Confirm that the space has been reclaimed.

   ```shell
   df -h /
   ```

### Reclaiming space on the data disk

This applies only if {% data variables.product.prodname_actions %} is enabled, because MSSQL runs only in that case.

Check the MSSQL transaction log analysis in the `ghe-check-disk-usage` output, which lists the files ending in `.ldf` under `/data/user/mssql/data` and flags any that are unusually large. These logs grow when backups are not running often enough to free space inside them, and are a common cause of a full data disk.

If the output flags large transaction logs, see [AUTOTITLE](/admin/troubleshooting-your-instance/troubleshooting-github-actions-data-and-database-health/truncating-mssql-transaction-logs) for how to confirm the cause and truncate them.

### Increasing storage capacity

If `ghe-check-disk-usage` did not identify rotated log files, upgrade packages, old files under `/data/user/tmp`, or oversized MSSQL transaction logs, there is nothing safe to reclaim and the instance needs more storage. The same applies if usage returns to the same level shortly after you reclaim space.

Increase the size of the root or data disk by following [AUTOTITLE](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity).

## Preventing recurrence

Disk usage that reaches capacity once will usually do so again, so monitor both disks and act before they fill.

* Alert on root and data disk usage, so that you have time to respond before either disk fills.
* Review how much storage your usage actually needs rather than resizing to the minimum. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/troubleshooting-resource-allocation-problems).
* Reduce log volume at its source, so that rotated logs do not refill the root disk. Clients that poll the REST API frequently generate large volumes of log data, and webhooks are a more efficient alternative. For more information, see [AUTOTITLE](/webhooks/about-webhooks).
* If {% data variables.product.prodname_actions %} is enabled, run backups on a schedule and check that they are completing, so MSSQL transaction logs do not grow unchecked. For more information, see [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-the-backup-service).

## Contacting {% data variables.contact.github_support %}

If these steps do not resolve the problem, or you are unsure about any of them, contact {% data variables.contact.github_support %} rather than continuing. For more information, see [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).

If you have already opened a ticket, attaching a support bundle helps {% data variables.contact.github_support %} diagnose the problem faster. For more information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support).

> [!NOTE]
> Support bundles are written to the data disk by default. If the data disk is full, generating one may fail.

## Further reading

* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards)
* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs)
* [AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/enabling-automatic-update-checks)
* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/multiple-data-disks/configuring-multiple-data-disks)
