---
title: 使用 Azure Blob 存储启用 GitHub Actions
intro: '可以在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，并使用 Azure Blob 存储来存储工作流运行生成的数据。'
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
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
shortTitle: Azure Blob storage
ms.openlocfilehash: 856748a3219be7789f0339c43210ca204fe56d91
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192975'
---
{% data reusables.actions.enterprise-storage-about %}

## 先决条件

在启用 {% data variables.product.prodname_actions %} 之前，请确保您已完成以下步骤：

* 创建用于存储工作流数据的 Azure 存储帐户。 {% data variables.product.prodname_actions %} 将其数据存储为块 Blob，支持两种类型的存储帐户：
  * 使用“标准”性能层的“常规用途”存储帐户（也称为 `general-purpose v1` 或 `general-purpose v2`） 。

    {% warning %}

    **警告：** 不支持将“高级”性能层用于常规用途存储帐户。 在创建存储帐户时必须选择“标准”性能层，并且以后不能更改。

    {% endwarning %}
  * BlockBlobStorage 存储帐户，使用“高级”性能层 。

  有关 Azure 存储帐户类型和性能层的详细信息，请参阅 [Azure 文档](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts)。
{% data reusables.actions.enterprise-common-prereqs %}

## 使用 Azure Blob 存储启用 {% data variables.product.prodname_actions %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. 在“项目和日志存储”下，选择“Azure Blob 存储”，然后输入 Azure 存储帐户的连接字符串。 有关获取存储帐户连接字符串的详细信息，请参阅 [Azure 文档](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys)。

   ![用于选择 Azure Blob 存储和“连接字符串”字段的单选按钮](/assets/images/enterprise/management-console/actions-azure-storage.png){% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
