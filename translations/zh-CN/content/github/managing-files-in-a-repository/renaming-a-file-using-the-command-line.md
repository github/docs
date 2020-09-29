---
title: 使用命令行重命名文件
intro: 您可以使用命令行重命名仓库中的任何文件。
redirect_from:
  - /articles/renaming-a-file-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

许多文件可[在 {% data variables.product.product_name %} 上直接重命名](/articles/renaming-a-file)，但有些文件（如图像）需要从命令行重命名。

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. 重命名文件，指定旧文件名和要为文件提供的新名称。 这将暂存您的提交更改。
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. 使用 `git status` 检查新旧文件名。
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: <em>old_filename</em> -> <em>new_filename</em>
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### 延伸阅读
- “[使用命令行将文件移到新位置](/articles/moving-a-file-to-a-new-location-using-the-command-line)”
- "[使用命令行添加文件到仓库](/articles/adding-a-file-to-a-repository-using-the-command-line)"
