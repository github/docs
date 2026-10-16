---
title: Truncating MSSQL transaction logs
intro: 'When {% data variables.product.prodname_actions %} is enabled, MSSQL transaction logs grow until a backup truncates them. If backups are not running often enough, the logs can fill the data disk on {% data variables.location.product_location %}.'
versions:
  ghes: '*'
shortTitle: MSSQL transaction logs
contentType: how-tos
category:
  - Troubleshoot your instance
---

## Symptoms

MSSQL runs on {% data variables.location.product_location %} only when {% data variables.product.prodname_actions %} is enabled. When its transaction logs grow too large, you may see any of the following.

* Data disk usage climbs steadily and will not come down.
* MSSQL logs errors stating that the transaction log for a database is full.
* Self-hosted runners fail to register. A single transaction log cannot grow beyond 2 TB, and once it reaches that limit, writes to that database fail.
* MSSQL replication fails, or takes much longer than expected to complete.

## Causes

Each MSSQL database has a data file ending in `.mdf` and a transaction log ending in `_log.ldf`. Every change is written to the transaction log first.

In a high availability configuration, the databases run in the FULL recovery model, which replication requires. In that model, log space is only made reusable when a backup runs. If backups are not running often enough, or are failing, the log keeps extending the file to hold new records. It will grow until it fills the data disk, or until it reaches the 2 TB per file limit, whichever comes first.

## Confirming the problem

1. SSH into the administrative shell. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. List the MSSQL data directory.

   ```shell
   sudo ls -lth /data/user/mssql/data
   ```

1. Compare each `.mdf` data file against its matching `_log.ldf` transaction log, and identify which files are using the most space.

   A large `_log.ldf` file is not proof on its own that truncation is failing. Truncation makes space inside the file reusable, it does not shrink the file, so a log that has been truncated successfully can still be large. What the listing tells you is which files are consuming the disk.

   ```text
   -rw-r----- 1 mssql mssql 156G Apr 17 02:52 Mps_cf856db1-88f0-412a-b35d-8df36a8350ac_log.ldf
   -rw-r----- 1 mssql mssql  72M Apr 17 02:52 Mps_cf856db1-88f0-412a-b35d-8df36a8350ac.mdf
   -rw-r----- 1 mssql mssql 836M Apr 17 02:52 Pipelines_45f96584-c933-460c-8706-5d8928261202_log.ldf
   -rw-r----- 1 mssql mssql  72M Apr 17 02:52 Pipelines_45f96584-c933-460c-8706-5d8928261202.mdf
   -rw-r----- 1 mssql mssql 3.4G Apr 17 02:58 Mps_Configuration_log.ldf
   -rw-r----- 1 mssql mssql 136M Apr 17 02:58 Mps_Configuration.mdf
   ```

   Every log here is more than five times its data file, which is well past normal growth. In this example the first log file is 156 GB against a 72 MB data file, so it is the one filling the disk.

## Resolving the problem

The procedures below temporarily switch the databases to the SIMPLE recovery model, which allows the transaction logs to be truncated, then restores the FULL recovery model.

Follow the procedure that matches your environment. The two differ because replication relies on the FULL recovery model, so in a high availability configuration replication has to be disabled before the logs can be truncated.

### High availability environments

Use this procedure if {% data variables.location.product_location %} has one or more replicas. Run every command on the primary.

> [!WARNING]
> This procedure drops the availability group and deletes the MSSQL database files on each replica, which are then recreated by seeding. Seeding a large database takes time, and your replicas are not protecting you until it finishes.

1. Take a manual backup using your configured backup solution.

   ```shell
   ghe-backup
   ```

   If no backup solution is configured, export the MSSQL databases instead.

   ```shell
   ghe-export-mssql --compress --stats 1
   ```

1. Record the current file sizes, so you can confirm the reduction afterwards.

   ```shell
   sudo du --all --human-readable /data/user/mssql/data
   ```

1. Truncate the transaction logs. This disables MSSQL replication on every replica, drops the availability group, switches the databases to the SIMPLE recovery model, and shrinks the logs.

   ```shell
   sudo /usr/local/share/enterprise/ghe-mssql-shrinkfile --disable-mssql-replication --set-simple-recovery-model
   ```

1. Confirm the files are smaller.

   ```shell
   sudo du --all --human-readable /data/user/mssql/data
   ```

1. Check that the MSSQL containers are healthy.

   ```shell
   ghe-actions-check -s mssql
   ```

1. Re-enable MSSQL replication. This recreates the availability group and restores the FULL recovery model.

   ```shell
   ghe-cluster-each --serial --exclude --role mssql -- /usr/local/share/enterprise/ghe-repl-start-mssql
   ```

1. Monitor seeding until the replicas are in sync. Until seeding finishes, the replicas hold no MSSQL data.

   Unlike the steps above, run this on each replica rather than the primary.

   ```shell
   ghe-repl-status
   ```

### Standalone environments

Use this procedure if {% data variables.location.product_location %} has no replicas.

1. Take a manual backup using your configured backup solution.

   ```shell
   ghe-backup
   ```

   If no backup solution is configured, export the MSSQL databases instead.

   ```shell
   ghe-export-mssql --compress --stats 1
   ```

1. Record the current file sizes.

   ```shell
   sudo du --all --human-readable /data/user/mssql/data
   ```

1. Truncate the transaction logs. This switches the databases to the SIMPLE recovery model and shrinks the logs.

   ```shell
   sudo /usr/local/share/enterprise/ghe-mssql-shrinkfile --set-simple-recovery-model
   ```

1. Confirm the files are smaller.

   ```shell
   sudo du --all --human-readable /data/user/mssql/data
   ```

1. Check that the MSSQL containers are healthy.

   ```shell
   ghe-actions-check -s mssql
   ```

1. Take a fresh backup. This restores the FULL recovery model.

   ```shell
   ghe-export-mssql --compress --stats 1
   ```

   > [!WARNING]
   > On a standalone instance, the FULL recovery model is not restored automatically. You must take this backup. If the databases stay in the SIMPLE recovery model, transaction logs are truncated at every checkpoint, and replication will fail if you add a replica later.

## Preventing recurrence

Transaction logs are cleared by backups, so the logs stay a reasonable size only while backups run reliably.

* Run backups on a schedule, and check that they are completing. For more information, see [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-the-backup-service).
* Monitor data disk usage so that you see the logs growing before the disk fills. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/recommended-alert-thresholds).
* After any period where backups were failing, check the file sizes again, because the logs will have grown in the meantime.

## Contacting {% data variables.contact.github_support %}

If these steps do not resolve the problem, or you are unsure about any of them, contact {% data variables.contact.github_support %} rather than continuing. For more information, see [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).

If you have already opened a ticket, attaching a support bundle helps {% data variables.contact.github_support %} diagnose the problem faster. For more information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support).

## Further reading

* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity)
