---
title: 使用 MinIO Gateway for NAS 存储启用 GitHub Actions
intro: '可以在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，并使用 MinIO Gateway for NAS 存储来存储工作流运行生成的数据。'
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
shortTitle: MinIO Gateway for NAS storage
ms.openlocfilehash: 9fced80eb2a486ffae44d21f3fad278a933eb92d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682307'
---
{% data reusables.actions.minio-gateways-removal %}

## 先决条件

在启用 {% data variables.product.prodname_actions %} 之前，请确保您已完成以下步骤：

* 为避免设备上的资源争用，我们建议将 MinIO 与 {% data variables.product.product_location %} 分开托管。
* 创建用于存储工作流数据的桶。 {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## 使用 MinIO Gateway for NAS 存储启用 {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.actions.perform-blob-storage-precheck %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. 在“项目和日志存储”下，选择“Amazon S3”，然后输入存储桶的详细信息：

   * AWS 服务 URL：MinIO 服务的 URL。 例如 `https://my-minio.example:9000`。
   * AWS S3 存储桶：S3 存储桶的名称。
   * AWS S3 访问密钥和 AWS S3 密钥：用于 MinIO 实例的 `MINIO_ACCESS_KEY` 和 `MINIO_SECRET_KEY` 。

   ![用于选择 Amazon S3 存储的单选按钮和用于 MinIO 配置的字段](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. 在“项目和日志存储”下，选择“强制路径样式”。
   ![“强制路径样式”的复选框](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
