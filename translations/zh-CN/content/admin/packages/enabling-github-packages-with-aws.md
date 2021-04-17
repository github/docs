---
title: 使用 AWS 启用 GitHub Packages
intro: '以 AWS 作为外部存储设置 {% data variables.product.prodname_registry %} 。'
versions:
  enterprise-server: '>=2.22'
topics:
  - 企业
---

{% warning %}

**警告：**
- 为存储桶配置所需的限制性访问策略至关重要，因为 {% data variables.product.company_short %} 不会将特定对象权限或其他访问控制列表 (ACL) 应用于存储桶配置。 例如，如果将存储桶设为公共，则在公共互联网上可以访问存储桶中的数据。 更多信息请参阅 AWS 文档中的“[设置存储桶和对象访问权限](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)”。
- 我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。
- 请确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}

### 基本要求

在 {% data variables.product.product_location_enterprise %} 上启用和配置 {% data variables.product.prodname_registry %} 之前，您必须准备 AWS 存储桶。 为了准备您的 AWS 存储桶，我们建议在 [AWS 文档](https://docs.aws.amazon.com/index.html)中查阅官方 AWS 文档。

确保您的 AWS 访问密钥 ID 和密钥具有以下权限：
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### 使用 AWS 外部存储启用 {% data variables.product.prodname_registry %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. 在“AWS Service URL（AWS 服务 URL）”下，请为存储桶的区域键入S3 端点 URL。 ![AWS 服务 URL 字段](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. 在“AWS S3 Bucket（AWS S3 存储桶）”下，键入您想要用来存储软件包工件的 S3 存储桶。 ![AWS S3 存储桶字段](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. 在“AWS S3 Access Key（AWS S3 访问密钥）”下，键入 S3 的访问密钥。 ![AWS S3 访问密钥字段](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. 在“AWS S3 Secret Key（AWS S3 密码密钥”下，请输入 S3 的密码密钥。 ![AWS S3 密码密钥字段](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. 在“AWS S3 Region（AWS S3 区域）”下，键入 S3 的区域。 ![AWS S3 区域字段](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. 在“Packages Storage（包存储）”下，选择 **Amazon S3** 并输入您的存储桶详细信息：
    - **AWS 服务 URL：**存储桶的服务 URL。 例如，如果您的 S3 存储桶是在 `us-west-2 region` 中创建的，则此值应为 `https://s3.us-west-2.amazonaws.com`。

      更多信息请参阅 AWS 文档中的“[AWS 服务端点](https://docs.aws.amazon.com/general/latest/gr/rande.html)”。

    - **AWS S3 桶：**专用于 {% data variables.product.prodname_registry %} 的 S3 存储桶的名称。
    - **AWS S3 访问密钥**和 **AWS S3 密钥**：可访问存储桶的 AWS 访问密钥 ID 和密钥。

      有关管理 AWS 访问密钥的更多信息，请参阅“[AWS 身份和访问管理文档](https://docs.aws.amazon.com/iam/index.html)”。

    ![S3 AWS 桶详细信息的输入框](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### 后续步骤

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
