---
title: Configuring the backup service
shortTitle: Configure the backup service
intro: 'Enable and configure the built-in backup service in the {% data variables.enterprise.management_console %}, and optionally migrate legacy settings.'
versions:
  ghes: '>=3.17'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
---

Before configuring the backup service, ensure you have:

* A {% data variables.product.prodname_ghe_server %} instance running version 3.17 or later.
* A dedicated storage volume provisioned and managed for use as the backup target.

## Storage requirements

To ensure reliable and performant backups, your storage must meet the following requirements:

* **Capacity:** Allocate at least five times the amount of storage used by your primary {% data variables.product.github %} appliance disk. This accounts for historical snapshots and future growth.
* **Filesystem support:** The backup service uses hard links for efficient storage, and your {% data variables.product.github %} instance uses symbolic links. The backup target must support both symbolic and hard links, and it must use a case-sensitive filesystem to prevent conflicts.

  You can test whether your filesystem supports hardlinking symbolic links by running:

    ```shell
    touch file
    ln -s file symlink
    ln symlink hardlink
    ls -la
    ```

    If the `ln symlink hardlink` command completes successfully, the filesystem is supported.

* **Performance:** Use high-performance storage with low latency and high IOPS to avoid slow backups and restores.
* **NFS:** Avoid using an NFS mount for the backup directory (typically `/data/backup`), as this can lead to timeouts and degraded performance.

## Configuring the backup service

You can configure {% data variables.product.prodname_enterprise_backup_service %} through the {% data variables.enterprise.management_console %}.

### Setting up the backup target

Before configuring the service, you must prepare the storage volume where backups will be stored.

#### Using a new block device

If you're using a dedicated block device as your backup target, you need to initialize it via SSH before proceeding in the {% data variables.enterprise.management_console %}. This process will **format the device and erase all existing data**.

1. Connect to your instance via SSH as the `admin` user. See [AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).
1. Attach your backup block device to the instance.
1. Identify the device name using `lsblk` to list available block devices. Make sure you select the correct device to avoid data loss.

    ```shell
    lsblk
    ```

1. Run the initialization command, replacing `YOUR_DEVICE_NAME` with the actual device name identified in the previous step.

    >[!WARNING] This command will permanently erase all data on the specified device. Double-check the device name and back up any important data before proceeding.

    ```shell
    /usr/local/share/enterprise/ghe-storage-init-backup /dev/YOUR_DEVICE_NAME
    ```

    This command:
    * Formats the device (erases all data).
    * Prepares it for use by the backup service.
    * Sets it to mount automatically at `/data/backup` on boot.

#### Reusing a previously initialized disk

If the device was already initialized using `ghe-storage-init-backup`, you can reuse it without reformatting:

1. Connect to your instance via SSH as the `admin` user.
1. Attach the disk to the instance.
1. Create the mount point, if it doesn't exist.

   ```shell
   sudo mkdir -p /data/backup
   ```

1. Enable and start the mount service.

   ```shell
   sudo systemctl enable ghe-backup-disk.service
   sudo systemctl start ghe-backup-disk.service
   ```

   This will mount the device at `/data/backup` and ensures it's mounted automatically in the future.

### Configuring backup settings

After the backup target is mounted, the Backup Service page will become available in the {% data variables.enterprise.management_console %}. If you're using a block device, this requires completing the initialization or mount steps above.

>[!NOTE] The settings page won’t appear until the backup storage is mounted at `/data/backup`.

If you're migrating from {% data variables.product.prodname_enterprise_backup_utilities %}, you can transfer your configuration in one of two ways:

1. **Manual configuration**: Recreate your settings directly in the {% data variables.enterprise.management_console %}.
1. **Command-line migration**: SSH into your instance, copy your `backup.config` file from backup-utils, and run:

   ```shell
   ghe-migrate-backup-config /path/to/your/backup.config
   ```

   Use the `--dry-run` flag to preview changes without applying them.

### Scheduling automated backups

Once the service is configured, you can define a backup schedule.

1. In the {% data variables.enterprise.management_console %}, open the "Backup Service" page.
1. In the "Backup Schedule" section, choose a predefined schedule (e.g., Daily) or enter a custom cron expression.
1. Click **Save** to apply the changes.

The first run will be a full backup. Future runs will be incremental. If a new backup attempt starts while a previous one is still running, it may be skipped or fail. In that case, adjust the schedule to avoid overlap.
