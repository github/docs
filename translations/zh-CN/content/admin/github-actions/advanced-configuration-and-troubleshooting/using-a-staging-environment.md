---
title: 使用暂存环境
intro: 'Learn about using {% data variables.product.prodname_actions %} with {% data variables.product.prodname_ghe_server %} staging instances.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
---

## About staging environments for {% data variables.product.product_name %}

为 {% data variables.product.product_location %} 提供临时或测试环境会有用，这样您就可以在生产环境中实施更新或新功能之前进行测试。 更多信息请参阅“[设置暂存实例](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”。

## Using a staging environment with {% data variables.product.prodname_actions %}

A common way to create the staging environment is to restore a backup of your production {% data variables.product.product_name %} instance to a new virtual machine in the staging environment. If you use a staging instance and plan to test {% data variables.product.prodname_actions %} functionality, you should review your storage configuration in the staging environment.

After you restore a {% data variables.product.prodname_ghe_server %} backup to the staging instance, if you try to view logs or artifacts from existing {% data variables.product.prodname_actions %} workflow runs on your staging instance, you will see `404` errors, because this data will be missing from your staging storage location. To work around the `404` errors, you can copy data from production to use in your staging environment.

### Configuring storage

When you set up a staging environment that includes a {% data variables.product.product_name %} instance with {% data variables.product.prodname_actions %} enabled, you must use a different external storage configuration for {% data variables.product.prodname_actions %} storage than your production environment.

{% warning %}

**Warning**: If you don't change the storage configuration, your staging instance may be able to write to the same external storage that you use for production, which could result in loss of data.

{% endwarning %}

For more information about storage configuration for {% data variables.product.prodname_actions %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)."

### Copying files from production to staging

To more accurately mirror your production environment, you can optionally copy files from your production storage location for {% data variables.product.prodname_actions %} to the staging storage location.

* 对于 Azure 存储帐户，您可以使用 [`azcop`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account)。 例如：

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* 对于 Amazon S3 存储桶，您可以使用 [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html)。 例如：

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
