---
title: 创建新文件
intro: '您可以直接在 {% data variables.product.product_name %} 上为您拥有写入权限的任何仓库创建新文件。'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129268'
---
在 {% data variables.product.product_name %} 上创建文件时，请注意以下几点：

- 如果尝试在存储库中创建无权访问的新文件，我们会在你的个人帐户中创建该项目的分支，并在你提交更改后帮助你向原始存储库发送[拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)。
- 通过 Web 界面创建的文件名只能包含字母数字字符和连字符 (`-`)。 要使用其他字符，[在本地创建并提交文件，然后将它们推送到 {% data variables.product.product_name %} 上的存储库](/articles/adding-a-file-to-a-repository-using-the-command-line)。

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. 在仓库中，浏览到要在其中创建文件的文件夹。
{% data reusables.files.add-file %}
4. 在文件名字段中，键入文件的名称和扩展名。 要创建子目录，请键入 `/` 目录分隔符。
“新文件名”![](/assets/images/help/repository/new-file-name.png)
5. 在“编辑新文件”选项卡上，将内容添加到文件中。
![新文件中的内容](/assets/images/help/repository/new-file-content.png)
6. 要查看新内容，请单击“预览”。
![新文件“预览”按钮](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
