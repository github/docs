---
title: Configuring third-party storage for packages
intro: 'You can configure the third-party service that {{ site.data.variables.product.prodname_registry }} uses to store your enterprise''s packages.'
redirect_from:
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
versions:
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.package_registry.packages-ghes-release-stage }}

### About third-party storage for {{ site.data.variables.product.prodname_registry }}

{{ site.data.variables.product.prodname_registry }} on {{ site.data.variables.product.prodname_ghe_server }} uses external blob storage to store your packages. The amount of storage required depends on your usage of {{ site.data.variables.product.prodname_registry }}.

At this time, {{ site.data.variables.product.prodname_registry }} supports blob storage with Amazon Web Services (AWS) S3. MinIO is also supported, but configuration is not currently implemented in the {{ site.data.variables.product.product_name }} interface. You can use MinIO for storage by following the instructions for AWS S3, entering the analagous information for your MinIO configuration.

For the best experience, we recommend using a dedicated bucket for {{ site.data.variables.product.prodname_registry }}, separate from the bucket you use for {{ site.data.variables.product.prodname_actions }} storage.

### Configuring AWS S3 as storage for {{ site.data.variables.product.prodname_registry }}

{% warning %}

**Warning:** Make sure to configure the bucket you'll want to use in the future. We do not recommend changing your storage after you start using {{ site.data.variables.product.prodname_registry }}.

{% endwarning %}

Before you configure AWS as storage for {{ site.data.variables.product.prodname_registry }}, make sure your AWS access key ID and secret have the following permissions:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_site_admin_settings.packages-tab }}
1. Under "AWS Service URL", type the S3 endpoint URL for your bucket's region. ![AWS Service URL field](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Under "AWS S3 Bucket", type the name of the S3 bucket you want to use to store package artifacts. ![AWS S3 Bucket field](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Under "AWS S3 Access Key", type your access key for S3. ![AWS S3 Access Key field](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Under "AWS S3 Secret Key", type your secret key for S3. ![AWS S3 Secret Key field](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Under "AWS S3 Region", type your region for S3. ![AWS S3 Region field](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}
