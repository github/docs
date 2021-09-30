---
title: 从仓库中删除敏感数据
intro: 如果将敏感数据（例如密码或 SSH 密钥）提交到 Git 仓库，您可以将其从历史记录中删除。 To entirely remove unwanted files from a repository's history you can use either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: 删除敏感数据
---

The `git filter-repo` tool and the BFG Repo-Cleaner rewrite your repository's history, which changes the SHAs for existing commits that you alter and any dependent commits. 更改的提交 SHA 可能会影响仓库中的打开拉取请求。 我们建议在从仓库中删除文件之前合并或关闭所有打开的拉取请求。

您可以使用 `git rm` 从最新提交中删除该文件。 For information on removing a file that was added with the latest commit, see "[About large files on {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history)."

{% warning %}

本文将告知您如何使含有敏感数据的提交从 {% data variables.product.product_name %} 仓库中的任何分支或标记均无法访问。 但需要注意的是，这些提交在您仓库的任何克隆或复刻中、直接通过 {% data variables.product.product_name %} 上缓存视图中其 SHA-1 哈希以及通过引用它们的任何拉取请求可能仍然可访问。 You cannot remove sensitive data from other users' clones or forks of your repository, but you can permanently remove cached views and references to the sensitive data in pull requests on {% data variables.product.product_name %} by contacting {% data variables.contact.contact_support %}.

**Warning: Once you have pushed a commit to {% data variables.product.product_name %}, you should consider any sensitive data in the commit compromised.** If you committed a password, change it! 如果您提交了密钥，请生成新密钥。 Removing the compromised data doesn't resolve its initial exposure, especially in existing clones or forks of your repository. Consider these limitations in your decision to rewrite your repository's history.

{% endwarning %}

## 从仓库的历史记录中清除文件

You can purge a file from your repository's history using either the `git filter-repo` tool or the BFG Repo-Cleaner open source tool.

### 使用 BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) 是一种由开源社区构建和维护的工具。 它提供一种更快、更简单的 `git filter-branch` 替代方法，用于删除不需要的数据。

例如，要删除包含敏感数据的文件并保持最新提交不变，请运行：

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

要替换在仓库历史记录中找到的、`passwords.txt` 中列出的所有文本，请运行：

```shell
$ bfg --replace-text passwords.txt
```

删除敏感数据后，必须强制将更改推送到 {% data variables.product.product_name %}。

```shell
$ git push --force
```

有关完整的使用和下载说明，请参阅 [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) 的文档。

### Using git filter-repo

{% warning %}

**Warning:** If you run `git filter-repo` after stashing changes, you won't be able to retrieve your changes with other stash commands. Before running `git filter-repo`, we recommend unstashing any changes you've made. 要取消储藏您已储藏的上一组更改，请运行 `git stash show -p | git apply -R`。 For more information, see [Git Tools - Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

To illustrate how `git filter-repo` works, we'll show you how to remove your file with sensitive data from the history of your repository and add it to `.gitignore` to ensure that it is not accidentally re-committed.

1. Install the latest release of the [git filter-repo](https://github.com/newren/git-filter-repo) tool. You can install `git-filter-repo` manually or by using a package manager. For example, to install the tool with HomeBrew, use the `brew install` command.
  ```
  brew install git-filter-repo
  ```
  For more information, see [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) in the `newren/git-filter-repo` repository.

2. 如果其历史记录中没有包含敏感数据仓库的本地副本，则[克隆仓库](/articles/cloning-a-repository/)到本地计算机。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. 导航到仓库的工作目录。
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. 运行以下命令，将 `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` 替换为**您要删除的文件的路径，而不仅仅是其文件名**。 这些参数将：
    - 强制 Git 处理但不检出每个分支和标记的完整历史记录
    - 删除指定的文件，以及因此生成的任何空提交
    - Remove some configurations, such as the remote URL, stored in the *.git/config* file. You may want to back up this file in advance for restoration later.
    - **覆盖现有的标记**
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

  **注：**如果含有敏感数据的文件曾经存在于任何其他路径中（因为它已被移动或重命名），则也必须在这些路径上运行此命令。

  {% endnote %}

5. 将含有敏感数据的文件添加到 `.gitignore` 以确保不会再次意外提交它。

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. 仔细检查您是否已从仓库历史记录中删除所需的所有内容，并且所有分支均已检出。
7. 对仓库的状态感到满意后，强制推送本地更改以覆盖 {% data variables.product.product_name %} 仓库，以及您已向上推送的所有分支：
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
8. 要从[标记的发行版](/articles/about-releases)删除敏感文件，您还需要强制推送 Git 标记：
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

## Fully removing the data from {% data variables.product.prodname_dotcom %}

After using either the BFG tool or `git filter-repo` to remove the sensitive data and pushing your changes to {% data variables.product.product_name %}, you must take a few more steps to fully remove the data from {% data variables.product.product_name %}.

1. 联系 {% data variables.contact.contact_support %}，请求他们删除 {% data variables.product.product_name %} 上拉取请求中敏感数据的缓存视图和引用。 Please provide the name of the repository and/or a link to the commit you need removed.

2. 告知协作者[变基](https://git-scm.com/book/en/Git-Branching-Rebasing)而*不是*合并他们从旧的（污染的） 仓库历史记录创建的任何分支。 一次合并提交可能会重新引入您刚刚遇到清除问题的部分或全部污染的历史记录。

3. After some time has passed and you're confident that the BFG tool / `git filter-repo` had no unintended side effects, you can force all objects in your local repository to be dereferenced and garbage collected with the following commands (using Git 1.8.5 or newer):
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

   **注：**您也可以通过以下方法实现此目的：将过滤的历史记录推送到新的或空的仓库，然后从 {% data variables.product.product_name %} 进行全新克隆。

  {% endnote %}

## 避免将来的意外提交

有一些简单的技巧可避免提交您不想要提交的内容：

- 使用如 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 或 [gitk](https://git-scm.com/docs/gitk) 之类的可视程序提交更改。 可视程序通常可以更容易地查看每次提交时将添加、删除和修改具体哪些文件。
- 避免在命令行中使用全部捕获命令 `git add .` 和 `git commit -a` — 使用 `git add filename` 和 `git rm filename` 逐个暂存文件。
- 使用 `git add --interactive` 逐个查看和暂存每个文件中的更改。
- 使用 `git diff --cached` 查看您为提交暂存的更改。 只要不使用 `-a` 标志，这就是 `git commit` 将产生的确切差异。

## 延伸阅读

- [`git filter-repo` man page](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: Git Tools - Rewriting History](https://git-scm.com/book/en/Git-Tools-Rewriting-History){% ifversion fpt or ghae or ghes > 2.22 %}
- "[About Secret scanning](/code-security/secret-security/about-secret-scanning)"{% endif %}
