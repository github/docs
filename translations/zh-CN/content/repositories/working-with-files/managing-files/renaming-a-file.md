---
title: 重命名文件
intro: '您可以直接在 {% data variables.product.product_name %} 中或使用命令行重命名存储库中的任何文件。'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 826c9c45ee8cace0d3e81c78fc010ac4c76f9ab1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129260'
---
## 重命名 {% data variables.product.product_name %} 上的文件

你还可以在重命名文件时[将文件移动到新位置](/articles/moving-a-file-to-a-new-location)

{% tip %}

**提示**：

- 如果尝试在无权访问的存储库中重命名文件，我们将创建到个人帐户的项目分支，并在你提交更改后帮助你向原始存储库发送[拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)。
- 通过 Web 界面创建的文件名只能包含字母数字字符和连字符 (`-`)。 要使用其他字符，请在本地创建和提交文件，然后将它们推送到仓库。
- 有些文件（如图像）需要您从命令行重命名它们。 有关详细信息，请参阅“[使用命令行重命名文件](/articles/renaming-a-file-using-the-command-line)”。

{% endtip %}

1. 在仓库中浏览到您要重命名的文件。
2. 在文件视图的右上角，单击 {% octicon "pencil" aria-label="The edit icon" %} 以打开文件编辑器。
![编辑文件图标](/assets/images/help/repository/edit-file-icon.png)
3. 在文件名字段中，将文件名称更改为所需的新文件名。 您还可以同时更新文件的内容。
![编辑文件名](/assets/images/help/repository/changing-file-name.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 使用命令行重命名文件 

您可以使用命令行重命名仓库中的任何文件。

许多文件可以[直接在 {% data variables.product.product_name %} 上重命名](/articles/renaming-a-file)，但某些文件（如图像）要求从命令行对它们重命名。

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. 重命名文件，指定旧文件名和要为文件提供的新名称。 这将暂存您的提交更改。
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. 使用 `git status` 检查旧文件名和新文件名。
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

