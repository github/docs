---
title: 删除和恢复拉取请求中的分支
intro: 如果拥有仓库的写入权限，可删除与已关闭或已合并拉取请求关联的分支。 无法删除与已打开拉取请求关联的分支。
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129393'
---
## 删除用于拉取请求的分支

如果拉取请求已合并或关闭，并且没有打开的其他拉取请求在引用分支，则可以删除与该拉取请求关联的分支。 有关如何关闭与拉取请求无关的分支的信息，请参阅“[在存储库中创建和删除分支](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. 在拉取请求列表中，单击与要删除分支关联的拉取请求。
5. 在拉取请求底部附近，单击“删除分支”。
   ![“删除分支”按钮](/assets/images/help/pull_requests/delete_branch_button.png)

   如果此分支当前有打开的拉取请求，则不显示此按钮。

## 恢复已删除分支

可恢复已关闭拉取请求的头部分支。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. 在拉取请求列表中，单击与要回复分支关联的拉取请求。
5. 在拉取请求底部附近，单击“还原分支”。
   ![用于还原已删除分支的按钮](/assets/images/help/branches/branches-restore-deleted.png)

## 延伸阅读

- “[在存储库中创建和删除分支](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)”
- “[管理分支的自动删除](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)”
