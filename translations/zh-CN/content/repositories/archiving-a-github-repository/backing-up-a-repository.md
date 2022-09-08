---
title: 备份仓库
intro: '可使用{% ifversion ghes or ghae %} Git 和{% endif %} API {% ifversion fpt or ghec %}或第三方工具{% endif %}备份仓库。'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 3c9a6b5569563858987e338584b3b42bededf716
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129428'
---
{% ifversion fpt or ghec %}

要下载仓库的存档，您可以使用 API 进行用户或组织迁移。 有关详细信息，请参阅“[迁移](/rest/reference/migrations)”。
{% else %}

您可以手动下载和备份仓库：

- 要将仓库的 Git 数据下载到本地计算机，您需要克隆该仓库。 有关详细信息，请参阅“[克隆存储库](/articles/cloning-a-repository)”。
- 还可以下载仓库的 wiki。 有关详细信息，请参阅“[添加或编辑 Wiki 页面](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)”。

克隆仓库或 wiki 时，仅下载 Git 数据，例如项目文件和提交历史记录。 您可以使用我们的 API 将 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上存储库的其他元素导出到本地计算机：

- [问题](/rest/reference/issues#list-issues-for-a-repository)
- [拉取请求](/rest/reference/pulls#list-pull-requests)
- [前叉](/rest/reference/repos#list-forks)
- [注释](/rest/reference/issues#list-issue-comments-for-a-repository)
- [里程碑](/rest/reference/issues#list-milestones)
- [标签](/rest/reference/issues#list-labels-for-a-repository)
- [Watchers](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Projects](/rest/reference/projects#list-repository-projects) {% endif %}

一旦拥有{% ifversion ghes or ghae %}要备份的所有内容的本地版本，可以创建一个 zip 存档并{% else %}下载存档，可以{% endif %}将它复制到外部硬盘驱动器和/或将其上传到基于云的备份或存储服务，例如 [Azure Blob 存储](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/)、[Google Drive](https://www.google.com/drive/) 或 [Dropbox](https://www.dropbox.com/)。

{% ifversion fpt or ghec %}
## 第三方备份工具

有许多自助服务工具可自动备份仓库。 存档项目将所有公共存储库存档在未选择退出的 {% data variables.product.product_name %} 上，并让任何人都可以访问数据，而备份工具则不同，它将从特定存储库下载数据并组织在新分支或目录中 。 有关存档项目的详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上存档内容和数据](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)”。 有关自助备份工具的详细信息，请参阅 [{% data variables.product.prodname_marketplace %} 上的备份实用程序类别](https://github.com/marketplace?category=backup-utilities)。
{% endif %}
