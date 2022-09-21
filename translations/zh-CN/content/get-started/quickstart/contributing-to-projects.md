---
title: 参与项目
intro: 了解如何通过复刻参与项目。
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: 190bfbbfc799a802a082aa01e9f93f2ad379e471
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147425229'
---
## 关于复刻

在自己使用 GitHub 一段时间后，您可能会发现自己也想参与别人的项目。 或者，也许您想使用某人的项目作为自己项目的起点。 此过程称为复刻。

创建“复刻”就是生成他人项目的个人副本。 复刻可作为原始存储库和个人副本之间的桥梁。 您可以提交拉取请求，通过提供对原始项目的更改来帮助改善其他人的项目。 复刻是 GitHub 社交编码的核心。 有关详细信息，请参阅“[为存储库创建分支](/get-started/quickstart/fork-a-repo)”。

## 复刻仓库

本教程使用 [Spoon-Knife 项目](https://github.com/octocat/Spoon-Knife)，这是一个托管在 {% data variables.product.prodname_dotcom_the_website %} 上的测试存储库，可让你测试分支和拉取请求工作流。

1. 导航到位于 https://github.com/octocat/Spoon-Knife 的 `Spoon-Knife` 项目。
2. 单击“分支”。
   ![分支按钮](/assets/images/help/repository/fork_button.png)
3. 为分支存储库选择所有者。
   ![创建一个突出显示所有者下拉菜单的新分支页](/assets/images/help/repository/fork-choose-owner.png)
4. 默认情况下，分支的名称与其父存储库的相同。 可更改分支的名称以进一步区分它。 
   ![创建一个突出显示存储库名称字段的新分支页](/assets/images/help/repository/fork-choose-repo-name.png)
5. 可以选择性地添加分支的说明。
   ![创建一个突出显示说明字段的新分支页](/assets/images/help/repository/fork-description.png)
6. 选择是仅将默认分支还是将所有分支复制到新分支。 对于许多分支场景（例如参与开源项目），你只需复制默认分支。 默认情况下，只复制默认分支。
   ![只复制默认分支的选项](/assets/images/help/repository/copy-default-branch-only.png)
7. 单击“创建分支”。
   ![突出显示的“创建分支”按钮](/assets/images/help/repository/fork-create-button.png)

{% note %}

注意：如果要从父存储库复制其他分支，可从“分支”页执行此操作 。 有关详细信息，请参阅“[创建和删除存储库中的分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)”。

{% endnote %}

## 克隆复刻

您已经成功复刻了 Spoon-Knife 存储库，但到目前为止，它仅存在于 {% data variables.product.product_name %} 上。 为了能够处理该项目，您需要将其克隆到您的计算机。

您可以使用命令行、{% data variables.product.prodname_cli %} 或 {% data variables.product.prodname_desktop %} 克隆复刻。

{% webui %}

1. 在 {% data variables.product.product_name %} 上，导航到 Spoon-Knife 存储库的分支。
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. 键入 `git clone`，然后粘贴之前复制的 URL。 它将如下所示，使用你的 {% data variables.product.product_name %} 用户名替换 `YOUR-USERNAME`：
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. 按 **Enter**。 将创建您的本地克隆。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

若要创建分支的克隆，请使用 `--clone` 标记。

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## 创建和推送更改

继续使用你喜欢的文本编辑器（例如 [Visual Studio Code](https://code.visualstudio.com)）对项目进行一些更改。 例如，可以更改 `index.html` 中的文本以添加你的 GitHub 用户名。

当您准备好提交更改时，请暂存并提交更改。 `git add .` 告诉 Git 你希望在下一次提交中包含所有更改。 `git commit` 会拍摄这些更改的快照。

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

有关如何在 {% data variables.product.prodname_desktop %} 中暂存和提交更改的详细信息，请参阅“[提交和查看项目的更改](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)”。

{% enddesktop %}

暂存和提交文件时，您主要是告诉 Git：“好吧，拍摄我的更改快照！” 您可以继续进行更多更改，并拍摄更多提交快照。

目前，您的更改仅存在于本地。 当您准备好将更改推送到 {% data variables.product.product_name %} 时，请将更改推送到远程。

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

有关如何在 {% data variables.product.prodname_desktop %} 中推送更改的详细信息，请参阅“[将更改推送到 GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)”。

{% enddesktop %}

## 创建拉取请求

最后，您可以对主项目提出更改建议了！ 这是产生他人项目复刻的最后一步，可以说是最重要的一步。 如果您做了您认为有益于整个社区的改变，绝对应该考虑回馈社区。

为此，请转到项目所在的 {% data variables.product.product_name %} 存储库。 在本示例中，它位于 `https://www.github.com/<your_username>/Spoon-Knife`。 你将看到一个横幅，指示你的分支是 `octocat:main` 之前的一个提交。 单击“参与”，然后单击“打开拉取请求” 。

{% data variables.product.product_name %} 会将你带到一个页面，其中显示了分支和 `octocat/Spoon-Knife` 存储库之间的差异。 单击“创建拉取请求”。

{% data variables.product.product_name %} 将带您进入一个页面，您可以在其中输入更改的标题和说明。 重要的是要提供尽可能多的有用信息，在首要位置说明您提出此拉取请求的理由。 项目所有者需要能够确定您的更改是否像您认为的那样对每个人都有用。 最后，单击“创建拉取请求”。

## 管理反馈

拉取请求是一个讨论区域。 在这种情况下，Octocat 非常繁忙，可能不会合并您的更改。 对于其他项目，如果项目所有者拒绝您的拉取请求，或者要求提供有关请求原因的更多信息，请不要生气。 甚至可能是项目所有者选择不合并您的拉取请求，这完全没问题。 您的副本将存在于互联网上。 谁知道呢 - 也许您从未见过的人会发现您的更改比原始项目更有价值。

## 查找项目

您已成功复刻并回馈存储库。 来吧，再贡献一些！{% ifversion fpt %}有关详细信息，请参阅“[查找在 GitHub 上为开放源代码做出贡献的方法](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)”。{% endif %}
