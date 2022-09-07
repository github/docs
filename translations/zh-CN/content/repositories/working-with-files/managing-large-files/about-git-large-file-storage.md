---
title: 关于 Git Large File Storage
intro: '{% data variables.product.product_name %} 限制存储库中允许的文件大小。 要跟踪超出此限制的文件，您可以使用 {% data variables.large_files.product_name_long %}。'
redirect_from:
  - /articles/about-large-file-storage
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git Large File Storage
ms.openlocfilehash: af198fe13f69fc4768178aea74a03f27a82ec20b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129252'
---
## 关于 {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} 处理大文件的方式是存储对仓库中文件的引用，而不实际文件本身。 为满足 Git 的架构要求，{% data variables.large_files.product_name_short %} 创建了“指针文件”，充当对实际文件（存储在其他位置）的引用。 {% data variables.product.product_name %} 在仓库中管理此指针文件。 克隆仓库时，{% data variables.product.product_name %} 使用指针文件作为映射来查找大文件。

{% ifversion fpt or ghec %} 使用 {% data variables.large_files.product_name_short %}，可以将文件存储到：

| 产品 | 文件大小上限 |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 GB |
| {% data variables.product.prodname_pro %} | 2 GB |
| {% data variables.product.prodname_team %} | 4 GB |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
使用 {% data variables.large_files.product_name_short %}，可在仓库中存储最大 5 GB 的文件。
{% endif %}  

您也可以将 {% data variables.large_files.product_name_short %} 与 {% data variables.product.prodname_desktop %} 结合使用。 有关在 {% data variables.product.prodname_desktop %} 中克隆 Git LFS 存储库的详细信息，请参阅“[将存储库从 GitHub 克隆到 GitHub 桌面](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)”。

{% data reusables.large_files.can-include-lfs-objects-archives %}

## 指针文件格式

{% data variables.large_files.product_name_short %} 的指针文件看起来像：

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

它会跟踪所用 {% data variables.large_files.product_name_short %} 的 `version`，后接文件的唯一标识符 (`oid`)。 它还会存储最终文件的 `size`。

{% note %}

**注释**：
- {% data variables.large_files.product_name_short %} 不能用于 {% data variables.product.prodname_pages %} 站点。
- {% data variables.large_files.product_name_short %} 不能用于模板仓库。
  
{% endnote %}

## 延伸阅读

- [与 {% data variables.large_files.product_name_long %} 协作](/articles/collaboration-with-git-large-file-storage)
