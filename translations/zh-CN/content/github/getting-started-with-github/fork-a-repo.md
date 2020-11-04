---
title: 复刻仓库
redirect_from:
  - /fork-a-repo/
  - /forking/
  - /articles/fork-a-repo
intro: 复刻是仓库的副本。 通过复刻仓库，您可以自由地尝试更改而不会影响原始项目。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

复刻最常见的用法是对其他人的项目提出更改或将其他人的项目用作自己创意的起点。

#### 对其他人的项目提出更改

例如，可以使用复刻提出与修复 Bug 相关的更改。 无需为您发现的漏洞创建议题，您可以：

- 复刻仓库
- 进行修复
- 向项目所有者提交拉取请求。

#### 将其他人的项目用作自己创意的起点。

开源软件的理念是通过共享代码，可以开发出更好、更可靠的软件。 更多信息请参阅 Open Source Initiative（开源倡议）上的“[关于开源倡议](http://opensource.org/about)”。

从其他人的项目复刻创建公共仓库时，请确保包含许可文件以确定您希望与其他人共享项目。 更多信息请参阅 choosealicense 上的“[选择开源许可](http://choosealicense.com/)”。

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% note %}

**注**：{% data reusables.repositories.desktop-fork %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_cli %} 复刻仓库。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh 仓库复刻`](https://cli.github.com/manual/gh_repo_fork)”。

{% endtip %}
{% endif %}

### 复刻示例仓库

复刻仓库是一个简单的两步过程。 我们创建了一个供您练习的仓库。

1. 在 {% data variables.product.product_location %} 上，导航到 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 仓库。
2. 在页面的右上角，单击 **Fork（复刻）**。 ![复刻按钮](/assets/images/help/repository/fork_button.jpg)

### 让复刻保持同步

您可能为了对上游或原始仓库提议更改而复刻项目。 在这种情况下，最好定期将您的复刻与上游仓库同步。 为此，您需要在命令行上使用 Git。 您可以使用刚才复刻的 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 仓库练习设置上游仓库。

#### 第 1 步：设置 Git

如果尚未[设置 Git](/articles/set-up-git)，您应该先设置它。 不要忘记[从 Git 设置向 {% data variables.product.product_location %} 验证](/articles/set-up-git#next-steps-authenticating-with-github-from-git)。

#### 第 2 步：创建复刻的本地克隆

现在，您有了 Spoon-Knife 仓库的复刻，但您的计算机上还没有该仓库中的文件。 让我们在计算机上本地创建复刻的克隆。

1. 在

{% data variables.product.product_name %}, navigate to **your fork** of the Spoon-Knife repository.
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

现在，您有了 Spoon-Knife 仓库复刻的本地副本。

#### 第 3 步：配置 Git 以将您的复刻与原始 Spoon-Knife 仓库同步

为了对原始仓库提议更改而复刻项目时，您可以配置 Git 以将更改从原始或上游仓库拉取到复刻的本地克隆。

1. 在

{% data variables.product.product_name %}, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. 将目录更改为您在[第 2 步：创建复刻的本地克隆](#step-2-create-a-local-clone-of-your-fork)中克隆复刻的位置。
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

6. 键入 `git remote add upstream`，然后粘贴您在第 2 步中复制的 URL 并按 **Enter** 键。 它将如下所示：
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

现在，您可以使用一些 Git 命令使您的复刻与上游仓库保持同步。 更多信息请参阅“[同步复刻](/articles/syncing-a-fork)”。

#### 后续步骤

您可以对复刻进行任何更改，包括：

- **创建分支：**[*分支*](/articles/creating-and-deleting-branches-within-your-repository/)允许您在不影响主项目的情况下构建新功能或测试创意。
- **打开拉取请求：**如果您希望回馈原始仓库，您可以通过提交[拉取请求](/articles/about-pull-requests)请求原作者将您的复刻拉取到他们的仓库。

### 另找一个仓库进行复刻

复刻仓库，开始参与项目。 {% data reusables.repositories.you-can-fork %}

{% if currentVersion == "free-pro-team@latest" %}You can browse [Explore](https://github.com/explore) to find projects and start contributing to open source repositories. 更多信息请参阅“[寻找在 {% data variables.product.prodname_dotcom %} 上参与开源项目的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。

{% endif %}

### 祝贺

您现在已经复刻了仓库、练习了克隆复刻并配置了上游仓库。 接下来您要做什么？

- “[设置 Git](/articles/set-up-git)”
- “[创建仓库](/articles/create-a-repo)”
- “[社交化](/articles/be-social)”
- {% data reusables.support.connect-in-the-forum-bootcamp %}
