---
title: 使用命令行提交文件到仓库
intro: '您可以使用命令行将现有文件上传到 {{ site.data.variables.product.product_name }} 仓库。'
redirect_from:
  - /articles/adding-a-file-to-a-repository-from-the-command-line/
  - /articles/adding-a-file-to-a-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**提示：**您也可以[从 {{ site.data.variables.product.product_name }} 网站添加现有文件到仓库](/articles/adding-a-file-to-a-repository)。

{% endtip %}

{{ site.data.reusables.command_line.manipulating_file_prereqs }}

{{ site.data.reusables.repositories.sensitive-info-warning }}

1. 在计算机上，将要上传到 {{ site.data.variables.product.product_name }} 的文件移入在克隆仓库时创建的本地目录。
{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
{{ site.data.reusables.command_line.switching_directories_procedural }}
{{ site.data.reusables.git.stage_for_commit }}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {{ site.data.reusables.git.unstage-codeblock }}
  ```
{{ site.data.reusables.git.commit-file }}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {{ site.data.reusables.git.reset-head-to-previous-commit-codeblock }}
  ```
{{ site.data.reusables.git.git-push }}

### 延伸阅读

- "[创建新文件](/articles/creating-new-files)"
- "[使用命令行添加现有项目到 GitHub](/articles/adding-an-existing-project-to-github-using-the-command-line)"
