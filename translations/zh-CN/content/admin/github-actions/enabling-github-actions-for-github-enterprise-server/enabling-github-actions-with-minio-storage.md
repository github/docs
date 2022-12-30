---
title: 使用 MinIO 存储启用 GitHub Actions
intro: '可以在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，并使用 MinIO 存储来存储工作流运行生成的数据。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO storage
ms.openlocfilehash: fec0720c8779ba643735156e6413005ae35f5d85
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192960'
---
{% data reusables.actions.enterprise-storage-about %}

## 先决条件

在启用 {% data variables.product.prodname_actions %} 之前，请确保您已完成以下步骤：

* 创建 MinIO 存储桶，用于存储工作流运行生成的数据。 有关安装和配置 MinIO 的详细信息，请参阅 MinIO 文档中的“[MinIO 高性能对象存储](https://min.io/docs/minio/container/index.html)”和“[mc mb](https://min.io/docs/minio/linux/reference/minio-mc/mc-mb.html)”。

  为避免设备上的资源争用，我们建议将 MinIO 与 {% data variables.location.product_location %} 分开托管。

  {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %} {% data reusables.actions.enterprise-common-prereqs %}

## 使用 MinIO 存储启用 {% data variables.product.prodname_actions %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. 在“项目和日志存储”下，选择“Amazon S3”，然后输入存储桶的详细信息：

   * AWS 服务 URL：MinIO 服务的 URL。 例如 `https://my-minio.example:9000`。
   * AWS S3 存储桶：S3 存储桶的名称。
   * AWS S3 访问密钥和 AWS S3 密钥：用于 MinIO 实例的 `MINIO_ACCESS_KEY` 和 `MINIO_SECRET_KEY` 。

   ![用于选择 Amazon S3 存储的单选按钮和用于 MinIO 配置的字段](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. 在“项目和日志存储”下，选择“强制路径样式”。

   ![“强制实施路径样式”复选框](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
