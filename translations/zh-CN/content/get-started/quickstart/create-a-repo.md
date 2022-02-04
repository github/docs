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

您可以在 {% data variables.product.prodname_dotcom %} 仓库中存储各种项目，包括开源项目。 通过[开源项目](http://opensource.org/about)，您可以共享代码以开发更好、更可靠的软件。 您可以使用仓库与他人协作并跟踪您的工作。 更多信息请参阅“[关于仓库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)”。

{% elsif ghes or ghae %}

您可以在 {% data variables.product.product_name %} 仓库中存储各种项目，包括内部来源项目。 通过内部源代码，您可以分享代码来获取更好、更可靠的软件。 有关内部资源的更多信息，请参阅 {% data variables.product.company_short %} 的白皮书“[内部资源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)”。

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**注：**您可以为开源项目创建公共仓库。 创建公共仓库时，请确保包含[许可文件](https://choosealicense.com/)以确定您希望与其他人共享项目。 {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

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

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
2. To create a repository for your project, use the `gh repo create` subcommand. When prompted, select **Create a new repository on GitHub from scratch** and enter the name of your new project. If you want your project to belong to an organization instead of to your user account, specify the organization name and project name with `organization-name/project-name`.
3. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory.
4. Alternatively, to skip the prompts supply the repository name and a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create project-name --public`. To clone the repository locally, pass the `--clone` flag.  For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

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
5. 查看您对文件所做的更改。 您会看到新内容以绿色显示。 ![文件预览视图](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

*自述文件*是详细介绍项目的好工具，您也可以添加一些文档，例如介绍如何安装或使用项目的文档。 *自述文件*的内容自动显示在仓库的首页上。 Follow these steps to add a *README* file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a *README* file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## 祝贺

恭喜！ 您现在已经创建了一个仓库，其中包括*自述文件*，并在 {% data variables.product.product_location %} 上创建了您的第一个提交。

{% webui %}

您现在可以克隆 {% data variables.product.prodname_dotcom %} 仓库以在计算机上创建本地副本。 从您的本地仓库，您可以提交并创建拉取请求来更新上游仓库中的更改。 更多信息请参阅“[克隆仓库](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)”和“[设置 Git](/articles/set-up-git)”。

{% endwebui %}

您可以在 {% data variables.product.prodname_dotcom %} 上找到有趣的项目和仓库，并通过创建仓库的复刻来更改它们。 更多信息请参阅“[复刻仓库](/articles/fork-a-repo)”。

{% data variables.product.prodname_dotcom %} 中的每个仓库均归个人或组织所有。 您可以在 {% data variables.product.prodname_dotcom %} 上连接和关注人员、仓库和组织以与之进行交互。 更多信息请参阅“[社交](/articles/be-social)”。

{% data reusables.support.connect-in-the-forum-bootcamp %}
