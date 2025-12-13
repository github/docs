---
title: Restoring with GitHub Actions enabled
shortTitle: Restore with Actions
intro: 'Learn how to prepare for and restore backups when {% data variables.product.prodname_actions %} is enabled with external blob storage.'
versions:
  ghes: '>= 3.17'
type: how_to
topics:
  - Backups
---

>[!IMPORTANT] Data stored in your configured external storage for {% data variables.product.prodname_actions %}—such as logs, artifacts, and other blobs—is not included in {% data variables.product.prodname_enterprise_backup_service %} snapshots. You must back up this data separately using your storage provider's tools and best practices.

When restoring an instance with {% data variables.product.prodname_actions %} enabled, follow these steps to preserve compatibility with existing Actions data:

1. Provision the target instance.
1. Preconfigure Actions storage:

   1. In the {% data variables.enterprise.management_console %}, enable {% data variables.product.prodname_actions %}.
   1. Enter the exact same external storage provider and credentials used in the original instance.
   1. Click **Save**.

      This step ensures the restored Actions metadata correctly references your existing external data.

1. Enable maintenance mode on the target instance.
1. Restore the backup:

   1. Run the ghe-restore command as described in Starting the restore operation.
   1. The restoration process includes Actions metadata but assumes external storage is already accessible and configured.

1. Finalize settings in the {% data variables.enterprise.management_console %}.
1. Re-register self-hosted runners:

   All runners must be re-registered with the restored instance, as previous registration tokens are invalid after a restore.

For more information, see [AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled).
