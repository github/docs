---
title: Adding locally hosted code to GitHub
intro: 'Learn how to add existing source code or repositories to {% data variables.product.product_name %} from the command line using {% data variables.product.prodname_cli %} or Git Commands. Then, share your code and invite others to work with you.'
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
---

## About adding existing source code to {% data variables.product.product_name %}

If you have existing source code or repositories stored locally on your computer or private network you can add them to {% data variables.product.product_name %} by typing commands in a terminal. You can do this by typing Git commands directly, or by using {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} 是用于从计算机的命令行使用 {% data variables.product.prodname_dotcom %} 的开源工具。 {% data variables.product.prodname_cli %} 可以简化使用命令行将现有项目添加到 {% data variables.product.product_name %} 的过程。 要了解有关 {% data variables.product.prodname_cli %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)”。

{% tip %}

**提示：**如果您最喜欢点按式用户界面，请尝试使用 {% data variables.product.prodname_desktop %} 添加项目。 更多信息请参阅 *{% data variables.product.prodname_desktop %} 帮助*中的“[从本地计算机添加仓库到 GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)”。

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Adding a local repository to {% data variables.product.product_name %} with {% data variables.product.prodname_cli %}

1. 在命令行中，导航到项目的根目录。
1. 将本地目录初始化为 Git 仓库。

    ```shell
    git init -b main
    ```

1. Stage and commit all the files in your project

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. To create a repository for your project on GitHub, use the `gh repo create` subcommand. When prompted, select **Push an existing local repository to GitHub** and enter the desired name for your repository. If you want your project to belong to an organization instead of your user account, specify the organization name and project name with `organization-name/project-name`.

1. 按照交互式提示进行操作。 To add the remote and push the repository, confirm yes when asked to add the remote and push the commits to the current branch.

1. Alternatively, to skip all the prompts, supply the path to the repository with the `--source` flag and pass a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create --source=. --public`. Specify a remote with the `--remote` flag. To push your commits, pass the `--push` flag. 有关可能的参数的详细信息，请参阅 [GitHub CLI 手册](https://cli.github.com/manual/gh_repo_create)。

## Adding a local repository to {% data variables.product.product_name %} using Git

{% mac %}

1. 在 {% data variables.product.product_location %} 上[创建新仓库](/repositories/creating-and-managing-repositories/creating-a-new-repository) 为避免错误，请勿使用*自述文件*、许可或 `gitignore` 文件初始化新仓库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。 ![创建新仓库下拉列表](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
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
7. 在仓库顶部 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 的快速设置页面，点击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 以复制远程仓库 URL。 ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在终端上，[添加远程仓库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在该 URL 推送本地仓库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [推送更改](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)（本地仓库中）到 {% data variables.product.product_location %}。
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. 在 {% data variables.product.product_location %} 上[创建新仓库](/articles/creating-a-new-repository) 为避免错误，请勿使用*自述文件*、许可或 `gitignore` 文件初始化新仓库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。 ![创建新仓库下拉列表](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
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
7. 在仓库顶部 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 的快速设置页面，点击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 以复制远程仓库 URL。 ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在命令提示中，[添加远程仓库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在该 URL 推送本地仓库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [推送更改](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)（本地仓库中）到 {% data variables.product.product_location %}。
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. 在 {% data variables.product.product_location %} 上[创建新仓库](/articles/creating-a-new-repository) 为避免错误，请勿使用*自述文件*、许可或 `gitignore` 文件初始化新仓库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。 ![创建新仓库下拉列表](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
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
7. 在仓库顶部 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 的快速设置页面，点击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 以复制远程仓库 URL。 ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在终端上，[添加远程仓库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在该 URL 推送本地仓库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [推送更改](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)（本地仓库中）到 {% data variables.product.product_location %}。
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## 延伸阅读

- "[添加文件到仓库](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"
