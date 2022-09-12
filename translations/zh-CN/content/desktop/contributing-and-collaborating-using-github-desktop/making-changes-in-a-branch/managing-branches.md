---
title: 管理分支
intro: 您可以在仓库的默认分支之外创建分支，以便安全地试验更改。
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099279'
---
## 关于管理分支
您可以使用分支安全地试验对项目的更改。 分支可将您的开发工作与仓库中的其他分支隔开。 例如，您可以使用分支来开发新功能或修复漏洞。

始终可以从现有分支创建分支。 通常，您可能会从仓库的默认分支创建分支。 然后，您可以单独处理这个新分支，不受其他人对仓库所做更改的影响。

您还可以从分支历史记录中的上一个提交开始创建分支。 如果您需要返回到仓库的早期视图以调查错误，或在最新版本上创建热补丁，这会很有帮助。

对您的工作满意后，您可以创建拉取请求，以将当前分支中的更改合并到另一个分支。 有关详细信息，请参阅“[创建问题或拉取请求](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)”和“[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”。

如果您对仓库具有读取权限，可随时在 {% data variables.product.prodname_desktop %} 中创建分支， 但如果您对仓库具有写入权限，则只能将分支推送到 {% data variables.product.prodname_dotcom %}。

{% data reusables.desktop.protected-branches %}

## 创建分支

{% tip %}

提示：你创建的第一个新分支将基于默认分支。 如果有多个分支，您可以选择新分支是基于当前检出的分支还是默认分支。

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![“分支”菜单中的“新建分支”选项](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![用于为新分支创建名称的字段](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![基础分支选项](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![创建“分支”按钮](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![“分支”菜单中的“新建分支”选项](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![用于为新分支创建名称的字段](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![基础分支选项](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![创建“分支”按钮](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## 从以前的提交创建分支

{% data reusables.desktop.history-tab %}
2. 右键单击要从中创建新分支的提交，并选择“从提交创建分支”。
  ![从提交上下文菜单创建分支](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![从提交创建分支](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## 发布分支

如果您在 {% data variables.product.product_name %} 上创建一个分支，您需要发布分支以便其可用于在 {% data variables.product.prodname_dotcom %} 上进行协作。

1. 在应用顶部，单击 {% octicon "git-branch" aria-label="The branch icon" %}“当前分支”，然后单击要发布的分支。
  ![用于选择要发布的分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. 单击“发布分支”。
  ![发布分支按钮](/assets/images/help/desktop/publish-branch-button.png)

## 在分支间切换
您可以查看并提交到任何仓库的分支。 如有未提交但已保存的更改，您需要决定如何处理更改，然后才可切换分支。 您可以在当前分支上提交更改、隐藏更改以临时将它们保存在当前分支上，或者将更改传送到新分支。 如果要在切换分支之前提交更改，请参阅“[提交和查看对项目的更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)”。
{% tip %}

提示：可以在“高级”设置中设置用于切换分支的默认行为。 有关详细信息，请参阅“[配置基本设置](/desktop/getting-started-with-github-desktop/configuring-basic-settings)”。

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![存储库中的分支列表](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. 如果已保存未提交的更改，请选择“保留我的更改”或“引入我的更改”，然后单击“切换分支”。
  ![通过更改选项切换分支](/assets/images/help/desktop/stash-changes-options.png)

## 删除分支

无法删除目前与打开的拉取请求关联的分支。 您不能撤消对分支的删除。

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![用于选择要删除的分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![删除“分支”菜单中的“...”选项](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![用于选择要删除的分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![删除“分支”菜单中的“...”选项](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## 延伸阅读

- “[从 {% data variables.product.prodname_desktop %} 克隆存储库](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)”
- {% data variables.product.prodname_dotcom %} 术语表中的“[分支](/articles/github-glossary/#branch)”
- “[关于分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)”
- Git 文档中的“[果壳中的分支](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)”
- “[存储更改](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)”
