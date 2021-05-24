---
title: 使用命令行添加现有项目到 GitHub
intro: '将您的现有工作放到 {% data variables.product.product_name %} 上可通过许多很好的方式共享和协作。'
redirect_from:
  - /articles/add-an-existing-project-to-github/
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% data reusables.repositories.migrating-from-codeplex %}

{% tip %}

**提示：**如果您最喜欢点按式用户界面，请尝试使用 {% data variables.product.prodname_desktop %} 添加项目。 更多信息请参阅 *{% data variables.product.prodname_desktop %} 帮助*中的“[从本地计算机添加仓库到 GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)”。

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

{% mac %}

1. [创建新仓库](/articles/creating-a-new-repository)

{% data variables.product.product_location %}. 为避免错误，请勿使用*自述文件*、许可或 `gitignore` 文件初始化新仓库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。
    ![创建新仓库下拉列表](/assets/images/help/repository/repo-create.png)
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
  $ git push -u origin master
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [创建新仓库](/articles/creating-a-new-repository)

{% data variables.product.product_location %}. 为避免错误，请勿使用*自述文件*、许可或 `gitignore` 文件初始化新仓库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。
    ![创建新仓库下拉列表](/assets/images/help/repository/repo-create.png)
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

1. [创建新仓库](/articles/creating-a-new-repository)

{% data variables.product.product_location %}. 为避免错误，请勿使用*自述文件*、许可或 `gitignore` 文件初始化新仓库。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。
    ![创建新仓库下拉列表](/assets/images/help/repository/repo-create.png)
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

### 延伸阅读

- "[使用命令行添加文件到仓库](/articles/adding-a-file-to-a-repository-using-the-command-line)"
