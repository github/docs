---
title: 关于发行版
intro: 您可以创建包软件的发行版，以及发行说明和二进制文件链接，以供其他人使用。
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f0435993e244d470fc5f58afe8b8b2f264d9f95c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147167337'
---
## 关于发行版

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} ![发行版概述](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% elsif ghae-issue-4972 %} ![发行版概述](/assets/images/help/releases/releases-overview-with-contributors.png) {% else %} ![发行版概述](/assets/images/help/releases/releases-overview.png) {% endif %}

发行版是可部署的软件迭代，您可以打包并提供给更广泛的受众下载和使用。

发行版基于用于标记存储库历史记录中的特定点的 [Git 标记](https://git-scm.com/book/en/Git-Basics-Tagging)。 标记日期可能与发行日期不同，因为它们可在不同的时间创建。 有关查看现有标记的详细信息，请参阅“[查看存储库的发行版和标记](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)”。

当仓库中发布新发行版时您可以接收通知，但不会接受有关仓库其他更新的通知。 有关详细信息，请参阅“[查看订阅](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)”。

对仓库具有读取访问权限的任何人都可以查看和比较发行版，但只有对仓库具有写入权限的人员才能管理发行版。 有关详细信息，请参阅“[管理存储库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository)”。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} 管理发行版时，可以手动创建发行说明。 或者，您可以从默认模板自动生成发行说明，或自定义您自己的发行说明模板。 有关详细信息，请参阅“[自动生成的发行说明](/repositories/releasing-projects-on-github/automatically-generated-release-notes)”。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7054 %} 在查看发布的详细信息时，每个发布资产的创建日期会显示在发布资产旁边。
{% endif %}

{% ifversion fpt or ghec %} 对存储库具有管理员权限的人可以选择是否将 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在 {% data variables.product.product_name %} 为每个发行版创建的 ZIP 文件和 tarball 中。 有关详细信息，请参阅“[管理存储库存档中的 {% data variables.large_files.product_name_short %} 对象](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)”。

如果发行版修复了安全漏洞，您应该在仓库中发布安全通告。 {% data variables.product.prodname_dotcom %} 审查每个发布的安全通告，并且可能使用它向受影响的仓库发送 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[关于 GitHub 安全公告](/github/managing-security-vulnerabilities/about-github-security-advisories)”。

可以查看依赖项关系图的“依赖项”选项卡，了解哪些存储库和包依赖于存储库中的代码，并因此可能受到新发行版的影响。 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
{% endif %}

您也可以使用发行版 API 来收集信息，例如人们下载发行版资产的次数。 有关详细信息，请参阅“[发行版](/rest/reference/releases)”。

{% ifversion fpt or ghec %}
## 存储和带宽配额

 发行版中包含的每个文件都必须在 {% data variables.large_files.max_file_size %} 下。 发行版的总大小和带宽使用没有限制。

{% endif %}
