---
title: 使用暂存环境
intro: '了解如何将 {% data variables.product.prodname_actions %} 与 {% data variables.product.prodname_ghe_server %} 暂存实例配合使用。'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
ms.openlocfilehash: 3d244d25aae5a6e21b4db1cd04352343d6650975
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100006'
---
## 关于 {% data variables.product.product_name %} 的过渡环境

为 {% data variables.product.product_location %} 提供临时或测试环境会有用，这样您就可以在生产环境中实施更新或新功能之前进行测试。 有关详细信息，请参阅“[设置暂存实例](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”。

## 关于 {% data variables.product.prodname_actions %} 的过渡环境

创建过渡环境的常见方法是在过渡环境中将生产 {% data variables.product.product_name %} 实例的备份还原到新虚拟机。 如果使用暂存实例并计划测试 {% data variables.product.prodname_actions %} 功能，则应在过渡环境中查看存储配置。

将 {% data variables.product.prodname_ghe_server %} 备份还原到暂存实例后，如果尝试从现有的 {% data variables.product.prodname_actions %} 工作流运行中查看日志或项目，则会看到 `404` 错误，因为暂存存储位置中缺少该数据。 若要解决 `404` 错误，可以从生产中复制要在过渡环境中使用的数据。

### 配置存储

在设置包含启用了 {% data variables.product.prodname_actions %} 的 {% data variables.product.product_name %} 实例的过渡环境时，你必须对 {% data variables.product.prodname_actions %} 存储使用与生产环境不同的外部存储配置。

{% warning %}

警告：如果不更改存储配置，暂存实例可能会写入用于生产的相同外部存储，这可能会导致数据丢失。

{% endwarning %}

有关 {% data variables.product.prodname_actions %} 存储配置的详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)”。

### 将文件从生产复制到暂存

若要更准确地映射生产环境，可以选择将文件从 {% data variables.product.prodname_actions %} 的生产存储位置复制到暂存存储位置。

* 对于 Azure 存储帐户，可以使用 [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account)。 例如：

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* 对于 Amazon S3 存储桶，可以使用 [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html)。 例如：

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
