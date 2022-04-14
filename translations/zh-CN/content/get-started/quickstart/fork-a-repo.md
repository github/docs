---
title: 复刻仓库
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: 复刻是仓库的副本。 通过复刻仓库，您可以自由地尝试更改而不会影响原始项目。
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
---

## 关于复刻

最常见的是，复刻用于对其他人的项目提出您没有写入权限的项目的更改，或者使用其他人的项目作为您自己想法的起点。 您可以复刻仓库以创建仓库的副本，并在不影响上游仓库的情况下进行更改。 更多信息请参阅“[使用复刻](/github/collaborating-with-issues-and-pull-requests/working-with-forks)”。

### 对其他人的项目提出更改

例如，可以使用复刻提出与修复 Bug 相关的更改。 无需为您发现的漏洞创建议题，您可以：

- 复刻仓库
- 进行修复
- 向项目所有者提交拉取请求。

### 将其他人的项目用作自己创意的起点。

开源软件的理念是通过共享代码，可以开发出更好、更可靠的软件。 更多信息请参阅 Open Source Initiative（开源倡议）上的“[关于开源倡议](http://opensource.org/about)”。

有关将开源原则应用于组织在 {% data variables.product.product_location %} 上的开发工作的详细信息，请参阅 {% data variables.product.prodname_dotcom %} 的白皮书“[内部来源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

{% ifversion fpt or ghes or ghec %}

从其他人的项目复刻创建公共仓库时，请确保包含许可文件以确定您希望与其他人共享项目。 更多信息请参阅 choosealicense.com 上的“[选择开源许可](https://choosealicense.com/)”。

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endif %}

## 基本要求

如果尚未[设置 Git](/articles/set-up-git)，您应该先设置它。 不要忘记[从 Git 设置向 {% data variables.product.product_location %} 验证](/articles/set-up-git#next-steps-authenticating-with-github-from-git)。

## 复刻仓库

{% webui %}

您可能为了对上游或原始仓库提议更改而复刻项目。 在这种情况下，最好定期将您的复刻与上游仓库同步。 为此，您需要在命令行上使用 Git。 您可以使用刚才复刻的 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 仓库练习设置上游仓库。

1. 在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %} 上，导航到 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 存储库。
2. 在页面的右上角，单击 **Fork（复刻）**。 ![复刻按钮](/assets/images/help/repository/fork_button.jpg)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要创建仓库的复刻，请使用 `gh repo fork` 子命令。

```shell
gh repo fork <em>repository</em>
```

要在组织中创建复刻，请使用 `- org` 标记。

```shell
gh repo fork <em>repository</em> --org "octo-org"
```

{% endcli %}

{% desktop %}
{% enddesktop %}

## 克隆复刻的仓库

现在，您有了 Spoon-Knife 仓库的复刻，但您的计算机本地还没有该仓库中的文件。

{% webui %}

1. 在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %} 上，导航到您在 Spoon-Knife 存储库的**复刻**。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. 键入 `git clone`，然后粘贴先前复制的 URL。 它将如下所示，使用您的 {% data variables.product.product_name %} 用户名替换 `YOUR-USERNAME`：
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. 按 **Enter** 键。 将创建您的本地克隆。
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

要创建复刻的克隆，请使用 `--clone` 标记。

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## 配置 Git 以将您的复刻与原始仓库同步

为了对原始仓库提议更改而复刻项目时，您可以配置 Git 以将更改从原始或上游仓库拉取到复刻的本地克隆。

{% webui %}

1. 在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %} 上，导航到 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 存储库。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. 将目录更改为您克隆的复刻的位置。
    - 要转到主目录，请只键入 `cd`，不要键入其他文本。
    - 要列出当前目录中的文件和文件夹，请键入 `ls`。
    - 要进入列出的某个目录，请键入 `cd your_listed_directory`。
    - 要回到上一个目录，请键入 `cd ..`。
5. 键入 `git remote -v`，然后按 **Enter** 键。 您将看到当前为复刻配置的远程仓库。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. Type `git remote add upstream`, and then paste the URL you copied in Step 3 and press **Enter**. 它将如下所示：
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
  ```

7. 要验证为复刻指定的新上游仓库，请再次键入 `git remote -v`。 您应该看到复刻的 URL 为 `origin`，原始仓库的 URL 为 `upstream`。
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

现在，您可以使用一些 Git 命令使您的复刻与上游仓库保持同步。 更多信息请参阅“[同步复刻](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)”。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要为复刻的仓库配置远程仓库，请使用 `--remote` 标记。

```shell
gh repo fork <em>repository</em> --remote=true
```

要指定远程仓库的名称，请使用 `--remote-name` 标记。

```shell
gh repo fork <em>repository</em> --remote-name "main-remote-repo"
```

{% endcli %}

### 后续步骤

您可以对复刻进行任何更改，包括：

- **创建分支：**[*分支*](/articles/creating-and-deleting-branches-within-your-repository/)允许您在不影响主项目的情况下构建新功能或测试创意。
- **打开拉取请求：**如果您希望回馈原始仓库，您可以通过提交[拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)请求原作者将您的复刻拉取到他们的仓库。

## 另找一个仓库进行复刻
复刻仓库，开始参与项目。 {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}您可以浏览 [Explore](https://github.com/explore) 以查找项目并开始参与开源仓库。 更多信息请参阅“[寻找在 {% data variables.product.prodname_dotcom %} 上参与开源项目的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。

{% endif %}

## 祝贺

您现在已经复刻了仓库、练习了克隆复刻并配置了上游仓库。 有关克隆复刻和从计算机同步复刻仓库更改的更多信息，请参阅“[设置 Git](/articles/set-up-git)”。

您也可以创建一个新的仓库，以将所有项目放在 {% data variables.product.prodname_dotcom %} 上并共享代码。 更多信息请参阅“[创建仓库](/articles/create-a-repo)”。

{% data variables.product.product_name %} 中的每个仓库均归个人或组织所有。 您可以在 {% data variables.product.product_name %} 上连接和关注人员、仓库和组织以与之进行交互。 更多信息请参阅“[社交](/articles/be-social)”。

{% data reusables.support.connect-in-the-forum-bootcamp %}
