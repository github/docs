---
title: 从 Git Large File Storage 中删除文件
intro: '如果您已设置仓库的 {% data variables.large_files.product_name_short %}，则可以从 {% data variables.large_files.product_name_short %} 中删除所有文件或文件的子集。'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129243'
---
## 删除单个文件

1.  使用 `filter-branch` 命令或 BFG Repo-Cleaner 从存储库的 Git 历史记录中删除文件。 有关使用这些的详细信息，请参阅“[从存储库中删除敏感数据](/articles/removing-sensitive-data-from-a-repository)”。
2. 导航到 .gitattributes 文件。

  {% note %}

  **注意：** .gitattributes 文件通常保存在本地存储库中。 在某些情况下，你可能已创建包含所有 {% data variables.large_files.product_name_short %} 关联的全局 .gitattributes 文件。

  {% endnote %}
3. 找到并删除 .gitattributes 文件内关联的 {% data variables.large_files.product_name_short %} 跟踪规则。
4. 保存并退出 .gitattributes 文件。

## 删除 {% data variables.large_files.product_name_short %} 仓库内的所有文件

1. 使用 `filter-branch` 命令或 BFG Repo-Cleaner 从存储库的 Git 历史记录中删除文件。 有关使用这些的详细信息，请参阅“[从存储库中删除敏感数据](/articles/removing-sensitive-data-from-a-repository)”。
2. （可选）要卸载仓库中的 {% data variables.large_files.product_name_short %}，请运行：
  ```shell
  $ git lfs uninstall
  ```
  对于 1.1.0 以下的 {% data variables.large_files.product_name_short %} 版本，运行：
  ```shell
  $ git lfs uninit
  ```

## 仓库中的 {% data variables.large_files.product_name_short %} 对象

从 {% data variables.large_files.product_name_short %} 中删除文件后，{% data variables.large_files.product_name_short %} 对象仍存在于远程存储中{% ifversion fpt or ghec %} 并将继续计入你的 {% data variables.large_files.product_name_short %} 存储配额{% endif %}。

要从存储库中删除 {% data variables.large_files.product_name_short %} 对象，{% ifversion fpt or ghec %}请删除并重新创建存储库。 删除仓库时，所有关联的议题、星标和复刻也会被删除。 有关详细信息，请参阅“[删除存储库](/github/administering-a-repository/deleting-a-repository)”。 如果需要清除已删除的对象并且无法删除存储库，请[联系支持人员](/github/working-with-github-support)寻求帮助。{% else %}请联系 {% data variables.product.prodname_enterprise %} 管理员以将对象存档。 存档的对象将在三个月后清除。{% endif %}

{% note %}

**注意：** 如果删除了单个文件并有想要留在存储库中的其他 {% data variables.large_files.product_name_short %} 对象，则删除并重新创建存储库后，重新配置 {% data variables.large_files.product_name_short %} 关联文件。 有关详细信息，请参阅“[删除单个文件](#removing-a-single-file)”和“[配置 {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)”。

{% endnote %}

## 延伸阅读

- [关于 {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)
- [与 {% data variables.large_files.product_name_long %} 协作](/articles/collaboration-with-git-large-file-storage/)
- [安装 {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)
