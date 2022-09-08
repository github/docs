---
title: 同步分支
intro: '当提交推送到您在 {% data variables.product.prodname_dotcom %} 上的项目时，可通过从远程仓库拉取同步保留项目的本地副本。'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085095'
---
## 关于分支同步

您可以通过拉取自上次同步以来在 {% data variables.product.product_name %} 上添加到分支的任何提交来同步本地分支与远程仓库。 如果从其他设备进行提交，或有多人参与项目，则需要同步本地分支以保持分支的更新。

当您拉取到本地分支时，只会更新仓库的本地副本。 要在 {% data variables.product.prodname_dotcom %} 上更新分支，您必须推送更改。 有关详细信息，请参阅“[将更改推送到 {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)”。

要将更改从一个分支添加到另一个分支，可以合并这些分支。 要从同一仓库中的另一个分支应用更改到您的分支，可以在 {% data variables.product.prodname_desktop %} 上将该分支合并到您的分支。 要请求将分支中的更改合并到网络中同一仓库或不同仓库中的另一个分支，可以在 {% data variables.product.prodname_desktop %} 上创建拉取请求。 有关详细信息，请参阅“[将另一个分支合并到项目分支](#merging-another-branch-into-your-project-branch)”和“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”。

有些工作流程需要或受益于变基而不是合并。 通过变基，可以重新排序、编辑提交或将其压缩到一起。 有关详细信息，请参阅“[关于 Git 变基](/github/getting-started-with-github/about-git-rebase)”和“[将项目分支变基到另一个分支](#rebasing-your-project-branch-onto-another-branch)”。

## 从远程拉取到您的本地分支

1. 在 {% data variables.product.prodname_desktop %} 中，使用 {% octicon "git-branch" aria-label="The branch icon" %}“当前分支”下拉列表，然后选择要更新的本地分支。
2.  若要检查远程分支上的提交，请单击“提取源”
![“提取源”按钮](/assets/images/help/desktop/fetch-button.png)
3. 若要从远程分支拉取任何提交，请单击“拉取源”或“具有变基的拉取源” 。
![“拉取源”按钮](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## 将另一个分支合并到项目分支

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   注意：如果存在合并冲突，{% data variables.product.prodname_desktop %} 将在“将分支合并到分支”按钮上方警告你 。 在解决所有冲突之前无法合并分支。

   {% endnote %}

   ![“合并”按钮](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## 将项目分支变基到另一个分支

{% mac %}

1. 在菜单栏中，使用“分支”下拉列表，然后单击“变基当前分支” 。
![分支下拉列表中的“变基当前分支”](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. 单击要变基到当前分支的分支，然后单击“开始变基”。
![“开始变基”按钮](/assets/images/help/desktop/start-rebase-button.png)
3. 如果确定要变基，请单击“开始变基”。
![“开始变基”按钮](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. 若要推送本地更改，请单击“强制推送源”。
![强制推送源](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. 使用“分支”下拉列表，然后单击“变基当前分支” 。
![分支下拉列表中的“变基当前分支”](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. 单击要变基到当前分支的分支，然后单击“开始变基”。
![“开始变基”按钮](/assets/images/help/desktop/start-rebase-button.png)
3. 如果确定要变基，请单击“开始变基”。
![“开始变基”按钮](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. 若要推送本地更改，请单击“强制推送源”。
![强制推送源](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## 将另一个分支压缩并合并到项目分支

1. 使用“分支”下拉列表并单击“压缩并合并到当前分支” 。
![分支下拉列表中的压缩并合并](/assets/images/help/desktop/squash-and-merge-menu.png)
2. 单击要合并到当前分支的分支，然后单击“压缩并合并”。
![“压缩并合并”按钮](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   注意：如果存在合并冲突，{% data variables.product.prodname_desktop %} 将在“压缩并合并”按钮上方显示警告 。 在解决所有冲突之前无法压缩和合并分支。

   {% endnote %} {% data reusables.desktop.push-origin %}

## 深入阅读
- {% data variables.product.prodname_dotcom %} 术语表中的“[拉取](/github/getting-started-with-github/github-glossary#pull)”
- {% data variables.product.prodname_dotcom %} 术语表中的“[合并](/github/getting-started-with-github/github-glossary#merge)”
- {% data variables.product.prodname_dotcom %} 术语表中的“[变基](/github/getting-started-with-github/github-glossary#rebase)”
