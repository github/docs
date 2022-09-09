---
title: 忽略文件
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: '您可以配置 Git 忽略您不想检入 {% data variables.product.product_name %} 的文件。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4e98e0a4eb4f2f75056621bd0123c651a04a9b6d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129000'
---
## 为单个仓库配置忽略的文件

可以在存储库的根目录中创建 .gitignore 文件，指示 Git 在你进行提交时要忽略哪些文件和目录。
要与克隆存储库的其他用户共享忽略规则，请将 .gitignore 文件提交到你的存储库。

GitHub 在 `github/gitignore` 公共存储库中维护建议用于许多常用操作系统、环境及语言的 .gitignore 文件的正式列表。 还可以使用 gitignore.io 创建 .gitignore 文件，以用于操作系统、编程语言或 IDE。 有关详细信息，请参阅“[github/gitignore](https://github.com/github/gitignore)”和“[gitignore.io](https://www.gitignore.io/)”站点。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 导航到 Git 仓库的位置。
3. 为存储库创建 .gitignore 文件。
   ```shell
   $ touch .gitignore
  ```

   如果命令成功，则不会有输出。
   
有关 .gitignore 文件的示例，请参阅 Octocat 存储库中的“[一些常见 .gitignore 配置](https://gist.github.com/octocat/9257657)”。

如果想要忽略已检入的文件，则必须在添加忽略该文件的规则之前取消跟踪它。 从终端取消跟踪文件。

```shell
$ git rm --cached <em>FILENAME</em>
```

## 为计算机上的所有存储库配置忽略的文件

还可以创建全局 .gitignore 文件，以定义忽略计算机上每个 Git 存储库中文件的规则列表。 例如，在 ~/.gitignore_global 中创建文件并在其中加入一些规则。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 配置 Git 对所有 Git 存储库使用排除文件 ~/.gitignore_global。
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## 排除本地文件而不创建 .gitignore 文件

如果不想创建与其他人共享的 .gitignore 文件，可以创建不随存储库提交的规则。 您可以对不希望其他用户生成的本地生成文件使用此方法，例如编辑者创建的文件。

使用你常用的文本编辑器打开 Git 存储库根目录中名为 .git/info/exclude 的文件。 您在此处添加的任何规则都不会检入，并且只会对您的本地仓库忽略文件。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 导航到 Git 仓库的位置。
3. 使用你常用的文本编辑器打开文件 .git/info/exclude。

## 深入阅读

* Pro Git 书中的[忽略文件](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
* Git 手册页中的 [.gitignore](https://git-scm.com/docs/gitignore)
* github/gitignore 存储库中的[有用的 .gitignore 模板集合](https://github.com/github/gitignore)
* [gitignore.io](https://www.gitignore.io/) 站点
