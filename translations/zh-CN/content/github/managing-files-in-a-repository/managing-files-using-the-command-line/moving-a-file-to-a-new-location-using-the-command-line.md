---
title: 使用命令行将文件移到新位置
intro: 您可以使用命令行在仓库中移动文件，从旧位置删除文件，然后将其添加到新位置。
redirect_from:
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

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

### 延伸阅读

- "[使用命令行重命名文件](/articles/renaming-a-file-using-the-command-line)"
- "[使用命令行添加文件到仓库](/articles/adding-a-file-to-a-repository-using-the-command-line)"
