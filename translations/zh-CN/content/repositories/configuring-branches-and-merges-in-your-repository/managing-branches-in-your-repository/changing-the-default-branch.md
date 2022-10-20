---
title: 更改默认分支
intro: 如果仓库中有多个分支，您可以将任何分支配置为默认分支。
permissions: People with admin access for a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129401'
---
## 关于更改默认分支

您可以选择仓库的默认分支。 默认分支是拉取请求和代码提交的基础分支。 有关默认分支的详细信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

{% ifversion not ghae %} {% note %}

注意：如果使用 Git-Subversion 桥，则更改默认分支将影响 `trunk` 分支内容和列出远程存储库的引用时看到的 `HEAD`。 有关详细信息，请参阅“[Subversion 客户端支持](/github/importing-your-projects-to-github/support-for-subversion-clients)”和 Git 文档中的 [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html)。

{% endnote %} {% endif %}

您也可以重命名默认分支。 有关详细信息，请参阅“[重命名分支](/github/administering-a-repository/renaming-a-branch)”。

{% data reusables.branches.set-default-branch %}

## 先决条件

要更改默认分支，您的仓库必须有多个分支。 有关详细信息，请参阅“[在存储库中创建和删除分支](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)”。

## 更改默认分支

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. 在“Default branch（默认分支）”下，在默认分支名称的右侧单击 {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}。
   ![当前默认分支名称右侧的两个箭头切换图标](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. 使用下拉菜单，然后单击分支名称。
   ![用于选择新默认分支的下拉菜单](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. 单击“更新”。
   ![选择新默认分支后的“更新”按钮](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. 阅读警告，然后单击“我了解，请更新默认分支。”
   ![“我了解，请更新默认分支。” 用于执行更新的按钮](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

