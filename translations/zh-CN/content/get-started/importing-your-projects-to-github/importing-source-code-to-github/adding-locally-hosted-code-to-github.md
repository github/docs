---
title: 将本地托管代码添加到 GitHub
intro: '了解如何使用 {% data variables.product.prodname_cli %} 或 Git 命令从命令行将现有源代码或存储库添加到 {% data variables.product.product_name %}。 然后，共享代码并邀请其他人与你一起工作。'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add locally hosted code
ms.openlocfilehash: 5dc22ef9d8b5f11618bc90414c9d94fcdfe50462
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '145128968'
---
## <a name="about-adding-existing-source-code-to--data-variablesproductproduct_name-"></a>关于将现有源代码添加到 {% data variables.product.product_name %}

如果计算机或专用网络上已有本地存储的源代码或存储库，可以通过在终端中键入命令来将其添加到 {% data variables.product.product_name %} 中。 也可以通过直接键入 Git 命令或使用 {% data variables.product.prodname_cli %} 来执行此操作。

{% data variables.product.prodname_cli %} 是用于从计算机的命令行使用 {% data variables.product.prodname_dotcom %} 的开源工具。 {% data variables.product.prodname_cli %} 可以简化使用命令行将现有项目添加到 {% data variables.product.product_name %} 的过程。 要详细了解 {% data variables.product.prodname_cli %}，请参阅“[关于 {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)”。

{% tip %}

提示：如果你最喜欢点按式用户界面，请尝试使用 {% data variables.product.prodname_desktop %} 添加项目。 有关详细信息，请参阅“{% data variables.product.prodname_desktop %} 帮助”中的[将存储从本地计算机添加到 GitHub 桌面](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)。

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## <a name="adding-a-local-repository-to--data-variablesproductproduct_name--with--data-variablesproductprodname_cli-"></a>使用 {% data variables.product.prodname_cli %} 将本地存储库添加到 {% data variables.product.product_name %}

1. 在命令行中，导航到项目的根目录。
1. 将本地目录初始化为 Git 仓库。

    ```shell
    git init -b main
    ```

1. 暂存并提交项目中的所有文件

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. 要为 GitHub 上的项目创建存储库，请使用 `gh repo create` 子命令。 出现提示时，选择“将现有本地存储库推送到 GitHub”，并输入存储库所需的名称。 如果希望项目属于某个组织而不是你的用户帐户，请使用 `organization-name/project-name` 指定组织名称和项目名称。

1. 按照交互式提示进行操作。 要添加远程并推送存储库，请在被要求添加远程并将提交推送到当前分支时确认“是”。

1. 或者，若要跳过提示，请使用 `--source` 标志提供存储库的路径，并传递可见性标志（`--public`、`--private` 或 `--internal`）。 例如 `gh repo create --source=. --public`。 使用 `--remote` 标志指定远程。 要推送提交，请传递 `--push` 标志。 有关可能的参数的详细信息，请参阅 [GitHub CLI 手册](https://cli.github.com/manual/gh_repo_create)。

## <a name="adding-a-local-repository-to--data-variablesproductproduct_name--using-git"></a>将本地存储库添加到 {% data variables.product.product_name %} using Git

{% mac %}

1. 在 {% data variables.product.product_location %} 上[新建存储库](/repositories/creating-and-managing-repositories/creating-a-new-repository)。 为避免错误，请勿使用 README、许可或 `gitignore` 文件初始化新存储库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。
    ![新建存储库下拉菜单](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. 将当前工作目录更改为您的本地仓库。
4. 将本地目录初始化为 Git 仓库。
  ```shell
  $ git init -b main
  ```
5. 在新的本地仓库中添加文件。 这会暂存它们用于第一次提交。
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. 提交暂存在本地仓库中的文件。
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. 在仓库顶部 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 的快速设置页面，点击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 以复制远程仓库 URL。
    ![创建远程存储库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在终端中，[添加远程存储库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在其中推送本地存储库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [将本地存储库中的更改推送](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)到 {% data variables.product.product_location %}。
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. 在 {% data variables.product.product_location %} 上[新建存储库](/articles/creating-a-new-repository)。 为避免错误，请勿使用 README、许可或 `gitignore` 文件初始化新存储库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。
    ![新建存储库下拉菜单](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. 将当前工作目录更改为您的本地仓库。
4. 将本地目录初始化为 Git 仓库。
  ```shell
  $ git init -b main
  ```
5. 在新的本地仓库中添加文件。 这会暂存它们用于第一次提交。
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. 提交暂存在本地仓库中的文件。
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. 在仓库顶部 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 的快速设置页面，点击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 以复制远程仓库 URL。
    ![创建远程存储库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在命令提示中，[添加远程存储库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在其中推送本地存储库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [将本地存储库中的更改推送](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)到 {% data variables.product.product_location %}。
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. 在 {% data variables.product.product_location %} 上[新建存储库](/articles/creating-a-new-repository)。 为避免错误，请勿使用 README、许可或 `gitignore` 文件初始化新存储库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。
    ![新建存储库下拉菜单](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. 将当前工作目录更改为您的本地仓库。
4. 将本地目录初始化为 Git 仓库。
  ```shell
  $ git init -b main
  ```
5. 在新的本地仓库中添加文件。 这会暂存它们用于第一次提交。
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. 提交暂存在本地仓库中的文件。
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. 在仓库顶部 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 的快速设置页面，点击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 以复制远程仓库 URL。
    ![创建远程存储库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在终端中，[添加远程存储库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在其中推送本地存储库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [将本地存储库中的更改推送](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)到 {% data variables.product.product_location %}。
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## <a name="further-reading"></a>延伸阅读

- [添加文件到存储库](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)
