---
title: Using a staging environment
intro: 'Learn about using {% data variables.product.prodname_actions %} with {% data variables.product.prodname_ghe_server %} staging environments.'
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
shortTitle: Use a staging area
---
It can be useful to have a staging or testing environment for {% data variables.product.product_location %}, so that you can test updates or new features before implementing them in your production environment.

A common way to create the staging environment is to use a backup of your production instance and restore it to the staging environment.

When setting up a {% data variables.product.prodname_ghe_server %} staging environment that has {% data variables.product.prodname_actions %} enabled, you must use a different external storage configuration for {% data variables.product.prodname_actions %} storage than your production environment uses. Otherwise, your staging environment will write to the same external storage as production.

Expect to see `404` errors in your staging environment when trying to view logs or artifacts from existing {% data variables.product.prodname_actions %} workflow runs, because that data will be missing from your staging storage location.

Although it is not required for {% data variables.product.prodname_actions %} to be functional in your staging environment, you can optionally copy the files from the production storage location to the staging storage location.

* For an Azure storage account, you can use [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account). For example:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* For Amazon S3 buckets, you can use [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html). For example:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
