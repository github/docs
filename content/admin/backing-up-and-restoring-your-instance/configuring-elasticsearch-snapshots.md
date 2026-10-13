---
title: Configuring Elasticsearch snapshots
shortTitle: Elasticsearch snapshots
intro: 'You can configure {% data variables.location.product_location %} to use a customer-managed cloud storage provider for native Elasticsearch snapshots and restores, instead of copying search index data directly from disk.'
permissions: Site administrators can configure Elasticsearch snapshot storage.
versions:
  ghes: '>=3.20'
contentType: how-tos
category:
  - Back up and upgrade your instance
---

<!-- TODO(docs review): confirm the minimum GHES version for this feature before merging. -->

## About Elasticsearch snapshots

By default, {% data variables.product.prodname_enterprise_backup_utilities %} and {% data variables.product.prodname_enterprise_backup_service %} back up search index data by copying files directly from disk. This approach doesn't follow Elasticsearch's own recommendations, can consume a large amount of backup appliance storage, and carries some risk of corrupting the backed-up indices.

As an opt-in alternative, {% data variables.location.product_location %} supports Elasticsearch's built-in, incremental snapshot and restore functionality. When you configure a supported cloud storage provider and enable the snapshot backup strategy:

* `ghe-backup` creates an incremental snapshot of your search index data in your configured cloud storage account. Incremental snapshots are faster than a full copy, especially on subsequent backups.
* `ghe-restore` restores search index data from your cloud storage account, if a snapshot exists that matches the target instance's {% data variables.product.prodname_ghe_server %} version.
* Snapshots are isolated per {% data variables.product.prodname_ghe_server %} patch version, which allows for safer rollbacks between versions.

This feature is opt-in. If you don't configure a snapshot repository, {% data variables.location.product_location %} continues to back up search index data using the existing disk-based method.

## Prerequisites

* A supported cloud storage provider: Azure Blob storage, Amazon S3, or Google Cloud Storage (or a service that's compatible with one of these APIs).
* The storage container or bucket you plan to use as the snapshot repository. **You must create this container or bucket yourself.** {% data variables.product.prodname_ghe_server %} does not create it for you, and repository registration will fail if the container or bucket doesn't already exist.

## Configuring a snapshot storage provider

Configure the following settings using `ghe-config` over SSH. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).

You'll apply the configuration to register the snapshot repository with Elasticsearch. The repository is named `search_index_snapshots-VERSION`, where `VERSION` is the current {% data variables.product.prodname_ghe_server %} release version.

### Azure Blob storage

1. Set the following secrets:

   ```shell
   ghe-config secrets.elasticsearch.snapshot-provider azure
   ghe-config secrets.elasticsearch.snapshot.azure.container YOUR-CONTAINER
   ghe-config secrets.elasticsearch.snapshot.azure.account-name YOUR-STORAGE-ACCOUNT
   ghe-config secrets.elasticsearch.snapshot.azure.account-key YOUR-ACCOUNT-KEY
   ```

   Optionally, set a custom blob endpoint suffix (defaults to `core.windows.net`):

   ```shell
   ghe-config secrets.elasticsearch.snapshot.azure.endpoint-suffix YOUR-ENDPOINT-SUFFIX
   ```

1. Run configuration apply.

   ```shell
   ghe-config-apply
   ```

### Amazon S3

1. Set the following secrets:

   ```shell
   ghe-config secrets.elasticsearch.snapshot-provider s3
   ghe-config secrets.elasticsearch.snapshot.bucket-name YOUR-BUCKET-NAME
   ghe-config secrets.elasticsearch.snapshot.service-url YOUR-SERVICE-URL
   ghe-config secrets.elasticsearch.snapshot.region YOUR-AWS-REGION
   ghe-config secrets.elasticsearch.snapshot.access-key-id YOUR-ACCESS-KEY-ID
   ghe-config secrets.elasticsearch.snapshot.access-secret YOUR-ACCESS-SECRET
   ```

   For the service URL, use your S3 endpoint, for example `https://s3.us-east-1.amazonaws.com`.

1. Run configuration apply.

   ```shell
   ghe-config-apply
   ```

### Google Cloud Storage

1. Create a JSON service account key with access to your bucket, then encode it as base64.

   ```shell
   base64 -w0 service-account.json
   ```

1. Set the following secrets:

   ```shell
   ghe-config secrets.elasticsearch.snapshot-provider gcs
   ghe-config secrets.elasticsearch.snapshot.gcs.bucket YOUR-BUCKET-NAME
   ghe-config secrets.elasticsearch.snapshot.gcs.credentials YOUR-BASE64-ENCODED-CREDENTIALS
   ```

1. Run configuration apply.

   ```shell
   ghe-config-apply
   ```

### Verifying registration

After configuration apply completes, confirm the snapshot repository was registered.

```shell
curl -k "http://127.0.0.1:9200/_snapshot/search_index_snapshots-$(ghe-version -v)/_status"
```

If a required secret is missing, configuration apply fails while registering the repository. Update the secrets and rerun `ghe-config-apply` to retry.

## Enabling snapshots during backup and restore

Configuring a storage provider registers the snapshot repository, but you must also enable the snapshot backup strategy so `ghe-backup` and `ghe-restore` use it automatically.

* **{% data variables.product.prodname_enterprise_backup_service %}:** Set the strategy using `ghe-config` on the appliance.

  ```shell
  ghe-config backup.es-backup-strategy snapshot
  ```

* **{% data variables.product.prodname_enterprise_backup_utilities %}:** Set the strategy in your `backup.config` file on the backup host.

  ```shell
  GHE_ES_BACKUP_STRATEGY=snapshot
  ```

  The default value is `rsync`, which preserves the existing disk-based backup behavior. {% data variables.product.prodname_enterprise_backup_utilities %} stores only snapshot metadata locally; snapshot contents remain in your configured cloud storage.

If you don't set a backup strategy, the snapshot repository can still be managed manually, but `ghe-backup` and `ghe-restore` will continue to use the disk-based method.

## Managing snapshots manually

You can manage Elasticsearch snapshots directly using the following commands. Run any command with the `-h` flag for usage information.

| Command | Description |
| --- | --- |
| `ghe-es-create-snapshot` | Creates a new snapshot in the configured repository. |
| `ghe-es-list-snapshots` | Lists snapshot repositories, or snapshots within a repository. |
| `ghe-es-restore-snapshot` | Restores search indices from a snapshot. |

> [!TIP]
> For routine backups and restores, use {% data variables.product.prodname_enterprise_backup_utilities %} or {% data variables.product.prodname_enterprise_backup_service %} instead of these commands directly. The backup tooling coordinates Elasticsearch snapshots with the rest of your instance's data to ensure a consistent backup or restore. Use the manual commands only when you need to manage search index snapshots independently of a full instance backup or restore.

### Restoring a snapshot from an earlier version

You can restore a snapshot created by an earlier {% data variables.product.prodname_ghe_server %} version to a later version. You cannot restore a snapshot from a later version to an earlier version.

1. List available snapshots for the earlier version.

   ```shell
   ghe-es-list-snapshots -v 3.14.0
   ```

1. Restore the snapshot you want.

   ```shell
   ghe-es-restore-snapshot -v 3.14.0 -s SNAPSHOT-NAME
   ```

Elasticsearch automatically upgrades the restored indices to the current version's format.

## Managing snapshot storage

Elasticsearch snapshots are incremental, but your cloud storage account can still accumulate old snapshots over time. To avoid unbounded storage growth, configure a lifecycle policy with your storage provider to automatically delete snapshots older than your retention requirements. For more information, see your provider's documentation:

* [Amazon S3 Lifecycle rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
* [Azure Blob storage lifecycle management](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)
* [Google Cloud Storage Object Lifecycle Management](https://cloud.google.com/storage/docs/lifecycle)
