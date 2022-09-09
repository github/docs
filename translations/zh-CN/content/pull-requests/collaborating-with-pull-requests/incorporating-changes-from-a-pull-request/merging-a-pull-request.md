---
title: 合并拉取请求
intro: 在工作完成时将拉取请求合并到上游分支。 对仓库具有推送权限的任何人都可以完成合并。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: cccb85404c9cfe7305d639911528afed3706edfa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129632'
---
## 关于拉取请求合并

在拉取请求中，您提议将您对头部分支所做的更改合并到基础分支。 默认情况下，任何拉取请求都可随时合并，除非头部分支与基本分支冲突。 但是，何时可以将拉取请求合并到特定分支中可能会有一些限制。 例如，如果必需状态检查通过，您可能只能将拉取请求合并到默认分支。 有关详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches)”。

{% data reusables.pull_requests.you-can-auto-merge %}

如果拉取请求具有合并冲突，或者你在合并前想要测试更改，可以[本地签出拉取请求](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)，然后使用命令行进行合并。

无法合并草稿拉取请求。 有关草稿拉取请求的详细信息，请参阅“[关于拉取请求](/articles/about-pull-requests#draft-pull-requests)”。

仓库可配置为在您合并拉请求时自动删除拉取请求的头部分支。 有关详细信息，请参阅“[管理分支的自动删除](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)”。

{% note %}

注意：{% data reusables.pull_requests.retargeted-on-branch-deletion %}有关详细信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)”。

{% endnote %}

拉取请求可通过 [`--no-ff` 选项](https://git-scm.com/docs/git-merge#_fast_forward_merge) 进行合并，但[其提交已压缩或变基的拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)除外，这些拉取请求通过快进选项进行合并。

{% data reusables.pull_requests.close-issues-using-keywords %}

如果决定不想让主题分支中的更改合并到上游分支，可以[关闭拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)而不合并。

## 合并拉取请求

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要合并的拉取请求。
3. 根据对仓库启用的合并选项，您可以：
    - 单击“合并拉取请求”，[将所有提交合并到基分支中](/articles/about-pull-request-merges/)。 如果未显示“合并拉取请求”选项，则单击合并下拉菜单，然后选择“创建合并提交” 。
    ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - 单击合并下拉菜单，选择“压缩并合并”，然后单击“压缩并合并”按钮，[将多个提交压缩为一个提交](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) 。
    ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - 单击合并下拉菜单，选择“变基并合并”，然后单击“变基并合并”按钮，[将多个提交变基为一个基分支](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) 。
    ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    注意：变基并合并始终会更新提交者信息，并创建新的提交 SHA。 有关详细信息，请参阅“[关于拉取请求合并](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)”。

    {% endnote %}
4. 如有提示，输入提交消息，或接受默认消息。

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![提交消息字段](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   注意：电子邮件选择器不可用于变基合并（无法创建合并提交）或压缩合并（将创建拉取请求的用户计为压缩提交的作者）。

   {% endnote %}

6. 单击“确认合并”、“确认压缩并合并”，或“确认变基并合并”  。
6. （可选）[删除分支](/articles/deleting-unused-branches)。 这有助于仓库的分支列表保持整洁。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要合并拉取请求，请使用 `gh pr merge` 子命令。 将 `pull-request` 替换为拉取请求的数字、URL 或主分支。

```shell
gh pr merge <em>pull-request</em>
```

按照交互式提示完成合并。 有关可以选择的合并方法的详细信息，请参阅“[关于拉取请求合并](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”。

或者，您可以使用标志跳过交互式提示。 例如，此命令会将提交压缩为带有提交消息“我的压缩提交”的单个提交，将压缩的提交合并到基本分支，然后删除本地和远程分支。

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## 延伸阅读

- [还原拉取请求](/articles/reverting-a-pull-request)
- 使用 {% data variables.product.prodname_desktop %} [同步分支](/desktop/guides/contributing-to-projects/syncing-your-branch/)
- [关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- “[解决合并冲突](/github/collaborating-with-pull-requests/addressing-merge-conflicts)”
