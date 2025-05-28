---
title: Creating and monitoring backups
shortTitle: Create and monitor backups
intro: 'Run manual backups, understand backup types, and monitor backup activity using the {% data variables.enterprise.management_console %} or command line.'
versions:
  ghes: '>= 3.17'
type: how_to
topics:
  - Backups
  - Monitoring
---

## About backup types

{% data variables.product.prodname_enterprise_backup_service %} supports two types of backups:

* **Full backups**: Capture a complete snapshot of all data. The first backup is always a full backup.
* **Incremental backups**: Include only changes since the last backup, significantly reducing backup time and storage usage.

The system automatically determines which type to create based on the schedule and backup history. For Git repositories and other file stores, hard links are used to ensure storage-efficient snapshots with full point-in-time recovery.

## Creating backups

Once the backup service is configured, it will automatically create backups based on your defined schedule. You can also trigger backups manually as needed.

### Running a manual backup

To create an on-demand backup—for example, before performing maintenance:

1. Connect to your instance via SSH as the `admin` user. See [AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).
1. Run the backup command:

   ```shell
   ghe-backup
   ```

### Command line backup utilities

You can also use these CLI tools for advanced backup management or troubleshooting:

* `ghe-backup`: Triggers a full or incremental backup, depending on the state.
* `ghe-prune-snapshots`: Deletes old snapshots based on your configured retention policy.

## Monitoring backups

You can monitor backup activity through the {% data variables.enterprise.management_console %} or from the command line.

### Viewing backup status in the {% data variables.enterprise.management_console %}

1. On the "Backup Service" page, navigate to the "Backup History" section.
1. Review the status of recent backups.

### Monitoring via SSH

To check backup progress or troubleshoot issues from the command line:

1. SSH into your instance as the `admin` user.
1. View the most recent backup log:

   ```shell
   cat /var/log/github-backup/backup-verbose-$(date +%Y%m%d).log
   ```

1. To check if a backup is currently running, look for this file:

   ```shell
   ls /data/user/common/backup_utils_in_progress
   ```

   If the file exists, a backup is currently running.
