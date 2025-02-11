---
title: Enabling GitHub Packages with MinIO
intro: 'Set up {% data variables.product.prodname_registry %} with MinIO as your external storage.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with MinIO
redirect_from:
  - /admin/packages/enabling-github-packages-with-minio
---

> [!WARNING]
> * It is critical that you set the restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible on the public internet. If restrictions by IP address have been set up, please include IP addresses for {% data variables.location.product_location_enterprise %} and the end users who will be using the {% data variables.location.product_location_enterprise %}.
> * We recommend using a dedicated bucket for {% data variables.product.prodname_registry %}, separate from the bucket you use for {% data variables.product.prodname_actions %} storage.
> * Make sure to configure the bucket you'll want to use in the future. We do not recommend changing your storage after you start using {% data variables.product.prodname_registry %}.
> * We recommend configuring the TLS for the bucket to avoid possible issues with Package Registry, for example, downloading from NuGet Registry.

## Prerequisites

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.location.product_location_enterprise %}, you need to prepare your MinIO storage bucket. To help you quickly set up a MinIO bucket and navigate MinIO's customization options, see the [AUTOTITLE](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages).

Ensure your MinIO external storage access key ID and secret have these permissions:
* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`
* `s3:ListBucket`

## Enabling {% data variables.product.prodname_registry %} with MinIO external storage

Although MinIO does not currently appear in the user interface under "Package Storage", MinIO is still supported by {% data variables.product.prodname_registry %} on {% data variables.product.prodname_enterprise %}. Also, note that MinIO's object storage is compatible with the S3 API and you can enter MinIO's bucket details in place of AWS S3 details.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% ifversion ghes -%}
1. Under "Packages Storage", select **Amazon S3**.
1. Enter your MinIO storage bucket's details in the AWS storage settings.
    * **AWS Service URL:** The hosting URL for your MinIO bucket.
    * **AWS S3 Bucket:** The name of your S3-compatible MinIO bucket dedicated to {% data variables.product.prodname_registry %}.
    * **AWS S3 Access Key** and **AWS S3 Secret Key:** Enter the MinIO access key ID and secret key to access your bucket.
{%- endif %}
{% data reusables.enterprise_management_console.save-settings %}

## Next steps

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
