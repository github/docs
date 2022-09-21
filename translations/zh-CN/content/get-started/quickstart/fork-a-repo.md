---
title: 创建存储库分支
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: 分叉是存储库的副本。 通过复刻仓库，您可以自由地尝试更改而不会影响原始项目。
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: b6f98f30c67f14fab1da3658e42e8eba67f5f50c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717571'
---
## 关于分叉

最常见的是，分支用于对其他人的项目提出你没有写入权限的项目的更改，或者使用其他人的项目作为你自己想法的起点。 您可以复刻仓库以创建仓库的副本，并在不影响上游仓库的情况下进行更改。 有关详细信息，请参阅“[使用分支](/github/collaborating-with-issues-and-pull-requests/working-with-forks)”。

### 对其他人的项目提出更改

例如，可以使用复刻提出与修复 Bug 相关的更改。 无需为你发现的漏洞创建问题，你可以：

- 创建存储库分支。
- 进行修复
- 向项目所有者提交拉取请求。

### 将其他人的项目用作自己创意的起点。

开源软件的理念是通过共享代码，可以开发出更好、更可靠的软件。 有关详细信息，请参阅开放源代码计划上的“[关于开放源代码计划](https://opensource.org/about)”。

有关将开放源代码原则应用于组织在 {% data variables.product.product_location %} 上的开发工作的详细信息，请参阅 {% data variables.product.prodname_dotcom %} 的白皮书“[内部源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

{% ifversion fpt or ghes or ghec %}

从其他人的项目复刻创建公共仓库时，请确保包含许可文件以确定您希望与其他人共享项目。 有关详细信息，请参阅 choosealicense 上的“[选择开放源代码许可](https://choosealicense.com/)”。

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

{% endif %}

## 先决条件

如果尚未设置，应首先 [设置 Git](/articles/set-up-git)。 不要忘记[从 Git 向 {% data variables.product.product_location %} 设置身份验证](/articles/set-up-git#next-steps-authenticating-with-github-from-git)。

## 复刻仓库

{% webui %}

您可能为了对上游或原始仓库提议更改而复刻项目。 在这种情况下，最好定期将您的复刻与上游仓库同步。 为此，您需要在命令行上使用 Git。 可以使用刚才已创建分支的同一 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 存储库来练习设置上游存储库。

1. 在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %} 上，导航到 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 存储库。
2. 在页面右上角，单击“分支”。
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

注意：如果要从父存储库复制其他分支，可从“分支”页执行此操作 。 有关详细信息，请参阅“[在存储库中创建和删除分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)”。{% endnote %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

若要创建存储库的分支，请使用 `gh repo fork` 子命令。

```shell
gh repo fork <em>repository</em>
```

若要在组织中创建分支，请使用 `--org` 标记。

```shell
gh repo fork <em>repository</em> --org "octo-org"
```

{% endcli %}

{% desktop %} {% enddesktop %}

## 克隆复刻的仓库

现在，你有了 Spoon-Knife 存储库的分支，但你的计算机本地还没有该存储库中的文件。

{% webui %}

1. 在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %} 上，导航到 Spoon-Knife 存储库的分支。
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
  > remote: Total 10 (delta 1), reused 10 (delta 1)
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

## 配置 Git 以将您的复刻与原始仓库同步

为了对原始仓库提议更改而复刻项目时，您可以配置 Git 以将更改从原始或上游仓库拉取到复刻的本地克隆。

{% webui %}

1. 在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %} 上，导航到 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 存储库。
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %}
4. 将目录更改为您克隆的复刻的位置。
    - 若要转到主目录，请只键入 `cd`，不要键入其他文本。
    - 若要列出当前目录中的文件和文件夹，请键入 `ls`。
    - 若要进入列出的某个目录，请键入 `cd your_listed_directory`。
    - 若要回到上一个目录，请键入 `cd ..`。
5. 键入 `git remote -v`，然后按“Enter”。 你将看到当前为分支配置的远程存储库。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. 键入 `git remote add upstream`，然后粘贴在步骤 3 中复制的 URL，然后按 Enter。 它将如下所示：
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/Spoon-Knife.git
  ```

7. 若要验证为分支指定的新上游存储库，请再次键入 `git remote -v`。 你应该会看到分支的 URL 为 `origin`，原始存储库的 URL 为 `upstream`。
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

现在，您可以使用一些 Git 命令使您的复刻与上游仓库保持同步。 有关详细信息，请参阅“[同步分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)”。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

若要为分支存储库配置远程存储库，请使用 `--remote` 标志。

```shell
gh repo fork <em>repository</em> --remote=true
```

若要指定远程存储库的名称，请使用 `--remote-name` 标志。

```shell
gh repo fork <em>repository</em> --remote-name "main-remote-repo"
```

{% endcli %}

### 编辑分支

您可以对复刻进行任何更改，包括：

- 创建分支：[分支](/articles/creating-and-deleting-branches-within-your-repository/)支持在不影响主项目的情况下构建新功能或测试创意。
- 打开拉取请求：如果希望回馈原始存储库，可以通过提交[拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)，请求原作者将你的分支拉取到他们的存储库。

## 另找一个仓库进行复刻
复刻仓库，开始参与项目。 {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}你可以查看[浏览](https://github.com/explore)，查找项目并开始参与开放源代码存储库。 有关详细信息，请参阅“[查找为 {% data variables.product.prodname_dotcom %} 上的开放源代码做贡献的方式](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。

{% endif %}

## 后续步骤

您现在已经复刻了仓库、练习了克隆复刻并配置了上游仓库。

* 有关克隆分支和从计算机同步分支存储库更改的详细信息，请参阅“[设置 Git](/articles/set-up-git)”。

* 您也可以创建一个新的仓库，以将所有项目放在 {% data variables.product.prodname_dotcom %} 上并共享代码。 {% data reusables.getting-started.create-a-repository %}"

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
