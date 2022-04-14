---
title: 将文件移至新位置
intro: '您可以在 {% data variables.product.product_name %} 上或使用命令行将文件移动到其他目录。'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 移动 文件
---

除了更改文件位置之外，您也可以在同一提交中[更新文件内容](/articles/editing-files-in-your-repository)或[提供新名称](/articles/renaming-a-file)。

## 将文件移动到 {% data variables.product.product_name %} 上的新位置

{% tip %}

**提示**：

- 如果尝试在您没有访问权限的仓库中移动文件，我们会将项目复刻到您的用户帐户，并在您提交更改后帮助您发送[拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)到原仓库。
- 有些文件（如图像）需要您从命令行移动它们。 更多信息请参阅“[使用命令行将文件移至新位置](/articles/moving-a-file-to-a-new-location-using-the-command-line)”。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. 在仓库中浏览到您要移动的文件。
2. 在文件视图的右上角，单击 {% octicon "pencil" aria-label="The edit icon" %} 打开文件编辑器。 ![编辑文件图标](/assets/images/help/repository/move-file-edit-file-icon.png)
3. 在文件名字段中，按照以下原则更改文件名称： ![编辑文件名](/assets/images/help/repository/moving_files.gif)
    - 要将文件**移入子文件夹**，请输入所需文件夹的名称，后接 `/`。 新文件夹名称将变成导航层次结构中的新项目。
    - 要将文件移入**文件当前位置上方**的目录，请将光标放在文件名字段的开头，然后输入 `../` 以上跳一个完整的目录层级，或者输入 `backspace` 键以编辑父文件夹的名称。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## 使用命令行将文件移到新位置

您可以使用命令行在仓库中移动文件，从旧位置删除文件，然后将其添加到新位置。

许多文件可[在 {% data variables.product.product_name %} 上直接移动](/articles/moving-a-file-to-a-new-location)，但有些文件（如图像）需要从命令行移动。

{% data reusables.command_line.manipulating_file_prereqs %}

1. 在计算机上，将文件移至克隆仓库时在计算机上本地创建的目录中的新位置。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 使用 `git status` 检查新旧文件位置。
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /<em>old-folder</em>/<em>image.png</em>
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /<em>new-folder</em>/<em>image.png</em>
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %} 这将从旧位置删除或 `git rm` 文件，并且添加或 `git add` 文件到新位置。
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. 使用 `git status` 检查为提交暂存的更改。
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}
