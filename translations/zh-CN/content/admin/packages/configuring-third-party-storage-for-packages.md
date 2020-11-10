---
title: 为包配置第三方存储
intro: '您可以配置 {% data variables.product.prodname_registry %} 用于存储企业软件包的第三方服务。'
redirect_from:
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 关于 {% data variables.product.prodname_registry %} 的第三方存储

{% data variables.product.prodname_ghe_server %} 上的 {% data variables.product.prodname_registry %} 使用外部 Blob 存储来存储您的软件包。 所需存储量取决于您使用 {% data variables.product.prodname_registry %} 的情况。

目前，{% data variables.product.prodname_registry %} 支持使用 Amazon Web Services (AWS) S3 的 Blob 存储。 还支持 MinIO，但配置当前未在 {% data variables.product.product_name %} 界面中实现。 You can use MinIO for storage by following the instructions for AWS S3, entering the analogous information for your MinIO configuration.

为了获得最佳体验，我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。

### 将 AWS S3 配置为 {% data variables.product.prodname_registry %} 的存储系统

{% warning %}

**警告**：确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}

在将 AWS 配置为 {% data variables.product.prodname_registry %} 的存储系统之前，请确保您的 AWS 访问密钥 ID 和密码具有以下权限：
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. 在“AWS Service URL（AWS 服务 URL）”下，请为存储桶的区域键入S3 端点 URL。 ![AWS 服务 URL 字段](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. 在“AWS S3 Bucket（AWS S3 存储桶）”下，键入您想要用来存储软件包工件的 S3 存储桶。 ![AWS S3 存储桶字段](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. 在“AWS S3 Access Key（AWS S3 访问密钥）”下，键入 S3 的访问密钥。 ![AWS S3 访问密钥字段](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. 在“AWS S3 Secret Key（AWS S3 密码密钥”下，请输入 S3 的密码密钥。 ![AWS S3 密码密钥字段](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. 在“AWS S3 Region（AWS S3 区域）”下，键入 S3 的区域。 ![AWS S3 区域字段](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% data reusables.enterprise_management_console.save-settings %}
