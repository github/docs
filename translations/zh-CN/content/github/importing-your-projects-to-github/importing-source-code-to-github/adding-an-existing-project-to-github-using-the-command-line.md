---
title: 使用命令行添加现有项目到 GitHub
intro: '将您的现有工作放到 {% data variables.product.product_name %} 上可通过许多很好的方式共享和协作。'
redirect_from:
  - /articles/add-an-existing-project-to-github/
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: 本地添加项目
---

## About adding existing projects to {% data variables.product.product_name %}

{% data reusables.repositories.migrating-from-codeplex %}

{% tip %}

**提示：**如果您最喜欢点按式用户界面，请尝试使用 {% data variables.product.prodname_desktop %} 添加项目。 更多信息请参阅 *{% data variables.product.prodname_desktop %} 帮助*中的“[从本地计算机添加仓库到 GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)”。

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Adding a project to {% data variables.product.product_name %} with {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} 是用于从计算机的命令行使用 {% data variables.product.product_name %} 的开源工具。 {% data variables.product.prodname_cli %} can simplify the process of adding an existing project to {% data variables.product.product_name %} using the command line. To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

1. In the command line, navigate to the root directory of your project.
1. 将本地目录初始化为 Git 仓库。

    ```shell
    git init -b main
    ```

1. To create a repository for your project on {% data variables.product.product_name %}, use the `gh repo create` subcommand. Replace `project-name` with the desired name for your repository. If you want your project to belong to an organization instead of to your user account, specify the organization name and project name with `organization-name/project-name`.

   ```shell
   gh repo create <em>project-name</em>
   ```

1. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_repo_create).
1. Pull changes from the new repository that you created. (If you created a `.gitignore` or `LICENSE` file in the previous step, this will pull those changes to your local directory.)

    ```shell
    git pull --set-upstream origin main
    ```

1. Stage, commit, and push all of the files in your project.

    ```shell
    git add . && git commit -m "initial commit" && git push
    ```

## Adding a project to {% data variables.product.product_name %} without {% data variables.product.prodname_cli %}

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
7. 在 {% data variables.product.product_name %} 仓库的 Quick Setup（快速设置）页面顶部，单击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 复制远程仓库 URL。 ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
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
7. 在 {% data variables.product.product_name %} 仓库的 Quick Setup（快速设置）页面顶部，单击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 复制远程仓库 URL。 ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在命令提示中，[添加远程仓库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在该 URL 推送本地仓库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [推送更改](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)（本地仓库中）到 {% data variables.product.product_location %}。
  ```shell
  $ git push origin master
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
7. 在 {% data variables.product.product_name %} 仓库的 Quick Setup（快速设置）页面顶部，单击 {% octicon "clippy" aria-label="The copy to clipboard icon" %} 复制远程仓库 URL。 ![创建远程仓库 URL 字段](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 在终端上，[添加远程仓库的 URL](/github/getting-started-with-github/managing-remote-repositories)（将在该 URL 推送本地仓库）。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [推送更改](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)（本地仓库中）到 {% data variables.product.product_location %}。
  ```shell
  $ git push origin master
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## 延伸阅读

- "[添加文件到仓库](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"
