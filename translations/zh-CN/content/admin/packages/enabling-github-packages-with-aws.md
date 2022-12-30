---
title: 使用 AWS 启用 GitHub Packages
intro: '以 AWS 作为外部存储设置 {% data variables.product.prodname_registry %} 。'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 185373657cad88bc0a45e48eb5835abdf394f9ce
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099002'
---
{% warning %}

警告：
- 为存储桶配置所需的限制性访问策略至关重要，因为 {% data variables.product.company_short %} 不会将特定对象权限或其他访问控制列表 (ACL) 应用于存储桶配置。 例如，如果将存储桶设为公共，则在公共互联网上可以访问存储桶中的数据。 有关详细信息，请参阅 AWS 文档中的“[设置 Bucket 和对象访问权限](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)”。
- 我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。
- 请确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}

## 先决条件

在 {% data variables.product.product_location_enterprise %} 上启用和配置 {% data variables.product.prodname_registry %} 之前，您必须准备 AWS 存储桶。 为了准备 AWS Bucket，建议在 [AWS 文档](https://docs.aws.amazon.com/index.html)中查阅官方 AWS 文档。

确保您的 AWS 访问密钥 ID 和密钥具有以下权限：
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## 使用 AWS 外部存储启用 {% data variables.product.prodname_registry %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. 在“包存储”下，选择“Amazon S3”并输入存储 Bucket 的详细信息：
    - AWS 服务 URL：Bucket 的服务 URL。 例如，如果你的 S3 存储桶是在 `us-west-2 region` 中创建的，则此值应为 `https://s3.us-west-2.amazonaws.com`。

      有关详细信息，请参阅 AWS 文档中的“[AWS 服务终结点](https://docs.aws.amazon.com/general/latest/gr/rande.html)”。

    - AWS S3 Bucket：S3 Bucket 的名称，专用于 {% data variables.product.prodname_registry %}。
    - AWS S3 访问密钥和 AWS S3 密钥：用于访问 Bucket 的 AWS 访问密钥 ID 和密钥 。

      有关管理 AWS 访问密钥的详细信息，请参阅“[AWS 标识和访问管理文档](https://docs.aws.amazon.com/iam/index.html)”。

    ![S3 AWS Bucket 详细信息的输入框](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## 后续步骤

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
