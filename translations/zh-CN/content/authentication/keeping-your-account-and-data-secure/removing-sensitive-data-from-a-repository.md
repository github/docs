---
title: 从存储库中删除敏感数据
intro: 如果将敏感数据（例如密码或 SSH 密钥）提交到 Git 仓库，您可以将其从历史记录中删除。 要从存储库的历史记录中彻底删除不需要的文件，可以使用 `git filter-repo` 工具或 BFG Repo-Cleaner 开放源代码工具。
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
ms.openlocfilehash: 4c93f372f1d537fd94f06e66986e53d6641923d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084649'
---
`git filter-repo` 工具和 BFG Repo-Cleaner 将重写存储库的历史记录，这将更改你更改的现有提交的 SHA，以及任何相关的提交。 更改的提交 SHA 可能会影响存储库中未完结的拉取请求。 我们建议在从存储库中删除文件之前合并或关闭所有未完结的拉取请求。

可以使用 `git rm` 从最新提交中删除文件。 有关删除在最新提交中添加的文件的信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的大型文件](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)。”

{% warning %}

警告：本文说明如何使用无法从 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上存储库中的任何分支或标记访问的敏感数据进行提交。 但是，这些提交在你存储库的任何克隆或分支中、直接通过 {% data variables.product.product_name %} 上缓存视图中其 SHA-1 哈希以及通过引用它们的任何拉取请求可能仍然可访问。 您无法从仓库的其他用户的克隆或复刻删除敏感数据，但您可以通过联系 {% data variables.contact.contact_support %}，永久删除 {% data variables.product.product_name %} 上拉取请求中敏感数据的缓存视图和引用。 

将提交推送到 {% data variables.product.product_name %} 后，应将提交中的所有敏感数据视为泄露。 如果你提交了密码，请更改密码！ 如果您提交了密钥，请生成新密钥。 删除泄露的数据并不能解决其初始暴露问题，尤其是在仓库的现有克隆或复刻中。 在重写仓库历史记录的决定中考虑这些限制。

{% endwarning %}

## 从仓库的历史记录中清除文件

你可以使用 `git filter-repo` 工具或 BFG Repo-Cleaner 开源工具从存储库的历史记录中清除文件。

### 使用 BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) 是由开源社区生成和维护的工具。 它提供了一种可替代 `git filter-branch` 的更快、更简单的方法，用于删除不需要的数据。 

例如，要删除包含敏感数据的文件并保持最新提交不变，请运行：

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

要替换可以在存储库的历史记录中找到的 `passwords.txt` 列出的所有文本，请运行：

```shell
$ bfg --replace-text passwords.txt
```

删除敏感数据后，必须强制将更改推送到 {% data variables.product.product_name %}。 强制推送会重写存储库历史记录，这会从提交历史记录中删除敏感数据。 如果强制推送，它可能会覆盖其他人基于其工作的提交。

```shell
$ git push --force
```

有关完整的使用情况和下载说明，请参阅 [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) 的文档。

### 使用 git filter-repo

{% warning %}

**警告：** 如果在储藏更改之后运行 `git filter-repo`，则无法使用其他储藏命令检索更改。 在运行 `git filter-repo` 之前，建议取消储藏所做的任何更改。 要取消储藏你已储藏的最后一组更改，请运行 `git stash show -p | git apply -R`。 有关详细信息，请参阅 [Git 工具 - 储藏和清理](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)。

{% endwarning %}

为了说明 `git filter-repo` 的工作原理，我们将向你展示如何从存储库的历史记录中删除包含敏感数据的文件，并将其添加到 `.gitignore`，以确保不会意外地重新提交。

1. 安装 [git filter-repo](https://github.com/newren/git-filter-repo) 工具的最新版本。 可以手动安装 `git-filter-repo`，也可以使用包管理器安装。 例如，若使用 HomeBrew 安装工具，请使用 `brew install` 命令。
  ```
  brew install git-filter-repo
  ```
  有关详细信息，请参阅 `newren/git-filter-repo` 存储库中的 [INSTALL.md](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md)。

2. 如果存储库的本地副本的历史记录中没有敏感数据，请[将存储库克隆到本地计算机](/articles/cloning-a-repository/)。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. 导航到存储库的工作目录。
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. 运行以下命令，将 `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` 替换为要删除的文件的路径，而不只是其文件名。 这些参数将：
    - 强制 Git 处理（而不是签出）每个分支和标记的整个历史记录
    - 删除指定的文件，以及作为结果生成的任何空提交
    - 删除存储在 .git/config 文件中的某些配置，例如远程 URL。 你可能需要提前备份此文件，以便稍后还原。
    - **覆盖现有标记**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **注意：** 如果包含敏感数据的文件以前存在于任何其他路径（因为它被移动或重命名），则也必须在这些路径上运行此命令。

  {% endnote %}

5. 将包含敏感数据的文件添加到 `.gitignore`，以确保不会意外地再次提交。

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. 仔细检查是否已从存储库的历史记录中删除了所需的所有内容，并且已签出所有分支。
7. 在对存储库的状态感到满意，请强制推送本地更改以覆盖 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上的存储库，以及您向上推送的所有分支。 需要强制推送才能从提交历史记录中删除敏感数据。
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. 要从[标记版本](/articles/about-releases)删除敏感文件，还需要针对 Git 标记强制推送：
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```

## 完全从 {% data variables.product.prodname_dotcom %} 中删除数据

在使用 BFG 工具或 `git filter-repo` 删除敏感数据并将更改推送到 {% data variables.product.product_name %} 后，你必须再采取一些步骤，以完全从 {% data variables.product.product_name %} 中删除数据。

1. 联系 {% data variables.contact.contact_support %}，请求他们删除 {% data variables.product.product_name %} 上拉取请求中敏感数据的缓存视图和引用。 请提供存储库的名称和/或指向需要删除的提交的链接。{% ifversion ghes %} 有关站点管理员如何删除无法访问的 Git 对象，请参阅“[命令行实用程序](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc)”。{% endif %}

2. 告知协作者对根据旧式（受损）存储库历史记录创建的所有分支进行[变基](https://git-scm.com/book/en/Git-Branching-Rebasing)，而不是合并。 一次合并提交可能会重新引入您刚刚遇到清除问题的部分或全部污染的历史记录。

3. 经过一段时间并且确信 BFG 工具 / `git filter-repo` 没有任何意外的副作用后，你可以通过以下命令（使用 Git 1.8.5 或更新版本）强制取消引用本地存储库中的所有对象并进行垃圾回收：
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **注意：** 你也可以通过以下方法实现此目的：将筛选的历史记录推送到新的或空的存储库，然后从 {% data variables.product.product_name %} 进行全新克隆。

  {% endnote %}

## 避免将来的意外提交

有一些简单的技巧可避免提交您不想要提交的内容：

- 使用 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 或 [gitk](https://git-scm.com/docs/gitk) 等可视化程序提交更改。 可视程序通常可以更容易地查看每次提交时将添加、删除和修改具体哪些文件。
- 避免在命令行中使用笼统的命令 `git add .` 和 `git commit -a`，而是使用 `git add filename` 和 `git rm filename` 来单独暂存文件。
- 使用 `git add --interactive` 单独查看和暂存每个文件中的更改。
- 使用 `git diff --cached` 查看为提交暂存的更改。 如果不使用 `-a` 标志，这就是 `git commit` 将产生的确切差异。

## 延伸阅读

- [`git filter-repo` 手册页](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git：Git 工具 - 重写历史记录](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- [关于机密扫描](/code-security/secret-security/about-secret-scanning)
