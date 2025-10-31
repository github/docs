---
title: Restoring from a backup
shortTitle: Restore from backup
intro: 'Restore a {% data variables.product.prodname_ghe_server %} instance using a previously created backup snapshot.'
versions:
  ghes: '>= 3.17'
type: how_to
topics:
  - Backups
---

You can restore a {% data variables.product.prodname_ghe_server %} instance from a backup using the command line. The backup service supports full instance restoration, including configuration and user data.

>[!WARNING] Restoring from a backup will **overwrite all existing data** on your instance. This operation cannot be undone.

## Snapshot version requirements

You can only restore a snapshot if it's from at most two feature versions behind the version of the target instance.

For example:

* A snapshot from version 3.17 can be restored to a target running 3.17.x, 3.18.x, or 3.19.x.
* You cannot restore a 3.17 snapshot to 3.20 — that’s more than two versions ahead.

You also can’t restore from a newer version to an older one. For example, trying to restore a 3.18 snapshot to a 3.17 instance will fail with: `Error: Snapshot can not be restored to an older release of GitHub Enterprise Server.`

## Prerequisites

Before restoring a backup:

1. **Enable maintenance mode** on the target instance. See [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).
1. **Verify access** to the backup storage containing the snapshot.
1. **Pause interfering services** — if using High Availability (HA), make sure replication is stopped.
1. **Prepare for {% data variables.product.prodname_actions %}** — if enabled, ensure the target instance is configured with the correct external storage. See [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/backup-service-for-github-enterprise-server/restoring-with-github-actions-enabled) for details.

## Starting the restore operation

To restore from a snapshot:

1. SSH into the target instance as the `admin` user.
1. Run one of the following commands:

   * Restore the latest snapshot:

     ```shell
     ghe-restore
     ```

   * Restore a specific snapshot. Replace `<SNAPSHOT_TIMESTAMP>` with the timestamp of the snapshot you want to restore (e.g., `YYYYMMDDTHHMMSS`).

     ```shell
     ghe-restore -s <SNAPSHOT_TIMESTAMP>
     ```

   * (Optional) Force overwrite of configuration, certificates, and license data:

     ```shell
     ghe-restore -c          # Latest snapshot
     ghe-restore -s <SNAPSHOT_TIMESTAMP> -c  # Specific snapshot
     ```

1. **Finalize in {% data variables.enterprise.management_console %}:**

    * Review all configuration settings (network, auth, TLS, etc.).
    * Click **Save settings** to apply them and start services.
    * The instance is not fully operational until this step is complete.

1. **Validate the restored instance** to ensure everything works as expected.
1. **If using HA**, complete the restore on a standalone instance first. Then reconfigure HA.

   * If you run into sync issues (e.g., stale UUIDs in `ghe-repl-status`), run `ghe-repl-teardown`.
   * For help, contact {% data variables.contact.github_support %}.

1. **Re-register self-hosted {% data variables.product.prodname_actions %} runners**, as restore invalidates previous tokens.

## Snapshot rotation and retention

Snapshots are automatically pruned based on your retention settings:

* Only the most recent n snapshots are kept (as configured).
* Older snapshots are deleted after each successful backup.
* Snapshots are named using timestamps (`YYYYMMDDTHHMMSS`) for easy reference.
* Hard links are used to store unchanged files efficiently while preserving full restore capability.

## Troubleshooting restoration failures

If a restore operation fails, check:

* **Backup completeness** – Make sure the snapshot wasn't interrupted or corrupted.
* **Storage access** – Verify the instance can mount and read the backup volume.
* **Version mismatch** – Confirm the snapshot version is compatible with the target instance.
* **Logs** – Review `/var/log/github-backup/restore-verbose-[timestamp].log` for errors.

If the {% data variables.enterprise.management_console %} shows a generic failure, SSH into the instance to access detailed logs.
