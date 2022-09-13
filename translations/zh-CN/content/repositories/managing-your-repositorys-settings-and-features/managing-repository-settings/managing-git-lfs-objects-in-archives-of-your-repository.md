---
title: 管理仓库存档中的 Git LFS 对象
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: '您可以选择是否将 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在源代码存档（例如 {% data variables.product.product_name %} 为仓库创建的 ZIP 文件和 tarball）中。'
permissions: 'People with admin permissions for a repository can manage whether {% data variables.large_files.product_name_short %} objects are included in archives of the repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository
ms.openlocfilehash: 64bad4c056a29ceffc465065c84a7424c870049f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881770'
---
## 关于存档中的 {% data variables.large_files.product_name_short %} 对象

{% data variables.product.product_name %} 以 ZIP 文件和 tarball 的形式创建仓库的源代码存档。 用户可以在您仓库的主页上下载这些存档或者将其作为发行版资产。 默认情况下，{% data variables.large_files.product_name_short %} 对象不会包含在这些存档中，只有这些对象的指针文件包含在其中。 为了提高仓库存档的可用性，您可以选择包含 {% data variables.large_files.product_name_short %} 对象。 若要包含在内，则必须由已提交到存储库的 .gitattributes 文件中的跟踪规则覆盖 {% data variables.large_files.product_name_short %} 对象。

如果您选择在仓库存档中包含 {% data variables.large_files.product_name_short %} 对象，则每次下载这些存档都会计入您帐户的带宽使用量。 每个帐户每月免费获得 {% data variables.large_files.initial_bandwidth_quota %} 的带宽，您可以付费获得额外用量。 有关详细信息，请参阅“[关于存储和带宽使用情况](/github/managing-large-files/about-storage-and-bandwidth-usage)”和“[管理 {% data variables.large_files.product_name_long %} 的计费](/billing/managing-billing-for-git-large-file-storage)”。

如果使用外部 LFS 服务器（在 .lfsconfig 中配置），这些 LFS 文件将不会包含在存储库的存档中。 存档将仅包含已提交到 {% data variables.product.product_name %} 的文件。

## 管理存档中的 {% data variables.large_files.product_name_short %} 对象

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“存档”下，选择或取消选择“在存档中包含 {% data variables.large_files.product_name_short %} 对象”。
  ![“在存档中包含 {% data variables.large_files.product_name_short %} 对象”的复选框](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
