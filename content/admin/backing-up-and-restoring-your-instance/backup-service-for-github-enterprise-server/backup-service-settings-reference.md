---
title: Backup service settings reference
shortTitle: Backup settings
intro: 'Reference for all configurable options available in the Backup Service section of the {% data variables.enterprise.management_console %}.'
versions:
  ghes: '>= 3.17'
type: reference
topics:
  - Backups
---

You can configure the following options in the "Backup Service" section of the {% data variables.enterprise.management_console %}.

## Snapshot retention

* **Number of snapshots**: Sets how many backup snapshots to retain (default: `10`). Older snapshots are automatically pruned after each successful backup.

## Restore options

* **Skip audit logs restore**: Excludes audit logs during a restore.
* **Restore Management Console password**: If enabled, restores the root site admin password from snapshot data (default: `true`).

## Performance tuning

* **Process priority**:

  * **Nice**: Sets the CPU scheduling priority (`nice -n 19` by default).
  * **Ionice**: Sets the I/O scheduling priority (`ionice -c 3` by default).

* **Rsync compression**: Uses compression for `rsync` transfers during backup and restore, reducing bandwidth usage.

## MSSQL backup schedule

* **MSSQL backup cadence**: Sets the schedule for full, differential, and transaction log backups, in minutes (default: `10080,1440,15`).

## Backup content

* **Include Pages**: Adds {% data variables.product.prodname_pages %} data to snapshots.
* **Skip search indices**: Excludes search index data from snapshots.

## Parallelization settings

* **Enable parallel jobs**: Allows multiple backup jobs to run concurrently.
* **Max jobs**: Limits the total number of parallel backup jobs.
* **Max rsync jobs**: Limits the number of parallel `rsync` jobs.
* **Max system load**: Sets a load limit to throttle parallel processing when needed.
