---
title: Enabling GitHub Packages with MinIO
intro: 'Set up {% data variables.product.prodname_registry %} with MinIO as your external storage.'
versions:
  enterprise-server: '>=2.22'
---

{% warning %}

**警告：**
- It is critical that you set the restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. 例如，如果将存储桶设为公共，则在公共互联网上可以访问存储桶中的数据。
- 我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。
- 请确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}
### 基本要求
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
1. Under "AWS Service URL", type the MinIO URL for your bucket's region. ![AWS 服务 URL 字段](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Under "AWS S3 Bucket", type the name of the MinIO bucket you want to use to store package artifacts. ![AWS S3 存储桶字段](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Under "AWS S3 Access Key", type your access key for MinIO. ![AWS S3 访问密钥字段](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Under "AWS S3 Secret Key", type your secret key for MinIO. ![AWS S3 密码密钥字段](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Under "AWS S3 Region", type your region for MinIO. ![AWS S3 区域字段](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
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

### 后续步骤

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
