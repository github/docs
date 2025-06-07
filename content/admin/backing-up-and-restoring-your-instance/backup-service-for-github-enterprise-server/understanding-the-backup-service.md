---
title: Understanding the backup service
shortTitle: Understand the backup service
intro: 'Answers to common questions about using the backup service with {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '>= 3.17'
topics:
  - Backups
---

## Does backing up or restoring impact performance?

Yes, but minimally—especially for production workloads.

* During backup and restore, Git background maintenance and storage jobs are paused for the affected stages (e.g., repositories, storage). This may result in a temporary backlog visible in instance metrics.
* For frequently updated repositories, performance may degrade if maintenance jobs are delayed for extended periods.
* Backup operations run with low CPU and I/O priority to minimize user impact. You may still observe short-term spikes in resource usage.

We recommend letting the maintenance backlog fully drain before starting another backup.

## How are MS SQL Server backups handled?

If {% data variables.product.prodname_actions %} is enabled, the service backs up the MS SQL Server database using a tiered cadence:

* **Full backup (F)**: Complete snapshot.
* **Differential backup (D)**: Changes since the last full backup.
* **Transaction log backup (T)**: Fine-grained changes since the last full or differential backup.

Backup timing is controlled by the `MSSQL Backup Cadence` setting in the {% data variables.enterprise.management_console %}. Over time, a snapshot includes:

* 1 full backup
* 0 or more differential backups
* 1 or more transaction log backups

**Backup timeline example**

```text
M---8:00--16:00---T---8:00--16:00---W... (timeline)

F-----------------F-----------------F... (full backup)
#-----D-----D-----#-----D-----D-----#... (differential backup)
T--T--T--T--T--T--T--T--T--T--T--T--T... (transaction log backup)
```

To optimize space, hard links point to previously created backups. Only new backup files are transferred during each run. Each new full or differential snapshot becomes the baseline for future transaction logs.

During restore, backups are replayed in the order: full, differential, and transaction logs.

## What is benchmark data?

Each snapshot includes a benchmark log in the `benchmarks/` directory. This log shows how long each backup step took and can help identify performance bottlenecks.

```text
ghe-backup-settings took 2s
ghe-export-authorized-keys took 0s
ghe-export-ssh-host-keys took 0s
ghe-backup-mysql-binary took 9s
ghe-backup-mysql took 9s
ghe-backup-minio took 0s
ghe-backup-redis took 1s
ghe-backup-es-audit-log took 1s
ghe-backup-repositories - Generating routes took 3s
ghe-backup-repositories - Fetching routes took 0s
ghe-backup-repositories - Processing routes took 0s
ghe-backup-pages - hostname took 1s
ghe-backup-pages took 1s
ghe-backup-storage - Generating routes took 2s
ghe-backup-storage - Fetching routes took 0s
ghe-backup-storage - Processing routes took 0s
ghe-backup-git-hooks took 0s
ghe-backup-es-rsync took 2s
```
