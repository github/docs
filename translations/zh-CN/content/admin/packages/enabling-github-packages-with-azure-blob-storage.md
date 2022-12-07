---
title: 使用 Azure Blob 存储启用 GitHub Packages
intro: '以 Azure Blob 存储作为外部存储设置 {% data variables.product.prodname_registry %} 。'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: b851f698baba60323cbaaa69122cacdc92ec83c2
ms.sourcegitcommit: 3ece72cf2d90987575d369c44101d19d3bb06f76
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190385'
---
{% warning %}

警告：
- 为存储桶设置所需的限制性访问策略至关重要，因为 {% data variables.product.company_short %} 不会将特定对象权限或其他访问控制列表 (ACL) 应用于存储桶配置。 例如，如果将存储桶设为公共，则在公共互联网上可以访问存储桶中的数据。
- 我们建议对 {% data variables.product.prodname_registry %} 使用专用存储桶，与用于 {% data variables.product.prodname_actions %} 存储的存储桶分开。
- 请确保配置将来要使用的存储桶。 在开始使用 {% data variables.product.prodname_registry %} 后，我们不建议更改存储系统。

{% endwarning %}

## 先决条件

在 {% data variables.location.product_location_enterprise %} 上启用和配置 {% data variables.product.prodname_registry %} 之前，需要准备 Azure Blob 存储 Bucket。 若要准备 Azure Blob 存储 Bucket，建议查阅官方 [Azure Blob 存储文档站点](https://docs.microsoft.com/en-us/azure/storage/blobs/)上的官方 Azure Blob 存储文档。

## 使用 Azure Blob 存储启用 {% data variables.product.prodname_registry %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. 在“包存储”下，选择“Azure Blob 存储”，然后为包存储 Bucket 和连接字符串输入 Azure 容器名称。

    - 在设置容器名称和连接字符串之前，必须创建存储容器。

  ![Azure Blob 存储容器名称和连接字符串框](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  注意：可以通过导航到 Azure 存储帐户中的“访问密钥”菜单来查找 Azure 连接字符串。 
  目前不支持使用 SAS 令牌或 SAS URL 作为连接字符串。
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## 后续步骤

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
