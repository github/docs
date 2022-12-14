---
title: 从个人仓库中删除协作者
intro: 当您从项目中删除协作者时，他们将失去对您仓库的读取/写入权限。 如果仓库为私有并且该人员已创建复刻，则该复刻也将删除。
redirect_from:
  - /articles/how-do-i-remove-a-collaborator
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
  - /articles/removing-a-collaborator-from-a-private-repository
  - /articles/deleting-a-private-fork-of-a-private-user-repository
  - /articles/how-do-i-delete-a-fork-of-my-private-repository
  - /articles/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove a collaborator
ms.openlocfilehash: 24b128b5858c695b0e559302fac05812d3218b8c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164728'
---
## 删除私有仓库的复刻

尽管删除协作者时将删除私有仓库的复刻，但此人员将仍保留您仓库的任何本地克隆。

## 删除为仓库做出贡献的人员的协作者权限

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. 在要移除的协作者的右侧，单击 {% octicon "trash" aria-label="The trash icon" %}。
  ![用于移除协作者的按钮](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. 在左侧边栏中，单击“协作者和团队”。
  ![“协作者”选项卡](/assets/images/help/repository/repo-settings-collaborators.png)
4. 在要移除的协作者旁边，单击“X”图标。
  ![移除链接](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## 延伸阅读

- [从团队中移除组织成员](/articles/removing-organization-members-from-a-team)
- [从组织存储库中移除外部协作者](/articles/removing-an-outside-collaborator-from-an-organization-repository)
