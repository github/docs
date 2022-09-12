---
title: 管理分支的自动删除
intro: 您可让头部分支在仓库中的拉取请求合并后自动删除。
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129408'
---
对仓库具有管理员权限的任何人都可启用或禁用分支的自动删除。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}“拉取请求”{% else %}“合并按钮”{% endif %}下，选择或取消选择“自动删除主分支”。
  ![启用或禁用自动删除分支的复选框](/assets/images/help/repository/automatically-delete-branches.png)

## 延伸阅读
- [合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
- [在存储库中创建和删除分支](/articles/creating-and-deleting-branches-within-your-repository)
