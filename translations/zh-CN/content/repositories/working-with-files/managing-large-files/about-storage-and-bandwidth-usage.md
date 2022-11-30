---
title: 关于存储和带宽使用情况
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage
  - /articles/billing-plans-for-git-large-file-storage
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
  - /github/managing-large-files/versioning-large-files/about-storage-and-bandwidth-usage
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Storage & bandwidth
ms.openlocfilehash: 8a6dd01c62b5b1c69afe29536e3d4ba206e988e7
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883025'
---
{% data variables.large_files.product_name_short %} 是适用于 {% data variables.product.product_name %} 上每个仓库的变量，无论您的帐户或组织是否有付费的订阅。

## 跟踪存储和带宽使用情况

在提交和推送更改到使用 {% data variables.large_files.product_name_short %} 跟踪的文件时，会推送整个文件的新版本，并且根据仓库所有者的存储单位计算文件的总大小。 在下载使用 {% data variables.large_files.product_name_short %} 跟踪的文件时，根据仓库所有者的带宽限制计算文件的总大小。 {% data variables.large_files.product_name_short %} 上传不根据带宽限制进行计算。

例如：
- 如果将 500 MB 文件推送到 {% data variables.large_files.product_name_short %}，您将使用 500 MB 的分配存储空间，而不使用带宽。 如果进行 1 个字节的更改后再次推送文件，您会使用另外 500 MB 的存储空间，但仍然不使用带宽，所以两次推送的总使用量是 1 GB 存储空间和零带宽。
- 如果下载一个使用 LFS 跟踪的 500 MB 文件，您将使用仓库所有者分配的 500 MB 带宽。 如果协作者推送文件更改并将新版本拉取到本地仓库，您将使用另外 500 MB 的带宽，所以两次下载的总使用量是 1 GB 带宽。
- 如果 {% data variables.product.prodname_actions %} 下载了使用 LFS 跟踪的 500 MB 文件，它将使用存储库所有者分配的 500 MB 带宽。

{% ifversion fpt or ghec %} 如果 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在存储库的源代码存档中，则下载这些存档将计入存储库的带宽使用量。 有关详细信息，请参阅“[管理存储库存档中的 {% data variables.large_files.product_name_short %} 对象](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”。
{% endif %}

{% tip %}

**提示**：
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

## 存储配额

如果使用的存储空间超过 {% data variables.large_files.initial_storage_quota %} 而又未购买数据包，您仍可克隆包含大资产的仓库，但只能检索指针文件，而不能推送新文件备份。 有关指针文件的详细信息，请参阅“[关于 {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)”。

## 带宽配额

如果每月使用的带宽超过{% data variables.large_files.initial_bandwidth_quota %}而又未购买数据包，{% data variables.large_files.product_name_short %} 支持会对您的帐户禁用至下个月。

## 延伸阅读

- “[查看 {% data variables.large_files.product_name_long %} 的使用情况](/articles/viewing-your-git-large-file-storage-usage)”
- “[管理 {% data variables.large_files.product_name_long %} 的计费](/articles/managing-billing-for-git-large-file-storage)”
