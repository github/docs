---
title: 查看文件
intro: 可以查看原始文件内容或跟踪对文件中各行的更改，了解文件的各个部分如何随时间演变。
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: bc27fc67cfd18eb20f8c612b81f4d6dd5da20913
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680987'
---
## 查看或复制原始文件内容

使用原始视图，可以查看或复制不带任何样式的文件原始内容。

{% data reusables.repositories.navigate-to-repo %}
1. 单击要查看的文件。
2. 在文件视图的右上角，单击“原始”。
![文件标头中“原始”按钮的屏幕截图](/assets/images/help/repository/raw-file-button.png)
3. （可选）若要复制原始文件内容，请在文件视图右上角单击“{% octicon "copy" aria-label="The copy icon" %}”。

## 查看文件的逐行修订历史记录

使用追溯视图时，可以查看整个文件的逐行修订历史记录，也可以单击 {% octicon "versions" aria-label="The prior blame icon" %} 查看文件中某一行的修订历史记录。 每次单击 {% octicon "versions" aria-label="The prior blame icon" %} 后，将看到该行以前的修订信息，包括提交更改的人员和时间。

![Git 追溯视图](/assets/images/help/repository/git_blame.png)

在文件或拉取请求中，还可以使用 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} 菜单查看所选行或行范围的 Git 追溯。

![带有查看所选行 Git 追溯选项的 Kebab 菜单](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

提示：在命令行上，还可以使用 `git blame` 查看文件内各行的修订历史记录。 有关详细信息，请参阅 [Git 的 `git blame` 文档](https://git-scm.com/docs/git-blame)。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 单击以打开您想要查看其行历史记录的文件。
3. 在文件视图的右上角，单击“追溯”以打开追溯视图。
![“追溯”按钮](/assets/images/help/repository/blame-button.png)
4. 若要查看特定行的早期修订，或重新追溯，请单击 {% octicon "versions" aria-label="The prior blame icon" %}，直至找到你想查看的更改。
![先前的追溯按钮](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## 忽略追溯视图中的提交

`.git-blame-ignore-revs` 文件中指定的所有修订（必须位于存储库的根目录中）利用 Git 的 `git blame --ignore-revs-file` 配置设置从追溯视图中隐藏。 有关详细信息，请参阅 Git 文档中的 [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt)。

1. 在存储库的根目录中，创建一个名为 `.git-blame-ignore-revs` 的文件。
2. 在该文件中添加要从追溯视图中排除的提交哈希。 建议按如下所示构建文件（包括评论）：

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. 提交并推送更改。

现在，访问追溯视图时，追溯中将不会包含列出的修订。 你会看到“忽略 .git-blame-ignore-revs 中的修订”横幅，表明某些提交可能已隐藏：

![链接到 .git-blame-ignore-revs 文件的追溯视图上横幅的屏幕截图](/assets/images/help/repository/blame-ignore-revs-file.png)

当一些提交对代码进行大量更改时，这非常有用。 也可以在本地运行 `git blame` 时使用该文件：

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

还可以配置本地 git，使其始终忽略该文件中的修订：

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}
