---
title: 从远程仓库获取更改
intro: 您可以使用常用 Git 命令访问远程仓库。
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: 11996b33ccedea8169f472feb1804f2eed5a5d9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109491'
---
## 获取更改的选项

与[远程存储库](/github/getting-started-with-github/about-remote-repositories)交互时，这些命令非常有用。 `clone` 和 `fetch` 将远程代码从存储库的远程 URL 下载到本地计算机，`merge` 用于将其他人的工作与你的工作合并在一起，而 `pull` 是 `fetch` 和 `merge` 的组合。

## 克隆仓库

若要获取其他用户存储库的完整副本，请使用 `git clone`，如下所示：

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clones a repository to your computer
```

克隆存储库时，可以从[多个不同的 URL](/github/getting-started-with-github/about-remote-repositories) 中进行选择。 登录到 {% data variables.product.prodname_dotcom %} 后，可在仓库详细信息下面找到这些 URL：

![远程 URL 列表](/assets/images/help/repository/remotes-url.png)

运行 `git clone` 时，会执行以下操作：
- 创建名为 `repo` 的新文件夹
- 将它初始化为 Git 仓库
- 创建名为 `origin` 的远程存储库，指向用于克隆的 URL
- 将所有的仓库文件和提交下载到那里
- 默认分支已检出

对于远程存储库中的每个分支 `foo`，在本地存储库中创建相应的远程跟踪分支 `refs/remotes/origin/foo`。 通常可将此类远程跟踪分支名称缩写为 `origin/foo`。

## 从远程仓库获取更改

使用 `git fetch` 检索其他人完成的新工作。 从存储库中提取会获取所有新的远程跟踪分支和标记，而无需将这些更改合并到自己的分支中。

如果已经有本地存储库包含为所需项目设置的远程 URL，则可以通过在终端使用 `git fetch *remotename*` 获取所有新信息：

```shell
$ git fetch <em>remotename</em>
# Fetches updates made to a remote repository
```

否则，您可以随时添加新的远程，然后获取。 有关详细信息，请参阅“[管理远程存储库](/github/getting-started-with-github/managing-remote-repositories)”。

## 合并更改到本地分支

合并可将您的本地更改与其他人所做的更改组合起来。

通常将远程跟踪分支（即从远程仓库获取的分支）与您的本地分支进行合并：

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Merges updates made online with your local work
```

## 从远程仓库拉取更改

`git pull` 是在同一命令中完成 `git fetch` 和 `git merge ` 的便捷方式：

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Grabs online updates and merges them with your local work
```

由于 `pull` 会对检索到的更改执行合并，因此应确保在运行 `pull` 命令之前提交本地工作。 如果遇到无法解决的[合并冲突](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)，或者如果你决定退出合并，则可以使用 `git merge --abort` 将分支返回到拉取之前的位置。

## 延伸阅读

- [_Pro Git_ 一书中的“使用远程存储库”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) {% ifversion fpt or ghec %}
- “[连接问题故障排除](/articles/troubleshooting-connectivity-problems)”{% endif %}
