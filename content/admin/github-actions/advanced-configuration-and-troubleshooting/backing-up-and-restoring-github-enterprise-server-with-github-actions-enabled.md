---
title: Backing up and restoring GitHub Enterprise Server with GitHub Actions enabled
shortTitle: Backing up and restoring
intro: '{% data variables.product.prodname_actions %} data on your external storage provider is not included in regular {% data variables.product.prodname_ghe_server %} backups, and must be backed up separately.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
---
{% data reusables.actions.enterprise-storage-ha-backups %}

If you use {% data variables.product.prodname_enterprise_backup_utilities %} to back up {% data variables.product.product_location %}, it's important to note that {% data variables.product.prodname_actions %} data stored on your external storage provider is not included in the backup.

This is an overview of the steps required to restore {% data variables.product.product_location %} with {% data variables.product.prodname_actions %} to a new appliance:

1. Confirm that the original appliance is offline.
1. Manually configure network settings on the replacement {% data variables.product.prodname_ghe_server %} appliance. Network settings are excluded from the backup snapshot, and are not overwritten by `ghe-restore`.
1. To configure the replacement appliance to use the same {% data variables.product.prodname_actions %} external storage configuration as the original appliance, from the new appliance, set the required parameters with `ghe-config` command.
    
    - Azure Blob Storage
    ```shell
    ghe-config secrets.actions.storage.blob-provider "azure"
    ghe-config secrets.actions.storage.azure.connection-string "_Connection_String_"
    ```
    - Amazon S3
    ```shell
    ghe-config secrets.actions.storage.blob-provider "s3"
    ghe-config secrets.actions.storage.s3.bucket-name "_S3_Bucket_Name"
    ghe-config secrets.actions.storage.s3.service-url "_S3_Service_URL_"
    ghe-config secrets.actions.storage.s3.access-key-id "_S3_Access_Key_ID_"
    ghe-config secrets.actions.storage.s3.access-secret "_S3_Access_Secret_"
    ```
    - Optionally, to enable S3 force path style, enter the following command:
    ```shell
    ghe-config secrets.actions.storage.s3.force-path-style true
    ```
      

1. Enable {% data variables.product.prodname_actions %} on the replacement appliance. This will connect the replacement appliance to the same  external storage for {% data variables.product.prodname_actions %}.

    ```shell
    ghe-config app.actions.enabled true
    ghe-config-apply
    ```

1. After {% data variables.product.prodname_actions %} is configured and enabled, use the `ghe-restore` command to restore the rest of the data from the backup. For more information, see "[Restoring a backup](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)."
1. Re-register your self-hosted runners on the replacement appliance. For more information, see [Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners).

For more information on backing up and restoring {% data variables.product.prodname_ghe_server %}, see "[Configuring backups on your appliance](/admin/configuration/configuring-backups-on-your-appliance)."
