---
title: 从仓库中删除敏感数据
intro: 如果将敏感数据（例如密码或 SSH 密钥）提交到 Git 仓库，您可以将其从历史记录中删除。 要从仓库的历史记录中彻底删除不需要的文件，您可以使用 `git filter-branch` 命令或 BFG Repo-Cleaner 开源工具。
redirect_from:
  - /remove-sensitive-data/
  - /removing-sensitive-data/
  - /articles/remove-sensitive-data/
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
`git filter-branch` 命令和 BFG Repo-Cleaner 可重写仓库的历史记录，从而更改您所更改的现有提交以及任何依赖提交的 SHA。 更改的提交 SHA 可能会影响仓库中的打开拉取请求。 我们建议在从仓库中删除文件之前合并或关闭所有打开的拉取请求。

您可以使用 `git rm` 从最新提交中删除该文件。 有关删除使用最新提交添加的文件的信息，请参阅“[从仓库的历史记录中删除文件](/articles/removing-files-from-a-repository-s-history)”。

{% warning %}

**警告：将提交推送到 {% data variables.product.product_name %} 后，应考虑其包含的任何数据都将受到影响。**如果您提交了密码，请更改密码！ 如果您提交了密钥，请生成新密钥。

本文将告知您如何使含有敏感数据的提交从 {% data variables.product.product_name %} 仓库中的任何分支或标记均无法访问。 但需要注意的是，这些提交在您仓库的任何克隆或复刻中、直接通过 {% data variables.product.product_name %} 上缓存视图中其 SHA-1 哈希以及通过引用它们的任何拉取请求可能仍然可访问。 您无法对仓库的现有克隆或复刻进行任何操作，但您可以通过联系 {% data variables.contact.contact_support %}，永久删除 {% data variables.product.product_name %} 上拉取请求中敏感数据的缓存视图和引用。

{% endwarning %}

### 从仓库的历史记录中清除文件

#### 使用 BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) 是一种由开源社区构建和维护的工具。 它提供一种更快、更简单的 `git filter-branch` 替代方法，用于删除不需要的数据。 例如，要删除包含敏感数据的文件并保持最新提交不变，请运行：

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

#### 使用 filter-branch

{% warning %}

**警告：**如果您在储藏更改后运行 `git filter-branch`，则无法使用其他 stash 命令检索您的更改。 运行 `git filter-branch` 之前，我们建议取消储藏您进行的任何更改。 要取消储藏您已储藏的上一组更改，请运行 `git stash show -p | git apply -R`。 更多信息请参阅 [Git 工具储藏](https://git-scm.com/book/en/v1/Git-Tools-Stashing)。

{% endwarning %}

为说明 `git filter-branch` 的工作方式，我们将向您展示如何从仓库的历史记录中删除含有敏感数据的文件，然后将其添加到 `.gitignore` 以确保不会意外重新提交。

1. 如果其历史记录中没有包含敏感数据仓库的本地副本，则[克隆仓库](/articles/cloning-a-repository/)到本地计算机。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
2. 导航到仓库的工作目录。
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
3. 运行以下命令，将 `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` 替换为**您要删除的文件的路径，而不仅仅是其文件名**。 这些参数将：
    - 强制 Git 处理但不检出每个分支和标记的完整历史记录
    - 删除指定的文件，以及因此生成的任何空提交
    - **覆盖现有的标记**
        ```shell
        $ git filter-branch --force --index-filter \
        "git rm --cached --ignore-unmatch <em>PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA</em>" \
        --prune-empty --tag-name-filter cat -- --all
        > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (266/266)
        > Ref 'refs/heads/main' was rewritten
        ```

  {% note %}

  **注：**如果含有敏感数据的文件曾经存在于任何其他路径中（因为它已被移动或重命名），则也必须在这些路径上运行此命令。

  {% endnote %}

4. 将含有敏感数据的文件添加到 `.gitignore` 以确保不会再次意外提交它。

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
5. 仔细检查您是否已从仓库历史记录中删除所需的所有内容，并且所有分支均已检出。
6. 对仓库的状态感到满意后，强制推送本地更改以覆盖 {% data variables.product.product_name %} 仓库，以及您已向上推送的所有分支：
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
7. 要从[标记的发行版](/articles/about-releases)删除敏感文件，您还需要强制推送 Git 标记：
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
8. 联系 {% data variables.contact.contact_support %}，请求他们删除 {% data variables.product.product_name %} 上拉取请求中敏感数据的缓存视图和引用。
9. 告知协作者[变基](https://git-scm.com/book/en/Git-Branching-Rebasing)而*不是*合并他们从旧的（污染的） 仓库历史记录创建的任何分支。 一次合并提交可能会重新引入您刚刚遇到清除问题的部分或全部污染的历史记录。
10. 经过一段时间并且您确信 `git filter-branch` 没有任何意外的副作用后，您可以通过以下命令（使用 Git 1.8.5 或更新版本）强制取消引用本地仓库中的所有对象并进行垃圾回收：
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

### 避免将来的意外提交

有一些简单的技巧可避免提交您不想要提交的内容：

- 使用如 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 或 [gitk](https://git-scm.com/docs/gitk) 之类的可视程序提交更改。 可视程序通常可以更容易地查看每次提交时将添加、删除和修改具体哪些文件。
- 避免在命令行中使用全部捕获命令 `git add .` 和 `git commit -a` — 使用 `git add filename` 和 `git rm filename` 逐个暂存文件。
- 使用 `git add --interactive` 逐个查看和暂存每个文件中的更改。
- 使用 `git diff --cached` 查看您为提交暂存的更改。 只要不使用 `-a` 标志，这就是 `git commit` 将产生的确切差异。

### 延伸阅读

- [`git filter-branch` 手册页](https://git-scm.com/docs/git-filter-branch)
- [Pro Git：Git 工具 - 重写历史记录](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
