---
title: 将仓库中的文件移至 Git Large File Storage
intro: '如果设置 {% data variables.large_files.product_name_short %}，并且仓库中具有需要在 {% data variables.large_files.product_name_short %} 中跟踪的文件，则需要先将其从仓库中删除。'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129244'
---
在安装 {% data variables.large_files.product_name_short %} 和配置 {% data variables.large_files.product_name_short %} 跟踪后，您可以将文件从 Git 的常规跟踪移至 {% data variables.large_files.product_name_short %}。 有关详细信息，请参阅“[安装 {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage)”和“[配置 {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)”。

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

提示：如果在尝试推送文件到 Git 时收到错误“这超过 {% data variables.large_files.product_name_short %} 的文件 {% data variables.large_files.max_github_size %} 的大小限制”，可以使用 `git lfs migrate` 而不是 `filter branch` 或 BFG Repo Cleaner，将大型文件移至 {% data variables.large_files.product_name_long %}。 有关 `git lfs migrate` 命令的详细信息，请参阅 [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released) 发布公告。

{% endtip %}

1.  使用 `filter-branch` 命令或 BFG Repo-Cleaner 从存储库的 Git 历史记录中删除文件。 有关使用这些的详细信息，请参阅“[从存储库中删除敏感数据](/articles/removing-sensitive-data-from-a-repository)”。
2. 配置文件跟踪并将其推送到 {% data variables.large_files.product_name_short %}。 有关此过程的详细信息，请参阅“[配置 {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)”。

## 延伸阅读

- [关于 {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)
- [与 {% data variables.large_files.product_name_long %} 协作](/articles/collaboration-with-git-large-file-storage/)
- [安装 {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)
