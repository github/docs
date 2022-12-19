---
title: 使用 Amazon S3 存储启用 GitHub Actions
intro: '可以在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，并使用 Amazon S3 存储来存储工作流运行生成的数据。'
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
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: dd0f4c7135def456212de3355d6f6af17076c40c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192983'
---
{% data reusables.actions.enterprise-storage-about %}

## 先决条件

{% note %}

注意：唯一支持 {% data variables.product.prodname_dotcom %} 的 S3 存储提供商是 Amazon S3 和适用于 NAS 的 MinIO 网关。

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

在启用 {% data variables.product.prodname_actions %} 之前，请确保您已完成以下步骤：

* 创建 Amazon S3 存储桶，用于存储工作流程运行生成的数据。 {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## 使用 Amazon S3 存储启用 {% data variables.product.prodname_actions %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. 在“工件和日志存储”下，选择“Amazon S3”，然后输入存储桶的详细信息：

   * AWS 服务 URL：存储桶的服务 URL。 例如，如果你的 S3 存储桶是在 `us-west-2` 区域中创建的，则此值应为 `https://s3.us-west-2.amazonaws.com`。

     有关详细信息，请参阅 AWS 文档中的“[AWS 服务终结点](https://docs.aws.amazon.com/general/latest/gr/rande.html)”。
   * AWS S3 存储桶：S3 存储桶的名称。
   * AWS S3 访问密钥和 AWS S3 密钥：存储桶的 AWS 访问密钥 ID 和密钥 。 有关管理 AWS 访问密钥的详细信息，请参阅“[AWS 标识和访问管理文档](https://docs.aws.amazon.com/iam/index.html)”。

   ![用于选择 Amazon S3 存储和 S3 配置字段的单选按钮](/assets/images/enterprise/management-console/actions-aws-s3-storage.png){% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
