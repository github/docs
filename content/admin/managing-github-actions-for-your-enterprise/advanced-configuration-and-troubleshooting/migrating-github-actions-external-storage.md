---
title: Migrating GitHub Actions external storage
shortTitle: Migrate Actions external storage
intro: 'Migrate {% data variables.product.prodname_actions %} external storage within the same provider to consolidate accounts, meet residency requirements, or reorganize storage tenancy while keeping existing workflow logs and artifacts accessible.'
permissions: Site administrators can configure {% data variables.product.prodname_actions %} external storage
versions:
  ghes: '*'
contentType: how-tos
category:
  - Enable GitHub features for your enterprise
---

## About migrating {% data variables.product.prodname_actions %} external storage

You can migrate {% data variables.product.prodname_actions %} external storage to a new bucket, account, or region on the same provider when consolidating cloud accounts, meeting residency requirements, or reorganizing storage tenancy.

The migration works because {% data variables.product.prodname_actions %} identifies stored objects by their key (path) within a bucket or container, not by the bucket or account name. As long as you preserve the internal key layout and update your configuration to point at the new location, existing workflow logs and artifacts remain accessible without interruption.

## Considerations

Before you begin, review the following constraints. Each one shapes the migration approach and several can cause data loss if ignored.

* **Same provider only.** This procedure supports migrations within the same storage provider type, for example, Amazon S3 to Amazon S3, Azure Blob to Azure Blob, Google Cloud Storage to Google Cloud Storage, or MinIO to MinIO. Cross-provider migrations are not covered here. For a cross-provider migration, contact {% data variables.contact.contact_ent_support %}.
* **Do not change the authentication method during migration.** If you currently use credentials-based authentication, your destination configuration must also use credentials-based authentication. The same applies to OpenID Connect. Switching authentication method during a storage configuration change may result in data loss. For more information, see [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/updating-the-credentials-for-github-actions-storage). To change authentication method, complete the storage migration first, then plan a separate change.
* **Key layout inside the bucket or container must be preserved.** Object keys (paths) inside your source bucket or container must remain identical on the destination. The destination bucket name, storage account, region, and other connection parameters can change. You update these in the {% data variables.enterprise.management_console %} at cutover. Most native provider copy tools preserve key layout automatically when copying an entire bucket or container, but verify before cutover that the destination matches the source.
* **{% data variables.product.prodname_registry %} has additional constraints.** If you also use {% data variables.product.prodname_registry %}, see the [{% data variables.product.prodname_registry %} considerations](#github-packages-considerations) section below before starting.

## Prerequisites

* You have site administrator access to {% data variables.location.product_location %}.
* You have provisioned the destination storage on the same provider as the source, in the desired account, region, or tenancy.
* The destination is empty.
* The destination grants {% data variables.location.product_location %} the same permissions as the source. For the required permissions, see the relevant configuration article:
   * [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage)
   * [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
   * [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage)
   * [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)
* You have administrative credentials for both the source and the destination storage, sufficient to read all source objects and write to the destination.
* You have a recent backup of {% data variables.location.product_location %}. For more information, see [AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance).
* You have rehearsed the migration in a staging environment. See the next section.

## Rehearsing the migration in a staging environment

Before performing the migration against production, rehearse the full procedure on a staging instance. Provision a staging {% data variables.product.prodname_ghe_server %} instance from a recent production backup, point it at a throwaway destination that mirrors the intended production destination, and run every step of this article end to end. For more information, see [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance) and [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/using-a-staging-environment).

A staging rehearsal validates that:

* Provider-side permissions, network access, and policies on the destination are correct.
* The copy tool you have chosen completes successfully against representative data volumes.
* The expected object count and total size match between source and destination.
* Existing workflow run logs and artifacts are retrievable through the UI after cutover.

> [!WARNING]
> Your staging instance must use different storage from your production instance. If you do not change the storage configuration, the staging instance may write into your production storage and cause data loss. For more information, see [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/using-a-staging-environment#configuring-storage).

## Performing the migration

Work through the following steps in order. {% data variables.product.prodname_actions %} can continue serving traffic until you enable maintenance mode.

1. **Perform the initial data copy.** Copy all objects from the source to the destination using a provider-native tool. New objects written to the source during the copy will be captured by the final delta sync after cutover.

   Use the example commands as a starting point. Refer to the upstream documentation for the full set of options, including credentials, encryption, and throughput tuning.

   For **Amazon S3**, use [`aws s3 sync`](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html) from the AWS Command Line Interface. Run a dry run first to validate the operation, then perform the copy.

   ```shell
   aws s3 sync s3://SOURCE-BUCKET s3://DESTINATION-BUCKET --dryrun
   aws s3 sync s3://SOURCE-BUCKET s3://DESTINATION-BUCKET
   ```

   For **Azure Blob Storage**, use [`azcopy copy`](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs-copy) with a shared access signature on the source.

   ```shell
   azcopy copy 'https://SOURCE-STORAGE-ACCOUNT-NAME.blob.core.windows.net/CONTAINER?SAS-TOKEN' 'https://DESTINATION-STORAGE-ACCOUNT-NAME.blob.core.windows.net/CONTAINER' --recursive
   ```

   For **Google Cloud Storage**, use [`gcloud storage rsync`](https://cloud.google.com/sdk/gcloud/reference/storage/rsync) from the Google Cloud Command Line Interface.

   ```shell
   gcloud storage rsync --recursive gs://SOURCE-BUCKET gs://DESTINATION-BUCKET
   ```

   For **MinIO**, use [`mc mirror`](https://min.io/docs/minio/linux/reference/minio-mc/mc-mirror.html) from the MinIO Client.

   ```shell
   mc mirror SOURCE-ALIAS/SOURCE-BUCKET DESTINATION-ALIAS/DESTINATION-BUCKET
   ```

   After the copy completes, verify the object count and total size on the destination using your provider's standard listing tools. Investigate any discrepancy before continuing.

1. **Enable maintenance mode.** To prevent new objects from being written to the source during cutover, enable maintenance mode on {% data variables.location.product_location %}. This briefly takes the instance offline for end users. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

1. **Perform the final delta sync.** With maintenance mode enabled, run the same copy command from the initial copy step again. This captures any objects that were written to the source after the initial copy started.

   For example, for Amazon S3:

   ```shell
   aws s3 sync s3://SOURCE-BUCKET s3://DESTINATION-BUCKET
   ```

1. **Update the storage configuration.** Update {% data variables.location.product_location %} to point at the new storage location. Keep the same authentication method as before.

   1. Sign in to the {% data variables.enterprise.management_console %}. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-web-ui/accessing-the-management-console).
   1. In the "Settings" sidebar, click **Actions**.
   1. Under "Artifact & Log Storage", update the fields that identify the storage location, for example, the bucket name, account name, region, role ARN, or connection string. Do not change the authentication method.
   1. Click **Test storage settings** to validate the new configuration.

      > [!WARNING]
      > If the test fails, do not save the settings. Investigate the failure and re-test before continuing. Saving an invalid storage configuration can cause an outage.

   1. Click **Save settings** and wait for services to fully restart.

   Alternatively, you can update the configuration from the command line using `ghe-actions-precheck` for credentials-based authentication. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-actions-precheck).

1. **Validate the migration.** After the configuration change, confirm that {% data variables.product.prodname_actions %} can read from the new storage location.

   1. Disable maintenance mode. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
   1. In the web UI for {% data variables.location.product_location %}, open a recent workflow run that completed before the migration. Confirm that:

      * Workflow run logs load.
      * Build artifacts download successfully.

   1. Trigger a new workflow run and confirm that:

      * The run completes successfully.
      * Logs and any artifacts produced by the run are visible.

   If any of these validation checks fail, retain the source storage and refer to the [Rolling back](#rolling-back) section below.

1. **Decommission the source storage.** Only proceed once validation has completed successfully and you have allowed enough time to be confident that the new storage location is healthy. As a guideline, retain the source storage in a read-only state for at least one full backup cycle before deleting it.

   When you are ready to remove the source storage, follow your provider's standard procedure for deleting a bucket or container.

## Rolling back

If validation fails or you encounter issues after cutover, roll back by pointing {% data variables.location.product_location %} back at the source storage location. The source storage is your known-good copy. Do not copy data from the destination back into the source as part of rollback, because data written to the destination during a failed cutover may be partial or inconsistent, and writing it back into the source risks corrupting your only good copy.

> [!WARNING]
> Rolling back will discard any data written or deleted after the cutover. If validation fails, roll back immediately rather than attempting extended troubleshooting. The longer you wait, the more data is at risk.

If validation fails or you encounter issues:

1. Enable maintenance mode immediately.
1. In the {% data variables.enterprise.management_console %}, restore the original storage configuration values and click **Test storage settings**, then **Save settings**.
1. Disable maintenance mode and re-run the validation steps with the original storage.

After a successful rollback, investigate the failure and plan a new migration attempt.

## {% data variables.product.prodname_registry %} considerations

You can apply the same migration approach to {% data variables.product.prodname_registry %} external storage, with the following important differences. Read this section in full before migrating storage on an instance that has {% data variables.product.prodname_registry %} enabled.

* **OpenID Connect is not available for {% data variables.product.prodname_registry %}.** {% data variables.product.prodname_registry %} only supports credentials-based authentication for external storage. The authentication-method constraint in this article still applies: keep the authentication method unchanged during migration.
* **{% data variables.product.prodname_registry %} is more sensitive to timing mismatches.** When packages are published during the migration window, the system creates both new storage objects and database records. To prevent inconsistency, keep maintenance mode enabled continuously from the start of the final delta sync through successful validation of the new configuration.
* **Update both configurations together if the same provider serves both products.** If you have configured {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} to use the same provider type and you are migrating both, plan the cutover as a single maintenance window and update both configurations before disabling maintenance mode.
* **For cross-provider migrations of {% data variables.product.prodname_registry %} storage, contact {% data variables.contact.contact_ent_support %}.** Cross-provider moves are not covered here.

For more information about configuring {% data variables.product.prodname_registry %} storage, see [AUTOTITLE](/admin/configuring-packages/getting-started-with-github-packages-for-your-enterprise).
