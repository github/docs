---
title: 创建存储库
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: '若要将项目放在 {% data variables.product.prodname_dotcom %} 上，需要创建一个存储库来存放它。'
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
ms.openlocfilehash: 66db99def4463929236197fdc4903f82bfc1cbe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682291'
---
## 创建存储库

{% ifversion fpt or ghec %}

可以在 {% data variables.product.prodname_dotcom %} 存储库中存储各种项目，包括开源项目。 通过开源项目，可以共享代码以开发更好、更可靠的软件。 您可以使用仓库与他人协作并跟踪您的工作。 有关详细信息，请参阅[关于存储库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)。 若要详细了解开放源代码项目，请访问 [OpenSource.org](https://opensource.org/about)。

{% elsif ghes or ghae %}

您可以在 {% data variables.product.product_name %} 仓库中存储各种项目，包括内部来源项目。 通过内部源代码，您可以分享代码来获取更好、更可靠的软件。 有关内部来源的详细信息，请参阅 {% data variables.product.company_short %} 的白皮书[内部来源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)。

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**注意：** 
- 可以为开放源代码项目创建公共存储库。 创建公共存储库时，请确保包含一个[许可文件](https://choosealicense.com/)，用于界定你希望与他人共享自己项目的方式。 {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- 还可以将社区运行状况文件添加到存储库中，以设置有关如何参与、保护存储库安全等的准则。 有关详细信息，请参阅[创建默认社区运行状况文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)。 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. 为存储库键入简短好记的名称。 例如 "hello-world"。
  ![用于输入存储库名称的字段](/assets/images/help/repository/create-repository-name.png)
3. 可以选择性地添加存储库的说明。 例如，“我在 {% data variables.product.product_name %} 上的第一个仓库”。
  ![用于输入存储库说明的字段](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

恭喜！ 你已经成功创建了第一个存储库，并使用自述文件对其进行了初始化。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. 在命令行中，导航到要在其中创建新项目的本地克隆的目录。
2. 若要为项目创建存储库，请使用 `gh repo create` 子命令。 出现提示时，选择“从头开始在 GitHub 上创建新存储库”，然后输入新项目的名称 如果希望项目属于某个组织而不是你的个人帐户，请使用 `organization-name/project-name` 指定组织名称和项目名称。 
3. 按照交互式提示进行操作。 要在本地克隆存储库，请在询问您是否要克隆远程项目目录时确认是。  
4. 或者，若要跳过提示，请提供存储库名称和可见性标志（`--public`、`--private` 或 `--internal`）。 例如 `gh repo create project-name --public`。 若要在本地克隆存储库，请传递 `--clone` 标志。  有关可能的参数的详细信息，请参阅 [GitHub CLI 手册](https://cli.github.com/manual/gh_repo_create)。

{% endcli %}

## 提交您的第一个更改

{% webui %}

*[提交](/articles/github-glossary#commit)* 就像是项目中所有文件在特定时间点的快照。

创建新存储库时，你使用自述文件对其进行了初始化。 README 文件用于更详细地描述项目或添加一些指南性文档（例如如何安装或使用项目）。 README 文件的内容会自动显示在存储库的首页上。

让我们提交对自述文件的更改。

1. 在存储库的文件列表中，单击“README.md”。
  ![文件列表中的自述文件](/assets/images/help/repository/create-commit-open-readme.png)
2. 在文件内容上方，单击 {% octicon "pencil" aria-label="The edit icon" %}。
3. 在“编辑文件”选项卡上，键入一些关于你自己的信息。
  ![文件中的新内容](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. 查看您对文件所做的更改。 你会看到新内容以绿色显示。
  ![文件预览视图](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

创建项目后，可以开始提交更改。

README 文件用于更详细地描述项目或添加一些指南性文档（例如如何安装或使用项目）。 README 文件的内容会自动显示在存储库的首页上。 按照以下步骤添加一个自述文件。

1. 在命令行中，导航到新项目的根目录。 （此目录是在运行 `gh repo create` 命令时创建的。）
1. 创建自述文件，其中包含有关项目的一些信息。

    ```shell
    echo "info about this project" >> README.md
    ```

1. 输入 `git status`。 你会看到你有一个未跟踪的 `README.md` 文件。

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

你现在已经创建了一个存储库，其中包括自述文件，并在 {% data variables.product.product_location %} 上创建了你的第一个提交。

{% webui %}

* 现在可以克隆 {% data variables.product.prodname_dotcom %} 存储库以在计算机上创建本地副本。 从您的本地仓库，您可以提交并创建拉取请求来更新上游仓库中的更改。 有关详细信息，请参阅[克隆存储库](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)和[设置 Git](/articles/set-up-git)。

{% endwebui %}

* 可以在 {% data variables.product.prodname_dotcom %} 上找到有趣的项目和存储库，并通过创建存储库分支来更改它们。 {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
