---
title: Enabling GitHub Packages with MinIO
intro: 'Set up {% data variables.product.prodname_registry %} with MinIO as your external storage.'
versions:
  enterprise-server: '>=2.22'
---

{% warning %}

**Warnings:**
- It is critical that you set the restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible on the public internet.
- We recommend using a dedicated bucket for {% data variables.product.prodname_registry %}, separate from the bucket you use for {% data variables.product.prodname_actions %} storage.
- Make sure to configure the bucket you'll want to use in the future. We do not recommend changing your storage after you start using {% data variables.product.prodname_registry %}.

{% endwarning %}
### 빌드전 요구 사양
Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.product.product_location_enterprise %}, you need to prepare your MinIO storage bucket. To help you quickly set up a MinIO bucket and navigate MinIO's customization options, see the "[Quickstart for configuring your MinIO storage bucket for {% data variables.product.prodname_registry %}](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)."

Ensure your MinIO external storage access key ID and secret have these permissions:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### Enabling {% data variables.product.prodname_registry %} with MinIO external storage

Although MinIO does not currently appear in the user interface under "Package Storage", MinIO is still {% if currentVersion == "enterprise-server@2.22" %} officially{% endif %} supported by {% data variables.product.prodname_registry %} on {% data variables.product.prodname_enterprise %}. Also, note that MinIO's object storage is compatible with the S3 API and you can enter MinIO's bucket details in place of AWS S3 details.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. Under "AWS Service URL", type the MinIO URL for your bucket's region. ![AWS Service URL field](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Under "AWS S3 Bucket", type the name of the MinIO bucket you want to use to store package artifacts. ![AWS S3 Bucket field](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Under "AWS S3 Access Key", type your access key for MinIO. ![AWS S3 Access Key field](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Under "AWS S3 Secret Key", type your secret key for MinIO. ![AWS S3 Secret Key field](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Under "AWS S3 Region", type your region for MinIO. ![AWS S3 Region field](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Under "Packages Storage", select **Amazon S3**.
1. Enter your MinIO storage bucket's details in the AWS storage settings.
    - **AWS Service URL:** The hosting URL for your MinIO bucket.
    - **AWS S3 Bucket:** The name of your S3-compatible MinIO bucket dedicated to {% data variables.product.prodname_registry %}.
    - **AWS S3 Access Key** and **AWS S3 Secret Key**: Enter the MinIO access key ID and secret key to access your bucket.

    ![Entry boxes for your S3 AWS bucket's details](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### 다음 단계

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
