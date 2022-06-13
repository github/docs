---
title: 创建仓库
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: '要将项目放在 {% data variables.product.prodname_dotcom %} 上，您需要创建一个仓库来存放它。'
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

## 创建仓库

{% ifversion fpt or ghec %}

您可以在 {% data variables.product.prodname_dotcom %} 仓库中存储各种项目，包括开源项目。 通过开源项目，您可以共享代码以开发更好、更可靠的软件。 您可以使用仓库与他人协作并跟踪您的工作。 更多信息请参阅“[关于仓库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)”。 要了解有关开源项目的更多信息，请访问 [OpenSource.org](http://opensource.org/about)。

{% elsif ghes or ghae %}

您可以在 {% data variables.product.product_name %} 仓库中存储各种项目，包括内部来源项目。 通过内部源代码，您可以分享代码来获取更好、更可靠的软件。 有关内部资源的更多信息，请参阅 {% data variables.product.company_short %} 的白皮书“[内部资源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**注意：**
- You can create public repositories for an open source project. 创建公共仓库时，请确保包含[许可文件](https://choosealicense.com/)以确定您希望与其他人共享项目。 {% data reusables.open-source.open-source-guide-repositories %}
- {% data reusables.open-source.open-source-learning %}
- You can also add community health files to your repositories, to set guidelines on how to contribute, keep your repositories safe, and much more. 更多信息请参阅“[创建默认社区健康文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. 为仓库键入简短、令人难忘的名称。 例如 "hello-world"。 ![用于输入仓库名称的字段](/assets/images/help/repository/create-repository-name.png)
3. （可选）添加仓库的说明。 例如，“我在 {% data variables.product.product_name %} 上的第一个仓库”。 ![用于输入仓库说明的字段](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

恭喜！ 您已成功创建第一个仓库，并使用*自述文件*对其进行了初始化。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. 在命令行中，导航到要在其中创建新项目的本地克隆的目录。
2. 要为项目创建存储库，请使用 `gh repo create` 子命令。 出现提示时，选择**从头开始在 GitHub 上创建新存储库** ，然后输入新项目的名称。 如果希望项目属于某个组织而不是您的个人帐户，请使用 `organization-name/project-name` 指定组织名称和项目名称。
3. 按照交互式提示进行操作。 要在本地克隆存储库，请在询问您是否要克隆远程项目目录时确认是。
4. 或者，要跳过提示，请提供存储库名称和可见性标志（`--public`、`--private` 或 `--internal`）。 例如 `gh repo create project-name --public`。 要在本地克隆存储库，请传递 `--clone` 标志。  有关可能的参数的详细信息，请参阅 [GitHub CLI 手册](https://cli.github.com/manual/gh_repo_create)。

{% endcli %}

## 提交您的第一个更改

{% webui %}

A *[提交](/articles/github-glossary#commit)*就像是项目中所有文件在特定时间点的快照。

创建新仓库时，您使用*自述文件*对其进行了初始化。 *自述文件*是详细介绍项目的好工具，您也可以添加一些文档，例如介绍如何安装或使用项目的文档。 *自述文件*的内容自动显示在仓库的首页上。

让我们提交对*自述文件*的更改。

1. 在仓库的文件列表中，单击 ***README.md***。 ![文件列表中的自述文件](/assets/images/help/repository/create-commit-open-readme.png)
2. 在文件内容的上方，单击 {% octicon "pencil" aria-label="The edit icon" %}。
3. 在 **Edit file（编辑文件）**选项卡上，键入一些关于您自己的信息。 ![文件中的新内容](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. 查看您对文件所做的更改。 您将看到绿色的新内容。 ![文件预览视图](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

创建项目后，可以开始提交更改。

*自述文件*是详细介绍项目的好工具，您也可以添加一些文档，例如介绍如何安装或使用项目的文档。 *自述文件*的内容自动显示在仓库的首页上。 请按照以下步骤添加 *README* 文件。

1. 在命令行中，导航到新项目的根目录。 （此目录是在运行 `gh repo create` 命令时创建的。）
1. 创建 *README* 文件，其中包含有关项目的一些信息。

    ```shell
    echo "info about this project" >> README.md
    ```

1. 输入 `git status`。 您将看到您有一个未跟踪的 `README.md` 文件。

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. 暂存并提交文件。

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. 将更改推送到您的分支。

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## 后续步骤

您现在已经创建了一个仓库，其中包括*自述文件*，并在 {% data variables.product.product_location %} 上创建了您的第一个提交。

{% webui %}

* 您现在可以克隆 {% data variables.product.prodname_dotcom %} 仓库以在计算机上创建本地副本。 从您的本地仓库，您可以提交并创建拉取请求来更新上游仓库中的更改。 更多信息请参阅“[克隆仓库](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)”和“[设置 Git](/articles/set-up-git)”。

{% endwebui %}

* 您可以在 {% data variables.product.prodname_dotcom %} 上找到有趣的项目和仓库，并通过创建仓库的复刻来更改它们。 {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
