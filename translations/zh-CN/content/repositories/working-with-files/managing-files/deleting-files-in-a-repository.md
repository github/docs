---
title: 删除仓库中的文件
intro: '可以在 {% data variables.product.product_name %} 上的存储库中删除单个文件{% ifversion fpt or ghes or ghec %}或整个目录{% endif %}。'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
ms.openlocfilehash: b3d939a7be6be37e875104f7a3c4df53f7a3b7ed
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129266'
---
## 关于文件{% ifversion fpt or ghes or ghec %} 和目录{% endif %} 删除

可以删除存储库{% ifversion fpt or ghes or ghec %} 中的单个文件或整个目录，包括目录{% endif %} 中的所有文件。

如果尝试在没有写入权限的存储库中删除文件{% ifversion fpt or ghes or ghec %}或目录{% endif %}，我们会在你的个人帐户中创建项目的分支，并在你提交更改后帮助你向原始存储库发送拉取请求。 有关详细信息，请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”。

如果删除的文件{% ifversion fpt or ghes or ghec %} 或目录{% endif %} 包含敏感数据，则该数据仍将在存储库的 Git 历史记录中提供。 要从 {% data variables.product.product_name %} 中彻底删除文件，您必须从仓库的历史记录中删除该文件。 有关详细信息，请参阅“[从存储库中删除敏感数据](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)”。

## 删除文件

1. 浏览到要删除仓库中的文件。
2. 在文件顶部，单击 {% octicon "trash" aria-label="The trash icon" %}。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## 删除目录

1. 浏览到仓库中要删除的目录。
1. 在右上角，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“删除目录”。
  ![删除目录的按钮](/assets/images/help/repository/delete-directory-button.png)
1. 审查要删除的文件。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% endif %}
